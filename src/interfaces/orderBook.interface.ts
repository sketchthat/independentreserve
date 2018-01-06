export interface IOrderBook {
  BuyOrders: Order[];
  SellOrders: Order[];
  PrimaryCurrencyCode: string;
  SecondaryCurrencyCode: string;
  CreatedTimestampUtc: string;
}

interface Order {
  OrderType: string;
  Price: number;
  Volume: number;
}
