import { useId, useState, type MouseEvent } from 'react';
import type { AgentId } from '../events/schema';
import { agentById } from '../office/roster';
import { stateWords } from '../office/states';
import type { OfficeState } from '../state/office';
import { AgentText } from './AgentText';
import { feedLines, feedShort, flagOf, type FeedLine, type Flag } from './feed';

/** A flag's word, so a row never stands out by its colour alone. */
const FLAG_WORDS: Record<Flag, string> = { 'to-you': 'To you', 'needs-you': 'Needs you', failed: 'Failed' };

const nameOf = (id: AgentId | 'you') => (id === 'you' ? 'you' : agentById(id).name);
const two = (n: number) => String(n).padStart(2, '0');

/** A moment as local HH:MM:SS. */
function clock(at: number): string {
  const d = new Date(at);
  return `${two(d.getHours())}:${two(d.getMinutes())}:${two(d.getSeconds())}`;
}

/** A click that ends a text selection is someone selecting, not asking the row to open or close. */
function selecting(): boolean {
  const selection = window.getSelection();
  return selection !== null && !selection.isCollapsed && selection.toString() !== '';
}

/**
 * One row. A message too long for it shows cut, with a "Show all" toggle (a real button: Enter and Space) that opens
 * the full text in a plain element after it, where it can be selected, copied and read like any text. A click on the
 * row toggles too, but not in the full text and not when it ends a selection.
 */
function Line({
  entry,
  office,
  open,
  onToggle,
}: {
  entry: FeedLine;
  office: OfficeState;
  open: boolean;
  onToggle: () => void;
}) {
  const fullId = useId();
  if (entry.kind === 'everyone') {
    return (
      <li className="feed-line">
        <time className="feed-time">{clock(entry.at)}</time>
        <span className="feed-who">Everyone</span>
        <span className="feed-what">is resting</span>
      </li>
    );
  }
  const flag = flagOf(entry);
  const short = entry.kind === 'message' ? feedShort(entry.text) : null;
  const task = entry.kind === 'state' ? office.tasks.find((t) => t.id === entry.taskId) : undefined;
  // An approval row's flag already says "Needs you": the state word would only say it twice.
  const what =
    entry.kind === 'message' ? (
      <>
        to {nameOf(entry.to)}:
        {!open && (
          <>
            {' '}
            <AgentText text={short ?? entry.text} />
          </>
        )}
      </>
    ) : (
      [flag === 'needs-you' ? null : stateWords(entry.state), task?.title].filter(Boolean).join(' · ')
    );
  const full = entry.kind === 'message' && short !== null ? entry.text : null;
  const rowClick =
    full === null
      ? undefined
      : (e: MouseEvent) => {
          if (e.target instanceof Element && e.target.closest('.feed-toggle, .feed-full')) return;
          if (!selecting()) onToggle();
        };
  return (
    <li
      className={['feed-line', flag && `flagged ${flag}`, full !== null && 'long'].filter(Boolean).join(' ')}
      onClick={rowClick}
    >
      <time className="feed-time">{clock(entry.at)}</time>
      <span className="feed-who">{nameOf(entry.kind === 'state' ? entry.agent : entry.from)}</span>
      {flag && <span className="feed-flag">{FLAG_WORDS[flag]}</span>}
      {what !== '' && <span className="feed-what">{what}</span>}
      {full !== null && (
        <>
          <button
            type="button"
            className="link feed-toggle"
            aria-expanded={open}
            aria-controls={fullId}
            onClick={onToggle}
          >
            {open ? 'Show less' : 'Show all'}
          </button>
          <div id={fullId} className="feed-full" hidden={!open}>
            {open && <AgentText text={full} />}
          </div>
        </>
      )}
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
  // The rows expanded, by their log entry: a new event or another filter moves no row's state to another row.
  const [open, setOpen] = useState<ReadonlySet<FeedLine>>(new Set());
  const toggle = (entry: FeedLine) =>
    setOpen((was) => {
      const next = new Set(was);
      if (!next.delete(entry)) next.add(entry);
      return next;
    });

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
              <Line
                key={log.length - i}
                entry={entry}
                office={office}
                open={open.has(entry)}
                onToggle={() => toggle(entry)}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
