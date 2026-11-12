// Types for hall-key.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export function keyOf(raw: string | null): string | null;
export function postKey(
  key: string,
  token: string,
  options?: { hall?: string; timeoutMs?: number },
): Promise<boolean>;
