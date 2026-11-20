import { describe, expect, it } from 'vitest';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { AGENT_IDS } from '../events/schema';
import { settleTags, TAG_EDGE, TAG_GAP, tagText, tagTone, toScreen, type TagBox } from './labels';

describe("the world's labels (4d.6)", () => {
  it('puts a projected point on the box: the middle, the corners, y down', () => {
    expect(toScreen({ x: 0, y: 0, z: 0.5 }, 1440, 900)).toEqual({ x: 720, y: 450, shown: true });
    expect(toScreen({ x: -1, y: 1, z: 0.5 }, 1440, 900)).toEqual({ x: 0, y: 0, shown: true });
    expect(toScreen({ x: 1, y: -1, z: 0.5 }, 1440, 900)).toEqual({ x: 1440, y: 900, shown: true });
    expect(toScreen({ x: 0.5, y: -0.5, z: 0.9 }, 800, 600)).toEqual({ x: 600, y: 450, shown: true });
  });

  it('hides a label off the box, behind the camera or past its far plane', () => {
    expect(toScreen({ x: 1.01, y: 0, z: 0.5 }, 1440, 900).shown).toBe(false);
    expect(toScreen({ x: 0, y: -1.2, z: 0.5 }, 1440, 900).shown).toBe(false);
    // three projects a point behind the camera to z beyond 1
    expect(toScreen({ x: 0.1, y: 0.1, z: 1.02 }, 1440, 900).shown).toBe(false);
    expect(toScreen({ x: 0, y: 0, z: 1 }, 1440, 900).shown).toBe(false);
    expect(toScreen({ x: 0, y: 0, z: -1.5 }, 1440, 900).shown).toBe(false);
  });

  it("says the name, and a guild lead's specialists at work after a +", () => {
    expect(tagText(INITIAL_OFFICE, 'frontend')).toEqual({ name: 'Frontend dev', plus: null });
    let office = officeReducer(INITIAL_OFFICE, {
      type: 'specialist',
      lead: 'frontend',
      name: 'react-dev',
      working: true,
      at: 1,
    });
    expect(tagText(office, 'frontend')).toEqual({ name: 'Frontend dev', plus: '+ React dev' });
    office = officeReducer(office, {
      type: 'specialist',
      lead: 'frontend',
      name: 'form-builder',
      working: true,
      at: 2,
    });
    expect(tagText(office, 'frontend').plus).toBe('+ React dev, Form builder');
    expect(tagText(office, 'lead')).toEqual({ name: 'Lead/PM', plus: null });
  });

  it('borders a tag for needs-you and error before the open card', () => {
    let office = officeReducer(INITIAL_OFFICE, {
      type: 'state',
      agent: 'backend',
      state: 'needs-you',
      at: 1,
    });
    office = officeReducer(office, { type: 'state', agent: 'reviewer', state: 'error', at: 2 });
    expect(tagTone(office, 'backend', 'backend')).toBe('needs');
    expect(tagTone(office, 'reviewer', null)).toBe('error');
    expect(tagTone(office, 'designer', 'designer')).toBe('selected');
    expect(tagTone(office, 'designer', 'lead')).toBeNull();
  });
});

