import { describe, expect, it } from 'vitest';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { AGENT_IDS } from '../events/schema';
import { settleTags, TAG_GAP, tagText, tagTone, toScreen, type TagBox } from './labels';

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
  const box = (t: TagBox, up: number) => ({
    left: t.x - t.width / 2,
    right: t.x + t.width / 2,
    top: t.y + up - t.height,
    bottom: t.y + up,
  });
  const overlap = (a: ReturnType<typeof box>, b: ReturnType<typeof box>) =>
    a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

  it('leaves tags that are clear of each other where they are, side by side or one above another', () => {
    expect(settleTags([tag('lead', 100, 400), tag('designer', 300, 400), tag('frontend', 100, 370)])).toEqual(
      {
        lead: 0,
        designer: 0,
        frontend: 0,
      },
    );
    // touching edges are clear
    expect(settleTags([tag('lead', 100, 400), tag('designer', 200, 400)])).toEqual({ lead: 0, designer: 0 });
  });

  it('stacks two agents on the same spot: one keeps it, the other goes up by its height and 4 px', () => {
    expect(TAG_GAP).toBe(4);
    expect(settleTags([tag('lead', 500, 400), tag('designer', 500, 400)])).toEqual({
      lead: 0,
      designer: -24,
    });
    // and three: each again until it is clear
    expect(settleTags([tag('lead', 500, 400), tag('designer', 500, 400), tag('frontend', 500, 400)])).toEqual(
      { lead: 0, designer: -24, frontend: -48 },
    );
  });

  it('keeps the lowest tag on the box where it is, and moves the one above it', () => {
    expect(settleTags([tag('reviewer', 520, 390), tag('backend', 480, 400)])).toEqual({
      backend: 0,
      reviewer: -24,
    });
  });

  it('moves a tag by its own height', () => {
    expect(settleTags([tag('lead', 500, 400), tag('frontend', 500, 400, { height: 30 })])).toEqual({
      lead: 0,
      frontend: -34,
    });
  });

  it("keeps a needs-you or failed agent's tag on its own spot, and moves the others around it", () => {
    // the needs-you tag (its box 52 px with the marker) is higher up than the one that would cover it, and still keeps
    // its spot: the other goes up 24 px at a time, three times, until it is clear
    expect(
      settleTags([tag('lead', 500, 410), tag('backend', 500, 400, { fixed: true, height: 52 })]),
    ).toEqual({ backend: 0, lead: -72 });
    // both on one spot
    expect(settleTags([tag('lead', 500, 400), tag('reviewer', 500, 400, { fixed: true })])).toEqual({
      reviewer: 0,
      lead: -24,
    });
  });

  it('stacks two fixed tags on one spot too, so neither covers the other', () => {
    expect(
      settleTags([tag('frontend', 500, 400, { fixed: true }), tag('backend', 500, 400, { fixed: true })]),
    ).toEqual({ frontend: 0, backend: -24 });
  });

  it('never hides a tag, and leaves none overlapping, whatever the spots (a seeded sweep)', () => {
    let seed = 7;
    let held = 0;
    const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let round = 0; round < 500; round++) {
      const tags = AGENT_IDS.map((id) =>
        tag(id, 400 + Math.round(random() * 200), 300 + Math.round(random() * 60), {
          width: 60 + Math.round(random() * 120),
          height: 18 + Math.round(random() * 40),
          fixed: random() < 0.25,
        }),
      );
      const up = settleTags(tags);
      expect(Object.keys(up).sort()).toEqual([...AGENT_IDS].sort());
      const placed = tags.map((t) => box(t, up[t.id] as number));
      for (let i = 0; i < placed.length; i++) {
        expect(up[tags[i]!.id]).toBeLessThanOrEqual(0);
        for (let j = i + 1; j < placed.length; j++) expect(overlap(placed[i]!, placed[j]!)).toBe(false);
      }
      // where no two fixed tags would cover each other, every fixed tag keeps its spot
      const fixed = tags.filter((x) => x.fixed);
      const clash = fixed.some((f, i) => fixed.slice(i + 1).some((o) => overlap(box(o, 0), box(f, 0))));
      if (clash) continue;
      for (const f of fixed) expect(up[f.id]).toBe(0);
      held += fixed.length;
    }
    // the sweep did meet fixed tags among the others
    expect(held).toBeGreaterThan(100);
  });
});
