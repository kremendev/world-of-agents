import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { request, type IncomingHttpHeaders } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { AGENT_IDS, type OfficeEvent } from '../src/events/schema';
import { INITIAL_OFFICE, officeReducer } from '../src/state/office';
import { createHall, listen, MAX_BODY, REPLAY, type Hall } from './hall';
import { INITIAL_MAP, mapHook } from './map';
import { hookOf, run1, timeless } from './test-helpers';
import { newToken } from './token';

/** The Host the hall expects. The test hall listens on a free port and is reached with this Host. */
const HALL_HOST = '127.0.0.1:4319';
const TOKEN = newToken();

let root: string;
let dist: string;
let hall: Hall;
let port: number;

beforeAll(() => {
  // dist/ inside a folder that also holds secret.js: a page file a path that escapes dist/ would reach.
  root = mkdtempSync(join(tmpdir(), 'woa-root-'));
  dist = join(root, 'dist');
  mkdirSync(join(dist, 'assets'), { recursive: true });
  writeFileSync(join(dist, 'index.html'), '<!doctype html><title>Forge Hall</title>');
  writeFileSync(join(dist, 'assets', 'app.js'), 'export {};');
  writeFileSync(join(dist, 'notes.txt'), 'not part of the page');
  writeFileSync(join(root, 'secret.js'), 'outside dist');
});
afterAll(() => rmSync(root, { recursive: true, force: true }));

beforeEach(async () => {
  hall = createHall({ token: TOKEN, dist });
  port = (await listen(hall, 0)).port;
});
afterEach(() => hall.close());

type Reply = { status: number; headers: IncomingHttpHeaders; body: string };
type Call = {
  method?: string;
  path: string;
  headers?: Record<string, string>;
  body?: string;
  host?: string | null;
};

/** One HTTP request to the test hall. `host: null` sends no Host header at all. */
function call({ method = 'GET', path, headers = {}, body, host = HALL_HOST }: Call): Promise<Reply> {
  return new Promise((done, fail) => {
    const req = request(
      {
        host: '127.0.0.1',
        port,
        method,
        path,
        setHost: false,
        headers: { ...(host ? { Host: host } : {}), ...headers },
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on('data', (chunk: Buffer) => chunks.push(chunk));
        res.on('end', () =>
          done({
            status: res.statusCode ?? 0,
            headers: res.headers,
            body: Buffer.concat(chunks).toString('utf8'),
          }),
        );
      },
    );
    req.on('error', fail);
    req.end(body);
  });
}

const json = { 'Content-Type': 'application/json' };
const auth = { Authorization: `Bearer ${TOKEN}` };

/** A hook post as send.mjs makes it, with the headers overridable. */
const post = (body: unknown, headers: Record<string, string> = {}) =>
  call({
    method: 'POST',
    path: '/api/hook',
    headers: { ...json, ...auth, ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });

/** A page on /api/events: collects every event it is sent. */
function subscribe(): Promise<{
  status: number;
  headers: IncomingHttpHeaders;
  events: OfficeEvent[];
  close: () => void;
}> {
  return new Promise((done, fail) => {
    const events: OfficeEvent[] = [];
    let buffer = '';
    const req = request(
      { host: '127.0.0.1', port, path: '/api/events', setHost: false, headers: { Host: HALL_HOST } },
      (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk: string) => {
          buffer += chunk;
          for (let end = buffer.indexOf('\n\n'); end >= 0; end = buffer.indexOf('\n\n')) {
            const frame = buffer.slice(0, end);
            buffer = buffer.slice(end + 2);
            if (frame.startsWith('data: '))
              events.push(JSON.parse(frame.slice('data: '.length)) as OfficeEvent);
          }
        });
        done({ status: res.statusCode ?? 0, headers: res.headers, events, close: () => req.destroy() });
      },
    );
    req.on('error', fail);
    req.end();
  });
}

async function until(ok: () => boolean, ms = 2000): Promise<void> {
  for (const end = Date.now() + ms; !ok();) {
    if (Date.now() > end) throw new Error('timed out waiting for events');
    await new Promise((r) => setTimeout(r, 5));
  }
}

const first = run1[0]!.body; // 01-SessionStart

