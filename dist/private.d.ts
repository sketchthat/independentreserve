import { BrokerageFee } from './interfaces/brokerage-fees.interface';
import { Trades } from './interfaces/trades.interface';
import { FiatWithdrawal } from './interfaces/fiat-withdrawal.interface';
import { DepositAddresses, DepositAddress } from './interfaces/deposit-address.interface';
import { Transactions } from './interfaces/transactions-interface';
import { Account } from './interfaces/account.interface';
import { Orders, Order } from './interfaces/orders.interface';
declare class Private {
    private common;
    constructor(publicKey?: string, privateKey?: string);
    PlaceLimitOrder(primaryCurrencyCode: string, secondaryCurrencyCode: string, orderType: string, price: string, volume: number): Promise<Order>;
    PlaceMarketOrder(primaryCurrencyCode: string, secondaryCurrencyCode: string, orderType: string, volume: number): Promise<Order>;
    CancelOrder(orderGuid: string): Promise<Order>;
    GetOpenOrders(primaryCurrencyCode: string, secondaryCurrencyCode: string, pageIndex: number, pageSize: number): Promise<Orders>;
    GetClosedOrders(primaryCurrencyCode: string, secondaryCurrencyCode: string, pageIndex: number, pageSize: number): Promise<Orders>;
    GetClosedFilledOrders(primaryCurrencyCode: string, secondaryCurrencyCode: string, pageIndex: number, pageSize: number): Promise<Orders>;
    GetOrderDetails(orderGuid: string): Promise<Order>;
    GetAccounts(): Promise<Account>;
    GetTransactions(accountGuid: string, fromTimestampUtc: string, toTimestampUtc: string, txTypes: string[], pageIndex: number, pageSize: number): Promise<Transactions>;
    GetDigitalCurrencyDepositAddress(primaryCurrencyCode: string): Promise<DepositAddress>;
    GetDigitalCurrencyDepositAddresses(primaryCurrencyCode: string, pageIndex: number, pageSize: number): Promise<DepositAddresses>;
    SynchDigitalCurrencyDepositAddressWithBlockchain(depositAddress: string, primaryCurrencyCode: string): Promise<DepositAddress>;
    WithdrawDigitalCurrency(amount: number, withdrawalAddress: string, comment: string, primaryCurrencyCode: string): Promise<null>;
    RequestFiatWithdrawal(secondaryCurrencyCode: string, withdrawalAmount: number, withdrawalBankAccountName: string, comment: string): Promise<FiatWithdrawal>;
    GetTrades(pageIndex: number, pageSize: number): Promise<Trades>;
    GetBrokerageFees(): Promise<BrokerageFee[]>;
}
export default Private;
