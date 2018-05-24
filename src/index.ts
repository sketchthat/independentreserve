import PrivateClass from './private';
import PublicClass from './public';

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
}

export default IndependentReserve;
