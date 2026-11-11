import { useEffect, useRef, useState } from 'react';
import type { AgentId } from './events/schema';
import { finalReport, shortLine, whoIsWaiting, withoutMarkers } from './live/announce';
import { liveEnabled } from './live/hall';
import { useLiveHall, type LiveHall } from './live/useLiveHall';
import { HallView } from './office/hall/HallView';
import { useStage } from './office/hall/useStage';
import { agentById } from './office/roster';
import { ActivityFeed } from './page/ActivityFeed';
import { ledgerText } from './page/ledgerText';
import { AgentPanel } from './page/AgentPanel';
import { reviewsOf } from './page/review';
import { ReviewBoard } from './page/ReviewBoard';
import { TaskBar } from './page/TaskBar';
import { TaskBoard } from './page/TaskBoard';
import { DEMO_RUN, DEMO_TASK, demoRun } from './script/demoRun';
import { createPlayer, type Player } from './script/player';
import { INITIAL_OFFICE, doneCount, officeReducer, type OfficeState } from './state/office';

type RunStatus = 'playing' | 'paused' | 'ended';

/** The hosted demo (VITE_LIVE=false) has no hall to find, so it says where to go next. The last word is the link. */
const HOSTED_STATUS =
  'Demo · scripted run with no AI calls. To watch your own Claude Code sessions (Max or higher), see the';
const REPO_URL = 'https://github.com/kremendev/world-of-agents';

/** The mode badge and what the status line says. No badge while the health check is out: a second at most. */
function modeOf(hall: LiveHall, demo: boolean, office: OfficeState) {
  if (demo) {
    const status = !liveEnabled()
      ? `${HOSTED_STATUS} README`
      : hall.status !== 'no-hall'
        ? 'Demo · the hall keeps watching Claude Code'
        : hall.hallFound
          ? 'Demo · the hall is running'
          : 'Demo · a scripted run';
    return { kind: 'demo', label: 'Demo', status };
  }
  if (hall.status === 'checking') return { status: 'Looking for the hall' };
  if (hall.status === 'offline') {
    return { kind: 'offline', label: 'Hall offline, reconnecting', status: 'Hall offline · reconnecting' };
  }
  if (office.sessionEnded) {
    return { kind: 'ended', label: 'Session ended', status: 'Session ended · waiting for the next one' };
  }
  // A restarted hall knows nothing of the run before it: said until the next prompt starts a run it has whole.
  const status = hall.restarted
    ? 'Live · Hall restarted. Earlier events are gone.'
    : office.awaitingPrompt
      ? 'Lead/PM is waiting for your next message in Claude Code'
      : 'Live · Type your task in Claude Code. The hall only watches.';
  return { kind: 'live', label: 'Live', status };
}

