export interface Trades {
  Data: Trade[];
  PageSize: number;
  TotalItems: number;
  TotalPages: number;
}

export interface Trade {
  TradeGuid: string;
  TradeTimestampUtc: string;
  OrderGuid: string;
  OrderType: string;
  OrderTimestampUtc: string;
  VolumeTraded: number;
  Price: number;
  PrimaryCurrencyCode: string;
  SecondaryCurrencyCode: string;
}
