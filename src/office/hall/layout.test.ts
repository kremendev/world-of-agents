import css from '../../index.css?raw';
import { describe, expect, it } from 'vitest';
import { spriteSize } from '../../pixel/sprite';
import { stationBounds } from '../stations';
import { HALL, ROOMS, hallStations, type Rect } from './layout';
import { HALOS, PLAQUES, PROPS } from './placements';

const stations = hallStations();

const inside = (inner: Rect, outer: Rect) =>
  inner.x >= outer.x &&
  inner.y >= outer.y &&
  inner.x + inner.w <= outer.x + outer.w &&
  inner.y + inner.h <= outer.y + outer.h;

const overlaps = (a: Rect, b: Rect) =>
  a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

const propRect = (p: (typeof PROPS)[number]): Rect => {
  const { width, height } = spriteSize(p.sprite);
  return { x: p.x, y: p.y, w: width, h: height };
};

const hall: Rect = { x: 0, y: 0, w: HALL.width, h: HALL.height };

describe('Forge Hall layout', () => {
  it('keeps every prop, light and sign inside the hall', () => {
    for (const p of PROPS) expect(inside(propRect(p), hall)).toBe(true);
    for (const h of HALOS) expect(inside({ x: h.x, y: h.y, w: 0, h: 0 }, hall)).toBe(true);
    for (const p of PLAQUES) expect(inside({ x: p.x, y: p.y, w: p.width, h: 0 }, hall)).toBe(true);
  });

  it('puts the Lead/PM in their room and everyone else in the dev room', () => {
    for (const s of stations) {
      const room = s.agent.id === 'lead' ? ROOMS.lead : ROOMS.dev;
      expect(inside(stationBounds(s), room)).toBe(true);
    }
  });

  it('does not let workstations overlap', () => {
    for (const a of stations) {
      for (const b of stations) {
        if (a !== b) expect(overlaps(stationBounds(a), stationBounds(b))).toBe(false);
      }
    }
  });

  it('keeps props out of the workstations', () => {
    for (const s of stations) {
      for (const p of PROPS) expect(overlaps(stationBounds(s), propRect(p))).toBe(false);
    }
  });
});

describe('text sizes and fonts', () => {
  const rules = [...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({
    selector: m[1]!.trim(),
    body: m[2]!,
  }));
  const sizes = rules.flatMap((r) =>
    [...r.body.matchAll(/font-size:\s*([^;]+);/g)].map((m) => ({ selector: r.selector, size: m[1]! })),
  );
  const rem = (size: string) => Number(/^(?:max\()?([\d.]+)rem/.exec(size)?.[1]);

  it('every size is in rem, or follows the hall from a minimum in rem: all of it grows with browser zoom', () => {
    expect(sizes.length).toBeGreaterThan(10);
    for (const { selector, size } of sizes) {
      if (size === 'inherit') continue;
      expect(rem(size), `${selector}: ${size}`).not.toBeNaN();
    }
  });

  it('nothing is under 13 px, and the body is 15 px', () => {
    for (const { selector, size } of sizes) {
      if (size !== 'inherit') expect(rem(size), `${selector}: ${size}`).toBeGreaterThanOrEqual(13 / 16);
    }
    expect(sizes.find((s) => s.selector === 'body')?.size).toBe('0.9375rem');
  });

  it('Pixelify Sans is only on the title, room plaques, name plates and badges, never under 14 px', () => {
    const pixel = rules.filter((r) => r.body.includes('var(--pixel-font)'));
    expect(pixel.map((r) => r.selector).sort()).toEqual(['.badge', '.nameplate', '.plaque', 'h1']);
    for (const r of pixel) {
      const size = /font-size:\s*([^;]+);/.exec(r.body)?.[1] ?? '';
      expect(rem(size), r.selector).toBeGreaterThanOrEqual(14 / 16);
    }
  });

  it('the status line has no box until someone waits for approval: it must not look like an input', () => {
    const line = rules.find((r) => r.selector === '.status-line')!.body;
    expect(line).toMatch(/border: 2px solid transparent/);
    expect(line).not.toMatch(/background/);
    expect(rules.find((r) => r.selector === '.status-line.needs-you')!.body).toMatch(/background/);
  });

  it('the hall clips: a hidden label past its edge must not make the page scroll sideways', () => {
    expect(rules.find((r) => r.selector === '.hall')!.body).toMatch(/overflow: clip/);
  });

  it('the hosted demo status line can wrap: an ellipsis could hide its link to the README', () => {
    const line = rules.find((r) => r.selector === '.status-line.hosted')!.body;
    expect(line).toMatch(/white-space: normal/);
    expect(line).toMatch(/height: auto/);
    expect(line).toMatch(/overflow: visible/);
  });
});
