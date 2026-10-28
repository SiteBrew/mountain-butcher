/*
 * Injects the server-rendered markup into dist/index.html after `vite build`.
 * Single-page site, so there is exactly one route to do this for.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const FILE = path.join(DIST, 'index.html');
const ROOT_DIV = '<div id="root"></div>';

if (!fs.existsSync(FILE)) {
  console.error('[prerender] dist/index.html missing — run vite build first.');
  process.exit(1);
}

const { render } = await import(path.join(ROOT, 'dist-ssr/entry-server.js'));
let html = fs.readFileSync(FILE, 'utf8');

if (!html.includes(ROOT_DIV)) {
  console.error(`[prerender] ${ROOT_DIV} not found — did the template change?`);
  process.exit(1);
}

let markup;
try {
  markup = render();
} catch (err) {
  console.error('[prerender] render failed:', err.message);
  process.exit(1);
}

html = html.replace(ROOT_DIV, `<div id="root">${markup}</div>`);
fs.writeFileSync(FILE, html, 'utf8');

const text = markup.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
console.log(`[prerender] body rendered — ${text.split(' ').length} words of real HTML.`);
