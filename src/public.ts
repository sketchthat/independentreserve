import Common from './common';
import { OrderBook } from './interfaces/orderBook.interface';
import { MarketSummary } from './interfaces/market-summary.interface';
import { TradeHistorySummary } from './interfaces/trade-history-summary.interface';
import { FxRates } from './interfaces/fx-rates.interface';

class Public {
  private common: Common;

  constructor() {
    this.common = new Common();
  }

  public async GetValidPrimaryCurrencyCodes(): Promise<string[]> {
    return this.common.request(false, 'get', 'GetValidPrimaryCurrencyCodes');
  }

  public async GetValidSecondaryCurrencyCodes(): Promise<string[]> {
    return this.common.request(false, 'get', 'GetValidSecondaryCurrencyCodes');
  }

  public async GetValidLimitOrderTypes(): Promise<string[]> {
    return this.common.request(false, 'get', 'GetValidLimitOrderTypes');
  }
  public async GetValidMarketOrderTypes(): Promise<string[]> {
    return this.common.request(false, 'get', 'GetValidMarketOrderTypes');
  }
  public async GetValidOrderTypes(): Promise<string[]> {
    return this.common.request(false, 'get', 'GetValidOrderTypes');
  }

  public async GetValidTransactionTypes(): Promise<string[]> {
    return this.common.request(false, 'get', 'GetValidTransactionTypes');
  }

  public async GetMarketSummary(primaryCurrencyCode: string, secondaryCurrencyCode: string): Promise<MarketSummary> {
    const params = {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
    };

    return this.common.request(false, 'get', 'GetMarketSummary', params);
  }

  public async GetOrderBook(primaryCurrencyCode: string, secondaryCurrencyCode: string): Promise<OrderBook> {
    const params = {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
    };

    return this.common.request(false, 'get', 'GetOrderBook', params);
  }

  public async GetTradeHistorySummary(primaryCurrencyCode: string, secondaryCurrencyCode: string, numberOfHoursInThePastToRetrieve: number): Promise<TradeHistorySummary[]> {
    const params = {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
      numberOfHoursInThePastToRetrieve,
    };

    return this.common.request(false, 'get', 'GetTradeHistorySummary', params);
  }

  public async GetRecentTrades(primaryCurrencyCode: string, secondaryCurrencyCode: string, numberOfRecentTradesToRetrieve: number): Promise<string[]> {
    const params = {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
      numberOfRecentTradesToRetrieve,
    };

    return this.common.request(false, 'get', 'GetRecentTrades', params);
  }

  public async GetFxRates(): Promise<FxRates[]> {
    return this.common.request(false, 'get', 'GetFxRates');
  }
}

export default Public;
