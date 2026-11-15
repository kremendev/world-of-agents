// World of Agents team check (v3.6d, docs/v3.6-plan.md, E6 and E9). The team pane runs it as
// `node <plugin>/hooks/team-check.mjs` in the plugin's folder, no arguments, at session start, to learn whether the
// team's generated files (its agent and skill files) come from an older plugin than this one.
//
// It answers by exit code only and prints nothing: 0 when the team's generator is this plugin's or newer, 6 when it is
// older (a version 1 team, from v3.4 or v3.5, counts as older), 4 when there is no team or it is broken. It reads
// ~/.world-of-agents/team/team.json through team.mjs's readTeam(), and nothing else; it writes nothing and uses no network.

import { realpathSync } from 'node:fs';
import { homedir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { GENERATOR, readTeam } from '../team/team.mjs';

export const CURRENT = 0;
export const NO_TEAM = 4;
export const OLDER = 6;

/** The exit code for the team in `home`. */
export function status(home = homedir()) {
  const team = readTeam(home);
  if (team === null) return NO_TEAM;
  return team.generator >= GENERATOR ? CURRENT : OLDER;
}

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
  process.exitCode = status();
}
