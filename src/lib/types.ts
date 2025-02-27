export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type CardProps = {
  product: Product;
}

export type CategoryPageProps = Promise<{ category: string }>;
