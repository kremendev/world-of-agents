import { useId, useState, type MouseEvent, type Ref } from 'react';
import type { AgentId } from '../events/schema';
import { agentById } from '../office/roster';
import { stateWords } from '../office/states';
import type { OfficeState } from '../state/office';
import { AgentText } from './AgentText';
import { clock, feedLines, feedShort, flagOf, type FeedLine, type Flag } from './feed';
import { isReview, parseReview, reviewLine } from './review';

/** A flag's word, so a row never stands out by its colour alone. */
const FLAG_WORDS: Record<Flag, string> = { 'to-you': 'To you', 'needs-you': 'Needs you', failed: 'Failed' };

const nameOf = (id: AgentId | 'you') => (id === 'you' ? 'you' : agentById(id).name);

/** A click that ends a text selection is someone selecting, not asking the row to open or close. */
function selecting(): boolean {
  const selection = window.getSelection();
  return selection !== null && !selection.isCollapsed && selection.toString() !== '';
}

/**
 * One row. A message too long for it shows cut, with a "Show all" toggle (a real button: Enter and Space) that opens
 * the full text in a plain element after it, where it can be selected, copied and read like any text. A click on the
 * row toggles too, but not in the full text and not when it ends a selection. A review (the Reviewer's report to the
 * Lead, by who sent it) has no Show all: it reads "Review: <verdict>, <findings>", and its "Open review" button, or a
 * click on the row, opens it on the review board.
 */
function Line({
  entry,
  office,
  open,
  onToggle,
  onOpenReview,
}: {
  entry: FeedLine;
  office: OfficeState;
  open: boolean;
  onToggle: () => void;
  onOpenReview: (at: number) => void;
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
  const review = entry.kind === 'message' && isReview(entry);
  const parsed = review ? parseReview(entry.text) : null;
  const short = entry.kind === 'message' ? feedShort(entry.text) : null;
  const task = entry.kind === 'state' ? office.tasks.find((t) => t.id === entry.taskId) : undefined;
  // An approval row's flag already says "Needs you": the state word would only say it twice.
  const what =
    entry.kind === 'message' ? (
      <>
        to {nameOf(entry.to)}:
        {parsed
          ? ` Review: ${reviewLine(parsed)}`
          : !open && (
              <>
                {' '}
                <AgentText text={short ?? entry.text} />
              </>
            )}
      </>
    ) : (
      [flag === 'needs-you' ? null : stateWords(entry.state), task?.title].filter(Boolean).join(' · ')
    );
  const full = entry.kind === 'message' && !review && short !== null ? entry.text : null;
  const rowClick = review
    ? (e: MouseEvent) => {
        if (e.target instanceof Element && e.target.closest('.feed-toggle')) return;
        if (!selecting()) onOpenReview(entry.at);
      }
    : full === null
      ? undefined
      : (e: MouseEvent) => {
          if (e.target instanceof Element && e.target.closest('.feed-toggle, .feed-full')) return;
          if (!selecting()) onToggle();
        };
  return (
    <li
      className={['feed-line', flag && `flagged ${flag}`, (full !== null || review) && 'long']
        .filter(Boolean)
        .join(' ')}
      onClick={rowClick}
    >
      <time className="feed-time">{clock(entry.at)}</time>
      <span className="feed-who">{nameOf(entry.kind === 'state' ? entry.agent : entry.from)}</span>
      {flag && <span className="feed-flag">{FLAG_WORDS[flag]}</span>}
      {what !== '' && <span className="feed-what">{what}</span>}
      {review && (
        <button
          type="button"
          className="link feed-toggle"
          aria-haspopup="dialog"
          onClick={() => onOpenReview(entry.at)}
        >
          Open review
        </button>
      )}
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
 * it sent or got. `headingRef` lets App put focus back on its heading when the review board closes.
 */
export function ActivityFeed({
  office,
  agent,
  onShowEveryone,
  onOpenReview = () => {},
  headingRef,
}: {
  office: OfficeState;
  agent: AgentId | null;
  onShowEveryone: () => void;
  onOpenReview?: (at: number) => void;
  headingRef?: Ref<HTMLHeadingElement>;
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
        <h2 id={headingId} ref={headingRef} tabIndex={-1}>
          {agent ? `Activity · ${agentById(agent).name}` : 'Activity'}
        </h2>
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
                onOpenReview={onOpenReview}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
