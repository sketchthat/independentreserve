export interface RecentTrades {
    CreatedTimestampUtc: string;
    PrimaryCurrencyCode: string;
    SecondaryCurrencyCode: string;
    Trades: Trades[];
}
export interface Trades {
    PrimaryCurrencyAmount: number;
    SecondaryCurrencyTradePrice: number;
    TradeTimestampUtc: string;
}
