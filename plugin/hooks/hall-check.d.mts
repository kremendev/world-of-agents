// Types for hall-check.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export const OURS: 0;
export const DOWN: 3;
export const TAKEN: 4;
export function hallState(options?: {
  hall?: string;
  token?: string | null;
  timeoutMs?: number;
}): Promise<0 | 3 | 4>;
