import PublicClass from './public';
import PrivateClass from './private';

class IndependentReserve {
  private privateClass: PrivateClass;
  private publicClass: PublicClass;

  constructor(
    publicKey?: string,
    privateKey?: string,
  ) {
    this.privateClass = new PrivateClass(publicKey, privateKey);
    this.publicClass = new PublicClass();
  }

  public public() {
    return this.publicClass;
  }

  public private() {
    return this.privateClass;
  }


  // private keys: {
  //   publicKey: string;
  //   privateKey: string;
  // };
  // private nonce: number;
  // private base: string;

  // constructor(publicKey: string, privateKey: string) {
  //   this.keys = { publicKey, privateKey };
  //   this.base = 'https://api.independentreserve.com';
  // }

  // private async callPrivate(method: string): Promise<any> {
  //   const uri = `${this.base}/Private/${method}`;
  //   const hmac = this.generateHmac(uri);

  //   try {
  //     const opts = {
  //       uri: uri,
  //       json: {
  //         apiKey: this.keys.publicKey,
  //         nonce: this.nonce,
  //         signature: hmac
  //       },
  //     };

  //     const resp = await rp.post(opts);

  //     return resp;
  //   } catch (err) {
  //     throw err.error;
  //   }
  // }

  // private async callPublic(method: string, params: any): Promise<any> {
  //   const uri = `${this.base}/Public/${method}`;

  //   try {
  //     const opts = {
  //       uri: uri,
  //       json: true,
  //       qs: params
  //     };

  //     const resp = await rp.get(opts);

  //     return resp;
  //   } catch (err) {
  //     throw err.error;
  //   }
  // }

  // private generateHmac(uri: string): string {
  //   this.nonce = new Date().valueOf();

  //   const message = [
  //     uri,
  //     `apiKey=${this.keys.publicKey}`,
  //     `nonce=${this.nonce}`
  //   ];

  //   const hash = crypto.createHmac('sha256', new Buffer(this.keys.privateKey, 'utf8'))
  //     .update(message.join(','))
  //     .digest('hex')
  //     .toUpperCase();

  //   return hash;
  // }

  // public async getBrokerageFees(): Promise<IBrokerageFees> {
  //   const resp: IBrokerageFees = await this.callPrivate('GetBrokerageFees');

  //   return resp;
  // }

  // public async getAccounts(): Promise<IAccounts[]> {
  //   const resp: IAccounts[] = await this.callPrivate('GetAccounts');

  //   return resp;
  // }
}

export default IndependentReserve;
