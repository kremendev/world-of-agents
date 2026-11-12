import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { report, INSTALL } from '../plugin/skills/setup-team/team-setup.mjs';
import { defaults, teamDir } from '../plugin/team/team.mjs';

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
