import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get market summary
 *
 * Primary Currency Code: XBT (Bitcoin)
 * Secondary Currency Code: AUD
 */
ir.public().GetMarketSummary('xbt', 'aud')
  .then(marketSummary => {
    console.log(marketSummary);
  });
