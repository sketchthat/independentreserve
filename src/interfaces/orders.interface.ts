export interface Orders {
  PageSize: number;
  TotalItems: number;
  TotalPages: number;
  Data: Order[];
}

export interface Order {
  OrderGuid: string;
  CreatedTimestampUtc: string;
  Type: string;
  VolumeOrdered: number;
  VolumeFilled: number;
  Price: number;
  AvgPrice: number;
  ReservedAmount: number;
  Status: string;
  PrimaryCurrencyCode: string;
  SecondaryCurrencyCode: string;
  FeePercent?: number;
}
