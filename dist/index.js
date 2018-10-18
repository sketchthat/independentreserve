"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const private_1 = require("./private");
const public_1 = require("./public");
class IndependentReserve {
    constructor(publicKey, privateKey) {
        this.privateClass = new private_1.Private(publicKey, privateKey);
        this.publicClass = new public_1.Public();
    }
    public() {
        return this.publicClass;
    }
    private() {
        return this.privateClass;
    }
}
exports.IndependentReserve = IndependentReserve;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBb0M7QUFDcEMscUNBQWtDO0FBRWxDO0lBSUUsWUFDRSxTQUFrQixFQUNsQixVQUFtQjtRQUVuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksaUJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFTSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQW5CRCxnREFtQkMifQ==