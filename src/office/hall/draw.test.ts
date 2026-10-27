import { describe, expect, it } from 'vitest';
import { ROSTER } from '../roster';
import { SEATS } from './destination';
import {
  FLOOR_Z,
  activityOf,
  agentDrawable,
  motion,
  sceneryDrawables,
  stationDrawables,
  type Activity,
} from './draw';
import { hallStations } from './layout';

const agent = (id: string) => ROSTER.find((a) => a.id === id)!;
const ACTIVITIES: Activity[] = ['walking', 'smashing', 'busy', 'still'];

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
