// World of Agents team setup (v3.4, docs/v3.4-plan.md). Claude Code runs it, never the model:
//   node team-setup.mjs           shows what it would create, writes nothing   (/world-of-agents:setup-team)
//   node team-setup.mjs --write   creates ~/.world-of-agents/team             (/world-of-agents:setup-team-write)
//
// It creates the team from the plugin's defaults only when there is none, never over one, and prints no file's text.
// It exits 0 whenever it printed a result: a non-zero exit aborts the skill.

import { existsSync, realpathSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { defaults, GUILDS, init, readTeam, teamDir } from '../../team/team.mjs';

const GUILD = { design: 'Design', frontend: 'Frontend', backend: 'Backend', review: 'Review' };
export const INSTALL = [
  'To use it in a project, in Git Bash, once on this PC:',
  '  claude plugin marketplace add ~/.world-of-agents',
  'then in each project folder:',
  '  claude plugin install woa-team@woa-local --scope local',
  'and /reload-plugins in a session that is already open.',
];

/** The team, one line per specialist, by guild. */
const listed = (team) =>
  GUILDS.flatMap((guild) =>
    team.specialists.filter((p) => p.guild === guild).map((p) => `  ${p.name} (${GUILD[guild]}): ${p.role}`),
  );

/** What to print for `home`, creating the team when `writing` and there is none. */
export function report(home, writing) {
  const there = existsSync(join(teamDir(home), 'team.json'));
  if (there) {
    const team = readTeam(home);
    if (!team) {
      return [
        "Stopped: ~/.world-of-agents/team/team.json is there but isn't a team the plugin can read, so the guard lets no",
        'agent start. Nothing changed. Move that folder aside and run this again to create a fresh one.',
      ];
    }
    return [
      `The team is already there: ${team.specialists.length} specialists and ${team.skills.length} skills. Nothing changed.`,
      ...listed(team),
      '',
      ...INSTALL,
    ];
  }
  const { team } = defaults();
  if (!writing) {
    return [
      `It would create ~/.world-of-agents/team with ${team.specialists.length} specialists and ${team.skills.length} skills:`,
      ...listed(team),
      '',
      'Until the team exists, the guard lets no agent start. Nothing has been written.',
      'To create it, type /world-of-agents:setup-team-write.',
    ];
  }
  init(home);
  return [
    `Created ~/.world-of-agents/team: ${team.specialists.length} specialists and ${team.skills.length} skills.`,
    ...listed(team),
    '',
    ...INSTALL,
  ];
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
  const args = process.argv.slice(2);
  if (args.length > 1 || (args.length === 1 && args[0] !== '--write')) {
    console.log('Usage: node team-setup.mjs [--write]');
    process.exit(1);
  }
  try {
    console.log(report(homedir(), args[0] === '--write').join('\n'));
  } catch {
    console.log('Stopped: the team folder could not be written. Nothing more changed.');
  }
}
