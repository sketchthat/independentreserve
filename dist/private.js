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
        this.common = new common_1.default(publicKey, privateKey);
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
exports.default = Private;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcml2YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBOEI7QUFTOUI7SUFHRSxZQUNFLFNBQWtCLEVBQ2xCLFVBQW1CO1FBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRVksZUFBZSxDQUMxQixtQkFBMkIsRUFDM0IscUJBQTZCLEVBQzdCLEtBQWEsRUFDYixNQUFjOztZQUVkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRTtnQkFDaEUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxFQUFFO2dCQUN0RCxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFELFNBQVMsRUFBRSxVQUFVO2dCQUNyQixLQUFLO2dCQUNMLE1BQU07YUFDUCxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxnQkFBZ0IsQ0FDM0IsbUJBQTJCLEVBQzNCLHFCQUE2QixFQUM3QixNQUFjOztZQUVkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRTtnQkFDakUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxFQUFFO2dCQUN0RCxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFELFNBQVMsRUFBRSxhQUFhO2dCQUN4QixNQUFNO2FBQ1AsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRVksV0FBVyxDQUFDLFNBQWlCOztZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFF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