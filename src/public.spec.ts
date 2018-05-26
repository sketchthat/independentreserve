'use strict';

import { assert } from 'chai';
import { SinonStub,  stub } from 'sinon';

import Public from './public';

import * as crypto from 'crypto';
import * as rp from 'request-promise';

describe('Public', () => {
  let rpStub: SinonStub;

  before(() => {
    rpStub = stub(rp, 'Request');
  });

  beforeEach(() => {
    rpStub.reset();
  });

  after(() => {
    rpStub.restore();
  });

  it('should call GetValidPrimaryCurrencyCodes', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetValidPrimaryCurrencyCodes();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetValidSecondaryCurrencyCodes', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetValidSecondaryCurrencyCodes();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetValidLimitOrderTypes', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetValidLimitOrderTypes();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetValidMarketOrderTypes', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetValidMarketOrderTypes();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetValidOrderTypes', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetValidOrderTypes();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetValidTransactionTypes', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetValidTransactionTypes();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetMarketSummary', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetMarketSummary('XBT', 'AUD');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetOrderBook', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetOrderBook('ETH', 'NZD');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetTradeHistorySummary', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetTradeHistorySummary('LTC', 'AUD', 2);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetRecentTrades', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetRecentTrades('XBT', 'NZD', 20);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call GetFxRates', async () => {
    rpStub.resolves({ response: true });

    const pubClass = new Public();

    const resp: any = await pubClass.GetFxRates();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });
});
