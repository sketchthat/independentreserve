import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get trade history summary
 *
 * Primary Currency Code: XBT (Bitcoin)
 * Secondary Currency Code: AUD
 * Number Of Hours In The Past To Retrieve: 1
 */
ir.public().GetTradeHistorySummary('xbt', 'aud', 1)
  .then(tradeHistorySummary => {
    console.log(tradeHistorySummary);
  });
