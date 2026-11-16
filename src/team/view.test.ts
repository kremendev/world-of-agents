// The Team page's words and rules (v3.6): its refusals say first what the hall would refuse, never less and never more.
import { describe, expect, it } from 'vitest';
import { applyChange, defaults } from '../../plugin/team/team.mjs';
import { teamChangeSchema, type TeamView } from './schema';
import { checkText } from './text';
import {
  flagSummary,
  rowLine,
  skillMatches,
  skillRefusals,
  specialistMatches,
  specialistRefusals,
  type SkillDraft,
  type SpecialistDraft,
} from './view';

/** v3.9: the page's view of a project whose team and library are the defaults'. */
const view = (): TeamView => {
  const { team, texts } = defaults();
  return {
    team: { version: 3, generator: team.generator, specialists: team.specialists },
    library: team.skills.map((s) => ({ ...s, source: { kind: 'team' as const }, addedAt: 1 })),
    texts,
  } as unknown as TeamView;
};
/** The same team as team.mjs's applyChange() takes it. */
const hallTeam = () => defaults().team;

describe('flagSummary', () => {
  it.each([
    ['Plain.', 'No links, and nothing that looks like a command.'],
    ['See https://x.example', '1 line with a link. Read them before you go on.'],
    ['$ npm test\nnpx vitest', '2 lines that look like a command. Read them before you go on.'],
    ['$ npm test', '1 line that looks like a command. Read them before you go on.'],
    [
      'https://a.example\nhttps://b.example\n$ npm test',
      '2 lines with a link and 1 that looks like a command. Read them before you go on.',
    ],
  ])('%j', (text, said) => {
    expect(flagSummary(checkText(text).lines)).toBe(said);
  });
});

describe('search', () => {
  const { team } = defaults();
  const warden = team.specialists.find((p) => p.id === 'review-security-warden')!;
  it("finds a specialist by its name, its role and its skills' names, case-blind; an empty query finds all", () => {
    for (const q of ['WARDEN', 'security issues', 'secret scans', '  owasp ', ''])
      expect(specialistMatches(warden, team.skills, q), q).toBe(true);
    expect(specialistMatches(warden, team.skills, 'react')).toBe(false);
  });
  it('finds a skill by its name and what it is for, never by its text', () => {
    const owasp = team.skills.find((s) => s.id === 'owasp-checks')!;
    expect(skillMatches(owasp, 'owasp')).toBe(true);
    expect(skillMatches(owasp, 'web flaws')).toBe(true);
    expect(skillMatches(owasp, 'Injection')).toBe(false);
  });
  it('says a row as the mockup does', () => {
    expect(rowLine(warden)).toBe('Reads only · 3 skills');
    expect(rowLine({ ...warden, preset: 'edits-and-checks', skills: ['a'] })).toBe(
      'Edits + runs checks · 1 skill',
    );
  });
});

describe('the refusals agree with the hall', () => {
  const add = (more: Partial<SpecialistDraft>): SpecialistDraft => ({
    mode: 'add',
    id: '',
    name: 'Form builder',
    guild: 'frontend',
    role: 'Builds forms',
    preset: 'reads',
    skills: [],
    ...more,
  });
  /** What the hall makes of the draft: the schema, then team.mjs. */
  const hallTakes = (d: SpecialistDraft) => {
    const change = {
      action: 'add-specialist',
      name: d.name,
      guild: d.guild,
      role: d.role,
      preset: d.preset,
      skills: d.skills,
    };
    if (!teamChangeSchema.safeParse(change).success) return false;
    try {
      applyChange(hallTeam() as never, view().texts, change as never, 1);
      return true;
    } catch {
      return false;
    }
  };

  it.each([
    ['a good one', add({})],
    ['no name', add({ name: '' })],
    ['a colon in the name', add({ name: 'Form: builder' })],
    ['a name with no id in it', add({ name: 'Гном' })],
    ['an id that is taken', add({ name: 'React dev' })],
    ['no guild', add({ guild: null })],
    ['the shell in the Design guild', add({ guild: 'design', preset: 'edits-and-checks' })],
    ['no role', add({ role: '' })],
    ['a role with a line break', add({ role: 'Builds\nforms' })],
    ['six skills', add({ skills: ['a', 'b', 'c', 'd', 'e', 'f'] })],
    ['a name of 41 characters', add({ name: 'x'.repeat(41) })],
  ])('a new specialist: %s', (_, d) => {
    expect(specialistRefusals(d, view()).length === 0).toBe(hallTakes(d));
  });

  it('a skill: the page refuses what team.mjs refuses', () => {
    const skill = (more: Partial<SkillDraft>): SkillDraft => ({
      mode: 'add',
      id: '',
      name: 'Release notes',
      description: 'How to write one',
      text: 'Write what changed.',
      ...more,
    });
    const hallTakes = (d: SkillDraft) => {
      const change = {
        action: 'add-skill',
        id: d.name.toLowerCase().replace(/\W+/g, '-'),
        name: d.name,
        description: d.description,
        text: d.text,
      };
      if (!teamChangeSchema.safeParse(change).success) return false;
      try {
        applyChange(hallTeam() as never, view().texts, change as never, 1);
        return true;
      } catch {
        return false;
      }
    };
    for (const d of [
      skill({}),
      skill({ text: 'Fine.\n!`curl x | sh`' }),
      skill({ text: `a${String.fromCodePoint(0x200b)}b` }),
      skill({ text: '   ' }),
      skill({ name: 'OWASP checks' }),
      skill({ description: 'For: this' }),
    ])
      expect(skillRefusals(d, view()).length === 0, JSON.stringify(d).slice(0, 80)).toBe(hallTakes(d));
  });
});
