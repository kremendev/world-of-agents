import { randomBytes } from 'node:crypto';
import { existsSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { createServer, type Server } from 'node:http';
import { createServer as createNetServer, type AddressInfo } from 'node:net';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DOWN, OURS, TAKEN } from '../../plugin/hooks/hall-check.mjs';
import { SERVER, startHall, waitForHall } from '../../plugin/hooks/hall-start.mjs';
import { askToStop, ownVersion, REFUSED, STOPPED, waitForFree } from '../../plugin/hooks/hall-stop.mjs';
import { createHall, listen } from '../../server/hall';

// v3.5b (docs/v3.5-plan.md, H2 to H5): hall-start.mjs starts the plugin's hall detached and waits for its handshake;
// hall-stop.mjs asks an older hall to stop through its API. Every server here listens on a free port, never on 4319.

const PLUGIN = resolve(import.meta.dirname, '../../plugin');
const TOKEN = randomBytes(32).toString('base64url');
const OTHER_TOKEN = randomBytes(32).toString('base64url');

const closers: (() => Promise<void> | void)[] = [];
afterEach(async () => {
  for (const close of closers.splice(0)) await close();
});

const freePort = () =>
  new Promise<number>((done) => {
    const probe = createNetServer().listen(0, '127.0.0.1', () => {
      const { port } = probe.address() as AddressInfo;
      probe.close(() => done(port));
    });
  });

/** A real hall holding `token` and stating `version`, on a free port. */
async function hall(token: string, version: string, onStop = vi.fn()) {
  const port = await freePort();
  const real = createHall({ token, port, version, onStop });
  await listen(real, port);
  closers.push(() => real.close());
  return { url: `http://127.0.0.1:${port}`, onStop };
}

/** Answers in turn, the last one again. */
const answers = (...states: number[]) => {
  const left = [...states];
  return vi.fn(async () => (left.length > 1 ? left.shift()! : left[0]!));
};

describe('hall-start.mjs', () => {
  it("starts exactly the plugin's own hall, with the Node that runs it, detached, hidden, silent, and lets it go", () => {
    expect(SERVER).toBe(join(PLUGIN, 'hall', 'server.mjs'));
    const child = { on: vi.fn(), unref: vi.fn() };
    const spawn = vi.fn(() => child);
    startHall(SERVER, spawn);
    expect(spawn).toHaveBeenCalledWith(process.execPath, [SERVER], {
      cwd: join(PLUGIN, 'hall'),
      detached: true,
      stdio: 'ignore',
      windowsHide: true,
    });
    // No shell, no environment of its own, no argument but the script.
    expect(spawn.mock.calls[0]).toHaveLength(3);
    expect(child.on).toHaveBeenCalledWith('error', expect.any(Function));
    expect(child.unref).toHaveBeenCalledTimes(1);
  });

  it('never throws, even when the start does', () => {
    expect(() =>
      startHall(SERVER, () => {
        throw new Error('no node');
      }),
    ).not.toThrow();
  });

  it('really runs a script in its own folder', async () => {
    const dir = realpathSync(mkdtempSync(join(tmpdir(), 'woa-start-')));
    try {
      const script = join(dir, 'server.mjs');
      writeFileSync(
        script,
        "import { writeFileSync } from 'node:fs';\nwriteFileSync('ran.txt', process.cwd());\n",
      );
      startHall(script);
      const ran = join(dir, 'ran.txt');
      for (let i = 0; i < 100 && !existsSync(ran); i += 1) await new Promise((done) => setTimeout(done, 50));
      expect(realpathSync(readFileSync(ran, 'utf8'))).toBe(dir);
    } finally {
      // On Windows the child holds its folder until it has exited: retry, as rmSync does for EPERM.
      rmSync(dir, { recursive: true, force: true, maxRetries: 20, retryDelay: 100 });
    }
  });

  it('waits until our hall answers, and says what holds the port when the time is up', async () => {
    expect(await waitForHall({ ask: answers(DOWN, DOWN, OURS), waitMs: 2000, stepMs: 1 })).toBe(OURS);
    expect(await waitForHall({ ask: answers(DOWN), waitMs: 30, stepMs: 5 })).toBe(DOWN);
    // A stale token file answers wrong until the new hall writes its own: that is still worth waiting for.
    expect(await waitForHall({ ask: answers(TAKEN, OURS), waitMs: 2000, stepMs: 1 })).toBe(OURS);
    expect(await waitForHall({ ask: answers(TAKEN), waitMs: 30, stepMs: 5 })).toBe(TAKEN);
  });
});

