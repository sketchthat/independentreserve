import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get order book
 *
 * Primary Currency Code: XBT (Bitcoin)
 * Secondary Currency Code: AUD
 */
ir.public().GetOrderBook('xbt', 'aud')
  .then(orderbook => {
    console.log(orderbook);
  });
