import ProductDetail from "@/app/components/ProductDetail";
import { fetchProductDetails } from "@/app/components/fetchProductDetail";
import { Metadata } from "next";


type PageProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetailPage({ params }: PageProps) {
  const id = Number(params.id);
  const data = await fetchProductDetails(id);

  return <ProductDetail product={data} />;
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Product ${params.id}`,
  };
}
