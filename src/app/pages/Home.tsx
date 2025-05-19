import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import FilterSidebar from "../components/FilterSideBar";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/index";
import ProductList from "../components/ProductList";

export default function HomePage() {
     return (
          <div>
               <HeroBanner />
               <div className="max-w-7xl mx-auto px-6 py-8">
                    <p className="text-gray-500 mb-4">Home &gt; Clothes</p>
                    <h2 className="text-xl font-semibold mb-6">64 result for clothes</h2>
                    <div className="flex gap-6">
                         <div className="relative">
                              <FilterSidebar />
                         </div>
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
