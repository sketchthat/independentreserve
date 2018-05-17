export interface TradeHistorySummary {
  CreatedTimestampUtc: string;
  HistorySummaryItems: HistorySummaryItem[];
  NumberOfHoursInThePastToRetrieve: number;
  PrimaryCurrencyCode: string;
  SecondaryCurrencyCode: string;
}

interface HistorySummaryItem {
  AverageSecondaryCurrencyPrice: number;
  ClosingSecondaryCurrencyPrice: number;
  StartTimestampUtc: string;
  EndTimestampUtc: string;
  HighestSecondaryCurrencyPrice: number;
  LowestSecondaryCurrencyPrice: number;
  NumberOfTrades: number;
  OpeningSecondaryCurrencyPrice: number;
  PrimaryCurrencyVolume: number;
  SecondaryCurrencyVolume: number;
}
