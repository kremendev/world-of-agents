// Types for ledger-past.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export type Totals = {
  inputTokens: number;
  outputTokens: number;
  cacheRead: number;
  cacheWrite: number;
  turns: number;
};
export type Tally = { before: number; since: number; models: Record<string, Totals>; seen: Set<string> };

export const MAX_MODELS: number;
export const OTHER: string;
export const MAX_FILES: number;
export function beforeOf(raw: string | null): number | null;
export function projectsDir(env?: Record<string, string | undefined>): string;
export function transcripts(projects: string): string[];
export function emptyCount(before: number): Tally;
export function addEntry(tally: Tally, entry: unknown): void;
export function addFile(tally: Tally, path: string): Promise<void>;
export function printed(tally: Tally): string;
export function countPast(projects: string, before: number): Promise<Tally>;
