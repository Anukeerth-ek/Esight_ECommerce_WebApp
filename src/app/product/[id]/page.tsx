import ProductDetail from "@/app/components/ProductDetail";
import { fetchProductDetails } from "@/app/components/fetchProductDetail";
import React from "react";

interface DetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({ params }: DetailPageProps) => {
  const id = Number(params.id);
  const data = await fetchProductDetails(id);

  return <ProductDetail product={data} />;
};

export default ProductDetailPage;
