const FilterSidebar = () => (
  <aside className="w-64 p-4 border rounded">
    <h3 className="font-semibold mb-4">Brand</h3>
    <ul className="space-y-2">
      {["Nike", "Adidas", "Apple", "New Balance", "Puma", "Uniqlo"].map(brand => (
        <li key={brand} className="flex items-center gap-2">
          <input type="checkbox" id={brand} />
          <label htmlFor={brand}>{brand}</label>
        </li>
      ))}
    </ul>
    <h3 className="font-semibold mt-6 mb-2">Size</h3>
    <div className="flex gap-2 flex-wrap">
      {["XXS", "XS", "S", "M"].map(size => (
        <button key={size} className="border px-3 py-1 rounded">
          {size}
        </button>
      ))}
    </div>
  </aside>
);

export default FilterSidebar;