import { mkdtempSync, readFileSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { newToken, writeToken } from './token';

describe('hook token', () => {
  it('is 32 random bytes as base64url, new every time, in the form send.mjs accepts', () => {
    const tokens = Array.from({ length: 50 }, () => newToken());
    for (const token of tokens) expect(token).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(new Set(tokens).size).toBe(50);
  });

  it('goes to ~/.world-of-agents/token, where send.mjs reads it, replacing the last one', () => {
    const home = mkdtempSync(join(tmpdir(), 'woa-home-'));
    try {
      const file = writeToken('first-token-1234567', home);
      expect(file).toBe(join(home, '.world-of-agents', 'token'));
      writeToken('second-token-123456', home);
      expect(readFileSync(file, 'utf8')).toBe('second-token-123456');
      if (process.platform !== 'win32') expect(statSync(file).mode & 0o777).toBe(0o600);
    } finally {
      rmSync(home, { recursive: true, force: true });
    }
  });
});
