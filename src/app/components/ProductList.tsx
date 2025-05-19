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
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"> */}
                    {clothData?.map((item, index) => (
                         <ProductCard key={index} product={item} />
               ))}
               {/* </div> */}
          </>
     );
};

export default ProductList;