describe('tags that would overlap (Dima, 20 Nov)', () => {
  const tag = (id: TagBox['id'], x: number, y: number, extra: Partial<TagBox> = {}): TagBox => ({
    id,
    x,
    y,
    width: 100,
    height: 20,
    fixed: false,
    ...extra,
  });
  // a window wide and tall enough that no tag below comes near its edges
  const WIDE = { width: 1440, height: 900 };
  // how far up from its own spot each tag goes, in px (0 or less)
  const settleUp = (tags: readonly TagBox[]) => {
    const at = settleTags(tags, WIDE);
    return Object.fromEntries(tags.map((t) => [t.id, (at[t.id]?.y ?? NaN) - t.y]));
  };
  const box = (t: TagBox, at: { x: number; y: number } = t) => ({
    left: at.x - t.width / 2,
    right: at.x + t.width / 2,
    top: at.y - t.height,
    bottom: at.y,
  });
  const overlap = (a: ReturnType<typeof box>, b: ReturnType<typeof box>) =>
    a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

  it('leaves tags that are clear of each other where they are, side by side or one above another', () => {
    expect(settleUp([tag('lead', 100, 400), tag('designer', 300, 400), tag('frontend', 100, 370)])).toEqual({
      lead: 0,
      designer: 0,
      frontend: 0,
    });
    // touching edges are clear
    expect(settleUp([tag('lead', 100, 400), tag('designer', 200, 400)])).toEqual({ lead: 0, designer: 0 });
  });

  it('stacks two agents on the same spot: one keeps it, the other goes up by its height and 4 px', () => {
    expect(TAG_GAP).toBe(4);
    expect(settleUp([tag('lead', 500, 400), tag('designer', 500, 400)])).toEqual({
      lead: 0,
      designer: -24,
    });
    // and three: each again until it is clear
    expect(settleUp([tag('lead', 500, 400), tag('designer', 500, 400), tag('frontend', 500, 400)])).toEqual({
      lead: 0,
      designer: -24,
      frontend: -48,
    });
  });

  it('keeps the lowest tag on the box where it is, and moves the one above it', () => {
    expect(settleUp([tag('reviewer', 520, 390), tag('backend', 480, 400)])).toEqual({
      backend: 0,
      reviewer: -24,
    });
  });

  it('moves a tag by its own height', () => {
    expect(settleUp([tag('lead', 500, 400), tag('frontend', 500, 400, { height: 30 })])).toEqual({
      lead: 0,
      frontend: -34,
    });
  });

  it("keeps a needs-you or failed agent's tag on its own spot, and moves the others around it", () => {
    // the needs-you tag (its box 52 px with the marker) is higher up than the one that would cover it, and still keeps
    // its spot: the other goes up 24 px at a time, three times, until it is clear
    expect(settleUp([tag('lead', 500, 410), tag('backend', 500, 400, { fixed: true, height: 52 })])).toEqual({
      backend: 0,
      lead: -72,
    });
    // both on one spot
    expect(settleUp([tag('lead', 500, 400), tag('reviewer', 500, 400, { fixed: true })])).toEqual({
      reviewer: 0,
      lead: -24,
    });
  });

  it('stacks two fixed tags on one spot too, so neither covers the other', () => {
    expect(
      settleUp([tag('frontend', 500, 400, { fixed: true }), tag('backend', 500, 400, { fixed: true })]),
    ).toEqual({ frontend: 0, backend: -24 });
  });

  it('holds each tag, with its marker, 4 px inside the window', () => {
    expect(TAG_EDGE).toBe(4);
    const win = { width: 1000, height: 600 };
    expect(settleTags([tag('lead', 10, 300)], win).lead).toEqual({ x: 54, y: 300 });
    expect(settleTags([tag('lead', 990, 300)], win).lead).toEqual({ x: 946, y: 300 });
    expect(settleTags([tag('lead', 500, 600)], win).lead).toEqual({ x: 500, y: 596 });
    expect(settleTags([tag('lead', 500, 10)], win).lead).toEqual({ x: 500, y: 24 });
    // a needs-you tag's box runs from its marker's top: the marker stays inside too
    expect(settleTags([tag('backend', 500, 30, { fixed: true, height: 52 })], win).backend).toEqual({
      x: 500,
      y: 56,
    });
  });

  it('goes down from its spot where going up would take it past the top edge', () => {
    const win = { width: 1000, height: 600 };
    expect(settleTags([tag('lead', 500, 30), tag('designer', 500, 30)], win)).toEqual({
      lead: { x: 500, y: 30 },
      designer: { x: 500, y: 54 },
    });
  });

  it('never hides a tag in a window too short for the stack: it stays at the top edge', () => {
    const win = { width: 1000, height: 40 };
    const at = settleTags([tag('lead', 500, 30), tag('designer', 500, 30), tag('frontend', 500, 30)], win);
    for (const id of ['lead', 'designer', 'frontend'] as const) {
      expect(at[id]!.y - 20).toBeGreaterThanOrEqual(TAG_EDGE);
      expect(at[id]!.y).toBeLessThanOrEqual(40 - TAG_EDGE);
    }
  });

  it('never hides a tag, and leaves none overlapping or outside the window, whatever the spots (a seeded sweep)', () => {
    const win = { width: 1000, height: 700 };
    let seed = 7;
    let held = 0;
    let edges = 0;
    const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let round = 0; round < 500; round++) {
      // near the middle mostly, and every few rounds against an edge or a corner
      const near = round % 4 === 0;
      const tags = AGENT_IDS.map((id) =>
        tag(
          id,
          near ? Math.round(random() * 1000) : 400 + Math.round(random() * 200),
          near ? Math.round(random() * 140) * (random() < 0.5 ? 1 : 5) : 300 + Math.round(random() * 60),
          {
            width: 60 + Math.round(random() * 120),
            height: 18 + Math.round(random() * 40),
            fixed: random() < 0.25,
          },
        ),
      );
      const at = settleTags(tags, win);
      expect(Object.keys(at).sort()).toEqual([...AGENT_IDS].sort());
      const placed = tags.map((t) => box(t, at[t.id]));
      for (let i = 0; i < placed.length; i++) {
        const p = placed[i]!;
        expect(p.left).toBeGreaterThanOrEqual(TAG_EDGE);
        expect(p.top).toBeGreaterThanOrEqual(TAG_EDGE);
        expect(p.right).toBeLessThanOrEqual(win.width - TAG_EDGE);
        expect(p.bottom).toBeLessThanOrEqual(win.height - TAG_EDGE);
        for (let j = i + 1; j < placed.length; j++) expect(overlap(p, placed[j]!)).toBe(false);
      }
      edges += tags.filter((t) => box(t).left < TAG_EDGE || box(t).top < TAG_EDGE).length;
      // where no two fixed tags would cover each other, every fixed tag keeps its spot, held inside the window
      const inside = (t: TagBox) => ({
        x: Math.min(win.width - TAG_EDGE - t.width / 2, Math.max(TAG_EDGE + t.width / 2, t.x)),
        y: Math.min(win.height - TAG_EDGE, Math.max(TAG_EDGE + t.height, t.y)),
      });
      const fixed = tags.filter((x) => x.fixed);
      const clash = fixed.some((f, i) =>
        fixed.slice(i + 1).some((o) => overlap(box(o, inside(o)), box(f, inside(f)))),
      );
      if (clash) continue;
      for (const f of fixed) expect(at[f.id]).toEqual(inside(f));
      held += fixed.length;
    }
    // the sweep did meet fixed tags among the others, and tags against the edges
    expect(held).toBeGreaterThan(100);
    expect(edges).toBeGreaterThan(50);
  });
});
