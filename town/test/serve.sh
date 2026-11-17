#!/bin/bash
# Serve a test copy of the built town with its models on http://127.0.0.1:8765 (never published): the copy gets a
# camera hook (window.__dbg) for test/shot.cjs and test/seats.cjs. Run test/check.sh first so dist/forge-keep.html is fresh.
set -e
cd "$(dirname "$0")/.."
rm -rf .serve && mkdir -p .serve && cp -r models/chars models/keep .serve/
python3 - <<'PY'
h = open('dist/forge-keep.html').read()
a = "const controls = new OrbitControls(camera, renderer.domElement);"
assert h.count(a) == 1
# a view can lift the camera limits (shot.cjs, "free": true), to look at the far isles
c = "const r = Math.hypot(t.x, t.z), max = 52;"
assert h.count(c) == 1
h = h.replace(c, "if (window.__dbg && window.__dbg.free) return;\n  " + c)
open('.serve/index.html', 'w').write(h.replace(a, a + "\nwindow.__dbg = { camera, controls, scene, THREE, frames: 0, get actors() { return actors; } };\n(function count() { window.__dbg.frames++; requestAnimationFrame(count); })();"))
PY
cd .serve && exec python3 -m http.server 8765
