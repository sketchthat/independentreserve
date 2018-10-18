import { Private } from './private';
import { Public } from './public';
export declare class IndependentReserve {
    private privateClass;
    private publicClass;
    constructor(publicKey?: string, privateKey?: string);
    public(): Public;
    private(): Private;
}
