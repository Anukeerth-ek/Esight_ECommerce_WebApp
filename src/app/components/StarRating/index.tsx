import { Product } from "@/app/types";

type ProductProps = {
     product: Product;
};

export const handleStarRating = ({product}:ProductProps) => {
     const fullStars = Math.floor(product?.rating?.rate);
     const hasHalfStar = product?.rating?.rate - fullStars >= 0.5;
     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

};
