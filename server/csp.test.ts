import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { cspTags, HALL_CSP, hostedCsp, META_CSP } from './csp';

describe('the policy', () => {
  it('is the same in both places, except what a meta tag cannot set', () => {
    expect(HALL_CSP).toBe(`${META_CSP}; frame-ancestors 'none'`);
    expect(META_CSP).not.toContain('frame-ancestors');
  });

  it('lets nothing inline or evaluated run, and names no other origin or data: source', () => {
    expect(HALL_CSP).not.toMatch(/unsafe-inline|unsafe-eval|\*|https?:|data:/);
  });

  it('lets no form submit anywhere: the task bar handles its own, and default-src does not cover forms', () => {
    expect(META_CSP).toContain("form-action 'none'");
    expect(HALL_CSP).toContain("form-action 'none'");
  });
});

// No real builds here. Two of them in the parallel test run starved other tests past their timeouts.
describe('the Pages build', () => {
  it('gets the tag first in <head>: the policy only covers what comes after it', () => {
    expect(cspTags({ VITE_LIVE: 'false' })).toEqual([
      {
        tag: 'meta',
        attrs: { 'http-equiv': 'Content-Security-Policy', content: META_CSP },
        injectTo: 'head-prepend',
      },
    ]);
  });

  it('is the only build that does: the hall sends the header', () => {
    expect(cspTags({ VITE_LIVE: 'true' })).toEqual([]);
    expect(cspTags({})).toEqual([]);
  });

  it('reads the setting the page itself gets, in builds only: Vite injects inline scripts in dev', () => {
    const plugin = hostedCsp();
    const configResolved = plugin.configResolved as (config: { env: Record<string, string> }) => void;
    const transform = plugin.transformIndexHtml as () => unknown;
    expect(plugin.apply).toBe('build');
    expect(transform()).toEqual([]);
    configResolved({ env: { VITE_LIVE: 'false' } });
    expect(transform()).toEqual(cspTags({ VITE_LIVE: 'false' }));
  });

  it('is switched on in vite.config.ts', () => {
    const config = readFileSync(resolve(import.meta.dirname, '../vite.config.ts'), 'utf8');
    expect(config).toMatch(/plugins: \[[^\]]*hostedCsp\(\)/);
  });
});
