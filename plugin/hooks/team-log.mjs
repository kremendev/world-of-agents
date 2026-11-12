// World of Agents team log (v3.4c, docs/v3.4-plan.md). The team pane runs it as `node <plugin>/hooks/team-log.mjs` in the
// plugin's folder, no arguments, at session start, after the Lead's turns and for a while after "Change skills", to show
// every change the hall's page made to the team: the time, what changed, and names only.
//
// It reads ~/.world-of-agents/team/changes.json through team.mjs (only entries that are exactly entries) and prints one
// line, {"changes": [...]}, the newest 20, oldest first; the pane checks it again and drops anything else. It reads no
// other file, writes nothing, and uses no network. Node built-ins and team.mjs only.

import { realpathSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { readChanges, teamDir } from '../team/team.mjs';

/** The most the pane is sent. */
export const SHOWN = 20;

/** What it prints, from the team folder `dir`. */
export const printed = (dir) => JSON.stringify({ changes: readChanges(dir).slice(-SHOWN) });

/**
 * True only when Node was started on this very file: the real path of process.argv[1] is this module's own. A name check
 * (endsWith) also fires for any file whose name ends the same, such as xguard.mjs importing guard.mjs.
 */
function runAsScript() {
  try {
    const script = process.argv[1];
    if (typeof script !== 'string' || script === '') return false;
    const own = pathToFileURL(realpathSync(fileURLToPath(import.meta.url))).href;
    return pathToFileURL(realpathSync(script)).href === own;
  } catch {
    return false;
  }
}

// Run only as a script, so tests can import its functions.
if (runAsScript()) {
  process.stdout.write(`${printed(teamDir())}\n`);
}
