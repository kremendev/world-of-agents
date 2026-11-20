import { describe, expect, it } from 'vitest';
import type { AgentId, AgentState } from '../events/schema';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../state/office';
import { ROOMS } from '../world/map';
import { roomBadges, roomLabel } from './rooms';

const set = (office: OfficeState, agent: AgentId, state: AgentState): OfficeState =>
  officeReducer(office, { type: 'state', agent, state, at: 1 });

const counts = (office: OfficeState) =>
  Object.fromEntries(roomBadges(office).map((b) => [b.id, [b.agents, b.needsYou]]));

describe('who is in which room (4d.3)', () => {
  it('counts from where the world says each figure is or is going, once it says (T: idle life moves them)', () => {
    const office = set(INITIAL_OFFICE, 'backend', 'needs-you');
    const badges = roomBadges(office, {
      lead: 'garden',
      designer: 'garden',
      frontend: 'tavern',
      backend: 'workshop',
      reviewer: 'tavern',
    });
    expect(Object.fromEntries(badges.map((b) => [b.id, [b.agents, b.needsYou]]))).toMatchObject({
      garden: [2, 0],
      tavern: [2, 0],
      workshop: [1, 1],
      court: [0, 0],
      yard: [0, 0],
    });
    // a figure the world doesn't name counts where its state puts it
    expect(roomBadges(INITIAL_OFFICE, { reviewer: 'tavern' }).find((b) => b.id === 'court')?.agents).toBe(0);
  });

  it("lists every room in the map's order, with the map's names", () => {
    expect(roomBadges(INITIAL_OFFICE).map((b) => b.name)).toEqual(ROOMS.map((r) => r.name));
    expect(roomBadges(INITIAL_OFFICE).map((b) => b.name)).toEqual([
      'War hall',
      'Library',
      'Design studio',
      'Workshop',
      'The Forge',
      'Tavern',
      'Training yard',
      'Courtyard',
      'Garden',
    ]);
  });

  it('counts everyone at rest in the idle areas, and nobody at work or at the Forge', () => {
    expect(counts(INITIAL_OFFICE)).toEqual({
      war: [0, 0],
      library: [0, 0],
      studio: [0, 0],
      workshop: [0, 0],
      forge: [0, 0],
      tavern: [1, 0],
      yard: [1, 0],
      court: [1, 0],
      garden: [2, 0],
    });
  });

  it('counts a working agent in its work room, and the agents there that need you', () => {
    let office = set(INITIAL_OFFICE, 'frontend', 'writing');
    office = set(office, 'backend', 'needs-you');
    office = set(office, 'lead', 'thinking');
    const c = counts(office);
    expect(c.workshop).toEqual([2, 1]);
    expect(c.war).toEqual([1, 0]);
    expect(c.yard).toEqual([0, 0]);
    expect(c.tavern).toEqual([0, 0]);
    expect(c.garden).toEqual([1, 0]);
    // five agents, wherever they are
    expect(roomBadges(office).reduce((n, b) => n + b.agents, 0)).toBe(5);
  });

  it("counts a dev at its desk in Live from the start: the scroll stop is the world's, not the page's", () => {
    let office = officeReducer(INITIAL_OFFICE, {
      type: 'task',
      taskId: 't1',
      title: 'Build the cards',
      owner: 'frontend',
      status: 'in-progress',
      at: 1,
    });
    office = officeReducer(office, {
      type: 'state',
      agent: 'frontend',
      state: 'writing',
      taskId: 't1',
      at: 2,
    });
    expect(counts(office).workshop).toEqual([1, 0]);
    expect(counts(office).war).toEqual([0, 0]);
  });

  it("leaves out an agent whose place is the world's to keep (walking)", () => {
    const office = set(INITIAL_OFFICE, 'reviewer', 'walking');
    expect(roomBadges(office).reduce((n, b) => n + b.agents, 0)).toBe(4);
  });

  it('says a room, its agents and who needs you in words', () => {
    expect(roomLabel({ id: 'forge', name: 'The Forge', agents: 0, needsYou: 0 })).toBe('The Forge');
    expect(roomLabel({ id: 'tavern', name: 'Tavern', agents: 1, needsYou: 0 })).toBe('Tavern, 1 agent');
    expect(roomLabel({ id: 'workshop', name: 'Workshop', agents: 2, needsYou: 1 })).toBe(
      'Workshop, 2 agents, one needs you',
    );
    expect(roomLabel({ id: 'workshop', name: 'Workshop', agents: 3, needsYou: 2 })).toBe(
      'Workshop, 3 agents, 2 need you',
    );
  });
});
