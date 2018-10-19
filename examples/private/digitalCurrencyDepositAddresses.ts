// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Get Digital Curreny Deposit Addresses
 *
 * Primary Currency: XBT (Bitcoin)
 * Pagee Index: 1
 * Page Size: 10
 */
ir.private().GetDigitalCurrencyDepositAddresses('xbt', 1, 10)
  .then(digitalCurrencyAddresses => {
    console.log(digitalCurrencyAddresses);
  });
