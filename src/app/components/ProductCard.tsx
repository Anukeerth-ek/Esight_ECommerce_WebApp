import { Product } from "../types/index";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => (
  <div className="border rounded p-4 text-center">
    {product.isNew && (
      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
        New Arrival
      </span>
    )}
    <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover my-4" />
    <h4 className="text-lg font-medium">{product.name}</h4>
    <p className="text-blue-500">SAR {product.price.toFixed(2)}</p>
    <p className="text-red-500 text-xs mt-1">{product.stockLeft} items left!</p>
  </div>
);

export default ProductCard;