describe('POST /api/hook', () => {
  it('takes a hook post from send.mjs: 204 and no body to act on', async () => {
    const reply = await post(first);
    expect(reply.status).toBe(204);
    expect(reply.body).toBe('');
  });

  it.each([
    ['no token', {}],
    ['a wrong token', { Authorization: `Bearer ${newToken()}` }],
    ['the token with a character more', { Authorization: `Bearer ${TOKEN}x` }],
    ['another scheme', { Authorization: `Basic ${TOKEN}` }],
  ])('401 with %s', async (_, headers) => {
    const reply = await call({
      method: 'POST',
      path: '/api/hook',
      headers: { ...json, ...headers },
      body: '{}',
    });
    expect(reply.status).toBe(401);
  });

  it.each(['http://127.0.0.1:4319', 'https://evil.example', 'null'])(
    '403 for a post that carries an Origin (%s), even with the right token',
    async (origin) => {
      expect((await post(first, { Origin: origin })).status).toBe(403);
    },
  );

  it('415 for a body that is not JSON', async () => {
    expect((await post(first, { 'Content-Type': 'text/plain' })).status).toBe(415);
  });

  it.each([
    ['broken JSON', '{"hook_event_name":'],
    ['an array', '[]'],
    ['no event name', '{}'],
    ['a field of the wrong type', '{"hook_event_name":"Stop","agent_id":5}'],
    [
      'a prompt longer than send.mjs sends',
      JSON.stringify({ hook_event_name: 'UserPromptSubmit', prompt: 'x'.repeat(121) }),
    ],
  ])('400 for %s', async (_, body) => {
    expect((await post(body)).status).toBe(400);
  });

  it(`takes ${MAX_BODY / 1024} KB, and 413 for a byte more`, async () => {
    const sized = (size: number) => {
      const base = JSON.stringify({ hook_event_name: 'SessionEnd', pad: '' });
      return JSON.stringify({ hook_event_name: 'SessionEnd', pad: 'x'.repeat(size - base.length) });
    };
    expect(sized(MAX_BODY)).toHaveLength(MAX_BODY);
    expect((await post(sized(MAX_BODY))).status).toBe(204); // the unknown "pad" field is stripped
    expect((await post(sized(MAX_BODY + 1))).status).toBe(413);
  });
});

describe('every route', () => {
  const routes = [
    ['POST', '/api/hook'],
    ['GET', '/api/events'],
    ['GET', '/api/health'],
    ['GET', '/'],
  ] as const;

  it.each(['evil.example', 'evil.example:4319', '127.0.0.1:5173', 'localhost', '127.0.0.1'])(
    '403 for the Host %s (DNS rebinding)',
    async (host) => {
      for (const [method, path] of routes) {
        const body = method === 'POST' ? JSON.stringify(first) : undefined;
        const reply = await call({ method, path, host, headers: { ...json, ...auth }, body });
        expect(reply.status, `${method} ${path}`).toBe(403);
      }
    },
  );

  it('rejects a request with no Host at all (Node answers 400 before the hall sees it)', async () => {
    for (const [method, path] of routes) {
      const body = method === 'POST' ? JSON.stringify(first) : undefined;
      const reply = await call({ method, path, host: null, headers: { ...json, ...auth }, body });
      expect(reply.status, `${method} ${path}`).toBe(400);
    }
  });

  it('answers on 127.0.0.1:4319 and localhost:4319', async () => {
    for (const host of [HALL_HOST, 'localhost:4319', 'LOCALHOST:4319']) {
      const reply = await call({ path: '/api/health', host });
      expect(reply.status, host).toBe(200);
      expect(JSON.parse(reply.body)).toEqual({ ok: true });
    }
  });

  it('405 for any other method', async () => {
    for (const [method, path] of [
      ['GET', '/api/hook'],
      ['OPTIONS', '/api/hook'],
      ['POST', '/api/events'],
      ['DELETE', '/api/health'],
      ['POST', '/'],
    ]) {
      expect((await call({ method: method!, path: path! })).status, `${method} ${path}`).toBe(405);
    }
  });

  it('never sends a CORS header', async () => {
    const page = await subscribe();
    const replies = [
      await post(first),
      await post(first, { Origin: 'https://evil.example' }),
      await call({ method: 'OPTIONS', path: '/api/hook', headers: { Origin: 'https://evil.example' } }),
      await call({ path: '/api/health' }),
      await call({ path: '/' }),
      page,
    ];
    page.close();
    for (const reply of replies) {
      expect(Object.keys(reply.headers).filter((h) => h.startsWith('access-control-'))).toEqual([]);
    }
  });

  it('listens on 127.0.0.1 only', () => {
    expect(hall.server.address()).toMatchObject({ address: '127.0.0.1', family: 'IPv4' });
  });

  it('logs nothing, so no payload text can reach a log', async () => {
    const methods = ['log', 'info', 'warn', 'error', 'debug'] as const;
    const spies = methods.map((m) => vi.spyOn(console, m).mockImplementation(() => {}));
    try {
      for (const hook of run1) await post(hook.body);
      await post('{"hook_event_name": "SENTINEL-broken');
      await post({ hook_event_name: 'UserPromptSubmit', prompt: 'SENTINEL'.repeat(20) });
      await post({ hook_event_name: 'Stop' }, { Authorization: 'Bearer SENTINEL' });
      for (const spy of spies) expect(spy).not.toHaveBeenCalled();
    } finally {
      for (const spy of spies) spy.mockRestore();
    }
  });
});

