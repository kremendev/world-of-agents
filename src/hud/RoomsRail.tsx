import { roomLabel, type RoomBadge, type View } from './rooms';

type Props = {
  /** For the narrow window's Rooms button (D15): its id, and whether that menu shows it. */
  id?: string;
  open?: boolean;
  /** Until the world is ready there is no camera to send: every button shows, disabled. */
  disabled?: boolean;
  badges: readonly RoomBadge[];
  /** The view the camera was last sent to; null once it moved by hand or follows an agent. */
  view: View | null;
  onView: (view: View) => void;
  cutaway: boolean;
  onCutaway: () => void;
};

/**
 * The rooms rail (4d.3): a button per view, "Whole keep" first and then the rooms in the map's order, the one in view
 * pressed. A room's badge says how many agents are in it, in the needs-you colours when one of them needs you; the
 * badge is for the eye, and the button's name says the same in words. Under them, the Cutaway toggle.
 */
export function RoomsRail({
  id,
  open = false,
  disabled = false,
  badges,
  view,
  onView,
  cutaway,
  onCutaway,
}: Props) {
  return (
    <nav id={id} className={open ? 'hud-panel hud-rail open' : 'hud-panel hud-rail'} aria-label="Rooms">
      <h2 className="hud-rail-head">Rooms</h2>
      <ul className="hud-rooms">
        <li>
          <button
            type="button"
            className="hud-room"
            aria-pressed={view === 'overview'}
            disabled={disabled}
            onClick={() => onView('overview')}
          >
            Whole keep
          </button>
        </li>
        {badges.map((b) => (
          <li key={b.id}>
            <button
              type="button"
              className="hud-room"
              aria-pressed={view === b.id}
              aria-label={roomLabel(b)}
              disabled={disabled}
              onClick={() => onView(b.id)}
            >
              <span>{b.name}</span>
              {b.agents > 0 && (
                <span className={b.needsYou > 0 ? 'hud-badge needs' : 'hud-badge'} aria-hidden="true">
                  {b.agents}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
      <div className="hud-rule" aria-hidden="true" />
      <button
        type="button"
        className="hud-room"
        aria-pressed={cutaway}
        disabled={disabled}
        onClick={onCutaway}
      >
        <span>Cutaway</span>
        <span className="hud-onoff" aria-hidden="true">
          {cutaway ? 'On' : 'Off'}
        </span>
      </button>
    </nav>
  );
}
