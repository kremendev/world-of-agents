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
  agent_message?: { from: string };
  last_assistant_message?: string;
  tool_input?: { description?: string; subagent_type?: string; run_in_background?: boolean };
  tool_response?: { status?: string; agentId?: string };
  background_tasks?: { id?: string; type?: string; status?: string; agent_type?: string }[];
  /** v3.3: added by gate.mjs, never by the allowlist. */
  gate?: 'retry' | 'passed' | 'failed';
};

export const MAX_REPORT: number;
export const GATED: ReadonlySet<string>;
export function gated(payload: Record<string, unknown>, env: Record<string, string | undefined>): boolean;
export function homePattern(home: string): RegExp;
export function text(v: unknown, max: number, home?: string): string | undefined;
export function allowlist(p: Record<string, unknown>, home?: string): Forwarded;
export function handshakeAnswer(token: string, nonce: string): string;
export function readToken(): string | null;
export function askHall(
  hall: string,
  token: string,
  signal: AbortSignal,
): Promise<{ ours: boolean; version: string | null }>;
export function hallKnowsToken(hall: string, token: string, signal: AbortSignal): Promise<boolean>;
export function deliver(
  forwarded: Forwarded,
  token: string,
  options?: { hall?: string; timeoutMs?: number },
): Promise<boolean>;
