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
  | { action: 'attach' | 'detach'; specialist: string; skill: string }
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
export const CHANGE_KINDS: readonly ChangeEntry['what'][];
export function readTexts(dir: string, team: Team): Record<string, string>;
export function applyChange(
  team: Team,
  texts: Record<string, string>,
  change: TeamChange,
  now: number,
): { team: Team; texts: Record<string, string>; entry: ChangeEntry };
export function isChange(entry: unknown): entry is ChangeEntry;
export function readChanges(dir: string): ChangeEntry[];
export function logChange(dir: string, entry: ChangeEntry): void;
