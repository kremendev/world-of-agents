import { parseEvent, type OfficeEvent } from '../events/schema';

export const HEALTH_TIMEOUT_MS = 1000;
/** How long to wait before trying the stream again after losing it. */
export const RETRY_MS = 2000;
/** In the demo: how often to look for a hall that has appeared since the page loaded. */
export const RECHECK_MS = 5000;

/** False skips the health check and the stream: the hosted demo build never calls an API. Nothing secret. */
export const liveEnabled = (): boolean => import.meta.env.VITE_LIVE !== 'false';

/** Does a hall answer on this origin within a second? In dev, Vite proxies /api to it. */
export async function checkHall(): Promise<boolean> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), HEALTH_TIMEOUT_MS);
  try {
    const res = await fetch('/api/health', { signal: controller.signal });
    if (!res.ok) return false;
    const body: unknown = await res.json();
    return typeof body === 'object' && body !== null && 'ok' in body && body.ok === true;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

/** One SSE message to one checked event, or null. Only the schema's error is logged: the data is untrusted. */
function read(data: unknown): OfficeEvent | null {
  let json: unknown;
  try {
    json = JSON.parse(String(data));
  } catch {
    if (import.meta.env.DEV) console.warn('Dropped a hall message: not JSON');
    return null;
  }
  const result = parseEvent(json);
  if (result.ok) return result.event;
  if (import.meta.env.DEV) console.warn(`Dropped a hall message: ${result.error}`);
  return null;
}

export type HallHandlers = {
  /** Everything the hall holds since its last reset, in one go. Comes on connecting and on every reconnect. */
  onReplay: (events: OfficeEvent[]) => void;
  /** Each new event after the replay. */
  onEvent: (event: OfficeEvent) => void;
  /** The stream is gone. It keeps trying until the connection is closed. */
  onLost: () => void;
};

/**
 * Follows the hall's event stream. Every message goes through parseEvent(). Reconnecting is ours, not the
 * browser's: EventSource gives up for good on a bad answer, such as the dev proxy's 500 while the hall is down.
 * Returns the function that closes it.
 */
export function connectHall(handlers: HallHandlers): () => void {
  let source: EventSource | null = null;
  let retry: ReturnType<typeof setTimeout> | undefined;

  const open = () => {
    let replay: OfficeEvent[] | null = [];
    const stream = new EventSource('/api/events');
    source = stream;
    stream.onmessage = (message) => {
      const event = read(message.data);
      if (!event) return;
      if (replay) replay.push(event);
      else handlers.onEvent(event);
    };
    stream.addEventListener('replayed', () => {
      handlers.onReplay(replay ?? []);
      replay = null;
    });
    stream.onerror = () => {
      stream.close();
      handlers.onLost();
      retry = setTimeout(open, RETRY_MS);
    };
  };

  open();
  return () => {
    clearTimeout(retry);
    source?.close();
  };
}
