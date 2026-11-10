import { AGENT_IDS, type AgentId } from '../events/schema';
import type { LogEntry } from '../state/office';
import { linksAsText, shorten } from './shorten';

export type FeedLine = LogEntry | { kind: 'everyone'; at: number };

/** The rows that stand out: what is addressed to you, an approval wait, a failure. Nothing else, ever. */
export type Flag = 'to-you' | 'needs-you' | 'failed';

/**
 * Which flag a row gets, from the event's own fields alone, never from its text: so a web page an agent read can't
 * make that agent's message look important. A message to you comes only from the Lead's answer at the main thread's
 * Stop; `needs-you` only from a permission dialog; `error` only from a failed run or task, or the Lead's StopFailure
 * (server/map.ts). A small fixed set: if everything stood out, nothing would.
 */
export function flagOf(line: FeedLine): Flag | null {
  if (line.kind === 'message') return line.to === 'you' ? 'to-you' : null;
  if (line.kind === 'state')
    return line.state === 'needs-you' ? 'needs-you' : line.state === 'error' ? 'failed' : null;
  return null;
}

/** A message row longer than this many characters shows cut, and expands to the whole text on a click. */
export const FEED_CHARS = 200;

/**
 * A long message's row before it is expanded: on one line, links as their text, at most FEED_CHARS characters and
 * ending in "…". Null when the message fits, and its row shows it whole as it is.
 */
export function feedShort(text: string): string | null {
  const flat = linksAsText(text).replace(/\s+/g, ' ').trim();
  return Array.from(flat).length > FEED_CHARS ? shorten(flat, FEED_CHARS) : null;
}

type Seen = Pick<Extract<LogEntry, { kind: 'state' }>, 'state' | 'taskId'>;

/**
 * What the feed shows, newest first. Hooks repeat themselves: every tool call says "writing", and a stop sends all five
 * to idle whether they were resting or not. So a state event that changes nothing is skipped, and when the whole team
 * comes to rest the idle lines in a row become one. `agent` narrows it to that agent, which needs no such line.
 */
export function feedLines(log: readonly LogEntry[], agent: AgentId | null): FeedLine[] {
  const now = Object.fromEntries(AGENT_IDS.map((id) => [id, { state: 'idle' }])) as Record<AgentId, Seen>;
  const lines: FeedLine[] = [];
  for (const entry of log) {
    if (entry.kind === 'message') {
      if (!agent || entry.from === agent || entry.to === agent) lines.push(entry);
      continue;
    }
    const was = now[entry.agent];
    if (was.state === entry.state && was.taskId === entry.taskId) continue;
    now[entry.agent] = entry;
    if (agent && entry.agent !== agent) continue;
    lines.push(entry);
    if (!agent && entry.state === 'idle' && AGENT_IDS.every((id) => now[id].state === 'idle')) {
      while (lines.at(-1)?.kind === 'state' && (lines.at(-1) as Seen).state === 'idle') lines.pop();
      lines.push({ kind: 'everyone', at: entry.at });
    }
  }
  return lines.reverse();
}
