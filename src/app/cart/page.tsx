'use client';

import { useState } from 'react';
import {IconTrash} from '@tabler/icons-react'

type CartItem = {
  id: number;
  title: string;
  size: string;
  color: string;
  price: number;
  image: string;
};

const initialItems: CartItem[] = [
  {
    id: 1,
    title: 'Gradient Graphic T-shirt',
    size: 'Large',
    color: 'White',
    price: 145,
    image: '/images/beanie.png',
  },
  {
    id: 2,
    title: 'Checkered Shirt',
    size: 'Medium',
    color: 'Red',
    price: 180,
    image: '/images/glasses.png',
  },
  {
    id: 3,
    title: 'Skinny Fit Jeans',
    size: 'Large',
    color: 'Blue',
    price: 240,
    image: '/images/model.png',
  },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({
    1: 1,
    2: 1,
    3: 1,
  });


  return (
    <div className="p-6 md:p-10 bg-[#faf6f2] min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      <div className="text-sm text-gray-500 mb-6">Home &gt; Cart</div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Cart Items */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 flex items-center justify-between shadow">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="mt-1 font-semibold text-lg">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button  className="px-2 py-1 border rounded">−</button>
                  <span>{quantities[item.id]}</span>
                  <button  className="px-2 py-1 border rounded">+</button>
                </div>
                <button  className="text-red-500">
                  <IconTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div className="bg-white rounded-lg p-6 shadow w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              {/* <span>${subtotal}</span> */}
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              {/* <span>-${discount.toFixed(0)}</span> */}
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              {/* <span>${deliveryFee}</span> */}
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              {/* <span>${total.toFixed(0)}</span> */}
            </div>
          </div>

          {/* Promo */}
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">Apply</button>
          </div>

          <button className="w-full mt-4 bg-black text-white py-3 rounded-lg text-center flex items-center justify-center gap-2">
            Go to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}
