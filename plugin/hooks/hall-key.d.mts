// Types for hall-key.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export function keyOf(raw: string | null): { key: string; project: string } | null;
export function postKey(
  given: { key: string; project: string },
  token: string,
  options?: { hall?: string; timeoutMs?: number },
): Promise<boolean>;
