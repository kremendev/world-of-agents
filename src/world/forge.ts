/**
 * The Forge's furnace (v4.0.0, 4c.4, D11): it burns as hard as the team works. Pure, so Vitest holds it. The mouth takes
 * the 2D hall's three colours (furnaceLook() in src/office/hall/draw.ts): dark with nobody working, orange with one,
 * bright with two or more; its heat, which drives the mouth's and the core's glow and the furnace's one light, grows
 * with each working agent up to four. The flicker stops with reduced motion; the colour and the heat never do, since
 * the furnace is the busy indicator.
 */
export const FORGE_MOUTH = { cold: '#5a2a10', one: '#f08a3c', busy: '#ffb15a' } as const;

/** Most working agents the glow counts. */
export const FORGE_MAX = 4;

export function forgeLook(working: number): { mouth: string; heat: number } {
  const n = Math.max(0, Math.min(working, FORGE_MAX));
  const mouth = n === 0 ? FORGE_MOUTH.cold : n === 1 ? FORGE_MOUTH.one : FORGE_MOUTH.busy;
  return { mouth, heat: 0.25 + n * 0.35 };
}

/** The town's flicker at `t` seconds, none with reduced motion. */
export const forgeFlicker = (t: number, reducedMotion: boolean): number =>
  reducedMotion ? 0 : Math.sin(t * 9) * 0.08 + Math.sin(t * 23) * 0.05;
