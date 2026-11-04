import { useId } from 'react';
import type { AgentId } from '../events/schema';
import { agentById } from '../office/roster';
import { stateWords } from '../office/states';
import type { OfficeState } from '../state/office';
import { AgentText } from './AgentText';
import { feedLines, type FeedLine } from './feed';

const nameOf = (id: AgentId | 'you') => (id === 'you' ? 'you' : agentById(id).name);
const two = (n: number) => String(n).padStart(2, '0');

/** A moment as local HH:MM:SS. */
function clock(at: number): string {
  const d = new Date(at);
  return `${two(d.getHours())}:${two(d.getMinutes())}:${two(d.getSeconds())}`;
}

function Line({ entry, office }: { entry: FeedLine; office: OfficeState }) {
  if (entry.kind === 'everyone') {
    return (
      <li className="feed-line">
        <time className="feed-time">{clock(entry.at)}</time>
        <span className="feed-who">Everyone</span>
        <span className="feed-what">is resting</span>
      </li>
    );
  }
  const task = entry.kind === 'state' ? office.tasks.find((t) => t.id === entry.taskId) : undefined;
  return (
    <li className="feed-line">
      <time className="feed-time">{clock(entry.at)}</time>
      <span className="feed-who">{nameOf(entry.kind === 'state' ? entry.agent : entry.from)}</span>
      <span className="feed-what">
        {entry.kind === 'message' ? (
          <>
            to {nameOf(entry.to)}: <AgentText text={entry.text} />
          </>
        ) : task ? (
          `${stateWords(entry.state)} · ${task.title}`
        ) : (
          stateWords(entry.state)
        )}
      </span>
    </li>
  );
}

/**
 * The whole team's activity, newest first. `agent` narrows it to one agent's own state changes and the messages
 * it sent or got.
 */
export function ActivityFeed({
  office,
  agent,
  onShowEveryone,
}: {
  office: OfficeState;
  agent: AgentId | null;
  onShowEveryone: () => void;
}) {
  const headingId = useId();
  const log = feedLines(office.log, agent);

  return (
    <section className="panel feed" aria-labelledby={headingId}>
      <div className="feed-head">
        <h2 id={headingId}>{agent ? `Activity · ${agentById(agent).name}` : 'Activity'}</h2>
        {agent && (
          <button type="button" className="link" onClick={onShowEveryone}>
            Show everyone
          </button>
        )}
      </div>
      <div className="feed-scroll">
        {log.length === 0 ? (
          <p className="muted">Nothing yet.</p>
        ) : (
          <ul className="feed-list">
            {log.map((entry, i) => (
              <Line key={log.length - i} entry={entry} office={office} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
