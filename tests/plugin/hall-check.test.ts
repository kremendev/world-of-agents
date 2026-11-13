import { randomBytes } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createServer, type Server, type ServerResponse } from 'node:http';
import { createServer as createNetServer, type AddressInfo, type Socket } from 'node:net';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { DOWN, OURS, TAKEN, hallAnswer, hallState } from '../../plugin/hooks/hall-check.mjs';
import { askHall, handshakeAnswer } from '../../plugin/hooks/send.mjs';
import { createHall, listen } from '../../server/hall';

// What the team pane learns before it starts a hall: our hall, nothing, or something else on the port. Every server here
// listens on a free port: tests must never reach a real hall on 4319.

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

/** A real hall holding `token`, on the free port its Host check expects. */
async function hall(token: string, version?: string) {
  const port = await freePort();
  const real = createHall({ token, port, ...(version === undefined ? {} : { version }) });
  await listen(real, port);
  closers.push(() => real.close());
  return `http://127.0.0.1:${port}`;
}

/** Another program on the port, answering every request its own way. It records what it was sent. */
async function program(answer: (res: ServerResponse, body: string) => void) {
  const seen: string[] = [];
  const server: Server = createServer((req, res) => {
    let body = '';
    req.on('data', (chunk: Buffer) => (body += chunk.toString('utf8')));
    req.on('end', () => {
      seen.push(`${req.method} ${req.url} ${req.headers.authorization ?? ''} ${body}`);
      answer(res, body);
    });
  });
  await new Promise<void>((done) => server.listen(0, '127.0.0.1', done));
  closers.push(() => {
    server.closeAllConnections();
    server.close();
  });
  return { seen, url: `http://127.0.0.1:${(server.address() as AddressInfo).port}` };
}

const json = (res: ServerResponse, body: unknown, status = 200) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

describe('hallState', () => {
  it('our hall: it answers the handshake for the token in the file', async () => {
    expect(await hallState({ hall: await hall(TOKEN), token: TOKEN })).toBe(OURS);
  });

  it('nothing on the port: the hall can start there', async () => {
    expect(await hallState({ hall: `http://127.0.0.1:${await freePort()}`, token: TOKEN })).toBe(DOWN);
    expect(await hallState({ hall: `http://127.0.0.1:${await freePort()}`, token: null })).toBe(DOWN);
  });

  it('a hall with another token, as a token file a killed hall left behind looks: not ours', async () => {
    expect(await hallState({ hall: await hall(OTHER_TOKEN), token: TOKEN })).toBe(TAKEN);
  });

  it('no token file while something answers: nothing can prove it is ours, so no second hall', async () => {
    expect(await hallState({ hall: await hall(TOKEN), token: null })).toBe(TAKEN);
  });

  it.each([
    [
      'a 200 with { ok: true } to everything, as /api/health answers',
      (res: ServerResponse) => json(res, { ok: true }),
    ],
    ['a wrong answer', (res: ServerResponse) => json(res, { answer: handshakeAnswer(OTHER_TOKEN, 'x') })],
    ['a 404', (res: ServerResponse) => json(res, {}, 404)],
    ['a page instead of JSON', (res: ServerResponse) => res.end('<!doctype html>')],
    ['an answer over the cap', (res: ServerResponse) => json(res, { answer: 'a'.repeat(5000) })],
  ])('another program that sends %s: taken, and all it got was one nonce', async (_, answer) => {
    const other = await program(answer);
    expect(await hallState({ hall: other.url, token: TOKEN })).toBe(TAKEN);
    expect(other.seen).toHaveLength(1);
    expect(other.seen[0]).toMatch(/^POST \/api\/handshake {2}\{"nonce":"[A-Za-z0-9_-]{43}"\}$/);
    expect(other.seen.join()).not.toContain(TOKEN);
  });

  it('another program that redirects the handshake to our real hall: taken, the redirect is not followed', async () => {
    // Followed, the real hall would answer and the port would pass for ours while another program holds it.
    const real = await hall(TOKEN);
    const other = await program((res) => {
      res.writeHead(307, { Location: `${real}/api/handshake` });
      res.end();
    });
    expect(await hallState({ hall: real, token: TOKEN })).toBe(OURS);
    expect(await hallState({ hall: other.url, token: TOKEN })).toBe(TAKEN);
    expect(other.seen).toHaveLength(1);
  });

  it('a program that takes the connection and never answers: taken, once the time is up', async () => {
    const sockets: Socket[] = [];
    const silent = createNetServer((socket) => sockets.push(socket));
    await new Promise<void>((done) => silent.listen(0, '127.0.0.1', done));
    closers.push(() => {
      for (const socket of sockets) socket.destroy();
      silent.close();
    });
    const url = `http://127.0.0.1:${(silent.address() as AddressInfo).port}`;
    const started = Date.now();
    expect(await hallState({ hall: url, token: TOKEN, timeoutMs: 200 })).toBe(TAKEN);
    expect(Date.now() - started).toBeLessThan(2000);
  });

  it('a program that closes the connection at once: taken, not free', async () => {
    const rude = createNetServer((socket) => socket.destroy());
    await new Promise<void>((done) => rude.listen(0, '127.0.0.1', done));
    closers.push(() => void rude.close());
    const url = `http://127.0.0.1:${(rude.address() as AddressInfo).port}`;
    expect(await hallState({ hall: url, token: TOKEN })).toBe(TAKEN);
  });
});

