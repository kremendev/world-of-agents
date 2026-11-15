// The team editor's data (v3.4c, docs/v3.4-plan.md, T8): what the hall's page may send to change the team's skills, what
// the hall sends back, and the one-time key. The hall checks every request with these before plugin/team/team.mjs checks
// the result again; the page checks every answer. The rules mirror team.mjs's (team.test.ts holds the two in step).
import * as z from 'zod';
// Its z.config({ jitless: true }): the Content-Security-Policy forbids the speed-up's new Function.
import '../events/schema';

/** A one-time key and a session id: 32 random bytes as base64url. */
export const KEY = /^[A-Za-z0-9_-]{43}$/;
export const SKILL_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const SPECIALIST_ID = /^(design|frontend|backend|review)-[a-z0-9]+(?:-[a-z0-9]+)*$/;
/** A name, role or description: it goes into YAML frontmatter, so no colon, no line break, no #. */
export const LINE = /^[\p{L}\p{N} .,()'&/-]+$/u;
export const MAX_TEXT = 8000;
export const MAX_PRELOADED = 5;
export const GUILDS = ['design', 'frontend', 'backend', 'review'] as const;
/** What a specialist may do (v3.6, E7). The third is not for the Design guild. */
export const PRESETS = ['reads', 'edits', 'edits-and-checks'] as const;
export const MAX_PER_GUILD = 5;

const line = (max: number) =>
  z
    .string()
    .min(1)
    .max(max)
    .regex(LINE)
    .refine((s) => s.trim() === s);
const skillId = z.string().max(48).regex(SKILL_ID);
const specialistId = z.string().max(48).regex(SPECIALIST_ID);
const skillFields = {
  id: skillId,
  name: line(60),
  description: line(200),
  text: z.string().min(1).max(MAX_TEXT),
};

/** {"key": "..."}: the body of POST /api/key (from hall-key.mjs) and POST /api/session (from the page). */
export const keyBodySchema = z.strictObject({ key: z.string().regex(KEY) });

const preset = z.enum(PRESETS);
const preloaded = z.array(skillId).max(MAX_PRELOADED);

/**
 * One change, the body of POST /api/team: skills (v3.4c) and specialists (v3.6). A new specialist sends no id: team.mjs
 * makes it from the guild and the name. Its name and guild never change after that.
 */
export const teamChangeSchema = z.discriminatedUnion('action', [
  z.strictObject({ action: z.literal('add-skill'), ...skillFields }),
  z.strictObject({ action: z.literal('change-skill'), ...skillFields }),
  z.strictObject({ action: z.literal('delete-skill'), id: skillId }),
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
const skillSchema = z.strictObject({ id: skillId, name: line(60), description: line(200) });

/** The team as GET and POST /api/team answer: the team and each skill's text. */
export const teamViewSchema = z.strictObject({
  team: z.strictObject({
    version: z.literal(2),
    generator: z.number().int().min(0).max(Number.MAX_SAFE_INTEGER),
    specialists: z.array(specialistSchema).max(GUILDS.length * MAX_PER_GUILD),
    skills: z.array(skillSchema).max(64),
  }),
  texts: z.record(skillId, z.string().max(MAX_TEXT)),
});
export type TeamView = z.infer<typeof teamViewSchema>;
export type TeamSpecialist = z.infer<typeof specialistSchema>;
export type TeamSkill = z.infer<typeof skillSchema>;

/** A hall answer that went wrong, as the page reads it: a fixed word, or nothing it knows. */
export const teamErrorSchema = z.strictObject({ error: z.string().max(300) });
