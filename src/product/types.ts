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
