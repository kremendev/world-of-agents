import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { createServer, type IncomingMessage, type Server, type ServerResponse } from 'node:http';
import type { AddressInfo } from 'node:net';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { applyChange, logChange, readTeam, readTexts, teamDir, writeTeam } from '../plugin/team/team.mjs';
import { ledgerSchema, type LedgerTotals, type OfficeEvent } from '../src/events/schema';
import { VERSION } from '../src/version';
import { keyBodySchema, teamChangeSchema, type TeamChange, type TeamView } from '../src/team/schema';
import { HALL_CSP } from './csp';
import { hookInputSchema } from './hook-input';
import { createKeys, sessionCookie } from './keys';
import { INITIAL_MAP, mapHook } from './map';
import type { Page } from './page';

/** The hall only ever listens on this machine. */
export const HOST = '127.0.0.1';
export const PORT = 4319;
/**
 * A hook post is a few hundred bytes, or up to 20,000 characters more with an agent's last message. Its JSON can be
 * six bytes a character (`\u0001`), about 160 KB at most with every other field full (a test builds it). Anything over
 * this is not from send.mjs.
 */
export const MAX_BODY = 256 * 1024;
/** The ledger's total is a few hundred bytes (v3.2). */
export const MAX_LEDGER_BODY = 4096;
/** A one-time key or the page's handing back of one: a few dozen bytes (v3.4c). */
export const MAX_KEY_BODY = 256;
/** One change to the team: a skill's text is at most 8,000 characters, four bytes each at most in UTF-8. */
export const MAX_TEAM_BODY = 64 * 1024;
/** How many past events a page gets when it connects. */
export const REPLAY = 500;
/** What send.mjs sends to the handshake: 32 random bytes as base64url. Anything else is not a handshake. */
const NONCE = /^[A-Za-z0-9_-]{43}$/;

/** Every response: never cached, never sniffed into another type, no referrer. No CORS headers, ever. */
const BASE_HEADERS = {
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'Content-Security-Policy': HALL_CSP,
};

export type Hall = { server: Server; close: () => Promise<void>; startId: string };

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

/** The body as text, or null when it is over `limit`. It is read to the end either way, so the reply arrives. */
function readBody(req: IncomingMessage, limit = MAX_BODY): Promise<string | null> {
  return new Promise((done, fail) => {
    const chunks: Buffer[] = [];
    let size = 0;
    req.on('data', (chunk: Buffer) => {
      size += chunk.length;
      if (size <= limit) chunks.push(chunk);
    });
    req.on('end', () => done(size > limit ? null : Buffer.concat(chunks).toString('utf8')));
    req.on('error', fail);
  });
}

const isJson = (type: string | undefined) => type?.split(';')[0]?.trim().toLowerCase() === 'application/json';

/**
 * The hall server: POST /api/handshake and POST /api/hook (from send.mjs), POST /api/ledger (from ledger-post.mjs),
 * POST /api/key (from hall-key.mjs), POST /api/session and GET and POST /api/team (the team editor, v3.4c), GET /api/events (Server-Sent Events for the
 * page), GET /api/health, and the built page: only the files `page` names. Events live in memory only; it starts and
 * runs nothing. `port` is the one the Host check expects. listen() binds it; tests listen anywhere and send that Host.
 * `version` is the plugin's (3.2d), which the handshake answer and /api/health state, so the team pane and the page can
 * tell this hall from another install's.
 */
