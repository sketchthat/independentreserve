import * as rp from 'request-promise';
import * as crypto from 'crypto';

declare const Buffer;

interface RequestOpts {
  json?: boolean | {
    apiKey: string;
    nonce: number;
    signature: string;
  };
  method: string;
  qs: any;
  body: any;
  uri?: string;
}

interface Authentication {
  apiKey: string;
  nonce: number;
  signature: string;
}

class Common {
  private uri: string;
  private keys;

  constructor(publicKey: string, privateKey: string) {
    this.uri = 'https://api.independentreserve.com';
    this.keys = { publicKey, privateKey };
  }

  public async request(auth: boolean, method: string, path: string, qs?: any, body?: any): Promise<any> {
    const opts: RequestOpts = {
      method: method,
      qs: qs,
      body: body,
    };

    if (auth) {
      opts.uri = `${this.uri}/Private/${path}`;

      const authentication = this.generateAuthentication(opts.uri);

      opts.json = authentication;
    } else {
      opts.uri = `${this.uri}/Public/${path}`;
      opts.json = true;
    }

    return rp(opts);
  }

  private generateAuthentication(uri: string): Authentication {
    const nonce = new Date().valueOf();

    const message = [
      uri,
      `apiKey=${this.keys.publicKey}`,
      `nonce=${nonce}`
    ];

    const signature = crypto.createHmac('sha256', new Buffer(this.keys.privateKey, 'utf8'))
      .update(message.join(','))
      .digest('hex')
      .toUpperCase();

    return {
      apiKey: this.keys.publicKey,
      nonce,
      signature,
    };
  }
}

export default Common;
