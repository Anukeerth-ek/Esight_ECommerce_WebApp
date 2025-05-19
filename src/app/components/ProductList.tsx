"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const ProductList = () => {
     const [productData, setProductData] = useState<Product[]>([]);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState<string | null>(null); // optional error state

     const handleFetchApi = async () => {
          setIsLoading(true);
          setError(null);
          try {
               const res = await fetch("https://fakestoreapi.com/products");
               if (!res.ok) {
                    throw new Error("Failed to fetch products");
               }
               const data = await res.json();
               setProductData(data);
          } catch (err: any) {
               setError(err.message || "Something went wrong");
          } finally {
               setIsLoading(false);
          }
     };

     useEffect(() => {
          handleFetchApi();
     }, []);

     return isLoading ? (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
    {Array(9).fill(null).map((_, index) => (
      <div key={index} className="h-[330px] w-[367px]">
        <ShimmerSimpleGallery
          card={true}
          row={1}
          col={1}
          gap={20}
          imageHeight={260}
          caption={true}
        />
      </div>
    ))}
  </div>

     ) : (
          productData?.map((item, index) => <ProductCard key={index} product={item} />)
     );
};

export default ProductList;
