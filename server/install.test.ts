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

  type Hook = { command: string; args: string[]; async?: boolean; timeout?: number; onFailure?: string };
  const { hooks } = json<{ hooks: Record<string, { matcher?: string; hooks: Hook[] }[]> }>(
    'plugin/hooks/hooks.json',
  );
  const all = Object.entries(hooks).flatMap(([event, groups]) =>
    groups.flatMap((group) => group.hooks.map((hook) => ({ event, matcher: group.matcher, hook }))),
  );
  const SEND = '${CLAUDE_PLUGIN_ROOT}/hooks/send.mjs';
  const GUARD = '${CLAUDE_PLUGIN_ROOT}/hooks/guard.mjs';

  // An install from GitHub is a copy in Claude Code's cache: nothing outside plugin/ comes with it.
  it('runs its hooks from wherever it was copied to, and only its two scripts', () => {
    expect(all.length).toBeGreaterThan(0);
    for (const { hook } of all) {
      expect(hook.command).toBe('node');
      expect([[SEND], [GUARD]]).toContainEqual(hook.args);
    }
  });

  it('reports in the background: every send.mjs hook is async, so it can never hold up or steer a call', () => {
    const send = all.filter(({ hook }) => hook.args[0] === SEND);
    expect(send.length).toBeGreaterThan(0);
    for (const { hook } of send) expect(hook.async).toBe(true);
  });

  it('runs the guard once, before Agent, Bash and PowerShell calls, where it can block and fails closed', () => {
    const guard = all.filter(({ hook }) => hook.args[0] === GUARD);
    expect(guard).toHaveLength(1);
    const [{ event, matcher, hook }] = guard as [(typeof guard)[number]];
    expect(event).toBe('PreToolUse');
    expect(matcher).toBe('Agent|Bash|PowerShell');
    // An async hook runs in the background and can't block anything.
    expect(hook.async).toBeUndefined();
    // A crash, a timeout or a Node that won't start blocks the call instead of letting it through.
    expect(hook.onFailure).toBe('block');
    expect(hook.timeout).toBeGreaterThan(0);
    expect(hook.timeout).toBeLessThanOrEqual(10);
  });

  it('needs nothing but Node: there is no npm install in the cache', () => {
    const imports = [...text('plugin/hooks/send.mjs').matchAll(/^import .* from '([^']+)';$/gm)].map(
      (m) => m[1],
    );
    expect(imports.length).toBeGreaterThan(0);
    for (const name of imports) expect(name).toMatch(/^node:/);
    // The guard imports nothing at all: it reads stdin and answers.
    expect(text('plugin/hooks/guard.mjs')).not.toMatch(/^\s*import\s/m);
  });
});
