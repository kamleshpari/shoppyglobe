import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSearch } from '../context/SearchContext';
import { Home, ShoppingCart } from 'lucide-react'; // optional: lucide icons

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { search, setSearch } = useSearch();
  const location = useLocation();

  return (
    <header className="bg-blue-600 p-4 text-white flex flex-col sm:flex-row justify-between items-center gap-2">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide">
        🛍️ ShoppyGlobe
      </Link>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded p-2 w-full sm:w-1/2 text-black"
      />

      {/* Nav Links */}
      <nav className="flex items-center gap-6">
        <Link
          to="/"
          className={`hover:underline ${
            location.pathname === '/' ? 'font-semibold underline' : ''
          }`}
        >
          <Home size={18} className="inline-block mr-1" />
          Home
        </Link>

        <Link
          to="/cart"
          className={`relative hover:underline ${
            location.pathname === '/cart' ? 'font-semibold underline' : ''
          }`}
        >
          <ShoppingCart size={18} className="inline-block mr-1" />
          Cart ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
