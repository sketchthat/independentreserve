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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcml2YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBOEI7QUFTOUI7SUFHRSxZQUNFLFNBQWtCLEVBQ2xCLFVBQW1CO1FBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRVksZUFBZSxDQUMxQixtQkFBMkIsRUFDM0IscUJBQTZCLEVBQzdCLEtBQWEsRUFDYixNQUFjOztZQUVkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUU7Z0JBQ2hFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLFdBQVcsRUFBRTtnQkFDdEQscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsV0FBVyxFQUFFO2dCQUMxRCxTQUFTLEVBQUUsVUFBVTtnQkFDckIsS0FBSztnQkFDTCxNQUFNO2FBQ1AsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRVksZ0JBQWdCLENBQzNCLG1CQUEyQixFQUMzQixxQkFBNkIsRUFDN0IsTUFBYzs7WUFFZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFO2dCQUNqRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RELHFCQUFxQixFQUFFLHFCQUFxQixDQUFDLFdBQVcsRUFBRTtnQkFDMUQsU0FBUyxFQUFFLGFBQWE7Z0JBQ3hCLE1BQU07YUFDUCxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsU0FBaUI7O1lBQ3hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxhQUFh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