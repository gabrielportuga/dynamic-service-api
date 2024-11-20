export const MarketsConfig = {
  default: {
    name: 'Default Market',
    currency: 'USD',
  },
  marketA: {
    name: 'Market A',
    currency: 'EUR',
  },
  marketB: {
    name: 'Market B',
    currency: 'GBP',
  },
};

export type MarketConfig = typeof MarketsConfig[keyof typeof MarketsConfig];