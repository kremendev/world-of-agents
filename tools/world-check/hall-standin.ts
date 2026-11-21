// A stand-in hall for the world checks that need Live (T, 21 Nov: the accessibility scan's states): one folder, the
// bundled hall's page, with the hall's own header policy, an /api/health that answers, and /api/events, which replays
// what it holds, ends the replay with a start id and then sends what POST /ctl gives it ({ reset?, events? }). The
// page checks every event itself (parseEvent()); this sends them as given. On 127.0.0.1 only and never port 4319,
// where a real hall may run; it reads nothing but the folder it is given and writes nothing.
//
//   npx tsx tools/world-check/hall-standin.ts <root> <port>      (root: plugin/hall/page after npm run build:plugin-hall)
import { createServer, type ServerResponse } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, resolve, sep } from 'node:path';
import { HALL_CSP } from '../../server/csp.ts';
import { VERSION } from '../../src/version.ts';

const [rootArg, portArg] = process.argv.slice(2);
const port = Number(portArg);
if (!rootArg || !Number.isInteger(port) || port === 4319) {
  console.error('usage: npx tsx hall-standin.ts <root> <port, not 4319>');
  process.exit(2);
}
const root = resolve(rootArg);
const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.glb': 'model/gltf-binary',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.jpg': 'image/jpeg',
};
const SAFE = { 'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': HALL_CSP };
const START = 'standin-start-01';
// a cap, so a check that loops can't fill the memory
const MAX_EVENTS = 500;
let events: unknown[] = [];
const streams = new Set<ServerResponse>();
const send = (res: ServerResponse, e: unknown) => res.write(`data: ${JSON.stringify(e)}\n\n`);

createServer((req, res) => {
  const path = new URL(req.url ?? '/', 'http://127.0.0.1').pathname;
  if (path === '/api/health') {
    res.writeHead(200, { ...SAFE, 'Content-Type': 'application/json' });
    return void res.end(JSON.stringify({ ok: true, version: VERSION }));
  }
  if (path === '/api/events') {
    res.writeHead(200, { ...SAFE, 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store' });
    for (const e of events) send(res, e);
    res.write(`event: replayed\ndata: ${START}\n\n`);
    streams.add(res);
    req.on('close', () => streams.delete(res));
    return;
  }
  if (path === '/ctl' && req.method === 'POST') {
    let body = '';
    req.setEncoding('utf8');
    req.on('data', (d: string) => {
      body += d;
      if (body.length > 256 * 1024) req.destroy();
    });
    req.on('end', () => {
      try {
        const ask = JSON.parse(body) as { reset?: boolean; events?: unknown[] };
        if (ask.reset) events = [];
        for (const e of ask.events ?? []) {
          if (events.length >= MAX_EVENTS) break;
          events.push(e);
          for (const s of streams) send(s, e);
        }
        res.writeHead(204).end();
      } catch {
        res.writeHead(400).end();
      }
    });
    return;
  }
  // the page's files, nothing outside the folder
  let rel: string;
  try {
    rel = path === '/' ? 'index.html' : decodeURIComponent(path);
  } catch {
    return void res.writeHead(400).end();
  }
  const file = resolve(join(root, rel));
  if (!file.startsWith(root + sep) || !existsSync(file) || statSync(file).isDirectory()) {
    return void res.writeHead(404).end();
  }
  res.writeHead(200, { ...SAFE, 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
  res.end(readFileSync(file));
}).listen(port, '127.0.0.1', () => console.log(`stand-in hall: ${root} on http://127.0.0.1:${port}/`));
