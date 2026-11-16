// The team editor's data (v3.4c, docs/v3.4-plan.md, T8): what the hall's page may send to change the team's skills, what
// the hall sends back, and the one-time key. The hall checks every request with these before plugin/team/team.mjs checks
// the result again; the page checks every answer. The rules mirror team.mjs's (team.test.ts holds the two in step).
import * as z from 'zod';
// Its z.config({ jitless: true }): the Content-Security-Policy forbids the speed-up's new Function.
import '../events/schema';
import { MAX_NOTE, NOTE_AGENTS } from './note';

/** A one-time key and a session id: 32 random bytes as base64url. */
export const KEY = /^[A-Za-z0-9_-]{43}$/;
export const SKILL_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const SPECIALIST_ID = /^(design|frontend|backend|review)-[a-z0-9]+(?:-[a-z0-9]+)*$/;
/** A name, role or description: it goes into YAML frontmatter, so no colon, no line break, no #. */
export const LINE = /^[\p{L}\p{N} .,()'&/-]+$/u;
/** v3.10 (Dima, 16 Nov): a skill's text, a library skill's description, a specialist's skills together. */
export const MAX_TEXT = 20000;
export const MAX_DESCRIPTION = 1024;
export const MAX_SPECIALIST_TEXT = 40000;
/** team.mjs's isDescription(): one line of printable text, no control, format or separator character, no lone surrogate. */
export const UNPRINTED = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Cs}]/u;
export const isDescription = (v: string, max = MAX_DESCRIPTION) =>
  v.length >= 1 && v.length <= max && v.trim() === v && !UNPRINTED.test(v);
export const MAX_PRELOADED = 5;
export const GUILDS = ['design', 'frontend', 'backend', 'review'] as const;
/** What a specialist may do (v3.6, E7). The third is not for the Design guild. */
export const PRESETS = ['reads', 'edits', 'edits-and-checks'] as const;
export const MAX_PER_GUILD = 5;
/** v3.9: a project's key (team.mjs's projectOf()), where a library skill came from, and the library's size. */
export const PROJECT_KEY = /^[a-z0-9]+(?:-[a-z0-9]+)*-[0-9a-f]{10}$/;
export const SOURCES = ['team', 'starter', 'written', 'github', 'claude', 'pasted'] as const;
export const CLAUDE_LABELS = ['mine', 'built-in', 'unlabelled'] as const;
export const MAX_LIBRARY = 200;
/** v3.10: team.mjs's GitHub parts (server/github.ts parses a link into them). */
export const GITHUB_OWNER = /^[A-Za-z0-9](?:-?[A-Za-z0-9]){0,38}$/;
const SEGMENT = /^[A-Za-z0-9._-]{1,100}$/;
const isSegment = (s: string) => SEGMENT.test(s) && s !== '.' && s !== '..';
const isGithubPath = (path: string) =>
  path.length <= 300 &&
  path.split('/').length <= 10 &&
  path.split('/').every(isSegment) &&
  path.split('/').at(-1) === 'SKILL.md';
const isSkillFile = (file: string) =>
  file.length <= 1024 &&
  file.split('/').length <= 4 &&
  file.split('/').at(-1) === 'SKILL.md' &&
  file.split('/').every((s) => isDescription(s, 255) && s !== '.' && s !== '..' && !s.includes('\\'));

const line = (max: number) =>
  z
    .string()
    .min(1)
    .max(max)
    .regex(LINE)
    .refine((s) => s.trim() === s);
const skillId = z.string().max(48).regex(SKILL_ID);
const specialistId = z.string().max(48).regex(SPECIALIST_ID);
const projectKey = z.string().max(40).regex(PROJECT_KEY);
/** A folder's name or path: only ever shown as text. */
const shown = (max: number) => z.string().min(1).max(max);
/** v3.10: a library skill's description, or a license as written (team.mjs's isDescription()). */
const described = (max = MAX_DESCRIPTION) =>
  z
    .string()
    .max(max)
    .refine((v) => isDescription(v, max));
