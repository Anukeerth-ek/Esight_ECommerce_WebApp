import ProductDetail from "@/app/components/ProductDetail";
import { fetchProductDetails } from "@/app/components/fetchProductDetail";
import { ProductDetailParams } from "@/app/types";

import React from "react";

export default async function ProductDetailPage({ params }: ProductDetailParams) {
  const id = Number(params.id);
  const data = await fetchProductDetails(id);
  
  return <ProductDetail product={data} />;
}