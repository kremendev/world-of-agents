import type { HtmlTagDescriptor, Plugin } from 'vite';

/**
 * What the page may load and talk to: only its own origin. Agent text is untrusted, so this is the second lock behind
 * rendering it as plain text. One list for both places it is used. Add only what the page really needs.
 */
const POLICY = [
  "default-src 'self'",
  "connect-src 'self'",
  "img-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
];

/** The hall sends this as a header on every response. */
export const HALL_CSP = [...POLICY, "frame-ancestors 'none'"].join('; ');

/** A meta tag can't set frame-ancestors, and browsers warn if it tries. */
export const META_CSP = POLICY.join('; ');

/** What goes first in <head> for this build: the policy only covers what comes after it. */
export function cspTags(env: Record<string, string | undefined>): HtmlTagDescriptor[] {
  if (env.VITE_LIVE !== 'false') return [];
  return [
    {
      tag: 'meta',
      attrs: { 'http-equiv': 'Content-Security-Policy', content: META_CSP },
      injectTo: 'head-prepend',
    },
  ];
}

/**
 * GitHub Pages can't send headers, so the hosted demo (VITE_LIVE=false) carries the policy in its HTML. The hall's own
 * build has no need: the hall sends the header. Build only, because the dev server injects inline scripts of its own.
 */
export function hostedCsp(): Plugin {
  let tags: HtmlTagDescriptor[] = [];
  return {
    name: 'hosted-csp',
    apply: 'build',
    configResolved: (config) => {
      tags = cspTags(config.env);
    },
    transformIndexHtml: () => tags,
  };
}
