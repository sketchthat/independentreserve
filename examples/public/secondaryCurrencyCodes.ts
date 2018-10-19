import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get all valid secondary currency codes
 */
ir.public().GetValidSecondaryCurrencyCodes()
  .then(currencyCodes => {
    console.log(currencyCodes);
  });
