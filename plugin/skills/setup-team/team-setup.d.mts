// Types for team-setup.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export function report(home: string, writing: boolean, folder: string, now?: number): string[];
