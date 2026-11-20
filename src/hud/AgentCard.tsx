import type { Ref } from 'react';
import type { AgentId } from '../events/schema';
import { AgentPanel } from '../page/AgentPanel';
import type { OfficeState } from '../state/office';

type Props = {
  office: OfficeState;
  agent: AgentId;
  live: boolean;
  following: boolean;
  /** Until the world is ready there is no figure to follow: Follow shows, disabled. */
  canFollow?: boolean;
  onFollow: () => void;
  onShowActivity: () => void;
  onClose: () => void;
  headingRef?: Ref<HTMLHeadingElement>;
};

/**
 * The agent card (4d.4): today's agent panel without its 2D portrait (D14), with the guild lead's specialists at work
 * (D13) and the look of the keep's model (Dima, 20 Nov), a close button, Follow (a toggle, "Following" while on) and
 * "Show in Activity".
 */
export function AgentCard({
  office,
  agent,
  live,
  following,
  canFollow = true,
  onFollow,
  onShowActivity,
  onClose,
  headingRef,
}: Props) {
  return (
    <div className="hud-panel hud-card">
      <button
        type="button"
        className="hud-button hud-icon hud-close"
        aria-label="Close the card"
        onClick={onClose}
      >
        <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      <AgentPanel
        office={office}
        agent={agent}
        live={live}
        portrait={false}
        specialists
        keepLook
        headingRef={headingRef}
      />
      <div className="hud-card-actions">
        <button
          type="button"
          className="hud-button hud-primary"
          aria-pressed={following}
          disabled={!canFollow}
          onClick={onFollow}
        >
          {following ? 'Following' : 'Follow'}
        </button>
        <button type="button" className="hud-button" onClick={onShowActivity}>
          Show in Activity
        </button>
      </div>
    </div>
  );
}
