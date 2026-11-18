/**
 * The Forge Keep's map: where everything stands, the roads, and how agents get around (v4.0.0, 4a). Ported from
 * `town/src/world.js` on `forge-keep` (89ae8b1), same numbers and same algorithms, so the scene and the checks share it.
 * Pure data, no DOM and no three.js. Units are metres; x is east, z is south. A house has its own frame: local +z is its
 * front, turned by `ry`.
 */

export type Vec2 = readonly [number, number];

const { cos, sin, atan2, hypot, PI } = Math;

/** A raised floor's height above the ground. */
export const FLOOR_H = 0.22;

type Placed = { readonly x: number; readonly z: number; readonly ry: number };

/** A point in a room's (or any placed thing's) own frame, in world coordinates. */
export const toWorld = (r: Placed, x: number, z: number): Vec2 => {
  const a = r.ry;
  return [r.x + x * cos(a) + z * sin(a), r.z - x * sin(a) + z * cos(a)];
};

/** A world point in a room's own frame. */
export const toLocal = (r: Placed, X: number, Z: number): Vec2 => {
  const a = r.ry;
  const dx = X - r.x;
  const dz = Z - r.z;
  return [dx * cos(a) - dz * sin(a), dx * sin(a) + dz * cos(a)];
};

/** The turn (about y) that faces from one point to another. */
export const face = (fx: number, fz: number, tx: number, tz: number): number => atan2(tx - fx, tz - fz);

/* ---------------- places */

export type RoomId =
  'war' | 'library' | 'studio' | 'workshop' | 'forge' | 'tavern' | 'yard' | 'court' | 'garden';
type Side = 'S' | 'N' | 'E' | 'W';

type RoomCommon = {
  readonly id: RoomId;
  readonly name: string;
  readonly x: number;
  readonly z: number;
  readonly ry: number;
  /** Where the room's paths meet, in its own frame, and in the world. */
  readonly hub: Vec2;
  readonly hubW: Vec2;
  readonly desc: string;
};

export type House = RoomCommon & {
  readonly kind: 'house';
  readonly w: number;
  readonly d: number;
  readonly wallH: number;
  readonly door: { readonly side: Side; readonly off: number; readonly width: number };
  readonly floor: string;
  readonly storeys?: number;
  readonly upperH?: number;
  /** A terrace outside: [x0, x1, z0, z1] in the house's frame. */
  readonly deck?: readonly [number, number, number, number];
  readonly doorLocal: Vec2;
  readonly doorN: Vec2;
  /** Just inside and just outside the door, in the house's frame and in the world. */
  readonly inLocal: Vec2;
  readonly outLocal: Vec2;
  readonly inW: Vec2;
  readonly outW: Vec2;
};

export type OpenArea = RoomCommon & {
  readonly kind: 'open' | 'arena';
  readonly r: number;
  /** The arena's gate, as a turn about its centre. */
  readonly gate?: number;
  /** The way in, from the hub outwards; the last one is where a road joins. */
  readonly entries: readonly Vec2[];
  readonly entriesW: readonly Vec2[];
};

export type Room = House | OpenArea;

type HouseDef = Omit<House, 'hubW' | 'doorLocal' | 'doorN' | 'inLocal' | 'outLocal' | 'inW' | 'outW'>;
type OpenDef = Omit<OpenArea, 'hubW' | 'entriesW'>;

const SIDE_N: Record<Side, Vec2> = { S: [0, 1], N: [0, -1], E: [1, 0], W: [-1, 0] };

function house(def: HouseDef): House {
  const { side, off } = def.door;
  const n = SIDE_N[side];
  const p: Vec2 =
    side === 'S'
      ? [off, def.d / 2]
      : side === 'N'
        ? [off, -def.d / 2]
        : side === 'E'
          ? [def.w / 2, off]
          : [-def.w / 2, off];
  const inLocal: Vec2 = [p[0] - n[0] * 1.1, p[1] - n[1] * 1.1];
  const outLocal: Vec2 = [p[0] + n[0] * 1.5, p[1] + n[1] * 1.5];
  return {
    ...def,
    doorLocal: p,
    doorN: n,
    inLocal,
    outLocal,
    inW: toWorld(def, ...inLocal),
    outW: toWorld(def, ...outLocal),
    hubW: toWorld(def, ...def.hub),
  };
}

