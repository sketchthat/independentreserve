'use strict';

import { assert } from 'chai';
import { SinonStub,  stub } from 'sinon';

import { Private } from './private';

import * as crypto from 'crypto';
import * as rp from 'request-promise';

describe('Private', () => {
  let dateStub: SinonStub;
  let rpStub: SinonStub;
  let cryptoStub: SinonStub;

  before(() => {
    dateStub = stub(global, 'Date');
    dateStub.returns({
      getTime() {
        return 1514725200000;
      },
    });

    rpStub = stub(rp, 'Request');
    cryptoStub = stub(crypto, 'createHmac');
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

  it('should call PlaceLimitOrder', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/PlaceLimitOrder,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt,secondaryCurrencyCode=aud,orderType=LimitBid,price=1000.54,volume=0.5');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.PlaceLimitOrder('XBT', 'AUD', 1000.54, 0.5);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call PlaceMarketOrder', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/PlaceMarketOrder,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=ltc,secondaryCurrencyCode=nzd,orderType=MarketOffer,volume=0.5');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.PlaceMarketOrder('LTC', 'NZD', 0.5);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call CancelOrder', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/CancelOrder,apiKey=pubKey1,nonce=1514725200000,orderGuid=someGuid1');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.CancelOrder('someGuid1');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetOpenOrders', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetOpenOrders,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt,secondaryCurrencyCode=usd,pageIndex=1,pageSize=5');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetOpenOrders('XBT', 'USD', 1, 5);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetClosedOrders', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetClosedOrders,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt,secondaryCurrencyCode=usd,pageIndex=1,pageSize=5');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetClosedOrders('XBT', 'USD', 1, 5);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetClosedFilledOrders', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetClosedFilledOrders,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=eth,secondaryCurrencyCode=aud,pageIndex=2,pageSize=7');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetClosedFilledOrders('ETH', 'AUD', 2, 7);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetOrderDetails', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetOrderDetails,apiKey=pubKey1,nonce=1514725200000,orderGuid=someGuid2');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetOrderDetails('someGuid2');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetAccounts', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetAccounts,apiKey=pubKey1,nonce=1514725200000');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetAccounts();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetTransactions without toTimestampUTC', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetTransactions,apiKey=pubKey1,nonce=1514725200000,accountGuid=someGuid2,fromTimestampUtc=2014-08-01T08:00:00Z,txTypes=Brokerage,Trade,pageIndex=1,pageSize=20');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetTransactions('someGuid2', '2014-08-01T08:00:00Z', null, ['Brokerage', 'Trade'], 1, 20);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetTransactions with toTimestampUTC', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetTransactions,apiKey=pubKey1,nonce=1514725200000,accountGuid=someGuid2,fromTimestampUtc=2014-08-01T08:00:00Z,toTimestampUtc=2014-09-01T08:00:00Z,txTypes=Brokerage,Trade,pageIndex=1,pageSize=20');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetTransactions('someGuid2', '2014-08-01T08:00:00Z', '2014-09-01T08:00:00Z', ['Brokerage', 'Trade'], 1, 20);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetDigitalCurrencyDepositAddress', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetDigitalCurrencyDepositAddress,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetDigitalCurrencyDepositAddress('XBT');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetDigitalCurrencyDepositAddress', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetDigitalCurrencyDepositAddresses,apiKey=pubKey1,nonce=1514725200000,primaryCurrencyCode=xbt,pageIndex=1,pageSize=5');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetDigitalCurrencyDepositAddresses('XBT', 1, 5);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call SynchDigitalCurrencyDepositAddressWithBlockchain', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/SynchDigitalCurrencyDepositAddressWithBlockchain,apiKey=pubKey1,nonce=1514725200000,depositAddress=someRandomXbtAddress,primaryCurrencyCode=xbt');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.SynchDigitalCurrencyDepositAddressWithBlockchain('someRandomXbtAddress', 'XBT');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call SynchDigitalCurrencyDepositAddressWithBlockchain', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/WithdrawDigitalCurrency,apiKey=pubKey1,nonce=1514725200000,amount=150.55,withdrawalAddress=someRandomXbtAddress,comment=Some Awesome Comment,primaryCurrencyCode=xbt');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.WithdrawDigitalCurrency(150.55, 'someRandomXbtAddress', 'Some Awesome Comment', 'XBT');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call RequestFiatWithdrawal', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/RequestFiatWithdrawal,apiKey=pubKey1,nonce=1514725200000,secondaryCurrencyCode=aud,withdrawalAmount=233.21,withdrawalBankAccountName=Personal AusBank,comment=Withdraw From IR');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.RequestFiatWithdrawal('AUD', 233.21, 'Personal AusBank', 'Withdraw From IR');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetTrades', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetTrades,apiKey=pubKey1,nonce=1514725200000,pageIndex=1,pageSize=5');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetTrades(1, 5);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call GetBrokerageFees', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.strictEqual(update, 'https://api.independentreserve.com/Private/GetBrokerageFees,apiKey=pubKey1,nonce=1514725200000');

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const privClass = new Private('pubKey1', 'privKey2');

    const resp: any = await privClass.GetBrokerageFees();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });
});
