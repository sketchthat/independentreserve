"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class Private {
    constructor(publicKey, privateKey) {
        this.common = new common_1.Common(publicKey, privateKey);
    }
    PlaceLimitOrder(primaryCurrencyCode, secondaryCurrencyCode, price, volume) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'PlaceLimitOrder', null, {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
                orderType: 'LimitBid',
                price,
                volume,
            });
        });
    }
    PlaceMarketOrder(primaryCurrencyCode, secondaryCurrencyCode, volume) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'PlaceMarketOrder', null, {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
                orderType: 'MarketOffer',
                volume,
            });
        });
    }
    CancelOrder(orderGuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'CancelOrder', null, {
                orderGuid,
            });
        });
    }
    GetOpenOrders(primaryCurrencyCode, secondaryCurrencyCode, pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetOpenOrders', null, {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
                pageIndex,
                pageSize,
            });
        });
    }
    GetClosedOrders(primaryCurrencyCode, secondaryCurrencyCode, pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetClosedOrders', null, {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
                pageIndex,
                pageSize,
            });
        });
    }
    GetClosedFilledOrders(primaryCurrencyCode, secondaryCurrencyCode, pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetClosedFilledOrders', null, {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
                pageIndex,
                pageSize,
            });
        });
    }
    GetOrderDetails(orderGuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetOrderDetails', null, {
                orderGuid,
            });
        });
    }
    GetAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetAccounts');
        });
    }
    GetTransactions(accountGuid, fromTimestampUtc, toTimestampUtc, txTypes, pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetTransactions', null, {
                accountGuid,
                fromTimestampUtc,
                toTimestampUtc,
                txTypes,
                pageIndex,
                pageSize,
            });
        });
    }
    GetDigitalCurrencyDepositAddress(primaryCurrencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetDigitalCurrencyDepositAddress', null, {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
            });
        });
    }
    GetDigitalCurrencyDepositAddresses(primaryCurrencyCode, pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetDigitalCurrencyDepositAddresses', null, {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                pageIndex,
                pageSize,
            });
        });
    }
    SynchDigitalCurrencyDepositAddressWithBlockchain(depositAddress, primaryCurrencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'SynchDigitalCurrencyDepositAddressWithBlockchain', null, {
                depositAddress,
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
            });
        });
    }
    WithdrawDigitalCurrency(amount, withdrawalAddress, comment, primaryCurrencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'WithdrawDigitalCurrency', null, {
                amount,
                withdrawalAddress,
                comment,
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
            });
        });
    }
    RequestFiatWithdrawal(secondaryCurrencyCode, withdrawalAmount, withdrawalBankAccountName, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'RequestFiatWithdrawal', null, {
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
                withdrawalAmount,
                withdrawalBankAccountName,
                comment,
            });
        });
    }
    GetTrades(pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetTrades', null, {
                pageIndex,
                pageSize,
            });
        });
    }
    GetBrokerageFees() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetBrokerageFees');
        });
    }
}
exports.Private = Private;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcml2YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFTbEM7SUFHRSxZQUNFLFNBQWtCLEVBQ2xCLFVBQW1CO1FBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFWSxlQUFlLENBQzFCLG1CQUEyQixFQUMzQixxQkFBNkIsRUFDN0IsS0FBYSxFQUNiLE1BQWM7O1lBRWQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRTtnQkFDaEUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxFQUFFO2dCQUN0RCxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFELFNBQVMsRUFBRSxVQUFVO2dCQUNyQixLQUFLO2dCQUNMLE1BQU07YUFDUCxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxnQkFBZ0IsQ0FDM0IsbUJBQTJCLEVBQzNCLHFCQUE2QixFQUM3QixNQUFjOztZQUVkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUU7Z0JBQ2pFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLFdBQVcsRUFBRTtnQkFDdEQscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsV0FBVyxFQUFFO2dCQUMxRCxTQUFTLEVBQUUsYUFBYTtnQkFDeEIsTUFBTTthQUNQLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVZLFdBQVcsQ0FBQyxTQUFpQjs7WUFDeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEs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