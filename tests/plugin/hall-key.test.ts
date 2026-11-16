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
import { giveOwnTeam, init, projectOf, projectTeamDir } from '../../plugin/team/team.mjs';

const TOKEN = randomBytes(32).toString('base64url');
const KEY = randomBytes(32).toString('base64url');
/** v3.9: the session's folder goes with the key: an absolute path. */
const PROJECT = tmpdir();
const GIVEN = { key: KEY, project: PROJECT };

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
  it('takes exactly {"key": <43 base64url characters>, "project": <an absolute folder>} on stdin', () => {
    expect(keyOf(JSON.stringify(GIVEN))).toEqual(GIVEN);
    for (const raw of [
      '',
      KEY,
      JSON.stringify({ key: KEY }),
      JSON.stringify({ ...GIVEN, more: 1 }),
      JSON.stringify({ key: 'short', project: PROJECT }),
      JSON.stringify({ key: `${KEY}=`, project: PROJECT }),
      JSON.stringify({ key: KEY, project: 'relative/folder' }),
      JSON.stringify({ key: KEY, project: 42 }),
      JSON.stringify({ key: KEY, project: `${PROJECT}${String.fromCharCode(10)}x` }),
      JSON.stringify([KEY]),
      `${JSON.stringify(GIVEN)}${' '.repeat(5000)}`,
    ]) {
      expect(keyOf(raw), raw.slice(0, 30)).toBeNull();
    }
  });

  it('posts the key only after the hall proved it holds the token, with the token, in the body', async () => {
    const { hall, seen } = await program(TOKEN);
    expect(await postKey(GIVEN, TOKEN, { hall })).toBe(true);
    expect(seen.map((s) => s.path)).toEqual(['/api/handshake', '/api/key']);
    const post = seen[1]!;
    expect(post.headers.authorization).toBe(`Bearer ${TOKEN}`);
    expect(JSON.parse(post.body)).toEqual(GIVEN);
    // The key never went to the handshake.
    expect(seen[0]!.body).not.toContain(KEY);
  });

  it("sends a program that doesn't know the token the nonce and nothing else", async () => {
    const { hall, seen } = await program(randomBytes(32).toString('base64url'));
    expect(await postKey(GIVEN, TOKEN, { hall })).toBe(false);
    expect(seen.map((s) => s.path)).toEqual(['/api/handshake']);
    expect(seen.flatMap((s) => [s.body, JSON.stringify(s.headers)]).join(' ')).not.toContain(KEY);
  });

  it('says no when the hall refuses the key', async () => {
    const { hall } = await program(TOKEN, 400);
    expect(await postKey(GIVEN, TOKEN, { hall })).toBe(false);
  });
});

/** v3.9: a project with a team of its own; `dir` is its team folder, where its log is. */
function project() {
  const home = mkdtempSync(join(tmpdir(), 'woa-team-log-'));
  const folder = mkdtempSync(join(tmpdir(), 'woa-team-log-proj-'));
  temps.push(home, folder);
  init(home);
  giveOwnTeam(home, folder, 'empty', 1);
  return { home, folder, dir: projectTeamDir(home, projectOf(folder)!.key) };
}

describe('team-log.mjs', () => {
  it("prints the project's own log, and no changes for a project with no team of its own or no project", () => {
    const { home, folder } = project();
    expect(printed(home, folder)).toBe('{"changes":[{"at":1,"what":"team-given","from":"empty"}]}');
    const other = mkdtempSync(join(tmpdir(), 'woa-team-log-other-'));
    temps.push(other);
    expect(printed(home, other)).toBe('{"changes":[]}');
    expect(printed(home, null)).toBe('{"changes":[]}');
  });

  it(`prints only entries that are exactly entries, the newest ${SHOWN}`, () => {
    const { home, folder, dir } = project();
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
    const out = JSON.parse(printed(home, folder)) as { changes: { skill: string }[] };
    expect(out.changes).toHaveLength(SHOWN);
    expect(out.changes.at(-1)).toEqual(good.at(-1));
    expect(printed(home, folder)).not.toMatch(/PLANTED|evil|run-started/);
  });

  it("prints a specialist's change with its guild (v3.6), and drops one with anything else", () => {
    const { home, folder, dir } = project();
    const good = { at: 5, what: 'specialist-off', specialist: 'React dev', guild: 'Frontend' };
    const bad = [
      { ...good, note: 'sk-ant-PLANTED' },
      { ...good, guild: 'Ops' },
      { ...good, specialist: 'see https://evil.example' },
    ];
    writeFileSync(join(dir, 'changes.json'), JSON.stringify([good, ...bad]));
    expect(JSON.parse(printed(home, folder))).toEqual({ changes: [good] });
  });

  it('prints nothing of a broken log', () => {
    const { home, folder, dir } = project();
    writeFileSync(join(dir, 'changes.json'), '{"not": "a list"}');
    expect(printed(home, folder)).toBe('{"changes":[]}');
  });
});

describe('team-log.mjs and the notes (v3.7c)', () => {
  it("prints a note's change by its guild lead's name, and drops one that carries anything else", () => {
    const { home, folder, dir } = project();
    const good = { at: 5, what: 'note-approved', agent: 'Frontend dev' };
    const bad = [
      { ...good, text: 'Forms live in src/forms.' },
      { ...good, agent: 'Lead/PM' },
    ];
    writeFileSync(join(dir, 'changes.json'), JSON.stringify([good, ...bad]));
    expect(JSON.parse(printed(home, folder))).toEqual({ changes: [good] });
  });
});
