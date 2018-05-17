import IndependentReserve from './index';


const ir = new IndependentReserve('pub1', 'priv1');

ir.public().GetFxRates()
  .then(resp => {
    console.log(resp);
  })


ir.private().GetBrokerageFees()
  .then(resp => {
    console.log('RESP: ', resp);
  });