function area(def: OpenDef): OpenArea {
  return { ...def, hubW: toWorld(def, ...def.hub), entriesW: def.entries.map((e) => toWorld(def, ...e)) };
}

export const ROOMS: readonly Room[] = [
  house({
    id: 'war',
    name: 'War hall',
    kind: 'house',
    x: -6,
    z: -22,
    ry: 0.06,
    w: 15,
    d: 9,
    wallH: 3.0,
    door: { side: 'S', off: 0, width: 2.4 },
    hub: [0, 2.7],
    floor: 'war',
    desc: 'Where the Lead/PM plans the run and keeps the task board.',
  }),
  house({
    id: 'library',
    name: 'Library',
    kind: 'house',
    x: 24,
    z: -21,
    ry: -0.32,
    w: 10,
    d: 8,
    wallH: 2.8,
    door: { side: 'S', off: -2.2, width: 1.6 },
    hub: [-1.2, 1.0],
    floor: 'dark',
    storeys: 2,
    upperH: 2.5,
    desc: 'Where the Reviewer checks the work. The archive is upstairs.',
  }),
  house({
    id: 'studio',
    name: 'Design studio',
    kind: 'house',
    x: 30,
    z: 2,
    ry: -1.37,
    w: 9,
    d: 7,
    wallH: 2.7,
    door: { side: 'S', off: 0, width: 1.6 },
    hub: [0, 1.6],
    floor: 'light',
    deck: [-4.2, 4.2, 3.5, 7.6],
    desc: 'Where the Designer lays out pages. Paints on the terrace when free.',
  }),
  house({
    id: 'workshop',
    name: 'Workshop',
    kind: 'house',
    x: -27,
    z: -4,
    ry: 0.28,
    w: 12,
    d: 8,
    wallH: 2.8,
    door: { side: 'E', off: 1, width: 1.8 },
    hub: [-0.5, 1.8],
    floor: 'tiles',
    desc: 'Where the Frontend dev and the Backend dev write code.',
  }),
  area({
    id: 'forge',
    name: 'The Forge',
    kind: 'open',
    x: 0,
    z: 0,
    ry: 0,
    r: 7.6,
    hub: [-5.0, 5.0],
    entries: [[-7.3, 7.3]],
    desc: 'The furnace burns hotter the more agents are working.',
  }),
  house({
    id: 'tavern',
    name: 'Tavern',
    kind: 'house',
    x: 20.5,
    z: 18.6,
    ry: -0.2,
    w: 11,
    d: 8,
    wallH: 2.8,
    door: { side: 'W', off: 1.5, width: 1.8 },
    hub: [-3.6, 2.6],
    floor: 'planks',
    storeys: 2,
    upperH: 2.5,
    desc: 'Where agents with no task have a drink. Rooms to sleep in upstairs.',
  }),
  area({
    id: 'yard',
    name: 'Training yard',
    kind: 'arena',
    x: -24,
    z: 17,
    ry: 0,
    r: 7.5,
    gate: -0.526,
    hub: [0.5, -1.4],
    entries: [
      [4.85, -2.81],
      [7.71, -4.47],
    ],
    desc: 'Sparring and target practice between tasks.',
  }),
  area({
    id: 'court',
    name: 'Courtyard',
    kind: 'open',
    x: 2,
    z: 24,
    ry: 0,
    r: 6,
    hub: [-1.8, 0.2],
    entries: [[0.4, 0.2]],
    desc: 'The square inside the gate: the well, the market stall, the notice board.',
  }),
  area({
    id: 'garden',
    name: 'Garden',
    kind: 'open',
    x: -29,
    z: -20,
    ry: 0,
    r: 7.4,
    hub: [3.6, 2.4],
    entries: [
      [5.6, 4.6],
      [6.6, 5.6],
    ],
    desc: 'A quiet ring of hedges around the pond.',
  }),
];

export const ROOM = Object.fromEntries(ROOMS.map((r) => [r.id, r])) as Readonly<Record<RoomId, Room>>;

/* ---------------- spots: where an agent stands, sits or works */

export type Pose =
  'plan' | 'point' | 'idle' | 'readsit' | 'read' | 'type' | 'paint' | 'smash' | 'spar' | 'drink' | 'sit';

