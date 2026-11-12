// The team editor's one-time key (v3.4c, T8). The pane's link carries it after a #, which never reaches a server: the
// page takes it, removes it from the address bar at once, and hands it to the hall once for a session cookie.
import { KEY } from './schema';
import { exchangeKey, type Exchange } from './api';

/** The key in the address, or null. Any #k= is removed from the address bar first, a broken one too. */
export function takeKey(
  loc: Pick<Location, 'hash' | 'pathname' | 'search'>,
  hist: Pick<History, 'state' | 'replaceState'>,
) {
  if (!loc.hash.startsWith('#k=')) return null;
  const key = loc.hash.slice(3);
  hist.replaceState(hist.state, '', `${loc.pathname}${loc.search}`);
  return KEY.test(key) ? key : null;
}

/**
 * At page load, before React renders (StrictMode runs effects twice, and a key works once): the key taken and exchanged.
 * Null when the address had none.
 */
export function startTeamSession(
  loc: Pick<Location, 'hash' | 'pathname' | 'search'> = window.location,
  hist: Pick<History, 'state' | 'replaceState'> = window.history,
): Promise<Exchange> | null {
  const key = takeKey(loc, hist);
  return key === null ? null : exchangeKey(key);
}
