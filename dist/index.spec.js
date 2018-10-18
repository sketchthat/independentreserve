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
const index_1 = require("./index");
const crypto = require("crypto");
const rp = require("request-promise");
describe('Index', () => {
    let dateStub;
    let rpStub;
    let cryptoStub;
    before(() => {
        dateStub = sinon_1.stub(global, 'Date');
        dateStub.returns({
            getTime() {
                return 1514725200000;
            },
        });
        rpStub = sinon_1.stub(rp, 'Request');
        cryptoStub = sinon_1.stub(crypto, 'createHmac');
    });
    beforeEach(() => {
        rpStub.reset();
        cryptoStub.reset();
    });
    after(() => {
        rpStub.restore();
        cryptoStub.restore();
        dateStub.restore();
    });
    it('should call public GetRecentTrades request', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const ir = new index_1.IndependentReserve('public-key', 'private-key');
        const resp = yield ir.public().GetRecentTrades('xbt', 'aud', 20);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Public/GetRecentTrades',
                    json: true,
                    method: 'get',
                    qs: {
                        numberOfRecentTradesToRetrieve: 20,
                        primaryCurrencyCode: 'xbt',
                        secondaryCurrencyCode: 'aud',
                    },
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 0);
    }));
    it('should call private GetAccounts request', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetAccounts,apiKey=public-key,nonce=1514725200000');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const ir = new index_1.IndependentReserve('public-key', 'private-key');
        const resp = yield ir.private().GetAccounts();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetAccounts',
                    method: 'post',
                    callback: undefined,
                    json: {
                        apiKey: 'public-key',
                        nonce: 1514725200000,
                        signature: 'SOMESECRETSIGNATURE',
                    },
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLCtCQUE4QjtBQUM5QixpQ0FBeUM7QUFFekMsbUNBQTZDO0FBRTdDLGlDQUFpQztBQUNqQyxzQ0FBc0M7QUFFdEMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDckIsSUFBSSxRQUFtQixDQUFDO0lBQ3hCLElBQUksTUFBaUIsQ0FBQztJQUN0QixJQUFJLFVBQXFCLENBQUM7SUFFMUIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLFFBQVEsR0FBRyxZQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDZixPQUFPO2dCQUNMLE9BQU8sYUFBYSxDQUFDO1lBQ3ZCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLEdBQUcsWUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM3QixVQUFVLEdBQUcsWUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1QsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNENBQTRDLEVBQUUsR0FBUyxFQUFFO1FBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVB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