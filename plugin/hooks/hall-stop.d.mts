// Types for hall-stop.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export const STOPPED: 0;
export const REFUSED: 5;
export function ownVersion(file?: string): string | null;
export function askToStop(
  version: string,
  token: string,
  options?: { hall?: string; timeoutMs?: number },
): Promise<0 | 3 | 4 | 5>;
export function waitForFree(options?: {
  ask?: () => Promise<number>;
  waitMs?: number;
  stepMs?: number;
}): Promise<boolean>;
