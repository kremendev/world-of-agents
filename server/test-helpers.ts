// Shared by the server tests: the recorded runs' hooks (server/fixtures/) as send.mjs forwards them.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { allowlist } from '../plugin/hooks/send.mjs';
import type { OfficeEvent } from '../src/events/schema';
import { hookInputSchema, type HookInput } from './hook-input';

const FIXTURES = join(import.meta.dirname, 'fixtures');

/** A run's hooks in the order they arrived. `n` is the number in the file name. */
const load = (run: string) =>
  readdirSync(join(FIXTURES, run))
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file, i) => ({
      n: i + 1,
      name: file.replace(/\.json$/, ''),
      body: allowlist(JSON.parse(readFileSync(join(FIXTURES, run, file), 'utf8')), 'C:\\Users\\woa-tester'),
    }));

/** Run 1 (`-p`, 28 hooks): background devs, a foreground Reviewer, <task-notification>s. */
export const run1 = load('run1-background');
/** Run 2 (interactive, 24 hooks): <agent-message> hand-backs, SubagentStops with no last message. */
export const run2 = load('run2-interactive');

/** Hook number `n` of a run (run 1 unless given), as the server reads it. */
export const hookOf = (n: number, run = run1): HookInput => hookInputSchema.parse(run[n - 1]!.body);

/** Events without their times, for comparing runs made on different clocks. */
export const timeless = (events: readonly OfficeEvent[]) =>
  events.map((event) => Object.fromEntries(Object.entries(event).filter(([key]) => key !== 'at')));
