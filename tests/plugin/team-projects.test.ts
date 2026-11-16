// v3.9 (docs/v3.9-plan.md): a team per project, one skill library for the PC, the one-time copy of the shared team.
import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import {
  changeProject,
  defaults,
  emptyNotes,
  giveOwnTeam,
  init,
  installCommands,
  isChange,
  isProjectKey,
  libraryDir,
  libraryProblem,
  MAX_SPECIALIST_TEXT,
  MAX_TEXT,
  listProjects,
  projectDir,
  projectOf,
  projectTeamDir,
  projectTeamOf,
  readChanges,
  readLibrary,
  readNotes,
  readProject,
  readProjectTeam,
  readReview,
  teamDir,
  teamFilesOf,
  textProblem,
  writeNotes,
  type Notes,
} from '../../plugin/team/team.mjs';

const made: string[] = [];
afterEach(() => {
  for (const dir of made.splice(0)) rmSync(dir, { recursive: true, force: true });
});
const temp = (name: string) => {
  const dir = mkdtempSync(join(tmpdir(), name));
  made.push(dir);
  return dir;
};
/** A home with the shared team of v3.4 to v3.8, as init() made it, and two of its notes. */
function homeWithShared() {
  const home = temp('woa-home-');
  init(home);
  const notes: Notes = emptyNotes();
  notes.notes.frontend.push({
    id: 'AAAAAAAAAAAAAAAA',
    text: 'The counter lives in src/counter.js.',
    proposedAt: 1,
    approvedAt: 2,
  });
  notes.notes.backend.push({
    id: 'BBBBBBBBBBBBBBBB',
    text: 'The API is in server/.',
    proposedAt: 3,
    approvedAt: 4,
  });
  writeNotes(teamDir(home), notes, defaults().team);
  return home;
}
/** Every file under `dir` with its digest: to show a folder is untouched. */
function snapshot(dir: string): Record<string, string> {
  const out: Record<string, string> = {};
  const walk = (d: string) => {
    for (const name of readdirSync(d)) {
      const path = join(d, name);
      if (statSync(path).isDirectory()) walk(path);
      else out[relative(dir, path)] = createHash('sha256').update(readFileSync(path)).digest('hex');
    }
  };
  walk(dir);
  return out;
}
const NOW = 1_800_000_000_000;

describe('a project and its key', () => {
  it("is the folder's name and a hash of its real path, the same however the path is written", () => {
    const folder = temp('My Project ');
    const project = projectOf(folder);
    expect(project).not.toBeNull();
    expect(isProjectKey(project!.key)).toBe(true);
    expect(project!.key).toMatch(/^my-project-[a-z0-9]+-[0-9a-f]{10}$/);
    // Windows: another case and forward slashes name the same folder, so the same key.
    if (process.platform === 'win32') {
      expect(projectOf(folder.toUpperCase())?.key).toBe(project!.key);
      expect(projectOf(folder.split('\\').join('/'))?.key).toBe(project!.key);
    }
    expect(projectOf(join(folder, '.'))?.key).toBe(project!.key);
  });

  it('is nothing for a relative path, a folder that is not there, a file, or anything but a string', () => {
    const folder = temp('woa-proj-');
    writeFileSync(join(folder, 'a.txt'), 'x');
    for (const bad of [
      'relative/path',
      join(folder, 'missing'),
      join(folder, 'a.txt'),
      '',
      42,
      null,
      'x'.repeat(2000),
    ])
      expect(projectOf(bad), String(bad).slice(0, 40)).toBeNull();
  });

  it('two folders of the same name get two keys', () => {
    const a = join(temp('woa-a-'), 'app');
    const b = join(temp('woa-b-'), 'app');
    mkdirSync(a);
    mkdirSync(b);
    expect(projectOf(a)!.key).not.toBe(projectOf(b)!.key);
  });

  it('a key never leads out of the projects folder', () => {
    for (const bad of ['../team', 'a/../../b', 'UPPER-0123456789', 'x-012345678', '-0123456789'])
      expect(() => projectDir('/home', bad), bad).toThrow('not a project key');
  });
});

