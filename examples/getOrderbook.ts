import { IndependentReserve } from '../src/index';

import { IOrderBook } from '../src/interfaces/orderBook.interface';

const ir = new IndependentReserve('publicKey', 'privateKey');

ir.getOrderBook('xbt', 'aud')
  .then((orderBook: IOrderBook) => {
    console.log(orderBook);
  });
