import ProductDetail from "@/app/components/ProductDetail";
import { fetchProductDetails } from "@/app/components/fetchProductDetail";
import React from "react";


export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const data = await fetchProductDetails(id);
  
  return <ProductDetail product={data} />;
}