// Types for team.mjs, so its tests are typechecked. The module itself stays plain JS: the plugin needs no build.

export type Guild = 'design' | 'frontend' | 'backend' | 'review';
export type Preset = 'reads' | 'edits' | 'edits-and-checks';
export type Specialist = {
  id: string;
  name: string;
  role: string;
  guild: Guild;
  preset: Preset;
  on: boolean;
  skills: string[];
};
export type Skill = { id: string; name: string; description: string };
export type Team = { version: 2; generator: number; specialists: Specialist[]; skills: Skill[] };

export const GUILDS: readonly Guild[];
export const LEADS: Readonly<Record<Guild, 'designer' | 'frontend' | 'backend' | 'reviewer'>>;
export const MAX_PER_GUILD: number;
export const MAX_SPECIALISTS: number;
export const PRESETS: readonly Preset[];
export const GENERATOR: number;
export const MAX_SKILLS: number;
export const MAX_PRELOADED: number;
export const MAX_TEXT: number;
export function problem(team: unknown): string | null;
export function upgrade(team: unknown): unknown;
export function textProblem(text: unknown): string | null;
export function toolsOf(specialist: Specialist): string;
export function buildAgent(specialist: Specialist): string;
export function buildSkill(skill: Skill, text: string): string;
export function teamDir(home?: string): string;
export function writeTeam(dir: string, team: Team, texts: Record<string, string>): Team;
export function defaults(): { team: Team; texts: Record<string, string> };
export function init(home?: string): 'created' | 'exists';
export function readTeam(home?: string): Team | null;

export type TeamChange =
  | { action: 'add-skill' | 'change-skill'; id: string; name: string; description: string; text: string }
  | { action: 'delete-skill'; id: string }
  | { action: 'attach'; specialist: string; skill: string; at?: number }
  | { action: 'detach'; specialist: string; skill: string }
  | { action: 'add-specialist'; name: string; guild: Guild; role: string; preset: Preset; skills: string[] }
  | { action: 'change-specialist'; id: string; role: string; preset: Preset; skills: string[] }
  | { action: 'delete-specialist'; id: string }
  | { action: 'switch'; id: string; on: boolean };
export type ChangeEntry =
  | { at: number; what: 'skill-added' | 'skill-changed' | 'skill-deleted'; skill: string }
  | { at: number; what: 'skill-attached' | 'skill-detached'; skill: string; specialist: string }
  | {
      at: number;
      what:
        'specialist-added' | 'specialist-changed' | 'specialist-deleted' | 'specialist-on' | 'specialist-off';
      specialist: string;
      guild: 'Design' | 'Frontend' | 'Backend' | 'Review';
    };
export const ACTIONS: readonly TeamChange['action'][];
export const MAX_CHANGES: number;
export function slugOf(name: string, max: number): string;
export function specialistIdOf(guild: Guild, name: string): string;
export function skillIdOf(name: string): string;
export const CHANGE_KINDS: readonly (ChangeEntry['what'] | NoteEntry['what'])[];
export function readTexts(dir: string, team: Team): Record<string, string>;
export function applyChange(
  team: Team,
  texts: Record<string, string>,
  change: TeamChange,
  now: number,
): { team: Team; texts: Record<string, string>; entry: ChangeEntry };
export function isChange(entry: unknown): entry is ChangeEntry | NoteEntry;
export function readChanges(dir: string): (ChangeEntry | NoteEntry)[];
export function logChange(dir: string, entry: ChangeEntry | NoteEntry): void;

// v3.7: the guild leads' notes.
export type NoteAgent = 'designer' | 'frontend' | 'backend' | 'reviewer';
export type Note = { id: string; text: string; proposedAt: number; approvedAt: number };
export type Notes = { version: 1; notes: Record<NoteAgent, Note[]> };
export type NoteChange =
  | { action: 'note-approve' | 'note-reject'; id: string }
  | { action: 'note-delete'; agent: NoteAgent; id: string };
export type NoteEntry = {
  at: number;
  what: 'note-approved' | 'note-rejected' | 'note-deleted';
  agent: 'Designer' | 'Frontend dev' | 'Backend dev' | 'Reviewer';
};
export const NOTE_AGENTS: readonly NoteAgent[];
export const NOTE_SKILL_IDS: readonly string[];
export const NOTE_AGENT_NAMES: Readonly<Record<NoteAgent, NoteEntry['agent']>>;
export const MAX_NOTES: number;
export const MAX_NOTE: number;
export function noteProblem(text: unknown): string | null;
export function emptyNotes(): Notes;
export function notesProblem(notes: unknown): string | null;
export function readNotes(dir: string): Notes;
export function buildNotesSkill(agent: NoteAgent, list: readonly Note[]): string;
export function writeNotes(dir: string, notes: Notes, team: Team): void;
export function writeNotesSkills(dir: string, notes: Notes, team: Team): void;
export function applyNoteChange(
  notes: Notes,
  change: NoteChange,
  proposal: { agent: NoteAgent; text: string; at: number } | null,
  now: number,
): { notes: Notes; entry: NoteEntry };
