// Types for team-setup.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export const INSTALL: string[];
export function report(home: string, writing: boolean): string[];
