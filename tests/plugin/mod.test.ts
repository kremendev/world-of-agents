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

describe('the mod sends nothing as Dima', () => {
  it('reads the files the engine loads', () => {
    expect(sources.map((s) => s.name).sort()).toEqual([
      'hall.ts',
      'ledger.ts',
      'pane.tsx',
      'presets.ts',
      'register.tsx',
      'roster.ts',
      'team.ts',
      'text.ts',
      'types.d.ts',
      'voice.ts',
    ]);
  });

  it('submits no prompt: register.tsx only watches the prompt.submit event, which submits nothing', () => {
    expect(using(/\bsubmit\s*\(/)).toEqual([]);
    expect(using(/\bsubmit\b/)).toEqual(['register.tsx']);
    expect(sources.find((s) => s.name === 'register.tsx')?.code.match(/\bsubmit\b/g)).toEqual(['submit']);
    expect(sources.find((s) => s.name === 'register.tsx')?.code).toContain(
      "on('prompt.submit', async ($, e, next) => {",
    );
    expect(using(/\basUser\b/)).toEqual([]);
  });

  it('touches the prompt box only to append a preset, in presets.ts, and never reads it', () => {
    // $.prompt only as $.prompt.fill: no read (the whole draft, a pasted token with it), no destructured member.
    expect(using(/\$\.prompt\b(?!\.fill\()/)).toEqual([]);
    expect(using(/\$\.prompt\.fill\(/)).toEqual(['presets.ts']);
    expect(
      sources.find((s) => s.name === 'presets.ts')?.code.match(/[^\n]*\$\.prompt\.fill\([^\n]*/g),
    ).toEqual(["    return fillRefusal(await $.prompt.fill({ text: preset.text, mode: 'append' }));"]);
    // Neither the call nor a hook on another plugin's read, which would hand the mod the box too.
    expect(using(/\bprompt\s*(\.|\[\s*['"`])\s*read\b/)).toEqual([]);
  });

  it("reads a prompt's text in one place only: to ask which of its own runs a frame carries", () => {
    // prompt.submit and classic.UserPromptSubmit both see Dima's prompt. The text goes to heardRun(), which returns an
    // id the hook only compares with its own list; the user prompt hook reads permission_mode and nothing else.
    expect(using(/\be\.text\b/)).toEqual(['register.tsx']);
    expect(sources.find((s) => s.name === 'register.tsx')?.code.match(/[^\n]*\be\.text\b[^\n]*/g)).toEqual([
      '    const heard = entered.drop === undefined ? heardRun(e.text) : undefined;',
    ]);
    expect(using(/\be\.prompt\b/)).toEqual([]);
  });

  it('never sends to another session, and never draws Markdown', () => {
    expect(using(/\bsend\b/)).toEqual([]);
    expect(using(/\bMarkdown\b/)).toEqual([]);
  });
});

describe('the processes the mod starts', () => {
  const code = (name: string) => sources.find((s) => s.name === name)?.code ?? '';

  it('starts them in hall.ts and voice.ts only, and runs one-shot commands in hall.ts only', () => {
    expect(using(/\bprocess\.spawn\b/)).toEqual(['hall.ts', 'voice.ts']);
    expect(using(/\bprocess\.run\b/)).toEqual(['hall.ts']);
  });

  it('runs node with --version or a script in the plugin, and powershell.exe with -File and the fixed script only', () => {
    expect(code('hall.ts')).toContain("export const NODE_VERSION = ['node', '--version'] as const;");
    expect(code('hall.ts')).toContain("['node', `${root}/hooks/hall-check.mjs`]");
    expect(code('hall.ts')).toContain("['node', `${root}/hall/server.mjs`]");
    expect(code('hall.ts')).toContain("['node', `${root}/hooks/ledger-post.mjs`]");
    expect(code('hall.ts')).toContain("['node', `${root}/hooks/ledger-past.mjs`]");
    expect(code('hall.ts')).toContain("['node', `${root}/hooks/hall-key.mjs`]");
    expect(code('hall.ts')).toContain("['node', `${root}/hooks/team-log.mjs`]");
    expect(code('hall.ts')).toContain("['node', `${root}/hooks/gate.mjs`, '--status']");
    expect(code('voice.ts')).toContain('`${root}/voice/speak.ps1`');
    // Never a command string: no -Command, no encoded command, no shell as a command or an option.
    expect(
      using(/-Command|-EncodedCommand|['"`](cmd|cmd\.exe|bash|sh|pwsh|pwsh\.exe)['"`]|\bshell\s*:/i),
    ).toEqual([]);
  });

  it("gives a process text only as the voice's input, and never an environment of its own", () => {
    expect(using(/\binput\s*:/)).toEqual(['voice.ts']);
    // v3.2: the ledger's numbers, on a one-shot command's stdin, and nothing else.
    expect(using(/\bstdin\s*:/)).toEqual(['hall.ts']);
    expect(code('hall.ts').match(/[^\n]*\bstdin\s*:[^\n]*/g)).toEqual([
      '      stdin: JSON.stringify(totals),',
      // v3.4c: the team editor's one-time key, on stdin only (T8): never an argument or the environment.
      '      stdin: JSON.stringify({ key }),',
    ]);
    expect(using(/\benv\s*:/)).toEqual([]);
  });

  it("keeps what a child prints in four places only: node --version's digits, Recount's numbers, team-log's names, our hall's version", () => {
    expect(using(/\.stdout\b/)).toEqual(['hall.ts']);
    expect(code('hall.ts').match(/[^\n]*\.stdout\b[^\n]*/g)).toEqual([
      '    printed = run.stdout;',
      // v3.2c, L7 (per session since 3.2d): whole numbers per session and model, through recountOf().
      '    return recountOf(run.stdout);',
      // v3.4c: the team's change log, names only, through changesOf().
      '    return changesOf(run.stdout);',
      // 3.2d: hall-check.mjs's one line, digits and dots only, through hallVersionOf().
      "    if (run.exitCode === OURS) return { state: 'ours', version: hallVersionOf(run.stdout) };",
    ]);
    expect(using(/\.stderr\b/)).toEqual([]);
  });

  it("knows its own version, the one plugin.json states (3.2d): a hall that states another is another install's", () => {
    const plugin = JSON.parse(readFileSync(join(MOD, '../../.claude-plugin/plugin.json'), 'utf8')) as {
      version: string;
    };
    expect(code('hall.ts')).toContain(`export const PLUGIN_VERSION = '${plugin.version}';`);
  });

  it('reads the session id only to count a turn under it (3.2d)', () => {
    expect(using(/\bsession\.id\b/)).toEqual(['register.tsx']);
    expect(code('register.tsx').match(/[^\n]*\bsession\.id\b[^\n]*/g)).toEqual([
      "  const session = $.session.id().catch(() => '');",
    ]);
  });

  it('draws two links only: the hall, exactly, and the team editor with its key after a # (v3.4c, T8)', () => {
    expect(using(/<Link\b/)).toEqual(['pane.tsx']);
    expect(code('pane.tsx').match(/<Link[^>]*>/g)).toEqual([
      '<Link href={HALL_URL} label="Open hall" />',
      '<Link href={editorLink(HALL_URL, editorKey)} label="Open the team editor" />',
    ]);
    expect(code('pane.tsx')).toContain("export const HALL_URL = 'http://localhost:4319';");
    expect(code('team.ts')).toContain(
      'export const editorLink = (hall: string, key: string) => `${hall}/#k=${key}`;',
    );
    // The key: the engine's random bytes, and never kept in $.state or $.store.
    expect(code('team.ts')).toContain('crypto.getRandomValues(new Uint8Array(32))');
    expect(code('register.tsx')).toMatch(/^let editorKey: string \| null = null;$/m);
  });

  it('uses no network, no files and no environment variables', () => {
    expect(using(/\$\.(http|fs|env)\b/)).toEqual([]);
  });

  it("reads one setting only: enabledPlugins from the user's own settings, in register.tsx", () => {
    // A read of the whole settings, or of the merged ones, would hand the mod env values and every other key.
    expect(using(/\bsettings\s*(\.|\[)/)).toEqual(['register.tsx']);
    expect(code('register.tsx').match(/[^\n]*\bsettings\s*(\.|\[)[^\n]*/g)).toEqual([
      "  const enabled = await $.settings.read({ key: 'enabledPlugins', source: 'user' });",
    ]);
  });
});
