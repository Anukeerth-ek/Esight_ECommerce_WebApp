"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header = () => {
     const cartItems = useSelector((state: RootState) => state.cart.cartItems);
     console.log("cart", cartItems);
     return (
          <header className="flex items-center justify-between px-6 py-4 border-b">
               <div className="flex items-center gap-4">
                    <Link href="/">
                         <h1 className="text-2xl font-bold text-blue-500">Stella</h1>
                    </Link>
                    <input className="border px-4 py-2 rounded w-80" placeholder="What are you looking for?" />
               </div>
               <div className="flex items-center gap-6">
                    {/* Add icons if using e.g. Lucide */}
                    <Link href="/cart">
                         <p className="relative">
                              Cart🛒{" "}
                              {cartItems.length > 0 && (
                                   <span className="bg-green-700  px-1 rounded-3xl absolute bottom-3 h-min">
                                        {cartItems.length}
                                   </span>
                              )}{" "}
                         </p>
                    </Link>
                    <span>English 🌐</span>
                    <span>
                         Welcome Back! <strong>Abdel Rahman</strong>
                    </span>
               </div>
          </header>
     );
};

export default Header;
