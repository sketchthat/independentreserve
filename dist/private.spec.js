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
const private_1 = require("./private");
const crypto = require("crypto");
const rp = require("request-promise");
describe('Private', () => {
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
    it('should call PlaceLimitOrder', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/PlaceLimitOrder,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt,secondaryCurrencyCode=aud,orderType=LimitBid,price=1000.54,volume=0.5');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.PlaceLimitOrder('XBT', 'AUD', 1000.54, 0.5);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/PlaceLimitOrder',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        orderType: 'LimitBid',
                        price: 1000.54,
                        primaryCurrencyCode: 'xbt',
                        secondaryCurrencyCode: 'aud',
                        signature: 'SOMESECRETSIGNATURE',
                        volume: 0.5,
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call PlaceMarketOrder', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/PlaceMarketOrder,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=ltc,secondaryCurrencyCode=nzd,orderType=MarketOffer,volume=0.5');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.PlaceMarketOrder('LTC', 'NZD', 0.5);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/PlaceMarketOrder',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        orderType: 'MarketOffer',
                        primaryCurrencyCode: 'ltc',
                        secondaryCurrencyCode: 'nzd',
                        signature: 'SOMESECRETSIGNATURE',
                        volume: 0.5,
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call CancelOrder', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/CancelOrder,apiKey=pubKey1,nonce=1514725200000,orderGuid=someGuid1');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.CancelOrder('someGuid1');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/CancelOrder',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        orderGuid: 'someGuid1',
                        signature: 'SOMESECRETSIGNATURE',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetOpenOrders', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetOpenOrders,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt,secondaryCurrencyCode=usd,pageIndex=1,pageSize=5');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetOpenOrders('XBT', 'USD', 1, 5);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetOpenOrders',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        primaryCurrencyCode: 'xbt',
                        secondaryCurrencyCode: 'usd',
                        pageIndex: 1,
                        pageSize: 5,
                        signature: 'SOMESECRETSIGNATURE',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetClosedOrders', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetClosedOrders,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt,secondaryCurrencyCode=usd,pageIndex=1,pageSize=5');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetClosedOrders('XBT', 'USD', 1, 5);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetClosedOrders',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        primaryCurrencyCode: 'xbt',
                        secondaryCurrencyCode: 'usd',
                        pageIndex: 1,
                        pageSize: 5,
                        signature: 'SOMESECRETSIGNATURE',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetClosedFilledOrders', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetClosedFilledOrders,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=eth,secondaryCurrencyCode=aud,pageIndex=2,pageSize=7');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetClosedFilledOrders('ETH', 'AUD', 2, 7);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetClosedFilledOrders',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        primaryCurrencyCode: 'eth',
                        secondaryCurrencyCode: 'aud',
                        pageIndex: 2,
                        pageSize: 7,
                        signature: 'SOMESECRETSIGNATURE',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetOrderDetails', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetOrderDetails,apiKey=pubKey1,nonce=1514725200000,orderGuid=someGuid2');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetOrderDetails('someGuid2');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetOrderDetails',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        orderGuid: 'someGuid2',
                        signature: 'SOMESECRETSIGNATURE',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetAccounts', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetAccounts,apiKey=pubKey1,nonce=1514725200000');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetAccounts();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetAccounts',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        signature: 'SOMESECRETSIGNATURE',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetTransactions without toTimestampUTC', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetTransactions,apiKey=pubKey1,nonce=1514725200000,accountGuid=someGuid2,fromTimestampUtc=2014-08-01T08:00:00Z,txTypes=Brokerage,Trade,pageIndex=1,pageSize=20');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetTransactions('someGuid2', '2014-08-01T08:00:00Z', null, ['Brokerage', 'Trade'], 1, 20);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetTransactions',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        accountGuid: 'someGuid2',
                        fromTimestampUtc: '2014-08-01T08:00:00Z',
                        txTypes: ['Brokerage', 'Trade'],
                        pageIndex: 1,
                        pageSize: 20,
                        signature: 'SOMESECRETSIGNATURE',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetTransactions with toTimestampUTC', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetTransactions,apiKey=pubKey1,nonce=1514725200000,accountGuid=someGuid2,fromTimestampUtc=2014-08-01T08:00:00Z,toTimestampUtc=2014-09-01T08:00:00Z,txTypes=Brokerage,Trade,pageIndex=1,pageSize=20');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetTransactions('someGuid2', '2014-08-01T08:00:00Z', '2014-09-01T08:00:00Z', ['Brokerage', 'Trade'], 1, 20);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetTransactions',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        accountGuid: 'someGuid2',
                        fromTimestampUtc: '2014-08-01T08:00:00Z',
                        toTimestampUtc: '2014-09-01T08:00:00Z',
                        txTypes: ['Brokerage', 'Trade'],
                        pageIndex: 1,
                        pageSize: 20,
                        signature: 'SOMESECRETSIGNATURE',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetDigitalCurrencyDepositAddress', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetDigitalCurrencyDepositAddress,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetDigitalCurrencyDepositAddress('XBT');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetDigitalCurrencyDepositAddress',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        signature: 'SOMESECRETSIGNATURE',
                        primaryCurrencyCode: 'xbt',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetDigitalCurrencyDepositAddress', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetDigitalCurrencyDepositAddresses,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt,pageIndex=1,pageSize=5');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetDigitalCurrencyDepositAddresses('XBT', 1, 5);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetDigitalCurrencyDepositAddresses',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        signature: 'SOMESECRETSIGNATURE',
                        primaryCurrencyCode: 'xbt',
                        pageIndex: 1,
                        pageSize: 5,
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call SynchDigitalCurrencyDepositAddressWithBlockchain', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/SynchDigitalCurrencyDepositAddressWithBlockchain,apiKey=pubKey1,nonce=1514725200000,depositAddress=someRandomXbtAddress,primaryCurrencyCode=xbt');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.SynchDigitalCurrencyDepositAddressWithBlockchain('someRandomXbtAddress', 'XBT');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/SynchDigitalCurrencyDepositAddressWithBlockchain',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        signature: 'SOMESECRETSIGNATURE',
                        primaryCurrencyCode: 'xbt',
                        depositAddress: 'someRandomXbtAddress',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call SynchDigitalCurrencyDepositAddressWithBlockchain', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/WithdrawDigitalCurrency,apiKey=pubKey1,nonce=1514725200000,amount=150.55,withdrawalAddress=someRandomXbtAddress,comment=Some Awesome Comment,primaryCurrencyCode=xbt');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.WithdrawDigitalCurrency(150.55, 'someRandomXbtAddress', 'Some Awesome Comment', 'XBT');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/WithdrawDigitalCurrency',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        signature: 'SOMESECRETSIGNATURE',
                        primaryCurrencyCode: 'xbt',
                        withdrawalAddress: 'someRandomXbtAddress',
                        comment: 'Some Awesome Comment',
                        amount: 150.55,
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call RequestFiatWithdrawal', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/RequestFiatWithdrawal,apiKey=pubKey1,nonce=1514725200000,secondaryCurrencyCode=aud,withdrawalAmount=233.21,withdrawalBankAccountName=Personal AusBank,comment=Withdraw From IR');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.RequestFiatWithdrawal('AUD', 233.21, 'Personal AusBank', 'Withdraw From IR');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/RequestFiatWithdrawal',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        signature: 'SOMESECRETSIGNATURE',
                        comment: 'Withdraw From IR',
                        secondaryCurrencyCode: 'aud',
                        withdrawalAmount: 233.21,
                        withdrawalBankAccountName: 'Personal AusBank',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetTrades', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetTrades,apiKey=pubKey1,nonce=1514725200000,pageIndex=1,pageSize=5');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetTrades(1, 5);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetTrades',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        signature: 'SOMESECRETSIGNATURE',
                        pageIndex: 1,
                        pageSize: 5,
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call GetBrokerageFees', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoStubChain = {
            update(update) {
                chai_1.assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetBrokerageFees,apiKey=pubKey1,nonce=1514725200000');
                return cryptoStubChain;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'someSecretSignature';
            },
        };
        cryptoStub.returns(cryptoStubChain);
        rpStub.resolves({ response: true });
        const privClass = new private_1.default('pubKey1', 'privKey2');
        const resp = yield privClass.GetBrokerageFees();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.independentreserve.com/Private/GetBrokerageFees',
                    json: {
                        apiKey: 'pubKey1',
                        nonce: 1514725200000,
                        signature: 'SOMESECRETSIGNATURE',
                    },
                    method: 'post',
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3ByaXZhdGUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXlDO0FBRXpDLHVDQUFnQztBQUVoQyxpQ0FBaUM7QUFDakMsc0NBQXNDO0FBRXRDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO0lBQ3ZCLElBQUksUUFBbUIsQ0FBQztJQUN4QixJQUFJLE1BQWlCLENBQUM7SUFDdEIsSUFBSSxVQUFxQixDQUFDO0lBRTFCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixRQUFRLEdBQUcsWUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2YsT0FBTztnQkFDTCxPQUFPLGFBQWEsQ0FBQztZQUN2QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxHQUFHLFlBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0IsVUFBVSxHQUFHLFlBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQVMsRUFBRTtRQUMzQyxNQUFNLGVBQWUsR0FBRztZQUN0QixNQUFNLENB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