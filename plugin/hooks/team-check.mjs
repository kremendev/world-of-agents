// World of Agents team check (v3.6d, docs/v3.6-plan.md, E6 and E9; per project from v3.9). The team pane runs it as
// `node <plugin>/hooks/team-check.mjs` in the plugin's folder at session start, with {"project": "<the session's
// folder>"} on stdin, to learn whether that project has a team of its own and whether its generated files (its agent and
// skill files) come from an older plugin than this one.
//
// It answers by exit code only and prints nothing: 0 when the project's team is this plugin's generator or newer, 6 when
// it is older, 4 when the project has no team of its own (or its file is broken, or the input isn't a project). It reads
// that project's team.json through team.mjs and nothing else; it writes nothing and uses no network.

import { realpathSync } from 'node:fs';
import { homedir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { projectInput, teamFilesOf } from '../team/team.mjs';

export const CURRENT = 0;
export const NO_TEAM = 4;
export const OLDER = 6;
const MAX_STDIN = 4096;

/** The exit code for the project in `folder`, with the teams in `home`. */
export function status(home, folder) {
  const files = folder === null ? 'none' : teamFilesOf(home, folder);
  return files === 'none' ? NO_TEAM : files === 'older' ? OLDER : CURRENT;
}

async function readStdin() {
  const chunks = [];
  let size = 0;
  for await (const chunk of process.stdin) {
    size += chunk.length;
    if (size > MAX_STDIN) return null;
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
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
  readStdin().then(
    (raw) => {
      process.exitCode = status(homedir(), projectInput(raw));
    },
    () => {
      process.exitCode = NO_TEAM;
    },
  );
}
