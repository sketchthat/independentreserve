export interface MarketSummary {
    CreatedTimestampUtc: string;
    CurrentHighestBidPrice: number;
    CurrentLowestOfferPrice: number;
    DayAvgPrice: number;
    DayHighestPrice: number;
    DayLowestPrice: number;
    DayVolumeXbt: number;
    DayVolumeXbtInSecondaryCurrrency: number;
    LastPrice: number;
    PrimaryCurrencyCode: string;
    SecondaryCurrencyCode: string;
}
