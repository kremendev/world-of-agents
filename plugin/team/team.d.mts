// Types for team.mjs, so its tests are typechecked. The module itself stays plain JS: the plugin needs no build.

export type Guild = 'design' | 'frontend' | 'backend' | 'review';
export type Specialist = {
  id: string;
  name: string;
  role: string;
  guild: Guild;
  kind: 'reads' | 'edits';
  skills: string[];
};
export type Skill = { id: string; name: string; description: string };
export type Team = { version: 1; specialists: Specialist[]; skills: Skill[] };

export const GUILDS: readonly Guild[];
export const LEADS: Readonly<Record<Guild, 'designer' | 'frontend' | 'backend' | 'reviewer'>>;
export const MAX_SPECIALISTS: number;
export const MAX_SKILLS: number;
export const MAX_PRELOADED: number;
export const MAX_TEXT: number;
export function problem(team: unknown): string | null;
export function textProblem(text: unknown): string | null;
export function toolsOf(specialist: Specialist): string;
export function buildAgent(specialist: Specialist): string;
export function buildSkill(skill: Skill, text: string): string;
export function teamDir(home?: string): string;
export function writeTeam(dir: string, team: Team, texts: Record<string, string>): void;
export function defaults(): { team: Team; texts: Record<string, string> };
export function init(home?: string): 'created' | 'exists';
export function readTeam(home?: string): Team | null;
