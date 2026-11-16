// Types for team-check.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export const CURRENT: number;
export const NO_TEAM: number;
export const OLDER: number;
export function status(home: string, folder: string | null): number;
