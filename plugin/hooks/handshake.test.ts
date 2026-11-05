import { randomBytes } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createServer, type IncomingHttpHeaders, type Server, type ServerResponse } from 'node:http';
import type { AddressInfo } from 'node:net';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { deliver, handshakeAnswer } from './send.mjs';

const TOKEN = randomBytes(32).toString('base64url');
const OTHER_TOKEN = randomBytes(32).toString('base64url');
const OLD_NONCE = randomBytes(32).toString('base64url');
const TASK = 'SENTINEL the task the user typed';
const FORWARDED = { hook_event_name: 'UserPromptSubmit', prompt: TASK };

type Seen = { method?: string; path?: string; headers: IncomingHttpHeaders; body: string };
type Answer = (nonce: string, res: ServerResponse) => void;

const json = (res: ServerResponse, body: unknown, status = 200) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

const servers: Server[] = [];
afterEach(() => {
  for (const server of servers.splice(0)) {
    server.closeAllConnections();
    server.close();
  }
});

/** A program on the port, on a free one here: tests must never reach a real hall on 4319. It records all it receives. */
async function program(answer: Answer) {
  const seen: Seen[] = [];
  const server = createServer((req, res) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => {
      const body = Buffer.concat(chunks).toString('utf8');
      seen.push({ method: req.method, path: req.url, headers: req.headers, body });
      if (req.url === '/api/handshake') answer((JSON.parse(body) as { nonce: string }).nonce, res);
      else json(res, {}, 204);
    });
  });
  servers.push(server);
  await new Promise<void>((done) => server.listen(0, '127.0.0.1', done));
  return { seen, url: `http://127.0.0.1:${(server.address() as AddressInfo).port}` };
}

const send = (url: string, timeoutMs = 10_000) => deliver(FORWARDED, TOKEN, { hall: url, timeoutMs });

/** All it may have learned is one random nonce: no token, no hook text, no second request. */
function expectItGotNothing(seen: Seen[]) {
  expect(seen.map((s) => `${s.method} ${s.path}`)).toEqual(['POST /api/handshake']);
  const everything = JSON.stringify(seen);
  expect(everything).not.toContain(TOKEN);
  expect(everything).not.toContain(TASK);
  expect(seen[0]!.headers.authorization).toBeUndefined();
  expect(Object.keys(JSON.parse(seen[0]!.body) as object)).toEqual(['nonce']);
}

describe('a server that does not know the token gets nothing', () => {
  it.each<[string, Answer]>([
    [
      'the HMAC under another token',
      (nonce, res) => json(res, { answer: handshakeAnswer(OTHER_TOKEN, nonce) }),
    ],
    ['the nonce sent back', (nonce, res) => json(res, { answer: nonce })],
    [
      'a genuine answer to an older nonce',
      (_, res) => json(res, { answer: handshakeAnswer(TOKEN, OLD_NONCE) }),
    ],
    ['garbage of the right length', (_, res) => json(res, { answer: 'A'.repeat(43) })],
    ['garbage of another length', (_, res) => json(res, { answer: 'A' })],
    ['an empty answer', (_, res) => json(res, { answer: '' })],
    ['a number', (_, res) => json(res, { answer: 123 })],
    ['a list', (_, res) => json(res, { answer: ['A'] })],
    ['no answer at all', (_, res) => json(res, {})],
    ['JSON null', (_, res) => json(res, null)],
    ['something that is not JSON', (_, res) => res.end('<html>hello</html>')],
    ['an empty 200', (_, res) => res.end()],
    ['204', (_, res) => json(res, undefined, 204)],
    ['404: a hall too old to know the handshake, or any other server', (_, res) => json(res, {}, 404)],
    ['500', (_, res) => json(res, {}, 500)],
    ['a dropped connection', (_, res) => res.destroy()],
    ['a reply too big to be the hall', (_, res) => res.end(Buffer.alloc(2 * 1024 * 1024, 'x'))],
  ])('%s', async (_, answer) => {
    const { seen, url } = await program(answer);
    expect(await send(url)).toBe(false);
    expectItGotNothing(seen);
  });

  it('a server that never answers: it gives up on time', async () => {
    const { seen, url } = await program(() => {});
    const start = Date.now();
    expect(await send(url, 150)).toBe(false);
    expect(Date.now() - start).toBeLessThan(5000);
    expectItGotNothing(seen);
  });

  it('nothing on the port, with a token file left behind: no error, no post', async () => {
    const { url } = await program(() => {});
    for (const server of servers.splice(0)) await new Promise((done) => server.close(done));
    expect(await send(url)).toBe(false);
  });

  it('a redirect to a server that does know the token: not followed', async () => {
    const real = await program((nonce, res) => json(res, { answer: handshakeAnswer(TOKEN, nonce) }));
    const { seen, url } = await program((_, res) => {
      res.writeHead(307, { Location: `${real.url}/api/handshake` });
      res.end();
    });
    expect(await send(url)).toBe(false);
    expectItGotNothing(seen);
    expect(real.seen).toEqual([]);
  });
});

