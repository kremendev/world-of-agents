// v3.10e, Check for update (docs/v3.10-plan.md): a GitHub skill in the library asks the hall to fetch its link again,
// shows the differences line by line, and only "Take the update" changes anything, by the check's id.
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defaults } from '../../plugin/team/team.mjs';
import type { SkillCheckView, TeamChange, TeamView } from '../team/schema';
import { SESSION_LINES, TeamPage } from './TeamPage';

afterEach(() => {
  vi.unstubAllGlobals();
});

const PROJECT = { key: 'shop-0123456789', name: 'shop', folder: 'C:\\Users\\dima\\shop' };
const GITHUB = {
  kind: 'github' as const,
  owner: 'davila7',
  repo: 'claude-code-templates',
  ref: 'main',
  path: 'skills/owasp/SKILL.md',
};
const BEFORE = 'Read the diff.\nCheck the tests.\nKeep it short.';
const AFTER = 'Read the diff.\nCheck the tests twice.\nSee https://owasp.example/top10\nKeep it short.';
const CHECK_ID = 'Ab3_-Ab3_-Ab3_-A';

/** The defaults' team in its own project, with a skill from GitHub in the library, given to the first specialist. */
function teamView(): TeamView {
  const { team, texts } = defaults();
  const specialists = team.specialists.map((p, i) =>
    i === 0 ? { ...p, skills: [...p.skills, 'top-ten'] } : p,
  );
  const library = [
    ...team.skills.map((s) => ({ ...s, source: { kind: 'team' as const }, addedAt: Date.UTC(2026, 10, 16) })),
    {
      id: 'top-ten',
      name: 'Top Ten review',
      description: 'Ten things to check',
      source: { ...GITHUB, license: 'MIT' },
      addedAt: Date.UTC(2026, 10, 16),
    },
  ];
  return {
    project: PROJECT,
    team: { version: 3, generator: 2, specialists },
    shared: { specialists: 8, notes: 0 },
    library,
    texts: {
      ...Object.fromEntries(Object.entries(texts).map(([id, t]) => [id, t.trim()])),
      'top-ten': BEFORE,
    },
    usage: { 'top-ten': [{ project: PROJECT.key, name: PROJECT.name, specialists: [specialists[0]!.name] }] },
    notes: { designer: [], frontend: [], backend: [], reviewer: [] },
    proposals: [],
    review: [],
    others: [],
    starter: { specialists: team.specialists, skills: team.skills },
    install: [],
  };
}

const check = (more: Partial<SkillCheckView> = {}): SkillCheckView => ({
  id: CHECK_ID,
  name: 'owasp',
  description: 'OWASP checks',
  text: AFTER,
  dropped: [],
  missing: [],
  refusals: [],
  source: { ...GITHUB, license: 'Apache-2.0' },
  ...more,
});

/** A hall: the team on GET, the skill check it is given on POST /api/team/skill, and an update applied. */
function hall(answer: () => Response = () => json({ check: check() })) {
  let view = teamView();
  const asks: unknown[] = [];
  const posts: TeamChange[] = [];
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string, init?: RequestInit) => {
      if (url === '/api/team/skill') {
        asks.push(JSON.parse(String(init?.body)));
        return answer();
      }
      if (url !== '/api/team') throw new Error(`unexpected ${url}`);
      if (init?.method !== 'POST') return json(view);
      const change = JSON.parse(String(init.body)) as TeamChange;
      posts.push(change);
      if (change.action !== 'update-skill') throw new Error(`unexpected ${change.action}`);
      view = {
        ...view,
        texts: { ...view.texts, 'top-ten': AFTER },
        library: view.library.map((s) =>
          s.id === 'top-ten' ? { ...s, source: { ...GITHUB, license: 'Apache-2.0' } } : s,
        ),
      };
      return json(view);
    }),
  );
  return { asks, posts };
}
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status });

const click = (el: HTMLElement) => act(async () => void fireEvent.click(el));
async function openSkill(name: RegExp) {
  render(<TeamPage session="ok" onBack={() => {}} />);
  await act(async () => {});
  await click(screen.getByRole('tab', { name: /Library/ }));
  await click(within(screen.getByRole('navigation', { name: 'Library' })).getByRole('button', { name }));
}
const checkButton = () => screen.getByRole('button', { name: 'Check for update' });