export type Spot = {
  readonly room: RoomId;
  /** Where it is in its room's frame, and which way it faces there. */
  readonly lx: number;
  readonly lz: number;
  readonly lry: number;
  readonly pose: Pose;
  readonly doing: string;
  /** A point to pass on the way, in the room's frame (around a desk, say). */
  readonly via?: Vec2;
  /** Outside its house (a terrace, a beer garden): reached from the door's outside, not the hub. */
  readonly out?: boolean;
  readonly x: number;
  readonly z: number;
  readonly ry: number;
  readonly viaW?: Vec2;
  /** The walking graph's node the spot hangs from. */
  readonly anchor: string;
};

type SpotDef = Pick<Spot, 'room' | 'lx' | 'lz' | 'lry' | 'pose' | 'doing' | 'via' | 'out'>;

const S = (
  room: RoomId,
  lx: number,
  lz: number,
  lry: number,
  pose: Pose,
  doing: string,
  o: Pick<SpotDef, 'via' | 'out'> = {},
): SpotDef => ({ room, lx, lz, lry, pose, doing, ...o });

const SPOT_DEFS = {
  'war-table': S('war', -0.3, 0.9, face(-0.3, 0.9, -2.5, -0.6), 'plan', 'planning at the war table'),
  'war-board': S('war', 3.8, -2.8, PI, 'point', 'updating the task board'),
  'war-rug': S(
    'war',
    -4.0,
    1.8,
    face(-4.0, 1.8, -6.1, -2.6),
    'idle',
    "thinking it over by the war chief's seat",
  ),
  'lib-desk': S('library', 1.8, -1.98, 0, 'readsit', 'reviewing at the library desk', { via: [0.3, -2.1] }),
  'lib-chair': S('library', -2.0, 2.3, 0.4, 'read', 'reading by the armchair'),
  'lib-shelf': S('library', -2.4, -2.5, PI, 'read', 'browsing the shelves'),
  'studio-desk': S('studio', -2.0, -2.38, 0, 'type', 'drafting the layout', { via: [-0.6, -2.5] }),
  'studio-easel': S('studio', -2.4, 6.2, face(-2.4, 6.2, -1.5, 5.3), 'paint', 'painting on the terrace', {
    out: true,
  }),
  'desk-frontend': S('workshop', -3.0, -2.18, 0, 'smash', 'writing code', { via: [-0.5, -2.45] }),
  'desk-backend': S('workshop', 2.0, -2.18, 0, 'type', 'writing code', { via: [-0.5, -2.45] }),
  'forge-anvil': S('forge', -3.9, 3.9, face(-3.9, 3.9, -2.9, 2.9), 'spar', 'hammering at the anvil'),
  'tavern-1': S('tavern', -3.1, 0.8, PI / 2, 'drink', 'having a drink in the tavern'),
  'tavern-2': S('tavern', -1.3, 0.8, -PI / 2, 'drink', 'having a drink in the tavern', { via: [-1.0, 2.1] }),
  'tavern-3': S('tavern', 0.4, 5.75, 0, 'drink', 'having a drink in the beer garden', {
    out: true,
    via: [-6.2, 5.0],
  }),
  'tavern-bar': S('tavern', 2.9, -0.8, PI / 2, 'idle', 'leaning on the bar'),
  'yard-1': S('yard', -3.2, 0.7, 0, 'spar', 'sparring in the yard'),
  'yard-2': S('yard', 1.6, 1.8, 0, 'spar', 'sparring in the yard'),
  'court-bench': S('court', -5.2, -4.0, 0, 'sit', 'resting on the courtyard bench'),
  'court-well': S('court', -3.9, 1.0, face(-3.9, 1.0, -5.8, 2.0), 'idle', 'chatting by the well'),
  'garden-easel': S('garden', 3.0, -3.4, face(3.0, -3.4, 2.2, -4.3), 'paint', 'painting in the garden'),
  'garden-pond': S('garden', 1.4, 2.4, face(1.4, 2.4, -1, 0), 'idle', 'watching the pond'),
  // 4b, not in the town (Dima's answers of 17 Nov, docs/v4.0-plan.md, "States and places"): where the devs collect their
  // task scrolls, at the War hall's task board on its north wall; where the Reviewer reviews, beside the agent at its
  // desk, the way round the desk first; and where the Lead checks on the devs, in the Workshop facing their desks
  'fetch-designer': S('war', 2.7, -1.6, face(2.7, -1.6, 3.8, -4.4), 'idle', 'collecting the task scroll'),
  'fetch-frontend': S('war', 3.8, -1.4, face(3.8, -1.4, 3.8, -4.4), 'idle', 'collecting the task scroll'),
  'fetch-backend': S('war', 4.9, -1.6, face(4.9, -1.6, 3.8, -4.4), 'idle', 'collecting the task scroll'),
  'visit-designer': S(
    'studio',
    -3.3,
    -2.1,
    face(-3.3, -2.1, -2.0, -2.38),
    'read',
    "reviewing the Designer's work",
    {
      via: [-3.4, -0.6],
    },
  ),
  'visit-frontend': S(
    'workshop',
    -4.3,
    -2.0,
    face(-4.3, -2.0, -3.0, -2.18),
    'read',
    "reviewing the Frontend dev's work",
    {
      via: [-4.4, -0.4],
    },
  ),
  'visit-backend': S(
    'workshop',
    3.2,
    -2.0,
    face(3.2, -2.0, 2.0, -2.18),
    'read',
    "reviewing the Backend dev's work",
    {
      via: [3.4, -0.4],
    },
  ),
  'workshop-check': S('workshop', -0.5, 0.4, face(-0.5, 0.4, -0.5, -1.4), 'point', 'checking on the devs'),
} as const satisfies Record<string, SpotDef>;

