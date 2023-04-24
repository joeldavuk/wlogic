"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsePrice_1 = require("../../../src/lib/parsePrice");
describe("parsePrice", () => {
    it("returns a price from a string", () => {
        const price = (0, parsePrice_1.parsePrice)("this item is £10.00");
        expect(price).toBe(10.0);
    });
    it("returns 0 when a price is not found", () => {
        const price = (0, parsePrice_1.parsePrice)("this item does not have a price");
        expect(price).toBe(0);
    });
});
//# sourceMappingURL=parsePrice.test.js.map