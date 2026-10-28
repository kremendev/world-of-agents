import { describe, expect, it } from 'vitest';
import * as H from '../../assets/hall';
import { ROSTER } from '../roster';
import { SEATS } from './destination';
import {
  FLOOR_Z,
  activityOf,
  agentDrawable,
  flickerAlpha,
  furnaceDrawables,
  furnaceLook,
  lightPhase,
  motion,
  sceneryDrawables,
  stationDrawables,
  type Activity,
} from './draw';
import { FURNACE_MOUTH, hallStations } from './layout';
import { HALOS, PROPS } from './placements';

const agent = (id: string) => ROSTER.find((a) => a.id === id)!;
const ACTIVITIES: Activity[] = ['walking', 'smashing', 'busy', 'still'];

/** A 2D context that records every fillRect with the fill style, opacity and shadow in force at the time. */
function recordingContext() {
  const fills: {
    style: unknown;
    alpha: number;
    rect: number[];
    shadow: { color: string; blur: number; offsetX: number };
  }[] = [];
  const ctx = {
    fillStyle: '' as unknown,
    globalAlpha: 1,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowBlur: 0,
    shadowOffsetX: 0,
    imageSmoothingEnabled: false,
    fillRect(...rect: number[]) {
      const shadow = { color: this.shadowColor, blur: this.shadowBlur, offsetX: this.shadowOffsetX };
      fills.push({ style: this.fillStyle, alpha: this.globalAlpha, rect, shadow });
    },
    createRadialGradient: () => ({ addColorStop() {} }),
    drawImage() {},
  };
  return { ctx: ctx as unknown as CanvasRenderingContext2D, fills };
}

const mouthRect = [FURNACE_MOUTH.x, FURNACE_MOUTH.y, FURNACE_MOUTH.w, FURNACE_MOUTH.h];

/** The colour the furnace mouth is painted with `working` agents busy. */
function mouthColour(working: number): unknown {
  const { ctx, fills } = recordingContext();
  for (const d of furnaceDrawables(working, 2)) d.draw(ctx);
  return fills.find((f) => f.rect.join() === mouthRect.join())?.style;
}

describe('draw order', () => {
  it('seats every agent between its chair and its desk (chair < agent < desk)', () => {
    for (const s of hallStations()) {
      const [chair, desk] = stationDrawables(s);
      const seated = agentDrawable(s.agent, SEATS[s.agent.id]);
      expect(chair!.z, s.agent.id).toBeLessThan(seated.z);
      expect(seated.z, s.agent.id).toBeLessThan(desk!.z);
    }
  });

  it('sorts agents by their feet', () => {
    expect(agentDrawable(agent('lead'), { x: 10, y: 200 }).z).toBe(200);
  });

  it('caches only the floor, back wall and rugs: nothing a walking agent could pass behind', () => {
    const floor = sceneryDrawables().filter((d) => d.z <= FLOOR_Z);
    expect(floor.length).toBeGreaterThan(0);
    expect(Math.max(...floor.map((d) => d.z))).toBeLessThanOrEqual(1);
  });
});

describe('activityOf', () => {
  it('smashes the keyboard only for an orc writing at its seat', () => {
    expect(activityOf(agent('frontend'), 'writing', false, true)).toBe('smashing');
    expect(activityOf(agent('backend'), 'writing', false, true)).toBe('smashing');
    expect(activityOf(agent('frontend'), 'writing', false, false)).toBe('busy');
    expect(activityOf(agent('designer'), 'writing', false, true)).toBe('busy');
  });

  it('walks before anything else, bobs while busy, otherwise stays still', () => {
    expect(activityOf(agent('backend'), 'writing', true, false)).toBe('walking');
    for (const state of ['thinking', 'reading', 'writing'] as const) {
      expect(activityOf(agent('reviewer'), state, false, true)).toBe('busy');
    }
    for (const state of ['idle', 'waiting', 'done', 'needs-you', 'error'] as const) {
      expect(activityOf(agent('reviewer'), state, false, true)).toBe('still');
    }
  });
});

describe('motion', () => {
  it('hops 1px every 150 ms while walking', () => {
    expect([0, 150, 300, 450].map((t) => motion('walking', t, false).dy)).toEqual([0, -1, 0, -1]);
  });

  it('jitters a smashing orc and shakes its keyboard', () => {
    const frames = Array.from({ length: 20 }, (_, i) => motion('smashing', i * 10, false));
    expect(new Set(frames.map((m) => m.dx))).toEqual(new Set([0, 1]));
    expect(new Set(frames.map((m) => m.keyboardDx))).toEqual(new Set([-1, 1]));
  });

  it('bobs busy agents 1px and never shakes anyone else’s keyboard', () => {
    expect([0, 500].map((t) => motion('busy', t, false).dy)).toEqual([0, -1]);
    for (const a of ['walking', 'busy', 'still'] as const) {
      for (let t = 0; t < 1000; t += 10) expect(motion(a, t, false).keyboardDx).toBe(0);
    }
  });

  it('keeps everyone still with reduced motion', () => {
    for (const a of ACTIVITIES) {
      for (let t = 0; t < 1000; t += 10) expect(motion(a, t, true)).toEqual({ dx: 0, dy: 0, keyboardDx: 0 });
    }
  });
});

