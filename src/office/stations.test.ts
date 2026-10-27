import { describe, expect, it } from 'vitest';
import { spriteSize, type PixelSprite } from '../pixel/sprite';
import { hallStations } from './hall/layout';
import { stationBounds } from './stations';

const stations = hallStations();
const right = (p: { x: number; sprite: PixelSprite }) => p.x + spriteSize(p.sprite).width;
const centre = (p: { x: number; sprite: PixelSprite }) => p.x + spriteSize(p.sprite).width / 2;

describe('workstations', () => {
  it('gives every agent one station', () => {
    expect(stations.map((s) => s.agent.id).sort()).toEqual([
      'backend',
      'designer',
      'frontend',
      'lead',
      'reviewer',
    ]);
  });

  it('seats each agent centred on its desk', () => {
    for (const { pieces } of stations) {
      const [, agent, desk] = pieces;
      expect(Math.abs(centre(agent!) - centre(desk!))).toBeLessThanOrEqual(1);
    }
  });

  it('sits each agent behind the desk: head above it, legs hidden by it', () => {
    for (const { pieces } of stations) {
      const [, agent, desk] = pieces;
      const agentBottom = agent!.y + spriteSize(agent!.sprite).height;
      expect(agent!.y).toBeLessThan(desk!.y);
      expect(agentBottom).toBeGreaterThan(desk!.y);
      expect(agentBottom).toBeLessThanOrEqual(desk!.y + spriteSize(desk!.sprite).height);
    }
  });

  it('keeps the PC clear of the agent', () => {
    for (const { pieces } of stations) {
      const [, agent, , monitor] = pieces;
      expect(right(monitor!) <= agent!.x || monitor!.x >= right(agent!)).toBe(true);
    }
  });

  it('keeps desk props on the desk and clear of the agent', () => {
    for (const { pieces } of stations) {
      const [, agent, desk, , , deskProp] = pieces;
      if (!deskProp) continue;
      expect(deskProp.x).toBeGreaterThanOrEqual(desk!.x);
      expect(right(deskProp)).toBeLessThanOrEqual(right(desk!));
      expect(right(deskProp) <= agent!.x || deskProp.x >= right(agent!)).toBe(true);
    }
  });

  it('puts the name plate below the desk', () => {
    for (const s of stations) {
      const b = stationBounds(s);
      expect(s.plateY).toBeGreaterThanOrEqual(b.y + b.h);
    }
  });
});
