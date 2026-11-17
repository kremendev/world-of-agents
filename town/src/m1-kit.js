import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const WOA = window.WOA;
const WW = window.WOA_WORLD;
const { ROOMS, ROOM, SPOTS, ROADS } = WW;
const ORDER = WOA.data.ORDER;
const FLOOR_H = WW.FLOOR_H;
const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const labelsEl = document.getElementById('labels');
const { PI } = Math;

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
} catch (err) {
  document.getElementById('fallback').hidden = false;
  throw err;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
document.getElementById('stage').appendChild(renderer.domElement);
const scene = new THREE.Scene();

/* ================================================================ palette: anime light, war-camp details */
const COL = {
  woodD: '#3f2820', wood: '#5c3b2a', woodL: '#7d5538', timber: '#3a2419',
  iron: '#3b3437', ironL: '#5a5254', rust: '#7a4128',
  bone: '#e3d5b6', boneD: '#b9a988',
  redD: '#5e1717', red: '#8a2420', redL: '#a63a2a', black: '#262022',
  gold: '#c79a45', stone: '#7b706a', stoneD: '#5d5550', straw: '#c9a75a',
  leaf: '#55804a', leafD: '#3f6a40', leafL: '#6e9452', autumn1: '#a5432c', autumn2: '#c0652f', autumn3: '#8a3426',
};

/* ================================================================ kit */
// A crisp cel ramp in three tones: lit, half-lit and a deep core. The dark tones take their colour from
// the cool sky light, so they read blue-violet instead of grey (anime colour, not cartoon darkening).
const GRAD = new THREE.DataTexture(new Uint8Array([70, 150, 255]), 3, 1, THREE.RedFormat);
GRAD.minFilter = GRAD.magFilter = THREE.NearestFilter;
GRAD.generateMipmaps = false;
GRAD.needsUpdate = true;
const INK = new THREE.MeshBasicMaterial({ color: 0x2b1b1b, side: THREE.BackSide });
let DEF_INK = 0, INK_K = 1;
const UP = new THREE.Vector3(0, 1, 0);
// a thin warm rim of light along every silhouette
const RIM = { uRimColor: { value: new THREE.Color('#ffd2a6') }, uRimAmt: { value: 0.45 } };
function rimify(m) {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uRimColor = RIM.uRimColor;
    sh.uniforms.uRimAmt = RIM.uRimAmt;
    sh.fragmentShader = 'uniform vec3 uRimColor;\nuniform float uRimAmt;\n' + sh.fragmentShader.replace('#include <opaque_fragment>',
      'float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);\noutgoingLight += uRimColor * smoothstep(0.62, 0.9, rimF) * uRimAmt * (0.35 + 0.65 * diffuseColor.rgb);\n#include <opaque_fragment>');
  };
  m.customProgramCacheKey = () => 'rim1';
  return m;
}
const matCache = new Map();
function toon(color, extra) {
  if (!extra) {
    if (!matCache.has(color)) matCache.set(color, rimify(new THREE.MeshToonMaterial({ color, gradientMap: GRAD })));
    return matCache.get(color);
  }
  return rimify(new THREE.MeshToonMaterial(Object.assign({ color, gradientMap: GRAD }, extra)));
}
const glowCache = new Map();
function glow(color, intensity = 2) {
  const k = color + intensity;
  if (!glowCache.has(k)) glowCache.set(k, new THREE.MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: intensity, roughness: 1 }));
  return glowCache.get(k);
}
function mesh(geo, mat, cast = true) {
  // grained wood keeps its real size on any box, instead of one stretched copy per face
  if (mat && mat.userData.autoUV && geo.attributes.uv && !geo.userData.planar && (geo.type === 'BoxGeometry' || geo.type === 'RoundedBoxGeometry')) { planarUV(geo, 0.9); geo.userData.planar = true; }
  const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = true; return m;
}
const rbox = (w, h, d, r = 0.03) => new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2.1, h / 2.1, d / 2.1));
function part(geo, mat, ink = DEF_INK, cast = true) {
  const m = mesh(geo, mat, cast);
  if (ink) {
    const o = new THREE.Mesh(geo, INK);
    o.scale.setScalar(1 + ink * INK_K);
    o.raycast = () => {};
    m.add(o);
  }
  return m;
}
function at(obj, x, y, z) { obj.position.set(x, y, z); return obj; }
function rot(obj, x, y, z) { obj.rotation.set(x, y, z); return obj; }
function put(parent, obj, x, z, ry = 0, y = 0) { obj.position.set(x, y, z); obj.rotation.y = ry; parent.add(obj); return obj; }
function spike(group, base, dir, len, rad, mat, ink = DEF_INK * 1.6, seg = 7) {
  const d = dir.clone().normalize();
  const c = part(new THREE.ConeGeometry(rad, len, seg), mat, ink);
  c.quaternion.setFromUnitVectors(UP, d);
  c.position.copy(base).addScaledVector(d, len * 0.45);
  group.add(c);
  return c;
}
let seed = 20261116;
function rnd() { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
const rr = (a, b) => a + (b - a) * rnd();
const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
let tseed = 777;
function trnd() { tseed |= 0; tseed = (tseed + 0x6d2b79f5) | 0; let t = Math.imul(tseed ^ (tseed >>> 15), 1 | tseed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
const tr = (a, b) => a + (b - a) * trnd();
function canvasTex(w, h, draw, repeat) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (repeat) t.repeat.set(repeat[0], repeat[1]);
  return t;
}
function tiled(tex, rx, ry) { const t = tex.clone(); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.needsUpdate = true; return t; }
// UVs from position, so a texture keeps its real size on any box
function planarUV(geo, s = 1, sv = s) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    let u, v;
    if (ay >= ax && ay >= az) { u = p.getX(i); v = p.getZ(i); } else if (ax >= az) { u = p.getZ(i); v = p.getY(i); } else { u = p.getX(i); v = p.getY(i); }
    uv.setXY(i, u / s, v / sv);
  }
  uv.needsUpdate = true;
  return geo;
}
// A wall box whose texture runs bottom to top exactly once (for the painted band)
// (vOff, vH: a box that is only a slice of the wall keeps its part of the band)
function wallUV(geo, h, su, vOff = 0, vH = h) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), az = Math.abs(n.getZ(i));
    const u = (ax > az ? p.getZ(i) : p.getX(i)) / su;
    uv.setXY(i, u, (p.getY(i) + h / 2 + vOff) / vH);
  }
  uv.needsUpdate = true;
  return geo;
}
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color();
// One draw call for many copies of one shape. Items: {x,y,z, rx,ry,rz, sx,sy,sz, c} or {m, c}.
function instanced(geo, items, opts = {}) {
  if (!items.length) return null;
  const mat = opts.mat || rimify(new THREE.MeshToonMaterial({ color: 0xffffff, gradientMap: GRAD, flatShading: !!opts.flat }));
  const im = new THREE.InstancedMesh(geo, mat, items.length);
  im.castShadow = !!opts.cast;
  im.receiveShadow = opts.receive !== false;
  items.forEach((it, i) => {
    if (it.m) _m.copy(it.m);
    else {
      _e.set(it.rx || 0, it.ry || 0, it.rz || 0);
      _q.setFromEuler(_e);
      _p.set(it.x, it.y, it.z);
      _s.set(it.sx ?? 1, it.sy ?? 1, it.sz ?? 1);
      _m.compose(_p, _q, _s);
    }
    im.setMatrixAt(i, _m);
    if (!opts.mat || opts.colors) im.setColorAt(i, _c.set(it.c || '#ffffff'));
  });
  im.instanceMatrix.needsUpdate = true;
  if (im.instanceColor) im.instanceColor.needsUpdate = true;
  im.computeBoundingSphere();
  (opts.parent || scene).add(im);
  return im;
}
const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1);
// Boxes in a local frame, one draw call: [x, y, z, sx, sy, sz, rx?, ry?, rz?]
function boxes(parent, mat, list, cast = true) {
  if (!list.length) return null;
  return instanced(UNIT_BOX, list.map(([x, y, z, sx, sy, sz, rx = 0, ry = 0, rz = 0]) => ({ x, y, z, sx, sy, sz, rx, ry, rz })), { mat, parent, cast });
}

