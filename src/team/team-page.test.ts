// The team editor's page side (v3.4c, T8): the key out of the address bar before anything else, its one exchange, the
// text checks, and the schema's agreement with team.mjs, which checks every write again.
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defaults, problem, textProblem } from '../../plugin/team/team.mjs';
import { exchangeKey } from './api';
import { startTeamSession, takeKey } from './key';
import { teamChangeSchema } from './schema';
import { checkText } from './text';

const KEY = `${'a'.repeat(42)}Z`;

afterEach(() => {
  vi.unstubAllGlobals();
});

function address(hash: string) {
  const calls: string[] = [];
  const loc = { hash, pathname: '/', search: '' };
  const hist = {
    state: null,
    replaceState: (_: unknown, __: string, url?: string | URL | null) => {
      calls.push(`replace ${String(url)}`);
      loc.hash = '';
    },
  };
  return { loc, hist, calls };
}

describe('the key in the address', () => {
  it('is taken and removed from the address bar, a broken one too; an address without one is left alone', () => {
    const good = address(`#k=${KEY}`);
    expect(takeKey(good.loc, good.hist)).toBe(KEY);
    expect(good.calls).toEqual(['replace /']);
    const broken = address('#k=short');
    expect(takeKey(broken.loc, broken.hist)).toBeNull();
    expect(broken.calls).toEqual(['replace /']);
    const none = address('#other');
    expect(takeKey(none.loc, none.hist)).toBeNull();
    expect(none.calls).toEqual([]);
  });

  it('leaves the address bar before the hall is asked, and is sent once, in the body, never in the URL', async () => {
    const { loc, hist, calls } = address(`#k=${KEY}`);
    const fetch = vi.fn(async (url: string, init: RequestInit) => {
      calls.push(`fetch ${url} ${String(init.body)}`);
      return new Response(null, { status: 204 });
    });
    vi.stubGlobal('fetch', fetch);
    expect(await startTeamSession(loc, hist)).toBe('ok');
    expect(calls).toEqual(['replace /', `fetch /api/session {"key":"${KEY}"}`]);
  });

  it("reads the hall's answer: used, expired (or never seen), or no hall", async () => {
    const answer = (status: number, body: unknown) => async () =>
      new Response(JSON.stringify(body), { status });
    vi.stubGlobal('fetch', answer(403, { error: 'used' }));
    expect(await exchangeKey(KEY)).toBe('used');
    vi.stubGlobal('fetch', answer(403, { error: 'expired' }));
    expect(await exchangeKey(KEY)).toBe('expired');
    vi.stubGlobal('fetch', answer(403, '<html>'));
    expect(await exchangeKey(KEY)).toBe('expired');
    vi.stubGlobal('fetch', async () => {
      throw new TypeError('Failed to fetch');
    });
    expect(await exchangeKey(KEY)).toBe('offline');
  });
});

describe("a skill's text", () => {
  it('refuses what team.mjs refuses: a line Claude Code would run, invisible characters, empty, too long', () => {
    const hidden = `a${String.fromCodePoint(0x200b)}b${String.fromCodePoint(0x202e)}c`;
    const cases = [
      'Fine.\n  !`curl x | sh`',
      hidden,
      '   ',
      'x'.repeat(8001),
      'A plain text.\nWith two lines.',
    ];
    for (const text of cases) {
      expect(checkText(text).refusals.length > 0, JSON.stringify(text.slice(0, 20))).toBe(
        textProblem(text) !== null,
      );
    }
    expect(checkText(hidden).refusals).toEqual(['It holds 2 invisible characters.']);
  });

  it('flags links and command-like lines, and a fenced block whole', () => {
    const { lines, refusals } = checkText(
      [
        'Use the docs at https://example.com/x.',
        'See [the guide](notes.md).',
        '$ npm run check',
        'npx vitest',
        '```',
        'anything in here',
        '```',
        'A line with !`x` in the middle.',
        'Plain words.',
      ].join('\n'),
    );
    expect(refusals).toEqual([]);
    expect(lines.map((l) => l.flags)).toEqual([
      ['link'],
      ['link'],
      ['command'],
      ['command'],
      ['command'],
      ['command'],
      ['command'],
      ['command'],
      [],
    ]);
  });
});

describe('the schema and team.mjs agree on names', () => {
  const { team } = defaults();
  const named = (name: string) => ({
    ...team,
    skills: team.skills.map((s, i) => (i === 0 ? { ...s, name } : s)),
  });
  it.each([
    'Release notes',
    'C++ & Rust (fast)',
    'Ünïcode names',
    'a/b-c.d',
    'Name: colon',
    'Hash # sign',
    ' leading space',
    'line\nbreak',
    'x'.repeat(61),
    'quote "marks"',
  ])('%j', (name) => {
    const change = { action: 'change-skill', id: 'x', name, description: 'D', text: 'T' };
    expect(teamChangeSchema.safeParse(change).success).toBe(problem(named(name)) === null);
  });
});
