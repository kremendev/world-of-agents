import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, sep } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { report, INSTALL } from '../plugin/skills/setup-team/team-setup.mjs';
import {
  applyChange,
  buildAgent,
  defaults,
  GENERATOR,
  init,
  readTeam,
  readTexts,
  teamDir,
  writeTeam,
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

describe('team-setup.mjs', () => {
  const { team, texts } = defaults();

  it('shows what it would create, says no agent starts until then, and writes nothing', () => {
    const h = home();
    const lines = report(h, false);
    expect(lines[0]).toBe(
      `It would create ~/.world-of-agents/team with 8 specialists and ${team.skills.length} skills:`,
    );
    expect(lines).toContain(
      '  Security warden (Review): Reads changes for security issues and reports them, changing nothing',
    );
    expect(lines).toContain(
      'Until the team exists, the guard lets no agent start. Nothing has been written.',
    );
    expect(readdirSync(h)).toEqual([]);
  });

  it('creates it on --write, says how to install it, and the next run changes nothing', () => {
    const h = home();
    const created = report(h, true);
    expect(created[0]).toMatch(/^Created ~\/\.world-of-agents\/team: 8 specialists/);
    expect(created.slice(-INSTALL.length)).toEqual(INSTALL);
    const before = readFileSync(join(teamDir(h), 'team.json'), 'utf8');
    expect(report(h, true)[0]).toMatch(/^The team is already there: 8 specialists/);
    expect(readFileSync(join(teamDir(h), 'team.json'), 'utf8')).toBe(before);
  });

  it('stops at a team.json it cannot read, and changes nothing', () => {
    const h = home();
    report(h, true);
    writeFileSync(join(teamDir(h), 'team.json'), '{broken');
    expect(report(h, true)[0]).toMatch(/^Stopped: /);
    expect(readFileSync(join(teamDir(h), 'team.json'), 'utf8')).toBe('{broken');
  });

  it("never prints a skill's text", () => {
    const h = home();
    const printed = [...report(h, false), ...report(h, true), ...report(h, false)].join('\n');
    for (const text of Object.values(texts)) expect(printed).not.toContain(text.split('\n')[0]!.slice(2, 40));
  });
});

describe('team-setup.mjs refreshes an older team (v3.6d)', () => {
  /** Every file under the team folder, by its path, with its text. */
  const files = (h: string) => {
    const out = new Map<string, string>();
    const walk = (dir: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) walk(path);
        else
          out.set(
            path
              .slice(teamDir(h).length + 1)
              .split(sep)
              .join('/'),
            readFileSync(path, 'utf8'),
          );
      }
    };
    walk(teamDir(h));
    return out;
  };

  /** A team of Dima's own: every field planted, then its generated files made stale and its generator older. */
  function planted() {
    const h = home();
    init(h);
    const dir = teamDir(h);
    let { team, texts } = { team: readTeam(h)!, texts: readTexts(dir, readTeam(h)!) };
    const at = 1;
    for (const change of [
      {
        action: 'add-skill',
        id: 'release-notes',
        name: 'Release notes',
        description: 'How to write one',
        text: 'Mine.\nAll of it.',
      },
      {
        action: 'add-specialist',
        name: 'Form builder',
        guild: 'frontend',
        role: 'Builds forms',
        preset: 'edits',
        skills: ['release-notes'],
      },
      { action: 'switch', id: 'design-motion-designer', on: false },
      { action: 'detach', specialist: 'review-security-warden', skill: 'owasp-checks' },
      {
        action: 'change-skill',
        id: 'accessibility',
        name: 'Accessibility',
        description: 'Mine too',
        text: 'My own words.',
      },
    ] as const) {
      ({ team, texts } = applyChange(team, texts, change as never, at));
    }
    writeTeam(dir, team, texts);
    writeFileSync(join(dir, 'changes.json'), '[]\n');
    writeFileSync(
      join(dir, 'agents', 'frontend-react-dev.md'),
      '---\nname: frontend-react-dev\n---\n\nAn old prompt.\n',
    );
    writeFileSync(
      join(dir, 'team.json'),
      JSON.stringify({ ...JSON.parse(readFileSync(join(dir, 'team.json'), 'utf8')), generator: 0 }),
    );
    return h;
  }

  it('the dry run says so and writes nothing', () => {
    const h = planted();
    const before = files(h);
    const lines = report(h, false);
    expect(lines[0]).toBe(
      'The team is there: 9 specialists and 15 skills, its specialist files from an older plugin.',
    );
    expect(lines.join('\n')).toContain('type /world-of-agents:setup-team-write');
    expect(files(h)).toEqual(before);
  });

  it('--write rewrites only the generated files: every specialist, skill, switch, assignment and text as it was', () => {
    const h = planted();
    const before = readTeam(h)!;
    const textsBefore = readTexts(teamDir(h), before);
    const filesBefore = files(h);
    const lines = report(h, true);
    expect(lines[0]).toBe(
      "Refreshed the team's files for this plugin: 9 specialists and 15 skills, each as it was.",
    );
    expect(lines.at(-1)).toContain('/reload-plugins');
    const after = readTeam(h)!;
    expect(after).toEqual({ ...before, generator: GENERATOR });
    expect(readTexts(teamDir(h), after)).toEqual(textsBefore);
    for (const p of after.specialists)
      expect(readFileSync(join(teamDir(h), 'agents', `${p.id}.md`), 'utf8'), p.id).toBe(buildAgent(p));
    const filesAfter = files(h);
    const touched = [...filesAfter.keys()].filter((f) => filesAfter.get(f) !== filesBefore.get(f)).sort();
    expect(touched).toEqual(['agents/frontend-react-dev.md', 'team.json']);
    // Once fresh, a second --write changes nothing.
    expect(report(h, true)[0]).toMatch(/^The team is already there: /);
    expect(files(h)).toEqual(filesAfter);
  });

  it('upgrades a version 1 team as v3.4 and v3.5 wrote it, every tool kept', () => {
    const h = home();
    init(h);
    const dir = teamDir(h);
    const v1 = {
      version: 1,
      specialists: defaults().team.specialists.map(({ id, name, role, guild, preset, skills }) => ({
        id,
        name,
        role,
        guild,
        kind: preset === 'reads' ? 'reads' : 'edits',
        skills,
      })),
      skills: defaults().team.skills,
    };
    writeFileSync(join(dir, 'team.json'), JSON.stringify(v1));
    expect(report(h, true)[0]).toMatch(/^Refreshed the team's files/);
    expect(JSON.parse(readFileSync(join(dir, 'team.json'), 'utf8'))).toEqual(defaults().team);
  });

  it('stops at a skill file changed by hand, and changes nothing', () => {
    const h = planted();
    writeFileSync(
      join(teamDir(h), 'skills', 'release-notes', 'SKILL.md'),
      '---\nname: release-notes\nhooks: x\n---\n\nx\n',
    );
    const before = files(h);
    expect(report(h, true)).toEqual([
      'Stopped: a skill file in ~/.world-of-agents/team was changed by hand, so a refresh would lose that text.',
      'Nothing changed.',
    ]);
    expect(files(h)).toEqual(before);
  });

  it('leaves a team from a newer plugin alone', () => {
    const h = home();
    init(h);
    const file = join(teamDir(h), 'team.json');
    writeFileSync(
      file,
      JSON.stringify({ ...JSON.parse(readFileSync(file, 'utf8')), generator: GENERATOR + 1 }),
    );
    const before = files(h);
    expect(report(h, true)[0]).toMatch(/^The team is already there: .*Nothing changed\.$/);
    expect(files(h)).toEqual(before);
  });
});
