import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ttf': 'font/ttf',
};

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const target = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));

  if (!target.startsWith(root + sep)) {
    response.writeHead(403).end();
    return;
  }

  try {
    const file = await readFile(target);
    response.writeHead(200, { 'Content-Type': mimeTypes[extname(target)] || 'application/octet-stream' }).end(file);
  } catch {
    response.writeHead(404).end();
  }
}).listen(4173, '127.0.0.1', () => {
  console.log('Bushido disponível em http://127.0.0.1:4173');
});
