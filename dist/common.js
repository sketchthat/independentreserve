"use strict";
// import * as rp from 'request-promise';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Common {
    // private uri: string;
    // private token: string;
    // constructor(sandbox: boolean, subdomain: string, token?: string) {
    //   let domain = 'exchange.coinjar.com';
    //   if (sandbox) {
    //     domain = 'exchange.coinjar-sandbox.com';
    //   }
    //   this.uri = `https://${subdomain}.${domain}`;
    //   this.token = token;
    // }
    request(auth, method, path, qs, body) {
        return __awaiter(this, void 0, void 0, function* () {
            // const opts: RequestOpts = {
            //   uri: `${this.uri}/${path}`,
            //   json: true,
            //   method: method,
            //   qs: qs,
            //   body: body,
            // };
            // if (auth) {
            //   opts.headers = {
            //     Authorization: `Token token="${this.token}"`,
            //   };
            // }
            // return rp(opts);
        });
    }
}
exports.default = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUNBQXlDOzs7Ozs7Ozs7O0FBRXpDO0lBQ0UsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUV6QixxRUFBcUU7SUFDckUseUNBQXlDO0lBRXpDLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0MsTUFBTTtJQUVOLGlEQUFpRDtJQUNqRCx3QkFBd0I7SUFDeEIsSUFBSTtJQUVTLE9BQU8sQ0FBQyxJQUFhLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxFQUFRLEVBQUUsSUFBVTs7WUFDcEYsOEJBQThCO1lBQzlCLGdDQUFnQztZQUNoQyxnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsS0FBSztZQUVMLGNBQWM7WUFDZCxxQkFBcUI7WUFDckIsb0RBQW9EO1lBQ3BELE9BQU87WUFDUCxJQUFJO1lBRUosbUJBQW1CO1FBQ3JCLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=