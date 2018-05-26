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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
        const pubClass = new public_1.default();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHVibGljLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBQzlCLGlDQUF5QztBQUV6QyxxQ0FBOEI7QUFFOUIsc0NBQXNDO0FBRXRDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksTUFBaUIsQ0FBQztJQUV0QixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsTUFBTSxHQUFHLFlBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRSxHQUFTLEVBQUU7UUFDeEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sUUFBUSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBRTlCLE1BQU0sSUFBSSxHQUFRLE1BQU0sUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFFaEUsTUFBTSxZQUFZLEdBQUc7WUFDbkI7Z0JBQ0U7b0JBQ0UsR0FBRyxFQUFFLHdFQUF3RTtvQkFDN0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzVDLGFBQU0s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