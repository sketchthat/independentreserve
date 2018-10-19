import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get all valid limit order types
 */
ir.public().GetValidLimitOrderTypes()
  .then(limitOrderTypes => {
    console.log(limitOrderTypes);
  });
