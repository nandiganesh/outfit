export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  sizes: string[];
}

export interface BagItem {
  product: Product;
  size: string;
  quantity: number;
}

export type Theme = 'red' | 'black' | 'cream';
