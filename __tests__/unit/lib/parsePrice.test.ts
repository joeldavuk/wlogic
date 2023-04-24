import { parsePrice } from "../../../src/lib/parsePrice";

describe("parsePrice", () => {
  it("returns a price from a string", () => {
    const price = parsePrice("this item is £10.00");
    expect(price).toBe(10.0);
  });
  it("returns 0 when a price is not found", () => {
    const price = parsePrice("this item does not have a price");
    expect(price).toBe(0);
  });
});
