import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get fx rates
 */
ir.public().GetFxRates()
  .then(fxRates => {
    console.log(fxRates);
  });