/* ================================================================ textures, painted soft (low contrast, no hard black) */
function blobs(g, W, H, cols, n, rmin, rmax, alpha) {
  for (let i = 0; i < n; i++) {
    const x = tr(0, W), y = tr(0, H), r = tr(rmin, rmax);
    for (const [ox, oy] of [[0, 0], [W, 0], [-W, 0], [0, H], [0, -H]]) {
      const gr = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r);
      const c = cols[Math.floor(trnd() * cols.length)];
      gr.addColorStop(0, c + alpha); gr.addColorStop(1, c + '00');
      g.fillStyle = gr; g.fillRect(x + ox - r, y + oy - r, r * 2, r * 2);
    }
  }
}
function edgeFade(g, W, H, f = 0.16) {
  g.globalCompositeOperation = 'destination-in';
  const gr = g.createLinearGradient(0, 0, W, 0);
  gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(f, 'rgba(0,0,0,1)'); gr.addColorStop(1 - f, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  g.globalCompositeOperation = 'source-over';
}
function stonesIn(g, x0, y0, x1, y1, rowH, minW, maxW, cols, gap, round) {
  for (let y = y0; y < y1; y += rowH) {
    let x = x0 - tr(0, maxW);
    while (x < x1) {
      const w = tr(minW, maxW);
      g.fillStyle = cols[Math.floor(trnd() * cols.length)];
      g.beginPath(); g.roundRect(x + gap, y + gap, w - gap * 2, rowH - gap * 2, round); g.fill();
      g.fillStyle = 'rgba(255, 240, 220, 0.10)'; g.fillRect(x + gap * 2, y + gap * 1.5, w - gap * 4, 3);
      x += w;
    }
  }
}
// stones laid in rows that wrap left-right and top-bottom, so the texture tiles in world space
function tileStones(g, W, H, rows, minW, maxW, cols, gap, round) {
  const rowH = H / rows;
  for (let r = 0; r < rows; r++) {
    const y = r * rowH;
    let x = tr(0, maxW);
    const start = x;
    while (x < start + W) {
      const w = Math.min(tr(minW, maxW), start + W - x);
      if (w < minW * 0.5) break;
      const c = cols[Math.floor(trnd() * cols.length)];
      for (const ox of [0, -W]) {
        g.fillStyle = c;
        g.beginPath(); g.roundRect(x + ox + gap, y + gap, w - gap * 2, rowH - gap * 2, round); g.fill();
        g.fillStyle = 'rgba(255, 240, 220, 0.10)'; g.fillRect(x + ox + gap * 2, y + gap * 1.5, w - gap * 4, 3);
      }
      x += w;
    }
  }
}
const TEX = {
  grass: canvasTex(512, 512, (g, W, H) => {
    g.fillStyle = '#6f8b49'; g.fillRect(0, 0, W, H);
    blobs(g, W, H, ['#7b9752', '#64803f', '#86a05a', '#6a8443'], 90, 30, 90, '55');
    for (let i = 0; i < 900; i++) { g.strokeStyle = trnd() < 0.5 ? 'rgba(140, 170, 95, 0.35)' : 'rgba(80, 105, 55, 0.3)'; g.lineWidth = 2; const x = tr(0, W), y = tr(0, H); g.beginPath(); g.moveTo(x, y); g.lineTo(x + tr(-2, 2), y - tr(5, 10)); g.stroke(); }
  }),
  dirt: canvasTex(256, 256, (g, W, H) => {
    g.fillStyle = '#8b6a4b'; g.fillRect(0, 0, W, H);
    blobs(g, W, H, ['#977556', '#7e5f43', '#a07e5c'], 40, 15, 50, '66');
    for (let i = 0; i < 120; i++) { g.fillStyle = trnd() < 0.5 ? 'rgba(70, 50, 35, 0.35)' : 'rgba(190, 160, 120, 0.35)'; g.beginPath(); g.ellipse(tr(0, W), tr(0, H), tr(1.5, 4), tr(1, 3), tr(0, 3), 0, PI * 2); g.fill(); }
  }),
  sand: canvasTex(256, 256, (g, W, H) => {
    g.fillStyle = '#b0906a'; g.fillRect(0, 0, W, H);
    blobs(g, W, H, ['#bb9c76', '#a5865f', '#c0a27b'], 40, 20, 60, '55');
    for (let i = 0; i < 160; i++) { g.fillStyle = 'rgba(120, 90, 60, 0.25)'; g.fillRect(tr(0, W), tr(0, H), 2, 2); }
  }),
  tCobble: canvasTex(512, 512, (g, W, H) => { g.fillStyle = '#5b524c'; g.fillRect(0, 0, W, H); tileStones(g, W, H, 16, 26, 46, ['#8d837a', '#80766e', '#968b81', '#7a7068', '#887e75'], 2.5, 10); }),
  tFlag: canvasTex(512, 512, (g, W, H) => { g.fillStyle = '#6a6058'; g.fillRect(0, 0, W, H); tileStones(g, W, H, 8, 60, 130, ['#9b9086', '#a69b90', '#8f857c', '#b0a497'], 3, 6); }),
  tDirt: canvasTex(512, 512, (g, W, H) => {
    g.fillStyle = '#8f6c4b'; g.fillRect(0, 0, W, H);
    blobs(g, W, H, ['#9a7756', '#80603f', '#a38160'], 80, 20, 60, '55');
    for (let i = 0; i < 260; i++) { const x = tr(6, W - 6), y = tr(6, H - 6); g.fillStyle = trnd() < 0.5 ? 'rgba(70, 50, 35, 0.4)' : 'rgba(200, 175, 140, 0.4)'; g.beginPath(); g.ellipse(x, y, tr(1.5, 4), tr(1, 3), 0, 0, PI * 2); g.fill(); }
  }),
  strata: canvasTex(256, 512, (g, W, H) => {
    const bands = [['#4f6e3c', 0.05], ['#5a4030', 0.08], ['#7a5a42', 0.12], ['#8a6a4e', 0.1], ['#6e5040', 0.14], ['#957258', 0.1], ['#76584a', 0.16], ['#5f4a40', 0.25]];
    let y = 0;
    for (const [c, f] of bands) { g.fillStyle = c; g.fillRect(0, y, W, f * H + 2); y += f * H; }
    blobs(g, W, H, ['#3e2c22', '#a07e60', '#5a4a44'], 60, 6, 22, '40');
    for (let i = 0; i < 40; i++) { g.strokeStyle = 'rgba(40, 26, 18, 0.35)'; g.lineWidth = 2; const x = tr(0, W), yy = tr(0.15 * H, H); g.beginPath(); g.moveTo(x, yy); g.lineTo(x + tr(-10, 10), yy + tr(10, 40)); g.stroke(); }
    g.fillStyle = '#5a7a44'; for (let x = 0; x < W; x += 6) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x + 3, tr(14, 34)); g.lineTo(x + 6, 0); g.fill(); }
  }),
  balloon: canvasTex(256, 128, (g, W, H) => {
    g.fillStyle = '#7a2420'; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#8a2a24' : '#6a1e1a'; g.fillRect(i * 32, 0, 32, H); }
    g.fillStyle = '#e3d5b6'; g.fillRect(0, H * 0.46, W, H * 0.08);
    g.fillStyle = '#2a2224'; g.fillRect(0, H * 0.43, W, 3); g.fillRect(0, H * 0.57, W, 3);
  }),
  roadStones: canvasTex(256, 256, (g, W, H) => {
    for (let i = 0; i < 2; i++) { g.fillStyle = ['#a59a8c', '#958a7d'][i]; g.beginPath(); g.ellipse(W / 2 + tr(-20, 20), H * (0.25 + i * 0.5), W * 0.32, H * 0.17, tr(-0.3, 0.3), 0, PI * 2); g.fill(); }
  }),
  plaza: canvasTex(512, 512, (g, W, H) => {
    g.fillStyle = '#5f5650'; g.fillRect(0, 0, W, H);
    stonesIn(g, 0, 0, W, H, 64, 64, 128, ['#8a8076', '#958a80', '#7f756c', '#9d9287'], 3, 8);
  }),
  planksWar: canvasTex(512, 512, (g, W, H) => paintPlanks(g, W, H, ['#5a3a2a', '#4e3224', '#62402e', '#553728'])),
  planksDark: canvasTex(512, 512, (g, W, H) => paintPlanks(g, W, H, ['#4a3226', '#553a2b', '#3f2a20', '#4e3428'])),
  planksLight: canvasTex(512, 512, (g, W, H) => paintPlanks(g, W, H, ['#a17a55', '#94704d', '#ab845e', '#9a7552'])),
  planks: canvasTex(512, 512, (g, W, H) => paintPlanks(g, W, H, ['#7a5236', '#6e4a31', '#84593b', '#734d33'])),
  slate: canvasTex(512, 512, (g, W, H) => {
    g.fillStyle = '#3f3a3a'; g.fillRect(0, 0, W, H);
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.fillStyle = ['#5f5958', '#575151', '#676060', '#5b5454'][(x + y * 3) % 4]; g.beginPath(); g.roundRect(x * 128 + 4, y * 128 + 4, 120, 120, 6); g.fill(); g.fillStyle = 'rgba(255,255,255,0.05)'; g.fillRect(x * 128 + 10, y * 128 + 10, 108, 6); }
  }),
  stoneWall: canvasTex(512, 512, (g, W, H) => {
    g.fillStyle = '#4f4843'; g.fillRect(0, 0, W, H);
    stonesIn(g, 0, 0, W, H, 64, 70, 140, ['#7b706a', '#857a72', '#72675f', '#8a7f76', '#6d635c'], 3, 9);
  }),
  castleWall: canvasTex(512, 512, (g, W, H) => {
    g.fillStyle = '#4a433f'; g.fillRect(0, 0, W, H);
    stonesIn(g, 0, 0, W, H, 85, 110, 200, ['#746a63', '#7e736b', '#6a605a', '#82766d'], 4, 10);
    blobs(g, W, H, ['#3e5a34', '#4a3a30'], 14, 20, 60, '30');
  }),
  // dark vertical planks with a red painted band and a bone zigzag near the top
  plankWall: canvasTex(512, 512, (g, W, H) => {
    for (let i = 0; i < 8; i++) { g.fillStyle = ['#4f3124', '#5a3829', '#472c21', '#553426'][i % 4]; g.fillRect(i * 64, 0, 64, H); g.fillStyle = 'rgba(25, 14, 10, 0.45)'; g.fillRect(i * 64, 0, 3, H); g.fillStyle = 'rgba(255, 220, 190, 0.05)'; g.fillRect(i * 64 + 8, 0, 3, H); }
    g.fillStyle = '#7a2320'; g.fillRect(0, 34, W, 70);
    g.strokeStyle = '#d9c9a6'; g.lineWidth = 6; g.lineJoin = 'round';
    g.beginPath(); for (let x = 0; x <= W; x += 32) g.lineTo(x, x % 64 ? 52 : 86); g.stroke();
  }),
  roof: canvasTex(256, 256, (g, W, H) => {
    g.fillStyle = '#4e1612'; g.fillRect(0, 0, W, H);
    for (let r = 0; r < 8; r++) {
      const off = r % 2 ? 16 : 0;
      for (let x = -32; x < W + 32; x += 32) {
        g.fillStyle = ['#7a2820', '#842d22', '#6f241d', '#8c3226'][Math.floor(trnd() * 4)];
        g.beginPath(); g.roundRect(x + off + 1, r * 32 + 2, 30, 30, [2, 2, 12, 12]); g.fill();
        g.fillStyle = 'rgba(255, 200, 170, 0.12)'; g.fillRect(x + off + 5, r * 32 + 5, 22, 3);
      }
      g.fillStyle = 'rgba(30, 6, 6, 0.35)'; g.fillRect(0, r * 32, W, 3);
    }
  }),
  gable: canvasTex(256, 256, (g, W, H) => {
    for (let i = 0; i < 4; i++) { g.fillStyle = ['#5a2a1f', '#652f22', '#552719', '#5f2d20'][i]; g.fillRect(i * 64, 0, 64, H); g.fillStyle = 'rgba(20, 8, 6, 0.45)'; g.fillRect(i * 64, 0, 3, H); }
  }),
  banner: canvasTex(256, 512, (g, W, H) => {
    g.fillStyle = '#6e1a19'; g.fillRect(0, 0, W, H);
    g.fillStyle = '#2a1e1f'; g.fillRect(0, 0, W, 26); g.fillRect(0, 0, 14, H); g.fillRect(W - 14, 0, 14, H);
    g.fillStyle = '#b08a3e'; g.fillRect(0, 26, W, 6);
    // the WoA mark: an anvil and a flame, in bone
    g.fillStyle = '#e3d5b6';
    g.beginPath(); g.moveTo(52, 300); g.lineTo(204, 300); g.lineTo(188, 332); g.lineTo(156, 332); g.lineTo(164, 368); g.lineTo(196, 368); g.lineTo(196, 396); g.lineTo(60, 396); g.lineTo(60, 368); g.lineTo(92, 368); g.lineTo(100, 332); g.lineTo(68, 332); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(128, 120); g.bezierCurveTo(168, 164, 176, 192, 164, 216); g.bezierCurveTo(152, 236, 104, 236, 92, 216); g.bezierCurveTo(80, 192, 100, 176, 112, 152); g.bezierCurveTo(120, 168, 124, 172, 132, 176); g.bezierCurveTo(132, 160, 128, 140, 128, 120); g.fill();
    g.fillStyle = '#6e1a19';
    g.beginPath(); g.moveTo(0, H); g.lineTo(W / 2, H - 60); g.lineTo(W, H); g.fill();
  }),
  water: canvasTex(64, 256, (g, W, H) => {
    g.fillStyle = '#6fa9c9'; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 40; i++) { g.fillStyle = i % 3 ? 'rgba(230, 245, 250, 0.4)' : 'rgba(40, 90, 120, 0.25)'; g.fillRect((i * 23) % 64, (i * 41) % 256, 3 + (i % 3) * 2, 18 + (i % 5) * 10); }
  }),
  ripple: canvasTex(128, 128, (g, W, H) => {
    g.fillStyle = '#c4c4c4'; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 70; i++) {
      const x = (i * 37) % W, y = (i * 59 + (i % 7) * 11) % H, w = 4 + (i % 4) * 3;
      g.fillStyle = i % 4 ? 'rgba(255, 255, 255, 0.55)' : 'rgba(90, 90, 90, 0.35)';
      g.beginPath(); g.ellipse(x, y, w, 1.2 + (i % 3) * 0.5, ((i * 0.7) % 3.14), 0, 2 * Math.PI); g.fill();
      if (x + w > W) { g.beginPath(); g.ellipse(x - W, y, w, 1.4, ((i * 0.7) % 3.14), 0, 2 * Math.PI); g.fill(); }
    }
  }),
  paper: canvasTex(256, 180, (g, W, H) => {
    g.fillStyle = '#efe4cc'; g.fillRect(0, 0, W, H);
    g.strokeStyle = '#4f76b0'; g.lineWidth = 3;
    g.strokeRect(20, 20, 216, 30); g.strokeRect(20, 62, 66, 46); g.strokeRect(95, 62, 66, 46); g.strokeRect(170, 62, 66, 46); g.strokeRect(20, 120, 216, 42);
    g.strokeStyle = '#b8483e'; g.beginPath(); g.moveTo(26, 150); g.lineTo(80, 132); g.lineTo(130, 145); g.lineTo(226, 126); g.stroke();
  }),
  painting: canvasTex(256, 200, (g, W, H) => {
    const sky = g.createLinearGradient(0, 0, 0, H); sky.addColorStop(0, '#d98a62'); sky.addColorStop(1, '#f2d2a8');
    g.fillStyle = sky; g.fillRect(0, 0, W, H);
    g.fillStyle = '#5c6f48'; g.beginPath(); g.moveTo(0, 150); g.quadraticCurveTo(80, 100, 150, 140); g.quadraticCurveTo(210, 120, 256, 135); g.lineTo(256, 200); g.lineTo(0, 200); g.fill();
    g.fillStyle = '#4a3a3c'; g.fillRect(150, 70, 44, 72); g.fillStyle = '#7a2420'; g.beginPath(); g.moveTo(144, 72); g.lineTo(172, 40); g.lineTo(200, 72); g.fill();
    g.fillStyle = '#ffd27a'; g.fillRect(165, 92, 14, 18);
  }),
  moodboard: canvasTex(256, 200, (g) => {
    g.fillStyle = '#c8b18a'; g.fillRect(0, 0, 256, 200);
    ['#ee8a45', '#2b3a36', '#efe4cc', '#8a2420', '#5f8a52', '#3f5f8f'].forEach((c, i) => { g.fillStyle = c; g.fillRect(16 + (i % 3) * 78, 16 + Math.floor(i / 3) * 60, 66, 48); });
    g.fillStyle = '#efe4cc'; g.fillRect(16, 140, 224, 44);
    g.fillStyle = '#2b3a36'; g.fillRect(28, 152, 120, 8); g.fillRect(28, 166, 80, 6);
  }),
  code: canvasTex(256, 160, (g, W, H) => {
    g.fillStyle = 'rgba(40, 200, 220, 0.18)'; g.fillRect(0, 0, W, H);
    const cols = ['#bff8ff', '#7fe0ff', '#ffd27a', '#ff9ec7'];
    for (let i = 0; i < 9; i++) { g.fillStyle = cols[i % 4]; g.fillRect(18 + (i % 3) * 12, 18 + i * 14, 40 + ((i * 53) % 140), 6); }
  }),
  globe: canvasTex(256, 128, (g, W, H) => {
    g.fillStyle = '#3d6f99'; g.fillRect(0, 0, W, H);
    g.fillStyle = '#8aa866';
    for (const [x, y, rx, ry] of [[50, 50, 30, 20], [70, 80, 14, 22], [140, 40, 36, 18], [160, 70, 20, 24], [210, 90, 22, 12]]) { g.beginPath(); g.ellipse(x, y, rx, ry, 0.3, 0, PI * 2); g.fill(); }
  }),
  straw: canvasTex(128, 128, (g, W, H) => {
    g.fillStyle = '#c9a75a'; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 160; i++) { g.strokeStyle = i % 2 ? 'rgba(150, 115, 50, 0.5)' : 'rgba(240, 220, 160, 0.5)'; g.lineWidth = 2; const x = tr(0, W), y = tr(0, H); g.beginPath(); g.moveTo(x, y); g.lineTo(x + 6, y + 2); g.stroke(); }
  }),
  target: canvasTex(128, 128, (g) => {
    ['#e8dcc0', '#8a2420', '#e8dcc0', '#3a3436', '#c79a45'].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(64, 64, 62 - i * 12, 0, PI * 2); g.fill(); });
  }),
  field: canvasTex(256, 256, (g, W, H) => {
    g.fillStyle = '#7a5a3c'; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#8a9a48' : '#a7a24e'; g.fillRect(0, i * 32 + 6, W, 20); }
  }),
  soft: canvasTex(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); }),
  blob: canvasTex(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(30,20,20,0.4)'); gr.addColorStop(1, 'rgba(30,20,20,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); }),
  spark: canvasTex(64, 64, (g) => { g.translate(32, 32); g.fillStyle = '#fff6c8'; g.beginPath(); for (let i = 0; i < 8; i++) { const r = i % 2 ? 9 : 30; const a = i * PI / 4; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.closePath(); g.fill(); }),
  sky: canvasTex(8, 512, (g, W, H) => {
    const gr = g.createLinearGradient(0, 0, 0, H);
    gr.addColorStop(0, '#4c6994'); gr.addColorStop(0.38, '#8ea6c4'); gr.addColorStop(0.62, '#d8c2a6'); gr.addColorStop(0.8, '#e2a682'); gr.addColorStop(1, '#b8674f');
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
  }),
};
TEX.sky.wrapS = TEX.sky.wrapT = THREE.ClampToEdgeWrapping;
function paintPlanks(g, W, H, tones) {
  for (let i = 0; i < 8; i++) {
    let x = -tr(0, 200);
    while (x < W) {
      const len = tr(160, 340);
      g.fillStyle = tones[Math.floor(trnd() * tones.length)];
      g.fillRect(x, i * 64, len, 64);
      g.strokeStyle = 'rgba(255, 230, 200, 0.06)'; g.lineWidth = 2;
      for (let k = 0; k < 3; k++) { const y = i * 64 + tr(10, 54); g.beginPath(); g.moveTo(x + 6, y); g.bezierCurveTo(x + len * 0.3, y + tr(-4, 4), x + len * 0.6, y + tr(-4, 4), x + len - 6, y); g.stroke(); }
      g.fillStyle = 'rgba(20, 10, 6, 0.4)'; g.fillRect(x, i * 64, 3, 64);
      g.fillStyle = 'rgba(20, 10, 6, 0.35)'; g.beginPath(); g.arc(x + 10, i * 64 + 14, 2.5, 0, PI * 2); g.arc(x + 10, i * 64 + 50, 2.5, 0, PI * 2); g.fill();
      x += len;
    }
    g.fillStyle = 'rgba(20, 10, 6, 0.45)'; g.fillRect(0, i * 64, W, 3);
  }
}

