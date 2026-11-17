#!/bin/bash
# Serve a test copy of the built town with its models on http://127.0.0.1:8765 (never published): the copy gets a
# camera hook (window.__dbg) for test/shot.cjs. Run test/check.sh first so dist/forge-keep.html is fresh.
set -e
cd "$(dirname "$0")/.."
rm -rf .serve && mkdir -p .serve && cp -r models/chars models/keep .serve/
python3 - <<'PY'
h = open('dist/forge-keep.html').read()
a = "const controls = new OrbitControls(camera, renderer.domElement);"
assert h.count(a) == 1
open('.serve/index.html', 'w').write(h.replace(a, a + "\nwindow.__dbg = { camera, controls, scene, THREE };"))
PY
cd .serve && exec python3 -m http.server 8765
