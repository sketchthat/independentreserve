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
class Public {
    constructor() {
        this.common = new common_1.default();
    }
    GetValidPrimaryCurrencyCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', 'GetValidPrimaryCurrencyCodes');
        });
    }
    GetValidSecondaryCurrencyCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', 'GetValidSecondaryCurrencyCodes');
        });
    }
    GetValidLimitOrderTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', 'GetValidLimitOrderTypes');
        });
    }
    GetValidMarketOrderTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', 'GetValidMarketOrderTypes');
        });
    }
    GetValidOrderTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', 'GetValidOrderTypes');
        });
    }
    GetValidTransactionTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', 'GetValidTransactionTypes');
        });
    }
    GetMarketSummary(primaryCurrencyCode, secondaryCurrencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
            };
            return this.common.request(false, 'get', 'GetMarketSummary', params);
        });
    }
    GetOrderBook(primaryCurrencyCode, secondaryCurrencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
            };
            return this.common.request(false, 'get', 'GetOrderBook', params);
        });
    }
    GetTradeHistorySummary(primaryCurrencyCode, secondaryCurrencyCode, numberOfHoursInThePastToRetrieve) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
                numberOfHoursInThePastToRetrieve,
            };
            return this.common.request(false, 'get', 'GetTradeHistorySummary', params);
        });
    }
    GetRecentTrades(primaryCurrencyCode, secondaryCurrencyCode, numberOfRecentTradesToRetrieve) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                primaryCurrencyCode: primaryCurrencyCode.toLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLowerCase(),
                numberOfRecentTradesToRetrieve,
            };
            return this.common.request(false, 'get', 'GetRecentTrades', params);
        });
    }
    GetFxRates() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'get', 'GetFxRates');
        });
    }
}
exports.default = Public;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3B1YmxpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQThCO0FBTTlCO0lBR0U7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFWSw0QkFBNEI7O1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDM0UsQ0FBQztLQUFBO0lBRVksOEJBQThCOztZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzdFLENBQUM7S0FBQTtJQUVZLHVCQUF1Qjs7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUN0RSxDQUFDO0tBQUE7SUFDWSx3QkFBd0I7O1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDdkUsQ0FBQztLQUFBO0lBQ1ksa0JBQWtCOztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7S0FBQTtJQUVZLHdCQUF3Qjs7WUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFWSxnQkFBZ0IsQ0FBQyxtQkFBMkIsRUFBRSxxQkFBNkI7O1lBQ3RGLE1BQU0sTUFBTSxHQUFHO2dCQUNiLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLFdBQVcsRUFBRTtnQkFDdEQscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsV0FBVyxFQUFFO2FBQzNELENBQUM7WUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsbUJBQTJCLEVBQUUscUJBQTZCOztZQUNsRixNQUFNLE1BQU0sR0FBRztnQkFDYixtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RELHFCQUFxQixFQUFFLHFCQUFxQixDQUFDLFdBQVcsRUFBRTthQUMzRCxDQUFDO1lBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLENBQUM7S0FBQTtJQUVZLHNCQUFzQixDQUFDLG1CQUEyQixFQUFFLHFCQUE2QixFQUFFLGdDQUF3Qzs7WUFDdEksTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxFQUFFO2dCQUN0RCxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFELGdDQUFnQzthQUNqQyxDQUFDO1lBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0UsQ0FBQztLQUFBO0lBRVksZUFBZSxDQUFDLG1CQUEyQixFQUFFLHFCQUE2QixFQUFFLDhCQUFzQzs7WUFDN0gsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxFQUFFO2dCQUN0RCxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFELDhCQUE4QjthQUMvQixDQUFDO1lBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEUsQ0FBQztLQUFBO0lBRVksVUFBVTs7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==