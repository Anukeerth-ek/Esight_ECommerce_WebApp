"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
     const [clothData, setClothData] = useState([]);

     const handleFetchApi = () => {
          fetch("https://fakestoreapi.com/products")
               .then((res) => res.json())
               .then((data) => setClothData(data));
     };

     useEffect(() => {
          handleFetchApi();
     }, []);

     return (
          <>
               {clothData?.map((item, index) => (
                    <ProductCard key={index} product={item} />
               ))}
          </>
     );
};

export default ProductList;
