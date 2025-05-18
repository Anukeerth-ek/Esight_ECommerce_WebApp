import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import FilterSidebar from "../components/FilterSideBar";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/index";
import ProductList from "../components/ProductList";

export default function ClothesPage() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-gray-500 mb-4">Home &gt; Clothes</p>
        <h2 className="text-xl font-semibold mb-6">64 result for clothes</h2>
        <div className="flex gap-6">
         <div className="relative">
           <FilterSidebar />
         </div>
          <div className="flex-1">
            {/* <div className="flex justify-end mb-4">
              <select className="border px-3 py-1 rounded">
                <option value="popular">Sort by: Popular</option>
              </select>
            </div> */}
            <div className="grid grid-cols-3 gap-6">
              {/* {dummyProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))} */}
              <ProductList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}