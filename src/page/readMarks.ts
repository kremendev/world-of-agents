import { useState } from 'react';

/**
 * Read marks for the "For you" strip (v3.1, D6). A mark is a flagged row's key, `<flag>|<agent>|<at>` (flagKey() in
 * feed.ts), from the event's own fields: never agent text. In Live they are kept in localStorage under one key, for the
 * current hall start only (another start id drops them), capped at the newest MAX_MARKS. Every access is in a
 * try/catch: with storage blocked or throwing, the marks live in memory and the page works the same. The demo keeps
 * them in memory only: a restart replays with new times, so its rows are new.
 */

export const STORAGE_KEY = 'world-of-agents.read';
export const MAX_MARKS = 500;
/** What a mark looks like. Anything else read from storage is dropped. */
export const MARK = /^(?:to-you|needs-you|failed)\|(?:lead|designer|frontend|backend|reviewer)\|\d{1,15}$/;

/** The marks kept for hall start `start`, or none: nothing stored, another start, or anything malformed. */
export function loadMarks(start: string): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];
    const data: unknown = JSON.parse(raw);
    if (typeof data !== 'object' || data === null || !('start' in data) || !('keys' in data)) return [];
    if (data.start !== start || !Array.isArray(data.keys)) return [];
    return data.keys
      .filter((key): key is string => typeof key === 'string' && MARK.test(key))
      .slice(-MAX_MARKS);
  } catch {
    return [];
  }
}

/** Keeps the newest MAX_MARKS marks for hall start `start`, replacing any other start's. Fails silently. */
export function saveMarks(start: string, keys: readonly string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ start, keys: keys.slice(-MAX_MARKS) }));
  } catch {
    // Blocked or full: the marks stay in memory for this page.
  }
}

/**
 * The read marks for `scope`: a hall's start id in Live (kept in storage), or null in the demo and for a hall that sends
 * none (memory only). Another scope starts from what is kept for it.
 */
export function useReadMarks(scope: string | null): {
  read: ReadonlySet<string>;
  markRead: (key: string) => void;
} {
  const [marks, setMarks] = useState(() => ({ scope, keys: scope ? loadMarks(scope) : [] }));
  // Adjusting state to a new prop during render, as React's docs show: no effect, no flash of the old marks.
  let current = marks;
  if (marks.scope !== scope) {
    current = { scope, keys: scope ? loadMarks(scope) : [] };
    setMarks(current);
  }
  const markRead = (key: string) => {
    if (!MARK.test(key) || current.keys.includes(key)) return;
    const keys = [...current.keys, key].slice(-MAX_MARKS);
    if (scope) saveMarks(scope, keys);
    setMarks({ scope, keys });
  };
  return { read: new Set(current.keys), markRead };
}
