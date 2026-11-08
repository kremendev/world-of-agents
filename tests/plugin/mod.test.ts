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
      'hall.ts',
      'pane.tsx',
      'presets.ts',
      'register.tsx',
      'roster.ts',
      'text.ts',
      'types.d.ts',
      'voice.ts',
    ]);
  });

  it('submits a prompt in presets.ts only, once, and as the person only there', () => {
    // Calls only: register.tsx watches the prompt.submit event (a frame naming a run), which submits nothing.
    expect(using(/\bsubmit\s*\(/)).toEqual(['presets.ts']);
    expect(using(/\bsubmit\b/)).toEqual(['presets.ts', 'register.tsx']);
    expect(sources.find((s) => s.name === 'register.tsx')?.code.match(/\bsubmit\b/g)).toEqual(['submit']);
    expect(sources.find((s) => s.name === 'register.tsx')?.code).toContain(
      "on('prompt.submit', async ($, e, next) => {",
    );
    expect(sources.find((s) => s.name === 'presets.ts')?.code.match(/\bsubmit\b/g)).toHaveLength(1);
    expect(using(/\basUser\b/)).toEqual(['presets.ts']);
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
    expect(code('voice.ts')).toContain('`${root}/voice/speak.ps1`');
    // Never a command string: no -Command, no encoded command, no shell as a command or an option.
    expect(
      using(/-Command|-EncodedCommand|['"`](cmd|cmd\.exe|bash|sh|pwsh|pwsh\.exe)['"`]|\bshell\s*:/i),
    ).toEqual([]);
  });

  it("gives a process text only as the voice's input, and never an environment of its own", () => {
    expect(using(/\binput\s*:/)).toEqual(['voice.ts']);
    expect(using(/\benv\s*:/)).toEqual([]);
  });

  it('uses no network, no files and no environment variables', () => {
    expect(using(/\$\.(http|fs|env)\b/)).toEqual([]);
  });
});