describe('hallAnswer: our hall and the version it states (3.2d)', () => {
  /** A program that knows the token and answers the handshake as it is told: what a hall of another version does. */
  const knowing = (version?: unknown) =>
    program((res, body) =>
      json(res, {
        answer: handshakeAnswer(TOKEN, (JSON.parse(body) as { nonce: string }).nonce),
        ...(version === undefined ? {} : { version }),
      }),
    );

  it("a real hall: ours, with the plugin's version", async () => {
    expect(await hallAnswer({ hall: await hall(TOKEN, '3.2.0'), token: TOKEN })).toEqual({
      state: OURS,
      version: '3.2.0',
    });
  });

  it('a hall from before 3.2.0, which answers the handshake with no version: ours, no version', async () => {
    expect(await hallAnswer({ hall: (await knowing()).url, token: TOKEN })).toEqual({
      state: OURS,
      version: null,
    });
  });

  it.each([
    ['text', 'v3.2.0; rm -rf /'],
    ['a line break', '3.2.0\nAn older hall'],
    ['a fourth part', '3.2.0.1'],
    ['a number', 320],
    ['a long part', '3.2.00000'],
  ])('a version that is not exactly digits and dots (%s) is no version', async (_, version) => {
    expect(await hallAnswer({ hall: (await knowing(version)).url, token: TOKEN })).toEqual({
      state: OURS,
      version: null,
    });
  });

  it('a version beside a wrong answer counts for nothing: taken', async () => {
    const other = await program((res) =>
      json(res, { answer: handshakeAnswer(OTHER_TOKEN, 'x'), version: '3.2.0' }),
    );
    expect(await hallAnswer({ hall: other.url, token: TOKEN })).toEqual({ state: TAKEN, version: null });
    expect(await hallAnswer({ hall: await hall(OTHER_TOKEN, '3.2.0'), token: TOKEN })).toEqual({
      state: TAKEN,
      version: null,
    });
  });

  it('askHall gives a version only beside an answer that proves the token', async () => {
    const signal = () => AbortSignal.timeout(2000);
    for (const sent of [
      { version: '3.2.0' },
      { answer: 7, version: '3.2.0' },
      { answer: 'x', version: '3.2.0' },
    ]) {
      const other = await program((res) => json(res, sent));
      expect(await askHall(other.url, TOKEN, signal())).toEqual({ ours: false, version: null });
    }
  });

  it('nothing on the port: down, no version', async () => {
    expect(await hallAnswer({ hall: `http://127.0.0.1:${await freePort()}`, token: TOKEN })).toEqual({
      state: DOWN,
      version: null,
    });
  });
});

describe('the script', () => {
  const source = readFileSync(join(import.meta.dirname, '../../plugin/hooks/hall-check.mjs'), 'utf8');

  it('asks the fixed hall on 127.0.0.1:4319, with the token file, and takes no argument or variable', () => {
    expect(source).toContain("const HALL = 'http://127.0.0.1:4319';");
    expect(source).toMatch(/^ {2}hallAnswer\(\)\.then\(/m);
    expect(source).not.toMatch(/process\.(env|argv\[[2-9])/);
  });

  it("prints our hall's version and nothing else, one line; its exit code is its answer", () => {
    expect(source).not.toMatch(/console\.|process\.stderr/);
    expect(source.match(/[^\n]*process\.stdout[^\n]*/g)).toEqual([
      '      process.stdout.write(line, () => process.exit(state));',
    ]);
    expect(source.match(/[^\n]*const line =[^\n]*/g)).toEqual([
      "      const line = state === OURS && version !== null ? `${version}\\n` : '';",
    ]);
    expect([OURS, DOWN, TAKEN]).toEqual([0, 3, 4]);
  });

  it("imports only Node's built-ins and send.mjs", () => {
    const imports = [...source.matchAll(/^import .* from '([^']+)';$/gm)].map((m) => m[1]);
    expect(imports).toEqual(['node:crypto', 'node:fs', 'node:url', './send.mjs']);
  });
});