export type SpotId = keyof typeof SPOT_DEFS;

export const SPOTS = Object.fromEntries(
  Object.entries(SPOT_DEFS).map(([id, def]: [string, SpotDef]) => {
    const r = ROOM[def.room];
    const [x, z] = toWorld(r, def.lx, def.lz);
    const spot: Spot = {
      ...def,
      x,
      z,
      ry: def.lry + r.ry,
      ...(def.via ? { viaW: toWorld(r, ...def.via) } : {}),
      anchor: (def.out ? 'out:' : 'hub:') + def.room,
    };
    return [id, spot];
  }),
) as Readonly<Record<SpotId, Spot>>;

export const SPOT_IDS = Object.keys(SPOT_DEFS) as readonly SpotId[];

/* ---------------- the castle and the island */

export const CASTLE = {
  pts: [
    [-38, -28],
    [-12, -35],
    [18, -34],
    [40, -22],
    [45, 4],
    [38, 27],
    [12, 35],
    [-8, 35],
    [-30, 30],
    [-43, 6],
  ] as readonly Vec2[],
  /** Openings in the wall: on segment `seg` (from pts[seg] to the next), at `t` along it, `w` wide. */
  gaps: [
    { seg: 6, t: 0.5, w: 4.4, kind: 'gate' },
    { seg: 9, t: 0.6, w: 3.0, kind: 'water' },
  ] as const,
  h: 4.2,
  thick: 1.6,
};

/** The island's half-axes, east-west and north-south. */
export const IA = 60;
export const IB = 52;

/** The island's edge at the turn t (about y, from east towards south): an ellipse with a gently waved rim. */
export const islandR = (t: number): number => {
  const e = (IA * IB) / hypot(IB * cos(t), IA * sin(t));
  return e * (1 + 0.05 * sin(3 * t + 0.7) + 0.035 * sin(5 * t + 2.1) + 0.02 * sin(9 * t));
};

export type Decor =
  | {
      readonly kind: 'hut';
      readonly id: string;
      readonly name: string;
      readonly desc: string;
      readonly floor: string;
      readonly x: number;
      readonly z: number;
      readonly ry: number;
      readonly w: number;
      readonly d: number;
    }
  | {
      readonly kind: 'windmill' | 'watch' | 'shrine' | 'camp';
      readonly x: number;
      readonly z: number;
      readonly r: number;
    };

