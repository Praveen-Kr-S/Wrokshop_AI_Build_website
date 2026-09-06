import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Search, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-navigation"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200"
    >
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 text-center font-medium">
        <span>Free standard delivery on all domestic orders over $50</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link
            to="/"
            id="nav-logo"
            className="flex items-center gap-2.5 text-stone-900 hover:opacity-90 transition-opacity shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center text-white shadow-sm font-bold text-lg tracking-tight">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-stone-900 leading-tight">
                Ecommerce Shop
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-700">
                MiniShop
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-amber-700 ${
                  isActive ? 'text-amber-700 font-semibold' : 'text-stone-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-amber-700 ${
                  isActive ? 'text-amber-700 font-semibold' : 'text-stone-600'
                }`
              }
            >
              All Products
            </NavLink>
            <NavLink
              to="/products?category=Electronics"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-amber-700 ${
                  isActive ? 'text-amber-700 font-semibold' : 'text-stone-600'
                }`
              }
            >
              Electronics
            </NavLink>
            <NavLink
              to="/products?category=Fashion"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-amber-700 ${
                  isActive ? 'text-amber-700 font-semibold' : 'text-stone-600'
                }`
              }
            >
              Fashion
            </NavLink>
            <NavLink
              to="/products?category=Home"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-amber-700 ${
                  isActive ? 'text-amber-700 font-semibold' : 'text-stone-600'
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* Right Action Bar (Search & Cart) */}
          <div className="flex items-center gap-3">
            {/* Desktop Search input */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden lg:flex items-center relative w-56 xl:w-64"
            >
              <input
                type="text"
                id="nav-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-3 py-1.5 text-sm bg-stone-100 border border-transparent rounded-full focus:bg-white focus:border-amber-600 focus:outline-none transition-all placeholder:text-stone-400"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
            </form>

            {/* Cart Link with Badge */}
            <Link
              to="/cart"
              id="nav-cart-btn"
              className="relative p-2 rounded-full text-stone-700 hover:bg-stone-100 transition-colors flex items-center justify-center"
              aria-label={`Shopping Cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5 text-stone-800" />
              {totalItems > 0 && (
                <span
                  id="nav-cart-badge"
                  className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-amber-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-in zoom-in-75 duration-200"
                >
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:bg-stone-100 md:hidden transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200"
        >
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-10 py-2 text-sm bg-stone-100 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-600"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
            <button
              type="submit"
              className="absolute right-2 top-2 p-1 text-stone-500 hover:text-amber-600"
              aria-label="Submit search"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              All Products
            </Link>
            <Link
              to="/products?category=Electronics"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Electronics
            </Link>
            <Link
              to="/products?category=Fashion"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Fashion
            </Link>
            <Link
              to="/products?category=Shoes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Shoes
            </Link>
            <Link
              to="/products?category=Accessories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Accessories
            </Link>
            <Link
              to="/products?category=Home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-md flex items-center justify-between"
            >
              <span>Shopping Cart</span>
              <span className="bg-amber-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