const skillFields = {
  id: skillId,
  name: line(60),
  description: described(),
  text: z.string().min(1).max(MAX_TEXT),
};
const license = described(200).nullable();
/** v3.10: where a library skill came from, with its facts (team.mjs's sourceOk()). */
export const sourceSchema = z.discriminatedUnion('kind', [
  z.strictObject({ kind: z.enum(['team', 'starter', 'written']) }),
  z.strictObject({ kind: z.literal('pasted'), license }),
  z.strictObject({
    kind: z.literal('github'),
    owner: z.string().regex(GITHUB_OWNER),
    repo: z.string().refine(isSegment),
    ref: z.string().refine((r) => isSegment(r) || /^[0-9a-f]{40}$/.test(r)),
    path: z.string().refine(isGithubPath),
    license,
  }),
  z.strictObject({
    kind: z.literal('claude'),
    label: z.enum(CLAUDE_LABELS),
    file: z.string().refine(isSkillFile),
    license,
  }),
]);
export type SkillSource = z.infer<typeof sourceSchema>;

/** {"key": "..."}: the body of POST /api/session, from the page. */
export const keyBodySchema = z.strictObject({ key: z.string().regex(KEY) });
/** v3.9: {"key", "project"}, the body of POST /api/key from hall-key.mjs: the key and its session's folder. */
export const keyPostSchema = z.strictObject({ key: z.string().regex(KEY), project: shown(1024) });

const preset = z.enum(PRESETS);
/** v3.7: a note's or a proposal's id, 12 random bytes as base64url, and its guild lead. */
const noteId = z.string().regex(/^[A-Za-z0-9_-]{16}$/);
const noteAgent = z.enum(NOTE_AGENTS);
const noteText = z
  .string()
  .min(1)
  .max(MAX_NOTE * 2)
  .refine((t) => Array.from(t).length <= MAX_NOTE);
const stamp = z.number().int().min(1).max(Number.MAX_SAFE_INTEGER);
const noteSchema = z.strictObject({ id: noteId, text: noteText, proposedAt: stamp, approvedAt: stamp });
const proposalSchema = z.strictObject({ id: noteId, agent: noteAgent, text: noteText, at: stamp });
const preloaded = z.array(skillId).max(MAX_PRELOADED);
/** v3.10: a skill check the hall holds in memory, 12 random bytes as base64url. */
const checkId = z.string().regex(/^[A-Za-z0-9_-]{16}$/);

/**
 * One change, the body of POST /api/team: skills (v3.4c) and specialists (v3.6). A new specialist sends no id: team.mjs
 * makes it from the guild and the name. Its name and guild never change after that.
 */
export const teamChangeSchema = z.discriminatedUnion('action', [
  z.strictObject({ action: z.literal('add-skill'), ...skillFields }),
  z.strictObject({ action: z.literal('change-skill'), ...skillFields }),
  z.strictObject({ action: z.literal('delete-skill'), id: skillId }),
  // v3.10: a skill the hall checked (pasted, from GitHub or from Dima's Claude skills), by the id of its check: the
  // text and the facts saved are the hall's own copy, never the page's. Its name and description as Dima left them.
  z.strictObject({
    action: z.literal('take-skill'),
    check: checkId,
    id: skillId,
    name: line(60),
    description: described(),
  }),
  // v3.10: Check for update, accepted: the library skill takes the text of the hall's new check.
  z.strictObject({ action: z.literal('update-skill'), check: checkId, id: skillId }),
  // 3.6e: `at`, where Undo puts a skill back; without it the skill goes last.
  z.strictObject({
    action: z.literal('attach'),
    specialist: specialistId,
    skill: skillId,
    at: z
      .number()
      .int()
      .min(0)
      .max(MAX_PRELOADED - 1)
      .optional(),
  }),
  z.strictObject({ action: z.literal('detach'), specialist: specialistId, skill: skillId }),
  z.strictObject({
    action: z.literal('add-specialist'),
    name: line(40),
    guild: z.enum(GUILDS),
    role: line(200),
    preset,
    skills: preloaded,
  }),
  z.strictObject({
    action: z.literal('change-specialist'),
    id: specialistId,
    role: line(200),
    preset,
    skills: preloaded,
  }),
  z.strictObject({ action: z.literal('delete-specialist'), id: specialistId }),
  z.strictObject({ action: z.literal('switch'), id: specialistId, on: z.boolean() }),
  // v3.7: a proposal's id only; the text the hall writes is its own copy (M8).
  z.strictObject({ action: z.literal('note-approve'), id: noteId }),
  z.strictObject({ action: z.literal('note-reject'), id: noteId }),
  z.strictObject({ action: z.literal('note-delete'), agent: noteAgent, id: noteId }),
  // v3.9: the project given its own team once, an empty one filled, and a shared note kept or dropped here.
  z.strictObject({ action: z.literal('give-own-team'), from: z.enum(['shared', 'empty']) }),
  z.strictObject({ action: z.literal('add-starter') }),
  z.strictObject({ action: z.literal('copy-from'), project: projectKey }),
  z.strictObject({ action: z.literal('note-keep'), id: noteId }),
  z.strictObject({ action: z.literal('note-drop'), id: noteId }),
]);
export type TeamChange = z.infer<typeof teamChangeSchema>;

