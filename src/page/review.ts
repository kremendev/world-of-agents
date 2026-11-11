import type { Message } from '../state/office';

/**
 * The Reviewer's report format (plugin/agents/reviewer.md, v3.1) and the parser the review board reads it with. A
 * review is the Reviewer's report to the Lead, known by who sent it, never by its text: in Live only the Reviewer's own
 * SubagentStop makes such a message (map.ts). Its text stays untrusted: the parser only splits it into strings.
 */

/** The verdicts reviewer.md lets the Reviewer give. A test checks the prompt names exactly these. */
export const VERDICTS = ['Approved', 'Changes needed', "Couldn't review"] as const;
export type Verdict = (typeof VERDICTS)[number];

/** The headings the report ends with, in this order. A test checks the prompt names exactly these. */
export const HEADINGS = ['Verdict', 'Files checked', 'Findings', 'Checks run', 'Left for the Lead'] as const;

/** A finding. `place` is set only when the item starts with a `path:line` the card can show as one (PLACE). */
export type Finding = { place: { file: string; line: string } | null; text: string };

export type Review = {
  /** What comes before the headings: one or two sentences, as the prompt asks. */
  summary: string;
  verdict: Verdict;
  files: string[];
  findings: Finding[];
  /** What the Reviewer says it ran: its claim, not a fact. The calls the hall saw are on the message (`tools`). */
  checks: string[];
  left: string[];
};

/**
 * `path:line: text` or `path:line-line: text`, the location optionally in backticks. A path is 1 to 200 characters
 * of letters, digits and `_ . / @ + -`, a line 1 to 9,999,999. So a Windows path, a space or a bidi control in the
 * location doesn't match, and that item shows as written. No class here overlaps the character after it, so it can't
 * backtrack more than the 200 path characters.
 */
const PLACE = /^(`?)([A-Za-z0-9_./@+-]{1,200}):([1-9][0-9]{0,6}(?:-[1-9][0-9]{0,6})?)\1: (\S.*)$/;
const NONE = /^(?:- )?none\.?$/i;
const INDENTED = /^[ \t]/;
const heading = (name: string) => `## ${name}`;
/** A model may write the apostrophe in "Couldn't review" as U+2019. */
const CURLY_APOSTROPHE = String.fromCodePoint(0x2019);

/** The verdict line: one of VERDICTS, case ignored, with a surrounding `**` and a final `.` ignored. */
function verdictOf(line: string): Verdict | null {
  let word = line.trim();
  if (word.endsWith('.')) word = word.slice(0, -1);
  if (word.length > 4 && word.startsWith('**') && word.endsWith('**')) word = word.slice(2, -2);
  if (word.endsWith('.')) word = word.slice(0, -1);
  const plain = word.replaceAll(CURLY_APOSTROPHE, "'").toLowerCase();
  return VERDICTS.find((v) => v.toLowerCase() === plain) ?? null;
}

/**
 * One list section's lines: `- ` items, an indented line continuing the item before it, blank lines ignored, and
 * `None` (or `- None`) alone for an empty list. Anything else, `None` among items included: null.
 */
function listOf(lines: readonly string[]): string[] | null {
  const items: string[] = [];
  let none = false;
  for (const line of lines) {
    if (line.trim() === '') continue;
    if (NONE.test(line.trim()) && !INDENTED.test(line)) {
      if (items.length > 0) return null;
      none = true;
    } else if (line.startsWith('- ') && line.trim() !== '-') {
      if (none) return null;
      items.push(line.slice(2).trim());
    } else if (INDENTED.test(line) && items.length > 0) {
      items[items.length - 1] += ` ${line.trim()}`;
    } else {
      return null;
    }
  }
  return items;
}

function findingOf(item: string): Finding {
  const match = PLACE.exec(item);
  return match
    ? { place: { file: match[2]!, line: match[3]! }, text: match[4]! }
    : { place: null, text: item };
}

/**
 * The report split into its parts, or null when it doesn't follow the format (the board then shows it as written).
 * The last line that is exactly `## Verdict` (trailing spaces allowed) starts the block; after it come the other
 * headings, once each and in order, and no other line starting with `#`. One pass over the lines.
 */
export function parseReview(text: string): Review | null {
  const lines = text.split(/\r?\n/);
  let start = -1;
  for (let i = lines.length - 1; i >= 0 && start < 0; i -= 1) {
    if (lines[i]!.trimEnd() === heading(HEADINGS[0])) start = i;
  }
  if (start < 0) return null;
  // The lines under each heading, in HEADINGS order.
  const sections: string[][] = [[]];
  for (const line of lines.slice(start + 1)) {
    if (!line.startsWith('#')) {
      sections[sections.length - 1]!.push(line);
      continue;
    }
    const next = HEADINGS[sections.length];
    if (next === undefined || line.trimEnd() !== heading(next)) return null;
    sections.push([]);
  }
  if (sections.length !== HEADINGS.length) return null;
  const [verdictLines, ...lists] = sections as [string[], string[], string[], string[], string[]];
  const said = verdictLines.filter((line) => line.trim() !== '');
  const verdict = said.length === 1 ? verdictOf(said[0]!) : null;
  const [files, findings, checks, left] = lists.map(listOf);
  if (!verdict || !files || !findings || !checks || !left) return null;
  return {
    summary: lines.slice(0, start).join('\n').trim(),
    verdict,
    files,
    findings: findings.map(findingOf),
    checks,
    left,
  };
}

/** The Reviewer's report to the Lead. Who sent it decides; text in perfect review shape from anyone else is not one. */
export const isReview = (message: Message): boolean => message.from === 'reviewer' && message.to === 'lead';

/** This run's reviews, newest first (a reset empties `messages`), each with its parts or null to show as written. */
export function reviewsOf(messages: readonly Message[]): { message: Message; review: Review | null }[] {
  return messages
    .filter(isReview)
    .reverse()
    .map((message) => ({ message, review: parseReview(message.text) }));
}
