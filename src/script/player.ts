import { parseEvent, type OfficeEvent } from '../events/schema';

export type PlayerHandlers = {
  /** Gets each event when its time comes. Only events that passed parseEvent() get here. */
  onEvent: (event: OfficeEvent) => void;
  /** Called by restart() before the run starts over, so the listener can clear its state. */
  onRestart: () => void;
  /** Called once the last event has been sent. */
  onEnd: () => void;
};

export type Player = {
  play: () => void;
  pause: () => void;
  /** Starts the run over. Given a script, plays that one from now on (through parseEvent() as well). */
  restart: (script?: readonly unknown[]) => void;
};

/** The entries that pass parseEvent(). Entries that fail are dropped (and logged in dev). */
function load(script: readonly unknown[]): OfficeEvent[] {
  const events: OfficeEvent[] = [];
  for (const entry of script) {
    const result = parseEvent(entry);
    if (result.ok) events.push(result.event);
    // Only the schema's error, never the entry itself: its text is untrusted.
    else if (import.meta.env.DEV) console.warn(`Dropped a script entry: ${result.error}`);
  }
  return events;
}

/**
 * Plays a script of events on a timer; each event's `at` is milliseconds from the start of the run.
 * The script is typed `unknown[]` on purpose: every entry goes through parseEvent() before it is played,
 * the same gate v2's live events will pass. Entries that fail are dropped (and logged in dev).
 */
export function createPlayer(script: readonly unknown[], handlers: PlayerHandlers): Player {
  let events = load(script);

  let next = 0; // index of the next event to send
  let playedMs = 0; // run time played before the current play()
  let startedAt = 0; // performance.now() when the current play() began
  let playing = false;
  let timer: ReturnType<typeof setTimeout> | undefined;

  function sendDue(): void {
    const now = playedMs + performance.now() - startedAt;
    let event = events[next];
    while (event && event.at <= now) {
      next += 1;
      handlers.onEvent(event);
      event = events[next];
    }
    if (event) {
      timer = setTimeout(sendDue, event.at - now);
    } else {
      timer = undefined;
      playing = false;
      handlers.onEnd();
    }
  }

  function play(): void {
    if (playing) return;
    playing = true;
    startedAt = performance.now();
    sendDue();
  }

  function pause(): void {
    if (!playing) return;
    playing = false;
    playedMs += performance.now() - startedAt;
    clearTimeout(timer);
  }

  function restart(newScript?: readonly unknown[]): void {
    pause();
    if (newScript) events = load(newScript);
    next = 0;
    playedMs = 0;
    handlers.onRestart();
    play();
  }

  return { play, pause, restart };
}
