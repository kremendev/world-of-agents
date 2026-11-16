import { rmSync } from 'node:fs';
import type { AddressInfo } from 'node:net';
import { createHall, listen } from './hall';
import type { Page } from './page';
import { newToken, writeToken } from './token';

/**
 * How a hall leaves (v3.5b): its token file first, then the port, then the process. In that order a newer hall that
 * takes the port the moment it is free has already written its own token, which this hall must never delete.
 */
export async function shutdown({
  tokenFile,
  close,
  exit,
}: {
  tokenFile: string;
  close: () => Promise<void>;
  exit: () => void;
}): Promise<void> {
  rmSync(tokenFile, { force: true });
  try {
    await close();
  } finally {
    exit();
  }
}

/**
 * Starts the hall on 127.0.0.1:4319 with a new token, for `npm run hall` and for the hall the plugin's mod starts.
 * Rejects with the listen error, EADDRINUSE when another program (or another hall) holds the port. `idleMs` (the plugin's
 * hall, v3.5b) stops it after that long with no hook event and no page; both stop for a newer plugin's `/api/stop`.
 */
export async function serve(
  page: Page,
  { idleMs, teamFiles }: { idleMs?: number; teamFiles?: string } = {},
): Promise<{ address: AddressInfo; tokenFile: string }> {
  const token = newToken();
  let leave = () => {};
  const hall = createHall({ token, page, idleMs, teamFiles, onStop: () => leave() });
  const address = await listen(hall);
  // Written only once the port is ours, so a second hall that can't start never replaces the running one's token.
  const tokenFile = writeToken(token);
  leave = () => void shutdown({ tokenFile, close: hall.close, exit: () => process.exit(0) });
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
