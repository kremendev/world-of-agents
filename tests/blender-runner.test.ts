import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

// The Blender runner names the models folder in one place (the D:\Dev move, 18 Nov): HOME in woa_watch.py, which it hands
// to every job as WOA_HOME beside __file__. The jobs load the kit from WOA_HOME and the kit takes it as its HOME, so a
// move of the folder is one line in the runner. Since 4a the runner is the only way a job runs. Read as text: no Python.
const DIR = resolve(import.meta.dirname, '../tools/models/blender');
const read = (name: string) => readFileSync(join(DIR, name), 'utf8');
const JOBS = readdirSync(DIR).filter((name) => /^woa_b\d.*\.py$/.test(name));
const KIT = read('woa_kit.py');
const RUNNER = read('woa_watch.py');

/** Ways Python code can name a folder of its own: a drive, a home or a UNC path, or a lookup of one. */
const NAMES_A_FOLDER = [
  /['"][A-Za-z]:[\\/]/, // 'C:\...' or "D:/..."
  /['"](\\\\|~[\\/]|\/(Users|home)\/)/, // a UNC path, '~/...', '/Users/...'
  /expanduser|expandvars|os\.environ|getenv|Path\.home|USERPROFILE/,
  /Documents|WoA-models|woa-models/i,
];
const named = (text: string) => NAMES_A_FOLDER.filter((pattern) => pattern.test(text)).map(String);

describe('the Blender runner holds the models folder', () => {
  it('finds the four jobs beside it', () => {
    expect(JOBS.sort()).toEqual([
      'woa_b1_shell.py',
      'woa_b2_houses.py',
      'woa_b3_town.py',
      'woa_b4_garden.py',
    ]);
  });

  it.each(JOBS)('%s names no folder itself and loads the kit from WOA_HOME', (job) => {
    const text = read(job);
    expect(named(text)).toEqual([]);
    const loads = text.match(/open\([^)]*woa_kit\.py'\)/g) ?? [];
    expect(loads).toEqual(["open(os.path.join(WOA_HOME, 'woa_kit.py')"]);
  });

  it('the kit names no folder itself and takes WOA_HOME as its HOME', () => {
    expect(named(KIT)).toEqual([]);
    expect(KIT.match(/^HOME\s*=.*$/gm)).toEqual([expect.stringMatching(/^HOME = WOA_HOME(\s|$)/)]);
  });

  it('the runner names the folder once, as HOME, and hands it to every job as WOA_HOME', () => {
    const homes = RUNNER.match(/^HOME\s*=.*$/gm) ?? [];
    expect(homes).toHaveLength(1);
    expect(homes[0]).toMatch(/^HOME = r'[A-Za-z]:\\[^']+'$/);
    // the folder's path appears nowhere else in the runner
    expect(RUNNER.split('\n').filter((line) => /['"][A-Za-z]:[\\/]/.test(line))).toEqual(homes);
    const runs = RUNNER.match(/exec\(compile\(code[^\n]*/g) ?? [];
    expect(runs).toHaveLength(1);
    expect(runs[0]).toContain("{'__name__': '__main__', '__file__': path, 'WOA_HOME': HOME}");
  });
});
