import { linksAsText } from './shorten';

/**
 * What Copy leaves out (v3.1, D8): every control (Unicode category Cc) and format (Cf) character but tab and line
 * breaks. That is C0, DEL and C1; zero-width characters and joiners; bidi controls, isolates and marks; the byte order
 * mark; invisible operators; the soft hyphen; and the tag characters, which can spell out text no one sees (hidden
 * instructions, pasted into Claude Code). A joined emoji comes out as its parts.
 */
const HIDDEN = /[\p{Cc}\p{Cf}]/u;
const KEPT = new Set(['\t', '\n', '\r']);

/**
 * The text Copy puts on the clipboard, and how many characters it left out. Links go as their text, the way the page
 * shows them, so a target the page never showed never reaches the clipboard (Dima, 11 Nov). The hidden characters go
 * first: one between a link's `]` and `(` keeps it from being a link on the page, and taking it out must not hand the
 * clipboard a working link. `code` and **bold** marks stay, as written.
 */
export function forCopy(text: string): { text: string; removed: number } {
  let kept = '';
  let removed = 0;
  for (const char of text) {
    if (HIDDEN.test(char) && !KEPT.has(char)) removed += 1;
    else kept += char;
  }
  return { text: linksAsText(kept), removed };
}

/** Puts `text` on the clipboard. False when there is no clipboard (not a secure page) or the browser refuses. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (!navigator.clipboard?.writeText) return false;
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
