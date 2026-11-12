// hall-key.mjs and team-log.mjs (v3.4c, T8): the key reaches the hall on stdin and in a token-checked post only, and the
// change log reaches the pane as names only. Servers on free ports (never 4319), temp folders for the team.
import { randomBytes } from 'node:crypto';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { createServer, type IncomingHttpHeaders, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { keyOf, postKey } from '../../plugin/hooks/hall-key.mjs';
import { handshakeAnswer } from '../../plugin/hooks/send.mjs';
import { printed, SHOWN } from '../../plugin/hooks/team-log.mjs';
import { init, teamDir } from '../../plugin/team/team.mjs';

const TOKEN = randomBytes(32).toString('base64url');
const KEY = randomBytes(32).toString('base64url');

const servers: Server[] = [];
const temps: string[] = [];
afterEach(() => {
  for (const server of servers.splice(0)) {
    server.closeAllConnections();
    server.close();
  }
  for (const dir of temps.splice(0)) rmSync(dir, { recursive: true, force: true, maxRetries: 5 });
});

type Seen = { path?: string; headers: IncomingHttpHeaders; body: string };

/** A program on a free port that answers the handshake for `token`, and /api/key with `status`. */
async function program(token: string, status = 204) {
  const seen: Seen[] = [];
  const server = createServer((req, res) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => {
      const body = Buffer.concat(chunks).toString('utf8');
      seen.push({ path: req.url, headers: req.headers, body });
      if (req.url === '/api/handshake') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({ answer: handshakeAnswer(token, (JSON.parse(body) as { nonce: string }).nonce) }),
        );
      } else {
        res.writeHead(status);
        res.end();
      }
    });
  });
  servers.push(server);
  await new Promise<void>((done) => server.listen(0, '127.0.0.1', done));
  return { hall: `http://127.0.0.1:${(server.address() as AddressInfo).port}`, seen };
}

describe('hall-key.mjs', () => {
  it('takes exactly {"key": <43 base64url characters>} on stdin', () => {
    expect(keyOf(JSON.stringify({ key: KEY }))).toBe(KEY);
    for (const raw of [
      '',
      KEY,
      JSON.stringify({ key: KEY, more: 1 }),
      JSON.stringify({ key: 'short' }),
      JSON.stringify({ key: `${KEY}=` }),
      JSON.stringify([KEY]),
      `${JSON.stringify({ key: KEY })}${' '.repeat(300)}`,
    ]) {
      expect(keyOf(raw), raw.slice(0, 30)).toBeNull();
    }
  });

  it('posts the key only after the hall proved it holds the token, with the token, in the body', async () => {
    const { hall, seen } = await program(TOKEN);
    expect(await postKey(KEY, TOKEN, { hall })).toBe(true);
    expect(seen.map((s) => s.path)).toEqual(['/api/handshake', '/api/key']);
    const post = seen[1]!;
    expect(post.headers.authorization).toBe(`Bearer ${TOKEN}`);
    expect(JSON.parse(post.body)).toEqual({ key: KEY });
    // The key never went to the handshake.
    expect(seen[0]!.body).not.toContain(KEY);
  });

  it("sends a program that doesn't know the token the nonce and nothing else", async () => {
    const { hall, seen } = await program(randomBytes(32).toString('base64url'));
    expect(await postKey(KEY, TOKEN, { hall })).toBe(false);
    expect(seen.map((s) => s.path)).toEqual(['/api/handshake']);
    expect(seen.flatMap((s) => [s.body, JSON.stringify(s.headers)]).join(' ')).not.toContain(KEY);
  });

  it('says no when the hall refuses the key', async () => {
    const { hall } = await program(TOKEN, 400);
    expect(await postKey(KEY, TOKEN, { hall })).toBe(false);
  });
});

describe('team-log.mjs', () => {
  const folder = () => {
    const home = mkdtempSync(join(tmpdir(), 'woa-team-log-'));
    temps.push(home);
    init(home);
    return teamDir(home);
  };

  it('prints {"changes": []} when nothing changed yet', () => {
    expect(printed(folder())).toBe('{"changes":[]}');
  });

  it(`prints only entries that are exactly entries, the newest ${SHOWN}`, () => {
    const dir = folder();
    const good = Array.from({ length: SHOWN + 3 }, (_, i) => ({
      at: i + 1,
      what: 'skill-added',
      skill: `Skill ${i}`,
    }));
    const bad = [
      { at: 99, what: 'skill-added', skill: 'Fine', note: 'sk-ant-PLANTED' },
      { at: 99, what: 'skill-added', skill: 'see https://evil.example' },
      { at: 99, what: 'run-started', skill: 'Fine' },
      'text',
    ];
    writeFileSync(join(dir, 'changes.json'), JSON.stringify([...good, ...bad]));
    const out = JSON.parse(printed(dir)) as { changes: { skill: string }[] };
    expect(out.changes).toHaveLength(SHOWN);
    expect(out.changes.at(-1)).toEqual(good.at(-1));
    expect(printed(dir)).not.toMatch(/PLANTED|evil|run-started/);
  });

  it('prints nothing of a broken log', () => {
    const dir = folder();
    writeFileSync(join(dir, 'changes.json'), '{"not": "a list"}');
    expect(printed(dir)).toBe('{"changes":[]}');
  });
});
