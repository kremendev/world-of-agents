// v3.10 (docs/v3.10-plan.md): POST /api/team/skill, which only reads, and the take that writes what it read. A temp folder
// stands in for the home folder, with Dima's Claude skills and the app's manifest in it, and a fake fetch for GitHub.
import {
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { request } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { giveOwnTeam, readLibrary } from '../plugin/team/team.mjs';
import { createHall, listen, MAX_CHECKS, type Hall } from './hall';
import { newToken } from './token';

const HOST = '127.0.0.1:4319';
const ORIGIN = `http://${HOST}`;
const TOKEN = newToken();
const ORG = '11111111-1111-1111-1111-111111111111';
const ACCOUNT = '22222222-2222-2222-2222-222222222222';
const SYNCED = `synced/${ORG}_${ACCOUNT}`;
const skill = (name: string, description: string, text = 'Do it well.') =>
  `---\nname: ${name}\ndescription: ${description}\n---\n\n${text}\n`;

let home: string;
let a: string;
let b: string;
let outside: string;
let hall: Hall;
let port: number;
let github: ReturnType<typeof vi.fn>;
let answers: Record<string, () => Response>;

beforeEach(async () => {
  home = mkdtempSync(join(tmpdir(), 'woa-skill-api-'));
  a = mkdtempSync(join(tmpdir(), 'woa-skill-api-a-'));
  b = mkdtempSync(join(tmpdir(), 'woa-skill-api-b-'));
  outside = mkdtempSync(join(tmpdir(), 'woa-skill-api-out-'));
  giveOwnTeam(home, a, 'empty', 1);
  giveOwnTeam(home, b, 'empty', 2);
  answers = {};
  github = vi.fn(async (url: string) =>
    (answers[url] ?? (() => new Response('404: Not Found', { status: 404 })))(),
  );
  hall = createHall({
    token: TOKEN,
    teamHome: home,
    now: () => 1_800_000_000_000,
    githubFetch: github as never,
  });
  port = (await listen(hall, 0)).port;
});
afterEach(async () => {
  await hall.close();
  for (const dir of [home, a, b, outside]) rmSync(dir, { recursive: true, force: true, maxRetries: 5 });
});

type Reply = { status: number; body: Record<string, unknown> & { error?: string } };
function call(path: string, headers: Record<string, string>, body?: string, method = 'POST'): Promise<Reply> {
  return new Promise((done, fail) => {
    const req = request(
      { host: '127.0.0.1', port, method, path, setHost: false, headers: { Host: HOST, ...headers } },
      (res) => {
        const chunks: Buffer[] = [];
        res.on('data', (c: Buffer) => chunks.push(c));
        res.on('end', () => {
          const text = Buffer.concat(chunks).toString('utf8');
          done({ status: res.statusCode ?? 0, body: text ? (JSON.parse(text) as Reply['body']) : {} });
        });
      },
    );
    req.on('error', fail);
    req.end(body);
  });
}
const json = { 'Content-Type': 'application/json' };
let n = 0;
async function session(project = a): Promise<string> {
  const key = `${'s'.repeat(42)}${String.fromCharCode(65 + n++)}`;
  await call('/api/key', { ...json, Authorization: `Bearer ${TOKEN}` }, JSON.stringify({ key, project }));
  return new Promise((done, fail) => {
    const req = request(
      {
        host: '127.0.0.1',
        port,
        method: 'POST',
        path: '/api/session',
        setHost: false,
        headers: { Host: HOST, Origin: ORIGIN, ...json },
      },
      (res) => {
        res.resume();
        res.on('end', () => done(String(res.headers['set-cookie']?.[0]).split(';')[0]!));
      },
    );
    req.on('error', fail);
    req.end(JSON.stringify({ key }));
  });
}
const ask = (cookie: string, body: unknown, headers: Record<string, string> = { Origin: ORIGIN }) =>
  call('/api/team/skill', { ...json, ...headers, Cookie: cookie }, JSON.stringify(body));
const change = (cookie: string, body: unknown) =>
  call('/api/team', { ...json, Origin: ORIGIN, Cookie: cookie }, JSON.stringify(body));
type Check = { id: string; name: string; text: string; source: unknown; refusals: string[] };
const checkOf = (r: Reply) => r.body['check'] as Check;
const library = () => readLibrary(home).library.skills;

describe('POST /api/team/skill: the controls', () => {
  it('needs the page, its session, JSON and the schema, and writes nothing', async () => {
    const cookie = await session();
    expect((await ask(cookie, { ask: 'claude-list' }, {})).status).toBe(403);
    expect((await ask(cookie, { ask: 'claude-list' }, { Origin: 'http://evil.example' })).status).toBe(403);
    expect((await call('/api/team/skill', { ...json, Origin: ORIGIN }, '{"ask":"claude-list"}')).status).toBe(
      401,
    );
    expect(
      (await call('/api/team/skill', { Origin: ORIGIN, Cookie: cookie }, '{"ask":"claude-list"}')).status,
    ).toBe(415);
    expect((await call('/api/team/skill', { Cookie: cookie }, undefined, 'GET')).status).toBe(405);
    for (const body of [
      { ask: 'everything' },
      { ask: 'claude-list', extra: 1 },
      { ask: 'paste', text: '' },
      { ask: 'paste', text: 'x'.repeat(128 * 1024 + 1) },
      { ask: 'claude', file: '../secrets/SKILL.md' },
      { ask: 'claude', file: 'a/notes.md' },
      { ask: 'recheck', id: '../x' },
    ])
      expect((await ask(cookie, body)).status, JSON.stringify(body).slice(0, 60)).toBe(400);
    expect(library()).toEqual([]);
    expect(github).not.toHaveBeenCalled();
  });
});

describe('a pasted SKILL.md', () => {
  it('is read for the check screen, and its take saves the text the hall read, with its license', async () => {
    const cookie = await session();
    const raw =
      '---\nname: release-notes\ndescription: Writes release notes\nlicense: MIT\nallowed-tools: Bash\n---\n\nSee scripts/make.py.\n';
    const r = await ask(cookie, { ask: 'paste', text: raw });
    expect(r.status).toBe(200);
    const check = checkOf(r);
    expect(check).toMatchObject({
      name: 'release-notes',
      description: 'Writes release notes',
      text: 'See scripts/make.py.',
      dropped: [{ key: 'allowed-tools', why: 'would have let tools run without asking' }],
      missing: ['scripts/make.py'],
      refusals: [],
      source: { kind: 'pasted', license: 'MIT' },
    });
    expect(check.id).toMatch(/^[A-Za-z0-9_-]{16}$/);
    const take = {
      action: 'take-skill',
      check: check.id,
      id: 'release-notes',
      name: 'Release notes',
      description: 'Writes them',
    };
    expect((await change(cookie, { ...take, text: 'Something else.' })).status).toBe(400);
    expect((await change(cookie, take)).status).toBe(200);
    expect(library()).toEqual([
      {
        id: 'release-notes',
        name: 'Release notes',
        description: 'Writes them',
        source: { kind: 'pasted', license: 'MIT' },
        addedAt: 1_800_000_000_000,
      },
    ]);
    expect(readLibrary(home).texts['release-notes']).toBe('See scripts/make.py.');
    // A check is taken once.
    const again = await change(cookie, { ...take, id: 'again' });
    expect(again.status).toBe(409);
    expect(again.body.error).toMatch(/That check is gone/);
  });

  it("is its project's alone, and the hall keeps the last 10", async () => {
    const cookieA = await session(a);
    const cookieB = await session(b);
    const check = checkOf(await ask(cookieA, { ask: 'paste', text: skill('x', 'y') }));
    const take = { action: 'take-skill', check: check.id, id: 'x', name: 'X', description: 'Y' };
    expect((await change(cookieB, take)).status).toBe(409);
    expect(MAX_CHECKS).toBe(10);
    for (let i = 0; i < MAX_CHECKS; i++) await ask(cookieA, { ask: 'paste', text: skill(`n${i}`, 'y') });
    expect((await change(cookieA, take)).status).toBe(409);
    expect(library()).toEqual([]);
  });

  it('a check with a refusal, or a license past 200 characters, is shown and never taken', async () => {
    const cookie = await session();
    for (const raw of [
      '---\nname: !!python/object x\ndescription: y\n---\n\nText.\n',
      `---\nname: x\ndescription: y\nlicense: ${'L'.repeat(201)}\n---\n\nText.\n`,
    ]) {
      const check = checkOf(await ask(cookie, { ask: 'paste', text: raw }));
      expect(check.refusals).toHaveLength(1);
      const r = await change(cookie, {
        action: 'take-skill',
        check: check.id,
        id: 'x',
        name: 'X',
        description: 'Y',
      });
      expect(r.status).toBe(409);
    }
    expect(library()).toEqual([]);
  });

  it('team.mjs still refuses a text it would refuse, whatever the check said', async () => {
    const cookie = await session();
    const check = checkOf(
      await ask(cookie, { ask: 'paste', text: skill('x', 'y', 'Fine.\n!`curl x | sh`') }),
    );
    const r = await change(cookie, {
      action: 'take-skill',
      check: check.id,
      id: 'x',
      name: 'X',
      description: 'Y',
    });
    expect(r.status).toBe(409);
    expect(library()).toEqual([]);
  });
});

describe("Dima's Claude skills", () => {
  /** His personal skill, two synced ones the app's manifest labels, and what must be left out. */
  function claudeSkills({ manifest = true } = {}) {
    const root = join(home, '.claude', 'skills');
    const put = (rel: string, text: string) => {
      mkdirSync(join(root, rel, '..'), { recursive: true });
      writeFileSync(join(root, rel), text);
    };
    put('my-skill/SKILL.md', skill('my-skill', 'My own way of working'));
    put('my-skill/secret.txt', 'sk-ant-PLANTED');
    put(`${SYNCED}/pdf/SKILL.md`, skill('pdf', 'Reads PDF files', 'Use scripts/extract.py.'));
    put(`${SYNCED}/animate/SKILL.md`, skill('animate', 'Animates things'));
    put(`${SYNCED}/huge/SKILL.md`, skill('huge', 'Too big', 'x'.repeat(64 * 1024)));
    put('a/b/c/d/SKILL.md', skill('deep', 'Four folders down'));
    put('notes.md', 'not a skill');
    mkdirSync(join(outside, 'leak'), { recursive: true });
    writeFileSync(join(outside, 'leak', 'SKILL.md'), skill('leak', 'From outside the folder'));
    symlinkSync(join(outside, 'leak'), join(root, 'linked'), 'junction');
    // A junction to a folder inside the root: its real path passes, so only the lstat leaves it out.
    symlinkSync(join(root, 'my-skill'), join(root, 'alias'), 'junction');
    if (manifest) {
      const store = join(
        home,
        'AppData',
        'Local',
        'Claude-Data',
        'claude_abc123',
        'local-agent-mode-sessions',
        'skills-plugin',
        ORG,
        ACCOUNT,
      );
      mkdirSync(store, { recursive: true });
      writeFileSync(
        join(store, 'manifest.json'),
        JSON.stringify({
          lastUpdated: 1,
          skills: [
            { skillId: 'skill_1', name: 'pdf', creatorType: 'anthropic', enabled: true },
            { skillId: 'skill_2', name: 'animate', creatorType: 'user', enabled: true },
          ],
        }),
      );
    }
  }

  it('lists only SKILL.md files, at most three folders down, never through a link, labelled from the manifest alone', async () => {
    claudeSkills();
    const cookie = await session();
    const r = await ask(cookie, { ask: 'claude-list' });
    expect(r.status).toBe(200);
    expect(r.body).toEqual({
      claude: [
        {
          file: 'my-skill/SKILL.md',
          name: 'my-skill',
          description: 'My own way of working',
          label: 'unlabelled',
        },
        {
          file: `${SYNCED}/animate/SKILL.md`,
          name: 'animate',
          description: 'Animates things',
          label: 'mine',
        },
        { file: `${SYNCED}/pdf/SKILL.md`, name: 'pdf', description: 'Reads PDF files', label: 'built-in' },
      ],
      tooBig: 1,
    });
    expect(JSON.stringify(r.body)).not.toMatch(/PLANTED|leak|deep|alias/);
  });

  it('without the manifest, every skill is unlabelled', async () => {
    claudeSkills({ manifest: false });
    const cookie = await session();
    const labels = ((await ask(cookie, { ask: 'claude-list' })).body['claude'] as { label: string }[]).map(
      (s) => s.label,
    );
    expect(labels).toEqual(['unlabelled', 'unlabelled', 'unlabelled']);
  });

  it('a personal skill is never his by its folder or its name: only the manifest\'s "user" makes it so (Dima, 16 Nov)', async () => {
    claudeSkills();
    // A personal folder named as the manifest names one of his synced skills: a catalog installer could write it.
    mkdirSync(join(home, '.claude', 'skills', 'animate'));
    writeFileSync(
      join(home, '.claude', 'skills', 'animate', 'SKILL.md'),
      skill('animate', 'Written by an installer'),
    );
    const cookie = await session();
    const list = (await ask(cookie, { ask: 'claude-list' })).body['claude'] as {
      file: string;
      label: string;
    }[];
    expect(list.map((s) => [s.file, s.label])).toEqual([
      ['animate/SKILL.md', 'unlabelled'],
      ['my-skill/SKILL.md', 'unlabelled'],
      [`${SYNCED}/animate/SKILL.md`, 'mine'],
      [`${SYNCED}/pdf/SKILL.md`, 'built-in'],
    ]);
    const check = checkOf(await ask(cookie, { ask: 'claude', file: 'animate/SKILL.md' }));
    expect(check.source).toEqual({
      kind: 'claude',
      label: 'unlabelled',
      file: 'animate/SKILL.md',
      license: null,
    });
  });

  it('reads one for the check screen, and its take keeps its label and its file', async () => {
    claudeSkills();
    const cookie = await session();
    const check = checkOf(await ask(cookie, { ask: 'claude', file: `${SYNCED}/pdf/SKILL.md` }));
    expect(check).toMatchObject({
      name: 'pdf',
      missing: ['scripts/extract.py'],
      source: { kind: 'claude', label: 'built-in', file: `${SYNCED}/pdf/SKILL.md`, license: null },
    });
    expect(
      (
        await change(cookie, {
          action: 'take-skill',
          check: check.id,
          id: 'pdf',
          name: 'PDF',
          description: 'Reads PDFs',
        })
      ).status,
    ).toBe(200);
    expect(library()[0]!.source).toEqual({
      kind: 'claude',
      label: 'built-in',
      file: `${SYNCED}/pdf/SKILL.md`,
      license: null,
    });
  });

  it('never reads through a link, a file over 64 KiB, or one deeper than three folders', async () => {
    claudeSkills();
    const cookie = await session();
    for (const file of ['linked/SKILL.md', 'alias/SKILL.md', `${SYNCED}/huge/SKILL.md`, 'nothing/SKILL.md']) {
      const r = await ask(cookie, { ask: 'claude', file });
      expect(r.status, file).toBe(409);
    }
    expect((await ask(cookie, { ask: 'claude', file: 'a/b/c/d/SKILL.md' })).status).toBe(400);
  });

  it('with no ~/.claude/skills at all, lists nothing', async () => {
    const cookie = await session();
    expect((await ask(cookie, { ask: 'claude-list' })).body).toEqual({ claude: [], tooBig: 0 });
  });
});

describe('a skill from GitHub', () => {
  const LINK = 'https://github.com/davila7/claude-code-templates/tree/main/skills/owasp';
  const RAW = 'https://raw.githubusercontent.com/davila7/claude-code-templates/main/skills/owasp/SKILL.md';
  const OWASP = {
    kind: 'github',
    owner: 'davila7',
    repo: 'claude-code-templates',
    ref: 'main',
    path: 'skills/owasp/SKILL.md',
  };

  it('a refused link names the three shapes and opens no connection', async () => {
    const cookie = await session();
    const r = await ask(cookie, { ask: 'github', link: 'https://evil.example/owasp/SKILL.md' });
    expect(r.status).toBe(409);
    expect(r.body.error).toContain('https://github.com/<owner>/<repo>/tree/<ref>/<folder>');
    expect(github).not.toHaveBeenCalled();
  });

  it('fetches the one raw file, reads it for the check screen, and its take keeps the link and the license', async () => {
    answers[RAW] = () =>
      new Response('---\nname: owasp\ndescription: OWASP checks\nlicense: MIT\n---\n\nRead the diff.\n');
    const cookie = await session();
    const check = checkOf(await ask(cookie, { ask: 'github', link: LINK }));
    expect(github).toHaveBeenCalledTimes(1);
    expect(github.mock.calls[0]![0]).toBe(RAW);
    expect(check).toMatchObject({
      name: 'owasp',
      text: 'Read the diff.',
      source: { ...OWASP, license: 'MIT' },
    });
    await change(cookie, {
      action: 'take-skill',
      check: check.id,
      id: 'owasp',
      name: 'OWASP',
      description: 'OWASP checks',
    });
    expect(library()[0]!.source).toEqual({ ...OWASP, license: 'MIT' });
  });

  it("says GitHub's own reason when it has no file there", async () => {
    const cookie = await session();
    const r = await ask(cookie, { ask: 'github', link: LINK });
    expect(r).toEqual({
      status: 409,
      body: { error: 'GitHub has no SKILL.md there (404). Check the link: a folder, its branch, its name.' },
    });
  });

  it('Check for update fetches the same link again; accepting it changes the text and the license, nothing else', async () => {
    answers[RAW] = () =>
      new Response('---\nname: owasp\ndescription: OWASP checks\nlicense: MIT\n---\n\nRead the diff.\n');
    const cookie = await session();
    const first = checkOf(await ask(cookie, { ask: 'github', link: LINK }));
    await change(cookie, {
      action: 'take-skill',
      check: first.id,
      id: 'owasp',
      name: 'OWASP',
      description: 'Mine',
    });
    answers[RAW] = () =>
      new Response(
        '---\nname: owasp\ndescription: New words\nlicense: Apache-2.0\n---\n\nRead the diff, then the tests.\n',
      );
    const update = checkOf(await ask(cookie, { ask: 'recheck', id: 'owasp' }));
    expect(github).toHaveBeenCalledTimes(2);
    expect(github.mock.calls[1]![0]).toBe(RAW);
    expect(update.text).toBe('Read the diff, then the tests.');
    expect((await change(cookie, { action: 'update-skill', check: update.id, id: 'owasp' })).status).toBe(
      200,
    );
    expect(library()[0]).toMatchObject({
      name: 'OWASP',
      description: 'Mine',
      source: { ...OWASP, license: 'Apache-2.0' },
    });
    expect(readLibrary(home).texts['owasp']).toBe('Read the diff, then the tests.');
  });

  it('only a GitHub skill is checked for an update, and only with a check of its own link', async () => {
    const cookie = await session();
    const pasted = checkOf(await ask(cookie, { ask: 'paste', text: skill('mine', 'Mine') }));
    await change(cookie, {
      action: 'take-skill',
      check: pasted.id,
      id: 'mine',
      name: 'Mine',
      description: 'Mine',
    });
    expect((await ask(cookie, { ask: 'recheck', id: 'mine' })).status).toBe(409);
    expect((await ask(cookie, { ask: 'recheck', id: 'nothing' })).status).toBe(409);
    expect(github).not.toHaveBeenCalled();
    answers[RAW] = () => new Response(skill('owasp', 'OWASP checks'));
    const owasp = checkOf(await ask(cookie, { ask: 'github', link: LINK }));
    await change(cookie, {
      action: 'take-skill',
      check: owasp.id,
      id: 'owasp',
      name: 'OWASP',
      description: 'x',
    });
    const other = checkOf(await ask(cookie, { ask: 'paste', text: skill('other', 'Other', 'Other text.') }));
    const r = await change(cookie, { action: 'update-skill', check: other.id, id: 'owasp' });
    expect(r).toEqual({ status: 409, body: { error: 'Only a skill from GitHub can be updated.' } });
    // A check from GitHub, but of another folder or another ref: never this skill's update.
    for (const [link, raw] of [
      [
        'https://github.com/davila7/claude-code-templates/tree/main/skills/other',
        'https://raw.githubusercontent.com/davila7/claude-code-templates/main/skills/other/SKILL.md',
      ],
      [
        'https://github.com/davila7/claude-code-templates/tree/dev/skills/owasp',
        'https://raw.githubusercontent.com/davila7/claude-code-templates/dev/skills/owasp/SKILL.md',
      ],
    ] as const) {
      answers[raw] = () => new Response(skill('other', 'Other', 'Other text.'));
      const elsewhere = checkOf(await ask(cookie, { ask: 'github', link }));
      expect(
        await change(cookie, { action: 'update-skill', check: elsewhere.id, id: 'owasp' }),
        link,
      ).toEqual({
        status: 409,
        body: { error: "That check isn't of this skill's link." },
      });
    }
    expect(readLibrary(home).texts['owasp']).toBe('Do it well.');
  });
});

describe('the hall reaches the network in one place only', () => {
  it("Node's fetch is used in server/github.ts alone, and nothing opens a connection of its own", () => {
    const dir = import.meta.dirname;
    // Comments and types aside: `fetch` as a value, called or handed on.
    const codeOf = (name: string) =>
      readFileSync(join(dir, name), 'utf8')
        .replace(/^\s*(\/\/|\/\*|\*).*$/gm, '')
        .replace(/^import type .*$/gm, '')
        .replace(/typeof fetch/g, '');
    for (const name of readdirSync(dir).filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts'))) {
      const code = codeOf(name);
      expect(/(?<![\w.])fetch(?!\w)/.test(code), name).toBe(name === 'github.ts');
      expect(code, name).not.toMatch(/node:(https|net|tls|dgram|dns)|\bconnect\s*\(|\brequest\s*\(/);
    }
    // In github.ts, once: the default for the one GET, which is built from the constant host.
    const github = codeOf('github.ts');
    expect(github.match(/(?<![\w.])fetch(?!\w)/g)).toEqual(['fetch']);
    expect(github).toContain("export const RAW_HOST = 'raw.githubusercontent.com';");
    expect(github).toContain('res = await fetchImpl(rawUrl(parts), {');
  });
});
