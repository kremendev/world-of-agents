import { describe, expect, it } from 'vitest';
import {
  CASTLE,
  GRAPH,
  ROADS,
  ROOM,
  ROOMS,
  SPOT_IDS,
  SPOTS,
  islandR,
  route,
  routeFromNode,
  toLocal,
  type Room,
} from './map';

const { atan2, hypot } = Math;

/** Inside a room's ground: a house's walls, or an open area's ring. */
function inside(r: Room, x: number, z: number, margin = 0): boolean {
  if (r.kind === 'house') {
    const [lx, lz] = toLocal(r, x, z);
    return Math.abs(lx) <= r.w / 2 + margin && Math.abs(lz) <= r.d / 2 + margin;
  }
  return hypot(x - r.x, z - r.z) <= r.r + margin;
}

describe('the map', () => {
  it('has the nine areas the plan names, four of them houses with doors', () => {
    expect(ROOMS.map((r) => r.id).sort()).toEqual(
      ['court', 'forge', 'garden', 'library', 'studio', 'tavern', 'war', 'workshop', 'yard'].sort(),
    );
    expect(ROOMS.filter((r) => r.kind === 'house').map((r) => r.id)).toEqual([
      'war',
      'library',
      'studio',
      'workshop',
      'tavern',
    ]);
  });

  it('puts each hub inside its area, and each door on its house wall', () => {
    for (const r of ROOMS) {
      expect(inside(r, ...r.hubW), r.id).toBe(true);
      if (r.kind === 'house') {
        const [dx, dz] = r.doorLocal;
        expect(Math.abs(Math.abs(dx) - r.w / 2) < 1e-9 || Math.abs(Math.abs(dz) - r.d / 2) < 1e-9, r.id).toBe(
          true,
        );
        expect(inside(r, ...r.inW), `${r.id} in`).toBe(true);
        expect(inside(r, ...r.outW), `${r.id} out`).toBe(false);
      }
    }
  });

  it('puts every spot in its area: inside, or for a terrace or beer garden just outside its house', () => {
    expect(SPOT_IDS).toHaveLength(21);
    for (const id of SPOT_IDS) {
      const s = SPOTS[id];
      const r = ROOM[s.room];
      if (s.out) {
        expect(inside(r, s.x, s.z), id).toBe(false);
        expect(inside(r, s.x, s.z, 4), id).toBe(true);
      } else {
        // An open area's spots may stand on its rim: the Courtyard's bench is 0.56 m past its 6 m ring.
        expect(inside(r, s.x, s.z, r.kind === 'house' ? 0 : 1), id).toBe(true);
      }
    }
  });

  it('is one walking graph: every node reaches every other', () => {
    const ids = Object.keys(GRAPH);
    const seen = new Set(['hub:forge']);
    const queue = ['hub:forge'];
    for (let id = queue.shift(); id !== undefined; id = queue.shift()) {
      for (const next of GRAPH[id]?.edges ?? []) {
        if (!seen.has(next)) {
          seen.add(next);
          queue.push(next);
        }
      }
    }
    expect(ids.filter((id) => !seen.has(id))).toEqual([]);
    for (const n of Object.values(GRAPH))
      for (const e of n.edges) expect(GRAPH[e]?.edges, `${n.id}-${e}`).toContain(n.id);
  });

  it('routes every spot to every other, ending on the spot, through its room', () => {
    for (const a of SPOT_IDS) {
      for (const b of SPOT_IDS) {
        if (a === b) continue;
        const path = route(a, b);
        const end = path[path.length - 1];
        expect(end, `${a} -> ${b}`).toEqual({ x: SPOTS[b].x, z: SPOTS[b].z });
        expect(
          path.some((p) => p.node === SPOTS[b].anchor),
          `${a} -> ${b}`,
        ).toBe(true);
        // A terrace or beer garden is reached from outside its house, never through a wall.
        const lastNode = [...path].reverse().find((p) => p.node !== undefined);
        if (SPOTS[b].out && lastNode) {
          expect(inside(ROOM[SPOTS[b].room], lastNode.x, lastNode.z), `${a} -> ${b}`).toBe(false);
        }
      }
    }
  });

  it('turns mid-path: from any road node to any spot', () => {
    const roadNodes = Object.keys(GRAPH).filter((id) => id.startsWith('r:'));
    expect(roadNodes.length).toBeGreaterThan(50);
    for (const node of roadNodes.filter((_, i) => i % 7 === 0)) {
      for (const b of SPOT_IDS) {
        const path = routeFromNode(node, b);
        expect(path[0]?.node, `${node} -> ${b}`).toBe(node);
        expect(path[path.length - 1], `${node} -> ${b}`).toEqual({ x: SPOTS[b].x, z: SPOTS[b].z });
      }
    }
  });

  it('ends each road that names a door or an entry exactly there', () => {
    for (const rd of ROADS) {
      rd.refs.forEach((ref, i) => {
        if (!ref) return;
        const node = GRAPH[ref];
        expect(node, `${rd.id}: ${ref}`).toBeDefined();
        expect(rd.ctrl[i], `${rd.id}: ${ref}`).toEqual([node?.x, node?.z]);
      });
      const first = rd.line[0];
      const last = rd.line[rd.line.length - 1];
      if (!rd.closed) {
        expect(first, rd.id).toEqual(rd.ctrl[0]);
        expect(last, rd.id).toEqual(rd.ctrl[rd.ctrl.length - 1]);
      }
    }
  });

  it('keeps the castle walls on the island', () => {
    for (const [x, z] of CASTLE.pts) expect(hypot(x, z), `${x},${z}`).toBeLessThan(islandR(atan2(z, x)));
    for (const r of ROOMS) expect(hypot(r.x, r.z), r.id).toBeLessThan(islandR(atan2(r.z, r.x)));
  });
});
