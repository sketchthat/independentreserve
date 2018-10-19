// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Get Closed Filled Orders
 *
 * Order GUID: 76d850ae-9fd6-472b-b3e0-127ab7209174
 */
ir.private().GetOrderDetails('76d850ae-9fd6-472b-b3e0-127ab7209174')
  .then(orderDetails => {
    console.log(orderDetails);
  });
