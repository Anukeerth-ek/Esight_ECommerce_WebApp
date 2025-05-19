"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../store/cartSlice";
import { RootState } from "../store/store";
import { IconTrash } from "@tabler/icons-react";
import Link from "next/link";

export default function CartPage() {
     const dispatch = useDispatch();
     const cartItems = useSelector((state: RootState) => state.cart.cartItems);

     const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
     const discount = subtotal * 0.2;
     const deliveryFee = subtotal > 0 ? 20 : 0;
     const total = subtotal - discount + deliveryFee;

     return (
          <div className="p-6 md:p-10 bg-[#faf6f2] min-h-screen">
               {cartItems.length > 0 && (
                    <>
                         <h1 className="text-3xl text-black font-semibold mb-4">Your Cart</h1>
                         <div className="text-sm text-gray-800 mb-6">
                              <Link href="/">
                                   <span>Home</span>
                              </Link>{" "}
                              &gt; <span>Cart</span>
                         </div>
                    </>
               )}

               <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                         {cartItems.length === 0 ? (
                              <div className="text-center text-gray-600 mt-10">
                                   <h2 className="text-2xl font-semibold mb-2">Your cart is empty 🛒</h2>
                                   <div className="flex items-center justify-center">
                                        <img
                                             className="h-1/2"
                                             alt="Empty Cart"
                                             width={100}
                                             height={100}
                                             src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png?f=webp"
                                        />
                                   </div>
                                   <Link href="/" className="inline-block mt-4 text-white bg-black px-4 py-2 rounded">
                                        Continue Shopping
                                   </Link>
                              </div>
                         ) : (
                              cartItems?.map((item) => (
                                   <div
                                        key={item.id}
                                        className="bg-white rounded-lg p-4 flex items-center justify-between shadow"
                                   >
                                        <div className="flex items-center gap-4">
                                             <img
                                                  src={item.image}
                                                  alt={item.title}
                                                  className="w-20 h-20 object-cover rounded-md"
                                             />
                                             <div>
                                                  <h2 className="font-semibold text-black">{item.title}</h2>
                                                  <p className="mt-1 font-semibold text-lg text-green-600">${item.price}</p>
                                             </div>
                                        </div>
                                        <div className="text-black">
                                             <div className="flex justify-center mb-2">
                                                  <button
                                                       className="text-red-500"
                                                       onClick={() => dispatch(removeFromCart(item.id))}
                                                  >
                                                       <IconTrash />
                                                  </button>
                                             </div>
                                             <div className="flex items-center">
                                                  <button
                                                       onClick={() => dispatch(decrementQuantity(item.id))}
                                                       className="px-2 py-1 border rounded"
                                                  >
                                                       −
                                                  </button>
                                                  <span className="mx-1">{item.quantity}</span>
                                                  <button
                                                       onClick={() => dispatch(incrementQuantity(item.id))}
                                                       className="px-2 py-1 border rounded"
                                                  >
                                                       +
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              ))
                         )}{" "}
                    </div>

                    {cartItems.length > 0 && (
                         <div className="bg-white text-black rounded-lg p-6 shadow w-full max-w-md">
                              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                              <div className="space-y-2">
                                   <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(0)}</span>
                                   </div>
                                   <div className="flex justify-between text-green-500">
                                        <span>Discount (-20%)</span>
                                        <span>-${discount.toFixed(0)}</span>
                                   </div>
                                   <div className="flex justify-between">
                                        <span>Delivery Fee</span>
                                        <span>${deliveryFee.toFixed(0)}</span>
                                   </div>
                                   <hr />
                                   <div className="flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>${total.toFixed(0)}</span>
                                   </div>
                              </div>

                              <button className="w-full mt-4 bg-black text-white py-3 rounded-lg text-center flex items-center justify-center gap-2">
                                   Go to Checkout →
                              </button>
                         </div>
                    )}
               </div>
          </div>
     );
}
