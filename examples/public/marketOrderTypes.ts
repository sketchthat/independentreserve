import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get all valid market order types
 */
ir.public().GetValidMarketOrderTypes()
  .then(marketOrderTypes => {
    console.log(marketOrderTypes);
  });
