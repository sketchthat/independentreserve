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
const rp = require("request-promise");
const crypto = require("crypto");
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
                json: json
            };
            if (auth) {
                opts.uri = `${this.uri}/Private/${path}`;
                Object.keys(json).forEach(key => {
                    if (!json[key]) {
                        delete json[key];
                    }
                });
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
        const nonce = new Date().valueOf();
        const message = [
            uri,
            `apiKey=${this.keys.publicKey}`,
            `nonce=${nonce}`
        ];
        if (params) {
            Object.keys(params).forEach(key => {
                let value = params[key];
                if (Array.isArray(params[key])) {
                    value = params[key].join(',');
                }
                if (value) {
                    message.push(`${key}=${value}`);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLGlDQUFpQztBQWlCakM7SUFJRSxZQUFZLFNBQWtCLEVBQUUsVUFBbUI7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQztRQUVoRCxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBRVksT0FBTyxDQUFDLElBQWEsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLEVBQVEsRUFBRSxJQUFVOztZQUNwRixNQUFNLElBQUksR0FBZ0I7Z0JBQ3hCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEVBQUUsRUFBRSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQztZQUVGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLFlBQVksSUFBSSxFQUFFLENBQUM7Z0JBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRW5FLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO2dCQUUzQixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBRUQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2pCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsV0FBVyxJQUFJLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsQ0FBQztZQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRU8sc0JBQXNCLENBQUMsR0FBVyxFQUFFLE1BQVc7UUFDckQsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyxNQUFNLE9BQU8sR0FBRztZQUNkLEdBQUc7WUFDSCxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9CLFNBQVMsS0FBSyxFQUFFO1NBQ2pCLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFeEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDcEYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNiLFdBQVcsRUFBRSxDQUFDO1FBRWpCLE1BQU0sQ0FBQztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDM0IsS0FBSztZQUNMLFNBQVM7U0FDVixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=