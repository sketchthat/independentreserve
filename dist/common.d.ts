declare class Common {
    private uri;
    private keys;
    constructor(publicKey?: string, privateKey?: string);
    request(auth: boolean, method: string, path: string, qs?: any, json?: any): Promise<any>;
    private generateAuthentication(uri, params);
}
export default Common;
