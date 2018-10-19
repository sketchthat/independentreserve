import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve();

/**
 * Get all valid transaction types
 */
ir.public().GetValidTransactionTypes()
  .then(transactionTypes => {
    console.log(transactionTypes);
  });
