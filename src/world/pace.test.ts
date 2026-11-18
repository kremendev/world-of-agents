import { describe, expect, it } from 'vitest';
import type { AgentId } from '../events/schema';
import { DEMO_TASK, KEEP_STEP_MS, STEP_MS, demoRun } from '../script/demoRun';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import type { SpotId } from './map';
import { START, placeFor } from './places';
import { FIGURES } from './scene/cast';
import { sendTo, standingAt } from './walkers';

/**
 * The demo run played into the place map at a step's length: every walk, from where its figure is to its next place, and
 * whether it lands before that figure's place changes again (Dima, 18 Nov: in the Forge Keep, every walk lands).
 */
function cutShort(stepMs: number): string[] {
  const ids = Object.keys(FIGURES) as AgentId[];
  let office = INITIAL_OFFICE;
  const at: Record<string, { spot: SpotId; arrive: number }> = Object.fromEntries(
    ids.map((id) => [id, { spot: START[id], arrive: 0 }]),
  );
  const cut: string[] = [];
  for (const event of demoRun(DEMO_TASK, stepMs)) {
    office = officeReducer(office, event);
    for (const id of ids) {
      const to = placeFor(id, office, false);
      const was = at[id]!;
      if (!to || to === was.spot) continue;
      if (event.at < was.arrive) cut.push(`${id} short of ${was.spot}`);
      const walk = sendTo(standingAt(was.spot, 0), to, 0, FIGURES[id].speed, false).walk;
      const p = walk?.path ?? [];
      const length = p.slice(1).reduce((sum, q, i) => sum + Math.hypot(q.x - p[i]!.x, q.z - p[i]!.z), 0);
      at[id] = { spot: to, arrive: event.at + (length / FIGURES[id].speed) * 1000 };
    }
  }
  return cut;
}

describe("the demo's pace in the Forge Keep", () => {
  it('lets every walk land before its figure goes anywhere else', () => {
    expect(cutShort(KEEP_STEP_MS)).toEqual([]);
  });

  it("cuts walks short at the 2D hall's 8 s, and still one at 36 s: the keep needs its own pace", () => {
    expect(cutShort(STEP_MS).length).toBeGreaterThan(5);
    expect(cutShort(36000)).toEqual(['backend short of fetch-backend']);
  });
});
