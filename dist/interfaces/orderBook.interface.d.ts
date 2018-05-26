export interface OrderBook {
    BuyOrders: SingleOrder[];
    SellOrders: SingleOrder[];
    PrimaryCurrencyCode: string;
    SecondaryCurrencyCode: string;
    CreatedTimestampUtc: string;
}
export interface SingleOrder {
    OrderType: string;
    Price: number;
    Volume: number;
}
