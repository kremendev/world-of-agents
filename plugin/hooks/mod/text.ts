// Agent text, made safe to show in the pane or to speak.

/**
 * C0 and C1 control characters (a terminal escape among them), DEL, and the bidi embeddings, overrides and isolates
 * (0x202a to 0x202e, 0x2066 to 0x2069). Numbers, not escapes: Claude Code's tools have turned typed escapes into the
 * real characters.
 */
const UNSAFE: readonly (readonly [number, number])[] = [
  [0x00, 0x1f],
  [0x7f, 0x9f],
  [0x202a, 0x202e],
  [0x2066, 0x2069],
];

const unsafe = (char: string) => {
  const code = char.codePointAt(0) ?? 0;
  return UNSAFE.some(([from, to]) => code >= from && code <= to);
};

/**
 * Unsafe characters become spaces, and the text is cut at `max` code points, so an emoji is never split. What is left
 * can only ever be a short line of plain text.
 */
export function plain(text: string, max: number): string {
  const cleaned = Array.from(text, (char) => (unsafe(char) ? ' ' : char))
    .join('')
    .trim();
  return Array.from(cleaned).slice(0, max).join('');
}
