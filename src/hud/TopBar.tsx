import { useEffect, useRef, useState, type ReactNode, type Ref } from 'react';
import { agentById } from '../office/roster';
import { STATE_STYLE } from '../office/states';
import { STATUS_CHIP } from '../office/tasks';
import { TaskBar } from '../page/TaskBar';
import { doneCount, type OfficeState } from '../state/office';
import { activityLabel } from './activityLabel';
import { usePhone } from './phone';

export type RunStatus = 'playing' | 'paused' | 'ended';

/** The demo's controls, or null in Live. `onBackToLive` and `onGoLive` only where a hall answered. */
export type DemoControls = {
  status: RunStatus;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onRestart: () => void;
  onSend: (task: string) => void;
  onBackToLive?: () => void;
  onGoLive?: () => void;
};

type Props = {
  version: string;
  /** The mode chip: `kind` picks its colours. None while the health check is out. */
  mode: { kind?: string; label?: string };
  office: OfficeState;
  runText: string | null;
  /** Live only: the "This PC" line, already in words. */
  ledger: string | null;
  demo: DemoControls | null;
  /** Live: "Play demo" and "Team", where the page offers them today. */
  onPlayDemo?: () => void;
  onTeam?: () => void;
  /** In a narrow window (D15), the rooms as a menu: the disclosure button that shows and hides the rail. */
  rooms?: {
    open: boolean;
    controls: string;
    onToggle: () => void;
    buttonRef?: Ref<HTMLButtonElement>;
    /** Until the world is ready (its rooms have no camera to send yet). */
    disabled?: boolean;
  };
  /** The drawer's handle, which on a phone lives here (Dima, 21 Nov): a disclosure, as Rooms is. */
  activity?: {
    open: boolean;
    unread: number;
    controls: string;
    onToggle: () => void;
    buttonRef?: Ref<HTMLButtonElement>;
  };
};

/** Today's dashboard: up to 5 tiles, or 4 and "+N" when there are more. */
export const MAX_TILES = 5;

/** Demo in the thinking chip's colours, Live in the done chip's, Offline and Ended muted (the class's own). */
const MODE_CHIP: Record<string, { bg: string; text: string } | undefined> = {
  demo: STATE_STYLE.thinking,
  live: STATE_STYLE.done,
};

const Icon = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

