import { IndependentReserve } from '../src/index';

import { IAccounts } from '../src/interfaces/accounts.interface';

const ir = new IndependentReserve('publicKey', 'privateKey');

ir.getAccounts()
  .then((accounts: IAccounts[]) => {
    console.log(accounts);
  })
  .catch(err => {
    // Handle Error
    console.error(err.Message);
  })
