import { useEffect, useId, useRef, useState } from 'react';
import { STATE_STYLE } from '../office/states';
import { AgentText } from './AgentText';
import { clock } from './feed';
import { hallSaw, reviewLine, VERDICT_STATE, type ReviewEntry } from './review';

/** A list of the Reviewer's items as text, or "None". */
function Items({ items }: { items: readonly string[] }) {
  if (items.length === 0) return <p className="muted">None</p>;
  return (
    <ul className="review-list">
      {items.map((item, i) => (
        <li key={i}>
          <AgentText text={item} />
        </li>
      ))}
    </ul>
  );
}

/**
 * One review as a card. Everything in it is the Reviewer's text, shown as text through AgentText: no link, no HTML.
 * What the Reviewer says it ran and what the hall saw are two separate lines, and the claim is never shown as fact.
 */
function ReviewCard({
  entry,
  headingRef,
}: {
  entry: ReviewEntry;
  headingRef: (el: HTMLHeadingElement | null) => void;
}) {
  const headingId = useId();
  const { message, review } = entry;
  const chip = review ? STATE_STYLE[VERDICT_STATE[review.verdict]] : null;
  return (
    <article className="review-card" aria-labelledby={headingId}>
      <h3 id={headingId} ref={headingRef} tabIndex={-1}>
        Review at {clock(message.at)}
      </h3>
      {review && chip ? (
        <>
          <p>
            <span className="chip" style={{ background: chip.bg, color: chip.text }}>
              Reviewer&apos;s verdict: {review.verdict}
            </span>
          </p>
          {review.summary && (
            <p className="review-text">
              <AgentText text={review.summary} />
            </p>
          )}
          <h4>Files checked</h4>
          <Items items={review.files} />
          <h4>Findings</h4>
          {review.findings.length === 0 ? (
            <p className="muted">None</p>
          ) : (
            <ul className="review-list">
              {review.findings.map((finding, i) => (
                <li key={i}>
                  {finding.place && (
                    <>
                      <code>
                        {finding.place.file}:{finding.place.line}
                      </code>{' '}
                    </>
                  )}
                  <AgentText text={finding.text} />
                </li>
              ))}
            </ul>
          )}
          <h4>Checks run</h4>
          <p className="muted">The Reviewer says it ran:</p>
          <Items items={review.checks} />
          <p className="review-saw">{hallSaw(message.tools)}</p>
          <h4>Left for the Lead</h4>
          <Items items={review.left} />
        </>
      ) : (
        <>
          <p className="muted">This report doesn&apos;t follow the review format, so it shows as written.</p>
          <p className="review-text">
            <AgentText text={message.text} />
          </p>
          <p className="review-saw">{hallSaw(message.tools)}</p>
        </>
      )}
    </article>
  );
}

/** An earlier review: one line, and a Show toggle that opens its card after it. */
function EarlierReview({
  entry,
  open,
  onToggle,
  headingRef,
}: {
  entry: ReviewEntry;
  open: boolean;
  onToggle: () => void;
  headingRef: (el: HTMLHeadingElement | null) => void;
}) {
  const cardId = useId();
  const { message, review } = entry;
  return (
    <li>
      <span className="feed-time">{clock(message.at)}</span>
      {review ? reviewLine(review) : 'Report as written'}{' '}
      <button type="button" className="link" aria-expanded={open} aria-controls={cardId} onClick={onToggle}>
        {open ? 'Hide' : 'Show'}
      </button>
      <div id={cardId} hidden={!open}>
        {open && <ReviewCard entry={entry} headingRef={headingRef} />}
      </div>
    </li>
  );
}

/**
 * The review board: a side drawer over the right-hand column, never over the hall. Non-modal (a dialog with no
 * aria-modal and no focus trap): the hall stays usable. App mounts it anew for each opening (its key), so `at` is where
 * it opens: null for the board's heading, else that review's card, opened if it is an earlier one. App handles Esc,
 * closing on another agent and where focus goes back to.
 */
export function ReviewBoard({
  reviews,
  at,
  onClose,
}: {
  reviews: readonly ReviewEntry[];
  at: number | null;
  onClose: () => void;
}) {
  const headingId = useId();
  const boardHeading = useRef<HTMLHeadingElement>(null);
  // Where it opened: a review that arrives later must not take the focus away.
  const openedAt = useRef(at);
  const cardHeadings = useRef(new Map<number, HTMLHeadingElement>());
  const [latest, ...earlier] = reviews;
  const [shown, setShown] = useState<ReadonlySet<number>>(() =>
    at !== null && earlier.some((r) => r.message.at === at) ? new Set([at]) : new Set(),
  );

  const headingRef = (key: number) => (el: HTMLHeadingElement | null) => {
    if (el) cardHeadings.current.set(key, el);
    else cardHeadings.current.delete(key);
  };

  // Where it opens: the review asked for, else the board's own heading.
  useEffect(() => {
    const asked = openedAt.current;
    const target = (asked !== null && cardHeadings.current.get(asked)) || boardHeading.current;
    target?.focus();
    target?.scrollIntoView?.({ block: 'nearest' });
  }, []);

  const toggle = (key: number) =>
    setShown((was) => {
      const next = new Set(was);
      if (!next.delete(key)) next.add(key);
      return next;
    });

  return (
    <section className="panel review-board" role="dialog" aria-labelledby={headingId}>
      <div className="feed-head">
        <h2 id={headingId} ref={boardHeading} tabIndex={-1}>
          Review board
        </h2>
        <button type="button" className="link" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="review-scroll">
        {!latest ? (
          <p className="muted">No reviews in this run yet.</p>
        ) : (
          <>
            <ReviewCard entry={latest} headingRef={headingRef(latest.message.at)} />
            {earlier.length > 0 && (
              <>
                <h3 className="review-earlier-head">Earlier reviews</h3>
                <ul className="review-earlier">
                  {earlier.map((entry) => (
                    <EarlierReview
                      key={entry.message.at}
                      entry={entry}
                      open={shown.has(entry.message.at)}
                      onToggle={() => toggle(entry.message.at)}
                      headingRef={headingRef(entry.message.at)}
                    />
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
