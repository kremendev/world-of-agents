// World of Agents team log (v3.4c, docs/v3.4-plan.md; per project from v3.9). The team pane runs it as
// `node <plugin>/hooks/team-log.mjs` in the plugin's folder, with {"project": "<the session's folder>"} on stdin, at
// session start, after the Lead's turns and for a while after "Open Team page", to show every change the hall's page
// made to that project's team and to the library from it: the time, what changed, and names only.
//
// It reads that project's changes.json through team.mjs (only entries that are exactly entries) and prints one line,
// {"changes": [...]}, the newest 20, oldest first: none for a project with no team of its own. The pane checks it again
// and drops anything else. It reads no other file, writes nothing, and uses no network. Node built-ins and team.mjs only.

import { realpathSync } from 'node:fs';
import { homedir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { projectInput, projectOf, projectTeamDir, readChanges } from '../team/team.mjs';

/** The most the pane is sent. */
export const SHOWN = 20;
const MAX_STDIN = 4096;

/** What it prints for the project in `folder`, with the teams in `home`. */
export function printed(home, folder) {
  const project = folder === null ? null : projectOf(folder);
  const changes = project ? readChanges(projectTeamDir(home, project.key)).slice(-SHOWN) : [];
  return JSON.stringify({ changes });
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
    (raw) => process.stdout.write(`${printed(homedir(), projectInput(raw))}\n`),
    () => process.stdout.write(`${JSON.stringify({ changes: [] })}\n`),
  );
}
