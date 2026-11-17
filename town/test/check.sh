#!/bin/bash
# Build the town into town/dist, syntax-check the 3D module, regenerate the three.js stand-in, then run both page walks
# (Playwright + Chromium; over file:// the model fetches fail by design and the hand-built fallbacks are what runs).
set -e
cd "$(dirname "$0")/.."
mkdir -p dist
python3 src/build.py "$PWD/dist/forge-keep.html" >/dev/null
node --check src/module.mjs
grep -o "THREE\.[A-Za-z0-9_]*" src/module.mjs | sed 's/THREE\.//' | sort -u > test/mock/names.txt
node test/mock/gen.cjs
timeout 120 node test/mock/run.cjs "$PWD/dist/forge-keep.html" 2>&1 | grep -v -e 'URL scheme "file"' -e '^---$' | tail -12
timeout 120 node test/mock/run2.cjs "$PWD/dist/forge-keep.html" 2>&1 | grep -v -e 'URL scheme "file"' -e '^---$' | tail -6
