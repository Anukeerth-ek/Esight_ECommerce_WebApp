import { Product } from "../types/index";
import { IconStarFilled, IconStarHalfFilled, IconStar } from "@tabler/icons-react";

type ProductProps = {
     product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
     const start = Math.max;
     console.log("product", product);

     const fullStars = Math.floor(product?.rating?.rate);
     const hasHalfStar = product?.rating?.rate - fullStars >= 0.5;
     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

     return (
          <div className="border rounded p-4 text-center">
               <img src={product.image} alt={product?.title} className="w-full h-64 object-cover my-4" />
               <h4 className="text-lg font-medium">{product.title}</h4>

               <div className="flex items-center justify-between">
                    <p className="text-blue-500">₹{product?.price}</p>
                    <div style={{ display: "flex", gap: 4 }}>
                         {[...Array(fullStars)].map((_, i) => (
                              <IconStarFilled key={`full-${i}`} color="#ffc107" />
                         ))}

                         {hasHalfStar && <IconStarHalfFilled color="#ffc107" />}

                         {[...Array(emptyStars)].map((_, i) => (
                              <IconStar key={`empty-${i}`} color="#e4e5e9" />
                         ))}
                    <p>{product?.rating?.rate}</p>
                    </div>
               </div>
          </div>
     );
};

export default ProductCard;
