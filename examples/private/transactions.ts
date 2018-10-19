// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Get Transactions
 *
 * Account GUID: 76d850ae-9fd6-472b-b3e0-127ab7209174
 * From Timestamp UTC: 2018-06-01T08:00:00Z
 * To Timestamp UTC: 2018-12-07T08:00:00Z
 * TX Types: Trade
 * Page Index: 1
 * Page Size: 10
 */
ir.private().GetTransactions('76d850ae-9fd6-472b-b3e0-127ab7209174', '2018-06-01T08:00:00Z', '2018-12-07T08:00:00Z', ['Trade'], 1, 10)
  .then(transactions => {
    console.log(transactions);
  });
