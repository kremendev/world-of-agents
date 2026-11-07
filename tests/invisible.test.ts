import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

// Trojan Source and its kin: characters that change how code reads without showing up. None may sit in any text file
// of the repo: bidi controls (U+202A to U+202E, U+2066 to U+2069), zero-width characters (U+200B to U+200D, U+2060)
// and U+FEFF (a byte order mark or zero-width no-break space). Written as numbers here, so this file holds none either.
const isInvisible = (p: number) =>
  (p >= 0x202a && p <= 0x202e) ||
  (p >= 0x2066 && p <= 0x2069) ||
  (p >= 0x200b && p <= 0x200d) ||
  p === 0x2060 ||
  p === 0xfeff;

/** Each invisible character in the text, as "line:column U+XXXX". */
function invisibles(text: string): string[] {
  const found: string[] = [];
  text.split('\n').forEach((line, i) => {
    let column = 0;
    for (const char of line) {
      column += 1;
      const p = char.codePointAt(0) ?? 0;
      if (isInvisible(p)) found.push(`${i + 1}:${column} U+${p.toString(16).toUpperCase().padStart(4, '0')}`);
    }
  });
  return found;
}

const REPO = resolve(import.meta.dirname, '..');
// Tracked files, and new ones git doesn't ignore, so a file is checked before its first commit too.
const listed = spawnSync('git', ['ls-files', '-z', '--cached', '--others', '--exclude-standard'], {
  cwd: REPO,
  encoding: 'utf8',
});
const files = listed.stdout
  .split('\0')
  .filter(Boolean)
  .filter((file) => existsSync(join(REPO, file)));

describe('no invisible characters in the repo', () => {
  it('lists the files git knows, the generated types included', () => {
    expect(listed.status).toBe(0);
    expect(files.length).toBeGreaterThan(100);
    expect(files).toContain('tools/claude-code-types/index.d.ts');
    expect(files).toContain('plugin/hooks/mod/register.tsx');
  });

  it('finds every kind it looks for, and nothing in ordinary text', () => {
    const kinds = [
      0x202a, 0x202b, 0x202c, 0x202d, 0x202e, 0x2066, 0x2067, 0x2068, 0x2069, 0x200b, 0x200c, 0x200d,
    ];
    for (const p of [...kinds, 0x2060, 0xfeff]) {
      expect(invisibles(`ok\nif (a${String.fromCodePoint(p)} == b)`)).toEqual([
        `2:6 U+${p.toString(16).toUpperCase()}`,
      ]);
    }
    expect(invisibles('café, naïve, 😀, — and “quotes”\ttabs')).toEqual([]);
  });

  it('finds none in any text file', () => {
    const found = files.flatMap((file) => {
      const bytes = readFileSync(join(REPO, file));
      // A NUL in the first 8 KB makes it binary, as git judges it: an image, not text.
      if (bytes.subarray(0, 8000).includes(0)) return [];
      return invisibles(bytes.toString('utf8')).map((where) => `${file}:${where}`);
    });
    expect(found).toEqual([]);
  });
});
