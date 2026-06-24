import { markdownToMdast } from 'satteri';
import { readdir, readFile, writeFile, rename, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, basename } from 'path';

const PUBLIC = 'public';
const CONTENT_DOCS = 'src/content/docs/archived';

function collectImageUrls(node, urls = []) {
  if (node.type === 'image') urls.push(node.url);
  for (const child of node.children ?? []) collectImageUrls(child, urls);
  return urls;
}

// Resolve an image URL from the markdown to a path under public/
// Handles both /images/... and images/... formats
function toPublicPath(url) {
  const stripped = url.startsWith('/') ? url.slice(1) : url;
  return join(PUBLIC, stripped);
}

async function processFile(docName) {
  const mdPath = join(CONTENT_DOCS, docName, 'index.md');
  const imgDir = join(CONTENT_DOCS, docName, 'img');

  const content = await readFile(mdPath, 'utf-8');
  const ast = markdownToMdast(content);
  const imageUrls = [...new Set(collectImageUrls(ast))];

  let moved = 0;
  let warned = 0;
  const movedUrls = [];

  for (const url of imageUrls) {
    // Skip external URLs and data URIs
    if (url.startsWith('http') || url.startsWith('data:')) continue;

    const publicPath = toPublicPath(url);
    if (!existsSync(publicPath)) {
      console.warn(`  [WARN] ${docName}: image not found: ${publicPath}`);
      warned++;
      continue;
    }

    await mkdir(imgDir, { recursive: true });
    await rename(publicPath, join(imgDir, basename(url)));
    movedUrls.push(url);
    moved++;
  }

  let updated = content;
  for (const url of movedUrls) {
    updated = updated.replaceAll(url, `img/${basename(url)}`);
  }
  await writeFile(mdPath, updated, 'utf-8');

  return { moved, warned };
}

async function main() {
  const entries = await readdir(CONTENT_DOCS, { withFileTypes: true });
  const docDirs = entries
    .filter((e) => e.isDirectory() && e.name !== 'archived')
    .map((e) => e.name);

  console.log(`Processing ${docDirs.length} docs...\n`);

  let totalFiles = 0;
  let totalImages = 0;
  let totalWarnings = 0;

  for (const docName of docDirs) {
    process.stdout.write(`${docName}...`);
    const { moved, warned } = await processFile(docName);
    process.stdout.write(` ${moved} image(s) moved${warned ? `, ${warned} warning(s)` : ''}\n`);
    totalFiles++;
    totalImages += moved;
    totalWarnings += warned;
  }

  console.log(`\nDone. ${totalFiles} docs, ${totalImages} images moved, ${totalWarnings} warnings.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
