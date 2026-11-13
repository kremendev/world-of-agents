import type { LedgerTotals } from '../events/schema';

/**
 * A token count, short: 950, 12K, 3.4M, 1.18B (as the pane writes it). The unit follows the rounded number, so never
 * 1000K or 1000.0M.
 */
export function shortCount(n: number): string {
  if (n < 1000) return String(n);
  const k = Math.round(n / 1000);
  if (k < 1000) return `${k}K`;
  const m = (n / 1_000_000).toFixed(1);
  if (Number(m) < 1000) return `${m}M`;
  return `${(n / 1_000_000_000).toFixed(2)}B`;
}

/**
 * The header's line for the token ledger (v3.2): every token in and out on this PC, and what they would cost at API prices.
 * An estimate, so "about". The treasure chest in the Lead's room waits for the design round; until then, this line.
 */
export const ledgerText = (t: LedgerTotals): string =>
  `This PC: ${shortCount(t.tokensIn + t.tokensOut)} tokens · about $${(t.cents / 100).toFixed(2)} at API prices`;
