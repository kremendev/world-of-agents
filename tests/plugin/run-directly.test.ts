// Every plugin script runs its main part only when Node was started on that very file (v3.1 review, fix 4): the real path
// of process.argv[1] against the module's own, never a name check. With endsWith('guard.mjs'), a file named xguard.mjs
// that imports the guard would run the guard's main part too.
import { execFile } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterAll, describe, expect, it } from 'vitest';

const PLUGIN = resolve(import.meta.dirname, '../../plugin');

/** Every .mjs under plugin/ but the built hall, as a path from plugin/. */
function scripts(dir = PLUGIN): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === 'hall' || entry.name.startsWith('.') ? [] : scripts(path);
    return entry.name.endsWith('.mjs') ? [relative(PLUGIN, path).replace(/\\/g, '/')] : [];
  });
}

/** The scripts with a main part: the ones that look at process.argv[1]. */
const MAINS = scripts().filter((name) =>
  readFileSync(join(PLUGIN, name), 'utf8').includes('process.argv[1]'),
);

const BLOCK = `function runAsScript() {
  try {
    const script = process.argv[1];
    if (typeof script !== 'string' || script === '') return false;
    const own = pathToFileURL(realpathSync(fileURLToPath(import.meta.url))).href;
    return pathToFileURL(realpathSync(script)).href === own;
  } catch {
    return false;
  }
}`;

const temp = mkdtempSync(join(tmpdir(), 'woa-run-directly-'));
afterAll(() => rmSync(temp, { recursive: true, force: true, maxRetries: 5 }));

type Run = { code: number | null; stdout: string; stderr: string };

function node(args: string[], input = ''): Promise<Run> {
  return new Promise((done) => {
    const child = execFile(
      process.execPath,
      args,
      // A home of its own, so a main part that did run would find no token and no settings of Dima's.
      { cwd: temp, timeout: 20_000, env: { ...process.env, HOME: temp, USERPROFILE: temp } },
      (error, stdout, stderr) =>
        done({ code: error ? (typeof error.code === 'number' ? error.code : null) : 0, stdout, stderr }),
    );
    child.stdin?.end(input);
  });
}

/**
 * A file named x<name> that imports `target` after laying traps: a main part that read stdin or opened a connection
 * prints "main ran" and stops. One that only prints shows on stdout too.
 */
function importer(name: string, target: string): string {
  const file = join(temp, `x${name}`);
  writeFileSync(
    file,
    [
      "import net from 'node:net';",
      "const ran = (why) => { process.stdout.write('main ran: ' + why); process.exit(0); };",
      "net.Socket.prototype.connect = function () { ran('network'); };",
      "Object.defineProperty(process, 'stdin', { configurable: true, get: () => ran('stdin') });",
      `await import(${JSON.stringify(pathToFileURL(target).href)});`,
      'await new Promise((done) => setTimeout(done, 300));',
      '',
    ].join('\n'),
  );
  return file;
}

describe('plugin scripts run only when started themselves', () => {
  it('finds the scripts: every hook and skill script with a main part', () => {
    expect(MAINS).toEqual(
      expect.arrayContaining(['hooks/guard.mjs', 'hooks/send.mjs', 'hooks/hall-check.mjs']),
    );
  });

  it.each(MAINS)('%s compares real paths and never a name', (name) => {
    const code = readFileSync(join(PLUGIN, name), 'utf8');
    expect(code).toContain(BLOCK);
    expect(code.match(/^if \(runAsScript\(\)\) \{$/gm)).toHaveLength(1);
    expect(code).not.toMatch(/argv\[1\][^\n]*endsWith/);
    expect(code).toMatch(/^import \{[^}]*\brealpathSync\b[^}]*\} from 'node:fs';$/m);
    expect(code).toMatch(/^import \{ fileURLToPath, pathToFileURL \} from 'node:url';$/m);
  });

  it.each(MAINS)('%s does nothing when a file named x<its name> imports it', async (name) => {
    const base = name.split('/').at(-1) ?? name;
    const result = await node([importer(base, join(PLUGIN, name))], 'not json');
    expect(result).toEqual({ code: 0, stdout: '', stderr: '' });
  });

  it('would catch a name check: the same importer trips on a module that runs by endsWith', async () => {
    const module = join(temp, 'named.mjs');
    writeFileSync(module, "if (process.argv[1]?.endsWith('named.mjs')) process.stdin.resume();\n");
    const result = await node([importer('named.mjs', module)]);
    expect(result.stdout).toBe('main ran: stdin');
  });
});

describe('the guard still runs when Node is started on it', () => {
  const GUARD = join(PLUGIN, 'hooks/guard.mjs');
  const denied = (run: Run) => JSON.parse(run.stdout).hookSpecificOutput.permissionDecision as unknown;

  it('by its own path', async () => {
    expect(denied(await node([GUARD], 'not json'))).toBe('deny');
  });

  it.runIf(process.platform === 'win32')('by its path with the drive letter in the other case', async () => {
    const drive = GUARD.charAt(0);
    const other = drive === drive.toLowerCase() ? drive.toUpperCase() : drive.toLowerCase();
    expect(denied(await node([other + GUARD.slice(1)], 'not json'))).toBe('deny');
  });

  it('through a symbolic link to it (skipped where this account cannot make one)', async (context) => {
    const link = join(temp, 'guard-link.mjs');
    try {
      symlinkSync(GUARD, link);
    } catch {
      context.skip();
    }
    expect(denied(await node([link], 'not json'))).toBe('deny');
  });
});
