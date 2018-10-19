// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Get Trades
 *
 * Page Index: 1
 * Page Size: 10
 */
ir.private().GetTrades(1, 10)
  .then(trades => {
    console.log(trades);
  });
