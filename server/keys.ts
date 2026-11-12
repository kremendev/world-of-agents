// The team editor's one-time keys and sessions (v3.4c, T8). A key comes from hall-key.mjs, with the token: the mod made it
// and put it in the pane's link, after a # so it never reaches a server log or a Referer. The page hands it back once,
// within 60 seconds, and gets a session id in an HttpOnly, SameSite=Strict cookie. Only digests are kept, in memory, and
// only a few: the newest 10 keys and 5 sessions. A hall that restarts forgets them all.
import { createHash, randomBytes } from 'node:crypto';

export const KEY_LIFE_MS = 60_000;
export const MAX_KEYS = 10;
export const MAX_SESSIONS = 5;
/** The cookie: only the team's own API sees it. */
export const COOKIE = 'woa_team';
const SESSION = new RegExp(`(?:^|;\\s*)${COOKIE}=([A-Za-z0-9_-]{43})(?:;|$)`);

const digest = (text: string) => createHash('sha256').update(text).digest('base64url');

export type Exchange = { ok: true; session: string } | { ok: false; why: 'used' | 'expired' };

export function createKeys(now: () => number = Date.now) {
  const keys = new Map<string, { at: number; used: boolean }>();
  const sessions: string[] = [];

  return {
    /** A key the mod made, from hall-key.mjs. */
    add(key: string): void {
      keys.delete(digest(key));
      keys.set(digest(key), { at: now(), used: false });
      while (keys.size > MAX_KEYS) keys.delete(keys.keys().next().value!);
    },

    /** The page's key, once: a new session, or why not. A key never seen counts as expired (the hall may have restarted). */
    exchange(key: string): Exchange {
      const kept = keys.get(digest(key));
      if (kept === undefined) return { ok: false, why: 'expired' };
      if (kept.used) return { ok: false, why: 'used' };
      kept.used = true;
      if (now() - kept.at > KEY_LIFE_MS) return { ok: false, why: 'expired' };
      const session = randomBytes(32).toString('base64url');
      sessions.push(digest(session));
      while (sessions.length > MAX_SESSIONS) sessions.shift();
      return { ok: true, session };
    },

    /** Does the request's Cookie header hold a live session? */
    allowed(cookie: string | undefined): boolean {
      const session = SESSION.exec(cookie ?? '')?.[1];
      return session !== undefined && sessions.includes(digest(session));
    },
  };
}

/** The Set-Cookie for a session: never readable by script, never sent from another site, only to /api/team. */
export const sessionCookie = (session: string) =>
  `${COOKIE}=${session}; HttpOnly; SameSite=Strict; Path=/api/team`;
