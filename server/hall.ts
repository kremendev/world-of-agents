import { createHash, timingSafeEqual } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { createServer, type IncomingMessage, type Server, type ServerResponse } from 'node:http';
import type { AddressInfo } from 'node:net';
import { extname, resolve, sep } from 'node:path';
import type { OfficeEvent } from '../src/events/schema';
import { hookInputSchema } from './hook-input';
import { INITIAL_MAP, mapHook } from './map';

/** The hall only ever listens on this machine. */
export const HOST = '127.0.0.1';
export const PORT = 4319;
/** A hook post is a few hundred bytes. Anything over this is not from send.mjs. */
export const MAX_BODY = 64 * 1024;
/** How many past events a page gets when it connects. */
export const REPLAY = 500;

/** Every response: never cached, never sniffed into another type. No CORS headers, ever. */
const BASE_HEADERS = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };

/** The kinds of file the built page is made of. Anything else in dist/ is not served. */
const PAGE_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

export type Hall = { server: Server; close: () => Promise<void> };

const digest = (text: string) => createHash('sha256').update(text).digest();

/** JSON can't hold a raw line break, so one event is always one `data:` line. */
const frame = (event: OfficeEvent) => `data: ${JSON.stringify(event)}\n\n`;

function reply(res: ServerResponse, status: number, body?: unknown): void {
  const json = body === undefined ? undefined : JSON.stringify(body);
  res.writeHead(status, {
    ...BASE_HEADERS,
    ...(json === undefined ? {} : { 'Content-Type': 'application/json' }),
  });
  res.end(json);
}

/** The body as text, or null when it is over MAX_BODY. It is read to the end either way, so the reply arrives. */
function readBody(req: IncomingMessage): Promise<string | null> {
  return new Promise((done, fail) => {
    const chunks: Buffer[] = [];
    let size = 0;
    req.on('data', (chunk: Buffer) => {
      size += chunk.length;
      if (size <= MAX_BODY) chunks.push(chunk);
    });
    req.on('end', () => done(size > MAX_BODY ? null : Buffer.concat(chunks).toString('utf8')));
    req.on('error', fail);
  });
}

const isJson = (type: string | undefined) => type?.split(';')[0]?.trim().toLowerCase() === 'application/json';

/**
 * The hall server: POST /api/hook (from send.mjs), GET /api/events (Server-Sent Events for the page),
 * GET /api/health, and the built page from `dist`. Events live in memory only; it starts and runs nothing.
 * `port` is the one the Host check expects. listen() binds it; tests listen anywhere and send that Host.
 */
export function createHall({
  token,
  port = PORT,
  dist,
}: {
  token: string;
  port?: number;
  dist?: string;
}): Hall {
  const hosts = new Set([`127.0.0.1:${port}`, `localhost:${port}`]);
  const expected = digest(token);
  const startedAt = performance.now();
  const pages = new Set<ServerResponse>();
  let map = INITIAL_MAP;
  let replay: OfficeEvent[] = [];

  function publish(events: readonly OfficeEvent[]): void {
    for (const event of events) {
      // A reset starts a new run, so a page that connects later doesn't replay the old one first.
      replay = event.type === 'reset' ? [event] : [...replay, event].slice(-REPLAY);
      for (const page of pages) page.write(frame(event));
    }
  }

  function authorized(header: string | undefined): boolean {
    const sent = /^Bearer ([A-Za-z0-9_-]+)$/.exec(header ?? '')?.[1];
    // Hashing both sides gives timingSafeEqual two buffers of the same length, whatever was sent.
    return sent !== undefined && timingSafeEqual(digest(sent), expected);
  }

  async function hook(req: IncomingMessage, res: ServerResponse): Promise<void> {
    // Browsers send Origin with every POST and send.mjs never does: a web page has no business here.
    if (req.headers.origin !== undefined) return reply(res, 403);
    if (!authorized(req.headers.authorization)) return reply(res, 401);
    if (!isJson(req.headers['content-type'])) return reply(res, 415);
    const body = await readBody(req);
    if (body === null) return reply(res, 413);
    let json: unknown;
    try {
      json = JSON.parse(body);
    } catch {
      return reply(res, 400);
    }
    const input = hookInputSchema.safeParse(json);
    if (!input.success) return reply(res, 400);
    const result = mapHook(map, input.data, Math.round(performance.now() - startedAt));
    map = result.state;
    publish(result.events);
    reply(res, 204); // no body: send.mjs throws any reply away, and there must be nothing to steer Claude Code
  }

  function events(req: IncomingMessage, res: ServerResponse): void {
    res.writeHead(200, { ...BASE_HEADERS, 'Content-Type': 'text/event-stream; charset=utf-8' });
    res.flushHeaders();
    // Everything since the last reset, then each new event as it comes: a page that (re)connects rebuilds
    // its office from a clean one.
    if (replay.length > 0) res.write(replay.map(frame).join(''));
    pages.add(res);
    req.on('close', () => pages.delete(res));
  }

  async function page(path: string, method: string, res: ServerResponse): Promise<void> {
    if (!dist) return reply(res, 404);
    const root = resolve(dist);
    let file: string;
    try {
      file = resolve(root, `.${decodeURIComponent(path === '/' ? '/index.html' : path)}`);
    } catch {
      return reply(res, 400);
    }
    const type = PAGE_TYPES[extname(file).toLowerCase()];
    // Only files inside dist/ (no "..", encoded or not), and only the kinds the page is made of.
    if (!type || !file.startsWith(root + sep)) return reply(res, 404);
    let body: Buffer;
    try {
      body = await readFile(file);
    } catch {
      return reply(res, 404);
    }
    res.writeHead(200, { ...BASE_HEADERS, 'Content-Type': type, 'Content-Length': body.length });
    res.end(method === 'HEAD' ? undefined : body);
  }

  async function handle(req: IncomingMessage, res: ServerResponse): Promise<void> {
    // DNS rebinding: a site that points its own name at 127.0.0.1 still sends its own name as the Host.
    if (!hosts.has(req.headers.host?.toLowerCase() ?? '')) return reply(res, 403);
    const path = new URL(req.url ?? '/', 'http://hall').pathname;
    const method = req.method ?? '';
    if (path === '/api/hook') return method === 'POST' ? hook(req, res) : reply(res, 405);
    if (path === '/api/events') return method === 'GET' ? events(req, res) : reply(res, 405);
    if (path === '/api/health') return method === 'GET' ? reply(res, 200, { ok: true }) : reply(res, 405);
    if (method === 'GET' || method === 'HEAD') return page(path, method, res);
    return reply(res, 405);
  }

  const server = createServer((req, res) => {
    // Nothing is logged: an error could quote a payload.
    handle(req, res).catch(() => (res.headersSent ? res.destroy() : reply(res, 500)));
  });

  return {
    server,
    close: () =>
      new Promise((done) => {
        for (const page of pages) page.end();
        server.close(() => done());
        server.closeAllConnections();
      }),
  };
}

/** Binds the hall to 127.0.0.1 only, so nothing else on the network can reach it. */
export function listen(hall: Hall, port = PORT): Promise<AddressInfo> {
  return new Promise((done, fail) => {
    hall.server.once('error', fail);
    hall.server.listen(port, HOST, () => {
      hall.server.off('error', fail);
      done(hall.server.address() as AddressInfo);
    });
  });
}
