import { useId, type Ref } from 'react';
import type { AgentId } from '../events/schema';
import { agentById } from '../office/roster';
import { AgentPanel } from '../page/AgentPanel';
import type { OfficeState } from '../state/office';

type Props = {
  office: OfficeState;
  agent: AgentId;
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
 * "Show in Activity". Its heading (which the focus can be moved to, D17) and its close button stay where they are
 * while the rest scrolls (Dima, 21 Nov: on a phone the card is a bottom sheet of at most 55vh).
 */
export function AgentCard({
  office,
  agent,
  following,
  canFollow = true,
  onFollow,
  onShowActivity,
  onClose,
  headingRef,
}: Props) {
  const headingId = useId();
  return (
    <div className="hud-panel hud-card">
      <h2 id={headingId} ref={headingRef} tabIndex={-1}>
        {agentById(agent).name}
      </h2>
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
      <div className="hud-card-body">
        <AgentPanel
          office={office}
          agent={agent}
          portrait={false}
          specialists
          keepLook
          labelledBy={headingId}
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
    </div>
  );
}