/** Buildings nobody works in: they fill the town so it reads as a place people live. */
export const DECOR: readonly Decor[] = [
  {
    kind: 'hut',
    id: 'barracks',
    name: 'Barracks',
    desc: 'Bunks and spare weapons.',
    floor: 'planks',
    x: -35.2,
    z: 5.0,
    ry: 0.42,
    w: 6,
    d: 4.4,
  },
  {
    kind: 'hut',
    id: 'store',
    name: 'Store house',
    desc: 'Supplies for the keep: crates, sacks and barrels.',
    floor: 'planks',
    x: -37.6,
    z: -9.5,
    ry: 1.42,
    w: 5,
    d: 3.6,
  },
  {
    kind: 'hut',
    id: 'stable',
    name: 'Stable',
    desc: 'Where the wolf mounts sleep.',
    floor: 'planks',
    x: 11.5,
    z: 29.4,
    ry: -0.08,
    w: 6.4,
    d: 3.6,
  },
  {
    kind: 'hut',
    id: 'granary',
    name: 'Granary',
    desc: 'Grain and flour for the tavern.',
    floor: 'planks',
    x: 9.5,
    z: -27.5,
    ry: -0.2,
    w: 4.6,
    d: 3.8,
  },
  { kind: 'windmill', x: 35, z: 13, r: 2.6 },
  { kind: 'watch', x: 36.5, z: -8.5, r: 2.0 },
  { kind: 'shrine', x: -17.6, z: -28.4, r: 2.8 },
  { kind: 'camp', x: -13.5, z: 27.5, r: 4.2 },
];

/* ---------------- roads: control points, sampled into smooth curves */

const circle = (cx: number, cz: number, r: number, n: number, a0 = 0): Vec2[] =>
  Array.from({ length: n }, (_, i): Vec2 => [
    cx + r * cos(a0 + (i / n) * 2 * PI),
    cz + r * sin(a0 + (i / n) * 2 * PI),
  ]);

const edgeAt = (t: number, inset = 0): Vec2 => [cos(t) * (islandR(t) - inset), sin(t) * (islandR(t) - inset)];

/** The brook from the Garden's pond to the island's edge, where it falls. */
export const STREAM: readonly Vec2[] = [
  [-32.4, -19.6],
  [-35.6, -18.0],
  [-40.0, -14.4],
  [-45.5, -12.6],
  [-51, -11.8],
  edgeAt(atan2(-11.4, -56), 0.4),
];

/** Where the dock road meets the island's edge. */
export const DOCK_EDGE: Vec2 = edgeAt(atan2(49, 2.2));

export type RoadKind = 'cobble' | 'flag' | 'dirt' | 'stones';

/** A road's point: a position, or a node of the walking graph (`out:<house>`, `entry:<area>`). */
type RoadPoint = Vec2 | `out:${RoomId}` | `entry:${RoomId}`;

export type Road = {
  readonly id: string;
  readonly w: number;
  readonly kind: RoadKind;
  readonly closed?: boolean;
  /** false: for looks only, agents don't walk it. */
  readonly nav?: boolean;
  readonly pts: readonly RoadPoint[];
  /** Its control points as positions, which of them name a node, and the smooth line through them every 0.5 m. */
  readonly ctrl: readonly Vec2[];
  readonly refs: readonly (string | null)[];
  readonly line: readonly Vec2[];
};

type RoadDef = Pick<Road, 'id' | 'w' | 'kind' | 'closed' | 'nav' | 'pts'>;

