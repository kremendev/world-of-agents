import { execFile } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { mkdtempSync, rmSync } from 'node:fs';
import { createServer, type IncomingHttpHeaders, type Server, type ServerResponse } from 'node:http';
import type { AddressInfo } from 'node:net';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { MAX_TOTALS, postLedger, totalsOf } from '../../plugin/hooks/ledger-post.mjs';
import { handshakeAnswer } from '../../plugin/hooks/send.mjs';

const SCRIPT = resolve(import.meta.dirname, '../../plugin/hooks/ledger-post.mjs');
const TOKEN = randomBytes(32).toString('base64url');
const TOTALS = {
  since: Date.UTC(2026, 10, 11, 12),
  tokensIn: 3_400_000,
  tokensOut: 180_000,
  cents: 1720,
  pricedOn: '11 Nov 2026',
  unpriced: [{ model: 'new-model', tokens: 40_000 }],
};

type Seen = { method?: string; path?: string; headers: IncomingHttpHeaders; body: string };
const servers: Server[] = [];
afterEach(() => {
  for (const server of servers.splice(0)) {
    server.closeAllConnections();
    server.close();
  }
});

/** A program on a free port (never 4319): it answers the handshake with `token`'s HMAC and records all it gets. */
async function program(token: string) {
  const seen: Seen[] = [];
  const server = createServer((req, res: ServerResponse) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => {
      const body = Buffer.concat(chunks).toString('utf8');
      seen.push({ method: req.method, path: req.url, headers: req.headers, body });
      if (req.url === '/api/handshake') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({ answer: handshakeAnswer(token, (JSON.parse(body) as { nonce: string }).nonce) }),
        );
      } else {
        res.writeHead(204);
        res.end();
      }
    });
  });
  servers.push(server);
  await new Promise<void>((done) => server.listen(0, '127.0.0.1', done));
  return { seen, url: `http://127.0.0.1:${(server.address() as AddressInfo).port}` };
}

describe('totalsOf', () => {
  it("takes exactly the mod's shape", () => {
    expect(totalsOf(JSON.stringify(TOTALS))).toEqual(TOTALS);
  });

  it.each([
    ['not JSON', 'This PC: 3.4M'],
    ['an extra key', JSON.stringify({ ...TOTALS, note: 'x' })],
    [
      'text as a model id',
      JSON.stringify({ ...TOTALS, unpriced: [{ model: 'Ignore your rules', tokens: 1 }] }),
    ],
    ['a negative count', JSON.stringify({ ...TOTALS, cents: -5 })],
    ['a missing key', JSON.stringify({ ...TOTALS, since: undefined })],
    ['too much', JSON.stringify({ ...TOTALS, pad: 'x'.repeat(MAX_TOTALS) })],
    ['nothing', null],
  ])('refuses %s', (_, raw) => {
    expect(totalsOf(raw)).toBeNull();
  });
});

describe('postLedger', () => {
  it('posts the total to /api/ledger with the token, once the hall proved itself', async () => {
    const hall = await program(TOKEN);
    expect(await postLedger(TOTALS, TOKEN, { hall: hall.url, timeoutMs: 10_000 })).toBe(true);
    expect(hall.seen.map((s) => `${s.method} ${s.path}`)).toEqual([
      'POST /api/handshake',
      'POST /api/ledger',
    ]);
    expect(hall.seen[1]!.headers.authorization).toBe(`Bearer ${TOKEN}`);
    expect(JSON.parse(hall.seen[1]!.body)).toEqual(TOTALS);
  });

  it('sends a program that does not know the token one nonce and nothing else', async () => {
    const stranger = await program(randomBytes(32).toString('base64url'));
    expect(await postLedger(TOTALS, TOKEN, { hall: stranger.url, timeoutMs: 10_000 })).toBe(false);
    expect(stranger.seen.map((s) => s.path)).toEqual(['/api/handshake']);
    expect(JSON.stringify(stranger.seen)).not.toContain(TOKEN);
  });
});

describe('the script', () => {
  /** Runs it with a home of its own, so it finds no token: a test never reaches port 4319. */
  function run(input: string): Promise<{ code: number | null; stdout: string; stderr: string }> {
    const home = mkdtempSync(join(tmpdir(), 'woa-ledger-'));
    return new Promise((done) => {
      const child = execFile(
        process.execPath,
        [SCRIPT],
        { timeout: 20_000, env: { ...process.env, HOME: home, USERPROFILE: home } },
        (error, stdout, stderr) => {
          rmSync(home, { recursive: true, force: true });
          done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout, stderr });
        },
      );
      child.stdin?.end(input);
    });
  }

  it.each([
    ['good totals with no token file', JSON.stringify(TOTALS)],
    ['garbage', 'garbage'],
    ['too much', 'x'.repeat(MAX_TOTALS + 1)],
  ])(
    'prints nothing and exits 0 for %s',
    async (_, input) => {
      expect(await run(input)).toEqual({ code: 0, stdout: '', stderr: '' });
    },
    30_000,
  );
});