const ICONS = {
  play: <path d="M4 2.5v11l9-5.5z" fill="currentColor" />,
  pause: (
    <>
      <rect x="3.5" y="2.5" width="3" height="11" fill="currentColor" />
      <rect x="9.5" y="2.5" width="3" height="11" fill="currentColor" />
    </>
  ),
  next: (
    <>
      <path d="M2.5 2.5v11l8-5.5z" fill="currentColor" />
      <rect x="11" y="2.5" width="2.5" height="11" fill="currentColor" />
    </>
  ),
  restart: (
    <path
      d="M8 2.5a5.5 5.5 0 1 1-5.2 3.7M2.5 2.5v3.8h3.8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  // a phone's own (4.0.1): the rooms as a floor plan, the activity as a list, a new task, and closing its input
  rooms: (
    <path
      d="M2.5 2.5h11v11h-11zM2.5 8h5M7.5 2.5v8M10.5 8v5.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  activity: (
    <>
      <path
        d="M6 4h7.5M6 8h7.5M6 12h7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="2.8" cy="4" r="1.1" fill="currentColor" />
      <circle cx="2.8" cy="8" r="1.1" fill="currentColor" />
      <circle cx="2.8" cy="12" r="1.1" fill="currentColor" />
    </>
  ),
  add: (
    <path d="M8 2.5v11M2.5 8h11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  close: (
    <path
      d="M3.5 3.5l9 9M12.5 3.5l-9 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  ),
};

/**
 * "Back to live" and "Go live": on a phone the word "Live" alone, in the title's row, still named in full (Dima, 21 Nov:
 * the word and the full name; 4.0.1: no icon, which left the title's row no room at 320 and 400 px).
 */
function LiveButton({ label, phone, onClick }: { label: string; phone: boolean; onClick: () => void }) {
  return phone ? (
    <button type="button" className="hud-button hud-live" aria-label={label} title={label} onClick={onClick}>
      Live
    </button>
  ) : (
    <button type="button" className="hud-button" onClick={onClick}>
      {label}
    </button>
  );
}

function IconButton({
  label,
  icon,
  onClick,
  disabled,
  buttonRef,
}: {
  label: string;
  icon: keyof typeof ICONS;
  onClick: () => void;
  disabled?: boolean;
  buttonRef?: Ref<HTMLButtonElement>;
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className="hud-button hud-icon"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon>{ICONS[icon]}</Icon>
    </button>
  );
}

/**
 * The HUD's top bar (4d.2): the title and its chips, then the run (its line and tiles, or before a demo run has its
 * tasks the task input), then the controls. The run line is one line: what it can't show it cuts, and says whole in its
 * title. It counts the tasks only once there are some, and isn't there when it has nothing to say (Dima, 20 Nov: no
 * "Tasks done: 0 of 0"). Tiles keep the order the tasks came in; each one's title is its task's. On a phone (under
 * 48rem, Dima, 20 Nov) the title and chips are row one, then Rooms, the drawer's Activity button (21 Nov) and the
 * controls, wrapping as they need, and the run last, with no tiles (the run line counts the tasks, the drawer's board
 * has them); the run comes last in the page too, so what a screen reader reads, and the order the focus takes, is the
 * order on screen.
 */
export function TopBar({
  version,
  mode,
  office,
  runText,
  ledger,
  demo,
  onPlayDemo,
  onTeam,
  rooms,
  activity,
}: Props) {
  const { tasks } = office;
  const phone = usePhone();
  const said = runText ? `Run: ${runText}` : null;
  const count = tasks.length > 0 ? `Tasks done: ${doneCount(office)} of ${tasks.length}` : null;
  // on a phone the count comes first, so the line's cut never takes it
  const line = (phone ? [count, said, ledger] : [said, count, ledger]).filter(Boolean).join(' · ');
  const shown = tasks.length > MAX_TILES ? tasks.slice(0, MAX_TILES - 1) : tasks;
  const more = tasks.length - shown.length;
  const chip = mode.kind ? MODE_CHIP[mode.kind] : undefined;
  const playing = demo?.status === 'playing';
  // On a phone the demo's task input waits behind "New task" and opens in place of the controls (4.0.1, Dima's brief:
  // the bar at 7.5rem or less); closing it, by its button, Esc or sending, puts the focus back on "New task".
  const asking = phone && demo !== null && tasks.length === 0;
  const [writing, setWriting] = useState(false);
  const open = writing && asking;
  const newTask = useRef<HTMLButtonElement>(null);
  const refocus = useRef(false);
  const closeWriting = () => {
    setWriting(false);
    refocus.current = true;
  };
  useEffect(() => {
    if (!refocus.current) return;
    refocus.current = false;
    newTask.current?.focus();
  });

  const run = (
    <div className="hud-run">
      {demo && tasks.length === 0 && !phone ? (
        <TaskBar onSend={demo.onSend} compact />
      ) : (
        <>
          {line && (
            <p className="hud-run-line" title={line}>
              {line}
            </p>
          )}
          {tasks.length > 0 && !phone && (
            <ul className="hud-tiles" aria-label="Tasks">
              {shown.map((t) => {
                const status = STATUS_CHIP[t.status];
                return (
                  <li
                    key={t.id}
                    className="hud-chip"
                    title={t.title}
                    style={{ background: status.bg, color: status.text }}
                  >
                    {agentById(t.owner).name} · {status.label}
                  </li>
                );
              })}
              {more > 0 && <li className="hud-chip hud-more">+{more}</li>}
            </ul>
          )}
        </>
      )}
    </div>
  );

  return (
    <>
      <div className="hud-brand">
        <h1>World of Agents</h1>
        <span className="hud-chip hud-version">v{version}</span>
        {mode.label && (
          <span
            className="hud-chip hud-mode"
            style={chip ? { background: chip.bg, color: chip.text } : undefined}
          >
            {mode.label}
          </span>
        )}
        {/* on a phone, at the title row's end */}
        {phone && demo?.onBackToLive && <LiveButton label="Back to live" phone onClick={demo.onBackToLive} />}
        {phone && demo?.onGoLive && <LiveButton label="Go live" phone onClick={demo.onGoLive} />}
      </div>
      {rooms && !open && (
        <button
          ref={rooms.buttonRef}
          type="button"
          className={phone ? 'hud-button hud-icon hud-rooms-button' : 'hud-button hud-rooms-button'}
          aria-expanded={rooms.open}
          aria-controls={rooms.controls}
          aria-label={phone ? 'Rooms' : undefined}
          title={phone ? 'Rooms' : undefined}
          disabled={rooms.disabled}
          onClick={rooms.onToggle}
        >
          {phone ? <Icon>{ICONS.rooms}</Icon> : 'Rooms'}
        </button>
      )}
      {phone && activity && !open && (
        // an icon, its unread count a badge on its corner (4.0.1)
        <button
          ref={activity.buttonRef}
          type="button"
          className="hud-button hud-icon hud-activity"
          aria-expanded={activity.open}
          aria-controls={activity.controls}
          aria-label={activityLabel(activity.unread)}
          title={activityLabel(activity.unread)}
          onClick={activity.onToggle}
        >
          <Icon>{ICONS.activity}</Icon>
          {activity.unread > 0 && (
            <span className="hud-badge needs" aria-hidden="true">
              {activity.unread}
            </span>
          )}
        </button>
      )}
      {!phone && (
        <>
          <span className="hud-divider" aria-hidden="true" />
          {run}
        </>
      )}
      {demo && !open && (
        <div className="hud-controls">
          <div className="hud-group" role="group" aria-label="Demo run">
            {phone ? (
              // Play and Pause as one button on a phone (4.0.1): the one of the two that works now
              <IconButton
                label={playing ? 'Pause' : 'Play'}
                icon={playing ? 'pause' : 'play'}
                onClick={playing ? demo.onPause : demo.onPlay}
                disabled={demo.status === 'ended'}
              />
            ) : (
              <>
                <IconButton
                  label="Play"
                  icon="play"
                  onClick={demo.onPlay}
                  disabled={demo.status !== 'paused'}
                />
                <IconButton
                  label="Pause"
                  icon="pause"
                  onClick={demo.onPause}
                  disabled={demo.status !== 'playing'}
                />
              </>
            )}
            <IconButton
              label="Next step"
              icon="next"
              onClick={demo.onNext}
              disabled={demo.status !== 'playing'}
            />
            <IconButton label="Restart" icon="restart" onClick={demo.onRestart} />
            {asking && (
              <IconButton label="New task" icon="add" onClick={() => setWriting(true)} buttonRef={newTask} />
            )}
          </div>
          {!phone && demo.onBackToLive && (
            <LiveButton label="Back to live" phone={false} onClick={demo.onBackToLive} />
          )}
          {!phone && demo.onGoLive && <LiveButton label="Go live" phone={false} onClick={demo.onGoLive} />}
        </div>
      )}
      {open && demo && (
        <div className="hud-run hud-writing">
          <TaskBar
            onSend={(task) => {
              demo.onSend(task);
              closeWriting();
            }}
            compact
            autoFocus
            onCancel={closeWriting}
          />
          <IconButton label="Close the task input" icon="close" onClick={closeWriting} />
        </div>
      )}
      {(onPlayDemo || onTeam) && (
        <div className="hud-controls">
          {onPlayDemo && (
            <button type="button" className="hud-button" onClick={onPlayDemo}>
              Play demo
            </button>
          )}
          {onTeam && (
            <>
              <span className="hud-divider" aria-hidden="true" />
              <button type="button" className="hud-button" onClick={onTeam}>
                Team
              </button>
            </>
          )}
        </div>
      )}
      {phone && !open && run}
    </>
  );
}
