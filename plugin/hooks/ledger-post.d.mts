// Types for ledger-post.mjs, so its tests are typechecked. The script itself stays plain JS: the plugin needs no build.

export type LedgerTotals = {
  since: number;
  tokensIn: number;
  tokensOut: number;
  cents: number;
  pricedOn: string;
  unpriced: { model: string; tokens: number }[];
};

export const MAX_TOTALS: number;
export function totalsOf(raw: unknown): LedgerTotals | null;
export function postLedger(
  totals: LedgerTotals,
  token: string,
  options?: { hall?: string; timeoutMs?: number },
): Promise<boolean>;
