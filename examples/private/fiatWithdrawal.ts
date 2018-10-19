// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Request Fiat Withdrawal
 *
 * Secondary Currency: AUD
 * Amount: $1,500.11
 * Comment: Some Meaningful Comment
 */
ir.private().RequestFiatWithdrawal('AUD', 1500.11, 'My Bank', 'Some Meaningful Comment')
  .then(resp => {
    console.log(resp);
  });
