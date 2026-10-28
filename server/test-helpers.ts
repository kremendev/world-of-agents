// Shared by the server tests: run 1's hooks (server/fixtures/run1-background) as send.mjs forwards them.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { allowlist } from '../plugin/hooks/send.mjs';
import type { OfficeEvent } from '../src/events/schema';
import { hookInputSchema, type HookInput } from './hook-input';

const RUN1 = join(import.meta.dirname, 'fixtures/run1-background');

/** In the order they arrived. `n` is the number in the file name (1 to 28). */
export const run1 = readdirSync(RUN1)
  .filter((file) => file.endsWith('.json'))
  .sort()
  .map((file, i) => ({
    n: i + 1,
    name: file.replace(/\.json$/, ''),
    body: allowlist(JSON.parse(readFileSync(join(RUN1, file), 'utf8')), 'C:\\Users\\woa-tester'),
  }));

/** Run 1's hook number `n`, as the server reads it. */
export const hookOf = (n: number): HookInput => hookInputSchema.parse(run1[n - 1]!.body);

/** Events without their times, for comparing runs made on different clocks. */
export const timeless = (events: readonly OfficeEvent[]) =>
  events.map((event) => Object.fromEntries(Object.entries(event).filter(([key]) => key !== 'at')));
