// The Team page's words and rules (v3.6, docs/v3.6-plan.md, Dima's approved mockup of 15 Nov): what a preset, a guild
// and a flag say, what search finds, and why a form can't be saved yet. Pure, so the page and its tests share them. The
// hall and team.mjs check every change again; these only say it first.
import { NOTE_AGENTS, type NoteAgent } from './note';
import { checkText, type Flag, type TextCheck } from './text';
import {
  GUILDS,
  isDescription,
  LINE,
  MAX_DESCRIPTION,
  MAX_SPECIALIST_TEXT,
  MAX_PER_GUILD,
  MAX_PRELOADED,
  MAX_TEXT,
  PRESETS,
  skillIdOf,
  specialistIdOf,
  type ClaudeSkillView,
  type LibrarySkill,
  type ReviewNote,
  type SkillAnswer,
  type SkillAsk,
  type SkillCheckView,
  type SkillSource,
  type TeamChange,
  type TeamNote,
  type TeamProposal,
  type TeamSpecialist,
  type TeamView,
} from './schema';

/** A skill as search and the lists need it: the library's (v3.9) or the starter team's. */
type SkillLike = { id: string; name: string; description: string };

/**
 * What the page's parts may do: send one change (said in the status line when it lands, with what Undo sends back, if
 * anything), and put the focus on an element once the render that shows it is done.
 */
export type TeamActions = {
  busy: boolean;
  send: (change: TeamChange, said: string, undo?: { change: TeamChange; said: string }) => Promise<boolean>;
  focus: (id: string) => void;
  /** v3.10: has the hall read a skill (it writes nothing): its answer, or the words to show where it was asked. */
  ask: (ask: SkillAsk) => Promise<{ ok: true; answer: SkillAnswer } | { ok: false; message: string }>;
};

export type Guild = (typeof GUILDS)[number];
export type Preset = (typeof PRESETS)[number];

export const GUILD_NAME: Record<Guild, string> = {
  design: 'Design',
  frontend: 'Frontend',
  backend: 'Backend',
  review: 'Review',
};
/** Each guild's lead, as the hall names it. */
export const LEAD_NAME: Record<Guild, string> = {
  design: 'Designer',
  frontend: 'Frontend dev',
  backend: 'Backend dev',
  review: 'Reviewer',
};

/** The preset in a list row and on its badge. */
export const PRESET_SHORT: Record<Preset, string> = {
  reads: 'Reads only',
  edits: 'Edits files',
  'edits-and-checks': 'Edits + runs checks',
};
/** The preset on its card in the form. */
export const PRESET_LONG: Record<Preset, string> = {
  reads: 'Reads only',
  edits: 'Edits files',
  'edits-and-checks': 'Edits files and runs checks',
};
export const PRESET_SENTENCE: Record<Preset, string> = {
  reads: 'Reads and searches files, then reports. Changes nothing.',
  edits: 'Reads and changes files. Runs no commands.',
  'edits-and-checks': 'Also runs npm test and npm run check. Any other command needs your approval.',
};
/** The Design guild runs no commands, as its lead doesn't. */
export const presetAllowed = (guild: Guild | null, preset: Preset) =>
  !(guild === 'design' && preset === 'edits-and-checks');

export const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/** "Edits files · 3 skills": a specialist's line in the list. */
export const rowLine = (p: TeamSpecialist) =>
  `${PRESET_SHORT[p.preset]} · ${plural(p.skills.length, 'skill')}`;

const has = (text: string, query: string) => text.toLocaleLowerCase().includes(query);
const normal = (query: string) => query.trim().toLocaleLowerCase();

/** Search (E14): a specialist by its name, its role and its skills' names, case-blind. An empty query finds all. */
export function specialistMatches(p: TeamSpecialist, skills: readonly SkillLike[], query: string): boolean {
  const q = normal(query);
  if (q === '') return true;
  const names = p.skills.map((id) => skills.find((s) => s.id === id)?.name ?? '');
  return [p.name, p.role, ...names].some((text) => has(text, q));
}

/** Search (E14): a skill by its name and what it's for. */
export function skillMatches(s: SkillLike, query: string): boolean {
  const q = normal(query);
  return q === '' || has(s.name, q) || has(s.description, q);
}

/** Who in this project has a skill (v3.9: none until it has a team of its own). */
export const usersOf = (view: TeamView, id: string) =>
  (view.team?.specialists ?? []).filter((p) => p.skills.includes(id));