describe("the guard's view of a project (projectTeamOf)", () => {
  it('unset on a PC with no team at all, none once anything is set up, own with a team, broken with a bad one', () => {
    const home = temp('woa-home-');
    const folder = temp('woa-proj-');
    expect(projectTeamOf(home, folder).status).toBe('unset');
    init(home); // only the shared team: the PC is set up, this project has no team of its own
    expect(projectTeamOf(home, folder).status).toBe('none');
    expect(projectTeamOf(home, undefined).status).toBe('none');
    const { project } = giveOwnTeam(home, folder, 'empty', NOW);
    const own = projectTeamOf(home, folder);
    expect(own).toEqual({ status: 'own', team: { version: 3, generator: 2, specialists: [] } });
    writeFileSync(join(projectTeamDir(home, project.key), 'team.json'), '{"version":3}');
    expect(projectTeamOf(home, folder).status).toBe('broken');
  });

  it('never reads the shared team: a project without its own has no rows, whatever the shared team holds', () => {
    const home = homeWithShared();
    const status = projectTeamOf(home, temp('woa-proj-'));
    expect(status).toEqual({ status: 'none' });
  });
});

describe("giving a project its own team (once, on Dima's command)", () => {
  it('a copy of the shared team: its specialists and switches, the library built from its skills, its notes for review', () => {
    const home = homeWithShared();
    const shared = snapshot(teamDir(home));
    const folder = temp('woa-proj-');
    const given = giveOwnTeam(home, folder, 'shared', NOW);
    expect(given).toMatchObject({ review: 2, libraryBuilt: true });
    const key = given.project.key;
    // The marketplace Dima registers once, and the project's own file.
    const market = JSON.parse(
      readFileSync(join(projectDir(home, key), '.claude-plugin', 'marketplace.json'), 'utf8'),
    );
    expect(market).toMatchObject({ name: `woa-${key}`, plugins: [{ name: 'woa-team', source: './team' }] });
    expect(readProject(home, key)).toMatchObject({ key, folder: projectOf(folder)!.folder, createdAt: NOW });
    // The specialists as the shared team had them; the library holds its skills, marked as from your team (v3.7).
    const team = readProjectTeam(home, key)!;
    expect(team.specialists).toEqual(defaults().team.specialists);
    const { library, texts } = readLibrary(home);
    expect(library.skills.map((s) => s.id)).toEqual(defaults().team.skills.map((s) => s.id));
    expect(library.skills.every((s) => s.source.kind === 'team' && s.addedAt === NOW)).toBe(true);
    expect(texts['accessibility']).toBe(defaults().texts['accessibility']!.trim());
    // Each skill a specialist uses is in the project's plugin; notes wait for review, none kept yet.
    expect(existsSync(join(projectTeamDir(home, key), 'skills', 'accessibility', 'SKILL.md'))).toBe(true);
    expect(existsSync(join(projectTeamDir(home, key), 'agents', 'frontend-react-dev.md'))).toBe(true);
    expect(readReview(home, key).map((n) => n.agent)).toEqual(['frontend', 'backend']);
    expect(readNotes(projectTeamDir(home, key))).toEqual(emptyNotes());
    expect(existsSync(join(projectTeamDir(home, key), 'skills', 'notes-frontend'))).toBe(false);
    // The shared team is only read: every file as it was.
    expect(snapshot(teamDir(home))).toEqual(shared);
    expect(readChanges(projectTeamDir(home, key))).toEqual([{ at: NOW, what: 'team-given', from: 'shared' }]);
  });

  it('an empty team: no specialists, no notes to review, the library still built once from the shared team', () => {
    const home = homeWithShared();
    const given = giveOwnTeam(home, temp('woa-proj-'), 'empty', NOW);
    expect(given).toMatchObject({ review: 0, libraryBuilt: true, team: { specialists: [] } });
    expect(existsSync(join(projectDir(home, given.project.key), 'review.json'))).toBe(false);
    // A second project finds the library there and builds nothing.
    expect(giveOwnTeam(home, temp('woa-proj-'), 'empty', NOW + 1).libraryBuilt).toBe(false);
  });

  it('on a PC with no shared team, an empty team only, and no library yet', () => {
    const home = temp('woa-home-');
    expect(() => giveOwnTeam(home, temp('woa-proj-'), 'shared', NOW)).toThrow(
      'there is no shared team to copy',
    );
    const given = giveOwnTeam(home, temp('woa-proj-'), 'empty', NOW);
    expect(given.libraryBuilt).toBe(false);
    expect(existsSync(libraryDir(home))).toBe(false);
  });

  it('never twice, never for a folder that is not there, and never an unknown choice', () => {
    const home = homeWithShared();
    const folder = temp('woa-proj-');
    giveOwnTeam(home, folder, 'empty', NOW);
    expect(() => giveOwnTeam(home, folder, 'shared', NOW)).toThrow('this project has its own team already');
    expect(() => giveOwnTeam(home, join(folder, 'missing'), 'empty', NOW)).toThrow(
      "that isn't a project folder",
    );
    expect(() => giveOwnTeam(home, temp('woa-proj-'), 'all' as 'empty', NOW)).toThrow('an unknown choice');
  });

  it('prints the three commands Dima runs once, in Git Bash, in the project folder', () => {
    expect(installCommands('app-0123456789')).toEqual([
      'claude plugin marketplace add ~/.world-of-agents/projects/app-0123456789',
      'claude plugin uninstall woa-team@woa-local --scope local',
      'claude plugin install woa-team@woa-app-0123456789 --scope local',
    ]);
  });
});

