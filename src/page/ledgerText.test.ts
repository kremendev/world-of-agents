import { describe, expect, it } from 'vitest';
import { ledgerText, shortCount } from './ledgerText';

describe("the header's ledger line", () => {
  it('shortens counts as the pane does: 950, 12K, 3.4M, 1.18B, the unit following the rounded number', () => {
    expect([950, 12_345, 3_400_000, 1_184_100_000].map(shortCount)).toEqual(['950', '12K', '3.4M', '1.18B']);
    expect([999_500, 999_950_000].map(shortCount)).toEqual(['1.0M', '1.00B']);
  });

  it('names every token in and out, and the value at API prices', () => {
    const totals = {
      since: 1,
      tokensIn: 1_179_000_000,
      tokensOut: 5_100_000,
      cents: 48_306,
      pricedOn: '13 Nov 2026',
    };
    expect(ledgerText({ ...totals, unpriced: [] })).toBe(
      'This PC: 1.18B tokens · about $483.06 at API prices',
    );
  });
});
