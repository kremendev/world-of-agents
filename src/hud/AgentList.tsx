import type { AgentId } from '../events/schema';
import { ROSTER } from '../office/roster';
import { STATE_STYLE } from '../office/states';
import type { OfficeState } from '../state/office';
import { agentLabel } from './agents';

/**
 * The agent list (4d.4): a button per agent, its name and its state chip, pressed while its card is open. A needs-you
 * agent's button has the flag's border, an error's the danger border. A click opens the card, or closes it again.
 * A space between the name and the chip, never drawn between flex items, keeps them two words where text is read
 * whole: the words seen are in the button's name (WCAG 2.5.3; Dima's axe scan, 21 Nov, read "Lead/PMwaiting").
 */
export function AgentList({
  office,
  card,
  onToggle,
}: {
  office: OfficeState;
  card: AgentId | null;
  onToggle: (id: AgentId) => void;
}) {
  return (
    <div className="hud-panel hud-agents" role="group" aria-label="Agents">
      {ROSTER.map((a) => {
        const { state } = office.agents[a.id];
        const chip = STATE_STYLE[state];
        const alert = state === 'needs-you' ? ' needs' : state === 'error' ? ' error' : '';
        return (
          <button
            key={a.id}
            type="button"
            className={`hud-agent${alert}`}
            data-agent={a.id}
            aria-pressed={card === a.id}
            aria-label={agentLabel(office, a.id)}
            onClick={() => onToggle(a.id)}
          >
            <span className="hud-agent-name">{a.name}</span>{' '}
            <span className="hud-chip" style={{ background: chip.bg, color: chip.text }}>
              {chip.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