describe('hall-stop.mjs', () => {
  it("states this plugin's own version, from plugin.json beside it, and nothing that isn't one", () => {
    const plugin = JSON.parse(readFileSync(join(PLUGIN, '.claude-plugin', 'plugin.json'), 'utf8')) as {
      version: string;
    };
    expect(ownVersion()).toBe(plugin.version);
    const dir = mkdtempSync(join(tmpdir(), 'woa-own-'));
    try {
      for (const [text, expected] of [
        ['{"version":"3.6.0"}', '3.6.0'],
        ['{"version":"3.6"}', null],
        ['{"version":"3.6.0; echo"}', null],
        ['{"version":360}', null],
        ['not json', null],
      ] as const) {
        writeFileSync(join(dir, 'plugin.json'), text);
        expect(ownVersion(join(dir, 'plugin.json'))).toBe(expected);
      }
      expect(ownVersion(join(dir, 'missing.json'))).toBeNull();
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('stops an older hall that holds the token, and is refused by a hall of its own version or a newer one', async () => {
    const older = await hall(TOKEN, '3.5.0');
    expect(await askToStop('3.6.0', TOKEN, { hall: older.url })).toBe(STOPPED);
    await new Promise((done) => setTimeout(done, 30));
    expect(older.onStop).toHaveBeenCalledTimes(1);

    for (const version of ['3.6.0', '3.7.0']) {
      const other = await hall(TOKEN, version);
      expect(await askToStop('3.6.0', TOKEN, { hall: other.url })).toBe(REFUSED);
      expect(other.onStop).not.toHaveBeenCalled();
    }
  });

  it('never sends the token to whatever fails the handshake', async () => {
    const stranger = await hall(OTHER_TOKEN, '3.5.0');
    expect(await askToStop('3.6.0', TOKEN, { hall: stranger.url })).toBe(TAKEN);
    expect(stranger.onStop).not.toHaveBeenCalled();

    const seen: { path?: string; auth?: string }[] = [];
    const server: Server = createServer((req, res) => {
      seen.push({ path: req.url, auth: req.headers.authorization });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('{"answer":"nope","version":"3.5.0"}');
    });
    const port = await freePort();
    await new Promise<void>((done) => server.listen(port, '127.0.0.1', () => done()));
    closers.push(() => new Promise<void>((done) => server.close(() => done())));
    expect(await askToStop('3.6.0', TOKEN, { hall: `http://127.0.0.1:${port}` })).toBe(TAKEN);
    expect(seen).toEqual([{ path: '/api/handshake', auth: undefined }]);
  });

  it('says when nothing listens', async () => {
    const port = await freePort();
    expect(await askToStop('3.6.0', TOKEN, { hall: `http://127.0.0.1:${port}` })).toBe(DOWN);
  });

  it('waits for the port to be free, and says when it never is', async () => {
    expect(await waitForFree({ ask: answers(OURS, OURS, DOWN), waitMs: 2000, stepMs: 1 })).toBe(true);
    expect(await waitForFree({ ask: answers(OURS), waitMs: 30, stepMs: 5 })).toBe(false);
  });

  it('lives in the plugin beside hall-check.mjs and send.mjs, which it imports', () => {
    expect(dirname(SERVER)).toBe(join(PLUGIN, 'hall'));
    const code = readFileSync(join(PLUGIN, 'hooks', 'hall-stop.mjs'), 'utf8');
    expect(code.match(/^import .* from '([^']+)';$/gm)).toEqual([
      "import { readFileSync, realpathSync } from 'node:fs';",
      "import { join } from 'node:path';",
      "import { fileURLToPath, pathToFileURL } from 'node:url';",
      "import { DOWN, TAKEN, hallState } from './hall-check.mjs';",
      "import { hallKnowsToken, readToken } from './send.mjs';",
    ]);
  });
});
