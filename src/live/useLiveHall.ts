import { useEffect, useRef, useState } from 'react';
import type { LedgerTotals, OfficeEvent } from '../events/schema';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../state/office';
import { RECHECK_MS, checkHall, connectHall, liveEnabled } from './hall';

/** `no-hall`: nothing answered on load, so the page is the v1 demo. */
export type LiveStatus = 'checking' | 'no-hall' | 'live' | 'offline';

export type LiveHall = {
  status: LiveStatus;
  office: OfficeState;
  /** This office was rebuilt from a replay: its messages are old news, not something to say out loud. */
  hushed: boolean;
  /** The hall restarted since the page connected, and no run has started since: what it held before is gone. */
  restarted: boolean;
  /** In the demo: a hall has appeared since. The page offers it and never switches on its own. */
  hallFound: boolean;
  /** The start id of the hall the page follows, once a replay has named one: the read marks are kept per start. */
  start: string | null;
  /** v3.2: the token ledger's total on this PC, once the mod has sent one through the hall. */
  ledger: LedgerTotals | null;
  goLive: () => void;
};

/** A new session or a new prompt: from here on the hall has the whole run again. */
const startsRun = (event: OfficeEvent) => event.type === 'reset' || event.type === 'run';

/** Checks for a hall on load and, if one answers, follows it through losing and finding it again. */
export function useLiveHall(): LiveHall {
  const [status, setStatus] = useState<LiveStatus>(() => (liveEnabled() ? 'checking' : 'no-hall'));
  const [view, setView] = useState({ office: INITIAL_OFFICE, hushed: false, restarted: false });
  const [following, setFollowing] = useState(false);
  const [hallFound, setHallFound] = useState(false);
  // The start id of the hall the page last heard from: a ref for the replay to compare, state for the page.
  const startId = useRef<string | null>(null);
  const [start, setStart] = useState<string | null>(null);
  const [ledger, setLedger] = useState<LedgerTotals | null>(null);

  useEffect(() => {
    if (!liveEnabled()) return;
    let closed = false;
    void checkHall().then((up) => {
      if (closed) return;
      if (up) setFollowing(true);
      else setStatus('no-hall');
    });
    return () => {
      closed = true;
    };
  }, []);

  useEffect(() => {
    if (!following) return;
    return connectHall({
      onReplay: (events, id) => {
        setStatus('live');
        const before = startId.current;
        if (id !== null) {
          startId.current = id;
          setStart(id);
        }
        const rebuilt = events.reduce(officeReducer, INITIAL_OFFICE);
        if (before !== null && id !== null && id !== before) {
          // Another hall: it remembers nothing of the run, so the page starts again from what this one holds.
          setView({ office: rebuilt, hushed: true, restarted: !events.some(startsRun) });
        } else if (events.length > 0) {
          setView(({ restarted }) => ({
            office: rebuilt,
            hushed: true,
            restarted: restarted && !events.some(startsRun),
          }));
        }
        // An empty replay from a hall that sends no start id: agents stay where they are until events return.
      },
      onEvent: (event) =>
        setView(({ office, restarted }) => ({
          office: officeReducer(office, event),
          hushed: false,
          restarted: restarted && !startsRun(event),
        })),
      onLost: () => setStatus('offline'),
      onLedger: setLedger,
    });
  }, [following]);

  useEffect(() => {
    if (status !== 'no-hall' || !liveEnabled()) return;
    let closed = false;
    const timer = setInterval(() => {
      void checkHall().then((up) => {
        if (!closed) setHallFound(up);
      });
    }, RECHECK_MS);
    return () => {
      closed = true;
      clearInterval(timer);
    };
  }, [status]);

  const goLive = () => {
    setStatus('checking');
    setHallFound(false);
    setFollowing(true);
  };

  return { status, ...view, hallFound, start, ledger, goLive };
}
