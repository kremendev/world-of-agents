import { hallStartId, parseEvent, type OfficeEvent, parseLedger, type LedgerTotals } from '../events/schema';
import { VERSION_SHAPE } from '../version';

export const HEALTH_TIMEOUT_MS = 1000;
/** How long to wait before trying the stream again after losing it. */
export const RETRY_MS = 2000;
/** In the demo: how often to look for a hall that has appeared since the page loaded. */
export const RECHECK_MS = 5000;

/** False skips the health check and the stream: the hosted demo build never calls an API. Nothing secret. */
export const liveEnabled = (): boolean => import.meta.env.VITE_LIVE !== 'false';

/** A hall that answered, with the plugin version it states (3.2d); null for one from before 3.2.0, which states none. */
export type HallFound = { version: string | null };

/** Does a hall answer on this origin within a second? In dev, Vite proxies /api to it. Null when none does. */
export async function checkHall(): Promise<HallFound | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), HEALTH_TIMEOUT_MS);
  try {
    const res = await fetch('/api/health', { signal: controller.signal });
    if (!res.ok) return null;
    const body: unknown = await res.json();
    if (typeof body !== 'object' || body === null || !('ok' in body) || body.ok !== true) return null;
    const version = 'version' in body ? body.version : undefined;
    return { version: typeof version === 'string' && VERSION_SHAPE.test(version) ? version : null };
  } catch {
    return null;
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
  /**
   * Everything the hall holds since its last reset, in one go. Comes on connecting and on every reconnect, with the
   * hall's start id (null from a hall that sends none).
   */
  onReplay: (events: OfficeEvent[], startId: string | null) => void;
  /** Each new event after the replay. */
  onEvent: (event: OfficeEvent) => void;
  /** The stream is gone. It keeps trying until the connection is closed. */
  onLost: () => void;
  /** v3.2: the token ledger's total on this PC, whenever the hall has one; anything that isn't one is dropped. */
  onLedger?: (totals: LedgerTotals) => void;
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
    stream.addEventListener('ledger', (message) => {
      let data: unknown;
      try {
        data = JSON.parse(message.data);
      } catch {
        return;
      }
      const totals = parseLedger(data);
      if (totals) handlers.onLedger?.(totals);
    });
    stream.addEventListener('replayed', (message) => {
      const id = hallStartId.safeParse(message.data);
      handlers.onReplay(replay ?? [], id.success ? id.data : null);
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
