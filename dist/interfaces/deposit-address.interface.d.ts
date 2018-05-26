export interface DepositAddresses {
    PageSize: number;
    TotalItems: number;
    TotalPages: any;
    Data: DepositAddress[];
}
export interface DepositAddress {
    DepositAddress: string;
    LastCheckedTimestampUtc: string;
    NextUpdateTimestampUtc: string;
}