describe('changing a project (changeProject)', () => {
  /** A home with the shared team, project A copied from it, project B empty. */
  function twoProjects() {
    const home = homeWithShared();
    const a = giveOwnTeam(home, temp('woa-a-'), 'shared', NOW).project.key;
    const b = giveOwnTeam(home, temp('woa-b-'), 'empty', NOW + 1).project.key;
    return { home, a, b };
  }

  it('the starter team: all 8 into an empty team, the library keeping its own version of a skill it has', () => {
    const home = temp('woa-home-');
    const key = giveOwnTeam(home, temp('woa-proj-'), 'empty', NOW).project.key;
    expect(changeProject(home, key, { action: 'add-starter' }, NOW + 5)).toEqual({
      at: NOW + 5,
      what: 'starter-added',
    });
    expect(readProjectTeam(home, key)!.specialists).toEqual(defaults().team.specialists);
    const { library } = readLibrary(home);
    expect(library.skills.every((s) => s.source.kind === 'starter')).toBe(true);
    expect(() => changeProject(home, key, { action: 'add-starter' }, NOW + 6)).toThrow(
      'the starter team goes into a team with no specialists',
    );

    // In a library built from the shared team, the starter team's skills are the ones Dima has: never replaced.
    const { home: h2, a, b } = twoProjects();
    const own = {
      action: 'change-skill' as const,
      id: 'accessibility',
      name: 'Accessibility',
      description: 'Mine',
      text: 'My own way.',
    };
    changeProject(h2, a, own, NOW + 7);
    const before = readLibrary(h2);
    changeProject(h2, b, { action: 'add-starter' }, NOW + 8);
    expect(readLibrary(h2)).toEqual(before);
    expect(
      readFileSync(join(projectTeamDir(h2, b), 'skills', 'accessibility', 'SKILL.md'), 'utf8'),
    ).toContain('My own way.');
  });

  it('copying another project: its specialists, switches and skill picks, never its notes; only into an empty team', () => {
    const { home, a, b } = twoProjects();
    changeProject(home, a, { action: 'switch', id: 'frontend-react-dev', on: false }, NOW + 2);
    changeProject(home, a, { action: 'note-keep', id: 'AAAAAAAAAAAAAAAA' }, NOW + 3);
    expect(changeProject(home, b, { action: 'copy-from', project: a }, NOW + 4)).toEqual({
      at: NOW + 4,
      what: 'team-copied',
    });
    const copied = readProjectTeam(home, b)!;
    expect(copied.specialists).toEqual(readProjectTeam(home, a)!.specialists);
    expect(copied.specialists.find((p) => p.id === 'frontend-react-dev')!.on).toBe(false);
    expect(readNotes(projectTeamDir(home, b))).toEqual(emptyNotes());
    expect(() => changeProject(home, b, { action: 'copy-from', project: a }, NOW + 5)).toThrow(
      'a copy goes into a team',
    );
    const empty = giveOwnTeam(home, temp('woa-c-'), 'empty', NOW + 6).project.key;
    for (const project of [empty, 'nothing-0123456789', '../team'])
      expect(() => changeProject(home, empty, { action: 'copy-from', project }, NOW + 7)).toThrow(
        'no specialists to copy',
      );
  });

  it('a library skill changed is written again in every project that uses it, and nowhere else', () => {
    const { home, a, b } = twoProjects();
    changeProject(home, b, { action: 'copy-from', project: a }, NOW + 2);
    const other = giveOwnTeam(home, temp('woa-c-'), 'empty', NOW + 3).project.key;
    const change = {
      action: 'change-skill' as const,
      id: 'accessibility',
      name: 'Accessibility',
      description: 'Keeps pages usable by everyone',
      text: 'Check labels first.',
    };
    changeProject(home, a, change, NOW + 4);
    for (const key of [a, b]) {
      const file = readFileSync(
        join(projectTeamDir(home, key), 'skills', 'accessibility', 'SKILL.md'),
        'utf8',
      );
      expect(file).toContain('Check labels first.');
      expect(file).toContain('description: "Keeps pages usable by everyone"');
    }
    expect(existsSync(join(projectTeamDir(home, other), 'skills', 'accessibility'))).toBe(false);
    expect(readLibrary(home).texts['accessibility']).toBe('Check labels first.');
  });

  it('a library skill deleted leaves every project and specialist that had it', () => {
    const { home, a, b } = twoProjects();
    changeProject(home, b, { action: 'copy-from', project: a }, NOW + 2);
    expect(changeProject(home, b, { action: 'delete-skill', id: 'accessibility' }, NOW + 3)).toEqual({
      at: NOW + 3,
      what: 'skill-deleted',
      skill: 'Accessibility',
    });
    for (const key of [a, b]) {
      expect(readProjectTeam(home, key)!.specialists.some((p) => p.skills.includes('accessibility'))).toBe(
        false,
      );
      expect(existsSync(join(projectTeamDir(home, key), 'skills', 'accessibility'))).toBe(false);
    }
    expect(readLibrary(home).library.skills.some((s) => s.id === 'accessibility')).toBe(false);
  });

  it('a skill written on the Team page goes into the library, and a specialist may take it', () => {
    const { home, a } = twoProjects();
    changeProject(
      home,
      a,
      {
        action: 'add-skill',
        id: 'form-checks',
        name: 'Form checks',
        description: 'Checks forms',
        text: 'Look at each field.',
      },
      NOW + 2,
    );
    expect(readLibrary(home).library.skills.at(-1)).toMatchObject({
      id: 'form-checks',
      source: { kind: 'written' },
    });
    changeProject(
      home,
      a,
      { action: 'detach', specialist: 'frontend-react-dev', skill: 'react-typescript' },
      NOW + 3,
    );
    changeProject(
      home,
      a,
      { action: 'attach', specialist: 'frontend-react-dev', skill: 'form-checks' },
      NOW + 4,
    );
    expect(
      readFileSync(join(projectTeamDir(home, a), 'skills', 'form-checks', 'SKILL.md'), 'utf8'),
    ).toContain('Look at each field.');
    expect(() =>
      changeProject(
        home,
        a,
        { action: 'attach', specialist: 'frontend-react-dev', skill: 'nothing' },
        NOW + 5,
      ),
    ).toThrow('no such specialist or skill');
    expect(() =>
      changeProject(
        home,
        a,
        {
          action: 'add-specialist',
          name: 'Tester',
          guild: 'review',
          role: 'Tests',
          preset: 'reads',
          skills: ['nothing'],
        },
        NOW + 6,
      ),
    ).toThrow('no such skill');
  });

  it("the shared notes: each kept or dropped in this project only, the shared team's notes untouched", () => {
    const { home, a } = twoProjects();
    const shared = snapshot(teamDir(home));
    expect(changeProject(home, a, { action: 'note-keep', id: 'AAAAAAAAAAAAAAAA' }, NOW + 2)).toEqual({
      at: NOW + 2,
      what: 'note-kept',
      agent: 'Frontend dev',
    });
    expect(changeProject(home, a, { action: 'note-drop', id: 'BBBBBBBBBBBBBBBB' }, NOW + 3)).toMatchObject({
      what: 'note-dropped',
    });
    expect(readReview(home, a)).toEqual([]);
    const notes = readNotes(projectTeamDir(home, a)).notes;
    expect(notes.frontend.map((n) => n.text)).toEqual(['The counter lives in src/counter.js.']);
    expect(notes.backend).toEqual([]);
    expect(
      readFileSync(join(projectTeamDir(home, a), 'skills', 'notes-frontend', 'SKILL.md'), 'utf8'),
    ).toContain('- The counter lives in src/counter.js.');
    expect(() => changeProject(home, a, { action: 'note-keep', id: 'AAAAAAAAAAAAAAAA' }, NOW + 4)).toThrow(
      'no such note',
    );
    expect(snapshot(teamDir(home))).toEqual(shared);
  });

  it('a project with no team of its own changes nothing', () => {
    const home = homeWithShared();
    expect(() => changeProject(home, 'app-0123456789', { action: 'add-starter' }, NOW)).toThrow(
      'this project has no team of its own',
    );
  });
});

