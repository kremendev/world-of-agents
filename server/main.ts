// `npm run hall`: builds the page, then serves it and the API on http://127.0.0.1:4319.
import { rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHall, listen, PORT } from './hall';
import { newToken, writeToken } from './token';

const token = newToken();
const hall = createHall({ token, dist: resolve(import.meta.dirname, '../dist') });

try {
  const { address, port } = await listen(hall);
  // Written only once the port is ours, so a second hall that can't start never replaces the running one's token.
  const file = writeToken(token);
  // The token goes with the hall. With no token file send.mjs posts nothing, so while the hall is down no hook
  // text goes to whatever else might be listening on the port. SIGHUP: the terminal closed (on Windows too).
  for (const signal of ['SIGINT', 'SIGTERM', 'SIGHUP'] as const) {
    process.on(signal, () => {
      rmSync(file, { force: true });
      process.exit(0);
    });
  }
  console.log(`Forge Hall: http://${address}:${port}\nHook token: ${file}`);
} catch (error) {
  const code = (error as NodeJS.ErrnoException).code;
  console.error(
    code === 'EADDRINUSE'
      ? `Port ${PORT} is already in use. Is the hall running in another terminal?`
      : `The hall could not start (${code ?? 'unknown error'}).`,
  );
  process.exit(1);
}
