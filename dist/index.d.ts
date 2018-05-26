import PrivateClass from './private';
import PublicClass from './public';
declare class IndependentReserve {
    private privateClass;
    private publicClass;
    constructor(publicKey?: string, privateKey?: string);
    public(): PublicClass;
    private(): PrivateClass;
}
export default IndependentReserve;