/* relief: a normal map from a painted texture (dark gaps sink, light stones rise) */
function normalOf(tex, strength = 2.2) {
  const src = tex.image, W = src.width, H = src.height;
  if (!(W > 0) || !(H > 0)) return tex;
  const d = src.getContext('2d').getImageData(0, 0, W, H).data;
  const h = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) h[i] = (d[i * 4] * 0.299 + d[i * 4 + 1] * 0.587 + d[i * 4 + 2] * 0.114) / 255;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const out = g.createImageData(W, H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const l = h[y * W + (x - 1 + W) % W], r = h[y * W + (x + 1) % W], u = h[((y - 1 + H) % H) * W + x], dn = h[((y + 1) % H) * W + x];
    const nx = (l - r) * strength, ny = (dn - u) * strength, len = Math.hypot(nx, ny, 1);
    const o = (y * W + x) * 4;
    out.data[o] = (nx / len * 0.5 + 0.5) * 255; out.data[o + 1] = (ny / len * 0.5 + 0.5) * 255; out.data[o + 2] = (1 / len * 0.5 + 0.5) * 255; out.data[o + 3] = 255;
  }
  g.putImageData(out, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.NoColorSpace;
  t.anisotropy = tex.anisotropy;
  t.repeat.copy(tex.repeat);
  return t;
}
const NORM = {};
const nrm = (key, strength) => (NORM[key] ||= normalOf(TEX[key], strength));
// a textured toon material with relief; rx/ry tile both maps the same way
function relief(key, rx = 1, ry = 1, strength = 2.2, extra = {}) {
  const map = rx === 1 && ry === 1 ? TEX[key] : tiled(TEX[key], rx, ry);
  const nm = rx === 1 && ry === 1 ? nrm(key, strength) : tiled(nrm(key, strength), rx, ry);
  return toon('#ffffff', Object.assign({ map, normalMap: nm, normalScale: new THREE.Vector2(1, 1) }, extra));
}
TEX.grain = canvasTex(256, 256, (g, W, H) => {
  g.fillStyle = '#d6cbbf'; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 70; i++) { g.strokeStyle = trnd() < 0.5 ? 'rgba(90, 60, 40, 0.18)' : 'rgba(255, 245, 230, 0.16)'; g.lineWidth = tr(1, 3); const x = tr(0, W); g.beginPath(); g.moveTo(x, 0); g.bezierCurveTo(x + tr(-8, 8), H * 0.3, x + tr(-8, 8), H * 0.7, x + tr(-4, 4), H); g.stroke(); }
  for (let i = 0; i < 6; i++) { const x = tr(10, W - 10), y = tr(10, H - 10); g.strokeStyle = 'rgba(80, 50, 30, 0.3)'; g.lineWidth = 2; g.beginPath(); g.ellipse(x, y, tr(3, 6), tr(8, 14), 0, 0, PI * 2); g.stroke(); }
});
const woodMat = (color) => { const m = toon(color, { map: TEX.grain, normalMap: nrm('grain', 1.5) }); m.userData.autoUV = true; return m; };

