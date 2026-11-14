// Types for guard.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

import type { Team } from '../team/team.mjs';

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
  readonly backlog: string;
  readonly team: string;
  readonly folder: string;
  readonly woa: string;
  readonly memory: string;
};
export const EDITORS: readonly string[];
export function denial(reason: string): string;
export function decide(raw: string | null, team?: Team | null, home?: string): string | null;
export function inWoaFolder(filePath: string, cwd: unknown, home?: string): boolean;
export function inAgentMemory(filePath: string, cwd: unknown): boolean;
