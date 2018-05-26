import Common from './common';
import { Account } from './interfaces/account.interface';
import { BrokerageFee } from './interfaces/brokerage-fees.interface';
import { DepositAddress, DepositAddresses } from './interfaces/deposit-address.interface';
import { FiatWithdrawal } from './interfaces/fiat-withdrawal.interface';
import { Order, Orders } from './interfaces/orders.interface';
import { Trades } from './interfaces/trades.interface';
import { Transactions } from './interfaces/transactions-interface';

class Private {
  private common: Common;

  constructor(
    publicKey?: string,
    privateKey?: string,
  ) {
    this.common = new Common(publicKey, privateKey);
  }

  public async PlaceLimitOrder(
    primaryCurrencyCode: string,
    secondaryCurrencyCode: string,
    price: number,
    volume: number
  ): Promise<Order> {
    return this.common.request(true, 'post', 'PlaceLimitOrder', null, {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
      orderType: 'LimitBid',
      price,
      volume,
    });
  }

  public async PlaceMarketOrder(
    primaryCurrencyCode: string,
    secondaryCurrencyCode: string,
    volume: number
  ): Promise<Order> {
    return this.common.request(true, 'post', 'PlaceMarketOrder', null, {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
      orderType: 'MarketOffer',
      volume,
    });
  }

  public async CancelOrder(orderGuid: string): Promise<Order> {
    return this.common.request(true, 'post', 'CancelOrder', null, {
      orderGuid,
    });
  }

  public async GetOpenOrders(
    primaryCurrencyCode: string,
    secondaryCurrencyCode: string,
    pageIndex: number,
    pageSize: number
  ): Promise<Orders> {
    return this.common.request(true, 'post', 'GetOpenOrders', null, {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
      pageIndex,
      pageSize,
    });
  }

  public async GetClosedOrders(
    primaryCurrencyCode: string,
    secondaryCurrencyCode: string,
    pageIndex: number,
    pageSize: number
  ): Promise<Orders> {
    return this.common.request(true, 'post', 'GetClosedOrders', null, {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
      pageIndex,
      pageSize,
    });
  }

  public async GetClosedFilledOrders(
    primaryCurrencyCode: string,
    secondaryCurrencyCode: string,
    pageIndex: number,
    pageSize: number
  ): Promise<Orders> {
    return this.common.request(true, 'post', 'GetClosedFilledOrders', null, {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
      pageIndex,
      pageSize,
    });
  }

  public async GetOrderDetails(orderGuid: string): Promise<Order> {
    return this.common.request(true, 'post', 'GetOrderDetails', null, {
      orderGuid,
    });
  }

  public async GetAccounts(): Promise<Account> {
    return this.common.request(true, 'post', 'GetAccounts');
  }

  public async GetTransactions(
    accountGuid: string,
    fromTimestampUtc: string,
    toTimestampUtc: string,
    txTypes: string[],
    pageIndex: number,
    pageSize: number
  ): Promise<Transactions> {
    return this.common.request(true, 'post', 'GetTransactions', null, {
      accountGuid,
      fromTimestampUtc,
      toTimestampUtc,
      txTypes,
      pageIndex,
      pageSize,
    });
  }

  public async GetDigitalCurrencyDepositAddress(
    primaryCurrencyCode: string
  ): Promise<DepositAddress> {
    return this.common.request(true, 'post', 'GetDigitalCurrencyDepositAddress', null, {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
    });
  }

  public async GetDigitalCurrencyDepositAddresses(
    primaryCurrencyCode: string,
    pageIndex: number,
    pageSize: number
  ): Promise<DepositAddresses> {
    return this.common.request(true, 'post', 'GetDigitalCurrencyDepositAddresses', null, {
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
      pageIndex,
      pageSize,
    });
  }

  public async SynchDigitalCurrencyDepositAddressWithBlockchain(
    depositAddress: string,
    primaryCurrencyCode: string
  ): Promise<DepositAddress> {
    return this.common.request(true, 'post', 'SynchDigitalCurrencyDepositAddressWithBlockchain', null, {
      depositAddress,
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
    });
  }

  public async WithdrawDigitalCurrency(
    amount: number,
    withdrawalAddress: string,
    comment: string,
    primaryCurrencyCode: string
  ): Promise<null> {
    return this.common.request(true, 'post', 'WithdrawDigitalCurrency', null, {
      amount,
      withdrawalAddress,
      comment,
      primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
    });
  }

  public async RequestFiatWithdrawal(
    secondaryCurrencyCode: string,
    withdrawalAmount: number,
    withdrawalBankAccountName: string,
    comment: string
  ): Promise<FiatWithdrawal> {
    return this.common.request(true, 'post', 'RequestFiatWithdrawal', null, {
      secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
      withdrawalAmount,
      withdrawalBankAccountName,
      comment,
    });
  }

  public async GetTrades(
    pageIndex: number,
    pageSize: number
  ): Promise<Trades> {
    return this.common.request(true, 'post', 'GetTrades', null, {
      pageIndex,
      pageSize,
    });
  }

  public async GetBrokerageFees(): Promise<BrokerageFee[]> {
    return this.common.request(true, 'post', 'GetBrokerageFees');
  }

}

export default Private;
