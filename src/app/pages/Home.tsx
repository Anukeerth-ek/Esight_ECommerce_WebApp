"use client";

import HeroBanner from "../components/HeroBanner";
import FilterSidebar from "../components/FilterSideBar";
import ProductList from "../components/ProductList";
import { useState } from "react";
import { IconFilter } from "@tabler/icons-react";

export default function HomePage() {
     const [isFilterOpen, setIsFilterOpen] = useState(false);

     return (
          <div>
               <HeroBanner />
               <div className="max-w-7xl mx-auto px-6 py-8">
                    <h2 className="text-xl font-semibold mb-6">results for clothes</h2>
                    <div className="block lg:flex gap-6">
                         <div className="hidden lg:block relative">
                              <FilterSidebar />
                         </div>

                         <div className="lg:hidden mb-4">
                              <button
                                   onClick={() => setIsFilterOpen(true)}
                                   className="flex items-center gap-2 border px-4 py-2 rounded"
                              >
                                   <IconFilter />
                                   <span>Filters</span>
                              </button>
                         </div>

                         {isFilterOpen && (
                              <div className="fixed inset-0 bg-black text-black bg-opacity-50 z-50 flex justify-end">
                                   <div className="w-64 bg-white p-4 h-full overflow-y-auto shadow-xl relative">
                                        <button
                                             onClick={() => setIsFilterOpen(false)}
                                             className="absolute top-2 right-2 text-gray-600"
                                        >
                                             ✕
                                        </button>
                                        <FilterSidebar />
                                   </div>
                              </div>
                         )}

                         <div className="flex-1">
                              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                   <ProductList />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
