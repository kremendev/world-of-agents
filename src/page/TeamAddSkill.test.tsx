// v3.10f, "+ Add a skill" (the approved mockup of 16 Nov): four ways in, three read by the hall and ending on one check
// screen, whose Add to library sends the check's id, the new id, the name and what it's for, nothing else.
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defaults } from '../../plugin/team/team.mjs';
import { LINK_SHAPES as HALL_SHAPES } from '../../server/github';
import type { ClaudeSkillView, SkillAsk, SkillCheckView, TeamChange, TeamView } from '../team/schema';
import { LINK_SHAPES } from '../team/view';
import { TeamPage } from './TeamPage';

afterEach(() => {
  vi.unstubAllGlobals();
});

const PROJECT = { key: 'shop-0123456789', name: 'shop', folder: 'C:\\Users\\dima\\shop' };
const SYNCED = 'synced/11111111-1111-1111-1111-111111111111_22222222-2222-2222-2222-222222222222';
const GITHUB = {
  kind: 'github' as const,
  owner: 'davila7',
  repo: 'claude-code-templates',
  ref: 'main',
  path: 'skills/top-ten/SKILL.md',
};
const DAY = Date.UTC(2026, 10, 16);

/** The defaults' team in its own project; the library adds one skill from GitHub, one Claude skill and one pasted. */
function teamView(): TeamView {
  const { team, texts } = defaults();
  return {
    project: PROJECT,
    team: { version: 3, generator: 2, specialists: team.specialists },
    shared: { specialists: 8, notes: 0 },
    library: [
      ...team.skills.map((s) => ({ ...s, source: { kind: 'team' as const }, addedAt: DAY })),
      {
        id: 'top-ten',
        name: 'Top Ten',
        description: 'Ten checks',
        source: { ...GITHUB, license: 'MIT' },
        addedAt: DAY,
      },
      {
        id: 'pdf',
        name: 'PDF',
        description: 'Reads PDFs',
        source: { kind: 'claude', label: 'built-in', file: `${SYNCED}/pdf/SKILL.md`, license: null },
        addedAt: DAY,
      },
      {
        id: 'notes',
        name: 'Notes',
        description: 'Notes',
        source: { kind: 'pasted', license: null },
        addedAt: DAY,
      },
    ],
    texts: {
      ...Object.fromEntries(Object.entries(texts).map(([id, t]) => [id, t.trim()])),
      'top-ten': 'Ten.',
      pdf: 'PDF.',
      notes: 'Notes.',
    },
    usage: {},
    notes: { designer: [], frontend: [], backend: [], reviewer: [] },
    proposals: [],
    review: [],
    others: [],
    starter: { specialists: team.specialists, skills: team.skills },
    install: [],
  };
}

const RAW =
  '---\nname: release-notes\ndescription: Writes release notes\nlicense: MIT\nallowed-tools: Bash\n---\n\nSee scripts/make.py.\nThen https://example.com/notes';
const check = (more: Partial<SkillCheckView> = {}): SkillCheckView => ({
  id: 'Ab3_-Ab3_-Ab3_-A',
  name: 'release-notes',
  description: 'Writes release notes',
  text: 'See scripts/make.py.\nThen https://example.com/notes',
  dropped: [{ key: 'allowed-tools', why: 'would have let tools run without asking' }],
  missing: ['scripts/make.py'],
  refusals: [],
  source: { kind: 'pasted', license: 'MIT' },
  ...more,
});
const CLAUDE: ClaudeSkillView[] = [
  { file: 'my-skill/SKILL.md', name: 'my-skill', description: 'My own way', label: 'mine' },
  { file: `${SYNCED}/pdf/SKILL.md`, name: 'pdf', description: 'Reads PDF files', label: 'built-in' },
  { file: `${SYNCED}/animate/SKILL.md`, name: 'animate', description: 'Animates things', label: 'mine' },
];

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status });
/**
 * A hall: the team on GET; POST /api/team/skill answered by `answer`; a take-skill added to the library as the hall
 * would, from the check it last gave.
 */
function hall(answer: (ask: SkillAsk) => Response | Promise<Response> = () => json({ check: check() })) {
  let view = teamView();
  let last: SkillCheckView | null = null;
  const asks: SkillAsk[] = [];
  const posts: TeamChange[] = [];
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string, init?: RequestInit) => {
      if (url === '/api/team/skill') {
        const ask = JSON.parse(String(init?.body)) as SkillAsk;
        asks.push(ask);
        const res = await answer(ask);
        const body = (await res.clone().json()) as { check?: SkillCheckView };
        if (body.check) last = body.check;
        return res;
      }
      if (url !== '/api/team') throw new Error(`unexpected ${url}`);
      if (init?.method !== 'POST') return json(view);
      const change = JSON.parse(String(init.body)) as TeamChange;
      posts.push(change);
      if (change.action !== 'take-skill' || !last) throw new Error(`unexpected ${change.action}`);
      view = {
        ...view,
        library: [
          ...view.library,
          {
            id: change.id,
            name: change.name,
            description: change.description,
            source: last.source,
            addedAt: DAY,
          },
        ],
        texts: { ...view.texts, [change.id]: last.text },
      };
      return json(view);
    }),
  );
  return { asks, posts };
}