const ROAD_DEFS: readonly RoadDef[] = [
  {
    id: 'main',
    w: 4.4,
    kind: 'cobble',
    pts: [
      [2, 33.8],
      [2.6, 28],
      [1.7, 21],
      [0.5, 14.5],
      [0, 10.4],
    ],
  },
  { id: 'ring', w: 3.2, kind: 'cobble', closed: true, pts: circle(0, 0, 10, 16) },
  {
    id: 'war',
    w: 3.6,
    kind: 'flag',
    pts: [[-0.6, -10.4], [-2.8, -13.6], 'out:war'],
  },
  {
    id: 'library',
    w: 2.3,
    kind: 'dirt',
    pts: [[7.3, -7.0], [11.5, -11.4], [16.4, -14.6], 'out:library'],
  },
  {
    id: 'studio',
    w: 2.2,
    kind: 'flag',
    pts: [[10.3, 1.2], [15.5, 2.9], [20.6, 2.7], 'out:studio'],
  },
  {
    id: 'tavern',
    w: 2.8,
    kind: 'cobble',
    pts: [[2.6, 21.4], [7.5, 21.2], [11.0, 19.6], 'out:tavern'],
  },
  {
    id: 'workshop',
    w: 2.8,
    kind: 'cobble',
    pts: [[-10.3, -1.4], [-14.6, -3.4], 'out:workshop'],
  },
  {
    id: 'yard',
    w: 2.3,
    kind: 'dirt',
    pts: [[-7.3, 7.1], [-11.6, 9.8], 'entry:yard'],
  },
  {
    id: 'garden',
    w: 1.7,
    kind: 'dirt',
    pts: [[-14.6, -3.6], [-17.6, -9.4], [-20.6, -12.8], 'entry:garden'],
  },
  {
    id: 'lib-war',
    w: 1.6,
    kind: 'dirt',
    pts: [
      [11.3, -11.3],
      [5.6, -14.6],
      [-1.4, -15.2],
      [-3.2, -14.6],
    ],
  },
  {
    id: 'tav-studio',
    w: 1.5,
    kind: 'dirt',
    pts: [
      [11.0, 19.6],
      [12.6, 15.8],
      [15.0, 11.4],
      [20.4, 8.0],
      [24.4, 4.4],
    ],
  },
  {
    id: 'yard-court',
    w: 1.8,
    kind: 'dirt',
    pts: [
      [-11.6, 9.8],
      [-10.2, 15.4],
      [-5.6, 20.6],
      [-0.4, 22.6],
    ],
  },
  {
    id: 'dock',
    w: 3.6,
    kind: 'dirt',
    nav: false,
    pts: [[2, 36.4], [3.2, 41.5], [2.4, 46.2], DOCK_EDGE],
  },
  { id: 'pond', w: 1.3, kind: 'stones', closed: true, pts: circle(-30, -20, 4.3, 12, 0.3) },
  // footpaths to the buildings nobody works in (for looks, agents don't use them)
  {
    id: 'to-shrine',
    w: 1.3,
    kind: 'dirt',
    nav: false,
    pts: [
      [-20.6, -12.8],
      [-18.6, -19.0],
      [-17.8, -25.0],
    ],
  },
  {
    id: 'to-mill',
    w: 1.4,
    kind: 'dirt',
    nav: false,
    pts: [
      [20.4, 8.0],
      [27.0, 9.8],
      [32.2, 12.2],
    ],
  },
  {
    id: 'to-watch',
    w: 1.3,
    kind: 'dirt',
    nav: false,
    pts: [
      [16.4, -14.6],
      [24.0, -11.0],
      [30.5, -9.4],
      [34.2, -8.7],
    ],
  },
  {
    id: 'to-barracks',
    w: 1.4,
    kind: 'dirt',
    nav: false,
    pts: [
      [-19.5, -5.1],
      [-18.6, -0.6],
      [-22.0, 3.6],
      [-28.6, 4.6],
      [-32.2, 6.6],
    ],
  },
  {
    id: 'to-stable',
    w: 1.6,
    kind: 'cobble',
    nav: false,
    pts: [
      [3.4, 30.4],
      [6.0, 30.9],
      [7.8, 29.8],
    ],
  },
  {
    id: 'to-granary',
    w: 1.2,
    kind: 'dirt',
    nav: false,
    pts: [
      [5.6, -14.6],
      [7.6, -20.0],
      [9.0, -25.2],
    ],
  },
  {
    id: 'to-camp',
    w: 1.3,
    kind: 'dirt',
    nav: false,
    pts: [
      [-5.6, 20.6],
      [-9.0, 24.4],
      [-10.6, 25.8],
    ],
  },
];

/** A road's node reference as a position: outside a house's door, or an open area's outermost entry. */
function refPoint(ref: string): Vec2 {
  const [k, id] = ref.split(':') as [string, RoomId];
  const r = ROOM[id];
  if (k === 'out' && r.kind === 'house') return r.outW;
  if (k === 'entry' && r.kind !== 'house') {
    const last = r.entriesW[r.entriesW.length - 1];
    if (last) return last;
  }
  throw new Error(`no such road point: ${ref}`);
}

