import { productCrawler } from "../../../src/product/crawl";

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
    const result = await productCrawler("http://scrapethis.com");
    expect(result).toBe(payload.data);
  });
});
