import PublicClass from './public';
import PrivateClass from './private';
declare class IndependentReserve {
    private privateClass;
    private publicClass;
    constructor(publicKey?: string, privateKey?: string);
    public(): PublicClass;
    private(): PrivateClass;
}
export default IndependentReserve;
