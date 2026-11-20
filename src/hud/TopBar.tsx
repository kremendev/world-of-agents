import type { ReactNode, Ref } from 'react';
import { agentById } from '../office/roster';
import { STATE_STYLE } from '../office/states';
import { STATUS_CHIP } from '../office/tasks';
import { TaskBar } from '../page/TaskBar';
import { doneCount, type OfficeState } from '../state/office';

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
};

function IconButton({
  label,
  icon,
  onClick,
  disabled,
}: {
  label: string;
  icon: keyof typeof ICONS;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
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
 * "Tasks done: 0 of 0"). Tiles keep the order the tasks came in; each one's title is its task's.
 */
export function TopBar({ version, mode, office, runText, ledger, demo, onPlayDemo, onTeam, rooms }: Props) {
  const { tasks } = office;
  const line = [
    runText ? `Run: ${runText}` : null,
    tasks.length > 0 ? `Tasks done: ${doneCount(office)} of ${tasks.length}` : null,
    ledger,
  ]
    .filter(Boolean)
    .join(' · ');
  const shown = tasks.length > MAX_TILES ? tasks.slice(0, MAX_TILES - 1) : tasks;
  const more = tasks.length - shown.length;
  const chip = mode.kind ? MODE_CHIP[mode.kind] : undefined;

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
      </div>
      {rooms && (
        <button
          ref={rooms.buttonRef}
          type="button"
          className="hud-button hud-rooms-button"
          aria-expanded={rooms.open}
          aria-controls={rooms.controls}
          disabled={rooms.disabled}
          onClick={rooms.onToggle}
        >
          Rooms
        </button>
      )}
      <span className="hud-divider" aria-hidden="true" />
      <div className="hud-run">
        {demo && tasks.length === 0 ? (
          <TaskBar onSend={demo.onSend} compact />
        ) : (
          <>
            {line && (
              <p className="hud-run-line" title={line}>
                {line}
              </p>
            )}
            {tasks.length > 0 && (
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
      {demo && (
        <div className="hud-controls">
          <div className="hud-group" role="group" aria-label="Demo run">
            <IconButton label="Play" icon="play" onClick={demo.onPlay} disabled={demo.status !== 'paused'} />
            <IconButton
              label="Pause"
              icon="pause"
              onClick={demo.onPause}
              disabled={demo.status !== 'playing'}
            />
            <IconButton
              label="Next step"
              icon="next"
              onClick={demo.onNext}
              disabled={demo.status !== 'playing'}
            />
            <IconButton label="Restart" icon="restart" onClick={demo.onRestart} />
          </div>
          {demo.onBackToLive && (
            <button type="button" className="hud-button" onClick={demo.onBackToLive}>
              Back to live
            </button>
          )}
          {demo.onGoLive && (
            <button type="button" className="hud-button" onClick={demo.onGoLive}>
              Go live
            </button>
          )}
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
    </>
  );
}
