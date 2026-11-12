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

/** One change, the body of POST /api/team: skills only (specialists wait for v3.5.0). */
export const teamChangeSchema = z.discriminatedUnion('action', [
  z.strictObject({ action: z.literal('add-skill'), ...skillFields }),
  z.strictObject({ action: z.literal('change-skill'), ...skillFields }),
  z.strictObject({ action: z.literal('delete-skill'), id: skillId }),
  z.strictObject({ action: z.literal('attach'), specialist: specialistId, skill: skillId }),
  z.strictObject({ action: z.literal('detach'), specialist: specialistId, skill: skillId }),
]);
export type TeamChange = z.infer<typeof teamChangeSchema>;

const specialistSchema = z.strictObject({
  id: specialistId,
  name: line(40),
  role: line(200),
  guild: z.enum(GUILDS),
  kind: z.enum(['reads', 'edits']),
  skills: z.array(skillId).max(MAX_PRELOADED),
});
const skillSchema = z.strictObject({ id: skillId, name: line(60), description: line(200) });

/** The team as GET and POST /api/team answer: the team and each skill's text. */
export const teamViewSchema = z.strictObject({
  team: z.strictObject({
    version: z.literal(1),
    specialists: z.array(specialistSchema).max(32),
    skills: z.array(skillSchema).max(64),
  }),
  texts: z.record(skillId, z.string().max(MAX_TEXT)),
});
export type TeamView = z.infer<typeof teamViewSchema>;
export type TeamSpecialist = z.infer<typeof specialistSchema>;
export type TeamSkill = z.infer<typeof skillSchema>;

/** A hall answer that went wrong, as the page reads it: a fixed word, or nothing it knows. */
export const teamErrorSchema = z.strictObject({ error: z.string().max(300) });
