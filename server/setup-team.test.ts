import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { report } from '../plugin/skills/setup-team/team-setup.mjs';
import {
  buildAgent,
  changeProject,
  defaults,
  emptyNotes,
  GENERATOR,
  giveOwnTeam,
  init,
  installCommands,
  libraryDir,
  projectOf,
  projectsDir,
  projectTeamDir,
  projectTeamOf,
  readNotes,
  readProjectTeam,
  readReview,
  teamDir,
  writeNotes,
} from '../plugin/team/team.mjs';

const PLUGIN = join(import.meta.dirname, '../plugin');
const SKILLS = join(PLUGIN, 'skills');
const COMMAND = "node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs'";

const homes: string[] = [];
afterEach(() => {
  for (const dir of homes.splice(0)) rmSync(dir, { recursive: true, force: true });
});
const home = () => {
  const dir = mkdtempSync(join(tmpdir(), 'woa-setup-team-'));
  homes.push(dir);
  return dir;
};

/** A markdown file's frontmatter keys and its injected commands. */
function parse(file: string) {
  const text = readFileSync(file, 'utf8');
  const front = /^---\n([\s\S]*?)\n---\n/.exec(text)?.[1] ?? '';
  const keys = Object.fromEntries(
    front
      .split('\n')
      .map((line) => [line.slice(0, line.indexOf(':')), line.slice(line.indexOf(':') + 1).trim()]),
  );
  const injected = [...text.matchAll(/^!`([^`]*)`$/gm)].map((m) => m[1]);
  return { text, keys, injected };
}

describe.each([
  ['setup-team', COMMAND],
  ['setup-team-write', `${COMMAND} --write`],
])('/world-of-agents:%s (v3.4)', (name, command) => {
  const { text, keys, injected } = parse(join(SKILLS, name, 'SKILL.md'));

  it('only the user can start it, and Claude Code runs exactly one fixed command, pre-approved', () => {
    expect(keys.name).toBe(name);
    expect(keys['disable-model-invocation']).toBe('true');
    expect(injected).toEqual([command]);
    expect(keys['allowed-tools']).toBe(`Bash(${command})`);
    expect(text).not.toContain('$ARGUMENTS');
    expect(text).toMatch(/You run nothing yourself/);
  });
});

describe("every description in the plugin's frontmatter is one plain YAML value", () => {
  // A ": " inside an unquoted YAML value breaks the frontmatter (found in 3.3a's and 3.4a's own skills, 12 Nov).
  const files = [
    ...readdirSync(SKILLS).map((dir) => join(SKILLS, dir, 'SKILL.md')),
    ...readdirSync(join(PLUGIN, 'agents')).map((file) => join(PLUGIN, 'agents', file)),
  ];

  it.each(files.map((file) => [file.slice(PLUGIN.length + 1), file]))('%s', (_, file) => {
    const description = parse(file).keys.description ?? '';
    expect(description).not.toBe('');
    expect(description).not.toMatch(/: |#|^['"]/);
  });
});

/** A home with the shared team of v3.4 to v3.8 and two of its notes, as Dima's PC has it before v3.9. */
function sharedHome() {
  const h = home();
  init(h);
  const notes = emptyNotes();
  notes.notes.frontend.push({
    id: 'AAAAAAAAAAAAAAAA',
    text: 'The counter lives in src/counter.js.',
    proposedAt: 1,
    approvedAt: 2,
  });
  notes.notes.reviewer.push({
    id: 'BBBBBBBBBBBBBBBB',
    text: 'Reviews go in docs/reviews.',
    proposedAt: 3,
    approvedAt: 4,
  });
  writeNotes(teamDir(h), notes, defaults().team);
  return h;
}
const SKILLS_COUNT = defaults().team.skills.length;
const keyOf = (folder: string) => projectOf(folder)!.key;
const commands = (key: string) =>
  installCommands(key)
    .map((command) => `  ${command}`)
    .join('\n');

describe('team-setup.mjs (v3.9: a team per project)', () => {
  it('a project with no team of its own: the dry run describes the copy of the shared team, and writes nothing', () => {
    const h = sharedHome();
    const out = report(h, false, home()).join('\n');
    expect(out).toContain(
      "This project has no team of its own yet, so its specialists can't start. Its guild leads still work.",
    );
    expect(out).toContain(
      'Writing gives it a copy of your shared team: 8 specialists, each switched on or off as it is.',
    );
    expect(out).toContain(
      "Its 2 notes wait on the Team page's Notes tab, to keep or drop one by one; none is copied as it is.",
    );
    expect(out).toContain('The shared team stays in ~/.world-of-agents/team as an unused backup.');
    expect(out).toContain(`Your skill library is built from the shared team's ${SKILLS_COUNT} skills, once.`);
    expect(out).toContain('Nothing has been written. To do it, type /world-of-agents:setup-team-write.');
    expect(out).toContain('For an empty team instead, press Give this project its own team in the pane.');
    expect(existsSync(projectsDir(h))).toBe(false);
    expect(existsSync(libraryDir(h))).toBe(false);
  });

  it('--write gives it the copy and its notes for review, prints the three commands, and the next run changes nothing', () => {
    const h = sharedHome();
    const folder = home();
    const out = report(h, true, folder).join('\n');
    expect(out).toContain('Gave this project its own team: a copy of your shared team.');
    expect(out).toContain(commands(keyOf(folder)));
    expect(out).toContain("(Skip the uninstall line if it says woa-team isn't installed here.)");
    const status = projectTeamOf(h, folder);
    expect(status.status === 'own' && status.team.specialists.length).toBe(8);
    expect(readReview(h, keyOf(folder))).toHaveLength(2);
    for (const writing of [false, true]) {
      const again = report(h, writing, folder).join('\n');
      expect(again).toContain('This project has its own team: 8 specialists. Nothing changed.');
      expect(again).toContain(commands(keyOf(folder)));
    }
  });

  it('on a PC with no shared team: an empty team, and no library to build', () => {
    const h = home();
    const folder = home();
    const dry = report(h, false, folder).join('\n');
    expect(dry).toContain(
      'Writing gives it an empty team. On the Team page you add specialists, or the starter team in one click.',
    );
    expect(dry).not.toContain('library');
    expect(dry).not.toContain('For an empty team instead');
    expect(report(h, true, folder).join('\n')).toContain('Gave this project its own team: an empty one.');
    expect(readProjectTeam(h, keyOf(folder))?.specialists).toEqual([]);
  });

  it("refreshes an older project team's generated files only: every specialist, skill and note as it was", () => {
    const h = sharedHome();
    const folder = home();
    const key = giveOwnTeam(h, folder, 'shared', 1).project.key;
    changeProject(h, key, { action: 'note-keep', id: 'AAAAAAAAAAAAAAAA' }, 2);
    const dir = projectTeamDir(h, key);
    const before = readProjectTeam(h, key)!;
    writeFileSync(join(dir, 'team.json'), JSON.stringify({ ...before, generator: GENERATOR - 1 }));
    writeFileSync(join(dir, 'agents', 'frontend-react-dev.md'), 'an older file');
    const dry = report(h, false, folder).join('\n');
    expect(dry).toContain('This project has its own team: 8 specialists, its files from an older plugin.');
    expect(dry).toContain('Nothing has been written yet.');
    expect(readFileSync(join(dir, 'agents', 'frontend-react-dev.md'), 'utf8')).toBe('an older file');
    expect(report(h, true, folder).join('\n')).toContain(
      "Refreshed this project's team files for this plugin: 8 specialists, each as it was.",
    );
    expect(readProjectTeam(h, key)).toEqual(before);
    const react = before.specialists.find((p) => p.id === 'frontend-react-dev')!;
    expect(readFileSync(join(dir, 'agents', 'frontend-react-dev.md'), 'utf8')).toBe(buildAgent(react));
    expect(readNotes(dir).notes.frontend.map((n) => n.text)).toEqual([
      'The counter lives in src/counter.js.',
    ]);
    expect(existsSync(join(dir, 'skills', 'notes-frontend', 'SKILL.md'))).toBe(true);
  });

  it("stops, changing nothing, at a broken team, a broken notes.json, or a shared team that can't be read whole", () => {
    const broken = sharedHome();
    const folder = home();
    const key = giveOwnTeam(broken, folder, 'empty', 1).project.key;
    writeFileSync(join(projectTeamDir(broken, key), 'team.json'), '{"version":3}');
    expect(report(broken, true, folder).join('\n')).toContain("Stopped: this project's team.json");

    const notes = sharedHome();
    const other = home();
    const otherKey = giveOwnTeam(notes, other, 'empty', 1).project.key;
    const file = join(projectTeamDir(notes, otherKey), 'team.json');
    writeFileSync(file, JSON.stringify({ ...JSON.parse(readFileSync(file, 'utf8')), generator: 0 }));
    writeFileSync(join(projectTeamDir(notes, otherKey), 'notes.json'), '{"version":9}');
    expect(report(notes, true, other).join('\n')).toContain("Stopped: this project's notes.json");

    const hand = sharedHome();
    writeFileSync(join(teamDir(hand), 'skills', 'accessibility', 'SKILL.md'), 'changed by hand');
    expect(report(hand, true, home()).join('\n')).toContain(
      "Stopped: the shared team in ~/.world-of-agents/team is there but can't be read whole",
    );
    expect(existsSync(projectsDir(hand))).toBe(false);
  });

  it("never prints a skill's text or a note", () => {
    const h = sharedHome();
    for (const writing of [false, true]) {
      const out = report(h, writing, home()).join('\n');
      expect(out).not.toContain(defaults().texts['accessibility']!.trim().slice(0, 40));
      expect(out).not.toContain('src/counter.js');
    }
  });

  it('stops for a folder it cannot read as a project', () => {
    expect(report(home(), true, join(home(), 'missing'))).toEqual([
      "Stopped: this folder can't be read as a project. Nothing changed.",
    ]);
  });
});