/** "A", "A and B", "A, B and C". */
export const listed = (names: string[]) =>
  names.length < 2 ? (names[0] ?? '') : `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;

/** Who loses a skill deleted from the library: every project and specialist that has it, by name. */
export function whoLoses(view: TeamView, id: string): string {
  const uses = view.usage[id] ?? [];
  if (uses.length === 0) return 'No specialist in any project has it.';
  return uses
    .map((u) => `In ${u.name}, ${listed(u.specialists)} ${u.specialists.length === 1 ? 'loses' : 'lose'} it.`)
    .join(' ');
}

/**
 * The Library tab's groups (v3.9; v3.10 the approved mockup), by where a skill came from, in this order: a Claude skill
 * goes under yours or the built-in ones by the app's label, and one with no label under yours.
 */
export const GROUPS = [
  { id: 'team', label: 'From your team (v3.7)' },
  { id: 'starter', label: 'From the starter team' },
  { id: 'github', label: 'From GitHub' },
  { id: 'mine', label: 'From your Claude skills' },
  { id: 'built-in', label: 'Built-in Claude skills' },
  { id: 'pasted', label: 'Pasted' },
  { id: 'written', label: 'Written here' },
] as const;
export type Group = (typeof GROUPS)[number]['id'];
export function groupOf(source: SkillSource): Group {
  if (source.kind !== 'claude') return source.kind;
  return source.label === 'built-in' ? 'built-in' : 'mine';
}
/** Where a skill came from, in its facts box. */
export function sourceFrom(source: SkillSource): string {
  switch (source.kind) {
    case 'team':
      return 'Your team (v3.7)';
    case 'starter':
      return 'The starter team';
    case 'written':
      return 'Written here';
    case 'pasted':
      return 'Pasted';
    case 'github':
      return 'GitHub';
    case 'claude':
      return source.label === 'built-in'
        ? 'Built-in Claude skills'
        : source.label === 'mine'
          ? 'Your Claude skills'
          : 'Your Claude skills (no label in the app)';
  }
}

/**
 * v3.10f, the approved mockup's facts box: what a source says beyond where it came from, in its order (Repository and
 * ref, File, License). A skill from the team, the starter team or written here has none.
 */
export function sourceFacts(source: SkillSource): { label: string; value: string }[] {
  const license = { label: 'License', value: 'license' in source ? (source.license ?? 'None given') : '' };
  switch (source.kind) {
    case 'github':
      return [
        { label: 'Repository and ref', value: `${source.owner}/${source.repo} @ ${source.ref}` },
        { label: 'File', value: source.path },
        license,
      ];
    case 'claude':
      return [{ label: 'File', value: `~/.claude/skills/${source.file}` }, license];
    case 'pasted':
      return [license];
    default:
      return [];
  }
}

/** v3.10f: the check screen's cost, "about 2,300 tokens every time a specialist that has it starts · 8,512 of 20,000 characters". */
export const checkCost = (text: string) =>
  `${aboutTokens(text)} every time a specialist that has it starts · ${thousands(text.length)} of ${thousands(MAX_TEXT)} characters`;

/**
 * v3.10f: Dima's Claude skills as the list shows them, the approved mockup's two groups, his and the built-in ones, and a
 * third only when the app's list doesn't label some: an unlabelled one may be Anthropic's or an installer's, so it is
 * never called his (a personal skill outside synced/ is always unlabelled, Dima, 16 Nov). Each row says whether the
 * library has that file already.
 */
export const CLAUDE_GROUPS = [
  { label: 'mine', title: 'Yours', note: null },
  {
    label: 'built-in',
    title: 'Built-in',
    note: "They keep Anthropic's license: read it before you copy one. Most need their scripts, which don't come along.",
  },
  {
    label: 'unlabelled',
    title: 'Not labelled',
    note: "The desktop app's list doesn't say who made these: they may be yours, built-in, or put there by an installer.",
  },
] as const;
export function claudeGroups(list: readonly ClaudeSkillView[], library: readonly LibrarySkill[]) {
  const have = new Set(library.flatMap((s) => (s.source.kind === 'claude' ? [s.source.file] : [])));
  return CLAUDE_GROUPS.map((g) => ({
    ...g,
    rows: list.filter((s) => s.label === g.label).map((s) => ({ ...s, inLibrary: have.has(s.file) })),
  })).filter((g) => g.rows.length > 0);
}

/** v3.10f: the GitHub link shapes the hall takes, shown under the link box (server/github.ts's; a test holds them in step). */
export const LINK_SHAPES = [
  'https://github.com/<owner>/<repo>/blob/<ref>/<folder>/SKILL.md',
  'https://github.com/<owner>/<repo>/tree/<ref>/<folder>',
  'https://raw.githubusercontent.com/<owner>/<repo>/<ref>/<folder>/SKILL.md',
];

/** "allowed-tools: would have let tools run without asking", or the key alone: a field left out of a header. */
export const droppedLine = (d: SkillCheckView['dropped'][number]) => (d.why ? `${d.key}: ${d.why}` : d.key);

/** "Used in 2 projects", or "Not used yet". */
export const usedLine = (projects: number) =>
  projects === 0 ? 'Not used yet' : `Used in ${plural(projects, 'project')}`;

/**
 * About how many tokens a text costs a specialist that preloads it, every time it starts: its characters over 3.7, as
 * measured on 16 Nov (docs/v3.10-plan.md), to the nearest ten, or hundred from a thousand on.
 */
export const tokensOf = (text: string) => tokensFor(text.length);
/** The same for a number of characters: none costs nothing. */
export function tokensFor(chars: number): number {
  if (chars === 0) return 0;
  const n = Math.round(chars / 3.7);
  return n < 1000 ? Math.max(10, Math.round(n / 10) * 10) : Math.round(n / 100) * 100;
}
/** v3.10: what a specialist's skills come to together, in characters (team.mjs's specialistText()). */
export const charsOf = (skills: readonly string[], texts: Readonly<Record<string, string>>) =>
  skills.reduce((n, id) => n + (texts[id]?.length ?? 0), 0);
/** "About 2,300 tokens every time it starts · 8,512 of 40,000 characters": a specialist's cost, on its page. */
export const startLine = (chars: number) =>
  `About ${thousands(tokensFor(chars))} tokens every time it starts · ${thousands(chars)} of ${thousands(MAX_SPECIALIST_TEXT)} characters`;
/** Past 85% of the cap, its bar turns amber. */
export const nearCap = (chars: number) => chars > MAX_SPECIALIST_TEXT * 0.85;
/** "40,000". */
export const thousands = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/** "about 2,300 tokens". */
export const aboutTokens = (text: string) => `about ${thousands(tokensOf(text))} tokens`;

/** "14 Nov 2026": when a skill came into the library. */
export function dayOf(at: number): string {
  const d = new Date(at);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** Whether any line is flagged: the line under the text is then the flag colour. */
export const flagged = (lines: TextCheck['lines']) => lines.some((l) => l.flags.length > 0);

/** The line under a text: what was flagged, or that nothing was. */
export function flagSummary(lines: TextCheck['lines']): string {
  const count = (flag: Flag) => lines.filter((l) => l.flags.includes(flag)).length;
  const kinds: [number, (n: number) => string][] = [
    [count('link'), () => 'with a link'],
    [count('command'), (n) => `that ${n === 1 ? 'looks' : 'look'} like a command`],
    [count('instruction'), (n) => `that ${n === 1 ? 'reads' : 'read'} like an instruction`],
    [count('override'), () => 'that may override your rules'],
  ];
  const parts = kinds
    .filter(([n]) => n > 0)
    .map(([n, words], i) => `${i === 0 ? plural(n, 'line') : n} ${words(n)}`);
  if (parts.length === 0) return 'No links, and nothing that looks like a command.';
  const said = parts.length === 1 ? parts[0]! : `${parts.slice(0, -1).join(', ')} and ${parts.at(-1)!}`;
  return `${said}. Read them before you go on.`;
}

/** How each flag shows on its line. */
export const FLAG_LABEL: Record<Flag, string> = {
  link: 'link',
  command: 'command-like',
  instruction: 'instruction-like',
  override: 'overrides your rules?',
};

/**
 * A note's text, flagged as a skill's is (links, command-like lines) and, since a note should be a fact, wording that
 * reads like an instruction to an agent (v3.7d).
 */
const INSTRUCTION =
  /\b(ignore|disregard|override|always|never|must|from now on|instead of|do not|don't|you should|you are)\b/i;
export function noteLines(text: string): TextCheck['lines'] {
  return checkText(text).lines.map((line) =>
    INSTRUCTION.test(line.text) ? { ...line, flags: [...line.flags, 'instruction' as const] } : line,
  );
}

/**
 * v3.10, the approved mockup: a skill is instructions by nature, so the notes' rule would flag every line. A skill's line
 * is flagged instead when it may override Dima's rules: ignoring or overriding rules, instructions, the guard or the
 * prompt; acting without asking; keeping something from the user; a .env file; or sending something to an address.
 */
const OVERRIDE = [
  /\b(ignore|disregard|override|bypass|forget|skip)\b.{0,40}\b(rules?|instructions?|guard|prompts?|polic(y|ies)|guidelines?|safety|restrictions?|permissions?)\b/i,
  /\bwithout (asking|approval|permission|confirmation|confirming|prompting)\b/i,
  /\b(don'?t|do not|never|no need to) (tell|inform|show|notify|alert|mention (it |this )?to) the user\b/i,
  /(^|[^\w])\.env\b/i,
  /\b(upload|send|post|forward|transmit|exfiltrate|copy)\b.{0,60}\b(to|at)\b.{0,30}(https?:\/\/|[\w.+-]+@[\w-]+\.[\w.]+|\b\d{1,3}(\.\d{1,3}){3}\b|\bwebhooks?\b|\bendpoints?\b|\bservers?\b)/i,
];
export function skillLines(text: string): TextCheck['lines'] {
  return checkText(text).lines.map((line) =>
    OVERRIDE.some((p) => p.test(line.text)) ? { ...line, flags: [...line.flags, 'override' as const] } : line,
  );
}

/**
 * v3.10e, Check for update: a text's lines against the new ones. `at` is the line's index in its own text: the old one for
 * a line gone, the new one otherwise, so an added line takes its flags from the new text read whole (a code fence spans
 * lines).
 */
export type DiffLine = { kind: 'same' | 'gone' | 'new'; text: string; at: number };
/** Past this many cells (changed lines before times after) the middle shows as all gone, then all new. */
export const MAX_DIFF_CELLS = 1_000_000;
export function lineDiff(before: string, after: string): DiffLine[] {
  const a = before.split(/\r?\n/);
  const b = after.split(/\r?\n/);
  let head = 0;
  while (head < a.length && head < b.length && a[head] === b[head]) head++;
  let tail = 0;
  while (
    tail < a.length - head &&
    tail < b.length - head &&
    a[a.length - 1 - tail] === b[b.length - 1 - tail]
  )
    tail++;
  const out: DiffLine[] = [];
  for (let j = 0; j < head; j++) out.push({ kind: 'same', text: b[j]!, at: j });
  const was = a.slice(head, a.length - tail);
  const now = b.slice(head, b.length - tail);
  const [n, m] = [was.length, now.length];
  if (n * m > MAX_DIFF_CELLS) {
    was.forEach((text, i) => out.push({ kind: 'gone', text, at: head + i }));
    now.forEach((text, j) => out.push({ kind: 'new', text, at: head + j }));
  } else {
    // The longest run of lines both keep, from each point to the end; then walk it, a line gone before one added.
    const w = m + 1;
    const keep = new Uint32Array((n + 1) * w);
    for (let i = n - 1; i >= 0; i--)
      for (let j = m - 1; j >= 0; j--)
        keep[i * w + j] =
          was[i] === now[j]
            ? keep[(i + 1) * w + j + 1]! + 1
            : Math.max(keep[(i + 1) * w + j]!, keep[i * w + j + 1]!);
    let [i, j] = [0, 0];
    while (i < n || j < m) {
      if (i < n && j < m && was[i] === now[j]) {
        out.push({ kind: 'same', text: now[j]!, at: head + j });
        i++;
        j++;
      } else if (i < n && (j === m || keep[(i + 1) * w + j]! >= keep[i * w + j + 1]!)) {
        out.push({ kind: 'gone', text: was[i]!, at: head + i });
        i++;
      } else {
        out.push({ kind: 'new', text: now[j]!, at: head + j });
        j++;
      }
    }
  }
  for (let j = b.length - tail; j < b.length; j++) out.push({ kind: 'same', text: b[j]!, at: j });
  return out;
}

/** A run of unchanged lines longer than this shows its first and last CONTEXT lines, and how many are between. */
const CONTEXT = 3;
export type DiffRow = DiffLine | { kind: 'skip'; count: number };
export function diffRows(lines: readonly DiffLine[]): DiffRow[] {
  const out: DiffRow[] = [];
  let k = 0;
  while (k < lines.length) {
    if (lines[k]!.kind !== 'same') {
      out.push(lines[k]!);
      k++;
      continue;
    }
    let end = k;
    while (end < lines.length && lines[end]!.kind === 'same') end++;
    const run = lines.slice(k, end);
    const keepHead = k === 0 ? 0 : CONTEXT;
    const keepTail = end === lines.length ? 0 : CONTEXT;
    if (run.length > keepHead + keepTail + 1) {
      out.push(...run.slice(0, keepHead), { kind: 'skip', count: run.length - keepHead - keepTail });
      out.push(...run.slice(run.length - keepTail));
    } else out.push(...run);
    k = end;
  }
  return out;
}

/**
 * v3.10e: why an update can't be taken: what the hall refused in the file, what checkText() refuses in its text, and a
 * specialist here whose skills the new text would take past 40,000 characters (the hall checks every other project).
 */
export function updateRefusals(view: TeamView, id: string, check: SkillCheckView): string[] {
  const texts = { ...view.texts, [id]: check.text };
  const over = usersOf(view, id).flatMap((p) => {
    const chars = charsOf(p.skills, texts);
    return chars > MAX_SPECIALIST_TEXT
      ? [
          `${p.name}'s skills would come to ${thousands(chars)} characters, over ${thousands(MAX_SPECIALIST_TEXT)}.`,
        ]
      : [];
  });
  return [...check.refusals, ...checkText(check.text).refusals, ...over];
}