export function createHall({
  token,
  port = PORT,
  page,
  version = VERSION,
  teamHome = homedir(),
  now = Date.now,
}: {
  token: string;
  port?: number;
  page?: Page;
  version?: string;
  /** The home folder whose ~/.world-of-agents/team the team editor reads and writes (v3.4c); tests give a temp one. */
  teamHome?: string;
  now?: () => number;
}): Hall {
  const hosts = new Set([`127.0.0.1:${port}`, `localhost:${port}`]);
  const expected = digest(token);
  const pages = new Set<ServerResponse>();
  // New at every start and sent after every replay: a page that reconnects to another one knows the hall restarted,
  // and that it remembers nothing of the run. It says nothing else, and it is no secret.
  const startId = randomBytes(12).toString('base64url');
  let map = INITIAL_MAP;
  let replay: OfficeEvent[] = [];
  // The ledger's latest total, in memory only: never part of the replay, and gone when the hall stops.
  let ledger: LedgerTotals | null = null;
  const ledgerFrame = (totals: LedgerTotals) => `event: ledger\ndata: ${JSON.stringify(totals)}\n\n`;
  // The team editor's one-time keys and sessions (v3.4c), in memory only.
  const keys = createKeys(now);
  // One team write at a time: each reads the team the last one wrote.
  let writing: Promise<unknown> = Promise.resolve();

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

  /**
   * send.mjs asks this before it posts: only a hall that holds the token can answer HMAC-SHA256(token, nonce). It needs
   * no token of its own, because send.mjs won't send one until it has the answer, and the answer can't give the token away.
   */
  async function handshake(req: IncomingMessage, res: ServerResponse): Promise<void> {
    if (req.headers.origin !== undefined) return reply(res, 403);
    if (!isJson(req.headers['content-type'])) return reply(res, 415);
    const body = await readBody(req);
    if (body === null) return reply(res, 413);
    let nonce: unknown;
    try {
      nonce = (JSON.parse(body) as { nonce?: unknown } | null)?.nonce;
    } catch {
      return reply(res, 400);
    }
    if (typeof nonce !== 'string' || !NONCE.test(nonce)) return reply(res, 400);
    // The version is no secret, and it means something only next to an answer that proves the token (3.2d).
    reply(res, 200, { answer: createHmac('sha256', token).update(nonce).digest('base64url'), version });
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
    const result = mapHook(map, input.data, Date.now());
    map = result.state;
    publish(result.events);
    reply(res, 204); // no body: send.mjs throws any reply away, and there must be nothing to steer Claude Code
  }

  /**
   * ledger-post.mjs, after the Lead's turns: the token ledger's total on this PC (v3.2). Every control /api/hook has, and
   * a body cap of its own. It is kept in memory, sent to the open pages, and to each page that connects after its replay.
   */
  async function ledgerPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
    if (req.headers.origin !== undefined) return reply(res, 403);
    if (!authorized(req.headers.authorization)) return reply(res, 401);
    if (!isJson(req.headers['content-type'])) return reply(res, 415);
    const body = await readBody(req, MAX_LEDGER_BODY);
    if (body === null) return reply(res, 413);
    let json: unknown;
    try {
      json = JSON.parse(body);
    } catch {
      return reply(res, 400);
    }
    const totals = ledgerSchema.safeParse(json);
    if (!totals.success) return reply(res, 400);
    ledger = totals.data;
    for (const page of pages) page.write(ledgerFrame(ledger));
    reply(res, 204);
  }

  /** A request from the page itself: browsers send Origin with a POST, and it must be exactly this hall's own. */
  const fromPage = (req: IncomingMessage) =>
    req.headers.origin === `http://${req.headers.host?.toLowerCase() ?? ''}`;

  /** The body as JSON when it is JSON and under `limit`; else the reply is sent and undefined comes back. */
  async function jsonBody(req: IncomingMessage, res: ServerResponse, limit: number): Promise<unknown> {
    if (!isJson(req.headers['content-type'])) return reply(res, 415);
    const body = await readBody(req, limit);
    if (body === null) return reply(res, 413);
    try {
      return JSON.parse(body) as unknown;
    } catch {
      return reply(res, 400);
    }
  }

  /**
   * hall-key.mjs, when Dima presses "Change skills" in the pane (v3.4c, T8): a one-time key the mod made, with the token,
   * like a hook. Never from a page.
   */
  async function keyPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
    if (req.headers.origin !== undefined) return reply(res, 403);
    if (!authorized(req.headers.authorization)) return reply(res, 401);
    const json = await jsonBody(req, res, MAX_KEY_BODY);
    if (json === undefined) return;
    const body = keyBodySchema.safeParse(json);
    if (!body.success) return reply(res, 400);
    keys.add(body.data.key);
    reply(res, 204);
  }

  /** The page hands back the key from its link, once, within 60 seconds, for a session cookie. */
  async function sessionPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
    if (!fromPage(req)) return reply(res, 403);
    const json = await jsonBody(req, res, MAX_KEY_BODY);
    if (json === undefined) return;
    const body = keyBodySchema.safeParse(json);
    if (!body.success) return reply(res, 400);
    const exchanged = keys.exchange(body.data.key);
    if (!exchanged.ok) return reply(res, 403, { error: exchanged.why });
    res.writeHead(204, { ...BASE_HEADERS, 'Set-Cookie': sessionCookie(exchanged.session) });
    res.end();
  }

  /** The team and its skills' texts, as team.mjs reads them; null when there is no team or a file isn't as it wrote it. */
  function teamView(): TeamView | null {
    const team = readTeam(teamHome);
    if (team === null) return null;
    try {
      return { team, texts: readTexts(teamDir(teamHome), team) };
    } catch {
      return null;
    }
  }

  const NO_TEAM = {
    error: 'The team is missing or broken. Type /world-of-agents:setup-team in Claude Code.',
  };

  function teamGet(req: IncomingMessage, res: ServerResponse): void {
    if (!keys.allowed(req.headers.cookie)) return reply(res, 401);
    const view = teamView();
    reply(res, view === null ? 409 : 200, view ?? NO_TEAM);
  }

  /**
   * One change to the team's skills, from the page with a live session (v3.4c): every control above, the schema, then
   * team.mjs, which checks the result again and writes only inside the team folder. It starts nothing and runs nothing.
   */
  async function teamPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
    if (!fromPage(req)) return reply(res, 403);
    if (!keys.allowed(req.headers.cookie)) return reply(res, 401);
    const json = await jsonBody(req, res, MAX_TEAM_BODY);
    if (json === undefined) return;
    const change = teamChangeSchema.safeParse(json);
    if (!change.success) return reply(res, 400);
    const done = writing.then(() => applyToTeam(change.data));
    writing = done.catch(() => {});
    const { status, body } = await done;
    reply(res, status, body);
  }

  function applyToTeam(change: TeamChange): { status: number; body: unknown } {
    const view = teamView();
    if (view === null) return { status: 409, body: NO_TEAM };
    let next: ReturnType<typeof applyChange>;
    try {
      next = applyChange(view.team, view.texts, change, now());
    } catch (error) {
      // team.mjs's own fixed words, with checked ids at most.
      return { status: 409, body: { error: (error as Error).message } };
    }
    const dir = teamDir(teamHome);
    writeTeam(dir, next.team, next.texts);
    logChange(dir, next.entry);
    return { status: 200, body: { team: next.team, texts: next.texts } };
  }

  function events(req: IncomingMessage, res: ServerResponse): void {
    res.writeHead(200, { ...BASE_HEADERS, 'Content-Type': 'text/event-stream; charset=utf-8' });
    res.flushHeaders();
    // Everything since the last reset, then each new event as it comes: a page that (re)connects rebuilds
    // its office from a clean one. A named event marks the end of the replay, so it can do that in one go;
    // it is not a `message`, and it carries only the hall's start id.
    res.write(
      `${replay.map(frame).join('')}event: replayed\ndata: ${startId}\n\n${ledger ? ledgerFrame(ledger) : ''}`,
    );
    pages.add(res);
    req.on('close', () => pages.delete(res));
  }

  async function servePage(path: string, method: string, res: ServerResponse): Promise<void> {
    // Only a file the page lists, by exact match. The URL is only ever looked up, never decoded or joined into a
    // path: the file read is the list's own entry, so "..", encoded or not, can't reach outside the page folder.
    const listed = path === '/' ? '/index.html' : path;
    const type = page?.files.get(listed);
    if (!page || type === undefined) return reply(res, 404);
    let body: Buffer;
    try {
      body = await readFile(join(page.dir, listed));
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
    if (path === '/api/handshake') return method === 'POST' ? handshake(req, res) : reply(res, 405);
    if (path === '/api/hook') return method === 'POST' ? hook(req, res) : reply(res, 405);
    if (path === '/api/ledger') return method === 'POST' ? ledgerPost(req, res) : reply(res, 405);
    if (path === '/api/key') return method === 'POST' ? keyPost(req, res) : reply(res, 405);
    if (path === '/api/session') return method === 'POST' ? sessionPost(req, res) : reply(res, 405);
    if (path === '/api/team') {
      if (method === 'GET') return teamGet(req, res);
      return method === 'POST' ? teamPost(req, res) : reply(res, 405);
    }
    if (path === '/api/events') return method === 'GET' ? events(req, res) : reply(res, 405);
    if (path === '/api/health')
      return method === 'GET' ? reply(res, 200, { ok: true, version }) : reply(res, 405);
    if (method === 'GET' || method === 'HEAD') return servePage(path, method, res);
    return reply(res, 405);
  }

  const server = createServer((req, res) => {
    // Nothing is logged: an error could quote a payload.
    handle(req, res).catch(() => (res.headersSent ? res.destroy() : reply(res, 500)));
  });

  return {
    server,
    startId,
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
