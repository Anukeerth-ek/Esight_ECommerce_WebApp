"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import { GetStaticProps } from "next";

const ProductList = () => {
     const [productData, setProductData] = useState([]);

     const handleFetchApi = () => {
          fetch("https://fakestoreapi.com/products")
               .then((res) => res.json())
               .then((data) => setProductData(data));
     };

     useEffect(() => {
          handleFetchApi();
     }, []);

     return (
          <>
               {productData?.map((item, index) => (
                    <ProductCard key={index} product={item} />
               ))}
          </>
     );
};

export default ProductList;
