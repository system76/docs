import { readdir, rename, mkdir } from 'fs/promises';
import { join, basename, extname } from 'path';

const CONTENT_DOCS = 'src/content/docs/archived';

async function main() {
  const entries = await readdir(CONTENT_DOCS, { withFileTypes: true });
  const mdFiles = entries
    .filter((e) => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
    .map((e) => e.name);

  console.log(`Folding ${mdFiles.length} markdown files...\n`);

  for (const filename of mdFiles) {
    const docName = basename(filename, extname(filename));
    const srcPath = join(CONTENT_DOCS, filename);
    const outDir = join(CONTENT_DOCS, docName);
    const destPath = join(outDir, 'index.md');

    await mkdir(outDir, { recursive: true });
    await rename(srcPath, destPath);
    console.log(`  ${filename} -> ${docName}/index.md`);
  }

  console.log(`\nDone. ${mdFiles.length} files folded.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