const click = (el: HTMLElement) => act(async () => void fireEvent.click(el));
const type = (label: string | RegExp, value: string) =>
  act(() => void fireEvent.change(screen.getByLabelText(label), { target: { value } }));
async function openAdding() {
  render(<TeamPage session="ok" onBack={() => {}} />);
  await act(async () => {});
  await click(screen.getByRole('tab', { name: /Library/ }));
  await click(screen.getByRole('button', { name: '+ Add a skill' }));
}
const way = (name: string) => screen.getByRole('button', { name: new RegExp(`^${name}`) });
const factsOf = (root: HTMLElement) =>
  Object.fromEntries(
    [...root.querySelectorAll('.tp-facts > div')].map((d) => [
      d.querySelector('dt')!.textContent,
      d.querySelector('dd')!.textContent,
    ]),
  );

describe('+ Add a skill: four ways in', () => {
  it('offers the four, with the focus on its heading; Cancel closes it and asks nothing', async () => {
    const { asks } = hall();
    await openAdding();
    expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Add a skill' }));
    for (const name of ['From your Claude skills', 'From GitHub', 'Paste a SKILL.md', 'Write a new one'])
      expect(way(name)).toBeTruthy();
    await click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('heading', { name: 'Add a skill' })).toBeNull();
    expect(asks).toEqual([]);
  });

  it('"Write a new one" opens the skill form', async () => {
    hall();
    await openAdding();
    await click(way('Write a new one'));
    expect(screen.getByRole('heading', { name: 'Write a new skill' })).toBeTruthy();
  });
});

describe('Paste a SKILL.md and the check screen', () => {
  it('reads the paste, shows everything the mockup lists, and Add sends the check id and the two fields only', async () => {
    const { asks, posts } = hall();
    await openAdding();
    await click(way('Paste a SKILL.md'));
    expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Paste a SKILL.md' }));
    type('The whole file, its header included', RAW);
    await click(screen.getByRole('button', { name: 'Check it' }));
    expect(asks).toEqual([{ ask: 'paste', text: RAW }]);

    const heading = screen.getByRole('heading', { name: 'Check before adding' });
    expect(document.activeElement).toBe(heading);
    const form = heading.closest('form')!;
    expect((screen.getByLabelText('Name') as HTMLInputElement).value).toBe('release-notes');
    expect((screen.getByLabelText("What it's for") as HTMLInputElement).value).toBe('Writes release notes');
    expect(factsOf(form)).toEqual({
      From: 'Pasted',
      License: 'MIT',
      Cost: 'about 10 tokens every time a specialist that has it starts · 51 of 20,000 characters',
    });
    const dropped = within(form).getByRole('region', { name: 'Left out of its header' });
    expect(dropped.querySelector('li')!.textContent).toBe(
      'allowed-tools: would have let tools run without asking',
    );
    const missing = within(form).getByRole('region', { name: "It mentions files that don't come along" });
    expect(missing.querySelector('li')!.textContent).toBe('scripts/make.py');
    const text = within(form).getByRole('region', { name: 'The whole text, as a specialist would read it' });
    expect([...text.querySelectorAll('li code')].map((c) => c.textContent)).toEqual([
      'See scripts/make.py.',
      'Then https://example.com/notes',
    ]);
    expect(within(text).getByText('link')).toBeTruthy();

    type('Name', 'Release notes');
    type("What it's for", 'How we write them');
    await click(screen.getByRole('button', { name: 'Add to library' }));
    expect(posts).toEqual([
      {
        action: 'take-skill',
        check: 'Ab3_-Ab3_-Ab3_-A',
        id: 'release-notes',
        name: 'Release notes',
        description: 'How we write them',
      },
    ]);
    expect(screen.getAllByRole('status').at(-1)!.textContent).toContain(
      'Added Release notes to the library.',
    );
    expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Release notes', level: 2 }));
  });

  it("refusals in red keep Add off: the hall's, a name taken, a description too long, the text's own", async () => {
    hall(() =>
      json({ check: check({ refusals: ['Its header has a tag of its own.'], text: 'Fine.\n!`rm -rf /`' }) }),
    );
    await openAdding();
    await click(way('Paste a SKILL.md'));
    type('The whole file, its header included', RAW);
    await click(screen.getByRole('button', { name: 'Check it' }));
    type('Name', 'OWASP checks');
    type("What it's for", 'x'.repeat(1025));
    const add = screen.getByRole('button', { name: 'Add to library' });
    expect((add as HTMLButtonElement).disabled).toBe(true);
    const list = document.getElementById(add.getAttribute('aria-describedby')!)!;
    expect([...list.querySelectorAll('li')].map((li) => li.textContent)).toEqual([
      'Its header has a tag of its own.',
      'A skill with the id woa-team:owasp-checks is in the library already.',
      "What it's for must be one line of 1,024 characters at most, with no hidden characters and no space at either end.",
      'Line 2 starts with !`, which Claude Code would run as a command.',
    ]);
  });

  it('Cancel on the check screen goes back to the paste, kept; an empty or oversized paste asks nothing', async () => {
    const { asks } = hall();
    await openAdding();
    await click(way('Paste a SKILL.md'));
    await click(screen.getByRole('button', { name: 'Check it' }));
    type('The whole file, its header included', 'x'.repeat(128 * 1024 + 1));
    expect(screen.getByText('It is over 128 KiB.')).toBeTruthy();
    await click(screen.getByRole('button', { name: 'Check it' }));
    expect(asks).toEqual([]);
    type('The whole file, its header included', RAW);
    await click(screen.getByRole('button', { name: 'Check it' }));
    await click(screen.getByRole('button', { name: 'Cancel' }));
    expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Paste a SKILL.md' }));
    expect((screen.getByLabelText('The whole file, its header included') as HTMLTextAreaElement).value).toBe(
      RAW,
    );
  });

  it("a file's text stays text: markup in it is never an element", async () => {
    hall(() => json({ check: check({ name: '<b>x</b>', text: '<img src=x onerror=alert(1)>' }) }));
    await openAdding();
    await click(way('Paste a SKILL.md'));
    type('The whole file, its header included', RAW);
    await click(screen.getByRole('button', { name: 'Check it' }));
    expect(document.querySelector('img, b')).toBeNull();
    expect(screen.getByText('<img src=x onerror=alert(1)>')).toBeTruthy();
  });
});

