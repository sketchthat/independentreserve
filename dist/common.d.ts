declare class Common {
    request(auth: boolean, method: string, path: string, qs?: any, body?: any): Promise<any>;
}
export default Common;
