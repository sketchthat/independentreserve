import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get all valid primary currency codes
 */
ir.public().GetValidPrimaryCurrencyCodes()
  .then(currencyCodes => {
    console.log(currencyCodes);
  });
