import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { describe, expect, it } from 'vitest';
import { readManifest } from './page';

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
  const GATE = '${CLAUDE_PLUGIN_ROOT}/hooks/gate.mjs';

  // An install from GitHub is a copy in Claude Code's cache: nothing outside plugin/ comes with it.
  it('runs its hooks from wherever it was copied to, and only its three scripts', () => {
    expect(all.length).toBeGreaterThan(0);
    for (const { hook } of all) {
      expect(hook.command).toBe('node');
      expect([[SEND], [GUARD], [GATE]]).toContainEqual(hook.args);
    }
  });

  it('reports in the background: every send.mjs hook is async, so it can never hold up or steer a call', () => {
    const send = all.filter(({ hook }) => hook.args[0] === SEND);
    expect(send.length).toBeGreaterThan(0);
    for (const { hook } of send) expect(hook.async).toBe(true);
  });

  it('runs the quality gate once, at SubagentStop, where it can send an agent back, and never traps one (v3.3)', () => {
    const gate = all.filter(({ hook }) => hook.args[0] === GATE);
    expect(gate).toHaveLength(1);
    const [{ event, matcher, hook }] = gate as [(typeof gate)[number]];
    expect(event).toBe('SubagentStop');
    expect(matcher).toBeUndefined();
    // Not async: an async hook can't send an agent back. Not onFailure block: a gate that breaks lets the agent stop.
    expect(hook.async).toBeUndefined();
    expect(hook.onFailure).toBeUndefined();
    expect(hook.timeout).toBe(600);
  });

  it('runs the guard once, before Agent, Bash, PowerShell, Edit and Write calls, where it can block and fails closed', () => {
    const guard = all.filter(({ hook }) => hook.args[0] === GUARD);
    expect(guard).toHaveLength(1);
    const [{ event, matcher, hook }] = guard as [(typeof guard)[number]];
    expect(event).toBe('PreToolUse');
    expect(matcher).toBe('Agent|Bash|PowerShell|Edit|Write');
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
    // The guard imports Node built-ins (its own real path, BACKLOG.md's lstat, where an edit lands) and the team module.
    const guard = [...text('plugin/hooks/guard.mjs').matchAll(/^\s*import\s.*from '([^']+)';$/gm)].map(
      (m) => m[1],
    );
    expect(guard).toEqual(['node:fs', 'node:os', 'node:path', 'node:url', '../team/team.mjs']);
    // Every script the plugin runs imports Node's own modules or the plugin's own files, nothing to install.
    for (const file of ['plugin/hooks/gate.mjs', 'plugin/hooks/ledger-post.mjs', 'plugin/team/team.mjs']) {
      for (const [, name] of text(file).matchAll(/^import .* from '([^']+)';$/gm)) {
        expect(name, file).toMatch(/^(node:|\.\/[a-z-]+\.mjs$|\.\.\/team\/team\.mjs$)/);
      }
    }
  });
});

// The prebuilt hall, as npm run build:plugin-hall leaves it. npm run check:hall proves it is what the source builds.
describe('the hall the plugin carries', () => {
  const HALL = join(REPO, 'plugin/hall');
  const bundle = text('plugin/hall/server.mjs');

  it('is one file that imports only Node built-ins, so it runs with no npm install', () => {
    const imports = [...bundle.matchAll(/^import .* from "([^"]+)";$/gm)].map((m) => m[1]);
    expect(imports.length).toBeGreaterThan(0);
    for (const name of imports) expect(name).toMatch(/^node:/);
    // Zod's own comments mention `import()`; the code around them must not use it, or require.
    expect(bundle.replace(/^\s*\/\/.*$/gm, '')).not.toMatch(/\brequire\(|\bimport\(/);
  });

  it('finds its page beside its own file: never the working folder, an argument or an environment variable', () => {
    // esbuild numbers the renamed imports (join2, readFileSync2...), so the number may change from one build to the next.
    expect(bundle).toContain('var here = import.meta.dirname;');
    expect(bundle).toMatch(/readFileSync\d*\(join\d*\(here, "manifest\.json"\), "utf8"\)/);
    expect(bundle).toMatch(/dir: join\d*\(here, "page"\)/);
    expect(bundle).not.toMatch(/process\.(cwd|argv|env)\b/);
  });

  it('leaves without a word when another hall holds the port: never two halls', () => {
    // A test can't run it: that needs port 4319 taken, and tests never touch 4319 (a real hall may be on it).
    expect(bundle).toContain('if (code === "EADDRINUSE") process.exit(0);');
    expect(bundle.match(/console\.(log|error)\(/g)).toHaveLength(2);
  });

  it('listens on 127.0.0.1 only', () => {
    expect(bundle).toContain('var HOST = "127.0.0.1";');
    expect(bundle).toContain('hall.server.listen(port, HOST, ');
  });

  it("names in its manifest exactly the page's files, each with the type it is served as", () => {
    const manifest = JSON.parse(text('plugin/hall/manifest.json')) as unknown;
    const files = [...readManifest(manifest).keys()].sort();
    const onDisk = readdirSync(join(HALL, 'page'), { recursive: true, withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map(
        (entry) =>
          `/${relative(join(HALL, 'page'), join(entry.parentPath, entry.name)).split(sep).join('/')}`,
      )
      .sort();
    expect(files).toEqual(onDisk);
    expect(files).toContain('/index.html');
  });

  it('is the Live page, with no policy of its own: the hall sends its Content-Security-Policy as a header', () => {
    const index = text('plugin/hall/page/index.html');
    expect(index).not.toContain('Content-Security-Policy');
    expect(index).not.toContain('/world-of-agents/'); // the Pages base path
  });
});

describe('the voice script', () => {
  const script = text('plugin/voice/speak.ps1');
  const code = script.replace(/^\s*#.*$/gm, '');

  it('is ASCII only, as Windows PowerShell 5.1 reads a script without a byte order mark', () => {
    expect([...script].every((c) => c.charCodeAt(0) < 128)).toBe(true);
  });

  it('reads stdin as UTF-8, set before anything reads it', () => {
    const encoding = code.indexOf('[Console]::InputEncoding = [System.Text.Encoding]::UTF8');
    const read = code.indexOf('[Console]::In.ReadToEnd()');
    expect(encoding).toBeGreaterThanOrEqual(0);
    expect(read).toBeGreaterThan(encoding);
  });

  it('speaks plain text with Speak, never SSML, and caps it at 200 code points', () => {
    expect(code).toContain('$voice.Speak($text)');
    expect(code).not.toMatch(/Ssml|SpeakAsync|PromptBuilder/i);
    expect(code).toContain('$max = 200');
  });

  it('takes nothing from arguments or the environment, and runs nothing', () => {
    expect(code).not.toMatch(
      /\$args|\$env:|param\s*\(|Invoke-Expression|\biex\b|Start-Process|Invoke-Command|-Command/i,
    );
    expect(code).not.toMatch(/^\s*&/m);
  });
});
