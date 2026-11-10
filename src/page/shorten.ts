/** AgentText's Markdown link or image, `[text](target)`, with one level of parentheses in the target. */
const LINK = /!?\[([^\]\n]*)\]\((?:[^()\s]|\([^()\s]*\))*\)/g;

/**
 * Each Markdown link or image as its text alone, the way AgentText shows it. Done before a cut, so a cut can never
 * land inside a link and leave part of its target showing.
 */
export const linksAsText = (text: string): string => text.replace(LINK, '$1');

/** Drops the last `mark` when the text holds an odd number of them, so AgentText never shows a half-open one. */
function closed(text: string, mark: string): string {
  if (text.split(mark).length % 2 === 1) return text;
  const at = text.lastIndexOf(mark);
  return text.slice(0, at) + text.slice(at + mark.length);
}

/**
 * `text` in at most `max` characters, ellipsis included. Longer text is cut at its last space when that keeps two
 * thirds of it, else mid-word, and ends in "…". A cut never leaves a `code` span or **bold** open. Counts code points,
 * so an emoji is never split into a broken half.
 */
export function shorten(text: string, max: number): string {
  const chars = Array.from(text);
  if (chars.length <= max) return text;
  let kept = chars.slice(0, max - 1).join('');
  const space = kept.lastIndexOf(' ');
  if (space >= (kept.length * 2) / 3) kept = kept.slice(0, space);
  kept = closed(closed(kept, '**'), '`').replace(/[\s,;:]+$/, '');
  return `${kept}…`;
}
