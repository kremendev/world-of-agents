
// the gatehouse
if (!CASTLE_KIT) {
  const gp = CW.gaps.find((g) => g.kind === 'gate');
  const [ax, az] = CW.pts[gp.seg], [bx, bz] = CW.pts[(gp.seg + 1) % CW.pts.length];
  const [nx, nz] = outward(gp.seg);
  const G = new THREE.Group();
  G.position.set(ax + (bx - ax) * gp.t, 0, az + (bz - az) * gp.t);
  G.rotation.y = Math.atan2(nx, nz);
  scene.add(G);
  const half = gp.w / 2;
  const towerMat = toon('#ffffff', { map: tiled(TEX.castleWall, 1.2, 2.6) });
  for (const sd of [-1, 1]) {
    G.add(at(mesh(new THREE.BoxGeometry(3.6, 7.8, 3.6), towerMat), sd * (half + 1.8), 3.9, 0));
    G.add(at(mesh(new THREE.BoxGeometry(4.0, 0.4, 4.0), M.stone), sd * (half + 1.8), 7.9, 0));
    for (let k = 0; k < 4; k++) for (const [dx, dz] of [[-1.7, -1.7 + k * 1.13], [1.7, -1.7 + k * 1.13], [-1.7 + k * 1.13, -1.7], [-1.7 + k * 1.13, 1.7]]) G.add(at(mesh(new THREE.BoxGeometry(0.6, 0.8, 0.6), M.stone), sd * (half + 1.8) + dx, 8.5, dz));
    G.add(at(hangingBanner(1.5, 3.6), sd * (half + 1.8), 7.2, 1.85));
    G.add(at(rot(hangingBanner(1.5, 3.6), 0, PI, 0), sd * (half + 1.8), 7.2, -1.85));
    G.add(at(torch(), sd * (half + 0.4), 3.1, 1.6));
    G.add(at(rot(torch(), 0, PI, 0), sd * (half + 0.4), 3.1, -1.6));
    const sp = spikes(3.2);
    sp.position.set(sd * (half + 4.6), 0, 4.2);
    sp.rotation.y = sd * 0.3;
    G.add(sp);
    G.add(at(skullPole(2.8), sd * (half + 2.6), 0, 3.6));
  }
  // the bridge over the gate, the arch and the raised portcullis
  G.add(at(mesh(planarUV(new THREE.BoxGeometry(gp.w + 0.4, 2.4, 3.2), 3), towerMat), 0, 5.6, 0));
  for (const z of [-1.6, 1.6]) G.add(at(mesh(new THREE.TorusGeometry(half, 0.4, 8, 20, PI), M.stone), 0, 4.0, z));
  for (let i = 0; i < 7; i++) G.add(at(mesh(new THREE.BoxGeometry(0.08, 1.1, 0.08), M.iron), -half + 0.4 + i * (gp.w - 0.8) / 6, 4.2, 0));
  G.add(at(mesh(new THREE.BoxGeometry(gp.w - 0.4, 0.1, 0.1), M.iron), 0, 3.7, 0));
  G.add(at(skull(1.0), 0, 6.1, 1.7));
  G.add(at(horns(2.4), 0, 6.3, 1.7));
  G.add(rot(at(skull(0.7), 0, 6.1, -1.7), 0, PI, 0));
  for (const sd of [-1, 1]) { const leaf = mesh(new THREE.BoxGeometry(0.16, 3.6, half - 0.1), M.woodD); leaf.position.set(sd * (half - 0.15), 1.8, -1.6 - (half - 0.1) / 2); G.add(leaf); for (const y of [0.8, 2.8]) G.add(at(mesh(new THREE.BoxGeometry(0.2, 0.12, half - 0.1), M.iron), sd * (half - 0.15), y, -1.6 - (half - 0.1) / 2)); }
}
// the water gate where the garden stream leaves the castle
if (!CASTLE_KIT) {
  const gp = CW.gaps.find((g) => g.kind === 'water');
  const [ax, az] = CW.pts[gp.seg], [bx, bz] = CW.pts[(gp.seg + 1) % CW.pts.length];
  const [nx, nz] = outward(gp.seg);
  const G = new THREE.Group();
  G.position.set(ax + (bx - ax) * gp.t, 0, az + (bz - az) * gp.t);
  G.rotation.y = Math.atan2(nx, nz);
  scene.add(G);
  G.add(at(mesh(planarUV(new THREE.BoxGeometry(gp.w + 0.3, CW.h - 1.7, CW.thick), 3.2), castleMat), 0, 1.7 + (CW.h - 1.7) / 2, 0));
  for (const z of [-0.8, 0.8]) G.add(at(mesh(new THREE.TorusGeometry(gp.w / 2, 0.3, 8, 18, PI), M.stone), 0, 0.2, z));
  for (let i = 0; i < 6; i++) G.add(at(mesh(new THREE.BoxGeometry(0.07, 1.4, 0.07), M.rust), -gp.w / 2 + 0.4 + i * (gp.w - 0.8) / 5, 1.1, 0));
  G.add(at(skull(0.5), 0, 2.4, 0.86));
}
// banners hung on the long runs of wall, inside and out
for (const { i, t } of wallBanners) {
  const [ax, az] = CW.pts[i], [bx, bz] = CW.pts[(i + 1) % CW.pts.length];
  const [nx, nz] = outward(i);
  const mx = ax + (bx - ax) * t, mz = az + (bz - az) * t;
  for (const sd of [1, -1]) {
    const b = hangingBanner(1.6, 3.0);
    b.position.set(mx + nx * sd * (CW.thick / 2 + 0.06), CW.h - 0.25, mz + nz * sd * (CW.thick / 2 + 0.06));
    b.rotation.y = Math.atan2(nx * sd, nz * sd);
    scene.add(b);
  }
}
instanced(UNIT_BOX, merlons, { cast: true });
