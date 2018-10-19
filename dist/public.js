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
        this.common = new common_1.Common();
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
exports.Public = Public;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3B1YmxpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQWtDO0FBTWxDO0lBR0U7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVZLDRCQUE0Qjs7WUFDdkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDM0UsQ0FBQztLQUFBO0lBRVksOEJBQThCOztZQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztRQUM3RSxDQUFDO0tBQUE7SUFFWSx1QkFBdUI7O1lBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7S0FBQTtJQUVZLHdCQUF3Qjs7WUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDdkUsQ0FBQztLQUFBO0lBQ1ksa0JBQWtCOztZQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNqRSxDQUFDO0tBQUE7SUFFWSx3QkFBd0I7O1lBQ25DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7S0FBQTtJQUVZLGdCQUFnQixDQUFDLG1CQUEyQixFQUFFLHFCQUE2Qjs7WUFDdEYsTUFBTSxNQUFNLEdBQUc7Z0JBQ2IsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsV0FBVyxFQUFFO2dCQUN0RCxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUU7YUFDM0QsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsbUJBQTJCLEVBQUUscUJBQTZCOztZQUNsRixNQUFNLE1BQU0sR0FBRztnQkFDYixtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RELHFCQUFxQixFQUFFLHFCQUFxQixDQUFDLFdBQVcsRUFBRTthQUMzRCxDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRSxDQUFDO0tBQUE7SUFFWSxzQkFBc0IsQ0FBQyxtQkFBMkIsRUFBRSxxQkFBNkIsRUFBRSxnQ0FBd0M7O1lBQ3RJLE1BQU0sTUFBTSxHQUFHO2dCQUNiLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLFdBQVcsRUFBRTtnQkFDdEQscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsV0FBVyxFQUFFO2dCQUMxRCxnQ0FBZ0M7YUFDakMsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RSxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsbUJBQTJCLEVBQUUscUJBQTZCLEVBQUUsOEJBQXNDOztZQUM3SCxNQUFNLE1BQU0sR0FBRztnQkFDYixtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RELHFCQUFxQixFQUFFLHFCQUFxQixDQUFDLFdBQVcsRUFBRTtnQkFDMUQsOEJBQThCO2FBQy9CLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEUsQ0FBQztLQUFBO0lBRVksVUFBVTs7WUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtDQUNGO0FBdkVELHdCQXVFQyJ9