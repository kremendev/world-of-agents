import type { LedgerTotals } from '../events/schema';

/** A token count, short: 950, 12K, 3.4M (as the pane writes it). */
export function shortCount(n: number): string {
  if (n < 1000) return String(n);
  if (n < 1_000_000) return `${Math.round(n / 1000)}K`;
  return `${(n / 1_000_000).toFixed(1)}M`;
}

/**
 * The header's line for the token ledger (v3.2): every token in and out on this PC, and what they would cost at API prices.
 * An estimate, so "about". The treasure chest in the Lead's room waits for the design round; until then, this line.
 */
export const ledgerText = (t: LedgerTotals): string =>
  `This PC: ${shortCount(t.tokensIn + t.tokensOut)} tokens · about $${(t.cents / 100).toFixed(2)} at API prices`;
