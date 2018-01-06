# Independent Reserve - Typescript Wrapper

Usage

```typescript
// Import Class
import { IndependentReserve } from '../src/index';

// Initalise Class with Public & Private API Key
const ir = new IndependentReserve('publicKey', 'privateKey');

// Request
ir.getBrokerageFees()
  .then(brokerageFees => {
    console.log(brokerageFees);
  })
  .catch(err => {
    // Handle Error
    console.error(err.Message);
  });
```

More examples can be found in the `/examples` folder.