/* shared materials */
const M = {
  stone: relief('stoneWall', 1, 1, 2),
  castle: relief('castleWall', 1, 1, 2),
  plankWall: relief('plankWall', 1, 1, 1.4),
  timber: toon(COL.timber),
  wood: woodMat(COL.wood), woodD: woodMat(COL.woodD), woodL: woodMat(COL.woodL),
  iron: toon(COL.iron), ironL: toon(COL.ironL), rust: toon(COL.rust),
  bone: toon(COL.bone), boneD: toon(COL.boneD),
  red: toon(COL.red), redD: toon(COL.redD), redL: toon(COL.redL), black: toon(COL.black), gold: toon(COL.gold),
  straw: toon('#ffffff', { map: TEX.straw }),
  pane: glow('#ffbf73', 0.85),
  fire: glow('#ff8a2a', 2.6), fireCore: glow('#ffd88a', 3.2),
  dark: toon('#2a1a1a'),
};

/* ================================================================ models made outside the page (Blender, Tripo)
   Artifacts serve JSON and JPEG but not .glb, so every model ships as a standard embedded glTF (JSON with a base64 buffer),
   with any texture as a .jpg beside it. The buffer is decoded here and handed to the loader as an in-memory GLB,
   so the loader never fetches a data: URL; a texture loads as an ordinary file next to the page. */
