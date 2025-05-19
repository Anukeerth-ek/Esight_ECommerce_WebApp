"use client";

import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductDetail({ product }: { product: Product }) {
     const dispatch = useDispatch();
     const router = useRouter();

     const handleAddToCart = () => {
          dispatch(addToCart(product));
          router.push("/cart");
     };

     return (
          <div className="flex flex-col lg:flex-row gap-12 py-15 px-9">
               {/* Image Section */}
               <div className="flex-1">
                    <div className="bg-gray-100 p-4 rounded-lg">
                         <img src={product.image} alt={product.title} className="object-contain w-full h-[400px]" />
                    </div>
               </div>

               {/* Info Section */}
               <div className="flex-1">
                    <h1 className="text-2xl font-semibold">{product.title}</h1>
                    <div className="mt-5">
                         <p>{product?.description}</p>
                    </div>

                    <div className="flex items-center gap-6 w-1/2 mt-5">
                         <div>
                              <p className="text-2xl font-bold">${product.price}</p>
                         </div>
                         <div className="flex justify-end items-center h-full">
                              <span className="text-yellow-500 text-xl">★</span>
                              <span className="text-sm font-medium">
                                   {product.rating.rate} ({product.rating.count})
                              </span>
                         </div>
                    </div>
                    <div className="flex items-center mt-5 mb-4">
                         <p>Category: </p>
                         <p className="text-white bg-gray-500 py-.5 px-2 rounded-sm ml-1">{product.category}</p>
                    </div>
                    {/* <div className="mt-6 flex items-center gap-4">
                         <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="border px-2 rounded">
                              −
                         </button>
                         <span>{quantity}</span>
                         <button onClick={() => setQuantity((q) => q + 1)} className="border px-2 rounded">
                              +
                         </button>
                    </div> */}

                    <button
                         onClick={handleAddToCart}
                         className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full font-semibold cursor-pointer"
                    >
                         🛒 Add to Cart
                    </button>
               </div>
          </div>
     );
}
