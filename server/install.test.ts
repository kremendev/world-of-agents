import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const REPO = resolve(import.meta.dirname, '..');
const text = (path: string) => readFileSync(join(REPO, path), 'utf8');
const json = <T>(path: string) => JSON.parse(text(path)) as T;

const marketplace = json<{ name: string; plugins: { name: string; source: string }[] }>(
  '.claude-plugin/marketplace.json',
);
const manifest = json<{ name: string }>('plugin/.claude-plugin/plugin.json');

describe('the repo is its own marketplace', () => {
  it('lists the one plugin from ./plugin, under the id the README and CLAUDE.md give', () => {
    expect(marketplace.plugins.map((p) => `${p.name}@${marketplace.name}`)).toEqual([
      'world-of-agents@world-of-agents',
    ]);
    expect(marketplace.plugins[0]?.source).toBe('./plugin');
  });

  it('uses the same name as the manifest: an install by the other name would not be found', () => {
    expect(marketplace.plugins[0]?.name).toBe(manifest.name);
  });
});

describe('the plugin once installed', () => {
  it('makes the Lead the main agent, and sets nothing else', () => {
    expect(json('plugin/settings.json')).toEqual({ agent: `${manifest.name}:lead` });
    expect(existsSync(join(REPO, 'plugin/agents/lead.md'))).toBe(true);
  });

  // An install from GitHub is a copy in Claude Code's cache: nothing outside plugin/ comes with it.
  it('runs its hooks from wherever it was copied to', () => {
    const { hooks } = json<{
      hooks: Record<string, { hooks: { command: string; args: string[]; async: boolean }[] }[]>;
    }>('plugin/hooks/hooks.json');
    const all = Object.values(hooks).flatMap((groups) => groups.flatMap((group) => group.hooks));
    expect(all.length).toBeGreaterThan(0);
    for (const hook of all) {
      expect(hook).toMatchObject({
        command: 'node',
        args: ['${CLAUDE_PLUGIN_ROOT}/hooks/send.mjs'],
        async: true,
      });
    }
  });

  it('needs nothing but Node: there is no npm install in the cache', () => {
    const imports = [...text('plugin/hooks/send.mjs').matchAll(/^import .* from '([^']+)';$/gm)].map(
      (m) => m[1],
    );
    expect(imports.length).toBeGreaterThan(0);
    for (const name of imports) expect(name).toMatch(/^node:/);
  });
});
