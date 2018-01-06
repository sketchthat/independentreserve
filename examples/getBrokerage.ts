import { IndependentReserve } from '../src/index';

import { IBrokerageFees } from '../src/interfaces/brokerageFees.interface';

const ir = new IndependentReserve('publicKey', 'privateKey');

ir.getBrokerageFees()
  .then((brokerageFees: IBrokerageFees) => {
    console.log(brokerageFees);
  })
  .catch(err => {
    // Handle Error
    console.error(err.Message);
  });
