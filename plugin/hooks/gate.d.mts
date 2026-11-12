// Types for gate.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export type CheckResult = { passed: boolean; output: string };
export type Verdict = 'retry' | 'passed' | 'failed';

export const CHECK: string;
export const MAX_RETRIES: number;
export const CHECK_TIMEOUT_MS: number;
export const MAX_OUTPUT: number;
export const ON: number;
export const OFF: number;
export function cleanOutput(text: string): string;
export function firstLine(retry: number): string;
export function hasCheck(cwd: string): boolean;
export function runCheck(
  cwd: string,
  options?: { timeoutMs?: number; command?: string },
): Promise<CheckResult>;
export function decide(
  payload: Record<string, unknown>,
  env: Record<string, string | undefined>,
  options?: { run?: (cwd: string) => Promise<CheckResult>; dir?: string },
): Promise<{ answer: string | null; verdict: Verdict | null }>;
