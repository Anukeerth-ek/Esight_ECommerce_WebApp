const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 border-b">
    <div className="flex items-center gap-4">
      <h1 className="text-2xl font-bold text-blue-500">Stella</h1>
      <input
        className="border px-4 py-2 rounded w-80"
        placeholder="What are you looking for?"
      />
    </div>
    <div className="flex items-center gap-6">
      {/* Add icons if using e.g. Lucide */}
      <span>Cart 🛒</span>
      <span>English 🌐</span>
      <span>Welcome Back! <strong>Abdel Rahman</strong></span>
    </div>
  </header>
);

export default Header;