describe('From GitHub', () => {
  it('lists the three shapes the hall takes, in step with server/github.ts', async () => {
    expect(LINK_SHAPES).toEqual(HALL_SHAPES);
    hall();
    await openAdding();
    await click(way('From GitHub'));
    const box = screen.getByLabelText('A link to a SKILL.md, or to its folder');
    const hint = document.getElementById(box.getAttribute('aria-describedby')!)!;
    expect([...hint.querySelectorAll('code')].map((c) => c.textContent)).toEqual(HALL_SHAPES);
  });

  it('an answer that comes after he left the step is dropped: no check screen he walked away from', async () => {
    let arrive: (res: Response) => void = () => {};
    hall(() => new Promise<Response>((done) => (arrive = done)));
    await openAdding();
    await click(way('From GitHub'));
    type('A link to a SKILL.md, or to its folder', 'https://github.com/o/r/tree/main/s');
    await click(screen.getByRole('button', { name: 'Fetch' }));
    expect(screen.getByRole('button', { name: 'Fetching...' })).toBeTruthy();
    await click(screen.getByRole('button', { name: '‹ Other ways' }));
    await act(async () => arrive(json({ check: check() })));
    expect(screen.queryByRole('heading', { name: 'Check before adding' })).toBeNull();
    expect(screen.getByRole('heading', { name: 'Add a skill' })).toBeTruthy();
  });

  it("fetches the trimmed link and shows where it came from; a refused link shows the hall's words", async () => {
    const link = 'https://github.com/davila7/claude-code-templates/tree/main/skills/top-ten';
    const { asks } = hall((ask) =>
      ask.ask === 'github' && ask.link === link
        ? json({ check: check({ source: { ...GITHUB, license: 'Apache-2.0' } }) })
        : json({ error: "That link isn't one the hall takes." }, 409),
    );
    await openAdding();
    await click(way('From GitHub'));
    type('A link to a SKILL.md, or to its folder', 'https://evil.example/x');
    await click(screen.getByRole('button', { name: 'Fetch' }));
    expect(screen.getByRole('alert').textContent).toBe("That link isn't one the hall takes.");
    type('A link to a SKILL.md, or to its folder', `  ${link}  `);
    await click(screen.getByRole('button', { name: 'Fetch' }));
    expect(asks.at(-1)).toEqual({ ask: 'github', link });
    const form = screen.getByRole('heading', { name: 'Check before adding' }).closest('form')!;
    expect(factsOf(form)).toMatchObject({
      From: 'GitHub',
      'Repository and ref': 'davila7/claude-code-templates @ main',
      File: 'skills/top-ten/SKILL.md',
      License: 'Apache-2.0',
    });
  });
});

