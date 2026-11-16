// The team editor's calls to the hall (v3.4c): the key for a session, the team, one change. Same origin only: the session
// cookie is HttpOnly and SameSite=Strict, so the browser sends it and no script ever sees it. Every answer is checked.
import {
  skillAnswerSchema,
  teamErrorSchema,
  teamViewSchema,
  type SkillAnswer,
  type SkillAsk,
  type TeamChange,
  type TeamView,
} from './schema';

/** What the hall said to the key: a session, a key already used, one too old (or a hall that restarted), or no hall. */
export type Exchange = 'ok' | 'used' | 'expired' | 'offline';

export async function exchangeKey(key: string): Promise<Exchange> {
  try {
    const res = await fetch('/api/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key }),
      credentials: 'same-origin',
    });
    if (res.status === 204) return 'ok';
    const body = teamErrorSchema.safeParse(await res.json().catch(() => null));
    return body.success && body.data.error === 'used' ? 'used' : 'expired';
  } catch {
    return 'offline';
  }
}

/** The team, or why not: no session (signed out), a refusal with the hall's own words, or no hall. */
export type TeamAnswer =
  | { ok: true; view: TeamView }
  | { ok: false; why: 'signed-out' }
  | { ok: false; why: 'offline' }
  | { ok: false; why: 'refused'; message: string };

async function answerOf(res: Response): Promise<TeamAnswer> {
  if (res.status === 401) return { ok: false, why: 'signed-out' };
  const json: unknown = await res.json().catch(() => null);
  if (res.status === 200) {
    const view = teamViewSchema.safeParse(json);
    if (view.success) return { ok: true, view: view.data };
  }
  const error = teamErrorSchema.safeParse(json);
  return {
    ok: false,
    why: 'refused',
    message: error.success ? error.data.error : `The hall answered ${res.status}.`,
  };
}

export async function loadTeam(): Promise<TeamAnswer> {
  try {
    return await answerOf(await fetch('/api/team', { credentials: 'same-origin' }));
  } catch {
    return { ok: false, why: 'offline' };
  }
}

/** v3.10: what POST /api/team/skill said: its answer, or why not, as for the team. */
export type SkillReply = { ok: true; answer: SkillAnswer } | Exclude<TeamAnswer, { ok: true }>;

/**
 * v3.10: asks the hall to read a skill: the list of Dima's Claude skills, or one SKILL.md checked (pasted, one of his
 * Claude skills, from a GitHub link, or a library skill's link again). It writes nothing; the take is a change.
 */
export async function askSkill(ask: SkillAsk): Promise<SkillReply> {
  try {
    const res = await fetch('/api/team/skill', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ask),
      credentials: 'same-origin',
    });
    if (res.status === 401) return { ok: false, why: 'signed-out' };
    const json: unknown = await res.json().catch(() => null);
    if (res.status === 200) {
      const answer = skillAnswerSchema.safeParse(json);
      if (answer.success) return { ok: true, answer: answer.data };
    }
    const error = teamErrorSchema.safeParse(json);
    return {
      ok: false,
      why: 'refused',
      message: error.success ? error.data.error : `The hall answered ${res.status}.`,
    };
  } catch {
    return { ok: false, why: 'offline' };
  }
}

export async function sendChange(change: TeamChange): Promise<TeamAnswer> {
  try {
    const res = await fetch('/api/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(change),
      credentials: 'same-origin',
    });
    return await answerOf(res);
  } catch {
    return { ok: false, why: 'offline' };
  }
}