export default function App() {
  const hall = useLiveHall();
  const [watchingDemo, setWatchingDemo] = useState(false);
  // The scripted run: the whole page when no hall answered, or on request while one does.
  const demo = hall.status === 'no-hall' || watchingDemo;

  const [demoOffice, setDemoOffice] = useState(INITIAL_OFFICE);
  const [runStatus, setRunStatus] = useState<RunStatus>('playing');
  // Goes up on every restart; the hall puts everyone back at their rest spots when it changes.
  const [run, setRun] = useState(0);
  const [task, setTask] = useState(DEMO_TASK);
  const [selected, setSelected] = useState<AgentId>('lead');
  const [feedAgent, setFeedAgent] = useState<AgentId | null>(null);
  // The review board: closed, or open at a review (`at`) or at its heading (null). `n` counts openings, and the board
  // mounts anew for each, so each opening puts the focus where it asks.
  const [board, setBoard] = useState<{ at: number | null; n: number } | null>(null);
  // What opened it, for the focus to go back to, and whether a close asked for that (another agent's click doesn't).
  const opener = useRef<HTMLElement | null>(null);
  const focusBack = useRef(false);
  const activityHeading = useRef<HTMLHeadingElement>(null);
  const player = useRef<Player | null>(null);
  const stage = useStage();

  useEffect(() => {
    if (!demo) return;
    const p = createPlayer(DEMO_RUN, {
      // A script's `at` is when it plays. In the office it is the time of day, as in a real run.
      onEvent: (event) => setDemoOffice((state) => officeReducer(state, { ...event, at: Date.now() })),
      onRestart: () => {
        setDemoOffice(INITIAL_OFFICE);
        setRun((n) => n + 1);
      },
      onEnd: () => setRunStatus('ended'),
    });
    player.current = p;
    // restart(), not play(): Fast Refresh keeps state but re-runs effects, so each run starts from a clean office.
    p.restart();
    return () => {
      p.pause();
      player.current = null;
    };
  }, [demo]);

  // Status first: play() and restart() can end the run straight away, and that must win.
  const control = (next: RunStatus, action: (p: Player) => void) => () => {
    setRunStatus(next);
    if (player.current) action(player.current);
  };
  const restart = control('playing', (p) => p.restart());

  // v1 sends nothing anywhere: the typed task labels the run and goes into the Lead's first line,
  // and the scripted run starts over with it (Restart then replays that run).
  const send = (text: string) => {
    setTask(text);
    control('playing', (p) => p.restart(demoRun(text)))();
  };

  const playDemo = () => {
    setTask(DEMO_TASK);
    setRunStatus('playing');
    setWatchingDemo(true);
  };

  const backToLive = () => {
    setWatchingDemo(false);
    setRun((n) => n + 1);
  };

  const goLive = () => {
    hall.goLive();
    setRun((n) => n + 1);
  };

  const openBoard = (at: number | null) => {
    // Opened from inside the board (the Reviewer clicked again): keep what opened it first. Nothing focused: no opener.
    const active = document.activeElement;
    if (!(active instanceof HTMLElement && active.closest('.review-board'))) {
      opener.current = active instanceof HTMLElement && active !== document.body ? active : null;
    }
    setBoard((was) => ({ at, n: (was?.n ?? 0) + 1 }));
  };

  // Esc or Close: the focus goes back to what opened the board, or to the Activity heading if that is gone.
  const closeBoard = () => {
    focusBack.current = true;
    setBoard(null);
  };

  // After the render that closed it: until then the feed is still inert, and a browser won't focus inside it.
  useEffect(() => {
    if (board || !focusBack.current) return;
    focusBack.current = false;
    const back = opener.current;
    (back?.isConnected ? back : activityHeading.current)?.focus();
  }, [board]);

  useEffect(() => {
    if (!board) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      focusBack.current = true;
      setBoard(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [board]);

  // Clicking the Reviewer selects it and filters the feed, as for anyone, and opens the review board too (D9).
  // Another agent closes the board, leaving the focus on that agent.
  const select = (id: AgentId) => {
    setSelected(id);
    setFeedAgent(id);
    if (id === 'reviewer') openBoard(null);
    else setBoard(null);
  };

  const office = demo ? demoOffice : hall.office;
  const reviews = reviewsOf(office.messages);
  const live = !demo;
  const hosted = !liveEnabled();
  const mode = modeOf(hall, demo, office);
  // From the real run even during a demo: Claude Code is still waiting for you.
  const waiting = hall.status === 'no-hall' ? [] : whoIsWaiting(hall.office);
  const status = waiting.length > 0 ? waiting.join(' · ') : mode.status;
  const runText = demo ? task : office.runText;
  // The demo says everything to you, as in v1. A real run only its final report: updates would talk over the work.
  const said = demo ? [...office.messages].reverse().find((m) => m.to === 'you') : finalReport(office);

  return (
    <main className="app">
      <header className="app-header">
        <div className="brand">
          <h1>World of Agents</h1>
          <span className="badge forge-badge">Forge Hall · v2</span>
          {mode.label && <span className={`badge mode-${mode.kind}`}>{mode.label}</span>}
        </div>
        <div className="run-info">
          {runText && (
            <span className="run-task" title={runText}>
              Run: {runText}
            </span>
          )}
          <span>
            Tasks done: {doneCount(office)} of {office.tasks.length}
          </span>
          {live && hall.ledger && <span className="run-ledger">{ledgerText(hall.ledger)}</span>}
        </div>
        {demo && (
          <div className="run-controls" role="group" aria-label="Demo run">
            <button
              type="button"
              onClick={control('playing', (p) => p.play())}
              disabled={runStatus !== 'paused'}
            >
              Play
            </button>
            <button
              type="button"
              onClick={control('paused', (p) => p.pause())}
              disabled={runStatus !== 'playing'}
            >
              Pause
            </button>
            <button type="button" onClick={restart}>
              Restart
            </button>
            {hall.status !== 'no-hall' && (
              <button type="button" onClick={backToLive}>
                Back to live
              </button>
            )}
            {hall.hallFound && (
              <button type="button" onClick={goLive}>
                Go live
              </button>
            )}
          </div>
        )}
        {live && hall.status !== 'checking' && (
          <div className="run-controls">
            <button type="button" onClick={playDemo}>
              Play demo
            </button>
          </div>
        )}
      </header>

      <p
        className={
          waiting.length > 0 ? 'status-line needs-you' : hosted ? 'status-line hosted' : 'status-line'
        }
        title={status}
      >
        {hosted ? (
          <>
            {HOSTED_STATUS}{' '}
            <a href={REPO_URL} rel="noreferrer">
              README
            </a>
          </>
        ) : (
          status
        )}
      </p>

      <div ref={stage.ref} className={stage.fit?.stacked ? 'stage stacked' : 'stage'}>
        <section aria-label="Forge Hall office" className="scene">
          <HallView
            office={office}
            run={run}
            selected={selected}
            onSelect={select}
            live={live}
            hushed={live && hall.hushed}
            room={stage.fit}
          />
        </section>
        {/* The review board covers this column only, never the hall. What it covers is inert while it is open. */}
        <div className="side">
          <div className="side-content" inert={board !== null}>
            {demo && <TaskBar onSend={send} />}
            <ActivityFeed
              office={office}
              agent={feedAgent}
              onShowEveryone={() => setFeedAgent(null)}
              onOpenReview={openBoard}
              headingRef={activityHeading}
              readScope={demo ? null : hall.start}
            />
          </div>
          {board && <ReviewBoard key={board.n} reviews={reviews} at={board.at} onClose={closeBoard} />}
        </div>
      </div>

      <div className="lower">
        <TaskBoard office={office} />
        <AgentPanel office={office} agent={selected} live={live} />
      </div>

      {/* The bubbles are hidden from screen readers; this reads out what they must not miss. */}
      <div className="sr-only" aria-live="polite">
        <p>{said ? shortLine(`${agentById(said.from).name}: ${withoutMarkers(said.text)}`) : ''}</p>
        <p>{waiting.join('. ')}</p>
        <p>{hall.office.sessionEnded ? 'Session ended' : ''}</p>
      </div>
    </main>
  );
}