describe('From your Claude skills', () => {
  it('lists Yours and Built-in, each row with its file, "In your library" where it is, and the ones too big', async () => {
    const { asks } = hall((ask) =>
      ask.ask === 'claude-list'
        ? json({ claude: CLAUDE, tooBig: 2 })
        : json({
            check: check({
              name: 'pdf',
              source: { kind: 'claude', label: 'built-in', file: `${SYNCED}/pdf/SKILL.md`, license: null },
            }),
          }),
    );
    await openAdding();
    await click(way('From your Claude skills'));
    expect(asks).toEqual([{ ask: 'claude-list' }]);
    expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Your Claude skills' }));
    const yours = screen.getByRole('region', { name: 'Yours' });
    const builtIn = screen.getByRole('region', { name: 'Built-in' });
    expect(screen.queryByRole('region', { name: 'Not labelled' })).toBeNull();
    expect([...yours.querySelectorAll('.tp-row-name')].map((n) => n.textContent)).toEqual([
      'my-skill',
      'animate',
    ]);
    expect(
      within(builtIn).getByText(/They keep Anthropic's license: read it before you copy one/),
    ).toBeTruthy();
    const pdf = within(builtIn).getByRole('button', { name: /^pdf/ });
    expect(within(pdf).getByText(`${SYNCED}/pdf/SKILL.md`)).toBeTruthy();
    expect(within(pdf).getByText('In your library')).toBeTruthy();
    expect(within(yours).queryByText('In your library')).toBeNull();
    expect(screen.getByText('2 skills over 64 KiB left out.')).toBeTruthy();

    await click(pdf);
    expect(asks.at(-1)).toEqual({ ask: 'claude', file: `${SYNCED}/pdf/SKILL.md` });
    const form = screen.getByRole('heading', { name: 'Check before adding' }).closest('form')!;
    expect(factsOf(form)).toMatchObject({
      From: 'Built-in Claude skills',
      File: `~/.claude/skills/${SYNCED}/pdf/SKILL.md`,
      License: 'None given',
    });
    expect(within(form).getByText(/A built-in Claude skill keeps Anthropic's license/)).toBeTruthy();
  });

  it('a skill the app could not label is never called yours: it has its own group', async () => {
    hall(() =>
      json({
        claude: [{ file: `${SYNCED}/x/SKILL.md`, name: 'x', description: 'X', label: 'unlabelled' }],
        tooBig: 0,
      }),
    );
    await openAdding();
    await click(way('From your Claude skills'));
    expect(screen.queryByRole('region', { name: 'Yours' })).toBeNull();
    expect(within(screen.getByRole('region', { name: 'Not labelled' })).getByText('x')).toBeTruthy();
  });

  it('"‹ Other ways" goes back to the four', async () => {
    hall(() => json({ claude: [], tooBig: 0 }));
    await openAdding();
    await click(way('From your Claude skills'));
    expect(screen.getByText('No skills found in ~/.claude/skills.')).toBeTruthy();
    await click(screen.getByRole('button', { name: '‹ Other ways' }));
    expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Add a skill' }));
  });
});

describe("a library skill's facts box (the mockup's rows)", () => {
  it.each([
    [
      /^Top Ten/,
      {
        From: 'GitHub',
        'Repository and ref': 'davila7/claude-code-templates @ main',
        File: GITHUB.path,
        License: 'MIT',
      },
    ],
    [
      /^PDF/,
      {
        From: 'Built-in Claude skills',
        File: `~/.claude/skills/${SYNCED}/pdf/SKILL.md`,
        License: 'None given',
      },
    ],
    [/^Notes/, { From: 'Pasted', License: 'None given' }],
  ])('%s', async (name, facts) => {
    hall();
    render(<TeamPage session="ok" onBack={() => {}} />);
    await act(async () => {});
    await click(screen.getByRole('tab', { name: /Library/ }));
    await click(within(screen.getByRole('navigation', { name: 'Library' })).getByRole('button', { name }));
    const all = factsOf(screen.getByRole('tabpanel').querySelector<HTMLElement>('.tp-detail-pane')!);
    expect(Object.keys(all)).toEqual([
      'From',
      ...Object.keys(facts).filter((k) => k !== 'From'),
      'Added',
      'Cost',
    ]);
    expect(all).toMatchObject(facts);
  });
});
