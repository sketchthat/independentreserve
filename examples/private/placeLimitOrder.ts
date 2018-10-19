// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Place Limit Order
 *
 * Primary Currency: XBT (Bitcoin)
 * Secondary Currency: AUD
 * Price $8,500.50
 * Volume: 0.55
 */
ir.private().PlaceLimitOrder('xbt', 'aud', 8500.50, 0.55)
  .then(resp => {
    console.log(resp);
  });
