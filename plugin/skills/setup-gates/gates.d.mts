// Types for gates.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export const RELATIVE: string;
export const KEY: string;
export const ABOUT: string[];
export function stateOf(settings: unknown): 'missing' | 'broken' | 'not-set-up' | 'on' | 'off';
export function gates(root: string, mode: 'on' | 'off' | undefined): string[];
