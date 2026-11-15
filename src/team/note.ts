// A guild lead's proposed note (v3.7, docs/v3.7-plan.md, M6, option A): the last non-empty line of its final report,
// exactly `Proposed note: <text>`. The hall keeps the text in memory until Dima approves or rejects it; nothing of it is
// written before. It is agent text: untrusted, capped, and shown only as text.

/** The four guild leads: the only agents whose reports can propose a note (A, Dima, 15 Nov). */
export const NOTE_AGENTS = ['designer', 'frontend', 'backend', 'reviewer'] as const;
export type NoteAgent = (typeof NOTE_AGENTS)[number];

/** A note's text: one line, at most this many characters. */
export const MAX_NOTE = 300;

const PREFIX = 'Proposed note:';
const FENCE = /^\s*(```|~~~)/;
/** Control (Cc) and format (Cf) characters: invisible, so a note holding one is no note. */
const INVISIBLE = /[\p{Cc}\p{Cf}]/u;

/** The last non-empty line of `text`, and where it is; null for a text with none. */
function lastLine(text: string): { line: string; at: number; lines: string[] } | null {
  const lines = text.split(/\r?\n/);
  for (let at = lines.length - 1; at >= 0; at -= 1) {
    if (lines[at]!.trim() !== '') return { line: lines[at]!, at, lines };
  }
  return null;
}

/**
 * The note `text` proposes, or null. Only the last non-empty line counts, starting exactly with `Proposed note: ` (not
 * quoted, not a list item, not inside a code block left open), one line of at most MAX_NOTE characters, with no invisible
 * character and no `` !` `` (which a skill would run as a command).
 */
export function proposalOf(text: string | undefined): string | null {
  if (typeof text !== 'string') return null;
  const last = lastLine(text);
  if (!last || !last.line.startsWith(`${PREFIX} `)) return null;
  const opened = last.lines.slice(0, last.at).filter((line) => FENCE.test(line)).length % 2 === 1;
  const note = last.line.slice(PREFIX.length).trim();
  if (opened || note === '' || Array.from(note).length > MAX_NOTE) return null;
  if (INVISIBLE.test(note) || note.includes('!`')) return null;
  return note;
}

/** `text` without a last line that starts with `Proposed note:`, valid or not: what a report's own parser reads. */
export function withoutProposal(text: string): string {
  const last = lastLine(text);
  if (!last || !last.line.startsWith(PREFIX)) return text;
  return last.lines.slice(0, last.at).join('\n').trimEnd();
}
