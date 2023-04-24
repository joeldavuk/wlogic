"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crawl_1 = require("../../../src/product/crawl");
const payload = {
    data: {
        products: [
            {
                heading: "test",
            },
        ],
    },
};
jest.mock("scrape-it", () => {
    return {
        __esModule: true,
        default: jest.fn(() => Promise.resolve(payload)),
    };
});
describe("product crawler", () => {
    it("returns data from scrape it crawler", async () => {
        const result = await (0, crawl_1.productCrawler)("http://scrapethis.com");
        expect(result).toBe(payload.data);
    });
});
//# sourceMappingURL=crawl.test.js.map