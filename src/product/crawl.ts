import scrapeIt from "scrape-it";
import { ProductData } from "./types";

export const productCrawler = async (url: string): Promise<ProductData> => {
  const { data } = await scrapeIt<ProductData>(url, {
    products: {
      listItem: ".package",
      data: {
        heading: "h3",
        name: ".package-name",
        description: ".package-description",
        price: ".price-big",
        discount: ".package-price p",
        packageData: ".package-data",
      },
    },
  });
  return data;
};
