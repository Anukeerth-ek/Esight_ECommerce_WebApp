import ProductDetail from "@/app/components/ProductDetail";
import { fetchProductDetails } from "@/app/components/fetchProductDetail";
import React from "react";

type ProductDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetailPage({ 
  params 
}: ProductDetailPageProps) {
  const id = Number(params.id);
  const data = await fetchProductDetails(id);
  
  return <ProductDetail product={data} />;
}