describe('a server that knows the token', () => {
  const knows: Answer = (nonce, res) => json(res, { answer: handshakeAnswer(TOKEN, nonce) });

  it('gets the post, with the token, only after the handshake', async () => {
    const { seen, url } = await program(knows);
    expect(await send(url)).toBe(true);
    expect(seen.map((s) => s.path)).toEqual(['/api/handshake', '/api/hook']);
    expect(seen[0]!.headers.authorization).toBeUndefined();
    expect(seen[1]!.headers.authorization).toBe(`Bearer ${TOKEN}`);
    expect(JSON.parse(seen[1]!.body)).toEqual(FORWARDED);
  });

  // Only a server holding the token can get this far, so these are the only way to see these two checks work.
  it.each<[string, Answer]>([
    ['with a failed status', (nonce, res) => json(res, { answer: handshakeAnswer(TOKEN, nonce) }, 500)],
    [
      'past the size limit',
      (nonce, res) => json(res, { answer: handshakeAnswer(TOKEN, nonce), padding: 'x'.repeat(2048) }),
    ],
  ])('is still refused when the right answer comes %s', async (_, answer) => {
    const { seen, url } = await program(answer);
    expect(await send(url)).toBe(false);
    expectItGotNothing(seen);
  });

  it('is compared with timingSafeEqual, which no behaviour above can tell from a plain compare', () => {
    const source = readFileSync(join(import.meta.dirname, 'send.mjs'), 'utf8');
    expect(source).toContain('timingSafeEqual(got, expected)');
  });

  it('is asked with a new 32-byte nonce every time, so an old answer is worth nothing', async () => {
    const { seen, url } = await program(knows);
    await send(url);
    await send(url);
    const nonces = seen
      .filter((s) => s.path === '/api/handshake')
      .map((s) => (JSON.parse(s.body) as { nonce: string }).nonce);
    expect(nonces).toHaveLength(2);
    for (const nonce of nonces) expect(nonce).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(nonces[0]).not.toBe(nonces[1]);
  });

  it('cannot redirect the post: the hook text goes nowhere else', async () => {
    const elsewhere = await program(() => {});
    const server = createServer((req, res) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk: Buffer) => chunks.push(chunk));
      req.on('end', () => {
        if (req.url === '/api/handshake') {
          const { nonce } = JSON.parse(Buffer.concat(chunks).toString('utf8')) as { nonce: string };
          return json(res, { answer: handshakeAnswer(TOKEN, nonce) });
        }
        res.writeHead(307, { Location: `${elsewhere.url}/stolen` });
        res.end();
      });
    });
    servers.push(server);
    await new Promise<void>((done) => server.listen(0, '127.0.0.1', done));
    expect(await send(`http://127.0.0.1:${(server.address() as AddressInfo).port}`)).toBe(false);
    expect(elsewhere.seen).toEqual([]);
  });
});

describe('handshakeAnswer', () => {
  it('is HMAC-SHA256 of the nonce under the token, as base64url', () => {
    // RFC 4231 test case 2. Its key and message are plain text, and its digest is a published one.
    const expected = Buffer.from(
      '5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843',
      'hex',
    ).toString('base64url');
    expect(handshakeAnswer('Jefe', 'what do ya want for nothing?')).toBe(expected);
  });
});
