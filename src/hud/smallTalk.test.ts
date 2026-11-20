import { describe, expect, it } from 'vitest';
import type { AgentId } from '../events/schema';
import type { RoomId } from '../world/map';
import { KEEP_SMALL_TALK, TALK_EVERY_MS, TALK_SHOWN_MS, keepSmallTalk } from './smallTalk';

const groups = (entries: [RoomId, AgentId[]][]) => new Map<RoomId, readonly AgentId[]>(entries);
const HOUR = 60 * 60_000;

describe("the keep's small talk (4c.3, D10)", () => {
  it('a dozen lines of our own: plain sentences, no agent names', () => {
    expect(KEEP_SMALL_TALK).toHaveLength(12);
    for (const line of KEEP_SMALL_TALK) {
      expect(line).toMatch(/^[A-Z][^<>`*_[\]]*[.?!]$/);
      expect(line).not.toMatch(/Lead|Designer|Frontend|Backend|Reviewer/);
    }
  });

  it('says lines from the list only, and only through the idle agents standing together', () => {
    const together = groups([
      ['tavern', ['frontend', 'backend']],
      ['garden', ['lead', 'designer']],
    ]);
    const speakers = new Set<string>();
    for (let now = 0; now < HOUR; now += 500) {
      for (const [agent, line] of Object.entries(keepSmallTalk(together, now))) {
        expect(KEEP_SMALL_TALK).toContain(line);
        speakers.add(agent);
      }
    }
    // both take turns in each area, and the reviewer, alone elsewhere, never speaks
    expect([...speakers].sort()).toEqual(['backend', 'designer', 'frontend', 'lead']);
  });

  it('nobody talks alone, outside an idle area, or across areas', () => {
    const apart = groups([
      ['tavern', ['frontend']],
      ['yard', ['backend']],
      ['war', ['lead', 'designer']],
      ['forge', ['frontend', 'reviewer']],
    ]);
    for (let now = 0; now < HOUR; now += 500) expect(keepSmallTalk(apart, now)).toEqual({});
  });

  it('one bubble per area every 20 s at most, each up for 4 s, and not in every slot', () => {
    const together = groups([['court', ['reviewer', 'lead', 'designer']]]);
    const runs: { at: number; ms: number; line: string }[] = [];
    for (let now = 0; now < HOUR; now += 100) {
      const said = Object.values(keepSmallTalk(together, now));
      expect(said.length).toBeLessThanOrEqual(1);
      const last = runs.at(-1);
      if (said.length === 0) continue;
      if (last && last.at + last.ms === now) {
        // the same bubble goes on: the same line
        expect(said[0]).toBe(last.line);
        last.ms += 100;
      } else runs.push({ at: now, ms: 100, line: said[0]! });
    }
    for (let i = 1; i < runs.length; i++) {
      expect(runs[i]!.at - runs[i - 1]!.at).toBeGreaterThanOrEqual(TALK_EVERY_MS);
      // every bubble is up for 4 s, but the ones the test's hour cuts at its start and end
      if (i < runs.length - 1) expect(runs[i]!.ms).toBe(TALK_SHOWN_MS);
    }
    const slots = HOUR / TALK_EVERY_MS;
    expect(runs.length).toBeGreaterThan(slots / 3);
    expect(runs.length).toBeLessThan(slots);
  });
});
