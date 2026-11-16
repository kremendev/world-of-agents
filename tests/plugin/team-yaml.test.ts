// 3.6e (Dima's review, 15 Nov): every frontmatter value that comes from the team's data parses back as exactly that
// string. Unquoted, a role starting with ' or - failed to parse, and Claude Code then loads the agent with every field but
// its name dropped, its tools included (`claude plugin validate`, 2.1.319); & starts an anchor; digits, null, yes and
// true change type. Checked with a real YAML parser under both YAML 1.2 and 1.1 rules (1.1 reads Yes and On as true).
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import {
  buildAgent,
  buildSkill,
  defaults,
  GENERATOR,
  isDescription,
  problem,
  readTexts,
  skillIdOf,
  writeTeam,
  type Team,
} from '../../plugin/team/team.mjs';

/** Lines the name rule allows that YAML would read as something else, or not at all, unquoted. */
const RISKY = [
  "'Quoted' forms",
  '- builds forms',
  '& builds forms',
  ', builds forms',
  '. builds forms',
  '( builds forms',
  '2024',
  '0.5',
  'Yes',
  'No',
  'On',
  'null',
  'true',
  'Ünïcode (2) & more',
  "it's / fine",
];
/** Skill names whose ids, made from them, YAML would read as a number, null or a boolean. */
const RISKY_SKILL_NAMES = ['2024', 'Null', 'Yes', 'True', 'Off'];

const front = (file: string) => /^---\n([\s\S]*?)\n---\n/.exec(file)![1]!;
const VERSIONS = ['1.1', '1.2'] as const;

/** A team holding every risky line as a role and a skill description, and skills with risky ids. */
function riskyTeam(): Team {
  const { team } = defaults();
  const skills = [
    ...RISKY_SKILL_NAMES.map((name) => ({ id: skillIdOf(name), name, description: 'A plain description' })),
    ...RISKY.map((description, i) => ({ id: `risky-${i}`, name: `Risky ${i}`, description })),
  ];
  const guilds = ['frontend', 'backend', 'review'] as const;
  const specialists = RISKY.slice(0, 15).map((role, i) => ({
    id: `${guilds[i % 3]}-risky-${i}`,
    name: `Risky ${i}`,
    role,
    guild: guilds[i % 3]!,
    preset: 'reads' as const,
    on: true,
    skills: i === 0 ? [skillIdOf(RISKY_SKILL_NAMES[0]!)] : RISKY_SKILL_NAMES.slice(0, 2).map(skillIdOf),
  }));
  return { ...team, generator: GENERATOR, specialists, skills };
}

describe('the frontmatter parses back as exactly the team data (3.6e)', () => {
  const team = riskyTeam();

  it('the name rule allows every risky line, so the team is a team', () => {
    expect(RISKY_SKILL_NAMES.map(skillIdOf)).toEqual(['2024', 'null', 'yes', 'true', 'off']);
    expect(problem(team)).toBeNull();
  });

  it.each(VERSIONS)('agents, under YAML %s', (version) => {
    for (const p of team.specialists) {
      const values = parse(front(buildAgent(p)), { version }) as Record<string, unknown>;
      expect(values, p.role).toEqual({
        name: p.id,
        description: `${p.role}. A specialist in the World of Agents ${p.guild.charAt(0).toUpperCase()}${p.guild.slice(1)} guild, started by its guild lead.`,
        model: 'sonnet',
        tools: 'Read, Grep, Glob',
        skills: p.skills.join(', '),
      });
    }
  });

  it.each(VERSIONS)('skills, under YAML %s', (version) => {
    for (const s of team.skills) {
      const values = parse(front(buildSkill(s, 'Text.')), { version }) as Record<string, unknown>;
      expect(values, s.description).toEqual({ name: s.id, description: s.description });
    }
  });

  it('a lone skill whose id is digits stays a string in the skills line', () => {
    const p = team.specialists[0]!;
    expect(p.skills).toEqual(['2024']);
    expect((parse(front(buildAgent(p))) as { skills: unknown }).skills).toBe('2024');
  });
});

describe('a team written by generator 1 is still read (3.6e)', () => {
  const homes: string[] = [];
  afterEach(() => {
    for (const dir of homes.splice(0)) rmSync(dir, { recursive: true, force: true });
  });

  it("readTexts takes generator 1's unquoted skill files, and the next write quotes them", () => {
    const dir = mkdtempSync(join(tmpdir(), 'woa-team-yaml-'));
    homes.push(dir);
    const { team, texts } = defaults();
    writeTeam(dir, team, texts);
    for (const s of team.skills) {
      writeFileSync(
        join(dir, 'skills', s.id, 'SKILL.md'),
        `---\nname: ${s.id}\ndescription: ${s.description}\n---\n\n${texts[s.id]!.trim()}\n`,
      );
    }
    const read = readTexts(dir, team);
    for (const s of team.skills) expect(read[s.id], s.id).toBe(texts[s.id]!.trim());
    writeTeam(dir, team, read);
    const accessibility = readFileSync(join(dir, 'skills', 'accessibility', 'SKILL.md'), 'utf8');
    expect(accessibility.startsWith('---\nname: "accessibility"\ndescription: "')).toBe(true);
  });

  it('still refuses a skill file that neither generator wrote', () => {
    const dir = mkdtempSync(join(tmpdir(), 'woa-team-yaml-'));
    homes.push(dir);
    const { team, texts } = defaults();
    writeTeam(dir, team, texts);
    writeFileSync(
      join(dir, 'skills', 'accessibility', 'SKILL.md'),
      '---\nname: accessibility\nhooks: x\n---\n\nx\n',
    );
    expect(() => readTexts(dir, team)).toThrow('not as this module wrote it');
  });
});

// v3.10: a library skill's description is any one line of printable text up to 1,024 characters (Anthropic's skill
// format), so it may hold everything YAML treats as syntax. Quoted, each parses back as exactly itself.
describe('v3.10: descriptions with YAML syntax in them', () => {
  const BS = String.fromCharCode(92);
  const WILD = [
    'Use it when: the user asks # about forms',
    '"Quoted" and \'single\' and `ticks`',
    `A back${BS}slash, ${BS}n and ${BS}u0041 as text`,
    '--- not a header',
    '{ not: a map } and [not, a list]',
    '*alias &anchor !tag %directive @at |pipe >fold',
    '- dash first',
    '? question first',
    'Ends in a colon:',
    'Yes',
    '0x1F',
    'Ünïcode, 漢字 and 🙂',
    'x'.repeat(1024),
  ];

  it.each(WILD)('%s', (description) => {
    expect(isDescription(description)).toBe(true);
    const file = buildSkill({ id: 'wild', name: 'Wild', description }, 'Text.');
    for (const version of VERSIONS) {
      expect(parse(front(file), { version, uniqueKeys: true })).toEqual({ name: 'wild', description });
    }
  });

  it('refuses what is not one printable line: a break, a tab, a separator, a hidden character, a lone half', () => {
    for (const description of [
      'two\nlines',
      'a\ttab',
      `line${String.fromCharCode(0x2028)}separator`,
      `para${String.fromCharCode(0x2029)}separator`,
      `next${String.fromCharCode(0x85)}line`,
      `zero${String.fromCodePoint(0x200b)}width`,
      `half ${String.fromCharCode(0xdc00)} pair`,
      ' padded',
      '',
      'x'.repeat(1025),
    ])
      expect(isDescription(description), JSON.stringify(description)).toBe(false);
  });
});
