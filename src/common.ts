import * as rp from 'request-promise';
import * as crypto from 'crypto';

declare const Buffer;

interface RequestOpts {
  json?: any;
  method: string;
  qs: any;
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

  public async request(auth: boolean, method: string, path: string, qs?: any, json?: any): Promise<any> {
    const opts: RequestOpts = {
      method: method,
      qs: qs,
      json: json
    };

    if (auth) {
      opts.uri = `${this.uri}/Private/${path}`;

      const authentication = this.generateAuthentication(opts.uri, json);

      opts.json = authentication;

      if (method === 'post' && json) {
        opts.json = Object.assign(authentication, json);
      }

      delete opts.qs;
    } else {
      opts.uri = `${this.uri}/Public/${path}`;
      opts.json = true;
    }

    return rp(opts);
  }

  private generateAuthentication(uri: string, params: any): Authentication {
    const nonce = new Date().valueOf();

    const message = [
      uri,
      `apiKey=${this.keys.publicKey}`,
      `nonce=${nonce}`
    ];

    if (params) {
      Object.keys(params).forEach(key => message.push(`${key}=${params[key]}`));
    }

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