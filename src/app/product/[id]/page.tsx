import ProductDetail from "@/app/components/ProductDetail";
import { fetchProductDetails } from "@/app/components/fetchProductDetail";
import React from "react";

interface DetailPageProps {
  params: {
    id: string;
  };
}
// we need to name the prop as params, if not we will get undefined. This is because next router dynamic file always get props named as
// -params

const productDetailPage = async ({ params }: DetailPageProps) => {

     const data = await fetchProductDetails(Number(params.id) );

     return <ProductDetail product={data}/>;
};

export default productDetailPage;
