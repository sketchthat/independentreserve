import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get recent trades
 *
 * Primary Currency Code: XBT (Bitcoin)
 * Secondary Currency Code: AUD
 * Number Of Recent Trades To Receive: 10
 */
ir.public().GetRecentTrades('xbt', 'aud', 10)
  .then(recentTrades => {
    console.log(recentTrades);
  });
