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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBQ2pDLHNDQUFzQztBQWlCdEM7SUFJRSxZQUFZLFNBQWtCLEVBQUUsVUFBbUI7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQztRQUVoRCxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBRVksT0FBTyxDQUFDLElBQWEsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLEVBQVEsRUFBRSxJQUFVOztZQUNwRixNQUFNLElBQUksR0FBZ0I7Z0JBQ3hCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEVBQUUsRUFBRSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQztZQUVGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLFlBQVksSUFBSSxFQUFFLENBQUM7Z0JBRXpDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDZixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbkIsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUVuRSxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztnQkFFM0IsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLFdBQVcsSUFBSSxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ25CLENBQUM7WUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVPLHNCQUFzQixDQUFDLEdBQVcsRUFBRSxNQUFXO1FBQ3JELE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbkMsTUFBTSxPQUFPLEdBQUc7WUFDZCxHQUFHO1lBQ0gsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixTQUFTLEtBQUssRUFBRTtTQUNqQixDQUFDO1FBRUYsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3BGLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDYixXQUFXLEVBQUUsQ0FBQztRQUVqQixNQUFNLENBQUM7WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQzNCLEtBQUs7WUFDTCxTQUFTO1NBQ1YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9