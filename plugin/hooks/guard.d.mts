// Types for guard.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export const MAY_START: {
  readonly main: readonly string[];
  readonly subagents: ReadonlyMap<string, readonly string[]>;
};
export const ENV_FILE: RegExp;
export const REASONS: {
  readonly agent: string;
  readonly env: string;
  readonly input: string;
  readonly model: string;
};
export function denial(reason: string): string;
export function decide(raw: string | null): string | null;
