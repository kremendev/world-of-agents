/** The task the demo run starts with, before anyone sends their own. */
export const DEFAULT_TASK = 'Create a dashboard';

/** The longest task text the task bar accepts, in characters. */
export const MAX_TASK_CHARS = 500;

/**
 * The task to run from what was typed, or null to ignore the send: trimmed, never empty, at most
 * MAX_TASK_CHARS characters. The input's maxLength stops typing past the limit; this is the check behind it.
 * Counts code points, so a cut never splits an emoji. In v2 this text goes to the Lead/PM: it is
 * untrusted input there (prompt injection), and it is always rendered as plain text.
 */
export function cleanTask(input: string): string | null {
  const text = input.trim();
  if (!text) return null;
  const chars = Array.from(text);
  return chars.length > MAX_TASK_CHARS ? chars.slice(0, MAX_TASK_CHARS).join('').trimEnd() : text;
}
