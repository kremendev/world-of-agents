// Types for send.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export type Forwarded = {
  hook_event_name?: string;
  session_id?: string;
  agent_id?: string;
  agent_type?: string;
  tool_name?: string;
  tool_use_id?: string;
  notification_type?: string;
  source?: string;
  reason?: string;
  prompt?: string;
  task_notification?: { task_id?: string; tool_use_id?: string; status?: string };
  last_assistant_message?: string;
  tool_input?: { description?: string; subagent_type?: string; run_in_background?: boolean };
  tool_response?: { status?: string; agentId?: string };
  background_tasks?: { id?: string; type?: string; status?: string; agent_type?: string }[];
};

export function homePattern(home: string): RegExp;
export function text(v: unknown, max: number, home?: string): string | undefined;
export function allowlist(p: Record<string, unknown>, home?: string): Forwarded;