describe('the projects on this PC, and their team files', () => {
  it('lists each project the oldest first, and says whose generated files are older', () => {
    const home = homeWithShared();
    const first = temp('woa-a-');
    giveOwnTeam(home, first, 'shared', NOW);
    giveOwnTeam(home, temp('woa-b-'), 'empty', NOW + 1);
    expect(listProjects(home).map((p) => p.team?.specialists.length)).toEqual([8, 0]);
    expect(teamFilesOf(home, first)).toBe('current');
    expect(teamFilesOf(home, temp('woa-c-'))).toBe('none');
    const key = projectOf(first)!.key;
    const file = join(projectTeamDir(home, key), 'team.json');
    writeFileSync(file, JSON.stringify({ ...JSON.parse(readFileSync(file, 'utf8')), generator: 1 }));
    expect(teamFilesOf(home, first)).toBe('older');
  });

  it("knows v3.9's log entries exactly", () => {
    expect(isChange({ at: 1, what: 'team-given', from: 'shared' })).toBe(true);
    expect(isChange({ at: 1, what: 'team-given', from: 'other' })).toBe(false);
    expect(isChange({ at: 1, what: 'starter-added' })).toBe(true);
    expect(isChange({ at: 1, what: 'team-copied', project: 'secret name' })).toBe(false);
    expect(isChange({ at: 1, what: 'note-kept', agent: 'Reviewer' })).toBe(true);
    expect(isChange({ at: 1, what: 'note-dropped', agent: 'Somebody' })).toBe(false);
  });
});

