[![Build Status](https://travis-ci.org/sketchthat/independentreserve.svg?branch=master)](https://travis-ci.org/sketchthat/independentreserve) [![Coverage Status](https://coveralls.io/repos/github/sketchthat/independentreserve/badge.svg?branch=master)](https://coveralls.io/github/sketchthat/independentreserve?branch=master)
![Dependencies](https://david-dm.org/sketchthat/independentreserve.svg)

# Independent Reserve Wrapper

Typescript / Node wrapper for the Data and Trading APIs offered by [Independent Reserve](https://www.independentreserve.com)

## Setup

Install the dependancies with npm / yarn.

```
npm install irwrapper --save
```

### API Key

In order to utilise the `private()` method you'll need to generate an [API Key](https://www.independentreserve.com/API#authentication).

## Usage

The API wrapper exposes a [Public](https://www.independentreserve.com/API#public) and a [Privet](https://www.independentreserve.com/API#private) method, which contain each of the endpoint functions.

### Exposed Functions @TODO
- [Public](https://github.com/sketchthat/independentreserve/wiki/Public-Methods) methods are within [`public.ts`](https://github.com/sketchthat/independentreserve/blob/master/src/public.ts)
- [Private](https://github.com/sketchthat/independentreserve/wiki/Private-Methods) methods are within [`private.ts`](https://github.com/sketchthat/independentreserve/blob/master/src/private.ts)

### Example

```typescript
import IndependentReserve from 'irwrapper';

const ir = new IndependentReserve('public-key', 'private-key');

// Access Public API Methods
ir.public().GetMarketSummary('xbt', 'aud')
  .then(resp => {
    console.log(resp);
  });

/*
@TODO Response
*/

// Access Private API Methods
ir.private().GetAccounts()
  .then(resp => {
    console.log(resp);
  });

/*
@TODO Repsonse
*/
```


