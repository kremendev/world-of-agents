// Types for ledger-past.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export type Totals = {
  inputTokens: number;
  outputTokens: number;
  cacheRead: number;
  cacheWrite5m: number;
  cacheWrite1h: number;
};
export type Session = { first: number; last: number; running: boolean; models: Record<string, Totals> };
export type Tally = { now: number; seen: Set<string>; sessions: Map<string, Session> };
export type File = { path: string; session: string; main: boolean };
export type Newest = { at: number; stop: string | null };

export const MAX_SESSIONS: number;
export const MAX_MODELS: number;
export const OTHER: string;
export const MAX_FILES: number;
export const QUIET_MS: number;
export const STALE_MS: number;
export function projectsDir(env?: Record<string, string | undefined>): string;
export function transcripts(projects: string): File[];
export function newTally(now: number): Tally;
export function addEntry(tally: Tally, entry: unknown, file: Omit<File, 'path'>, newest?: Newest): void;
export function addFile(tally: Tally, file: File): Promise<void>;
export function settled(session: Session, now: number): boolean;
export function printed(tally: Tally): string;
export function countAll(projects: string, now: number): Promise<Tally>;
