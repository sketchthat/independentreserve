// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

import { IndependentReserve } from '../../src/index';

const ir = new IndependentReserve(keys.publicKey, keys.privateKey);

/**
 * Get Sync(h) Digital Currency Deposit Address With Blockchain
 *
 * Deposit Address: 3L2BfDfGRkhJ21pqvcADFjPex14EtZPcqQ
 * Primary Currency: XBT (Bitcoin)
 */
ir.private().SynchDigitalCurrencyDepositAddressWithBlockchain('3L2BfDfGRkhJ21pqvcADFjPex14EtZPcqQ', 'xbt')
  .then(resp => {
    console.log(resp);
  });
