// app/components/ProductDetail.tsx
'use client';
import { useState } from 'react';
import { Product } from '../types';

const colors = ['Blue', 'Green', 'Black', 'Sky Blue', 'White'];

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row gap-12 p-8">
      {/* Image Section */}
      <div className="flex-1">
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src={product.image} alt={product.title} className="object-contain w-full h-[400px]" />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="text-gray-500 mt-2 mb-4">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-xl">★</span>
          <span className="text-sm font-medium">{product.rating.rate} ({product.rating.count})</span>
        </div>

        <p className="text-2xl font-bold mt-4">${product.price}</p>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Select Colour</h3>
          <div className="flex flex-col gap-2">
            {colors.map(color => (
              <label key={color} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={selectedColor === color}
                  onChange={() => setSelectedColor(color)}
                />
                <span>{color}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="border px-2 rounded"
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="border px-2 rounded"
          >
            +
          </button>
        </div>

        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full font-semibold">
          🛒 Add to Cart
        </button>

        <p className="mt-8 text-gray-700 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}
