import re, sys, os
D = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(D, 'base.html')).read()

# 1. the HUD script: the map now comes from WOA_WORLD
a = src.index("  /* ---------------- the keep's map")
b = src.index("  WOA.data = { ROOMS, DESKS, SPOTS, CAST, ORDER };")
old = src[a:b]
cast = old[old.index("  const CAST = {"):old.index("  const START = {")]
new = ("  /* ---------------- the town's map lives in WOA_WORLD, shared with the 3D */\n"
       "  const { ROOMS, SPOTS } = window.WOA_WORLD;\n"
       + cast +
       "  const START = { lead: 'war-rug', designer: 'studio-easel', frontend: 'forge-anvil', backend: 'yard-2', reviewer: 'lib-chair' };\n")
src = src[:a] + new + "  WOA.data = { ROOMS, SPOTS, CAST, ORDER };" + src[b + len("  WOA.data = { ROOMS, DESKS, SPOTS, CAST, ORDER };"):]
src = src.replace("if (!a.arrived && WOA.simT - a.goneAt > 30) WOA.arrive(id);", "if (!a.arrived && WOA.simT - a.goneAt > 45) WOA.arrive(id);")
assert "goneAt > 45" in src

# 2. the rail gets an "open houses" toggle
btn_anchor = '      <button type="button" class="ico" id="btn-labels"'
roofs = ('      <button type="button" class="ico" id="btn-roofs" aria-pressed="false" aria-label="Open all houses" data-tip="Open all houses">\n'
         '        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-7 9 7"/><path d="M5 13v7h14v-7"/><path d="M12 2v5M9.5 4.5 12 2l2.5 2.5"/></svg>\n'
         '      </button>\n')
assert src.count(btn_anchor) == 1
src = src.replace(btn_anchor, roofs + btn_anchor)
h_anchor = "  $('btn-labels').addEventListener('click',"
assert src.count(h_anchor) == 1
src = src.replace(h_anchor, "  $('btn-roofs').addEventListener('click', (e) => { WOA.openHouses = !WOA.openHouses; e.currentTarget.setAttribute('aria-pressed', String(WOA.openHouses)); });\n" + h_anchor)
src = src.replace("const WOA = (window.WOA = { has3D: false, paused: false, labels: true, selected: null, following: false, simT: 0 });",
                  "const WOA = (window.WOA = { has3D: false, paused: false, labels: true, selected: null, following: false, openHouses: false, simT: 0 });")
assert "openHouses: false" in src
src = src.replace('aria-label="The Forge Keep in 3D: a floating keep with nine areas where the five agents work and rest"',
                  'aria-label="The Forge Keep in 3D: a walled town on a floating island where the five agents work and rest"')

# 3. the world script goes in front of the HUD script
world = open(os.path.join(D, 'world.js')).read()
hud_start = src.index("<script>\n/* ================================================================\n   The run:")
src = src[:hud_start] + "<script>\n" + world + "</script>\n\n" + src[hud_start:]

# 4. the 3D module, assembled from its parts
parts = ['m1-kit.js', 'm3-props.js', 'm2-land.js', 'm2b-gate.js', 'm4-houses.js', 'm5-areas.js', 'm5b-scatter.js', 'm6-cast.js', 'm6b-glb.js', 'm7-run.js']
module = '\n'.join(open(os.path.join(D, p)).read() for p in parts)
ms = src.index('<script type="module">')
me = src.index('</script>', ms)
src = src[:ms] + '<script type="module">\n' + module + src[me:]
out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(D, 'forge-keep.html')
open(out, 'w').write(src)
open(os.path.join(D, 'module.mjs'), 'w').write(module)
print(out, len(src))
