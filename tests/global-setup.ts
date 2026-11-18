import { tmpdir } from 'node:os';
import { sweepTemp } from './sweep-temp';

/** Vitest's global setup: before every run, the temp folders that killed runs left behind (tests/sweep-temp.ts). */
export default function setup(): void {
  const removed = sweepTemp(tmpdir(), Date.now());
  if (removed.length) console.log(`Removed ${removed.length} temp folders left by earlier runs.`);
}
