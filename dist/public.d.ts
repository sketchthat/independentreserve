import { OrderBook } from './interfaces/orderBook.interface';
import { MarketSummary } from './interfaces/market-summary.interface';
import { TradeHistorySummary } from './interfaces/trade-history-summary.interface';
import { FxRates } from './interfaces/fx-rates.interface';
declare class Public {
    private common;
    constructor();
    GetValidPrimaryCurrencyCodes(): Promise<string[]>;
    GetValidSecondaryCurrencyCodes(): Promise<string[]>;
    GetValidLimitOrderTypes(): Promise<string[]>;
    GetValidMarketOrderTypes(): Promise<string[]>;
    GetValidOrderTypes(): Promise<string[]>;
    GetValidTransactionTypes(): Promise<string[]>;
    GetMarketSummary(primaryCurrencyCode: string, secondaryCurrencyCode: string): Promise<MarketSummary>;
    GetOrderBook(primaryCurrencyCode: string, secondaryCurrencyCode: string): Promise<OrderBook>;
    GetTradeHistorySummary(primaryCurrencyCode: string, secondaryCurrencyCode: string, numberOfHoursInThePastToRetrieve: number): Promise<TradeHistorySummary[]>;
    GetRecentTrades(primaryCurrencyCode: string, secondaryCurrencyCode: string, numberOfRecentTradesToRetrieve: number): Promise<string[]>;
    GetFxRates(): Promise<FxRates[]>;
}
export default Public;