/** "3 lines added and 1 removed", "1 line removed", or "No line changed". */
export function diffSummary(lines: readonly DiffLine[]): string {
  const added = lines.filter((l) => l.kind === 'new').length;
  const gone = lines.filter((l) => l.kind === 'gone').length;
  if (added === 0 && gone === 0) return 'No line changed';
  if (gone === 0) return `${plural(added, 'line')} added`;
  if (added === 0) return `${plural(gone, 'line')} removed`;
  return `${plural(added, 'line')} added and ${gone} removed`;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const two = (n: number) => String(n).padStart(2, '0');
/** "just now", "today, 21:52", or "14 Nov, 09:30": when a note was proposed or approved. */
export function whenSaid(at: number, now: number): string {
  if (now - at >= 0 && now - at < 60_000) return 'just now';
  const d = new Date(at);
  const time = `${two(d.getHours())}:${two(d.getMinutes())}`;
  return d.toDateString() === new Date(now).toDateString()
    ? `today, ${time}`
    : `${d.getDate()} ${MONTHS[d.getMonth()]}, ${time}`;
}

/** Search (E14, v3.7d): a note by its text, or by its guild lead's name. */
export const noteMatches = (text: string, agentName: string, query: string) => {
  const q = normal(query);
  return q === '' || has(text, q) || has(agentName, q);
};

const lineRule = (field: string, max: number) =>
  `${field} may hold only letters, digits, spaces and . , ( ) ' & / -, ${max} at most, no space at either end.`;
const isLine = (value: string, max: number) =>
  value.length <= max && LINE.test(value) && value.trim() === value;
/** v3.10: what a library skill's description may hold (team.mjs's isDescription()). */
export const DESCRIPTION_RULE = `What it's for must be one line of ${thousands(MAX_DESCRIPTION)} characters at most, with no hidden characters and no space at either end.`;

export type SpecialistDraft = {
  mode: 'add' | 'change';
  /** The id of the one changed; for a new one, '' (team.mjs makes it). */
  id: string;
  name: string;
  guild: Guild | null;
  role: string;
  preset: Preset;
  skills: string[];
};

/** The id a new specialist will get, or '' while its name has none. */
export const draftId = (d: SpecialistDraft) =>
  d.mode === 'change' ? d.id : d.guild === null ? '' : specialistIdOf(d.guild, d.name);

/** Why the specialist form can't be saved yet: the hall's rules, said first. Empty when it can. */
export function specialistRefusals(d: SpecialistDraft, view: TeamView): string[] {
  const out: string[] = [];
  if (d.mode === 'add') {
    if (d.name === '') out.push('Give it a name.');
    else if (!isLine(d.name, 40)) out.push(lineRule('The name', 40));
    else if (specialistIdOf('design', d.name) === '')
      out.push('The name needs a letter from a to z or a digit, for its id.');
    if (d.guild === null) out.push('Pick a guild.');
    else {
      const id = draftId(d);
      const specialists = view.team?.specialists ?? [];
      if (id !== '' && specialists.some((p) => p.id === id))
        out.push(`A specialist with the id woa-team:${id} is there already.`);
      if (specialists.filter((p) => p.guild === d.guild).length >= MAX_PER_GUILD)
        out.push(`The ${GUILD_NAME[d.guild]} guild has ${MAX_PER_GUILD} specialists already.`);
    }
  }
  if (d.role === '') out.push('Say what it does, in one line.');
  else if (!isLine(d.role, 200)) out.push(lineRule('What it does', 200));
  if (!presetAllowed(d.guild, d.preset))
    out.push('The Design guild runs no commands: pick Reads only or Edits files.');
  if (d.skills.length > MAX_PRELOADED) out.push(`A specialist has at most ${MAX_PRELOADED} skills.`);
  const chars = charsOf(d.skills, view.texts);
  if (chars > MAX_SPECIALIST_TEXT)
    out.push(
      `Its skills would come to ${thousands(chars)} characters, over ${thousands(MAX_SPECIALIST_TEXT)}.`,
    );
  return out;
}

export type SkillDraft = {
  mode: 'add' | 'change';
  id: string;
  name: string;
  description: string;
  text: string;
};

/** The id a new skill will get, or its own when it is changed. */
export const skillDraftId = (d: SkillDraft) => (d.mode === 'change' ? d.id : skillIdOf(d.name));

/** Why the skill form can't be saved yet: the field rules, then checkText()'s refusals (as v3.4c). */
export function skillRefusals(d: SkillDraft, view: TeamView): string[] {
  const out: string[] = [];
  if (d.name === '') out.push('Give it a name.');
  else if (!isLine(d.name, 60)) out.push(lineRule('The name', 60));
  else if (d.mode === 'add') {
    const id = skillDraftId(d);
    if (id === '') out.push('The name needs a letter from a to z or a digit, for its id.');
    else if (view.library.some((s) => s.id === id))
      out.push(`A skill with the id woa-team:${id} is in the library already.`);
  }
  if (d.description === '') out.push("Say what it's for, in one line.");
  else if (!isDescription(d.description)) out.push(DESCRIPTION_RULE);
  return [...out, ...checkText(d.text).refusals];
}

/**
 * v3.10f: why a checked skill can't go into the library yet: what the hall refused in the file, then the skill form's
 * rules for the name and what it's for as Dima left them, and for its text. The hall and team.mjs check it all again.
 */
export const takeRefusals = (check: SkillCheckView, name: string, description: string, view: TeamView) => [
  ...check.refusals,
  ...skillRefusals({ mode: 'add', id: '', name, description, text: check.text }, view),
];

/** Each guild lead by its role's name, as the hall says it. */
export const NOTE_NAME: Record<NoteAgent, string> = {
  designer: LEAD_NAME.design,
  frontend: LEAD_NAME.frontend,
  backend: LEAD_NAME.backend,
  reviewer: LEAD_NAME.review,
};

/** A shared note to review (v3.9), a proposal waiting, or a note kept, as the list and the details show it. */
export type NoteItem =
  | { kind: 'review'; key: string; agent: NoteAgent; note: ReviewNote }
  | { kind: 'waiting'; key: string; agent: NoteAgent; proposal: TeamProposal }
  | { kind: 'kept'; key: string; agent: NoteAgent; note: TeamNote };

/**
 * What the Notes tab lists, matching the search: the old shared notes this project's copy brought along, to keep or drop
 * (v3.9), the proposals waiting, then each guild lead's kept notes.
 */
export function noteItems(
  view: TeamView,
  query: string,
): { review: NoteItem[]; waiting: NoteItem[]; kept: NoteItem[] } {
  const review: NoteItem[] = view.review
    .filter((n) => noteMatches(n.text, NOTE_NAME[n.agent], query))
    .map((n) => ({ kind: 'review', key: `r:${n.id}`, agent: n.agent, note: n }));
  const waiting: NoteItem[] = view.proposals
    .filter((p) => noteMatches(p.text, NOTE_NAME[p.agent], query))
    .map((p) => ({ kind: 'waiting', key: `p:${p.id}`, agent: p.agent, proposal: p }));
  const kept: NoteItem[] = NOTE_AGENTS.flatMap((agent) =>
    view.notes[agent]
      .filter((n) => noteMatches(n.text, NOTE_NAME[agent], query))
      .map((n): NoteItem => ({ kind: 'kept', key: `k:${agent}:${n.id}`, agent, note: n })),
  );
  return { review, waiting, kept };
}
