"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const rp = require("request-promise");
class Common {
    constructor(publicKey, privateKey) {
        this.uri = 'https://api.independentreserve.com';
        if (publicKey && privateKey) {
            this.keys = { publicKey, privateKey };
        }
    }
    request(auth, method, path, qs, json) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = {
                method: method,
                qs: qs,
                json: json,
            };
            if (auth) {
                opts.uri = `${this.uri}/Private/${path}`;
                if (json) {
                    Object.keys(json).forEach(key => {
                        if (!json[key]) {
                            delete json[key];
                        }
                    });
                }
                const authentication = this.generateAuthentication(opts.uri, json);
                opts.json = authentication;
                if (method === 'post' && json) {
                    opts.json = Object.assign(authentication, json);
                }
                delete opts.qs;
            }
            else {
                opts.uri = `${this.uri}/Public/${path}`;
                opts.json = true;
            }
            return rp(opts);
        });
    }
    generateAuthentication(uri, params) {
        const nonce = new Date().getTime();
        const message = [
            uri,
            `apiKey=${this.keys.publicKey}`,
            `nonce=${nonce}`,
        ];
        if (params) {
            Object.keys(params).forEach(key => {
                let value = params[key];
                if (Array.isArray(params[key])) {
                    value = params[key].join(',');
                }
                message.push(`${key}=${value}`);
            });
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
exports.default = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBQ2pDLHNDQUFzQztBQWlCdEM7SUFJRSxZQUFZLFNBQWtCLEVBQUUsVUFBbUI7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQztRQUVoRCxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFWSxPQUFPLENBQUMsSUFBYSxFQUFFLE1BQWMsRUFBRSxJQUFZLEVBQUUsRUFBUSxFQUFFLElBQVU7O1lBQ3BGLE1BQU0sSUFBSSxHQUFnQjtnQkFDeEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDO1lBRUYsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLFlBQVksSUFBSSxFQUFFLENBQUM7Z0JBRXpDLElBQUksSUFBSSxFQUFFO29CQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNkLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNsQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFFRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFbkUsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7Z0JBRTNCLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2pEO2dCQUVELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNoQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsV0FBVyxJQUFJLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDbEI7WUFFRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFTyxzQkFBc0IsQ0FBQyxHQUFXLEVBQUUsTUFBVztRQUNyRCxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5DLE1BQU0sT0FBTyxHQUFHO1lBQ2QsR0FBRztZQUNILFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0IsU0FBUyxLQUFLLEVBQUU7U0FDakIsQ0FBQztRQUVGLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUM5QixLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDL0I7Z0JBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNwRixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ2IsV0FBVyxFQUFFLENBQUM7UUFFakIsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDM0IsS0FBSztZQUNMLFNBQVM7U0FDVixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=