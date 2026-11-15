// The hall the plugin carries: scripts/build-plugin-hall.ts bundles this file, with Zod, into plugin/hall/server.mjs,
// which imports only node: modules, so an install needs no npm install. The team pane starts it through
// hooks/hall-start.mjs, which runs exactly `node <plugin>/hall/server.mjs`, detached: no arguments (v3.5b). Nothing
// ends it from outside but a newer plugin's `/api/stop`, so it stops itself after 30 minutes with no hook event and no
// page connected.
//
// It finds its page next to its own file, never from the working folder, an environment variable or an argument, and
// serves only the files manifest.json names. It keeps every control of the v2 hall: 127.0.0.1 only, the token and the
// handshake, the Host and Origin checks, the Content-Security-Policy. It prints one fixed line once it listens, and no
// text from any hook or agent, ever.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { HALL_IDLE_MS, PORT } from './hall';
import { readManifest } from './page';
import { serve } from './serve';

const here = import.meta.dirname;

try {
  const files = readManifest(JSON.parse(readFileSync(join(here, 'manifest.json'), 'utf8')));
  await serve({ dir: join(here, 'page'), files }, { idleMs: HALL_IDLE_MS });
  console.log(`Forge Hall: http://127.0.0.1:${PORT}`);
} catch (error) {
  const code = (error as NodeJS.ErrnoException).code;
  // Another hall won the race for the port. It keeps it, and this one leaves without a word: never two halls.
  if (code === 'EADDRINUSE') process.exit(0);
  console.error(`The hall could not start (${code ?? 'no valid manifest'}).`);
  process.exit(1);
}
