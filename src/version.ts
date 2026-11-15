// The plugin's version, from plugin.json (3.2d): the hall reports it in its handshake answer and /api/health, and the
// page's badge shows it. Built into the hall and the page, so a release that changes plugin.json rebuilds both.
import { version } from '../plugin/.claude-plugin/plugin.json';

export const VERSION: string = version;

/** A version as the hall states it: digits and dots only, three parts. Anything else is not one. */
export const VERSION_SHAPE = /^\d{1,4}\.\d{1,4}\.\d{1,4}$/;

/** Is `a` a later version than `b`? Both in VERSION_SHAPE, compared part by part as numbers (3.10.0 is after 3.9.0). */
export function isNewer(a: string, b: string): boolean {
  const x = a.split('.').map(Number);
  const y = b.split('.').map(Number);
  for (let i = 0; i < 3; i += 1) {
    const d = (x[i] ?? 0) - (y[i] ?? 0);
    if (d !== 0) return d > 0;
  }
  return false;
}
