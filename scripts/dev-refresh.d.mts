// Types for dev-refresh.mjs, so its tests are typechecked. The script itself stays plain JS.

export class RefreshError extends Error {}
export function mirror(options: { source: string; target: string; root: string }): {
  copied: string[];
  removed: string[];
  unchanged: number;
};
