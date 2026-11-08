import { rmSync } from 'node:fs';
import type { AddressInfo } from 'node:net';
import { createHall, listen } from './hall';
import type { Page } from './page';
import { newToken, writeToken } from './token';

/**
 * Starts the hall on 127.0.0.1:4319 with a new token, for `npm run hall` and for the hall the plugin's mod starts.
 * Rejects with the listen error, EADDRINUSE when another program (or another hall) holds the port.
 */
export async function serve(page: Page): Promise<{ address: AddressInfo; tokenFile: string }> {
  const token = newToken();
  const hall = createHall({ token, page });
  const address = await listen(hall);
  // Written only once the port is ours, so a second hall that can't start never replaces the running one's token.
  const tokenFile = writeToken(token);
  // The token goes with the hall. SIGHUP: the terminal closed (on Windows too). A shutdown, or a parent that kills the
  // process outright, can still leave the file behind, so send.mjs doesn't trust it: the hall has to answer its
  // handshake before any hook text is posted.
  for (const signal of ['SIGINT', 'SIGTERM', 'SIGHUP'] as const) {
    process.on(signal, () => {
      rmSync(tokenFile, { force: true });
      process.exit(0);
    });
  }
  return { address, tokenFile };
}
