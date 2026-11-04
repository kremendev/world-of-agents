import { useEffect, useState } from 'react';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../state/office';
import { RECHECK_MS, checkHall, connectHall, liveEnabled } from './hall';

/** `no-hall`: nothing answered on load, so the page is the v1 demo. */
export type LiveStatus = 'checking' | 'no-hall' | 'live' | 'offline';

export type LiveHall = {
  status: LiveStatus;
  office: OfficeState;
  /** This office was rebuilt from a replay: its messages are old news, not something to say out loud. */
  hushed: boolean;
  /** In the demo: a hall has appeared since. The page offers it and never switches on its own. */
  hallFound: boolean;
  goLive: () => void;
};

/** Checks for a hall on load and, if one answers, follows it through losing and finding it again. */
export function useLiveHall(): LiveHall {
  const [status, setStatus] = useState<LiveStatus>(() => (liveEnabled() ? 'checking' : 'no-hall'));
  const [view, setView] = useState({ office: INITIAL_OFFICE, hushed: false });
  const [following, setFollowing] = useState(false);
  const [hallFound, setHallFound] = useState(false);

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
      onReplay: (events) => {
        setStatus('live');
        // A hall that restarted remembers nothing: agents stay where they are until events return.
        if (events.length > 0) {
          setView({ office: events.reduce(officeReducer, INITIAL_OFFICE), hushed: true });
        }
      },
      onEvent: (event) => setView(({ office }) => ({ office: officeReducer(office, event), hushed: false })),
      onLost: () => setStatus('offline'),
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

  return { status, ...view, hallFound, goLive };
}