describe('GET /api/events', () => {
  it('is an event stream that sends each new event to a connected page', async () => {
    const page = await subscribe();
    expect(page.status).toBe(200);
    expect(page.headers['content-type']).toBe('text/event-stream; charset=utf-8');
    await post(first);
    await until(() => page.events.length === 1);
    page.close();
    expect(page.events).toMatchObject([{ type: 'reset' }]);
  });

  it('replays the run so far to a page that connects later, starting at its reset', async () => {
    // reset, run, Lead thinking, Lead reading, a card, Lead thinking
    for (const hook of run1.slice(0, 4)) await post(hook.body);
    const page = await subscribe();
    await until(() => page.events.length === 6);
    page.close();
    expect(page.events.map((e) => e.type)).toEqual(['reset', 'run', 'state', 'state', 'task', 'state']);

    await post(first); // the session starts again: the old run is not replayed
    const next = await subscribe();
    await until(() => next.events.length === 1);
    next.close();
    expect(next.events).toMatchObject([{ type: 'reset' }]);
  });

  it(`replays at most the last ${REPLAY} events`, async () => {
    await post(first);
    const stop = run1[26]!.body; // 27-Stop with nothing running: the Lead's report and five idle events
    for (let i = 0; i < 100; i++) await post(stop);
    const page = await subscribe();
    await until(() => page.events.length >= REPLAY);
    page.close();
    expect(page.events).toHaveLength(REPLAY); // 601 were sent; the reset fell off the front
    expect(page.events.some((e) => e.type === 'reset')).toBe(false);
    expect(page.events.at(-1)).toMatchObject({ type: 'state', agent: 'reviewer', state: 'idle' });
  });
});

describe('a new Claude Code session', () => {
  it('takes over the running hall: a reset, then only the new session moves the page', async () => {
    const B = 'session-after-restart';
    const restarted = { ...first, session_id: B, source: 'startup' };
    for (const hook of run1.slice(0, 10)) await post(hook.body); // run 1, cut off mid-run
    const page = await subscribe();
    const before = 13; // what run 1's first ten hooks send
    await until(() => page.events.length === before);

    for (const body of [
      restarted,
      run1[12]!.body, // the old session's Backend writing, late
      { ...run1[1]!.body, session_id: B }, // a prompt in the new session
    ])
      expect((await post(body)).status).toBe(204);
    await until(() => page.events.length === before + 3);
    page.close();
    expect(page.events.slice(before)).toMatchObject([
      { type: 'reset' },
      { type: 'run', text: expect.stringMatching(/^Make a tiny/) },
      { type: 'state', agent: 'lead', state: 'thinking' },
    ]);

    const late = await subscribe(); // a page that opens now sees the new session only
    await until(() => late.events.length === 3);
    late.close();
    expect(late.events.map((e) => e.type)).toEqual(['reset', 'run', 'state']);
  });
});

describe('the built page', () => {
  it('serves dist/: index.html at /, and its assets with their types', async () => {
    const index = await call({ path: '/' });
    expect([index.status, index.headers['content-type'], index.body]).toEqual([
      200,
      'text/html; charset=utf-8',
      '<!doctype html><title>Forge Hall</title>',
    ]);
    const script = await call({ path: '/assets/app.js' });
    expect([script.status, script.headers['content-type']]).toEqual([200, 'text/javascript; charset=utf-8']);
    const head = await call({ method: 'HEAD', path: '/assets/app.js' });
    expect([head.status, head.body]).toEqual([200, '']);
  });

  it.each([
    '/../secret.js',
    '/%2e%2e/secret.js',
    '/..%2fsecret.js',
    '/assets/..%2f..%2fsecret.js',
    '/assets/..%5c..%5csecret.js',
    '/notes.txt',
    '/assets',
    '/missing.js',
  ])('404 for %s: nothing outside dist/, and only page files', async (path) => {
    expect((await call({ path })).status).toBe(404);
  });
});

describe('end to end', () => {
  it('posts run 1 in order, and the page ends with every card done and everyone resting', async () => {
    for (const hook of run1) expect((await post(hook.body)).status, hook.name).toBe(204);

    let state = INITIAL_MAP;
    const expected: OfficeEvent[] = [];
    for (const hook of run1) {
      const result = mapHook(state, hookOf(hook.n), 0);
      state = result.state;
      expected.push(...result.events);
    }
    const page = await subscribe();
    await until(() => page.events.length >= expected.length);
    page.close();
    expect(timeless(page.events)).toEqual(timeless(expected));

    const office = page.events.reduce(officeReducer, INITIAL_OFFICE);
    expect(office.tasks).toEqual([
      { id: hookOf(4).tool_use_id, title: 'Dark theme hello page', owner: 'designer', status: 'done' },
      { id: hookOf(7).tool_use_id, title: 'node:http static server', owner: 'backend', status: 'done' },
      { id: hookOf(20).tool_use_id, title: 'Review hello page', owner: 'reviewer', status: 'done' },
    ]);
    for (const agent of AGENT_IDS) expect(office.agents[agent], agent).toEqual({ state: 'idle' });
    expect(office.messages.map((m) => `${m.from} to ${m.to}`)).toEqual([
      'lead to you',
      'backend to lead',
      'lead to you',
      'designer to lead',
      'reviewer to lead',
      'lead to you',
    ]);
    expect(page.events.find((e) => e.type === 'run')).toMatchObject({
      text: expect.stringMatching(/^Make a tiny/),
    });
  });
});
