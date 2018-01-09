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
class IndependentReserve {
    constructor(publicKey, privateKey) {
        this.keys = { publicKey, privateKey };
        this.base = 'https://api.independentreserve.com';
    }
    callPrivate(method) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `${this.base}/Private/${method}`;
            const hmac = this.generateHmac(uri);
            try {
                const opts = {
                    uri: uri,
                    json: {
                        apiKey: this.keys.publicKey,
                        nonce: this.nonce,
                        signature: hmac
                    },
                };
                const resp = yield rp.post(opts);
                return resp;
            }
            catch (err) {
                throw err.error;
            }
        });
    }
    callPublic(method, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `${this.base}/Public/${method}`;
            try {
                const opts = {
                    uri: uri,
                    json: true,
                    qs: params
                };
                const resp = yield rp.get(opts);
                return resp;
            }
            catch (err) {
                throw err.error;
            }
        });
    }
    generateHmac(uri) {
        this.nonce = new Date().valueOf();
        const message = [
            uri,
            `apiKey=${this.keys.publicKey}`,
            `nonce=${this.nonce}`
        ];
        const hash = crypto.createHmac('sha256', new Buffer(this.keys.privateKey, 'utf8'))
            .update(message.join(','))
            .digest('hex')
            .toUpperCase();
        return hash;
    }
    getBrokerageFees() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.callPrivate('GetBrokerageFees');
            return resp;
        });
    }
    getAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.callPrivate('GetAccounts');
            return resp;
        });
    }
    getOrderBook(primaryCurrencyCode, secondaryCurrencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                primaryCurrencyCode: primaryCurrencyCode.toLocaleLowerCase(),
                secondaryCurrencyCode: secondaryCurrencyCode.toLocaleLowerCase()
            };
            const resp = yield this.callPublic('GetOrderBook', params);
            return resp;
        });
    }
}
exports.IndependentReserve = IndependentReserve;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUFpQztBQUNqQyxzQ0FBc0M7QUFRdEM7SUFRRSxZQUFZLFNBQWlCLEVBQUUsVUFBa0I7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLG9DQUFvQyxDQUFDO0lBQ25ELENBQUM7SUFFYSxXQUFXLENBQUMsTUFBYzs7WUFDdEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxZQUFZLE1BQU0sRUFBRSxDQUFDO1lBQzdDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFcEMsSUFBSSxDQUFDO2dCQUNILE1BQU0sSUFBSSxHQUFHO29CQUNYLEdBQUcsRUFBRSxHQUFHO29CQUNSLElBQUksRUFBRTt3QkFDSixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO3dCQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ2pCLFNBQVMsRUFBRSxJQUFJO3FCQUNoQjtpQkFDRixDQUFDO2dCQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFakMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNsQixDQUFDO1FBQ0gsQ0FBQztLQUFBO0lBRWEsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFXOztZQUNsRCxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLFdBQVcsTUFBTSxFQUFFLENBQUM7WUFFNUMsSUFBSSxDQUFDO2dCQUNILE1BQU0sSUFBSSxHQUFHO29CQUNYLEdBQUcsRUFBRSxHQUFHO29CQUNSLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUUsRUFBRSxNQUFNO2lCQUNYLENBQUM7Z0JBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVoQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2xCLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFTyxZQUFZLENBQUMsR0FBVztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbEMsTUFBTSxPQUFPLEdBQUc7WUFDZCxHQUFHO1lBQ0gsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUU7U0FDdEIsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQy9FLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDYixXQUFXLEVBQUUsQ0FBQztRQUVqQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVZLGdCQUFnQjs7WUFDM0IsTUFBTSxJQUFJLEdBQW1CLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRXhFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFWSxXQUFXOztZQUN0QixNQUFNLElBQUksR0FBZ0IsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRWhFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsbUJBQTJCLEVBQUUscUJBQTZCOztZQUNsRixNQUFNLE1BQU0sR0FBRztnQkFDYixtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDNUQscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsaUJBQWlCLEVBQUU7YUFDakUsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFlLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdkUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtDQUNGO0FBNUZELGdEQTRGQyJ9