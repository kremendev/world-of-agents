import houses from './scene/houses.ts?raw';
import world from './scene/world.ts?raw';
import { describe, expect, it } from 'vitest';
import { AGENT_IDS, type AgentState } from '../events/schema';
import { LIT, SCREENS, screenLit } from './screens';
import { START, WORK } from './places';

const STATES: readonly AgentState[] = [
  'idle',
  'walking',
  'thinking',
  'reading',
  'writing',
  'waiting',
  'needs-you',
  'done',
  'error',
];

describe("the keep's screens (4c.6, D12)", () => {
  it("every lit screen belongs to a work spot: its owner's", () => {
    for (const [owner, spot] of Object.entries(SCREENS))
      expect(spot).toBe(WORK[owner as keyof typeof SCREENS]);
  });

  it('the scene builds no screen the table does not name, and lights each by its owner', () => {
    // the desks with a screen, in the houses' source
    expect(houses.match(/desk\('screen'\)/g)?.length).toBe(Object.keys(SCREENS).length);
    expect(houses).toMatch(/const deskF = desk\('screen'\);/);
    expect(houses).toMatch(/const deskB = desk\('screen'\);/);
    // and the world's pairing of each with its owner
    expect(world).toMatch(/\[deskF, 'frontend'\],\s*\[deskB, 'backend'\],/);
  });

  it('glows only while its owner works there: at its own work spot, not walking, not held, in a working state', () => {
    for (const owner of AGENT_IDS) {
      for (const state of STATES) {
        const at = { spot: WORK[owner], walking: false, held: false, state };
        expect(screenLit(owner, at), `${owner} ${state}`).toBe(LIT.has(state));
        expect(screenLit(owner, { ...at, walking: true })).toBe(false);
        expect(screenLit(owner, { ...at, held: true })).toBe(false);
        expect(screenLit(owner, { ...at, spot: START[owner] })).toBe(false);
      }
      expect(screenLit(owner, { spot: WORK[owner], walking: false, held: false, state: null })).toBe(false);
    }
    // the working states, and waiting at the desk
    expect([...LIT].sort()).toEqual(['reading', 'thinking', 'waiting', 'writing']);
  });

  it("is dark while its owner is at someone else's work spot", () => {
    expect(screenLit('frontend', { spot: WORK.backend, walking: false, held: false, state: 'writing' })).toBe(
      false,
    );
  });
});
