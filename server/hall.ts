import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { createServer, type IncomingMessage, type Server, type ServerResponse } from 'node:http';
import type { AddressInfo } from 'node:net';
import { homedir } from 'node:os';
import { join } from 'node:path';
import * as z from 'zod';
import {
  applyChange,
  applyNoteChange,
  logChange,
  readNotes,
  readTeam,
  readTexts,
  teamDir,
  writeNotes,
  writeTeam,
} from '../plugin/team/team.mjs';
import { ledgerSchema, type LedgerTotals, type OfficeEvent } from '../src/events/schema';
import { isNewer, VERSION, VERSION_SHAPE } from '../src/version';
import {
  keyBodySchema,
  teamChangeSchema,
  type TeamChange,
  type TeamProposal,
  type TeamView,
} from '../src/team/schema';
import { HALL_CSP } from './csp';
import { hookInputSchema, type HookInput } from './hook-input';
import { createKeys, sessionCookie } from './keys';
import { INITIAL_MAP, mapHook, proposalIn, type MapState } from './map';
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
/** `POST /api/stop`'s body, `{"version": "3.5.1"}`: a few dozen bytes (v3.5b). */
export const MAX_STOP_BODY = 256;
/** How many past events a page gets when it connects. */
export const REPLAY = 500;
/**
 * v3.5c (S1, S2): the sessions whose runs the hall keeps, the one it follows included, each up to REPLAY events, in
 * memory only. Going back to one shows its run as it stood.
 */
export const KEPT_SESSIONS = 3;
/** v3.7: the guild leads' proposed notes the hall holds, in memory only, until Dima approves or rejects them (M7). */
export const MAX_PROPOSALS = 20;
/**
 * The plugin's hall stops itself after this long with no hook event and no page connected (v3.5b, H1): it runs
 * detached, so no session ends it. `npm run hall` sets none and stops with Ctrl+C.
 */