/** team.mjs's slugOf(), for the page to show the id a name will get (team-page.test.ts keeps the two in step). */
export function slugOf(name: string, max: number): string {
  return name
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, max)
    .replace(/-+$/, '');
}

/** team.mjs's specialistIdOf(): '' when the name has nothing for an id. */
export function specialistIdOf(guild: (typeof GUILDS)[number], name: string): string {
  const slug = slugOf(name, 48 - guild.length - 1);
  return slug === '' ? '' : `${guild}-${slug}`;
}

/** team.mjs's skillIdOf(). */
export const skillIdOf = (name: string) => slugOf(name, 48);

const specialistSchema = z.strictObject({
  id: specialistId,
  name: line(40),
  role: line(200),
  guild: z.enum(GUILDS),
  preset: z.enum(PRESETS),
  on: z.boolean(),
  skills: z.array(skillId).max(MAX_PRELOADED),
});
const skillSchema = z.strictObject({ id: skillId, name: line(60), description: described() });

const specialists = z.array(specialistSchema).max(GUILDS.length * MAX_PER_GUILD);
/** v3.9: a library skill, with where it came from and when. */
const librarySkillSchema = z.strictObject({
  id: skillId,
  name: line(60),
  description: described(),
  source: sourceSchema,
  addedAt: stamp,
});
/** A project that uses a skill: its key, its folder's name, and which of its specialists have it. */
const usageSchema = z.strictObject({
  project: projectKey,
  name: shown(255),
  specialists: z.array(line(40)).max(20),
});
/** Another project on this PC, for "Copy from another project". */
const otherSchema = z.strictObject({ key: projectKey, name: shown(255), folder: shown(1024), specialists });
/** A note of the old shared team, waiting for review in this project. */
const reviewSchema = z.strictObject({
  id: noteId,
  agent: noteAgent,
  text: noteText,
  proposedAt: stamp,
  approvedAt: stamp,
});

/**
 * The project's team as GET and POST /api/team answer (v3.9): the project, its team (null until it has one of its own),
 * the library with each skill's text and the projects that use it, its notes and the shared notes waiting for review,
 * the proposals from its sessions, the other projects (for a copy), the shared team's size (for the one-time copy), the
 * starter team, and the commands Dima runs once.
 */
