import { z } from 'zod';

/**
 * What plugin/hooks/send.mjs forwards, with the same caps (docs/v2-hooks.md has the real payloads).
 * z.object strips unknown fields instead of rejecting them: Claude Code adds fields over time, and the hall
 * only ever reads these. A field that is too long or the wrong type still rejects the post.
 */
const id = z.string().max(100);
const word = z.string().max(40);

export const hookInputSchema = z.object({
  hook_event_name: word,
  session_id: id.optional(),
  agent_id: id.optional(),
  agent_type: id.optional(),
  tool_name: id.optional(),
  tool_use_id: id.optional(),
  notification_type: word.optional(),
  source: word.optional(),
  reason: word.optional(),
  prompt: z.string().max(120).optional(),
  task_notification: z
    .object({ task_id: id.optional(), tool_use_id: id.optional(), status: word.optional() })
    .optional(),
  last_assistant_message: z.string().max(200).optional(),
  tool_input: z
    .object({
      description: z.string().max(120).optional(),
      subagent_type: id.optional(),
      run_in_background: z.boolean().optional(),
    })
    .optional(),
  tool_response: z.object({ status: word.optional(), agentId: id.optional() }).optional(),
  background_tasks: z
    .array(
      z.object({
        id: id.optional(),
        type: word.optional(),
        status: word.optional(),
        agent_type: id.optional(),
      }),
    )
    .max(20)
    .optional(),
});

export type HookInput = z.infer<typeof hookInputSchema>;
