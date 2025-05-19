import { Product } from "@/app/types";

export const fetchProductDetails =  async (productId: number): Promise<Product> =>  {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await response.json();
  return data;
};