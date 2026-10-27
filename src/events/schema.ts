import { z } from 'zod';

/**
 * The event contract from the v1 spec. v1 plays a fake script of these events;
 * v2 receives the same events from the back-end over Server-Sent Events.
 * Every event goes through parseEvent() first, so fake and real events pass the same gate.
 */

export const AGENT_IDS = ['lead', 'designer', 'frontend', 'backend', 'reviewer'] as const;
export const AGENT_STATES = [
  'idle',
  'walking',
  'thinking',
  'reading',
  'writing',
  'waiting',
  'needs-you',
  'done',
  'error',
] as const;
export const TASK_STATUSES = ['todo', 'in-progress', 'in-review', 'done'] as const;

/** Upper bounds keep one bad event from flooding the UI or memory. */
export const LIMITS = {
  idLength: 64,
  titleLength: 200,
  messageLength: 4000,
  tokensPerEvent: 10_000_000,
} as const;

const agentId = z.enum(AGENT_IDS);
const agentState = z.enum(AGENT_STATES);
const taskStatus = z.enum(TASK_STATUSES);
const taskId = z
  .string()
  .min(1)
  .max(LIMITS.idLength)
  .regex(/^[A-Za-z0-9_-]+$/, 'letters, digits, _ and - only');
const timestamp = z.number().int().nonnegative();
const tokenCount = z.number().int().nonnegative().max(LIMITS.tokensPerEvent);

// strictObject rejects unknown keys, so nothing unexpected sneaks into app state.
const stateEvent = z.strictObject({
  type: z.literal('state'),
  agent: agentId,
  state: agentState,
  taskId: taskId.optional(),
  at: timestamp,
});

const taskEvent = z.strictObject({
  type: z.literal('task'),
  taskId,
  title: z.string().min(1).max(LIMITS.titleLength),
  owner: agentId,
  status: taskStatus,
  at: timestamp,
});

const messageEvent = z.strictObject({
  type: z.literal('message'),
  from: agentId,
  to: z.union([agentId, z.literal('you')]),
  text: z.string().min(1).max(LIMITS.messageLength),
  at: timestamp,
});

const tokensEvent = z.strictObject({
  type: z.literal('tokens'),
  agent: agentId,
  input: tokenCount,
  output: tokenCount,
  at: timestamp,
});

export const officeEventSchema = z.discriminatedUnion('type', [
  stateEvent,
  taskEvent,
  messageEvent,
  tokensEvent,
]);

export type AgentId = z.infer<typeof agentId>;
export type AgentState = z.infer<typeof agentState>;
export type TaskStatus = z.infer<typeof taskStatus>;
export type OfficeEvent = z.infer<typeof officeEventSchema>;

export type ParseResult = { ok: true; event: OfficeEvent } | { ok: false; error: string };

/** Validates one incoming event. Never throws: a bad event is reported and dropped, not rendered. */
export function parseEvent(input: unknown): ParseResult {
  const result = officeEventSchema.safeParse(input);
  if (result.success) {
    return { ok: true, event: result.data };
  }
  const first = result.error.issues[0];
  const where = first && first.path.length > 0 ? first.path.join('.') : 'event';
  return { ok: false, error: `${where}: ${first?.message ?? 'invalid event'}` };
}