export const HALL_IDLE_MS = 30 * 60_000;
/** How often an idle hall looks at the clock: it stops within a minute of its time. */
export const IDLE_CHECK_MS = 60_000;
/** The caller's own plugin version, digits and dots: a hall stops only for a newer one (H5). */
const stopBodySchema = z.strictObject({ version: z.string().regex(VERSION_SHAPE) });
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
 * POST /api/key (from hall-key.mjs), POST /api/session and GET and POST /api/team (the team editor, v3.4c), POST
 * /api/stop (from hall-stop.mjs, v3.5b), GET /api/events (Server-Sent Events for the
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
  idleMs,
  onStop,
}: {
  token: string;
  port?: number;
  page?: Page;
  version?: string;
  /** The home folder whose ~/.world-of-agents/team the team editor reads and writes (v3.4c); tests give a temp one. */
  teamHome?: string;
  now?: () => number;
  /** v3.5b: stop after this long with no hook event and no page connected; none never stops on its own. */
  idleMs?: number;
  /**
   * v3.5b: how the hall stops, called once: when it has been idle `idleMs`, or after it answered a newer plugin's
   * `POST /api/stop`. Without it, /api/stop refuses everyone.
   */
  onStop?: () => void;
}): Hall {
  const hosts = new Set([`127.0.0.1:${port}`, `localhost:${port}`]);
  const expected = digest(token);
  const pages = new Set<ServerResponse>();
  // New at every start and sent after every replay: a page that reconnects to another one knows the hall restarted,
  // and that it remembers nothing of the run. It says nothing else, and it is no secret.
  const startId = randomBytes(12).toString('base64url');
  let map = INITIAL_MAP;
  let replay: OfficeEvent[] = [];
  // v3.7: the guild leads' proposed notes, in memory only (M7).
  let proposals: TeamProposal[] = [];
  // The ledger's latest total, in memory only: never part of the replay, and gone when the hall stops.
  let ledger: LedgerTotals | null = null;
  const ledgerFrame = (totals: LedgerTotals) => `event: ledger\ndata: ${JSON.stringify(totals)}\n\n`;
  // The team editor's one-time keys and sessions (v3.4c), in memory only.
  const keys = createKeys(now);
  // One team write at a time: each reads the team the last one wrote.
  let writing: Promise<unknown> = Promise.resolve();
  // v3.5b: the later of the last hook event and the moment the last page left. While a page is open, it never idles.
  let lastActive = now();
  let stopped = false;
  const stop = () => {
    if (stopped) return;
    stopped = true;
    clearInterval(idleTimer);
    onStop?.();
  };
  const idleTimer =
    idleMs === undefined
      ? undefined
      : setInterval(
          () => {
            if (pages.size === 0 && now() - lastActive >= idleMs) stop();
          },
          Math.min(IDLE_CHECK_MS, idleMs),
        );
  // The clock alone never keeps the process alive: the server does, until it closes.
  idleTimer?.unref();

  // v3.5c: the sessions the hall followed before, the oldest first, each with its run as it stood: at most
  // KEPT_SESSIONS - 1 of them, beside the one it follows. In memory only, gone when the hall stops.
  const kept = new Map<string, { map: MapState; replay: OfficeEvent[] }>();

  /** `events` added to a run as a page sees them: a reset starts it again, and it keeps the newest REPLAY. */
  const grow = (run: readonly OfficeEvent[], events: readonly OfficeEvent[]): OfficeEvent[] =>
    events.reduce<OfficeEvent[]>((r, e) => (e.type === 'reset' ? [e] : [...r, e].slice(-REPLAY)), [...run]);

  function publish(events: readonly OfficeEvent[]): void {
    for (const event of events) {
      // A reset starts a new run, so a page that connects later doesn't replay the old one first.
      replay = grow(replay, [event]);
      for (const page of pages) page.write(frame(event));
    }
  }

  /** The session the hall leaves, kept with its run; the oldest kept one goes when there are too many. */
  function keep(session: string, run: { map: MapState; replay: OfficeEvent[] }): void {
    kept.delete(session);
    kept.set(session, run);
    for (const old of kept.keys()) {
      if (kept.size < KEPT_SESSIONS) break;
      kept.delete(old);
    }
  }

  /**
   * Back to a session the hall kept: its run as it stood, then this hook's events, sent to every page as one replay
   * (`replaying`, the events, `replayed` with the same start id), so each rebuilds it in one go. It starts with a reset,
   * so a page never keeps the other session's run.
   */
  function restore(run: readonly OfficeEvent[], at: number): void {
    replay = grow([], run[0]?.type === 'reset' ? run : [{ type: 'reset', at }, ...run]);
    const block = `event: replaying\ndata: ${startId}\n\n${replay.map(frame).join('')}event: replayed\ndata: ${startId}\n\n`;
    for (const page of pages) page.write(block);
  }

  /**
   * One hook (v3.5c): the session the hall follows moves the page as before. When the hall switches, the session it
   * leaves is kept; one it kept comes back as it stood, unless this hook starts it new. A kept session's own hooks keep
   * its run up to date while the hall follows another, and reach no page.
   */
  function heard(input: HookInput, at: number): void {
    const before = map;
    const result = mapHook(map, input, at);
    const from = before.session;
    const to = result.state.session;
    if (from !== null && to !== null && to !== from) {
      const back = kept.get(to);
      kept.delete(to);
      keep(from, { map: before, replay });
      const again = back ? mapHook(back.map, input, at) : null;
      if (back && again && !again.events.some((e) => e.type === 'reset')) {
        map = again.state;
        restore([...back.replay, ...again.events], at);
        return;
      }
    } else if (from !== null && input.session_id && input.session_id !== from) {
      const other = kept.get(input.session_id);
      if (other) {
        const own = mapHook(other.map, input, at);
        kept.set(input.session_id, { map: own.state, replay: grow(other.replay, own.events) });
      }
      return;
    }
    map = result.state;
    publish(result.events);
  }

  /**
   * v3.7 (option A): a guild lead's proposed note, kept in memory only until Dima approves or rejects it: at most
   * MAX_PROPOSALS, the oldest dropped, the same note from the same guild lead once. From any session the hall hears.
   */
  function propose(input: HookInput, at: number): void {
    const note = proposalIn(input);
    if (!note || proposals.some((p) => p.agent === note.agent && p.text === note.text)) return;
    const id = randomBytes(12).toString('base64url');
    proposals = [...proposals, { id, ...note, at }].slice(-MAX_PROPOSALS);
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
    heard(input.data, Date.now());
    propose(input.data, Date.now());
    lastActive = now();
    reply(res, 204); // no body: send.mjs throws any reply away, and there must be nothing to steer Claude Code
  }

  /**
   * hall-stop.mjs, from a newer plugin's team pane, before it starts its own hall (v3.5b, H2, H5): with the token, like a
   * hook, never from a page. It stops only for a caller that states a newer version than its own, so an older pane never
   * stops a newer hall; and only after the 204 has gone out.
   */
  async function stopPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
    if (req.headers.origin !== undefined) return reply(res, 403);
    if (!authorized(req.headers.authorization)) return reply(res, 401);
    const json = await jsonBody(req, res, MAX_STOP_BODY);
    if (json === undefined) return;
    const body = stopBodySchema.safeParse(json);
    if (!body.success) return reply(res, 400);
    if (onStop === undefined || !isNewer(body.data.version, version)) return reply(res, 409);
    res.on('finish', stop);
    reply(res, 204);
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
   * hall-key.mjs, when Dima presses "Open Team page" in the pane (v3.4c, T8): a one-time key the mod made, with the token,
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

  /**
   * The team, its skills' texts, (v3.7) the guild leads' notes, and the proposals waiting in memory, as team.mjs reads
   * them; null when there is no team or a file isn't as it wrote it.
   */
  function teamView(): TeamView | null {
    const team = readTeam(teamHome);
    if (team === null) return null;
    try {
      const dir = teamDir(teamHome);
      return { team, texts: readTexts(dir, team), notes: readNotes(dir).notes, proposals: [...proposals] };
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
    if (
      change.action === 'note-approve' ||
      change.action === 'note-reject' ||
      change.action === 'note-delete'
    )
      return applyToNotes(change, view);
    let next: ReturnType<typeof applyChange>;
    try {
      next = applyChange(view.team, view.texts, change, now());
    } catch (error) {
      // team.mjs's own fixed words, with checked ids at most.
      return { status: 409, body: { error: (error as Error).message } };
    }
    const dir = teamDir(teamHome);
    const team = writeTeam(dir, next.team, next.texts);
    logChange(dir, next.entry);
    return { status: 200, body: { ...view, team, texts: next.texts } };
  }

  /**
   * A note's change (v3.7c): approve and reject name a proposal by its id, and the text written is the hall's own copy,
   * never the page's (M8); delete names a kept note. team.mjs checks it again and writes notes.json and the notes skills.
   */
  function applyToNotes(
    change: Extract<TeamChange, { action: 'note-approve' | 'note-reject' | 'note-delete' }>,
    view: TeamView,
  ): { status: number; body: unknown } {
    const dir = teamDir(teamHome);
    const proposal =
      change.action === 'note-delete' ? null : (proposals.find((p) => p.id === change.id) ?? null);
    let next: ReturnType<typeof applyNoteChange>;
    try {
      next = applyNoteChange(readNotes(dir), change, proposal, now());
      if (change.action !== 'note-reject') writeNotes(dir, next.notes, view.team);
    } catch (error) {
      return { status: 409, body: { error: (error as Error).message } };
    }
    logChange(dir, next.entry);
    if (proposal) proposals = proposals.filter((p) => p !== proposal);
    return { status: 200, body: { ...view, notes: next.notes.notes, proposals: [...proposals] } };
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
    req.on('close', () => {
      pages.delete(res);
      if (pages.size === 0) lastActive = now();
    });
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
    if (path === '/api/stop') return method === 'POST' ? stopPost(req, res) : reply(res, 405);
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
        clearInterval(idleTimer);
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
