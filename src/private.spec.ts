'use strict';

import { assert } from 'chai';
import { SinonStub,  stub } from 'sinon';

import Private from './private';

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
});
