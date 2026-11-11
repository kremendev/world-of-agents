import { useEffect, useId, useRef, useState, type MouseEvent, type Ref } from 'react';
import type { AgentId } from '../events/schema';
import { agentById } from '../office/roster';
import { stateWords } from '../office/states';
import type { OfficeState } from '../state/office';
import { AgentText } from './AgentText';
import { CopyButton } from './CopyButton';
import {
  clock,
  feedLines,
  feedShort,
  flagKey,
  flagOf,
  forYou,
  onlyFlagged,
  stripShort,
  type FeedLine,
  type Flag,
} from './feed';
import { useReadMarks } from './readMarks';
import { isReview, parseReview, reviewLine } from './review';

/** A flag's word, so a row never stands out by its colour alone. */
const FLAG_WORDS: Record<Flag, string> = { 'to-you': 'To you', 'needs-you': 'Needs you', failed: 'Failed' };

/** How many unread items the "For you" strip shows; the rest are "and N more". */
const STRIP_ITEMS = 3;

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
  onRead,
}: {
  entry: FeedLine;
  office: OfficeState;
  open: boolean;
  onToggle: () => void;
  onOpenReview: (at: number) => void;
  onRead: (key: string) => void;
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
  // A flagged row: a click on it, or on its Show all, marks it read, and the strip can move the focus to it.
  const mark = flagKey(entry);
  const onClick =
    mark === null
      ? rowClick
      : (e: MouseEvent) => {
          onRead(mark);
          rowClick?.(e);
        };
  return (
    <li
      className={['feed-line', flag && `flagged ${flag}`, (full !== null || review) && 'long']
        .filter(Boolean)
        .join(' ')}
      data-key={mark ?? undefined}
      tabIndex={mark === null ? undefined : -1}
      onClick={onClick}
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
          {open && <CopyButton text={full} what="the message" className="feed-toggle" />}
          <div id={fullId} className="feed-full" hidden={!open}>
            {open && <AgentText text={full} />}
          </div>
        </>
      )}
    </li>
  );
}

/** What one strip item says after its flag, who and time: from the event's fields, or a message's own text, cut. */
function stripLine(line: FeedLine, office: OfficeState) {
  if (line.kind === 'message') return <AgentText text={stripShort(line.text)} />;
  if (line.kind !== 'state') return null;
  const name = agentById(line.agent).name;
  if (line.state === 'needs-you') return `${name} needs your approval`;
  const task = office.tasks.find((t) => t.id === line.taskId)?.title;
  return task ? `${name} failed · ${task}` : `${name} failed`;
}

/**
 * The whole team's activity, newest first. `agent` narrows it to one agent's own state changes and the messages
 * it sent or got. `headingRef` lets App put focus back on its heading when the review board closes.
 *
 * At the top, the "For you" strip (v3.1): the flagged rows not yet read (To you, Needs you, Failed), whatever the agent
 * filter, newest first, three at most. An item stays until it is clicked: the click marks it read, shows everyone if
 * the filter hides its row, and moves the focus to that row. `readScope` is where the marks are kept (useReadMarks).
 * "Only for me" narrows the list to the flagged rows, read or not, with the agent filter still applied.
 */
export function ActivityFeed({
  office,
  agent,
  onShowEveryone,
  onOpenReview = () => {},
  headingRef,
  readScope = null,
}: {
  office: OfficeState;
  agent: AgentId | null;
  onShowEveryone: () => void;
  onOpenReview?: (at: number) => void;
  headingRef?: Ref<HTMLHeadingElement>;
  readScope?: string | null;
}) {
  const headingId = useId();
  const { read, markRead } = useReadMarks(readScope);
  const [mine, setMine] = useState(false);
  const filtered = feedLines(office.log, agent);
  const log = mine ? onlyFlagged(filtered) : filtered;
  const unread = forYou(feedLines(office.log, null), read);
  const list = useRef<HTMLUListElement>(null);
  // The row a strip click moves the focus to, once the render it asked for (read, maybe unfiltered) is on screen.
  const focusRow = useRef<string | null>(null);
  useEffect(() => {
    const key = focusRow.current;
    if (key === null) return;
    focusRow.current = null;
    // A key is fixed words and digits only (flagKey), so it goes into the selector as it is.
    const row = list.current?.querySelector<HTMLElement>(`[data-key="${key}"]`);
    row?.scrollIntoView?.({ block: 'nearest' });
    row?.focus();
  });
  const openItem = (key: string) => {
    focusRow.current = key;
    markRead(key);
    if (agent && !log.some((line) => flagKey(line) === key)) onShowEveryone();
  };
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
        <div className="feed-actions">
          <button
            type="button"
            className="link feed-filter"
            aria-pressed={mine}
            onClick={() => setMine((was) => !was)}
          >
            Only for me
          </button>
          {agent && (
            <button type="button" className="link" onClick={onShowEveryone}>
              Show everyone
            </button>
          )}
        </div>
      </div>
      {unread.length > 0 && (
        <section className="for-you" aria-label="For you">
          <ul className="for-you-list">
            {unread.slice(0, STRIP_ITEMS).map((line, i) => {
              const key = flagKey(line)!;
              const flag = flagOf(line)!;
              const who = line.kind === 'state' ? line.agent : line.kind === 'message' ? line.from : null;
              return (
                <li key={`${key}#${i}`}>
                  <button type="button" className={`for-you-item ${flag}`} onClick={() => openItem(key)}>
                    <span className="feed-flag">{FLAG_WORDS[flag]}</span>
                    <span className="feed-who">{who ? agentById(who).name : ''}</span>
                    <time className="feed-time">{clock(line.at)}</time>
                    <span className="for-you-what">{stripLine(line, office)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          {unread.length > STRIP_ITEMS && (
            <p className="muted for-you-more">and {unread.length - STRIP_ITEMS} more</p>
          )}
        </section>
      )}
      <div className="feed-scroll">
        {log.length === 0 ? (
          <p className="muted">{mine ? 'Nothing for you yet.' : 'Nothing yet.'}</p>
        ) : (
          <ul className="feed-list" ref={list}>
            {log.map((entry, i) => (
              <Line
                key={log.length - i}
                entry={entry}
                office={office}
                open={open.has(entry)}
                onToggle={() => toggle(entry)}
                onOpenReview={onOpenReview}
                onRead={markRead}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
