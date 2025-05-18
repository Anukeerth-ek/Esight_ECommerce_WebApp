export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  brand: string;
  rating: {
    rate: number;
    count: number;
  }
};
