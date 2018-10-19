import { Private } from './private';
import { Public } from './public';

export class IndependentReserve {
  private privateClass: Private;
  private publicClass: Public;

  constructor(
    publicKey?: string,
    privateKey?: string,
  ) {
    this.privateClass = new Private(publicKey, privateKey);
    this.publicClass = new Public();
  }

  public public() {
    return this.publicClass;
  }

  public private() {
    return this.privateClass;
  }
}
