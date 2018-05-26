"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const private_1 = require("./private");
const public_1 = require("./public");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBcUM7QUFDckMscUNBQW1DO0FBRW5DO0lBSUUsWUFDRSxTQUFrQixFQUNsQixVQUFtQjtRQUVuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksaUJBQVksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGdCQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0sTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQyJ9