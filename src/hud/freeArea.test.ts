import { describe, expect, it } from 'vitest';
import { freeArea, type Edges } from './freeArea';

const box: Edges = { left: 0, top: 0, right: 1440, bottom: 900 };
const at = (left: number, top: number, right: number, bottom: number): Edges => ({
  left,
  top,
  right,
  bottom,
});
// the HUD at 1440 x 900 with 16 px rem: the top bar, the status line, the rail, the agent list, the drawer
const top = at(16, 16, 1424, 80);
const status = at(500, 96, 900, 120);
const rail = at(16, 96, 204, 520);
const agents = at(16, 824, 640, 884);
const drawer = at(1040, 96, 1424, 884);

describe('the free area (Dima, 20 Nov)', () => {
  it('is right of the rail, left of the drawer, under the top bar and its line, above the agent list', () => {
    expect(freeArea(box, { left: [rail], right: [drawer], top: [top, status], bottom: [agents] })).toEqual({
      left: 204,
      right: 400,
      top: 120,
      bottom: 76,
    });
  });

  it('is right of the card where the card reaches further than the rail', () => {
    const card = at(220, 400, 612, 808);
    expect(freeArea(box, { left: [rail, card], right: [], top: [], bottom: [] }).left).toBe(612);
  });

  it('is under the needs-you banner, which reaches lower than the top bar', () => {
    const banner = at(220, 96, 1024, 190);
    expect(freeArea(box, { left: [], right: [], top: [top, banner], bottom: [] }).top).toBe(190);
  });

  it('leaves out a panel that is not there or has no size (closed, hidden)', () => {
    const hidden = at(0, 0, 0, 0);
    expect(freeArea(box, { left: [null, hidden], right: [hidden], top: [null], bottom: [hidden] })).toEqual({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    });
  });

  it("measures from the box's own edges, and never past them", () => {
    const moved: Edges = { left: 100, top: 50, right: 1100, bottom: 750 };
    expect(
      freeArea(moved, {
        left: [at(100, 60, 300, 400)],
        right: [at(900, 60, 1100, 700)],
        top: [at(100, 50, 1100, 130)],
        bottom: [at(100, 700, 600, 750)],
      }),
    ).toEqual({ left: 200, right: 200, top: 80, bottom: 50 });
    const wide = at(-50, -50, 2000, 2000);
    expect(freeArea(box, { left: [wide], right: [wide], top: [wide], bottom: [wide] })).toEqual({
      left: 1440,
      right: 1440,
      top: 900,
      bottom: 900,
    });
  });
});
