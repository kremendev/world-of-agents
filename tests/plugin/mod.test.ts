import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

// The mod's own source, as the engine loads it: every file under plugin/hooks/mod but the kit tests, comments out.
const MOD = join(import.meta.dirname, '../../plugin/hooks/mod');
const sources = readdirSync(MOD)
  .filter((name) => /\.(ts|tsx)$/.test(name) && !/\.test\.tsx?$/.test(name))
  .map((name) => ({
    name,
    code: readFileSync(join(MOD, name), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/(^|\s)\/\/.*$/gm, '$1'),
  }));
const using = (pattern: RegExp) => sources.filter((s) => pattern.test(s.code)).map((s) => s.name);

describe('the mod sends nothing as Dima but a preset', () => {
  it('reads the files the engine loads', () => {
    expect(sources.map((s) => s.name).sort()).toEqual([
      'pane.tsx',
      'presets.ts',
      'register.tsx',
      'roster.ts',
      'types.d.ts',
    ]);
  });

  it('submits a prompt in presets.ts only, once, and as the person only there', () => {
    expect(using(/\bsubmit\b/)).toEqual(['presets.ts']);
    expect(sources.find((s) => s.name === 'presets.ts')?.code.match(/\bsubmit\b/g)).toHaveLength(1);
    expect(using(/\basUser\b/)).toEqual(['presets.ts']);
  });

  it('never sends to another session, and never draws Markdown', () => {
    expect(using(/\bsend\b/)).toEqual([]);
    expect(using(/\bMarkdown\b/)).toEqual([]);
  });
});