describe('furnace', () => {
  it('colours the mouth by how many agents are working', () => {
    expect(mouthColour(0)).toBe('#5a2a10');
    expect(mouthColour(1)).toBe('#f08a3c');
    expect(mouthColour(2)).toBe('#ffb15a');
    expect(mouthColour(5)).toBe('#ffb15a');
  });

  it('glows wider and stronger with each worker, up to four', () => {
    expect(furnaceLook(0).glow).toBeNull();
    const glows = [1, 2, 3, 4, 5].map((n) => furnaceLook(n).glow!);
    expect(glows.map((g) => g.spread)).toEqual([3, 5, 7, 9, 9]);
    expect(glows.map((g) => g.blur)).toEqual([13, 19, 25, 31, 31]);
    glows.forEach((g, i) => expect(g.strength).toBeCloseTo(0.3 + 0.15 * Math.min(i + 1, 4)));
  });

  it('draws the glow just under the mouth, both above the furnace body', () => {
    const [glow, mouth] = furnaceDrawables(2, 2);
    expect(65.5).toBeLessThan(glow!.z);
    expect(glow!.z).toBeLessThan(mouth!.z);
    expect(furnaceDrawables(0, 2)).toHaveLength(1);
  });

  it('draws the glow like a CSS box-shadow from the mouth’s edge, in device pixels', () => {
    const per = 3;
    const { ctx, fills } = recordingContext();
    for (const d of furnaceDrawables(2, per)) d.draw(ctx);
    const [box] = fills; // the glow draws first, the mouth over it
    const [x, y, w, h] = box!.rect as [number, number, number, number];
    const m = FURNACE_MOUTH;

    // The box itself is off the canvas; its shadow lands on the mouth grown by the spread (5 at n = 2).
    expect(x + w).toBeLessThan(0);
    expect([x + box!.shadow.offsetX / per, y, w, h]).toEqual([m.x - 5, m.y - 5, m.w + 10, m.h + 10]);
    expect(box!.shadow.blur).toBe(19 * per);
    expect(box!.shadow.color).toBe('rgba(240, 138, 60, 0.60)');
    // And no shadow left behind for whatever draws next.
    expect([ctx.shadowBlur, ctx.shadowOffsetX, ctx.shadowColor]).toEqual([0, 0, 'rgba(0, 0, 0, 0)']);
  });
});

describe('flicker', () => {
  it('steps a light through 1, 0.9 and 0.8 every 1.1 s', () => {
    const cycle = [0, 400, 800].map((t) => flickerAlpha(t, 0, false));
    expect(cycle[0]).toBe(1);
    expect(cycle[1]).toBeCloseTo(0.9);
    expect(cycle[2]).toBeCloseTo(0.8);
    expect(flickerAlpha(1100, 0, false)).toBe(1);
  });

  it('gives every light its own phase (the furnace glow is the last one)', () => {
    const lights = HALOS.length + PROPS.filter((p) => p.flicker).length + 1;
    const phases = Array.from({ length: lights }, (_, i) => lightPhase(i));
    expect(new Set(phases).size).toBe(lights);
  });

  it('dims every halo and flickering prop, and nothing else', () => {
    const phases: number[] = [];
    const scenery = sceneryDrawables((phase) => {
      phases.push(phase);
      return 0.8;
    });
    const { ctx, fills } = recordingContext();
    for (const d of scenery) d.draw(ctx);

    expect(phases).toHaveLength(HALOS.length + PROPS.filter((p) => p.flicker).length);
    expect(fills.filter((f) => f.alpha === 0.8)).toHaveLength(HALOS.length); // sprites draw nothing in jsdom
    expect(fills.every((f) => f.alpha === 0.8 || f.alpha === 1)).toBe(true);
    expect(ctx.globalAlpha).toBe(1);
  });

  it('flickers the furnace glow, never the mouth colour', () => {
    const { ctx, fills } = recordingContext();
    for (const d of furnaceDrawables(3, 2, () => 0.8)) d.draw(ctx);
    const mouth = fills.find((f) => f.rect.join() === mouthRect.join());
    expect(fills.filter((f) => f !== mouth).map((f) => f.alpha)).toEqual([0.8]);
    expect(mouth?.alpha).toBe(1);
    expect(ctx.globalAlpha).toBe(1);
  });

  it('flickers exactly the candles, candelabras, braziers and the fireplace fire', () => {
    const lights = [H.SCONCE, H.CANDELABRA, H.BRAZIER, H.FIRE];
    for (const p of PROPS)
      expect(Boolean(p.flicker), `prop at ${p.x},${p.y}`).toBe(lights.includes(p.sprite));
  });

  it('turns off with reduced motion, while the furnace keeps its colour', () => {
    for (let t = 0; t < 2200; t += 50) {
      for (let i = 0; i < 5; i++) expect(flickerAlpha(t, lightPhase(i), true)).toBe(1);
    }
    expect(mouthColour(3)).toBe('#ffb15a');
  });
});
