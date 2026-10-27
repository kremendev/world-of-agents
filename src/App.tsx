import { useEffect, useRef, useState } from 'react';
import { HallView } from './office/hall/HallView';
import { DEMO_RUN } from './script/demoRun';
import { createPlayer, type Player } from './script/player';
import { INITIAL_OFFICE, officeReducer } from './state/office';

type RunStatus = 'playing' | 'paused' | 'ended';

export default function App() {
  const [office, setOffice] = useState(INITIAL_OFFICE);
  const [status, setStatus] = useState<RunStatus>('playing');
  // Goes up on every restart; the hall puts everyone back at their rest spots when it changes.
  const [run, setRun] = useState(0);
  const player = useRef<Player | null>(null);

  useEffect(() => {
    const p = createPlayer(DEMO_RUN, {
      onEvent: (event) => setOffice((state) => officeReducer(state, event)),
      onRestart: () => {
        setOffice(INITIAL_OFFICE);
        setRun((n) => n + 1);
      },
      onEnd: () => setStatus('ended'),
    });
    player.current = p;
    // restart(), not play(): Fast Refresh keeps state but re-runs effects, so each run starts from a clean office.
    p.restart();
    return () => p.pause();
  }, []);

  // Status first: play() and restart() can end the run straight away, and that must win.
  const control = (next: RunStatus, action: (p: Player) => void) => () => {
    setStatus(next);
    if (player.current) action(player.current);
  };

  return (
    <main className="app">
      <header className="app-header">
        <h1>Agent Office</h1>
        <span className="badge">Forge Hall · v1</span>
        <div className="run-controls" role="group" aria-label="Demo run">
          <button type="button" onClick={control('playing', (p) => p.play())} disabled={status !== 'paused'}>
            Play
          </button>
          <button type="button" onClick={control('paused', (p) => p.pause())} disabled={status !== 'playing'}>
            Pause
          </button>
          <button type="button" onClick={control('playing', (p) => p.restart())}>
            Restart
          </button>
        </div>
      </header>

      <section aria-label="Forge Hall office" className="scene-scroll">
        <HallView office={office} run={run} />
      </section>
    </main>
  );
}
