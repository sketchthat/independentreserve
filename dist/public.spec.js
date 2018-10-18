'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const public_1 = require("./public");
const rp = require("request-promise");
describe('Public', () => {
    let rpStub;
    before(() => {
        rpStub = sinon_1.stub(rp, 'Request');
    });
    beforeEach(() => {
        rpStub.reset();
    });
    after(() => {
        rpStub.restore();
    });
    it('should call GetValidPrimaryCurrencyCodes', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetValidPrimaryCurrencyCodes();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetValidPrimaryCurrencyCodes',
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetValidSecondaryCurrencyCodes', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetValidSecondaryCurrencyCodes();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetValidSecondaryCurrencyCodes',
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetValidLimitOrderTypes', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetValidLimitOrderTypes();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetValidLimitOrderTypes',
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetValidMarketOrderTypes', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetValidMarketOrderTypes();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetValidMarketOrderTypes',
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetValidOrderTypes', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetValidOrderTypes();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetValidOrderTypes',
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetValidTransactionTypes', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetValidTransactionTypes();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetValidTransactionTypes',
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetMarketSummary', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetMarketSummary('XBT', 'AUD');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetMarketSummary',
                    qs: {
                        primaryCurrencyCode: 'xbt',
                        secondaryCurrencyCode: 'aud',
                    },
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetOrderBook', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetOrderBook('ETH', 'NZD');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetOrderBook',
                    qs: {
                        primaryCurrencyCode: 'eth',
                        secondaryCurrencyCode: 'nzd',
                    },
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetTradeHistorySummary', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetTradeHistorySummary('LTC', 'AUD', 2);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetTradeHistorySummary',
                    qs: {
                        primaryCurrencyCode: 'ltc',
                        secondaryCurrencyCode: 'aud',
                        numberOfHoursInThePastToRetrieve: 2,
                    },
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetRecentTrades', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetRecentTrades('XBT', 'NZD', 20);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetRecentTrades',
                    qs: {
                        primaryCurrencyCode: 'xbt',
                        secondaryCurrencyCode: 'nzd',
                        numberOfRecentTradesToRetrieve: 20,
                    },
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call GetFxRates', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const pubClass = new public_1.Public();
        const resp = yield pubClass.GetFxRates();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetFxRates',
                    json: true,
                    method: 'get',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHVibGljLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBQzlCLGlDQUF5QztBQUV6QyxxQ0FBa0M7QUFFbEMsc0NBQXNDO0FBRXRDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksTUFBaUIsQ0FBQztJQUV0QixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsTUFBTSxHQUFHLFlBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRSxHQUFTLEVBQUU7UUFDeEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sUUFBUSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFOUIsTUFBTSxJQUFJLEdBQVEsTUFBTSxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUVoRSxNQUFNLFlBQVksR0FBRztZQUNuQjtnQkFDRTtvQkFDRSxHQUFHLEVBQUUsd0VBQXdFO29CQUM3RSxJQUFJLEVBQUUsSUFBSTtvQkFDVixNQUFNLEVBQUUsS0FBSztvQkFDYixRQUFRLEVBQUUsU0FBUztpQkFDcEI7YUFDRjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDNUMsYUFBTSxD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