const gltfLoader = new GLTFLoader();
function glbFromEmbedded(gl) {
  const uri = gl.buffers[0].uri;
  delete gl.buffers[0].uri;
  const bin = atob(uri.slice(uri.indexOf(',') + 1));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const js = new TextEncoder().encode(JSON.stringify(gl));
  const jl = (js.length + 3) & ~3, bl = (bytes.length + 3) & ~3;
  const out = new ArrayBuffer(28 + jl + bl), dv = new DataView(out), u8 = new Uint8Array(out);
  dv.setUint32(0, 0x46546c67, true); dv.setUint32(4, 2, true); dv.setUint32(8, out.byteLength, true);
  dv.setUint32(12, jl, true); dv.setUint32(16, 0x4e4f534a, true); u8.set(js, 20); u8.fill(0x20, 20 + js.length, 20 + jl);
  dv.setUint32(20 + jl, bl, true); dv.setUint32(24 + jl, 0x004e4942, true); u8.set(bytes, 28 + jl);
  return out;
}
// The files are packed (town/tools/pack_gltf.py): integer positions, normals, texture coordinates and weights, and
// no normals where they were flat. The page merges and bakes plain Float32 geometry, so each model is unpacked once,
// here: every attribute back to Float32 (skin indices stay), a node's dequantization (extras.woa_q = [x, y, z, step])
// moved out of its transform into its geometry, and flat normals computed again. Unpacked files pass through unchanged.
const _dq = new THREE.Matrix4(), _dqInv = new THREE.Matrix4();
function plainModel(g) {
  const done = new Set();
  g.scene.traverse((o) => {
    const q = o.userData.woa_q;
    if (q) {
      _dq.makeScale(q[3], q[3], q[3]).setPosition(q[0], q[1], q[2]);
      o.matrix.compose(o.position, o.quaternion, o.scale).multiply(_dqInv.copy(_dq).invert());
      o.matrix.decompose(o.position, o.quaternion, o.scale);
    }
    if (!o.isMesh || done.has(o.geometry)) return;
    const geo = o.geometry;
    done.add(geo);
    for (const [k, a] of Object.entries(geo.attributes)) {
      if (k === 'skinIndex' || (a.array instanceof Float32Array && !a.isInterleavedBufferAttribute)) continue;
      const n = a.itemSize, out = new Float32Array(a.count * n);
      for (let i = 0; i < a.count; i++) {
        out[i * n] = a.getX(i);
        if (n > 1) out[i * n + 1] = a.getY(i);
        if (n > 2) out[i * n + 2] = a.getZ(i);
        if (n > 3) out[i * n + 3] = a.getW(i);
      }
      geo.setAttribute(k, new THREE.BufferAttribute(out, n));
    }
    const dq = q || (o.parent && o.parent.userData.woa_q);   // a mesh of several materials is a group of meshes
    if (dq) geo.applyMatrix4(_dq.makeScale(dq[3], dq[3], dq[3]).setPosition(dq[0], dq[1], dq[2]));
    if (!geo.attributes.normal) geo.computeVertexNormals();
    geo.computeBoundingBox();
    geo.computeBoundingSphere();
  });
  return g;
}
function loadGltfJson(url, path) {
  return fetch(url)
    .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status + ' for ' + url); return r.json(); })
    .then((gl) => new Promise((res, rej) => gltfLoader.parse(glbFromEmbedded(gl), path, res, rej)))
    .then(plainModel);
}
// Blender materials become the town's own: parts that glow in Blender (windows, fire, crystals) take its glow,
// at a strength scaled from Blender's; everything else its toon shading in the same colour, so they batch with the rest.
function kitMat(src) {
  const e = src.emissive;
  if (e && e.r + e.g + e.b > 0.01) return glow('#' + e.getHexString(), Math.min(2.6, Math.round((src.emissiveIntensity || 1) * 40) / 100));
  return toon('#' + src.color.getHexString());
}
// A static Blender model, merged to one mesh per material.
function shellPart(g) {
  const byMat = new Map();
  g.scene.updateMatrixWorld(true);
  g.scene.traverse((o) => {
    if (!o.isMesh) return;
    const mat = kitMat(o.material);
    const geo = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(geo.attributes)) if (k !== 'position' && k !== 'normal') geo.deleteAttribute(k);
    geo.applyMatrix4(o.matrixWorld);
    if (!byMat.has(mat)) byMat.set(mat, []);
    byMat.get(mat).push(geo);
  });
  const out = new THREE.Group();
  for (const [mat, geos] of byMat) {
    const merged = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
    if (!merged) continue;
    const m = new THREE.Mesh(merged, mat);
    m.castShadow = !mat.isMeshStandardMaterial;   // glowing parts (the town's glow material) cast no shadow
    m.receiveShadow = true;
    m.matrixAutoUpdate = false;
    out.add(m);
  }
  return out;
}
// Every Blender file starts loading at once. Each one that arrives within 20 s replaces its hand-built part;
// one that fails or is late leaves that part hand-built. Static models arrive merged; houses arrive whole (their parts move).
const KIT_FILES = { underside: 'static', walls: 'static', towers: 'static', gate: 'static', forge: 'static', house_war: 'parts', house_workshop: 'parts', house_tavern: 'parts', house_library: 'parts', house_studio: 'parts', yard: 'static', watch: 'static', dock: 'static', bridge: 'static', altar: 'static', garden: 'static', flora: 'parts' };
const KIT_P = (() => {
  const deadline = new Promise((res) => setTimeout(res, 20000, null));
  return Promise.all(Object.entries(KIT_FILES).map(([n, kind]) =>
    Promise.race([loadGltfJson('keep/' + n + '.gltf.json', 'keep/'), deadline])
      .then((g) => [n, g ? (kind === 'static' ? shellPart(g) : g) : null])
      .catch((err) => { console.warn('Blender model ' + n + ' did not load; drawing the hand-built one:', err && err.message); return [n, null]; })))
    .then((pairs) => Object.fromEntries(pairs));
})();
