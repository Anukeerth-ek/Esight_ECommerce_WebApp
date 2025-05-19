"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { IconMenuDeep, IconSearch } from "@tabler/icons-react";

const Header = () => {
     const cartItems = useSelector((state: RootState) => state.cart.cartItems);
     const [showSearch, setShowSearch] = useState(false);
     const [showMenu, setShowMenu] = useState(false);

     return (
          <header className="relative px-20 py-4 border-b flex items-center justify-between">
               <div className="flex items-center gap-4">
                    <Link href="/">
                         <h1 className="text-2xl font-bold text-blue-500">ZyroMart</h1>
                    </Link>

                    <input
                         className="border px-4 py-1 rounded w-60 md:w-80 hidden lg:block"
                         placeholder="What are you looking for?"
                    />

                    {showSearch && (
                         <input className="border px-4 py-0.5 rounded w-48 block lg:hidden" placeholder="Search..." />
                    )}
               </div>

               <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-6">
                         <Link href="/">
                              <span>Home</span>
                         </Link>
                         <Link href="/cart">
                              <p className="relative">
                                   Cart 🛒{" "}
                                   {cartItems.length > 0 && (
                                        <span className="bg-green-700 text-white px-2 text-sm rounded-3xl absolute -top-2 -right-4">
                                             {cartItems.length}
                                        </span>
                                   )}
                              </p>
                         </Link>

                         <Link href="/about">
                              <span>About</span>
                         </Link>
                    </div>

                    <div className="flex lg:hidden items-center gap-4">
                         <button onClick={() => setShowSearch((prev) => !prev)} className="text-xl">
                              <IconSearch />
                         </button>
                         <button onClick={() => setShowMenu((prev) => !prev)} className="text-xl">
                              <IconMenuDeep />
                         </button>
                    </div>
               </div>

               {showMenu && (
                    <div className="absolute top-full right-4 mt-2 bg-white text-black border rounded shadow-md w-60 p-4 z-10 lg:hidden">
                         <Link href="/">
                              <p className="mb-2"> Home</p>
                         </Link>
                         <Link href="/cart">
                              <p className="relative mb-2">
                                   Cart 🛒
                                   {cartItems.length > 0 && (
                                        <span className="bg-green-700 text-white px-2 text-sm rounded-3xl absolute -top-2 -right-4">
                                             {cartItems.length}
                                        </span>
                                   )}
                              </p>
                         </Link>

                         <Link href="/about">
                              <p>About</p>
                         </Link>
                    </div>
               )}
          </header>
     );
};

export default Header;
