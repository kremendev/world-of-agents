import { randomBytes } from 'node:crypto';
import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

/** A new hook token: 32 random bytes as base64url, 43 characters. The hall makes a new one at every start. */
export const newToken = (): string => randomBytes(32).toString('base64url');

/**
 * Saves the token where send.mjs reads it, ~/.world-of-agents/token, for your user only. On Windows the
 * mode bits do little: your profile folder's permissions keep other users out.
 */
export function writeToken(token: string, home = homedir()): string {
  const dir = join(home, '.world-of-agents');
  mkdirSync(dir, { recursive: true, mode: 0o700 });
  const file = join(dir, 'token');
  writeFileSync(file, token, { mode: 0o600 });
  chmodSync(file, 0o600); // writeFileSync's mode only applies when it creates the file
  return file;
}
