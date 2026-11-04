import { AGENT_IDS, type AgentState } from '../events/schema';
import { agentById } from '../office/roster';
import type { Message, OfficeState } from '../state/office';

/** The longest line a screen reader gets. */
export const MAX_LINE = 200;

/** A sentence end: the mark, any closing quote or bracket, then a space or the end of the text. */
const SENTENCE_END = /[.!?]["'`)\]]*(?=\s|$)/g;

/** Cuts a long line at the last full sentence within MAX_LINE, or else at the last whole word. Never mid-word. */
export function shortLine(line: string): string {
  if (line.length <= MAX_LINE) return line;
  const ends = [...line.matchAll(SENTENCE_END)]
    .map((m) => m.index + m[0].length)
    .filter((e) => e <= MAX_LINE);
  const end = ends.at(-1) ?? line.slice(0, MAX_LINE + 1).search(/\s\S*$/);
  return line.slice(0, Math.max(end, 0)).trimEnd();
}

/** Agent text without its Markdown markers, even one left alone by a cut, so a screen reader doesn't read them out. */
export const withoutMarkers = (text: string) => text.replace(/`|\*\*/g, '');

const AT_REST: ReadonlySet<AgentState> = new Set(['idle', 'done', 'error']);

/**
 * The Lead's report, once nothing is left running: everyone at rest, and nobody back at work since it was said.
 * Its updates while work goes on stay in the bubbles and the panel, so a screen reader isn't talked over.
 */
export function finalReport(office: OfficeState): Message | null {
  if (!AGENT_IDS.every((id) => AT_REST.has(office.agents[id].state))) return null;
  for (const entry of [...office.log].reverse()) {
    if (entry.kind === 'message' && entry.to === 'you') return entry;
    if (entry.kind === 'state' && !AT_REST.has(entry.state)) return null;
  }
  return null;
}

/** Who is waiting for your approval in Claude Code. */
export function whoIsWaiting(office: OfficeState): string[] {
  return AGENT_IDS.filter((id) => office.agents[id].state === 'needs-you').map(
    (id) => `${agentById(id).name} needs your approval in Claude Code`,
  );
}
