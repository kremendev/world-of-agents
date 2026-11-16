// Types for guard.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

import type { ProjectStatus, ProjectTeam, Team } from '../team/team.mjs';

export const MAY_START: {
  readonly main: readonly string[];
};
export function teamRows(team: Team): ReadonlyMap<string, readonly string[]>;
export const TEAM_FOLDER: RegExp;
export const ENV_FILE: RegExp;
export const REASONS: {
  readonly agent: string;
  readonly env: string;
  readonly input: string;
  readonly model: string;
  readonly isolation: string;
  readonly edit: string;
  readonly main: string;
  readonly noTeam: string;
  readonly broken: string;
  readonly backlog: string;
  readonly team: string;
  readonly folder: string;
  readonly woa: string;
  readonly memory: string;
  readonly off: string;
  readonly shell: string;
};
export const EDITORS: readonly string[];
export const SHELLS: readonly string[];
export function denial(reason: string): string;
export const NO_TEAM_HERE: { readonly status: 'none' };
export const BROKEN_TEAM: { readonly status: 'broken' };
export function decide(
  raw: string | null,
  team?: Team | ProjectTeam | ProjectStatus | typeof NO_TEAM_HERE | typeof BROKEN_TEAM | null,
  home?: string,
  folder?: string,
): string | null;
export function inWoaFolder(filePath: string, cwd: unknown, home?: string): boolean;
export function inAgentMemory(filePath: string, cwd: unknown): boolean;
