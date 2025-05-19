import ProductDetail from "@/app/components/ProductDetail";
import { fetchProductDetails } from "@/app/components/fetchProductDetail";
import { ProductDetailPageParams } from "@/app/types";
import React from "react";

type ProductDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetailPage({
  params,
}: {
  params: ProductDetailPageParams;
}) {
  const id = Number(params.id);
  const data = await fetchProductDetails(id);
  
  return <ProductDetail product={data} />;
}