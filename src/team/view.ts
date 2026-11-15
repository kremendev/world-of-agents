// The Team page's words and rules (v3.6, docs/v3.6-plan.md, Dima's approved mockup of 15 Nov): what a preset, a guild
// and a flag say, what search finds, and why a form can't be saved yet. Pure, so the page and its tests share them. The
// hall and team.mjs check every change again; these only say it first.
import { checkText, type TextCheck } from './text';
import {
  GUILDS,
  LINE,
  MAX_PER_GUILD,
  MAX_PRELOADED,
  PRESETS,
  skillIdOf,
  specialistIdOf,
  type TeamChange,
  type TeamSkill,
  type TeamSpecialist,
  type TeamView,
} from './schema';

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
export function specialistMatches(p: TeamSpecialist, skills: readonly TeamSkill[], query: string): boolean {
  const q = normal(query);
  if (q === '') return true;
  const names = p.skills.map((id) => skills.find((s) => s.id === id)?.name ?? '');
  return [p.name, p.role, ...names].some((text) => has(text, q));
}

/** Search (E14): a skill by its name and what it's for. */
export function skillMatches(s: TeamSkill, query: string): boolean {
  const q = normal(query);
  return q === '' || has(s.name, q) || has(s.description, q);
}

/** Who has a skill. */
export const usersOf = (view: TeamView, id: string) =>
  view.team.specialists.filter((p) => p.skills.includes(id));

/** Whether any line is flagged: the line under the text is then the flag colour. */
export const flagged = (lines: TextCheck['lines']) => lines.some((l) => l.flags.length > 0);

/** The line under a text: what was flagged, or that nothing was. */
export function flagSummary(lines: TextCheck['lines']): string {
  const links = lines.filter((l) => l.flags.includes('link')).length;
  const commands = lines.filter((l) => l.flags.includes('command')).length;
  if (links === 0 && commands === 0) return 'No links, and nothing that looks like a command.';
  const look = `that ${commands === 1 ? 'looks' : 'look'} like a command`;
  const parts = [
    ...(links > 0 ? [`${plural(links, 'line')} with a link`] : []),
    ...(commands > 0 ? [`${links > 0 ? commands : plural(commands, 'line')} ${look}`] : []),
  ];
  return `${parts.join(' and ')}. Read them before you go on.`;
}

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
      if (id !== '' && view.team.specialists.some((p) => p.id === id))
        out.push(`A specialist with the id woa-team:${id} is there already.`);
      if (view.team.specialists.filter((p) => p.guild === d.guild).length >= MAX_PER_GUILD)
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
    else if (view.team.skills.some((s) => s.id === id))
      out.push(`A skill with the id woa-team:${id} is there already.`);
  }
  if (d.description === '') out.push("Say what it's for, in one line.");
  else if (!isLine(d.description, 200)) out.push(lineRule("What it's for", 200));
  return [...out, ...checkText(d.text).refusals];
}
