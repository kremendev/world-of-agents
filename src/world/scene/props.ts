/**
 * The Forge Keep's props (v4.0.0, 4a), each a group at the origin facing +z. Ported from `town/src/m3-props.js`
 * (forge-keep, 89ae8b1) with its numbers and its calls on the shared generators in the same places, so placements
 * match the town's. The flora always takes the Blender set's path (instances), as the town does when the set is there.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Kit } from './kit';
import { byKitMaterial, kitNode, type KitModels } from './models';

const { PI } = Math;

export type Flame = { f: THREE.Group; ph: number; s: number };
export type FireLight = { l: THREE.PointLight; base: number; ph: number };
export type Spinner = { o: THREE.Object3D; axis: 'x' | 'y' | 'z'; v: number; bob?: boolean; y0?: number };
export type DeskKind = 'screen' | 'paper' | 'books' | 'plain';
export type Desk = {
  g: THREE.Group;
  kb: THREE.Group | null;
  screen: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> | null;
  light: THREE.PointLight | null;
};
export type TreeKind = 'round' | 'autumn' | 'pine' | 'dead';

export function createProps(kit: Kit) {
  const {
    M,
    COL,
    TEX,
    toon,
    glow,
    mesh,
    rbox,
    at,
    rot,
    put,
    spike,
    rnd,
    rr,
    pick,
    canvasTex,
    tiled,
    planarUV,
    wallUV,
  } = kit;
  const scene = kit.scene;
  const FLAGS: THREE.Object3D[] = [];
  const FLAMES: Flame[] = [];
  const SPINNERS: Spinner[] = [];
  const FIRE_LIGHTS: FireLight[] = [];

  const flameTex = canvasTex(64, 128, (g, W, H) => {
    // a teardrop of fire: white-hot at the root, orange, a red tip that thins out
    const path = () => {
      g.beginPath();
      g.moveTo(W / 2, 2);
      g.bezierCurveTo(W * 0.62, H * 0.3, W * 0.98, H * 0.55, W * 0.86, H * 0.8);
      g.bezierCurveTo(W * 0.76, H * 0.98, W * 0.24, H * 0.98, W * 0.14, H * 0.8);
      g.bezierCurveTo(W * 0.02, H * 0.55, W * 0.38, H * 0.3, W / 2, 2);
      g.closePath();
    };
    const gr = g.createLinearGradient(0, H, 0, 0);
    gr.addColorStop(0, 'rgba(255, 246, 214, 1)');
    gr.addColorStop(0.3, 'rgba(255, 196, 92, 1)');
    gr.addColorStop(0.65, 'rgba(255, 110, 40, 0.95)');
    gr.addColorStop(1, 'rgba(220, 40, 30, 0)');
    path();
    g.fillStyle = gr;
    g.fill();
    g.save();
    g.translate(W * 0.5, H * 0.92);
    g.scale(0.5, 0.55);
    g.translate(-W * 0.5, -H * 0.92);
    path();
    g.fillStyle = 'rgba(255, 252, 235, 0.9)';
    g.fill();
    g.restore();
  });
  flameTex.wrapS = flameTex.wrapT = THREE.ClampToEdgeWrapping;
  const FLAME_MAT = new THREE.SpriteMaterial({
    map: flameTex,
    color: new THREE.Color(1.6, 1.25, 1.0),
    transparent: true,
    depthWrite: false,
    toneMapped: false,
  });
  const FLAME_CORE = new THREE.SpriteMaterial({
    map: flameTex,
    color: new THREE.Color(2.2, 2.0, 1.6),
    transparent: true,
    depthWrite: false,
    toneMapped: false,
  });
  const FLAME_HALO = new THREE.SpriteMaterial({
    map: TEX.soft,
    color: '#ff8a3a',
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  // anime fire: a painted flame, a hot core inside it, a soft halo around it
  function flame(parent: THREE.Object3D, x: number, y: number, z: number, s = 1): THREE.Group {
    const f = new THREE.Group();
    const o = new THREE.Sprite(FLAME_MAT);
    o.center.set(0.5, 0.06);
    o.scale.set(0.34 * s, 0.68 * s, 1);
    f.add(o);
    const c = new THREE.Sprite(FLAME_CORE);
    c.center.set(0.5, 0.04);
    c.scale.set(0.18 * s, 0.34 * s, 1);
    f.add(c);
    const h = new THREE.Sprite(FLAME_HALO);
    h.scale.setScalar(1.5 * s);
    h.position.y = 0.2 * s;
    f.add(h);
    f.position.set(x, y, z);
    parent.add(f);
    FLAMES.push({ f, ph: rr(0, 6), s });
    return f;
  }
  const SKULL = (() => {
    const g = new THREE.Group();
    const cr = mesh(new THREE.SphereGeometry(0.5, 16, 12), M.bone);
    cr.scale.set(1, 0.92, 1.05);
    cr.position.y = 0.14;
    g.add(cr);
    g.add(at(mesh(new THREE.BoxGeometry(0.62, 0.28, 0.5), M.bone), 0, -0.24, 0.16));
    for (const sd of [-1, 1]) {
      const e = mesh(new THREE.SphereGeometry(0.14, 10, 8), M.dark, false);
      e.scale.z = 0.5;
      e.position.set(sd * 0.19, 0.08, 0.45);
      g.add(e);
    }
    g.add(rot(at(mesh(new THREE.ConeGeometry(0.06, 0.12, 3), M.dark, false), 0, -0.1, 0.5), PI, 0, 0));
    g.add(at(mesh(new THREE.BoxGeometry(0.42, 0.03, 0.02), M.dark, false), 0, -0.25, 0.42));
    return g;
  })();
  function skull(s = 0.3): THREE.Group {
    const k = SKULL.clone();
    k.scale.setScalar(s);
    return k;
  }
  function horns(s = 1, mat: THREE.Material = M.bone): THREE.Group {
    const g = new THREE.Group();
    for (const sd of [-1, 1]) {
      const h = mesh(new THREE.TorusGeometry(0.5 * s, 0.09 * s, 6, 12, PI * 0.6), mat);
      h.rotation.set(0, sd > 0 ? 0 : PI, 0.25);
      h.position.set(sd * 0.35 * s, 0, 0);
      g.add(h);
    }
    return g;
  }
  let fseed = 7;
  const fj = (a: number, b: number) => a + (b - a) * ((fseed = (fseed * 16807) % 2147483647) / 2147483647);
  function bx(
    g: THREE.Object3D,
    mat: THREE.Material,
    x: number,
    y: number,
    z: number,
    sx: number,
    sy: number,
    sz: number,
    r = 0,
  ): THREE.Mesh {
    const m = at(mesh(r ? rbox(sx, sy, sz, r) : new THREE.BoxGeometry(sx, sy, sz), mat), x, y, z);
    g.add(m);
    return m;
  }
  // a square leg that narrows toward the floor
  function taper(w: number, h: number, d: number, k = 0.75): THREE.BoxGeometry {
    const geo = new THREE.BoxGeometry(w, h, d);
    const p = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++)
      if (p.getY(i) < 0) {
        p.setX(i, p.getX(i) * k);
        p.setZ(i, p.getZ(i) * k);
      }
    geo.computeVertexNormals();
    return geo;
  }
  // a top made of separate boards with thin gaps, each a little uneven
  function boards(
    g: THREE.Object3D,
    w: number,
    d: number,
    y: number,
    t: number,
    mat: THREE.Material,
    n = Math.max(2, Math.round(d / 0.2)),
  ) {
    const pd = d / n;
    for (let i = 0; i < n; i++)
      bx(
        g,
        mat,
        0,
        y + fj(-0.004, 0.004),
        -d / 2 + pd * (i + 0.5),
        w + fj(-0.02, 0.02),
        t,
        pd - 0.012,
        0.012,
      );
  }
  // an L of iron over a corner of a top
  function cornerIron(g: THREE.Object3D, x: number, y: number, z: number, sx: number, sz: number) {
    bx(g, M.iron, x - sx * 0.055, y, z - sz * 0.012, 0.13, 0.014, 0.028);
    bx(g, M.iron, x - sx * 0.012, y, z - sz * 0.055, 0.028, 0.014, 0.13);
  }
  const BARREL_GEO = (() => {
    const pts: THREE.Vector2[] = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      pts.push(new THREE.Vector2(0.3 + Math.sin(t * PI) * 0.06, (t - 0.5) * 0.8));
    }
    return new THREE.LatheGeometry(pts, 20);
  })();
  const barrelR = (y: number) => 0.3 + Math.sin((y / 0.8 + 0.5) * PI) * 0.06;
  function barrel(s = 1, onSide = false): THREE.Group {
    const g = new THREE.Group();
    const b = mesh(BARREL_GEO, toon('#ffffff', { map: TEX.planks }));
    // iron hoops follow the bulge; rivets on the middle ones
    for (const y of [-0.33, -0.17, 0.17, 0.33])
      b.add(
        at(
          rot(mesh(new THREE.TorusGeometry(barrelR(y) + 0.006, 0.02, 5, 24), M.iron), PI / 2, 0, 0),
          0,
          y,
          0,
        ),
      );
    for (const y of [-0.17, 0.17])
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * PI * 2;
        b.add(
          at(
            mesh(new THREE.SphereGeometry(0.016, 5, 4), M.ironL),
            Math.cos(a) * (barrelR(y) + 0.025),
            y,
            Math.sin(a) * (barrelR(y) + 0.025),
          ),
        );
      }
    b.add(at(rot(mesh(new THREE.CircleGeometry(0.3, 20), M.woodD), -PI / 2, 0, 0), 0, 0.392, 0));
    b.add(at(rot(mesh(new THREE.TorusGeometry(0.3, 0.018, 4, 24), M.woodD), PI / 2, 0, 0), 0, 0.4, 0));
    for (const dx of [-0.1, 0, 0.1])
      b.add(at(mesh(new THREE.BoxGeometry(0.004, 0.004, 0.5), M.dark, false), dx, 0.394, 0));
    b.add(at(mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 8), M.woodL), 0.15, 0.4, 0.05));
    b.scale.setScalar(s);
    if (onSide) {
      b.rotation.z = PI / 2;
      b.position.y = 0.36 * s;
    } else b.position.y = 0.4 * s;
    g.add(b);
    return g;
  }
  const crateMat = toon('#ffffff', {
    map: canvasTex(128, 128, (g, W, H) => {
      g.fillStyle = '#7a5538';
      g.fillRect(0, 0, W, H);
      for (let i = 0; i < 4; i++) {
        g.fillStyle = i % 2 ? '#70502f' : '#84603f';
        g.fillRect(0, i * 32, W, 30);
        g.fillStyle = 'rgba(40, 24, 14, 0.6)';
        g.fillRect(0, i * 32 + 30, W, 2);
      }
    }),
  });
  function crate(s = 0.6): THREE.Group {
    const g = new THREE.Group();
    bx(g, crateMat, 0, s / 2, 0, s * 0.94, s * 0.94, s * 0.94);
    // battens on every edge, a diagonal brace on two faces, iron caps on the corners
    const e = s * 0.09;
    const o = s / 2 - e / 2;
    for (const a of [-1, 1])
      for (const b of [-1, 1]) {
        bx(g, M.woodD, a * o, s / 2, b * o, e, s, e);
        bx(g, M.woodD, 0, s / 2 + a * o, b * o, s - e * 2, e, e);
        bx(g, M.woodD, a * o, s / 2 + b * o, 0, e, e, s - e * 2);
      }
    for (const sd of [-1, 1]) {
      const d = bx(g, M.woodD, 0, s / 2, sd * (s * 0.47 + 0.006), s * 1.1, e * 0.8, e * 0.4);
      d.rotation.z = (sd * PI) / 4;
    }
    for (const a of [-1, 1])
      for (const b of [-1, 1])
        for (const c of [-1, 1])
          bx(g, M.iron, a * (o + 0.006), s / 2 + b * (o + 0.006), c * (o + 0.006), e * 1.2, e * 1.2, e * 1.2);
    return g;
  }
  function sack(): THREE.Group {
    const g = new THREE.Group();
    const b = mesh(new THREE.SphereGeometry(0.28, 12, 10), toon('#b8a07a'));
    b.scale.set(1, 1.15, 0.9);
    b.position.y = 0.3;
    g.add(b);
    g.add(at(mesh(new THREE.CylinderGeometry(0.08, 0.14, 0.14, 10), toon('#a88f6a')), 0, 0.66, 0));
    return g;
  }
  function table(w: number, d: number, h = 0.8, mat: THREE.Material = M.wood): THREE.Group {
    const g = new THREE.Group();
    const t = 0.07;
    boards(g, w, d, h - t / 2, t, mat);
    // an apron under the top, square legs that taper, a stretcher low down, iron on the corners
    for (const sd of [-1, 1]) {
      bx(g, M.woodD, 0, h - t - 0.06, sd * (d / 2 - 0.12), w - 0.34, 0.12, 0.04, 0.01);
      bx(g, M.woodD, sd * (w / 2 - 0.12), h - t - 0.06, 0, 0.04, 0.12, d - 0.34, 0.01);
    }
    const leg = taper(0.1, h - t, 0.1, 0.72);
    for (const [lx, lz] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ] as const) {
      g.add(at(mesh(leg, M.woodD), lx * (w / 2 - 0.12), (h - t) / 2, lz * (d / 2 - 0.12)));
      cornerIron(g, (lx * w) / 2, h + 0.004, (lz * d) / 2, lx, lz);
    }
    bx(g, M.woodD, 0, 0.17, 0, w - 0.3, 0.06, 0.05, 0.01);
    for (const sd of [-1, 1]) bx(g, M.woodD, sd * (w / 2 - 0.12), 0.17, 0, 0.05, 0.06, d - 0.3, 0.01);
    return g;
  }
  function roundTable(r = 0.7): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(r, r, 0.08, 24), M.wood), 0, 0.76, 0));
    g.add(at(rot(mesh(new THREE.TorusGeometry(r, 0.022, 5, 32), M.iron), PI / 2, 0, 0), 0, 0.76, 0));
    for (const dx of [-r * 0.5, 0, r * 0.5])
      bx(g, M.dark, dx, 0.801, 0, 0.006, 0.004, Math.sqrt(r * r - dx * dx) * 1.96);
    g.add(at(mesh(new THREE.CylinderGeometry(0.08, 0.11, 0.7, 10), M.woodD), 0, 0.37, 0));
    g.add(at(mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.06, 10), M.iron), 0, 0.5, 0));
    // four feet in a cross
    for (let i = 0; i < 4; i++) {
      const a = (i * PI) / 2 + PI / 4;
      const f = bx(
        g,
        M.woodD,
        Math.sin(a) * r * 0.25,
        0.05,
        Math.cos(a) * r * 0.25,
        0.09,
        0.08,
        r * 0.6,
        0.015,
      );
      f.rotation.y = a;
    }
    return g;
  }
  function stool(): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.07, 16), M.wood), 0, 0.45, 0));
    g.add(at(rot(mesh(new THREE.TorusGeometry(0.24, 0.012, 4, 20), M.iron), PI / 2, 0, 0), 0, 0.45, 0));
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * PI * 2 + 0.5;
      const l = mesh(new THREE.CylinderGeometry(0.028, 0.034, 0.46, 6), M.woodD);
      l.position.set(Math.cos(a) * 0.15, 0.22, Math.sin(a) * 0.15);
      l.rotation.set(-Math.sin(a) * 0.2, 0, Math.cos(a) * 0.2);
      g.add(l);
    }
    g.add(at(rot(mesh(new THREE.TorusGeometry(0.16, 0.014, 4, 14), M.woodD), PI / 2, 0, 0), 0, 0.17, 0));
    return g;
  }
  function bench(w = 1.8, back = true): THREE.Group {
    const g = new THREE.Group();
    for (const sd of [-1, 1]) bx(g, M.woodL, fj(-0.01, 0.01), 0.45, sd * 0.11, w, 0.07, 0.2, 0.015);
    for (const sd of [-1, 1]) {
      const x = sd * (w / 2 - 0.2);
      for (const zz of [-1, 1]) {
        const l = at(mesh(taper(0.08, 0.44, 0.07, 1), M.woodD), x, 0.21, zz * 0.12);
        l.rotation.x = -zz * 0.2;
        g.add(l);
      }
      bx(g, M.woodD, x, 0.385, 0, 0.09, 0.06, 0.44, 0.01);
      bx(g, M.iron, x, 0.487, 0.2, 0.1, 0.012, 0.03);
    }
    bx(g, M.woodD, 0, 0.14, 0, w - 0.4, 0.05, 0.05, 0.01);
    if (back) {
      for (const sd of [-1, 1]) bx(g, M.woodD, sd * (w / 2 - 0.2), 0.74, -0.21, 0.07, 0.56, 0.06, 0.012);
      for (const y of [0.64, 0.9]) bx(g, M.woodL, fj(-0.01, 0.01), y, -0.225, w - 0.1, 0.11, 0.05, 0.015);
    }
    return g;
  }
  function candle(h = 0.16, light = 0): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.04, 0.045, h, 10), toon('#eadfc4')), 0, h / 2, 0));
    flame(g, 0, h, 0, 0.35);
    if (light) {
      const l = new THREE.PointLight('#ffb36a', light, 5, 2);
      l.position.y = h + 0.15;
      g.add(l);
    }
    return g;
  }
  function skullCandle(): THREE.Group {
    const g = new THREE.Group();
    g.add(at(skull(0.22), 0, 0.12, 0));
    g.add(at(candle(0.14), 0, 0.24, 0));
    return g;
  }
  function bottle(color: string): THREE.Group {
    const g = new THREE.Group();
    const m = toon(color, { emissive: color, emissiveIntensity: 0.18 });
    g.add(at(mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.2, 10), m), 0, 0.1, 0));
    g.add(at(mesh(new THREE.CylinderGeometry(0.022, 0.03, 0.1, 8), m), 0, 0.25, 0));
    return g;
  }
  function mug(): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.15, 12), M.woodL), 0, 0.075, 0));
    g.add(at(rot(mesh(new THREE.CircleGeometry(0.062, 12), toon('#efe0b0')), -PI / 2, 0, 0), 0, 0.14, 0));
    g.add(at(mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 12), M.woodL), 0.08, 0.08, 0));
    return g;
  }
  function plant(s = 1): THREE.Group {
    const g = new THREE.Group();
    g.add(
      at(mesh(new THREE.CylinderGeometry(0.22 * s, 0.16 * s, 0.34 * s, 12), toon('#8a4a30')), 0, 0.17 * s, 0),
    );
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * PI * 2;
      spike(
        g,
        new THREE.Vector3(Math.cos(a) * 0.06 * s, 0.32 * s, Math.sin(a) * 0.06 * s),
        new THREE.Vector3(Math.cos(a) * 0.5, 1, Math.sin(a) * 0.5),
        0.5 * s,
        0.1 * s,
        toon(pick([COL.leaf, COL.leafD, COL.leafL])),
        0,
        5,
      );
    }
    return g;
  }
  const BOOK_COLS = ['#8a2a24', '#3f5f8f', '#b08a3e', '#4f7a4a', '#5a3f7a', '#a85a2c', '#2f4f45', '#d8c8a0'];
  const UNIT_BOX = kit.UNIT_BOX;
  // books live inside each shelf (one draw call per shelf) so a shelf can move or fade with its floor
  function bookshelf(w = 2.0): THREE.Group {
    const g = new THREE.Group();
    const H = 2.4;
    const D = 0.5;
    bx(g, toon('#3a2519'), 0, H / 2, -D / 2 + 0.03, w - 0.1, H - 0.1, 0.04);
    for (const sd of [-1, 1]) bx(g, M.woodD, sd * (w / 2 - 0.04), H / 2, 0, 0.08, H, D, 0.015);
    for (let r = 0; r < 4; r++) {
      const y = r < 3 ? 0.27 + r * 0.72 : H - 0.03;
      bx(g, M.wood, 0, y, 0, w - 0.14, 0.06, D - 0.04);
      bx(g, M.woodL, 0, y + 0.01, D / 2 - 0.02, w - 0.12, 0.08, 0.04, 0.01);
    }
    // a plinth, a crown in two steps, iron on the top corners
    bx(g, M.woodD, 0, 0.1, 0.02, w, 0.2, D, 0.02);
    bx(g, M.wood, 0, H + 0.04, 0.02, w + 0.1, 0.08, D + 0.08, 0.02);
    bx(g, M.woodD, 0, H + 0.11, 0.03, w + 0.18, 0.07, D + 0.14, 0.02);
    for (const sd of [-1, 1]) {
      bx(g, M.iron, sd * (w / 2 - 0.02), H - 0.12, D / 2 + 0.004, 0.06, 0.2, 0.012);
      bx(g, M.iron, sd * (w / 2 - 0.1), H - 0.04, D / 2 + 0.004, 0.2, 0.06, 0.012);
    }
    g.add(at(skull(0.13), w / 2 - 0.25, 2.62, 0.05));
    const books: Parameters<Kit['instanced']>[1][number][] = [];
    for (let r = 0; r < 3; r++) {
      let bxp = -w / 2 + 0.12;
      while (bxp < w / 2 - 0.2) {
        if (rnd() < 0.12) {
          bxp += 0.18;
          continue;
        }
        const bw = rr(0.07, 0.14);
        const bh = rr(0.34, 0.56);
        const lean = rnd() < 0.1 ? 0.18 : 0;
        books.push({
          x: bxp + bw / 2,
          y: 0.33 + r * 0.72 + bh / 2,
          z: 0.08,
          sx: bw,
          sy: bh,
          sz: rr(0.28, 0.36),
          rz: lean,
          c: pick(BOOK_COLS),
        });
        bxp += bw + 0.012 + lean * 0.4;
      }
    }
    kit.instanced(UNIT_BOX, books, { parent: g, cast: true });
    return g;
  }
  function rug(r: number, rings: readonly string[]): THREE.Group {
    const tex = canvasTex(512, 512, (g, W) => {
      rings.forEach((col, i) => {
        g.fillStyle = col;
        g.beginPath();
        g.arc(W / 2, W / 2, W / 2 - i * 34, 0, PI * 2);
        g.fill();
      });
      g.fillStyle = rings[1] as string;
      for (let k = 0; k < 12; k++) {
        const a = (k / 12) * PI * 2;
        g.beginPath();
        g.arc(256 + Math.cos(a) * 196, 256 + Math.sin(a) * 196, 10, 0, PI * 2);
        g.fill();
      }
    });
    const m = mesh(new THREE.CircleGeometry(r, 48), toon('#ffffff', { map: tex }), false);
    m.rotation.x = -PI / 2;
    m.position.y = 0.012;
    const g = new THREE.Group();
    g.add(m);
    return g;
  }
  function easel(tex: THREE.Texture = TEX.painting): THREE.Group {
    const g = new THREE.Group();
    for (const sd of [-1, 1]) {
      const l = at(mesh(new THREE.BoxGeometry(0.06, 1.8, 0.06), M.wood), sd * 0.36, 0.9, 0);
      l.rotation.z = sd * -0.12;
      g.add(l);
    }
    g.add(rot(at(mesh(new THREE.BoxGeometry(0.06, 1.7, 0.06), M.wood), 0, 0.84, -0.3), 0.35, 0, 0));
    g.add(at(mesh(new THREE.BoxGeometry(1.05, 0.82, 0.05), toon('#efe4cc')), 0, 1.25, 0.05));
    g.add(
      at(
        new THREE.Mesh(
          new THREE.PlaneGeometry(0.95, 0.72),
          new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }),
        ),
        0,
        1.25,
        0.079,
      ),
    );
    g.add(at(mesh(new THREE.BoxGeometry(1.0, 0.05, 0.14), M.wood), 0, 0.82, 0.08));
    return g;
  }
  function desk(kind: DeskKind): Desk {
    const g = new THREE.Group();
    boards(g, 1.7, 0.84, 0.745, 0.08, M.woodL, 4);
    bx(g, M.woodD, 0, 0.78, 0.43, 1.74, 0.05, 0.03, 0.01);
    // a pedestal of three drawers with iron pulls
    bx(g, M.wood, 0.55, 0.36, 0, 0.5, 0.66, 0.76, 0.02);
    for (let i = 0; i < 3; i++) {
      bx(g, M.woodL, 0.55, 0.15 + i * 0.2, 0.385, 0.44, 0.17, 0.02, 0.01);
      bx(g, M.iron, 0.55, 0.17 + i * 0.2, 0.402, 0.12, 0.025, 0.02);
    }
    for (const lz of [-0.34, 0.34]) g.add(at(mesh(taper(0.09, 0.7, 0.09, 0.7), M.woodD), -0.76, 0.35, lz));
    bx(g, M.woodD, -0.76, 0.14, 0, 0.05, 0.05, 0.62, 0.01);
    for (const sd of [-1, 1]) cornerIron(g, sd * 0.85, 0.79, 0.42, sd, 1);
    const out: Desk = { g, kb: null, screen: null, light: null };
    if (kind === 'screen') {
      // the keyboard at the front edge, where a seated agent's hands are: an iron board with rows of red-glowing keys
      // (its height is in userData.y0: the Frontend dev's shakes when the keys are smashed)
      const kb = at(new THREE.Group(), -0.12, 0.805, -0.25);
      kb.userData.y0 = 0.805;
      kb.add(mesh(new THREE.BoxGeometry(0.62, 0.035, 0.2), M.iron));
      for (const [z, w] of [
        [-0.06, 0.54],
        [0, 0.56],
        [0.06, 0.5],
      ] as const)
        kb.add(at(mesh(new THREE.BoxGeometry(w, 0.012, 0.04), glow('#ff5a3a', 0.55), false), 0, 0.022, z));
      g.add(kb);
      out.kb = kb;
      // the screen at the back, facing the seat, on a short stand that stands on the desk
      const frame = new THREE.Group();
      frame.add(mesh(new THREE.BoxGeometry(1.04, 0.7, 0.05), M.woodD));
      const sm = new THREE.MeshBasicMaterial({
        map: TEX.code,
        transparent: true,
        opacity: 0.4,
        toneMapped: false,
      });
      const screen = rot(at(new THREE.Mesh(new THREE.PlaneGeometry(0.92, 0.58), sm), 0, 0, -0.03), 0, PI, 0);
      frame.add(screen);
      out.screen = screen;
      frame.add(at(new THREE.Mesh(new THREE.PlaneGeometry(0.92, 0.58), sm), 0, 0, 0.03));
      frame.add(at(mesh(new THREE.BoxGeometry(0.08, 0.13, 0.08), M.woodD), 0, -0.41, 0));
      frame.add(at(mesh(new THREE.BoxGeometry(0.34, 0.02, 0.2), M.woodD), 0, -0.455, 0));
      frame.add(at(skull(0.09), 0.46, 0.4, 0));
      frame.position.set(-0.12, 1.25, 0.17);
      g.add(frame);
      const light = new THREE.PointLight('#7fe8ff', 0, 3.2, 2);
      light.position.set(-0.12, 1.25, -0.35);
      g.add(light);
      out.light = light;
      g.add(at(mug(), 0.6, 0.79, 0.15));
    } else if (kind === 'paper') {
      g.add(
        rot(
          at(
            new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.63), toon('#ffffff', { map: TEX.paper })),
            -0.15,
            0.796,
            0,
          ),
          -PI / 2,
          0,
          0,
        ),
      );
      g.add(
        rot(
          at(mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.22, 6), M.red), 0.35, 0.81, 0.1),
          0,
          0,
          PI / 2,
        ),
      );
      g.add(at(candle(0.12), 0.65, 0.79, -0.25));
    } else if (kind === 'books') {
      g.add(at(mesh(new THREE.BoxGeometry(0.42, 0.06, 0.3), M.red), -0.35, 0.82, 0));
      g.add(at(mesh(new THREE.BoxGeometry(0.36, 0.05, 0.28), toon('#3f5f8f')), -0.33, 0.875, 0.01));
      g.add(at(mesh(new THREE.BoxGeometry(0.5, 0.03, 0.34), toon('#e6d9bc')), 0.1, 0.81, 0.05));
      g.add(at(skullCandle(), 0.62, 0.79, -0.22));
    }
    g.add(at(mesh(new THREE.CylinderGeometry(0.25, 0.21, 0.44, 14), M.woodD), 0, 0.22, -0.78));
    return out;
  }
  function anvil(): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.3, 0.38, 0.5, 10), M.woodD), 0, 0.25, 0));
    g.add(at(mesh(new THREE.BoxGeometry(0.34, 0.2, 0.22), M.iron), 0, 0.6, 0));
    g.add(at(mesh(new THREE.BoxGeometry(0.7, 0.14, 0.3), M.ironL), 0, 0.77, 0));
    spike(g, new THREE.Vector3(0.35, 0.77, 0), new THREE.Vector3(1, 0, 0), 0.32, 0.1, M.ironL, 0, 10);
    g.add(at(mesh(new THREE.BoxGeometry(0.4, 0.02, 0.06), glow('#ff7a2a', 1.6), false), 0.05, 0.85, -0.05));
    return g;
  }
  function dummy(): THREE.Group {
    const d = new THREE.Group();
    d.add(at(mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 8), M.wood), 0, 0.8, 0));
    d.add(at(mesh(new THREE.CylinderGeometry(0.28, 0.32, 0.8, 12), M.straw), 0, 1.15, 0));
    d.add(at(mesh(new THREE.SphereGeometry(0.22, 12, 10), M.straw), 0, 1.75, 0));
    d.add(at(mesh(new THREE.BoxGeometry(0.9, 0.08, 0.08), M.wood), 0, 1.35, 0));
    d.add(at(rot(mesh(new THREE.TorusGeometry(0.3, 0.03, 6, 16), M.red), PI / 2, 0, 0), 0, 1.2, 0));
    return d;
  }
  function target(): THREE.Group {
    const t = new THREE.Group();
    t.add(
      rot(
        at(
          mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.2, 24), toon('#ffffff', { map: TEX.target })),
          0,
          1.0,
          0,
        ),
        PI / 2,
        0,
        0,
      ),
    );
    for (const sd of [-1, 1])
      t.add(
        rot(at(mesh(new THREE.BoxGeometry(0.06, 1.4, 0.06), M.wood), sd * 0.35, 0.7, -0.2), 0, 0, sd * 0.2),
      );
    return t;
  }
  function hay(r = 0.42): THREE.Group {
    const g = new THREE.Group();
    g.add(rot(at(mesh(new THREE.CylinderGeometry(r, r, 0.7, 16), M.straw), 0, r, 0), 0, 0, PI / 2));
    return g;
  }
  function brazier(light = 0, s = 1): THREE.Group {
    const g = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * PI * 2;
      const l = mesh(new THREE.CylinderGeometry(0.035, 0.045, 1.1, 6), M.iron);
      l.position.set(Math.cos(a) * 0.22, 0.5, Math.sin(a) * 0.22);
      l.rotation.set(Math.sin(a) * 0.3, 0, -Math.cos(a) * 0.3);
      g.add(l);
    }
    g.add(at(mesh(new THREE.CylinderGeometry(0.42, 0.24, 0.3, 14, 1, true), M.iron), 0, 1.05, 0));
    g.add(rot(at(mesh(new THREE.CircleGeometry(0.36, 14), M.dark, false), 0, 1.12, 0), -PI / 2, 0, 0));
    g.add(
      at(
        mesh(new THREE.SphereGeometry(0.3, 10, 6, 0, PI * 2, 0, PI / 2), glow('#ff6a20', 1.4), false),
        0,
        1.08,
        0,
      ),
    );
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * PI * 2;
      spike(
        g,
        new THREE.Vector3(Math.cos(a) * 0.42, 1.18, Math.sin(a) * 0.42),
        new THREE.Vector3(Math.cos(a) * 0.4, 1, Math.sin(a) * 0.4),
        0.22,
        0.04,
        M.iron,
        0,
        5,
      );
    }
    flame(g, 0, 1.12, 0, 1.6);
    if (light) {
      const l = new THREE.PointLight('#ff9a4a', light, 9, 2);
      l.position.y = 1.7;
      g.add(l);
      FIRE_LIGHTS.push({ l, base: light, ph: rr(0, 6) });
    }
    g.scale.setScalar(s);
    return g;
  }
  function torch(): THREE.Group {
    const g = new THREE.Group();
    g.add(rot(at(mesh(new THREE.BoxGeometry(0.06, 0.06, 0.3), M.iron), 0, 0, 0.12), 0, 0, 0));
    const st = at(mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.5, 8), M.woodD), 0, 0.12, 0.26);
    st.rotation.x = 0.35;
    g.add(st);
    g.add(at(mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.12, 8), M.iron), 0, 0.36, 0.34));
    flame(g, 0, 0.4, 0.35, 0.9);
    return g;
  }
  function poleBanner(h = 3.2, tex: THREE.Texture = TEX.banner): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.05, 0.07, h + 0.6, 8), M.woodD), 0, (h + 0.6) / 2, 0));
    g.add(
      rot(at(mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.0, 6), M.iron), 0, h + 0.4, 0.05), 0, 0, PI / 2),
    );
    g.add(at(skull(0.16), 0, h + 0.72, 0.02));
    const cloth = new THREE.Mesh(
      new THREE.PlaneGeometry(0.9, 1.9, 1, 8),
      toon('#ffffff', { map: tex, side: THREE.DoubleSide }),
    );
    const pos = cloth.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) pos.setZ(i, Math.sin(pos.getY(i) * 2.6) * 0.05);
    cloth.geometry.computeVertexNormals();
    cloth.position.set(0, h - 0.55, 0.08);
    cloth.castShadow = true;
    g.add(cloth);
    return g;
  }
  function hangingBanner(w = 1.2, h = 2.6): THREE.Group {
    const g = new THREE.Group();
    g.add(
      rot(at(mesh(new THREE.CylinderGeometry(0.04, 0.04, w + 0.3, 6), M.iron), 0, 0, 0.04), 0, 0, PI / 2),
    );
    const cloth = mesh(
      new THREE.PlaneGeometry(w, h),
      toon('#ffffff', { map: TEX.banner, side: THREE.DoubleSide }),
      false,
    );
    cloth.position.set(0, -h / 2, 0.05);
    g.add(cloth);
    return g;
  }
  function skullPole(h = 2.4): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.05, 0.08, h, 7), M.woodD), 0, h / 2, 0));
    g.add(at(skull(0.24), 0, h + 0.12, 0));
    g.add(at(horns(0.5), 0, h + 0.2, 0));
    for (let i = 0; i < 3; i++) {
      const c = mesh(
        new THREE.PlaneGeometry(0.12, rr(0.5, 0.9)),
        toon(pick([COL.red, COL.redD, COL.bone]), { side: THREE.DoubleSide }),
        false,
      );
      c.position.set(Math.cos(i * 2.1) * 0.08, h - 0.5, Math.sin(i * 2.1) * 0.08);
      c.rotation.y = i * 2.1;
      g.add(c);
    }
    return g;
  }
  function spikes(len = 3): THREE.Group {
    const g = new THREE.Group();
    const n = Math.max(2, Math.round(len / 0.9));
    g.add(rot(at(mesh(new THREE.CylinderGeometry(0.1, 0.1, len, 8), M.wood), 0, 0.45, 0), 0, 0, PI / 2));
    for (let i = 0; i < n; i++) {
      const x = -len / 2 + ((i + 0.5) * len) / n;
      for (const sd of [-1, 1]) {
        const s = new THREE.Group();
        s.add(at(mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.4, 7), M.woodL), 0, 0, 0));
        s.add(at(mesh(new THREE.ConeGeometry(0.07, 0.3, 7), M.boneD), 0, 0.85, 0));
        s.position.set(x, 0.45, 0);
        s.rotation.x = sd * 0.8;
        g.add(s);
      }
    }
    return g;
  }
  function drum(): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.55, 0.5, 0.9, 18), M.redD), 0, 0.75, 0));
    g.add(at(mesh(new THREE.CylinderGeometry(0.57, 0.57, 0.06, 18), toon('#d8c4a0')), 0, 1.22, 0));
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * PI * 2;
      g.add(
        rot(
          at(
            mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.7, 6), M.woodD),
            Math.cos(a) * 0.42,
            0.3,
            Math.sin(a) * 0.42,
          ),
          Math.sin(a) * 0.2,
          0,
          -Math.cos(a) * 0.2,
        ),
      );
    }
    g.add(at(rot(mesh(new THREE.TorusGeometry(0.53, 0.03, 6, 20), M.bone), PI / 2, 0, 0), 0, 1.05, 0));
    return g;
  }
  function totem(h = 4): THREE.Group {
    const g = new THREE.Group();
    const cols = [COL.red, COL.woodL, COL.redD, COL.wood];
    for (let i = 0; i < 4; i++) {
      const b = mesh(new THREE.CylinderGeometry(0.42, 0.46, h / 4, 10), toon(cols[i] as string));
      b.position.y = h / 8 + (i * h) / 4;
      g.add(b);
      for (const sd of [-1, 1])
        g.add(
          at(mesh(new THREE.BoxGeometry(0.12, 0.08, 0.06), M.bone), sd * 0.15, b.position.y + 0.05, 0.42),
        );
      g.add(at(mesh(new THREE.BoxGeometry(0.36, 0.06, 0.06), M.dark), 0, b.position.y - 0.18, 0.43));
    }
    g.add(at(skull(0.45), 0, h + 0.25, 0));
    g.add(at(horns(1.1), 0, h + 0.35, 0));
    for (const sd of [-1, 1])
      g.add(
        rot(at(mesh(new THREE.BoxGeometry(1.0, 0.12, 0.1), M.woodD), sd * 0.55, h * 0.72, 0), 0, 0, sd * 0.2),
      );
    return g;
  }
  function tent(r = 1.9, h = 2.6, col = '#8a6a4a'): THREE.Group {
    const g = new THREE.Group();
    const cone = mesh(new THREE.ConeGeometry(r, h, 8, 1, true), toon(col, { side: THREE.DoubleSide }));
    cone.position.y = h / 2;
    g.add(cone);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * PI * 2 + 0.4;
      g.add(
        rot(
          at(
            mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.9, 6), M.woodD),
            Math.cos(a) * 0.12,
            h + 0.25,
            Math.sin(a) * 0.12,
          ),
          Math.sin(a) * 0.4,
          0,
          -Math.cos(a) * 0.4,
        ),
      );
    }
    g.add(rot(at(mesh(new THREE.PlaneGeometry(0.9, 1.3), M.dark, false), 0, 0.65, r * 0.82), -0.6, 0, 0));
    g.add(
      rot(at(mesh(new THREE.TorusGeometry(r * 0.62, 0.05, 6, 24), M.redD), 0, h * 0.35, 0), PI / 2, 0, 0),
    );
    return g;
  }
  function weaponRack(n = 4): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.BoxGeometry(1.8, 0.1, 0.1), M.wood), 0, 1.25, 0));
    g.add(at(mesh(new THREE.BoxGeometry(1.8, 0.1, 0.1), M.wood), 0, 0.3, 0.12));
    for (const sd of [-1, 1])
      g.add(at(mesh(new THREE.BoxGeometry(0.1, 1.35, 0.1), M.woodD), sd * 0.85, 0.67, 0));
    for (let i = 0; i < n; i++) {
      const x = -0.6 + (i * 1.2) / (n - 1);
      const w = new THREE.Group();
      if (i % 2) {
        w.add(at(mesh(new THREE.BoxGeometry(0.07, 1.2, 0.03), toon('#c8ccd2')), 0, 0.6, 0));
        w.add(at(mesh(new THREE.BoxGeometry(0.22, 0.05, 0.06), M.gold), 0, 0.2, 0));
      } else {
        w.add(at(mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.4, 6), M.woodD), 0, 0.7, 0));
        w.add(at(mesh(new THREE.BoxGeometry(0.34, 0.24, 0.04), toon('#a8acb2')), 0.12, 1.25, 0));
      }
      w.position.set(x, 0.05, 0.08);
      w.rotation.z = 0.08;
      g.add(w);
    }
    return g;
  }
  function woodpile(w = 2.0): THREE.Group {
    const g = new THREE.Group();
    const items: [number, number, number][] = [];
    for (let r = 0; r < 4; r++)
      for (let i = 0; i < Math.floor(w / 0.26) - r; i++)
        items.push([-w / 2 + 0.13 + i * 0.26 + r * 0.13, 0.13 + r * 0.22, 0]);
    for (const [x, y] of items)
      g.add(
        rot(
          at(
            mesh(
              new THREE.CylinderGeometry(0.12, 0.12, 0.9, 8),
              toon(pick([COL.woodL, '#8a6440', '#6e4a30'])),
            ),
            x,
            y,
            0,
          ),
          PI / 2,
          0,
          0,
        ),
      );
    return g;
  }
  function cart(): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.BoxGeometry(1.6, 0.12, 1.0), M.wood), 0, 0.62, 0));
    for (const sd of [-1, 1]) {
      g.add(at(mesh(new THREE.BoxGeometry(1.6, 0.36, 0.06), M.woodL), 0, 0.85, sd * 0.47));
      g.add(
        rot(
          at(mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.08, 14), M.woodD), 0, 0.42, sd * 0.58),
          PI / 2,
          0,
          0,
        ),
      );
    }
    for (const sd of [-1, 1])
      g.add(
        rot(at(mesh(new THREE.BoxGeometry(1.4, 0.07, 0.07), M.woodD), 1.3, 0.55, sd * 0.35), 0, 0, -0.18),
      );
    g.add(at(sack(), -0.3, 0.68, 0.1));
    g.add(at(crate(0.4), 0.35, 0.68, -0.15));
    return g;
  }
  function stall(): THREE.Group {
    const g = new THREE.Group();
    g.add(table(2.2, 0.9, 0.9, M.woodL));
    for (const [x, z] of [
      [-1.05, -0.4],
      [1.05, -0.4],
      [-1.05, 0.4],
      [1.05, 0.4],
    ] as const)
      g.add(at(mesh(new THREE.BoxGeometry(0.08, 2.2, 0.08), M.woodD), x, 1.1, z));
    const tex = canvasTex(256, 64, (gg, _W, H) => {
      for (let i = 0; i < 8; i++) {
        gg.fillStyle = i % 2 ? '#e3d5b6' : '#8a2420';
        gg.fillRect(i * 32, 0, 32, H);
      }
    });
    const aw = mesh(new THREE.BoxGeometry(2.5, 0.05, 1.4), toon('#ffffff', { map: tex }));
    aw.position.set(0, 2.2, 0.15);
    aw.rotation.x = 0.22;
    g.add(aw);
    for (let i = 0; i < 9; i++)
      g.add(
        at(
          mesh(
            new THREE.SphereGeometry(0.09, 8, 6),
            toon(pick(['#c0392b', '#e0a030', '#7aa04a', '#d06030'])),
          ),
          rr(-0.9, 0.9),
          0.95,
          rr(-0.3, 0.3),
        ),
      );
    g.add(at(crate(0.5), -1.4, 0, 0.3));
    g.add(at(barrel(0.8), 1.5, 0, -0.1));
    return g;
  }
  function well(): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(planarUV(new THREE.CylinderGeometry(1.0, 1.1, 0.9, 22), 1.2), M.stone), 0, 0.45, 0));
    g.add(
      rot(
        at(
          mesh(
            new THREE.CircleGeometry(0.85, 20),
            toon('#3f6f8a', { emissive: '#28485a', emissiveIntensity: 0.3 }),
            false,
          ),
          0,
          0.82,
          0,
        ),
        -PI / 2,
        0,
        0,
      ),
    );
    for (const sd of [-1, 1])
      g.add(at(mesh(new THREE.BoxGeometry(0.14, 1.7, 0.14), M.woodD), sd * 0.95, 1.5, 0));
    const roof = mesh(new THREE.ConeGeometry(1.45, 0.8, 4), toon('#ffffff', { map: tiled(TEX.roof, 2, 1) }));
    roof.position.y = 2.65;
    roof.rotation.y = PI / 4;
    g.add(roof);
    g.add(rot(at(mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.9, 8), M.wood), 0, 2.05, 0), 0, 0, PI / 2));
    g.add(at(mesh(new THREE.CylinderGeometry(0.15, 0.13, 0.22, 10), M.woodL), 0.2, 1.55, 0));
    g.add(at(skull(0.18), 0, 3.15, 0));
    return g;
  }
  function lampPost(light = 0): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.07, 0.1, 2.8, 8), M.iron), 0, 1.4, 0));
    g.add(at(mesh(new THREE.BoxGeometry(0.55, 0.06, 0.06), M.iron), 0.22, 2.7, 0));
    const lan = new THREE.Group();
    lan.add(mesh(new THREE.CylinderGeometry(0.14, 0.18, 0.32, 8), M.iron));
    lan.add(at(mesh(new THREE.SphereGeometry(0.11, 10, 8), glow('#ffc070', 2.2), false), 0, -0.02, 0));
    if (light) {
      const l = new THREE.PointLight('#ffc477', light, 9, 2);
      lan.add(l);
    }
    lan.position.set(0.44, 2.44, 0);
    g.add(lan);
    return g;
  }
  function chest(): THREE.Group {
    const g = new THREE.Group();
    bx(g, M.wood, 0, 0.25, 0, 1.0, 0.5, 0.6, 0.02);
    g.add(
      rot(
        at(mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.0, 16, 1, false, 0, PI), M.woodL), 0, 0.5, 0),
        0,
        0,
        PI / 2,
      ),
    );
    // iron bands over body and lid, corner caps, a lock plate, ring handles
    for (const dx of [-0.38, 0.38]) {
      bx(g, M.iron, dx, 0.27, 0, 0.07, 0.52, 0.62);
      g.add(at(rot(mesh(new THREE.TorusGeometry(0.31, 0.025, 4, 16, PI), M.iron), 0, PI / 2, 0), dx, 0.5, 0));
    }
    for (const a of [-1, 1])
      for (const c of [-1, 1]) bx(g, M.iron, a * 0.49, 0.05, c * 0.29, 0.06, 0.1, 0.06);
    bx(g, M.gold, 0, 0.44, 0.31, 0.16, 0.2, 0.025);
    bx(g, M.dark, 0, 0.42, 0.325, 0.03, 0.06, 0.01);
    for (const sd of [-1, 1])
      g.add(
        at(rot(mesh(new THREE.TorusGeometry(0.06, 0.012, 4, 12), M.iron), 0, PI / 2, 0), sd * 0.51, 0.3, 0),
      );
    g.add(at(skull(0.1), 0, 0.62, 0.22));
    return g;
  }
  function throne(): THREE.Group {
    const g = new THREE.Group();
    bx(g, M.woodD, 0, 0.25, 0, 1.3, 0.5, 1.1, 0.03);
    bx(g, M.red, 0, 0.58, 0.05, 1.08, 0.16, 0.9, 0.06);
    bx(g, M.woodD, 0, 1.2, -0.48, 1.3, 1.9, 0.2, 0.03);
    bx(g, M.red, 0, 1.25, -0.36, 0.9, 1.3, 0.06, 0.03);
    for (let i = 0; i < 4; i++)
      for (const sd of [-1, 1])
        g.add(at(mesh(new THREE.SphereGeometry(0.03, 6, 4), M.gold), sd * 0.4, 0.7 + i * 0.36, -0.32));
    for (const sd of [-1, 1]) {
      bx(g, M.woodD, sd * 0.62, 0.75, 0, 0.18, 0.5, 1.0, 0.03);
      bx(g, M.iron, sd * 0.62, 1.01, 0.1, 0.22, 0.04, 0.8, 0.01);
      g.add(at(skull(0.12), sd * 0.62, 1.1, 0.45));
      spike(
        g,
        new THREE.Vector3(sd * 0.55, 2.15, -0.48),
        new THREE.Vector3(sd * 0.3, 1, 0),
        0.5,
        0.08,
        M.bone,
        0,
        6,
      );
    }
    g.add(at(skull(0.32), 0, 2.25, -0.4));
    g.add(at(horns(1.0), 0, 2.3, -0.4));
    return g;
  }
  function shield(col: string = COL.red): THREE.Group {
    const g = new THREE.Group();
    g.add(rot(mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.06, 18), toon(col)), PI / 2, 0, 0));
    g.add(rot(at(mesh(new THREE.TorusGeometry(0.42, 0.04, 6, 20), M.iron), 0, 0, 0.03), 0, 0, 0));
    g.add(at(skull(0.16), 0, 0, 0.08));
    return g;
  }
  function trophy(): THREE.Group {
    const g = new THREE.Group();
    g.add(mesh(new THREE.BoxGeometry(0.7, 0.8, 0.08), M.woodD));
    g.add(at(skull(0.32), 0, 0.02, 0.18));
    g.add(at(horns(1.0), 0, 0.12, 0.16));
    return g;
  }
  function chandelier(r = 0.7, n = 6): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.0, 4), M.iron), 0, 0.5, 0));
    g.add(rot(mesh(new THREE.TorusGeometry(r, 0.04, 6, 24), M.iron), PI / 2, 0, 0));
    for (let i = 0; i < n; i++) {
      const a = (i / n) * PI * 2;
      g.add(at(candle(0.12), Math.cos(a) * r, 0.02, Math.sin(a) * r));
    }
    return g;
  }
  function lanternString(
    parent: THREE.Object3D,
    pts: readonly (readonly [number, number])[],
    y0: number,
    sag: number,
  ) {
    // warm lanterns on a sagging line between posts
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i] as readonly [number, number];
      const [bx2, bz] = pts[i + 1] as readonly [number, number];
      const n = 5;
      for (let k = 1; k < n; k++) {
        const t = k / n;
        const x = ax + (bx2 - ax) * t;
        const z = az + (bz - az) * t;
        const y = y0 - Math.sin(t * PI) * sag;
        parent.add(
          at(
            mesh(
              new THREE.SphereGeometry(0.09, 8, 6),
              glow(pick(['#ffc070', '#ff9a50', '#ffe0a0']), 2.0),
              false,
            ),
            x,
            y,
            z,
          ),
        );
      }
      const len = Math.hypot(bx2 - ax, bz - az);
      const line = mesh(new THREE.CylinderGeometry(0.008, 0.008, len, 3), M.dark, false);
      line.position.set((ax + bx2) / 2, y0 - sag * 0.6, (az + bz) / 2);
      line.rotation.set(0, -Math.atan2(bz - az, bx2 - ax), PI / 2);
      parent.add(line);
    }
  }
  function tree(kind: TreeKind = 'round', s = 1): THREE.Group {
    const t = new THREE.Group();
    t.add(at(mesh(new THREE.CylinderGeometry(0.18 * s, 0.3 * s, 1.8 * s, 8), M.wood), 0, 0.9 * s, 0));
    if (kind === 'pine') {
      for (let i = 0; i < 4; i++)
        t.add(
          at(
            mesh(
              new THREE.ConeGeometry((1.5 - i * 0.3) * s, 1.4 * s, 9),
              toon(pick(['#3e6a46', '#47744c', '#355f40'])),
            ),
            0,
            (1.6 + i * 0.8) * s,
            0,
          ),
        );
    } else if (kind === 'dead') {
      for (let i = 0; i < 4; i++) {
        const b = mesh(new THREE.CylinderGeometry(0.04 * s, 0.1 * s, 1.2 * s, 6), M.woodD);
        const a = i * 1.7;
        b.position.set(Math.cos(a) * 0.3 * s, (1.6 + i * 0.25) * s, Math.sin(a) * 0.3 * s);
        b.rotation.set(Math.sin(a) * 0.8, 0, -Math.cos(a) * 0.8);
        t.add(b);
      }
    } else {
      const cols =
        kind === 'autumn' ? [COL.autumn1, COL.autumn2, COL.autumn3] : [COL.leaf, COL.leafD, COL.leafL];
      for (const [dx, dy, dz, r] of [
        [0, 2.2, 0, 1.1],
        [0.7, 1.9, 0.3, 0.8],
        [-0.6, 2.0, -0.3, 0.85],
        [0.1, 2.9, -0.1, 0.7],
        [-0.2, 2.4, 0.6, 0.7],
      ] as const)
        t.add(at(mesh(new THREE.SphereGeometry(r * s, 14, 10), toon(pick(cols))), dx * s, dy * s, dz * s));
    }
    t.rotation.y = rr(0, 3);
    return t;
  }
  // The Blender flora set: one template per kind (tree_oak, bush_fern ...). plantFlora() records where each one stands;
  // growFlora() then draws every kind as instances, a handful of draw calls for every tree and bush on the island.
  const FLORA_PLACED = new Map<string, THREE.Matrix4[]>();
  function plantFlora(kind: string, s: number, x: number, z: number, y = 0): true {
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rr(0, 2 * PI)),
      new THREE.Vector3(s * rr(0.92, 1.08), s * rr(0.9, 1.12), s * rr(0.92, 1.08)),
    );
    const list = FLORA_PLACED.get(kind);
    if (list) list.push(m);
    else FLORA_PLACED.set(kind, [m]);
    return true;
  }
  function growFlora(models: KitModels) {
    models.flora.scene.updateMatrixWorld(true);
    for (const [kind, list] of FLORA_PLACED) {
      const node = kitNode(models.flora, kind);
      if (!node) throw new Error(`no flora model for ${kind}`);
      for (const [mat, geos] of byKitMaterial(kit, node)) {
        const geo = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
        if (!geo) continue;
        const im = new THREE.InstancedMesh(geo, mat, list.length);
        list.forEach((m, i) => im.setMatrixAt(i, m));
        im.castShadow = !(mat as THREE.MeshStandardMaterial).isMeshStandardMaterial;
        im.receiveShadow = true;
        im.frustumCulled = false;
        scene.add(im);
      }
    }
  }
  function crystal(): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.3, 0.38, 0.6, 8), M.stone), 0, 0.3, 0));
    const c = at(mesh(new THREE.OctahedronGeometry(0.32, 0), glow('#5fe0d0', 1.3), false), 0, 1.0, 0);
    c.scale.y = 1.7;
    g.add(c);
    SPINNERS.push({ o: c, axis: 'y', v: 0.6, bob: true, y0: 1.0 });
    return g;
  }
  function cauldron(): THREE.Group {
    const g = new THREE.Group();
    g.add(
      at(
        mesh(
          new THREE.SphereGeometry(0.5, 16, 10, 0, PI * 2, PI * 0.3, PI * 0.7),
          toon('#2e2a2c', { side: THREE.DoubleSide }),
        ),
        0,
        0.55,
        0,
      ),
    );
    g.add(
      rot(
        at(mesh(new THREE.CircleGeometry(0.44, 16), glow('#7a9a3a', 0.6), false), 0, 0.8, 0),
        -PI / 2,
        0,
        0,
      ),
    );
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * PI * 2;
      g.add(
        at(
          mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.3, 6), M.iron),
          Math.cos(a) * 0.32,
          0.12,
          Math.sin(a) * 0.32,
        ),
      );
    }
    return g;
  }
  function fence(parent: THREE.Object3D, pts: readonly (readonly [number, number])[], h = 0.9, gapAt = -1) {
    for (let i = 0; i < pts.length - 1; i++) {
      if (i === gapAt) continue;
      const [ax, az] = pts[i] as readonly [number, number];
      const [bx2, bz] = pts[i + 1] as readonly [number, number];
      const len = Math.hypot(bx2 - ax, bz - az);
      const ry = -Math.atan2(bz - az, bx2 - ax);
      for (const y of [h * 0.45, h * 0.85]) {
        const r = mesh(new THREE.BoxGeometry(len, 0.07, 0.06), M.woodL);
        r.position.set((ax + bx2) / 2, y, (az + bz) / 2);
        r.rotation.y = ry;
        parent.add(r);
      }
      for (const [x, z] of [
        [ax, az],
        [bx2, bz],
      ] as const)
        parent.add(at(mesh(new THREE.BoxGeometry(0.12, h + 0.15, 0.12), M.woodD), x, (h + 0.15) / 2, z));
    }
  }
  // The town painted this lettering in "M PLUS Rounded 1c" from Google Fonts, which the page's policy refuses;
  // the stack falls back to the self-hosted Inter (the world's label font is a question before 4d).
  function signPost(text: string): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.BoxGeometry(0.1, 2.2, 0.1), M.woodD), 0, 1.1, 0));
    const tex = canvasTex(256, 96, (c, W, H) => {
      c.fillStyle = '#6a4630';
      c.fillRect(0, 0, W, H);
      c.strokeStyle = '#3a2419';
      c.lineWidth = 8;
      c.strokeRect(4, 4, W - 8, H - 8);
      c.fillStyle = '#e3d5b6';
      c.font = '800 40px "M PLUS Rounded 1c", "Inter Variable", sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(text, W / 2, H / 2 + 2);
    });
    g.add(at(mesh(new THREE.BoxGeometry(1.1, 0.42, 0.06), toon('#ffffff', { map: tex })), 0.25, 1.85, 0));
    return g;
  }
  function bed(col: string = COL.red): THREE.Group {
    const g = new THREE.Group();
    // frame: side rails, four posts with round caps, a slatted head, a low foot
    for (const sd of [-1, 1]) bx(g, M.woodD, sd * 0.48, 0.24, 0, 0.07, 0.18, 1.96, 0.015);
    for (const [x, z, h] of [
      [-0.48, -0.98, 1.0],
      [0.48, -0.98, 1.0],
      [-0.48, 0.98, 0.62],
      [0.48, 0.98, 0.62],
    ] as const) {
      bx(g, M.woodD, x, h / 2, z, 0.1, h, 0.1, 0.015);
      g.add(at(mesh(new THREE.SphereGeometry(0.065, 8, 6), M.wood), x, h + 0.04, z));
    }
    for (let i = 0; i < 5; i++) bx(g, M.wood, -0.32 + i * 0.16, 0.66, -0.98, 0.07, 0.5, 0.04, 0.01);
    bx(g, M.woodD, 0, 0.92, -0.98, 0.98, 0.09, 0.07, 0.015);
    bx(g, M.woodD, 0, 0.42, -0.98, 0.98, 0.07, 0.07, 0.015);
    bx(g, M.woodD, 0, 0.5, 0.98, 0.98, 0.14, 0.06, 0.015);
    // mattress, a blanket folded back at the top, a pillow, a fur at the foot
    bx(g, toon('#e6d9bc'), 0, 0.4, 0, 0.9, 0.16, 1.88, 0.05);
    bx(g, toon(col), 0, 0.5, 0.25, 0.96, 0.07, 1.36, 0.03);
    bx(g, toon(col), 0, 0.535, -0.38, 0.96, 0.05, 0.16, 0.025);
    bx(g, toon('#efe4cc'), 0, 0.54, -0.72, 0.6, 0.12, 0.32, 0.055);
    bx(g, toon('#8a7660'), 0, 0.545, 0.72, 0.98, 0.04, 0.36, 0.02);
    g.add(at(skull(0.12), 0, 1.08, -0.94));
    return g;
  }
  function bunk(): THREE.Group {
    const g = new THREE.Group();
    g.add(bed(COL.redD));
    const top = bed('#4a3a30');
    top.position.y = 1.15;
    g.add(top);
    for (const [x, z] of [
      [-0.52, -1.0],
      [0.52, -1.0],
      [-0.52, 1.0],
      [0.52, 1.0],
    ] as const)
      g.add(at(mesh(new THREE.BoxGeometry(0.1, 2.2, 0.1), M.wood), x, 1.1, z));
    for (let i = 0; i < 5; i++)
      g.add(at(mesh(new THREE.BoxGeometry(0.06, 0.05, 0.06), M.woodL), 0.52, 0.4 + i * 0.3, 0.9));
    return g;
  }
  function wardrobe(): THREE.Group {
    const g = new THREE.Group();
    bx(g, M.woodD, 0, 1.05, 0, 1.2, 1.9, 0.6, 0.02);
    // two doors, each with two raised panels and black iron hinges
    for (const sd of [-1, 1]) {
      bx(g, M.wood, sd * 0.3, 1.05, 0.31, 0.56, 1.78, 0.03, 0.01);
      for (const y of [0.62, 1.48]) bx(g, M.woodL, sd * 0.3, y, 0.33, 0.4, 0.66, 0.02, 0.008);
      for (const y of [0.4, 1.7]) bx(g, M.iron, sd * 0.52, y, 0.33, 0.14, 0.05, 0.015);
      bx(g, M.gold, sd * 0.06, 1.08, 0.34, 0.03, 0.14, 0.03);
    }
    bx(g, M.wood, 0, 2.05, 0, 1.32, 0.1, 0.68, 0.02);
    bx(g, M.woodD, 0, 2.13, 0.01, 1.4, 0.06, 0.74, 0.02);
    for (const a of [-1, 1])
      for (const c of [-1, 1]) bx(g, M.woodD, a * 0.54, 0.05, c * 0.24, 0.12, 0.1, 0.12, 0.02);
    return g;
  }
  function partition(len: number, h = 1.8): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(wallUV(new THREE.BoxGeometry(0.12, h, len), h, 1.3), M.plankWall), 0, h / 2, 0));
    g.add(at(mesh(new THREE.BoxGeometry(0.18, 0.1, len + 0.04), M.timber), 0, h, 0));
    return g;
  }
  function curtain(w = 0.8, h = 1.6): THREE.Group {
    const c = new THREE.Mesh(new THREE.PlaneGeometry(w, h, 6, 1), toon(COL.red, { side: THREE.DoubleSide }));
    const pos = c.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) pos.setZ(i, Math.sin(pos.getX(i) * 14) * 0.04);
    c.geometry.computeVertexNormals();
    c.position.y = h / 2 + 0.1;
    const g = new THREE.Group();
    g.add(c);
    g.add(
      at(rot(mesh(new THREE.CylinderGeometry(0.02, 0.02, w + 0.2, 6), M.iron), 0, 0, PI / 2), 0, h + 0.12, 0),
    );
    return g;
  }
  function scrollStack(): THREE.Group {
    const g = new THREE.Group();
    for (let i = 0; i < 5; i++)
      g.add(
        rot(
          at(
            mesh(
              new THREE.CylinderGeometry(0.045, 0.045, 0.42, 8),
              toon(pick(['#e6d9bc', '#d8c8a0', '#efe4cc'])),
            ),
            rr(-0.15, 0.15),
            0.05 + (i % 3) * 0.08,
            rr(-0.1, 0.1),
          ),
          0,
          rr(-0.4, 0.4),
          PI / 2,
        ),
      );
    return g;
  }
  function telescope(): THREE.Group {
    const g = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * PI * 2;
      g.add(
        rot(
          at(
            mesh(new THREE.CylinderGeometry(0.025, 0.03, 1.3, 6), M.woodD),
            Math.cos(a) * 0.22,
            0.62,
            Math.sin(a) * 0.22,
          ),
          Math.sin(a) * 0.32,
          0,
          -Math.cos(a) * 0.32,
        ),
      );
    }
    const tube = at(
      rot(mesh(new THREE.CylinderGeometry(0.07, 0.11, 1.3, 12), M.gold), 0.9, 0, 0),
      0,
      1.35,
      0.15,
    );
    g.add(tube);
    return g;
  }
  function starGlobe(): THREE.Group {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.CylinderGeometry(0.06, 0.22, 0.9, 10), M.woodD), 0, 0.45, 0));
    g.add(at(mesh(new THREE.SphereGeometry(0.34, 20, 14), toon('#2a3050')), 0, 1.25, 0));
    for (let i = 0; i < 14; i++) {
      const a = rr(0, 2 * PI);
      const b = rr(-1.2, 1.2);
      g.add(
        at(
          mesh(new THREE.SphereGeometry(0.018, 5, 4), glow('#ffd88a', 1.6), false),
          Math.cos(a) * Math.cos(b) * 0.345,
          1.25 + Math.sin(b) * 0.345,
          Math.sin(a) * Math.cos(b) * 0.345,
        ),
      );
    }
    g.add(at(rot(mesh(new THREE.TorusGeometry(0.4, 0.02, 6, 28), M.gold), 0, PI / 2, 0.3), 0, 1.25, 0));
    return g;
  }
  const mapTex = canvasTex(256, 192, (g, W, H) => {
    g.fillStyle = '#d8c8a0';
    g.fillRect(0, 0, W, H);
    g.strokeStyle = '#6a4a30';
    g.lineWidth = 3;
    g.beginPath();
    g.moveTo(30, 150);
    g.bezierCurveTo(60, 60, 140, 40, 220, 90);
    g.bezierCurveTo(200, 150, 120, 170, 30, 150);
    g.stroke();
    g.fillStyle = '#8a2420';
    for (const [x, y] of [
      [90, 100],
      [150, 80],
      [180, 120],
    ] as const) {
      g.beginPath();
      g.arc(x, y, 6, 0, PI * 2);
      g.fill();
    }
    g.strokeStyle = 'rgba(106, 74, 48, 0.5)';
    g.setLineDash([6, 6]);
    g.beginPath();
    g.moveTo(90, 100);
    g.lineTo(150, 80);
    g.lineTo(180, 120);
    g.stroke();
  });
  function wallMap(): THREE.Group {
    const g = new THREE.Group();
    g.add(mesh(new THREE.BoxGeometry(1.4, 1.05, 0.04), M.woodD));
    g.add(
      at(
        new THREE.Mesh(
          new THREE.PlaneGeometry(1.3, 0.95),
          new THREE.MeshBasicMaterial({ map: mapTex, toneMapped: false }),
        ),
        0,
        0,
        0.03,
      ),
    );
    return g;
  }
  // a wolf mount, lying in the straw
  function wolf(): THREE.Group {
    const g = new THREE.Group();
    const fur = toon('#6e6668');
    const furD = toon('#4a4446');
    const belly = toon('#b8b0a8');
    const body = mesh(new THREE.CapsuleGeometry(0.32, 0.8, 6, 12), fur);
    body.rotation.x = PI / 2;
    body.position.set(0, 0.34, 0);
    body.scale.set(1.05, 1, 0.85);
    g.add(body);
    g.add(at(mesh(new THREE.SphereGeometry(0.24, 12, 10), belly), 0, 0.22, 0.25));
    const head = at(new THREE.Group(), 0, 0.5, 0.78);
    head.add(mesh(new THREE.SphereGeometry(0.24, 14, 10), fur));
    head.add(rot(at(mesh(new THREE.ConeGeometry(0.12, 0.34, 10), furD), 0, -0.05, 0.26), PI / 2, 0, 0));
    head.add(at(mesh(new THREE.SphereGeometry(0.04, 6, 4), M.dark, false), 0, -0.03, 0.43));
    for (const sd of [-1, 1]) {
      head.add(
        rot(at(mesh(new THREE.ConeGeometry(0.07, 0.2, 6), furD), sd * 0.13, 0.22, -0.02), 0, 0, -sd * 0.3),
      );
      head.add(
        at(mesh(new THREE.SphereGeometry(0.03, 6, 4), glow('#ffb84a', 1.2), false), sd * 0.1, 0.05, 0.2),
      );
    }
    head.rotation.x = 0.25;
    g.add(head);
    for (const [x, z] of [
      [-0.2, 0.55],
      [0.2, 0.55],
    ] as const)
      g.add(rot(at(mesh(new THREE.CapsuleGeometry(0.07, 0.36, 4, 8), fur), x, 0.08, z + 0.15), PI / 2, 0, 0));
    g.add(rot(at(mesh(new THREE.ConeGeometry(0.12, 0.7, 8), furD), 0.25, 0.22, -0.75), 1.2, 0.6, 0));
    g.add(rot(at(mesh(new THREE.TorusGeometry(0.2, 0.03, 6, 16), M.red), 0, 0.42, 0.62), PI / 2.4, 0, 0));
    return g;
  }

  return {
    FLAGS,
    FLAMES,
    SPINNERS,
    FIRE_LIGHTS,
    BOOK_COLS,
    flameTex,
    flame,
    skull,
    horns,
    fj,
    bx,
    taper,
    boards,
    cornerIron,
    barrel,
    crate,
    sack,
    table,
    roundTable,
    stool,
    bench,
    candle,
    skullCandle,
    bottle,
    mug,
    plant,
    bookshelf,
    rug,
    easel,
    desk,
    anvil,
    dummy,
    target,
    hay,
    brazier,
    torch,
    poleBanner,
    hangingBanner,
    skullPole,
    spikes,
    drum,
    totem,
    tent,
    weaponRack,
    woodpile,
    cart,
    stall,
    well,
    lampPost,
    chest,
    throne,
    shield,
    trophy,
    chandelier,
    lanternString,
    tree,
    plantFlora,
    growFlora,
    crystal,
    cauldron,
    fence,
    signPost,
    bed,
    bunk,
    wardrobe,
    partition,
    curtain,
    scrollStack,
    telescope,
    starGlobe,
    wallMap,
    wolf,
    put,
  };
}

export type Props = ReturnType<typeof createProps>;
