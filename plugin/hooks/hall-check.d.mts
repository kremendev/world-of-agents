// Types for hall-check.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export const OURS: 0;
export const DOWN: 3;
export const TAKEN: 4;
type Options = {
  hall?: string;
  token?: string | null;
  timeoutMs?: number;
};
export function hallAnswer(options?: Options): Promise<{ state: 0 | 3 | 4; version: string | null }>;
export function hallState(options?: Options): Promise<0 | 3 | 4>;
