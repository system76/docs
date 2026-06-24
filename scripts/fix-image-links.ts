import { markdownToMdast } from 'satteri';
import { readFile, writeFile, readdir } from 'fs/promises';
import { join, basename } from 'path';

interface Position {
  start: { line: number; column: number; offset: number };
  end: { line: number; column: number; offset: number };
}

interface MdastNode {
  type: string;
  url?: string;
  position?: Position;
  children?: MdastNode[];
}

interface Replacement {
  start: number;
  end: number;
  newUrl: string;
}

const URL_PATTERN = /^\/?(images?)\//;

function collectUrlNodes(node: MdastNode, results: MdastNode[] = []): MdastNode[] {
  if ((node.type === 'image' || node.type === 'link') && node.url && URL_PATTERN.test(node.url)) {
    results.push(node);
  }
  for (const child of node.children ?? []) collectUrlNodes(child, results);
  return results;
}

async function processFile(
  filePath: string,
  write: boolean
): Promise<{ changed: boolean; rewrites: number; warnings: number }> {
  const original = await readFile(filePath, 'utf-8');
  let content = original;

  const ast = markdownToMdast(content) as MdastNode;
  const nodes = collectUrlNodes(ast);

  const replacements: Replacement[] = [];
  let warnings = 0;

  for (const node of nodes) {
    const url = node.url!;

    if (!node.position) {
      console.warn(`  [WARN] ${filePath}: node has no position (url="${url}")`);
      warnings++;
      continue;
    }

    const nodeText = content.slice(node.position.start.offset, node.position.end.offset);
    const localIndex = nodeText.indexOf(url);

    if (localIndex === -1) {
      console.warn(`  [WARN] ${filePath}: could not locate url in source span (url="${url}")`);
      warnings++;
      continue;
    }

    const absStart = node.position.start.offset + localIndex;
    const absEnd = absStart + url.length;
    const newUrl = `img/${basename(url)}`;

    replacements.push({ start: absStart, end: absEnd, newUrl });
  }

  // Work from end of file backward so earlier offsets stay valid after each splice
  replacements.sort((a, b) => b.start - a.start);

  for (const { start, end, newUrl } of replacements) {
    content = content.slice(0, start) + newUrl + content.slice(end);
  }

  const changed = content !== original;

  if (changed && write) {
    await writeFile(filePath, content, 'utf-8');
  }

  return { changed, rewrites: replacements.length, warnings };
}

async function collectMarkdownFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && (e.name.endsWith('.md') || e.name.endsWith('.mdx')))
    .map((e) => join(e.parentPath, e.name));
}

async function main() {
  const args = process.argv.slice(2);
  const write = args.includes('--write');
  const pathIndex = args.indexOf('--path');
  const docsDir = pathIndex !== -1 ? args[pathIndex + 1] : 'src/content/docs';

  const files = await collectMarkdownFiles(docsDir);
  console.log(`Scanning ${files.length} files in ${docsDir} (${write ? 'write' : 'dry-run'} mode)\n`);

  let totalChanged = 0;
  let totalRewrites = 0;
  let totalWarnings = 0;

  for (const file of files) {
    const { changed, rewrites, warnings } = await processFile(file, write);

    if (changed || warnings > 0) {
      const parts: string[] = [];
      if (rewrites > 0) parts.push(`${rewrites} rewrite(s)`);
      if (warnings > 0) parts.push(`${warnings} warning(s)`);
      const action = changed ? (write ? '[written]' : '[would change]') : '[unchanged]';
      console.log(`${action} ${file} — ${parts.join(', ')}`);
    }

    if (changed) totalChanged++;
    totalRewrites += rewrites;
    totalWarnings += warnings;
  }

  console.log(
    `\nDone. ${totalChanged}/${files.length} files ${write ? 'written' : 'would change'}, ` +
      `${totalRewrites} URL(s) rewritten, ${totalWarnings} warning(s).`
  );

  if (!write && totalChanged > 0) {
    console.log('Re-run with --write to apply changes.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
