/** Whether this browser can draw the Forge Keep: three.js renders with WebGL 2 only (v4.0.0, 4a). */
export function canDrawWorld(): boolean {
  try {
    return document.createElement('canvas').getContext('webgl2') !== null;
  } catch {
    return false;
  }
}

/** How long a lost WebGL context may take to come back before the 2D hall takes over. */
export const CONTEXT_GRACE_MS = 3000;
