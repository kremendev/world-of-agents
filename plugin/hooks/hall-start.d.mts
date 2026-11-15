// Types for hall-start.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export const SERVER: string;
type Child = { on: (event: 'error', listener: () => void) => unknown; unref: () => void };
type Start = (command: string, args: string[], options: Record<string, unknown>) => Child;
export function startHall(server?: string, start?: Start): void;
export function waitForHall(options?: {
  ask?: () => Promise<number>;
  waitMs?: number;
  stepMs?: number;
}): Promise<number>;
