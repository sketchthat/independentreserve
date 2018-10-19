// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Get Open Orders
 *
 * Primary Currency: XBT (Bitcoin)
 * Secondary Currency: AUD
 * Page Index: 1 (Starts at 1 not 0)
 * Page Size: 10
 */
ir.private().GetOpenOrders('xbt', 'aud', 1, 10)
  .then(openOrders => {
    console.log(openOrders);
  });
