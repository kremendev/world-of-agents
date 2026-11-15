import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { request, type ClientRequest } from 'node:http';
import { createServer as createNetServer, type AddressInfo } from 'node:net';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { isNewer, VERSION } from '../src/version';
import { createHall, HALL_IDLE_MS, listen, MAX_STOP_BODY, type Hall } from './hall';
import { shutdown } from './serve';
import { hookOf } from './test-helpers';
import { newToken } from './token';

// v3.5b (docs/v3.5-plan.md, H1 to H5): the plugin's hall runs detached, so it stops itself after 30 idle minutes, and a
// newer plugin stops an older hall through POST /api/stop. Every hall here listens on a free port, never on 4319.

const TOKEN = newToken();
const MIN = 60_000;

const halls: Hall[] = [];
afterEach(async () => {
  vi.useRealTimers();
  for (const hall of halls.splice(0)) await hall.close();
});

const freePort = () =>
  new Promise<number>((done) => {
    const probe = createNetServer().listen(0, '127.0.0.1', () => {
      const { port } = probe.address() as AddressInfo;
      probe.close(() => done(port));
    });
  });

/** A real hall on a free port, with the Host check that port expects. */
async function start(options: { version?: string; idleMs?: number; onStop?: () => void } = {}) {
  const port = await freePort();
  const hall = createHall({ token: TOKEN, port, ...options });
  await listen(hall, port);
  halls.push(hall);
  return port;
}

type Reply = { status: number; body: string };

function send(
  port: number,
  {
    method = 'POST',
    path,
    headers = {},
    body,
  }: { method?: string; path: string; headers?: Record<string, string>; body?: string },
): Promise<Reply> {
  return new Promise((done, fail) => {
    const req = request(
      { host: '127.0.0.1', port, method, path, headers: { Host: `127.0.0.1:${port}`, ...headers } },
      (res) => {
        let text = '';
        res.on('data', (chunk: Buffer) => (text += chunk.toString('utf8')));
        res.on('end', () => done({ status: res.statusCode ?? 0, body: text }));
      },
    );
    req.on('error', fail);
    req.end(body);
  });
}

const JSON_TOKEN = { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` };
const stopWith = (port: number, body: unknown, headers: Record<string, string> = JSON_TOKEN) =>
  send(port, { path: '/api/stop', headers, body: typeof body === 'string' ? body : JSON.stringify(body) });

/** A page on /api/events, held open until `leave()`. */
function page(port: number): Promise<{ leave: () => void }> {
  return new Promise((done, fail) => {
    const req: ClientRequest = request(
      { host: '127.0.0.1', port, path: '/api/events', headers: { Host: `127.0.0.1:${port}` } },
      (res) => {
        res.once('data', () => done({ leave: () => req.destroy() }));
      },
    );
    req.on('error', () => {});
    req.on('error', fail);
    req.end();
  });
}

/** Real time for the sockets to settle: only setInterval and Date are faked here. */
const settle = () => new Promise((done) => setTimeout(done, 60));

describe('POST /api/stop (v3.5b)', () => {
  it('stops for a newer version only after its 204 has gone out', async () => {
    // As serve() does: stopping drops every connection, so a stop before the reply would lose the reply.
    const onStop = vi.fn(() => void halls.at(-1)!.close());
    const port = await start({ version: '3.9.0', onStop });
    const reply = await stopWith(port, { version: '3.10.0' });
    expect(reply).toEqual({ status: 204, body: '' });
    await settle();
    expect(onStop).toHaveBeenCalledTimes(1);
  });

  it('stops once, however often it is asked', async () => {
    const onStop = vi.fn();
    const port = await start({ version: '3.9.0', onStop });
    expect((await stopWith(port, { version: '3.10.0' })).status).toBe(204);
    expect((await stopWith(port, { version: '3.11.0' })).status).toBe(204);
    await settle();
    expect(onStop).toHaveBeenCalledTimes(1);
  });

  it("is the plugin's hall that stops itself when idle; npm run hall stops with Ctrl+C", () => {
    const code = (name: string) => readFileSync(join(import.meta.dirname, name), 'utf8');
    expect(code('plugin-hall.ts')).toContain(
      "await serve({ dir: join(here, 'page'), files }, { idleMs: HALL_IDLE_MS });",
    );
    expect(code('main.ts')).not.toContain('idleMs');
    expect(HALL_IDLE_MS).toBe(30 * MIN);
  });

  it('never stops for its own version or an older one: an older pane never stops a newer hall', async () => {
    const onStop = vi.fn();
    const port = await start({ version: '3.6.0', onStop });
    for (const version of ['3.6.0', '3.5.9', '3.5.0', '2.9.9', '0.0.0']) {
      expect((await stopWith(port, { version })).status).toBe(409);
    }
    await settle();
    expect(onStop).not.toHaveBeenCalled();
  });

  it('refuses everyone when the hall has no way to stop', async () => {
    const port = await start({ version: VERSION });
    expect((await stopWith(port, { version: '999.0.0' })).status).toBe(409);
  });

  it('keeps every control a hook has: no page, the token, JSON, a size cap, the exact shape', async () => {
    const onStop = vi.fn();
    const port = await start({ version: '3.5.0', onStop });
    const newer = { version: '3.6.0' };
    expect((await stopWith(port, newer, { ...JSON_TOKEN, Origin: `http://127.0.0.1:${port}` })).status).toBe(
      403,
    );
    expect((await stopWith(port, newer, { 'Content-Type': 'application/json' })).status).toBe(401);
    expect(
      (await stopWith(port, newer, { ...JSON_TOKEN, Authorization: `Bearer ${newToken()}` })).status,
    ).toBe(401);
    expect((await stopWith(port, newer, { ...JSON_TOKEN, 'Content-Type': 'text/plain' })).status).toBe(415);
    expect((await stopWith(port, { version: '3.6.0', pad: 'x'.repeat(MAX_STOP_BODY) })).status).toBe(413);
    for (const body of [
      {},
      { version: '3.6' },
      { version: '3.6.0', x: 1 },
      { version: '3.6.0; echo hi' },
      { version: ' 3.6.0' },
      { version: 360 },
      [],
      null,
      'not json',
    ]) {
      expect((await stopWith(port, body)).status).toBe(400);
    }
    expect((await send(port, { method: 'GET', path: '/api/stop' })).status).toBe(405);
    await settle();
    expect(onStop).not.toHaveBeenCalled();
  });
});

