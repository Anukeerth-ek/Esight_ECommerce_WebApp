import Link from "next/link";
import { Product } from "../types/index";
import { IconStarFilled, IconStarHalfFilled, IconStar } from "@tabler/icons-react";

type ProductProps = {
     product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
     const fullStars = Math.floor(product?.rating?.rate);
     const hasHalfStar = product?.rating?.rate - fullStars >= 0.5;
     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

     return (
          <Link href={`/product/${product?.id}`}>
               <div className="border rounded p-3 text-center w-full ">
                    <img src={product.image} alt={product?.title} className="w-full h-64 object-cover rounded-md" />
                    <h4 className="text-lg font-medium my-2.5">
                         {product.title.length > 18 ? product.title.slice(0, 25) : product.title}
                    </h4>

                    <div className="flex items-center justify-between">
                         <p className="text-green-500 text-xl">₹{product?.price}</p>
                         <div style={{ display: "flex", alignItems:'center', gap: 4 }}>
                              {[...Array(fullStars)].map((_, i) => (
                                   <IconStarFilled size={18} key={`full-${i}`} color="#ffc107" />
                              ))}

                              {hasHalfStar && <IconStarHalfFilled size={18} color="#ffc107" />}

                              {[...Array(emptyStars)].map((_, i) => (
                                   <IconStar size={18} key={`empty-${i}`} color="#e4e5e9" />
                              ))}
                              <p>{product?.rating?.rate}</p>
                         </div>
                    </div>
               </div>
          </Link>
     );
};

export default ProductCard;
