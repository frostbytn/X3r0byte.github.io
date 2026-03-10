import { cp, mkdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const distDir = path.join(repoRoot, 'dist');

const replaceAtRoot = [
  '_astro',
  'blog',
  'platform-modernization',
  'staff-principal-software-architect',
  'favicon.svg',
  'index.html',
  'og-card.png',
  'og-card.svg',
  'resume.pdf',
  'robots.txt',
  'rss.xml',
  'site.webmanifest',
  'sitemap-0.xml',
  'sitemap-index.xml'
];

await ensureDirectory(distDir);

for (const entry of replaceAtRoot) {
  await rm(path.join(repoRoot, entry), { recursive: true, force: true });
}

await cp(distDir, repoRoot, {
  recursive: true,
  force: true,
  errorOnExist: false
});

await writeFile(path.join(repoRoot, '.nojekyll'), '');

async function ensureDirectory(dirPath) {
  const info = await stat(dirPath).catch(() => null);

  if (!info?.isDirectory()) {
    throw new Error(`Expected build output at ${dirPath}. Run the Astro build before syncing Pages root.`);
  }

  await mkdir(dirPath, { recursive: true });
}