// The Team page's words and rules (v3.6, docs/v3.6-plan.md, Dima's approved mockup of 15 Nov): what a preset, a guild
// and a flag say, what search finds, and why a form can't be saved yet. Pure, so the page and its tests share them. The
// hall and team.mjs check every change again; these only say it first.
import { NOTE_AGENTS, type NoteAgent } from './note';
import { checkText, type Flag, type TextCheck } from './text';
import {
  GUILDS,
  LINE,
  MAX_PER_GUILD,
  MAX_PRELOADED,
  PRESETS,
  skillIdOf,
  specialistIdOf,
  type ReviewNote,
  type SOURCES,
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

type Source = (typeof SOURCES)[number];
/** v3.9: the Library tab's groups, by where a skill came from, in this order. */
export const SOURCE_GROUP: Record<Source, string> = {
  team: 'From your team (v3.7)',
  starter: 'From the starter team',
  written: 'Written here',
};
/** Where a skill came from, in its facts box. */
export const SOURCE_FROM: Record<Source, string> = {
  team: 'Your team (v3.7)',
  starter: 'The starter team',
  written: 'Written here',
};

/** "Used in 2 projects", or "Not used yet". */
export const usedLine = (projects: number) =>
  projects === 0 ? 'Not used yet' : `Used in ${plural(projects, 'project')}`;

/**
 * About how many tokens a text costs a specialist that preloads it, every time it starts: its characters over 3.7, as
 * measured on 16 Nov (docs/v3.10-plan.md), to the nearest ten, or hundred from a thousand on.
 */
export function tokensOf(text: string): number {
  const n = Math.round(text.length / 3.7);
  return n < 1000 ? Math.max(10, Math.round(n / 10) * 10) : Math.round(n / 100) * 100;
}
/** "about 2,300 tokens". */
export const aboutTokens = (text: string) =>
  `about ${String(tokensOf(text)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} tokens`;

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
  else if (!isLine(d.description, 200)) out.push(lineRule("What it's for", 200));
  return [...out, ...checkText(d.text).refusals];
}

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
