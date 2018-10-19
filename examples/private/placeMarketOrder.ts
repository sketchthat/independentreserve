// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Place Market Order
 *
 * Primary Currency: XBT (Bitcoin)
 * Secondary Currency: AUD
 * Volume: 0.55
 */
ir.private().PlaceMarketOrder('xbt', 'aud', 0.55)
  .then(resp => {
    console.log(resp);
  });
