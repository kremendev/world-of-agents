import { AGENT_IDS, type AgentId } from '../events/schema';
import type { LogEntry } from '../state/office';

export type FeedLine = LogEntry | { kind: 'everyone'; at: number };

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