/** A Catmull-Rom curve through the points, resampled every `step` metres. */
export function sample(pts: readonly Vec2[], closed: boolean, step: number): Vec2[] {
  const n = pts.length;
  const get = (i: number): Vec2 => {
    const p = closed ? pts[((i % n) + n) % n] : pts[Math.max(0, Math.min(n - 1, i))];
    if (!p) throw new Error('no points to sample');
    return p;
  };
  const dense: Vec2[] = [];
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const p0 = get(i - 1);
    const p1 = get(i);
    const p2 = get(i + 1);
    const p3 = get(i + 2);
    const k = Math.max(6, Math.ceil(hypot(p2[0] - p1[0], p2[1] - p1[1]) / 0.2));
    for (let j = 0; j < k; j++) {
      const t = j / k;
      const t2 = t * t;
      const t3 = t2 * t;
      const f = (a: number, b: number, c: number, d: number) =>
        0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      dense.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  dense.push(closed ? (dense[0] as Vec2) : get(n - 1));
  const first = dense[0] as Vec2;
  const out: Vec2[] = [first];
  let acc = 0;
  for (let i = 1; i < dense.length; i++) {
    const a = dense[i - 1] as Vec2;
    const b = dense[i] as Vec2;
    acc += hypot(b[0] - a[0], b[1] - a[1]);
    if (acc >= step) {
      out.push(b);
      acc = 0;
    }
  }
  const last = dense[dense.length - 1] as Vec2;
  const tail = out[out.length - 1] as Vec2;
  if (hypot(tail[0] - last[0], tail[1] - last[1]) < step * 0.5) out[out.length - 1] = last;
  else out.push(last);
  if (closed) out.pop();
  return out;
}

export const ROADS: readonly Road[] = ROAD_DEFS.map((rd) => {
  const ctrl = rd.pts.map((p) => (typeof p === 'string' ? refPoint(p) : p));
  return {
    ...rd,
    ctrl,
    refs: rd.pts.map((p) => (typeof p === 'string' ? p : null)),
    line: sample(ctrl, !!rd.closed, 0.5),
  };
});

export const BROOK_LINE: readonly Vec2[] = sample(STREAM, false, 0.5);

/* ---------------- the walking graph */

export type GraphNode = {
  readonly id: string;
  readonly x: number;
  readonly z: number;
  readonly edges: string[];
};

function buildGraph(): Readonly<Record<string, GraphNode>> {
  const N: Record<string, GraphNode> = {};
  const node = (id: string, x: number, z: number) => (N[id] = { id, x, z, edges: [] });
  const at = (id: string): GraphNode => {
    const n = N[id];
    if (!n) throw new Error(`no node ${id}`);
    return n;
  };
  const link = (a: string, b: string) => {
    if (a === b || at(a).edges.includes(b)) return;
    at(a).edges.push(b);
    at(b).edges.push(a);
  };

  for (const r of ROOMS) {
    node(`hub:${r.id}`, ...r.hubW);
    if (r.kind === 'house') {
      node(`in:${r.id}`, ...r.inW);
      node(`out:${r.id}`, ...r.outW);
      link(`hub:${r.id}`, `in:${r.id}`);
      link(`in:${r.id}`, `out:${r.id}`);
    } else {
      let prev = `hub:${r.id}`;
      r.entriesW.forEach((e, i) => {
        const id = i === r.entriesW.length - 1 ? `entry:${r.id}` : `e:${r.id}:${i}`;
        node(id, ...e);
        link(prev, id);
        prev = id;
      });
    }
  }

  const roadNodes: Record<string, string[]> = {};
  const endIds: Record<string, string[]> = {};
  for (const rd of ROADS) {
    if (rd.nav === false) continue;
    const ids: string[] = [];
    const L = rd.line;
    const every = 4;
    for (let i = 0; i < L.length; i++) {
      const isEnd = !rd.closed && (i === 0 || i === L.length - 1);
      if (!isEnd && i % every !== 0) continue;
      const ref =
        !rd.closed && i === 0
          ? rd.refs[0]
          : !rd.closed && i === L.length - 1
            ? rd.refs[rd.refs.length - 1]
            : null;
      const id = ref || `r:${rd.id}:${i}`;
      const p = L[i] as Vec2;
      if (!ref) node(id, p[0], p[1]);
      const prev = ids[ids.length - 1];
      if (prev !== undefined) link(prev, id);
      ids.push(id);
    }
    if (rd.closed) link(ids[ids.length - 1] as string, ids[0] as string);
    roadNodes[rd.id] = ids;
    endIds[rd.id] = rd.closed ? [] : [ids[0] as string, ids[ids.length - 1] as string];
  }

  // tie road ends to the nearest point of another road
  const nearest = (x: number, z: number, skip: string | null): [string | null, number] => {
    let best: string | null = null;
    let bd = Infinity;
    for (const [rid, ids] of Object.entries(roadNodes)) {
      if (rid === skip) continue;
      for (const id of ids) {
        const d = hypot(at(id).x - x, at(id).z - z);
        if (d < bd) {
          bd = d;
          best = id;
        }
      }
    }
    return [best, bd];
  };
  for (const rd of ROADS) {
    if (rd.nav === false || rd.closed) continue;
    (endIds[rd.id] ?? []).forEach((id, k) => {
      if (rd.refs[k === 0 ? 0 : rd.refs.length - 1]) return;
      const [best, d] = nearest(at(id).x, at(id).z, rd.id);
      if (best && d < 4.5) link(id, best);
    });
  }
  // open areas whose entry no road names join the nearest road
  for (const r of ROOMS) {
    if (r.kind === 'house') continue;
    const id = `entry:${r.id}`;
    if (ROADS.some((rd) => rd.refs.includes(id))) continue;
    const [best] = nearest(at(id).x, at(id).z, null);
    if (best) link(id, best);
  }
  // the ring around the pond joins the garden path where they meet
  const [best] = nearest(...ROOM.garden.hubW, 'garden');
  if (best && best.startsWith('r:pond')) link('hub:garden', best);
  return N;
}

export const GRAPH = buildGraph();

const nodeOf = (id: string): GraphNode => {
  const n = GRAPH[id];
  if (!n) throw new Error(`no node ${id}`);
  return n;
};

/** The shortest way through the graph (Dijkstra), as node ids from `from` to `to`; null if there is none. */
export function shortest(from: string, to: string): string[] | null {
  const dist: Record<string, number> = { [from]: 0 };
  const prev: Record<string, string> = {};
  const open = new Set([from]);
  while (open.size) {
    let u: string | null = null;
    for (const v of open) if (u === null || (dist[v] ?? Infinity) < (dist[u] ?? Infinity)) u = v;
    if (u === null) break;
    open.delete(u);
    if (u === to) break;
    const nu = nodeOf(u);
    for (const v of nu.edges) {
      const nv = nodeOf(v);
      const d = (dist[u] ?? Infinity) + hypot(nu.x - nv.x, nu.z - nv.z);
      if (dist[v] === undefined || d < dist[v]) {
        dist[v] = d;
        prev[v] = u;
        open.add(v);
      }
    }
  }
  if (dist[to] === undefined) return null;
  const path: string[] = [];
  for (let v: string | undefined = to; v !== undefined; v = prev[v]) {
    path.unshift(v);
    if (v === from) break;
  }
  return path;
}

export type RoutePoint = { readonly x: number; readonly z: number; readonly node?: string };

function through(from: string, to: string): RoutePoint[] {
  const path = shortest(from, to);
  if (!path) throw new Error(`no way from ${from} to ${to}`);
  return path.map((id) => ({ x: nodeOf(id).x, z: nodeOf(id).z, node: id }));
}

/** The points to walk from one spot to another (the first spot's own position not included). */
export function route(fromSpot: SpotId, toSpot: SpotId): RoutePoint[] {
  const a = SPOTS[fromSpot];
  const b = SPOTS[toSpot];
  const pts: RoutePoint[] = [];
  if (a.viaW) pts.push({ x: a.viaW[0], z: a.viaW[1] });
  pts.push(...through(a.anchor, b.anchor));
  if (b.viaW) pts.push({ x: b.viaW[0], z: b.viaW[1] });
  pts.push({ x: b.x, z: b.z });
  return pts;
}

/** The points to walk from a graph node (where a walk was cut off) to a spot: the turn mid-path. */
export function routeFromNode(nodeId: string, toSpot: SpotId): RoutePoint[] {
  const b = SPOTS[toSpot];
  const pts = through(nodeId, b.anchor);
  if (b.viaW) pts.push({ x: b.viaW[0], z: b.viaW[1] });
  pts.push({ x: b.x, z: b.z });
  return pts;
}
