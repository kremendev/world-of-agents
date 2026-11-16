// World of Agents team setup (v3.4, docs/v3.4-plan.md; per project from v3.9, docs/v3.9-plan.md). Claude Code runs it,
// never the model, in the session's folder, the project's:
//   node team-setup.mjs           shows what it would do for this project, writes nothing   (/world-of-agents:setup-team)
//   node team-setup.mjs --write   does it                                                  (/world-of-agents:setup-team-write)
//
// A project with no team of its own gets one, once (Dima, 16 Nov): a copy of the shared team of v3.4 to v3.8 when there
// is one, its notes waiting on the Team page to keep or drop one by one, or else an empty team; the library is built from
// the shared team's skills the first time. The shared team itself is only read, and stays as an unused backup. A project
// whose team's generated files come from an older plugin gets only those rewritten (v3.6d), never a specialist, a skill
// or a note. It prints no skill's text or note, and exits 0 whenever it printed a result: a non-zero exit aborts the skill.

import { existsSync, realpathSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  GENERATOR,
  GUILDS,
  giveOwnTeam,
  installCommands,
  libraryDir,
  NOTE_AGENTS,
  projectOf,
  projectTeamDir,
  readLibrary,
  readNotes,
  readProjectTeam,
  readShared,
  writeProjectTeam,
} from '../../team/team.mjs';

const GUILD = { design: 'Design', frontend: 'Frontend', backend: 'Backend', review: 'Review' };

/** A team's specialists, one line each, by guild. */
const listed = (team) =>
  GUILDS.flatMap((guild) =>
    team.specialists.filter((p) => p.guild === guild).map((p) => `  ${p.name} (${GUILD[guild]}): ${p.role}`),
  );

const count = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

/** What Dima runs once, so Claude Code loads the project's own team. */
const install = (key) => [
  "Once, in Git Bash in this project's folder, so Claude Code loads its team:",
  ...installCommands(key).map((command) => `  ${command}`),
  "(Skip the uninstall line if it says woa-team isn't installed here.)",
  'Then /reload-plugins in a session that is already open.',
];

/** What to print for the project in `folder`, with the teams in `home`; when `writing`, it does what it says. */
export function report(home, writing, folder, now = Date.now()) {
  const project = projectOf(folder);
  if (!project) return ["Stopped: this folder can't be read as a project. Nothing changed."];
  return existsSync(join(projectTeamDir(home, project.key), 'team.json'))
    ? own(home, writing, project)
    : given(home, writing, folder, project, now);
}

/** A project with a team of its own: nothing to do, or (v3.6d) its generated files refreshed. */
function own(home, writing, project) {
  const team = readProjectTeam(home, project.key);
  if (!team) {
    return [
      "Stopped: this project's team.json in ~/.world-of-agents/projects is there but isn't a team the plugin can read,",
      "so its specialists can't start. Nothing changed.",
    ];
  }
  const size = count(team.specialists.length, 'specialist');
  if (team.generator >= GENERATOR) {
    return [
      `This project has its own team: ${size}. Nothing changed.`,
      ...listed(team),
      '',
      ...install(project.key),
    ];
  }
  if (!writing) {
    return [
      `This project has its own team: ${size}, its files from an older plugin.`,
      ...listed(team),
      '',
      'To refresh them, type /world-of-agents:setup-team-write. It rewrites only the files the plugin makes from the',
      'team: never a specialist, a skill or a note of yours. Nothing has been written yet.',
    ];
  }
  let read;
  try {
    read = readLibrary(home);
  } catch {
    return [
      'Stopped: a file in ~/.world-of-agents/library was changed by hand, so a refresh could lose a skill.',
      'Nothing changed.',
    ];
  }
  let notes;
  try {
    notes = readNotes(projectTeamDir(home, project.key));
  } catch {
    return [
      "Stopped: this project's notes.json isn't as World of Agents wrote it, so a refresh would lose notes.",
      'Nothing changed.',
    ];
  }
  writeProjectTeam(home, project.key, team, read.library, read.texts, notes);
  return [
    `Refreshed this project's team files for this plugin: ${size}, each as it was.`,
    ...listed(team),
    '',
    'Type /reload-plugins in a session that is already open, so it reads the new files.',
  ];
}

/** A project with no team of its own yet: the one-time copy of the shared team, or an empty team. */
function given(home, writing, folder, project, now) {
  let shared;
  try {
    shared = readShared(home);
  } catch {
    return [
      "Stopped: the shared team in ~/.world-of-agents/team is there but can't be read whole (a file changed by hand?),",
      'so nothing was copied. Nothing changed.',
    ];
  }
  const notes = shared ? NOTE_AGENTS.reduce((n, agent) => n + shared.notes.notes[agent].length, 0) : 0;
  const buildsLibrary = shared !== null && !existsSync(join(libraryDir(home), 'library.json'));
  const library = buildsLibrary
    ? [
        `Your skill library is built from the shared team's ${count(shared.team.skills.length, 'skill')}, once.`,
      ]
    : [];
  if (!writing) {
    return [
      "This project has no team of its own yet, so its specialists can't start. Its guild leads still work.",
      '',
      ...(shared
        ? [
            `Writing gives it a copy of your shared team: ${count(shared.team.specialists.length, 'specialist')}, each switched on or off as it is.`,
            ...listed(shared.team),
            ...(notes > 0
              ? [
                  `Its ${count(notes, 'note')} wait on the Team page's Notes tab, to keep or drop one by one; none is copied as it is.`,
                ]
              : []),
            'The shared team stays in ~/.world-of-agents/team as an unused backup.',
          ]
        : [
            'Writing gives it an empty team. On the Team page you add specialists, or the starter team in one click.',
          ]),
      ...library,
      '',
      'Nothing has been written. To do it, type /world-of-agents:setup-team-write.',
      ...(shared ? ['For an empty team instead, press Give this project its own team in the pane.'] : []),
    ];
  }
  giveOwnTeam(home, folder, shared ? 'shared' : 'empty', now);
  return [
    shared
      ? 'Gave this project its own team: a copy of your shared team.'
      : 'Gave this project its own team: an empty one.',
    ...(shared ? listed(shared.team) : []),
    ...(notes > 0
      ? [`Its ${count(notes, 'note')} wait on the Team page's Notes tab, to keep or drop one by one.`]
      : []),
    ...library,
    '',
    ...install(project.key),
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
    console.log(report(homedir(), args[0] === '--write', process.cwd()).join('\n'));
  } catch {
    console.log('Stopped: the team folder could not be written. Nothing more changed.');
  }
}
