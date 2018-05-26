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
        const ir = new index_1.default('public-key', 'private-key');
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
        const ir = new index_1.default('public-key', 'private-key');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLCtCQUE4QjtBQUM5QixpQ0FBeUM7QUFFekMsbUNBQXlDO0FBRXpDLGlDQUFpQztBQUNqQyxzQ0FBc0M7QUFFdEMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDckIsSUFBSSxRQUFtQixDQUFDO0lBQ3hCLElBQUksTUFBaUIsQ0FBQztJQUN0QixJQUFJLFVBQXFCLENBQUM7SUFFMUIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLFFBQVEsR0FBRyxZQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDZixPQUFPO2dCQUNMLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDdkIsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sR0FBRyxZQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLFVBQVUsR0FBRyxZQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxHQUFTLEVBQUU7UUFDMUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFB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