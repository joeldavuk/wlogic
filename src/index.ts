import { parsePrice } from "./lib/parsePrice";
import { productCrawler } from "./product/crawl";
import { SCRAPE_URL } from "./constants";

const getProducts = async (): Promise<void> => {
  const result = await productCrawler(SCRAPE_URL);
  if (result) {
    const products = result.products
      .map((item) => {
        return {
          ...item,
          price: parsePrice(item.price),
          discount: parsePrice(item.discount),
        };
      })
      .sort((a, b) => {
        return b.price - a.price;
      });
    console.log(products);
  } else {
    console.log("No data found");
  }
};

getProducts().catch((error) =>
  console.log("Whoops something went wrong", error)
);
