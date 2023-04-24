import { ScrapeResult } from "scrape-it";

export interface Product {
  heading: string;
  name: string;
  description: string;
  price: string;
  discount: string;
  packageData: string;
}

export interface ProductData {
  products: Product[];
}

export type ProductCrawler = ScrapeResult<ProductData>;