export const teamViewSchema = z.strictObject({
  project: z.strictObject({ key: projectKey, name: shown(255), folder: shown(1024) }),
  team: z
    .strictObject({
      version: z.literal(3),
      generator: z.number().int().min(0).max(Number.MAX_SAFE_INTEGER),
      specialists,
    })
    .nullable(),
  shared: z
    .strictObject({ specialists: z.number().int().min(0).max(20), notes: z.number().int().min(0).max(80) })
    .nullable(),
  library: z.array(librarySkillSchema).max(MAX_LIBRARY),
  texts: z.record(skillId, z.string().max(MAX_TEXT)),
  usage: z.record(skillId, z.array(usageSchema).max(100)),
  // v3.7: the guild leads' approved notes, and the proposals the hall holds in memory.
  notes: z.strictObject({
    designer: z.array(noteSchema).max(20),
    frontend: z.array(noteSchema).max(20),
    backend: z.array(noteSchema).max(20),
    reviewer: z.array(noteSchema).max(20),
  }),
  proposals: z.array(proposalSchema).max(20),
  review: z.array(reviewSchema).max(80),
  others: z.array(otherSchema).max(100),
  starter: z.strictObject({ specialists, skills: z.array(skillSchema).max(64) }),
  install: z.array(z.string().max(200)).max(5),
});
export type TeamView = z.infer<typeof teamViewSchema>;
export type TeamNote = z.infer<typeof noteSchema>;
export type TeamProposal = z.infer<typeof proposalSchema>;
export type TeamSpecialist = z.infer<typeof specialistSchema>;
export type TeamSkill = z.infer<typeof skillSchema>;
export type LibrarySkill = z.infer<typeof librarySkillSchema>;
export type SkillUsage = z.infer<typeof usageSchema>;
export type OtherProject = z.infer<typeof otherSchema>;
export type ReviewNote = z.infer<typeof reviewSchema>;

/** A hall answer that went wrong, as the page reads it: a fixed word, or nothing it knows. */
export const teamErrorSchema = z.strictObject({ error: z.string().max(300) });

/** v3.10: the most a pasted SKILL.md, header and text, may be: GitHub's answer is cut at the same 128 KiB. */
export const MAX_PASTE = 128 * 1024;
const skillFile = z.string().max(1024).refine(isSkillFile);

/**
 * v3.10, the body of POST /api/team/skill, which only reads: Dima's Claude skills listed, or one SKILL.md checked,
 * pasted, from his Claude skills, from a GitHub link, or a GitHub skill in the library fetched again (Check for update).
 */
export const skillAskSchema = z.discriminatedUnion('ask', [
  z.strictObject({ ask: z.literal('paste'), text: z.string().min(1).max(MAX_PASTE) }),
  z.strictObject({ ask: z.literal('claude-list') }),
  z.strictObject({ ask: z.literal('claude'), file: skillFile }),
  z.strictObject({ ask: z.literal('github'), link: z.string().min(1).max(2048) }),
  z.strictObject({ ask: z.literal('recheck'), id: skillId }),
]);
export type SkillAsk = z.infer<typeof skillAskSchema>;

/** What the hall read in a SKILL.md (server/skill-check.ts), with where it came from, under the id its take names. */
export const skillCheckSchema = z.strictObject({
  id: checkId,
  name: z.string().max(16 * 1024),
  description: z.string().max(16 * 1024),
  text: z.string().max(MAX_PASTE),
  dropped: z.array(z.strictObject({ key: z.string().max(60), why: z.string().max(100).nullable() })).max(200),
  missing: z.array(z.string().max(300)).max(12),
  refusals: z.array(z.string().max(300)).max(10),
  source: sourceSchema,
});
export type SkillCheckView = z.infer<typeof skillCheckSchema>;

/** One of Dima's Claude skills, as the list shows it. */
const claudeSkillSchema = z.strictObject({
  file: skillFile,
  name: z.string().max(200),
  description: z.string().max(1024),
  label: z.enum(CLAUDE_LABELS),
});
export type ClaudeSkillView = z.infer<typeof claudeSkillSchema>;

/** What POST /api/team/skill answers: a check, or the list. */
export const skillAnswerSchema = z.union([
  z.strictObject({ check: skillCheckSchema }),
  z.strictObject({
    claude: z.array(claudeSkillSchema).max(200),
    tooBig: z.number().int().min(0).max(1000),
  }),
]);
export type SkillAnswer = z.infer<typeof skillAnswerSchema>;