describe('the idle stop (v3.5b)', () => {
  const fake = () => vi.useFakeTimers({ toFake: ['setInterval', 'clearInterval', 'Date'] });
  const hook = () => JSON.stringify(hookOf(1));

  it('a hall with no idle time never stops on its own', async () => {
    fake();
    const onStop = vi.fn();
    await start({ onStop });
    vi.advanceTimersByTime(24 * 60 * MIN);
    expect(onStop).not.toHaveBeenCalled();
  });

  it('stops 30 minutes after the last thing it heard, within the minute, and only once', async () => {
    fake();
    const onStop = vi.fn();
    await start({ idleMs: HALL_IDLE_MS, onStop });
    vi.advanceTimersByTime(29 * MIN);
    expect(onStop).not.toHaveBeenCalled();
    vi.advanceTimersByTime(2 * MIN);
    expect(onStop).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(60 * MIN);
    expect(onStop).toHaveBeenCalledTimes(1);
  });

  it('a hook event starts the 30 minutes again; one without the token does not', async () => {
    fake();
    const onStop = vi.fn();
    const port = await start({ idleMs: HALL_IDLE_MS, onStop });
    vi.advanceTimersByTime(20 * MIN);
    expect((await send(port, { path: '/api/hook', headers: JSON_TOKEN, body: hook() })).status).toBe(204);
    vi.advanceTimersByTime(20 * MIN);
    expect(onStop).not.toHaveBeenCalled();
    const stranger = { ...JSON_TOKEN, Authorization: `Bearer ${newToken()}` };
    expect((await send(port, { path: '/api/hook', headers: stranger, body: hook() })).status).toBe(401);
    vi.advanceTimersByTime(11 * MIN);
    expect(onStop).toHaveBeenCalledTimes(1);
  });

  it('never stops while a page is open; the 30 minutes start when the last one leaves', async () => {
    fake();
    const onStop = vi.fn();
    const port = await start({ idleMs: HALL_IDLE_MS, onStop });
    const first = await page(port);
    const second = await page(port);
    vi.advanceTimersByTime(3 * 60 * MIN);
    expect(onStop).not.toHaveBeenCalled();
    first.leave();
    await settle();
    vi.advanceTimersByTime(60 * MIN);
    expect(onStop).not.toHaveBeenCalled();
    second.leave();
    await settle();
    vi.advanceTimersByTime(29 * MIN);
    expect(onStop).not.toHaveBeenCalled();
    vi.advanceTimersByTime(2 * MIN);
    expect(onStop).toHaveBeenCalledTimes(1);
  });
});

describe('shutdown (v3.5b)', () => {
  it('deletes the token file before the port is free, so a newer hall never loses its own, then exits', async () => {
    const home = mkdtempSync(join(tmpdir(), 'woa-stop-'));
    try {
      const tokenFile = join(home, 'token');
      writeFileSync(tokenFile, TOKEN);
      const order: string[] = [];
      await shutdown({
        tokenFile,
        close: async () => {
          order.push(existsSync(tokenFile) ? 'close, token still there' : 'close, token gone');
        },
        exit: () => order.push('exit'),
      });
      expect(order).toEqual(['close, token gone', 'exit']);
    } finally {
      rmSync(home, { recursive: true, force: true });
    }
  });

  it('exits even when closing fails', async () => {
    const exit = vi.fn();
    await expect(
      shutdown({
        tokenFile: join(tmpdir(), 'woa-no-such-token'),
        close: () => Promise.reject(new Error('x')),
        exit,
      }),
    ).rejects.toThrow('x');
    expect(exit).toHaveBeenCalledTimes(1);
  });
});

describe('isNewer (v3.5b)', () => {
  it('compares versions part by part as numbers', () => {
    expect(isNewer('3.10.0', '3.9.0')).toBe(true);
    expect(isNewer('3.5.1', '3.5.0')).toBe(true);
    expect(isNewer('4.0.0', '3.99.99')).toBe(true);
    expect(isNewer('3.5.0', '3.5.0')).toBe(false);
    expect(isNewer('3.9.0', '3.10.0')).toBe(false);
    expect(isNewer('2.9.9', '3.0.0')).toBe(false);
  });
});
