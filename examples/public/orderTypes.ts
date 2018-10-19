import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get all valid order types
 */
ir.public().GetValidOrderTypes()
  .then(orderTypes => {
    console.log(orderTypes);
  });
