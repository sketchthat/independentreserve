'use strict';

import { assert } from 'chai';
import { SinonStub,  stub } from 'sinon';

import IndependentReserve from './index';

import * as crypto from 'crypto';
import * as rp from 'request-promise';

describe('Index', () => {
  const currentTime = new Date(2017, 0, 0);
  let rpStub: SinonStub;
  let cryptoStub: SinonStub;

  before(() => {
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
  });

  it('should call public GetRecentTrades request', async () => {
    rpStub.resolves({ response: true });

    const ir = new IndependentReserve('public-key', 'private-key');

    const resp: any = await ir.public().GetRecentTrades('xbt', 'aud', 20);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 0);
  });

  it('should call private GetAccounts request', async () => {
    const cryptoStubChain = {
      update(update) {
        assert.match(update, /^https:\/\/api\.independentreserve.com\/Private\/GetAccounts,apiKey=public-key,nonce=([0-9]{13})$/);

        return cryptoStubChain;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'someSecretSignature';
      },
    };

    cryptoStub.returns(cryptoStubChain);
    rpStub.resolves({ response: true });

    const ir = new IndependentReserve('public-key', 'private-key');

    const resp: any = await ir.private().GetAccounts();

    // const expectedArgs = [
    //   [
    //     {
    //       uri: 'https://api.independentreserve.com/Private/GetAccounts',
    //       json: true,
    //       method: 'post',
    //       callback: undefined,
    //       json: {
    //         apiKey: 'public-key',
    //         nonce: '@TODO',
    //         signature: 'someSecretSignature'
    //       }
    //     },
    //   ],
    // ];

    // assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });

    assert.strictEqual(cryptoStub.callCount, 1);
  });
});
