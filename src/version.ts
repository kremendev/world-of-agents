// The plugin's version, from plugin.json (3.2d): the hall reports it in its handshake answer and /api/health, and the
// page's badge shows it. Built into the hall and the page, so a release that changes plugin.json rebuilds both.
import { version } from '../plugin/.claude-plugin/plugin.json';

export const VERSION: string = version;

/** A version as the hall states it: digits and dots only, three parts. Anything else is not one. */
export const VERSION_SHAPE = /^\d{1,4}\.\d{1,4}\.\d{1,4}$/;
