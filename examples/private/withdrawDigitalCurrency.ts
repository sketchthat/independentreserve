// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Withdraw Digital Currency
 *
 * Volume: 0.55
 * Withdrawal Address Address: 3L2BfDfGRkhJ21pqvcADFjPex14EtZPcqQ
 * Comment: Some Meaningful Comment
 * Primary Currency: XBT (Bitcoin)
 */
ir.private().WithdrawDigitalCurrency(0.55, '3L2BfDfGRkhJ21pqvcADFjPex14EtZPcqQ', 'Some Meaningful Comment', 'xbt')
  .then(resp => {
    console.log(resp);
  });
