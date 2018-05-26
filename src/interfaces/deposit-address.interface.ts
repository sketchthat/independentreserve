export interface DepositAddresses {
  PageSize: number;
  TotalItems: number;
  TotalPages;
  Data: DepositAddress​​[];
}

export interface DepositAddress {
  DepositAddress: string;
  LastCheckedTimestampUtc: string;
  NextUpdateTimestampUtc: string;
}