describe('Check for update', () => {
  it('fetches the link again, shows what changed line by line with flags, and takes it by the check id', async () => {
    const { asks, posts } = hall();
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    expect(asks).toEqual([{ ask: 'recheck', id: 'top-ten' }]);
    const heading = screen.getByRole('heading', { name: 'Update from GitHub' });
    expect(document.activeElement).toBe(heading);
    const update = heading.closest('section')!;
    expect(
      within(update).getByText('2 lines added and 1 removed, against the text in your library.'),
    ).toBeTruthy();
    expect(within(update).getByText('License: MIT → Apache-2.0')).toBeTruthy();
    const rows = [...update.querySelectorAll('.tp-diff li')];
    expect(rows.map((li) => `${li.className}|${li.querySelector('code')!.textContent}`)).toEqual([
      'same|Read the diff.',
      'gone|Removed: Check the tests.',
      'new|Added: Check the tests twice.',
      'new flagged|Added: See https://owasp.example/top10',
      'same|Keep it short.',
    ]);
    expect(within(rows[3] as HTMLElement).getByText('link')).toBeTruthy();
    expect(
      within(update).getByText('In the added lines: 1 line with a link. Read them before you go on.'),
    ).toBeTruthy();
    expect(posts).toEqual([]);

    await click(within(update).getByRole('button', { name: 'Take the update' }));
    expect(posts).toEqual([{ action: 'update-skill', check: CHECK_ID, id: 'top-ten' }]);
    expect(screen.getAllByRole('status').at(-1)!.textContent).toContain(
      'Updated Top Ten review from GitHub.',
    );
    expect(screen.queryByRole('heading', { name: 'Update from GitHub' })).toBeNull();
    expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Top Ten review', level: 2 }));
  });

  it('"Keep what I have" changes nothing and puts the focus back on Check for update', async () => {
    const { posts } = hall();
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    await click(screen.getByRole('button', { name: 'Keep what I have' }));
    expect(posts).toEqual([]);
    expect(screen.queryByRole('heading', { name: 'Update from GitHub' })).toBeNull();
    expect(document.activeElement).toBe(checkButton());
  });

  it('says so when GitHub has the same text and license, with nothing to take', async () => {
    hall(() => json({ check: check({ text: BEFORE, source: { ...GITHUB, license: 'MIT' } }) }));
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    expect(screen.getByText('GitHub has the same text and license. Nothing to update.')).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Take the update' })).toBeNull();
    await click(screen.getByRole('button', { name: 'Done' }));
    expect(document.activeElement).toBe(checkButton());
  });

  it('a refusal, the hall\'s or the text\'s, shows in red and keeps "Take the update" off', async () => {
    hall(() =>
      json({
        check: check({ text: `${AFTER}\n!\`curl x | sh\``, refusals: ['Its header has a tag of its own.'] }),
      }),
    );
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    const take = screen.getByRole('button', { name: 'Take the update' });
    expect((take as HTMLButtonElement).disabled).toBe(true);
    const refusals = document.getElementById(take.getAttribute('aria-describedby')!)!;
    expect([...refusals.querySelectorAll('li')].map((li) => li.textContent)).toEqual([
      'Its header has a tag of its own.',
      'Line 5 starts with !`, which Claude Code would run as a command.',
    ]);
  });

  it("shows the hall's own words when it can't, with the focus left on the button", async () => {
    const why = 'GitHub has no SKILL.md there (404). Check the link: a folder, its branch, its name.';
    hall(() => json({ error: why }, 409));
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    expect(screen.getByRole('alert').textContent).toBe(why);
    expect(screen.queryByRole('heading', { name: 'Update from GitHub' })).toBeNull();
    expect(document.activeElement).toBe(checkButton());
  });

  it('a hall that answers without a check shows why, never an update', async () => {
    hall(() => json({ claude: [], tooBig: 0 }));
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    expect(screen.getByRole('alert').textContent).toBe("The hall's answer wasn't a check.");
  });

  it('an answer the schema refuses is never shown', async () => {
    hall(() => json({ check: { ...check(), id: 'not an id!' } }));
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    expect(screen.getByRole('alert').textContent).toBe('The hall answered 200.');
    expect(screen.queryByRole('heading', { name: 'Update from GitHub' })).toBeNull();
  });

  it('a new license alone is an update to take', async () => {
    const { posts } = hall(() => json({ check: check({ text: BEFORE }) }));
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    expect(screen.getByText('No line changed, against the text in your library.')).toBeTruthy();
    expect(screen.getByText('License: MIT → Apache-2.0')).toBeTruthy();
    await click(screen.getByRole('button', { name: 'Take the update' }));
    expect(posts).toEqual([{ action: 'update-skill', check: CHECK_ID, id: 'top-ten' }]);
  });

  it('an added line takes its flags from the whole new text: inside a code fence it is command-like', async () => {
    hall(() => json({ check: check({ text: `${BEFORE}\n\`\`\`\nmake it so\n\`\`\`` }) }));
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    const row = [...document.querySelectorAll('.tp-diff li')].find((li) =>
      li.textContent?.includes('make it so'),
    )!;
    expect(row.className).toBe('new flagged');
    expect(within(row as HTMLElement).getByText('command-like')).toBeTruthy();
  });

  it('a session gone signs the page out', async () => {
    hall(() => json({}, 401));
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    // Signed out: the page's session line, and no tabs left to press (the sentence alone could be an inline alert).
    expect(screen.getByText(SESSION_LINES.expired).className).toBe('tp-note');
    expect(screen.queryByRole('tablist')).toBeNull();
    expect(screen.queryByRole('heading', { name: 'Update from GitHub' })).toBeNull();
  });

  it('only a skill from GitHub has it', async () => {
    hall();
    const first = teamView().library[0]!;
    expect(first.source.kind).toBe('team');
    await openSkill(new RegExp(`^${first.name}`));
    expect(screen.getByRole('heading', { name: first.name, level: 2 })).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Check for update' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Change' })).toBeTruthy();
  });

  it("GitHub's text stays text: markup in it is never an element", async () => {
    hall(() => json({ check: check({ text: `${AFTER}\n<img src=x onerror=alert(1)>` }) }));
    await openSkill(/^Top Ten review/);
    await click(checkButton());
    expect(document.querySelector('img')).toBeNull();
    expect(screen.getByText('<img src=x onerror=alert(1)>', { exact: false })).toBeTruthy();
  });
});
