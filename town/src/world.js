/* ================================================================
   The world: where everything stands, the roads, and how agents get around.
   Pure data, no DOM and no 3D, so the HUD, the 3D and the checks share it.
   Units are metres. x is east, z is south. Houses have their own local frame:
   local +z is the front, rotated by ry.
   ================================================================ */
(function () {
  const W = (window.WOA_WORLD = {});
  const { cos, sin, atan2, hypot, PI } = Math;
  const FLOOR_H = 0.22;
  W.FLOOR_H = FLOOR_H;
  const toWorld = (r, x, z) => { const a = r.ry || 0; return [r.x + x * cos(a) + z * sin(a), r.z - x * sin(a) + z * cos(a)]; };
  const toLocal = (r, X, Z) => { const a = r.ry || 0, dx = X - r.x, dz = Z - r.z; return [dx * cos(a) - dz * sin(a), dx * sin(a) + dz * cos(a)]; };
  const face = (fx, fz, tx, tz) => atan2(tx - fx, tz - fz);
  W.toWorld = toWorld; W.toLocal = toLocal; W.face = face;

  /* ---------------- places */
  const ROOMS = [
    { id: 'war', name: 'War hall', kind: 'house', x: -6, z: -22, ry: 0.06, w: 15, d: 9, wallH: 3.0, door: { side: 'S', off: 0, width: 2.4 }, hub: [0, 2.7], floor: 'war', desc: 'Where the Lead/PM plans the run and keeps the task board.' },
    { id: 'library', name: 'Library', kind: 'house', x: 24, z: -21, ry: -0.32, w: 10, d: 8, wallH: 2.8, door: { side: 'S', off: -2.2, width: 1.6 }, hub: [-1.2, 1.0], floor: 'dark', storeys: 2, upperH: 2.5, desc: 'Where the Reviewer checks the work. The archive is upstairs.' },
    { id: 'studio', name: 'Design studio', kind: 'house', x: 30, z: 2, ry: -1.37, w: 9, d: 7, wallH: 2.7, door: { side: 'S', off: 0, width: 1.6 }, hub: [0, 1.6], floor: 'light', deck: [-4.2, 4.2, 3.5, 7.6], desc: 'Where the Designer lays out pages. Paints on the terrace when free.' },
    { id: 'workshop', name: 'Workshop', kind: 'house', x: -27, z: -4, ry: 0.28, w: 12, d: 8, wallH: 2.8, door: { side: 'E', off: 1, width: 1.8 }, hub: [-0.5, 1.8], floor: 'tiles', desc: 'Where the Frontend dev and the Backend dev write code.' },
    { id: 'forge', name: 'The Forge', kind: 'open', x: 0, z: 0, r: 7.6, hub: [-5.0, 5.0], entries: [[-7.3, 7.3]], desc: 'The furnace burns hotter the more agents are working.' },
    { id: 'tavern', name: 'Tavern', kind: 'house', x: 20.5, z: 18.6, ry: -0.2, w: 11, d: 8, wallH: 2.8, door: { side: 'W', off: 1.5, width: 1.8 }, hub: [-3.6, 2.6], floor: 'planks', storeys: 2, upperH: 2.5, desc: 'Where agents with no task have a drink. Rooms to sleep in upstairs.' },
    { id: 'yard', name: 'Training yard', kind: 'arena', x: -24, z: 17, r: 7.5, gate: -0.526, hub: [0.5, -1.4], entries: [[4.85, -2.81], [7.71, -4.47]], desc: 'Sparring and target practice between tasks.' },
    { id: 'court', name: 'Courtyard', kind: 'open', x: 2, z: 24, r: 6, hub: [-1.8, 0.2], entries: [[0.4, 0.2]], desc: 'The square inside the gate: the well, the market stall, the notice board.' },
    { id: 'garden', name: 'Garden', kind: 'open', x: -29, z: -20, r: 7.4, hub: [3.6, 2.4], entries: [[5.6, 4.6], [6.6, 5.6]], desc: 'A quiet ring of hedges around the pond.' },
  ];
  const ROOM = Object.fromEntries(ROOMS.map((r) => [r.id, r]));
  const SIDE_N = { S: [0, 1], N: [0, -1], E: [1, 0], W: [-1, 0] };
  for (const r of ROOMS) {
    r.ry = r.ry || 0;
    if (r.kind === 'house') {
      const { side, off } = r.door;
      const n = SIDE_N[side];
      const p = side === 'S' ? [off, r.d / 2] : side === 'N' ? [off, -r.d / 2] : side === 'E' ? [r.w / 2, off] : [-r.w / 2, off];
      r.doorLocal = p; r.doorN = n;
      r.inLocal = [p[0] - n[0] * 1.1, p[1] - n[1] * 1.1];
      r.outLocal = [p[0] + n[0] * 1.5, p[1] + n[1] * 1.5];
      r.inW = toWorld(r, ...r.inLocal);
      r.outW = toWorld(r, ...r.outLocal);
    }
    r.hubW = toWorld(r, ...r.hub);
    if (r.entries) r.entriesW = r.entries.map((e) => toWorld(r, ...e));
  }

  /* ---------------- spots: where an agent stands, sits or works (room-local) */
  const S = (room, x, z, ry, pose, doing, o = {}) => ({ room, lx: x, lz: z, lry: ry, pose, doing, ...o });
  const SPOTS = {
    'war-table': S('war', -0.3, 0.9, face(-0.3, 0.9, -2.5, -0.6), 'plan', 'planning at the war table'),
    'war-board': S('war', 3.8, -2.8, PI, 'point', 'updating the task board'),
    'war-rug': S('war', -4.0, 1.8, face(-4.0, 1.8, -6.1, -2.6), 'idle', "thinking it over by the war chief's seat"),
    'lib-desk': S('library', 1.8, -1.98, 0, 'readsit', 'reviewing at the library desk', { via: [0.3, -2.1] }),
    'lib-chair': S('library', -2.0, 2.3, 0.4, 'read', 'reading by the armchair'),
    'lib-shelf': S('library', -2.4, -2.5, PI, 'read', 'browsing the shelves'),
    'studio-desk': S('studio', -2.0, -2.38, 0, 'type', 'drafting the layout', { via: [-0.6, -2.5] }),
    'studio-easel': S('studio', -2.4, 6.2, face(-2.4, 6.2, -1.5, 5.3), 'paint', 'painting on the terrace', { out: true }),
    'desk-frontend': S('workshop', -3.0, -2.18, 0, 'smash', 'writing code', { via: [-0.5, -2.45] }),
    'desk-backend': S('workshop', 2.0, -2.18, 0, 'type', 'writing code', { via: [-0.5, -2.45] }),
    'forge-anvil': S('forge', -3.9, 3.9, face(-3.9, 3.9, -2.9, 2.9), 'spar', 'hammering at the anvil'),
    'tavern-1': S('tavern', -3.1, 0.8, PI / 2, 'drink', 'having a drink in the tavern'),
    'tavern-2': S('tavern', -1.3, 0.8, -PI / 2, 'drink', 'having a drink in the tavern', { via: [-1.0, 2.1] }),
    'tavern-3': S('tavern', 0.4, 5.75, 0, 'drink', 'having a drink in the beer garden', { out: true, via: [-6.2, 5.0] }),
    'tavern-bar': S('tavern', 2.9, -0.8, PI / 2, 'idle', 'leaning on the bar'),
    'yard-1': S('yard', -3.2, 0.7, 0, 'spar', 'sparring in the yard'),
    'yard-2': S('yard', 1.6, 1.8, 0, 'spar', 'sparring in the yard'),
    'court-bench': S('court', -5.2, -4.0, 0, 'sit', 'resting on the courtyard bench'),
    'court-well': S('court', -3.9, 1.0, face(-3.9, 1.0, -5.8, 2.0), 'idle', 'chatting by the well'),
    'garden-easel': S('garden', 3.0, -3.4, face(3.0, -3.4, 2.2, -4.3), 'paint', 'painting in the garden'),
    'garden-pond': S('garden', 1.4, 2.4, face(1.4, 2.4, -1, 0), 'idle', 'watching the pond'),
  };
  for (const sp of Object.values(SPOTS)) {
    const r = ROOM[sp.room];
    [sp.x, sp.z] = toWorld(r, sp.lx, sp.lz);
    sp.ry = sp.lry + r.ry;
    if (sp.via) sp.viaW = toWorld(r, ...sp.via);
    sp.anchor = (sp.out ? 'out:' : 'hub:') + sp.room;
  }

  /* ---------------- the castle and the island */
  W.CASTLE = {
    pts: [[-38, -28], [-12, -35], [18, -34], [40, -22], [45, 4], [38, 27], [12, 35], [-8, 35], [-30, 30], [-43, 6]],
    gaps: [{ seg: 6, t: 0.5, w: 4.4, kind: 'gate' }, { seg: 9, t: 0.6, w: 3.0, kind: 'water' }],
    h: 4.2, thick: 1.6,
  };
  const IA = 60, IB = 52;
  W.islandR = (t) => {
    const e = (IA * IB) / hypot(IB * cos(t), IA * sin(t));
    return e * (1 + 0.05 * sin(3 * t + 0.7) + 0.035 * sin(5 * t + 2.1) + 0.02 * sin(9 * t));
  };
  W.IA = IA; W.IB = IB;
  // buildings nobody works in: they fill the town so it reads as a place people live
  W.DECOR = [
    { kind: 'hut', id: 'barracks', name: 'Barracks', desc: 'Bunks and spare weapons.', floor: 'planks', x: -35.2, z: 5.0, ry: 0.42, w: 6, d: 4.4 },
    { kind: 'hut', id: 'store', name: 'Store house', desc: 'Supplies for the keep: crates, sacks and barrels.', floor: 'planks', x: -37.6, z: -9.5, ry: 1.42, w: 5, d: 3.6 },
    { kind: 'hut', id: 'stable', name: 'Stable', desc: 'Where the wolf mounts sleep.', floor: 'planks', x: 11.5, z: 29.4, ry: -0.08, w: 6.4, d: 3.6 },
    { kind: 'hut', id: 'granary', name: 'Granary', desc: 'Grain and flour for the tavern.', floor: 'planks', x: 9.5, z: -27.5, ry: -0.2, w: 4.6, d: 3.8 },
    { kind: 'windmill', x: 35, z: 13, r: 2.6 },
    { kind: 'watch', x: 36.5, z: -8.5, r: 2.0 },
    { kind: 'shrine', x: -17.6, z: -28.4, r: 2.8 },
    { kind: 'camp', x: -13.5, z: 27.5, r: 4.2 },
  ];

  /* ---------------- roads: control points, sampled into smooth curves */
  const circle = (cx, cz, r, n, a0 = 0) => Array.from({ length: n }, (_, i) => [cx + r * cos(a0 + i / n * 2 * PI), cz + r * sin(a0 + i / n * 2 * PI)]);
  const streamEndT = atan2(-11.4, -56);
  const streamEnd = [cos(streamEndT) * (W.islandR(streamEndT) - 0.4), sin(streamEndT) * (W.islandR(streamEndT) - 0.4)];
  W.stream = [[-32.4, -19.6], [-35.6, -18.0], [-40.0, -14.4], [-45.5, -12.6], [-51, -11.8], streamEnd];
  const dockT = atan2(49, 2.2);
  W.dockEdge = [cos(dockT) * W.islandR(dockT), sin(dockT) * W.islandR(dockT)];
  const ROADS = [
    { id: 'main', w: 4.4, kind: 'cobble', pts: [[2, 33.8], [2.6, 28], [1.7, 21], [0.5, 14.5], [0, 10.4]] },
    { id: 'ring', w: 3.2, kind: 'cobble', closed: true, pts: circle(0, 0, 10, 16) },
    { id: 'war', w: 3.6, kind: 'flag', pts: [[-0.6, -10.4], [-2.8, -13.6], 'out:war'] },
    { id: 'library', w: 2.3, kind: 'dirt', pts: [[7.3, -7.0], [11.5, -11.4], [16.4, -14.6], 'out:library'] },
    { id: 'studio', w: 2.2, kind: 'flag', pts: [[10.3, 1.2], [15.5, 2.9], [20.6, 2.7], 'out:studio'] },
    { id: 'tavern', w: 2.8, kind: 'cobble', pts: [[2.6, 21.4], [7.5, 21.2], [11.0, 19.6], 'out:tavern'] },
    { id: 'workshop', w: 2.8, kind: 'cobble', pts: [[-10.3, -1.4], [-14.6, -3.4], 'out:workshop'] },
    { id: 'yard', w: 2.3, kind: 'dirt', pts: [[-7.3, 7.1], [-11.6, 9.8], 'entry:yard'] },
    { id: 'garden', w: 1.7, kind: 'dirt', pts: [[-14.6, -3.6], [-17.6, -9.4], [-20.6, -12.8], 'entry:garden'] },
    { id: 'lib-war', w: 1.6, kind: 'dirt', pts: [[11.3, -11.3], [5.6, -14.6], [-1.4, -15.2], [-3.2, -14.6]] },
    { id: 'tav-studio', w: 1.5, kind: 'dirt', pts: [[11.0, 19.6], [12.6, 15.8], [15.0, 11.4], [20.4, 8.0], [24.4, 4.4]] },
    { id: 'yard-court', w: 1.8, kind: 'dirt', pts: [[-11.6, 9.8], [-10.2, 15.4], [-5.6, 20.6], [-0.4, 22.6]] },
    { id: 'dock', w: 3.6, kind: 'dirt', nav: false, pts: [[2, 36.4], [3.2, 41.5], [2.4, 46.2], W.dockEdge] },
    { id: 'pond', w: 1.3, kind: 'stones', closed: true, pts: circle(-30, -20, 4.3, 12, 0.3) },
    // footpaths to the buildings nobody works in (for looks, agents don't use them)
    { id: 'to-shrine', w: 1.3, kind: 'dirt', nav: false, pts: [[-20.6, -12.8], [-18.6, -19.0], [-17.8, -25.0]] },
    { id: 'to-mill', w: 1.4, kind: 'dirt', nav: false, pts: [[20.4, 8.0], [27.0, 9.8], [32.2, 12.2]] },
    { id: 'to-watch', w: 1.3, kind: 'dirt', nav: false, pts: [[16.4, -14.6], [24.0, -11.0], [30.5, -9.4], [34.2, -8.7]] },
    { id: 'to-barracks', w: 1.4, kind: 'dirt', nav: false, pts: [[-19.5, -5.1], [-18.6, -0.6], [-22.0, 3.6], [-28.6, 4.6], [-32.2, 6.6]] },
    { id: 'to-stable', w: 1.6, kind: 'cobble', nav: false, pts: [[3.4, 30.4], [6.0, 30.9], [7.8, 29.8]] },
    { id: 'to-granary', w: 1.2, kind: 'dirt', nav: false, pts: [[5.6, -14.6], [7.6, -20.0], [9.0, -25.2]] },
    { id: 'to-camp', w: 1.3, kind: 'dirt', nav: false, pts: [[-5.6, 20.6], [-9.0, 24.4], [-10.6, 25.8]] },
  ];
  const refPoint = (ref) => {
    const [k, id] = ref.split(':');
    const r = ROOM[id];
    return k === 'out' ? r.outW : r.entriesW[r.entriesW.length - 1];
  };
  function sample(pts, closed, step) {
    const n = pts.length;
    const get = (i) => (closed ? pts[((i % n) + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
    const dense = [];
    const segs = closed ? n : n - 1;
    for (let i = 0; i < segs; i++) {
      const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2);
      const k = Math.max(6, Math.ceil(hypot(p2[0] - p1[0], p2[1] - p1[1]) / 0.2));
      for (let j = 0; j < k; j++) {
        const t = j / k, t2 = t * t, t3 = t2 * t;
        const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
        dense.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
      }
    }
    dense.push(closed ? dense[0] : pts[n - 1]);
    const out = [dense[0]];
    let acc = 0;
    for (let i = 1; i < dense.length; i++) {
      acc += hypot(dense[i][0] - dense[i - 1][0], dense[i][1] - dense[i - 1][1]);
      if (acc >= step) { out.push(dense[i]); acc = 0; }
    }
    const last = dense[dense.length - 1];
    const tail = out[out.length - 1];
    if (hypot(tail[0] - last[0], tail[1] - last[1]) < step * 0.5) out[out.length - 1] = last; else out.push(last);
    if (closed) out.pop();
    return out;
  }
  for (const rd of ROADS) {
    rd.ctrl = rd.pts.map((p) => (typeof p === 'string' ? refPoint(p) : p));
    rd.refs = rd.pts.map((p) => (typeof p === 'string' ? p : null));
    rd.line = sample(rd.ctrl, !!rd.closed, 0.5);
  }
  W.brookLine = sample(W.stream, false, 0.5);

  /* ---------------- the walking graph */
  const N = {};
  const node = (id, x, z) => (N[id] = { id, x, z, edges: [] });
  const link = (a, b) => { if (a === b || N[a].edges.includes(b)) return; N[a].edges.push(b); N[b].edges.push(a); };
  for (const r of ROOMS) {
    node(`hub:${r.id}`, ...r.hubW);
    if (r.kind === 'house') {
      node(`in:${r.id}`, ...r.inW); node(`out:${r.id}`, ...r.outW);
      link(`hub:${r.id}`, `in:${r.id}`); link(`in:${r.id}`, `out:${r.id}`);
    } else {
      let prev = `hub:${r.id}`;
      r.entriesW.forEach((e, i) => { const id = i === r.entriesW.length - 1 ? `entry:${r.id}` : `e:${r.id}:${i}`; node(id, ...e); link(prev, id); prev = id; });
    }
  }
  const roadNodes = {};
  for (const rd of ROADS) {
    if (rd.nav === false) continue;
    const ids = [];
    const L = rd.line;
    const every = 4;
    for (let i = 0; i < L.length; i++) {
      const isEnd = !rd.closed && (i === 0 || i === L.length - 1);
      if (!isEnd && i % every !== 0) continue;
      const ref = !rd.closed && i === 0 ? rd.refs[0] : !rd.closed && i === L.length - 1 ? rd.refs[rd.refs.length - 1] : null;
      const id = ref || `r:${rd.id}:${i}`;
      if (!ref) node(id, L[i][0], L[i][1]);
      if (ids.length) link(ids[ids.length - 1], id);
      ids.push(id);
    }
    if (rd.closed) link(ids[ids.length - 1], ids[0]);
    roadNodes[rd.id] = ids;
    rd.endIds = rd.closed ? [] : [ids[0], ids[ids.length - 1]];
  }
  // tie road ends to the nearest point of another road
  const nearest = (x, z, skip) => {
    let best = null, bd = Infinity;
    for (const [rid, ids] of Object.entries(roadNodes)) {
      if (rid === skip) continue;
      for (const id of ids) { const d = hypot(N[id].x - x, N[id].z - z); if (d < bd) { bd = d; best = id; } }
    }
    return [best, bd];
  };
  for (const rd of ROADS) {
    if (rd.nav === false || rd.closed) continue;
    rd.endIds.forEach((id, k) => {
      if (rd.refs[k === 0 ? 0 : rd.refs.length - 1]) return;
      const [best, d] = nearest(N[id].x, N[id].z, rd.id);
      if (best && d < 4.5) link(id, best);
    });
  }
  // open areas whose entry no road names join the nearest road
  for (const r of ROOMS) {
    if (r.kind === 'house') continue;
    const id = `entry:${r.id}`;
    if (ROADS.some((rd) => rd.refs.includes(id))) continue;
    const [best] = nearest(N[id].x, N[id].z, null);
    link(id, best);
  }
  // the ring around the pond joins the garden path where they meet
  { const [best] = nearest(...ROOM.garden.hubW, 'garden'); if (best && best.startsWith('r:pond')) link(`hub:garden`, best); }

  function shortest(from, to) {
    const dist = { [from]: 0 }, prev = {}, open = new Set([from]);
    while (open.size) {
      let u = null;
      for (const v of open) if (u === null || dist[v] < dist[u]) u = v;
      open.delete(u);
      if (u === to) break;
      for (const v of N[u].edges) {
        const d = dist[u] + hypot(N[u].x - N[v].x, N[u].z - N[v].z);
        if (dist[v] === undefined || d < dist[v]) { dist[v] = d; prev[v] = u; open.add(v); }
      }
    }
    if (dist[to] === undefined) return null;
    const path = [];
    for (let v = to; v !== undefined; v = prev[v]) { path.unshift(v); if (v === from) break; }
    return path;
  }
  // Points to walk from spot A to spot B (A's own position not included).
  W.route = (fromSpot, toSpot) => {
    const a = SPOTS[fromSpot], b = SPOTS[toSpot];
    const pts = [];
    if (a.viaW) pts.push({ x: a.viaW[0], z: a.viaW[1] });
    for (const id of shortest(a.anchor, b.anchor)) pts.push({ x: N[id].x, z: N[id].z, node: id });
    if (b.viaW) pts.push({ x: b.viaW[0], z: b.viaW[1] });
    pts.push({ x: b.x, z: b.z });
    return pts;
  };
  W.routeFromNode = (nodeId, toSpot) => {
    const b = SPOTS[toSpot];
    const pts = shortest(nodeId, b.anchor).map((id) => ({ x: N[id].x, z: N[id].z, node: id }));
    if (b.viaW) pts.push({ x: b.viaW[0], z: b.viaW[1] });
    pts.push({ x: b.x, z: b.z });
    return pts;
  };
  Object.assign(W, { ROOMS, ROOM, SPOTS, ROADS, N, shortest });
})();