// v3.10 (docs/v3.10-plan.md): longer texts and descriptions, each library skill's source with its facts, and a
// specialist's skills held to 40,000 characters together, here and in every project that shares a skill.
describe('v3.10: the library rules', () => {
  const library = (source: unknown, more: Record<string, unknown> = {}) => ({
    version: 1,
    skills: [{ id: 'one', name: 'One', description: 'What it is for', source, addedAt: 1, ...more }],
  });
  const GITHUB = {
    kind: 'github',
    owner: 'davila7',
    repo: 'claude-code-templates',
    ref: 'main',
    path: 'cli-tool/components/skills/owasp/SKILL.md',
    license: 'MIT',
  };
  const CLAUDE = {
    kind: 'claude',
    label: 'built-in',
    file: 'synced/org_account/pdf/SKILL.md',
    license: null,
  };

  it('keeps where a skill came from, with its facts, and nothing it does not know', () => {
    for (const source of [
      { kind: 'team' },
      { kind: 'starter' },
      { kind: 'written' },
      { kind: 'pasted', license: null },
      { kind: 'pasted', license: 'Apache-2.0' },
      GITHUB,
      { ...GITHUB, ref: 'a'.repeat(40) },
      { ...GITHUB, owner: 'a-b-c', repo: 'x.y_z-1' },
      CLAUDE,
      { ...CLAUDE, label: 'mine', file: 'my-skill/SKILL.md' },
      { ...CLAUDE, label: 'unlabelled', license: 'Proprietary. LICENSE.txt has complete terms' },
    ])
      expect(libraryProblem(library(source)), JSON.stringify(source)).toBeNull();
    for (const source of [
      { kind: 'written', license: null },
      { kind: 'pasted' },
      { kind: 'pasted', license: 'two\nlines' },
      { kind: 'elsewhere' },
      { ...GITHUB, extra: 1 },
      { ...GITHUB, owner: 'a--b' },
      { ...GITHUB, owner: '-a' },
      { ...GITHUB, owner: 'a'.repeat(40) },
      { ...GITHUB, repo: '..' },
      { ...GITHUB, repo: 'a/b' },
      { ...GITHUB, ref: 'feature/x' },
      { ...GITHUB, path: 'skills/../SKILL.md' },
      { ...GITHUB, path: 'skills/README.md' },
      { ...GITHUB, path: `${'a/'.repeat(10)}SKILL.md` },
      { ...GITHUB, license: 'x'.repeat(201) },
      { ...CLAUDE, label: 'theirs' },
      { ...CLAUDE, file: '../secrets/SKILL.md' },
      { ...CLAUDE, file: 'a/b/c/d/SKILL.md' },
      { ...CLAUDE, file: `a${String.fromCharCode(92)}b/SKILL.md` },
      { ...CLAUDE, file: 'pdf/notes.md' },
    ])
      expect(libraryProblem(library(source)), JSON.stringify(source)).not.toBeNull();
  });

  it('takes a description of 1,024 characters and a text of 20,000, and no more', () => {
    const written = { kind: 'written' };
    expect(libraryProblem(library(written, { description: 'x'.repeat(1024) }))).toBeNull();
    expect(libraryProblem(library(written, { description: 'x'.repeat(1025) }))).not.toBeNull();
    expect(libraryProblem(library(written, { description: 'Use it when: # "anything"' }))).toBeNull();
    expect(MAX_TEXT).toBe(20000);
    expect(textProblem('x'.repeat(20000))).toBeNull();
    expect(textProblem('x'.repeat(20001))).toBe('too long');
  });

  it('a skill the hall checked keeps the source it gives; the page writes only written skills', () => {
    const home = temp('woa-home-');
    const key = giveOwnTeam(home, temp('woa-proj-'), 'empty', NOW).project.key;
    const skill = {
      id: 'owasp',
      name: 'OWASP',
      description: 'Checks for OWASP issues',
      text: 'Read the diff.',
    };
    changeProject(home, key, { action: 'add-skill', ...skill, source: GITHUB as never }, NOW + 1);
    expect(readLibrary(home).library.skills.at(-1)).toEqual({
      id: 'owasp',
      name: 'OWASP',
      description: 'Checks for OWASP issues',
      source: GITHUB,
      addedAt: NOW + 1,
    });
    expect(() =>
      changeProject(
        home,
        key,
        { action: 'add-skill', ...skill, id: 'bad', source: { ...GITHUB, repo: '..' } as never },
        NOW + 2,
      ),
    ).toThrow("skill bad's source");
  });

  describe("a specialist's skills, 40,000 characters together at most", () => {
    /** Two projects, each with a specialist holding four 9,000-character skills: 36,000. A fifth waits in the library. */
    function nearTheCap() {
      const home = homeWithShared();
      const a = giveOwnTeam(home, temp('woa-a-'), 'empty', NOW).project.key;
      const b = giveOwnTeam(home, temp('woa-b-'), 'empty', NOW + 1).project.key;
      const ids = ['big-1', 'big-2', 'big-3', 'big-4', 'big-5'];
      for (const [i, id] of ids.entries()) {
        const text = (i < 4 ? 'a' : 'b').repeat(9000);
        changeProject(
          home,
          a,
          { action: 'add-skill', id, name: `Big ${i + 1}`, description: 'Big', text },
          NOW + 2 + i,
        );
      }
      const specialist = {
        action: 'add-specialist' as const,
        name: 'Packer',
        guild: 'frontend' as const,
        role: 'Packs skills',
        preset: 'reads' as const,
        skills: ids.slice(0, 4),
      };
      changeProject(home, a, specialist, NOW + 10);
      changeProject(home, b, specialist, NOW + 11);
      return { home, a, b };
    }

    it('a fifth skill that would pass 40,000 is refused, naming the specialist, and nothing is written', () => {
      const { home, a } = nearTheCap();
      expect(MAX_SPECIALIST_TEXT).toBe(40000);
      const before = snapshot(join(home, '.world-of-agents'));
      expect(() =>
        changeProject(home, a, { action: 'attach', specialist: 'frontend-packer', skill: 'big-5' }, NOW + 12),
      ).toThrow("the Packer's skills would come to 45,000 characters, over 40,000");
      expect(snapshot(join(home, '.world-of-agents'))).toEqual(before);
    });

    it('a text grown past the cap of a specialist in this project is refused before the library is written', () => {
      const { home, a, b } = nearTheCap();
      // Only this project's specialist has it, so the refusal is this project's own.
      changeProject(home, b, { action: 'detach', specialist: 'frontend-packer', skill: 'big-1' }, NOW + 11);
      const before = snapshot(join(home, '.world-of-agents'));
      const change = {
        action: 'change-skill' as const,
        id: 'big-1',
        name: 'Big 1',
        description: 'Big',
        text: 'c'.repeat(13001),
      };
      expect(() => changeProject(home, a, change, NOW + 12)).toThrow(
        /^the Packer's skills would come to 40,001 characters, over 40,000$/,
      );
      expect(snapshot(join(home, '.world-of-agents'))).toEqual(before);
    });

    it('a text grown in the library past the cap of a specialist in another project is refused, naming it', () => {
      const { home, a, b } = nearTheCap();
      // A project where no specialist has it any more, so only the other project's specialist goes over.
      changeProject(home, a, { action: 'detach', specialist: 'frontend-packer', skill: 'big-1' }, NOW + 12);
      const before = snapshot(join(home, '.world-of-agents'));
      const change = {
        action: 'change-skill' as const,
        id: 'big-1',
        name: 'Big 1',
        description: 'Big',
        text: 'c'.repeat(13001),
      };
      const name = readProject(home, b)!.name;
      expect(() => changeProject(home, a, change, NOW + 13)).toThrow(
        `in ${name}, the Packer's skills would come to 40,001 characters, over 40,000`,
      );
      expect(snapshot(join(home, '.world-of-agents'))).toEqual(before);
      // At the cap exactly, it goes through, everywhere.
      changeProject(home, a, { ...change, text: 'c'.repeat(13000) }, NOW + 14);
      expect(readLibrary(home).texts['big-1']).toHaveLength(13000);
    });
  });
});
