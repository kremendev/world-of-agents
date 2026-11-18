// A static server for the world checks, on 127.0.0.1 only: one folder under a base path, sent with the hall's own
// header policy (HALL_CSP from server/csp.ts) or with none, the control. Never port 4319, where a real hall may run.
//
//   npx tsx tools/world-check/serve.ts <root> <port> <header|none> [base]
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, resolve, sep } from 'node:path';
import { HALL_CSP } from '../../server/csp.ts';

const [rootArg, portArg, mode, base = '/'] = process.argv.slice(2);
const port = Number(portArg);
if (!rootArg || !Number.isInteger(port) || port === 4319 || (mode !== 'header' && mode !== 'none')) {
  console.error('usage: npx tsx serve.ts <root> <port, not 4319> <header|none> [base]');
  process.exit(2);
}
const root = resolve(rootArg);
const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.glb': 'model/gltf-binary',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

createServer((req, res) => {
  let path: string;
  try {
    path = decodeURIComponent(new URL(req.url ?? '/', 'http://127.0.0.1').pathname);
  } catch {
    return void res.writeHead(400).end();
  }
  if (!path.startsWith(base)) return void res.writeHead(404).end();
  path = '/' + path.slice(base.length);
  if (path.endsWith('/')) path += 'index.html';
  const file = resolve(join(root, path));
  // nothing outside the folder it was given
  if (!file.startsWith(root + sep) || !existsSync(file) || statSync(file).isDirectory()) {
    return void res.writeHead(404).end();
  }
  const headers: Record<string, string> = {
    'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
  };
  if (mode === 'header') headers['Content-Security-Policy'] = HALL_CSP;
  res.writeHead(200, headers).end(readFileSync(file));
}).listen(port, '127.0.0.1', () => console.log(`serving ${root} on ${port}, policy ${mode}, base ${base}`));
