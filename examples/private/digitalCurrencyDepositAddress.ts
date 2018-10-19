// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Get Digital Curreny Deposit Address
 *
 * Primary Currency: XBT (Bitcoin)
 */
ir.private().GetDigitalCurrencyDepositAddress('xbt')
  .then(digitalCurrencyAddress => {
    console.log(digitalCurrencyAddress);
  });
