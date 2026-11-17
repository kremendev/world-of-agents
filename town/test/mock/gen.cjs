const fs = require('fs');
const names = fs.readFileSync(__dirname + '/names.txt', 'utf8').split('\n').filter(Boolean);
const core = `
let canvasEl = null;
export function __make(name) {
  const target = function () {};
  const store = new Map();
  return new Proxy(target, {
    get(t, p) {
      if (p === Symbol.toPrimitive) return (hint) => (hint === 'string' ? '#ffffff' : 0);
      if (p === 'then') return undefined;
      if (p === Symbol.iterator) return function* () {};
      if (p === 'valueOf') return () => 0;
      if (p === 'toString') return () => name;
      if (p === 'domElement') { if (!canvasEl) canvasEl = document.createElement('canvas'); return canvasEl; }
      if (p === 'length' || p === 'count') return 0;
      if (store.has(p)) return store.get(p);
      const v = __make(name + '.' + String(p));
      store.set(p, v);
      return v;
    },
    set(t, p, v) { store.set(p, v); return true; },
    apply() { return __make(name + '()'); },
    construct() { (window.__counts = window.__counts || {})[name] = (window.__counts[name] || 0) + 1; return __make('new ' + name); },
  });
}
`;
fs.writeFileSync(__dirname + '/three.module.js', core + names.map((n) => `export const ${n} = __make('${n}');`).join('\n'));
for (const [file, cls] of [['OrbitControls', 'OrbitControls'], ['EffectComposer', 'EffectComposer'], ['RenderPass', 'RenderPass'], ['UnrealBloomPass', 'UnrealBloomPass'], ['ShaderPass', 'ShaderPass'], ['OutputPass', 'OutputPass']]) {
  fs.writeFileSync(__dirname + `/${file}.js`, `import { __make } from 'three';\nexport const ${cls} = __make('${cls}');\n`);
}
fs.writeFileSync(__dirname + '/RoundedBoxGeometry.js', "import { __make } from 'three';\nexport const RoundedBoxGeometry = __make('RoundedBoxGeometry');\n");
fs.writeFileSync(__dirname + '/BufferGeometryUtils.js', "import { __make } from 'three';\nexport const mergeGeometries = __make('mergeGeometries');\n");
// a loader that answers: an empty scene and no clips, so the page's model code runs end to end
fs.writeFileSync(__dirname + '/GLTFLoader.js', "import { __make } from 'three';\nexport class GLTFLoader { parse(data, path, onLoad) { setTimeout(() => onLoad({ scene: __make('gltfScene'), animations: [] }), 5); } load(url, onLoad) { this.parse(null, '', onLoad); } }\n");
