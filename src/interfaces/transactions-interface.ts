export interface Transactions {
  PageSize: number;
  TotalItems: number;
  TotalPages: number;
  Data: Transaction[];
}

export interface Transaction {
  Balance: number;
  BitcoinTransactionId: string;
  BitcoinTransactionOutputIndex: string;
  EthereumTransactionId: string;
  Comment: string;
  CreatedTimestampUtc: string;
  Credit: number;
  CurrencyCode: string;
  Debit: number;
  SettleTimestampUtc: string;
  Status: string;
  Type: string;
}
