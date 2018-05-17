export interface RecentTrades {
  CreatedTimestampUtc : string;
  PrimaryCurrencyCode: string;
  SecondaryCurrencyCode: string;
  Trades: Trades[];
}

interface Trades {
  PrimaryCurrencyAmount: number;
  SecondaryCurrencyTradePrice: number;
  TradeTimestampUtc: string;
}
