"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const public_1 = require("./public");
const private_1 = require("./private");
class IndependentReserve {
    constructor(publicKey, privateKey) {
        this.privateClass = new private_1.default(publicKey, privateKey);
        this.publicClass = new public_1.default();
    }
    public() {
        return this.publicClass;
    }
    private() {
        return this.privateClass;
    }
}
exports.default = IndependentReserve;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBbUM7QUFDbkMsdUNBQXFDO0FBR3JDO0lBSUUsWUFDRSxTQUFrQixFQUNsQixVQUFtQjtRQUVuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksaUJBQVksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGdCQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0sTUFBTTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFTSxPQUFPO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztDQThGRjtBQUVELGtCQUFlLGtCQUFrQixDQUFDIn0=