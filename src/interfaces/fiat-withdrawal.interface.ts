export interface FiatWithdrawal {
  fiatWithdrawalRequestGuid: string;
  AccountGuid: string;
  Status: string;
  CreatedTimestampUtc: string;
  TotalWithdrawAmount: string;
  FeeAmount: string;
  Currency: string;
}
