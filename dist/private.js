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
    PlaceLimitOrder(primaryCurrencyCode, secondaryCurrencyCode, orderType, price, volume) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'PlaceLimitOrder', null, {
                primaryCurrencyCode,
                secondaryCurrencyCode,
                orderType,
                price,
                volume,
            });
        });
    }
    PlaceMarketOrder(primaryCurrencyCode, secondaryCurrencyCode, orderType, volume) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'PlaceMarketOrder', null, {
                primaryCurrencyCode,
                secondaryCurrencyCode,
                orderType,
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
                primaryCurrencyCode,
                secondaryCurrencyCode,
                pageIndex,
                pageSize,
            });
        });
    }
    GetClosedOrders(primaryCurrencyCode, secondaryCurrencyCode, pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetClosedOrders', null, {
                primaryCurrencyCode,
                secondaryCurrencyCode,
                pageIndex,
                pageSize,
            });
        });
    }
    GetClosedFilledOrders(primaryCurrencyCode, secondaryCurrencyCode, pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetClosedFilledOrders', null, {
                primaryCurrencyCode,
                secondaryCurrencyCode,
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
                primaryCurrencyCode,
            });
        });
    }
    GetDigitalCurrencyDepositAddresses(primaryCurrencyCode, pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'GetDigitalCurrencyDepositAddresses', null, {
                primaryCurrencyCode,
                pageIndex,
                pageSize,
            });
        });
    }
    SynchDigitalCurrencyDepositAddressWithBlockchain(depositAddress, primaryCurrencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'SynchDigitalCurrencyDepositAddressWithBlockchain', null, {
                depositAddress,
                primaryCurrencyCode,
            });
        });
    }
    WithdrawDigitalCurrency(amount, withdrawalAddress, comment, primaryCurrencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'WithdrawDigitalCurrency', null, {
                amount,
                withdrawalAddress,
                comment,
                primaryCurrencyCode,
            });
        });
    }
    RequestFiatWithdrawal(secondaryCurrencyCode, withdrawalAmount, withdrawalBankAccountName, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'post', 'RequestFiatWithdrawal', null, {
                secondaryCurrencyCode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcml2YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBOEI7QUFTOUI7SUFHRSxZQUNFLFNBQWtCLEVBQ2xCLFVBQW1CO1FBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRVksZUFBZSxDQUFDLG1CQUEyQixFQUFFLHFCQUE2QixFQUFFLFNBQWlCLEVBQUUsS0FBYSxFQUFFLE1BQWM7O1lBQ3ZJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRTtnQkFDaEUsbUJBQW1CO2dCQUNuQixxQkFBcUI7Z0JBQ3JCLFNBQVM7Z0JBQ1QsS0FBSztnQkFDTCxNQUFNO2FBQ1AsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRVksZ0JBQWdCLENBQUMsbUJBQTJCLEVBQUUscUJBQTZCLEVBQUUsU0FBaUIsRUFBRSxNQUFjOztZQUN6SCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUU7Z0JBQ2pFLG1CQUFtQjtnQkFDbkIscUJBQXFCO2dCQUNyQixTQUFTO2dCQUNULE1BQU07YUFDUCxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsU0FBaUI7O1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7Z0JBQzVELFNBQVM7YUFDVixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxhQUFhLENBQUMsbUJBQTJCLEVBQUUscUJBQTZCLEVBQUUs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