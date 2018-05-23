import Common from "./common";
import { BrokerageFee } from "./interfaces/brokerage-fees.interface";
import { Trades } from "./interfaces/trades.interface";

class Private {
  private common: Common;

  constructor(
    publicKey?: string,
    privateKey?: string
  ) {
    this.common = new Common(publicKey, privateKey);
  }

  // public async PlaceLimitOrder
  // public async PlaceMarketOrder
  // public async CancelOrder
  // public async GetOpenOrders
  // public async GetClosedOrders
  // public async GetClosedFilledOrders
  // public async GetOrderDetails
  // public async GetAccounts
  // public async GetTransactions
  // public async GetDigitalCurrencyDepositAddress
  // public async GetDigitalCurrencyDepositAddresses
  // public async SynchDigitalCurrencyDepositAddressWithBlockchain
  // public async WithdrawDigitalCurrency
  // public async RequestFiatWithdrawal
  public async GetTrades(pageIndex: number, pageSize: number): Promise<Trades> {
    return this.common.request(true, 'post', 'GetTrades', null, {
      pageIndex: pageIndex,
      pageSize: pageSize
    });
  }

  public async GetBrokerageFees(): Promise<BrokerageFee[]> {
  return this.common.request(true, 'post', 'GetBrokerageFees');
}

}

export default Private;
