// Chequeo de links internos sobre el build (dist/).
// Recorre cada .html, junta href/src/srcset internos y verifica que el
// archivo destino exista, resolviendo igual que GitHub Pages:
//   /es/pages/about      -> about.html
//   /carpeta/            -> carpeta/index.html
// Los links externos no se chequean (lentos y flaky en CI).
// Uso: node scripts/check-links.mjs [dist]

import { readdir, readFile, stat } from 'node:fs/promises';
import { join, dirname, posix } from 'node:path';

const root = process.argv[2] ?? 'dist';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)])),
  );
  return files.flat();
}

async function exists(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

async function resolves(urlPath) {
  const clean = decodeURIComponent(urlPath);
  const base = join(root, clean);
  if (clean.endsWith('/')) return exists(join(base, 'index.html'));
  return (await exists(base)) || (await exists(`${base}.html`)) || (await exists(join(base, 'index.html')));
}

const ATTR = /\s(?:href|src)="([^"]*)"|\ssrcset="([^"]*)"/g;
const files = (await walk(root)).filter((f) => f.endsWith('.html'));
const broken = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const pagePath = '/' + file.slice(root.length + 1).replaceAll('\\', '/');
  const urls = [];
  for (const m of html.matchAll(ATTR)) {
    if (m[1] !== undefined) urls.push(m[1]);
    else urls.push(...m[2].split(',').map((part) => part.trim().split(/\s+/)[0]));
  }
  for (const raw of urls) {
    if (!raw || /^(?:[a-z]+:|\/\/|#)/i.test(raw)) continue; // externos, mailto:, anclas
    const path = raw.split(/[?#]/)[0];
    if (!path) continue;
    const absolute = path.startsWith('/') ? path : posix.join(dirname(pagePath), path);
    if (!(await resolves(absolute))) broken.push(`${pagePath} -> ${raw}`);
  }
}

if (broken.length > 0) {
  console.error(`Links internos rotos (${broken.length}):`);
  for (const b of [...new Set(broken)]) console.error(`  ${b}`);
  process.exit(1);
}
console.log(`OK: ${files.length} páginas, sin links internos rotos.`);
