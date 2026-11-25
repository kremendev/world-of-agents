import type { AgentId } from '../events/schema';
import { waitingWords } from '../live/announce';
import { agentById } from '../office/roster';

/** The banner shows this many agents, then "and N more" (D18). */
export const BANNER_ROWS = 3;
/** On a phone, two (Dima, 25 Nov): three rows ran under the agent list at 320 x 480. */
export const PHONE_ROWS = 2;

/**
 * The needs-you banner (4d.7, D18): one banner, a row per agent waiting for your approval in Claude Code (`rows` at
 * most, then "and N more"), each with its own "Show me". It takes the status line's place while it shows; the page's
 * live region reads it out as it always has. With `onMore` (a phone), "and N more" is a button to everyone waiting.
 */
export function NeedsYou({
  waiting,
  onShowMe,
  rows = BANNER_ROWS,
  onMore,
}: {
  waiting: readonly AgentId[];
  onShowMe: (id: AgentId) => void;
  rows?: number;
  onMore?: () => void;
}) {
  if (waiting.length === 0) return null;
  const more = waiting.length - rows;
  return (
    <section className="hud-needs" aria-label="Needs you">
      <svg
        className="hud-needs-icon"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11m0-1V4a1.5 1.5 0 0 1 3 0v6.5m0-.5V5.5a1.5 1.5 0 0 1 3 0V14c0 4-2.7 7-6.5 7-2.8 0-4.4-1.6-5.6-3.6L3.6 14.3a1.5 1.5 0 0 1 2.5-1.6L8 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <ul className="hud-needs-rows">
        {waiting.slice(0, rows).map((id) => (
          <li key={id}>
            <span className="hud-needs-text">{waitingWords(id)}</span>
            <button
              type="button"
              className="hud-button hud-primary"
              aria-label={`Show me ${agentById(id).name}`}
              onClick={() => onShowMe(id)}
            >
              Show me
            </button>
          </li>
        ))}
      </ul>
      {more > 0 &&
        (onMore ? (
          // its name starts with the words it shows (WCAG 2.5.3), then says where it goes
          <button
            type="button"
            className="hud-needs-more"
            aria-label={`and ${more} more: everyone waiting, in Activity`}
            onClick={onMore}
          >
            and {more} more
          </button>
        ) : (
          <p className="hud-needs-more">and {more} more</p>
        ))}
    </section>
  );
}
