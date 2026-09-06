import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="app-footer" className="bg-stone-900 text-stone-300 mt-20 border-t border-stone-800">
      {/* Value propositions banner */}
      <div className="border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Free Domestic Shipping</h4>
                <p className="text-xs text-stone-400">On all qualified orders over $50</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">30-Day Easy Returns</h4>
                <p className="text-xs text-stone-400">Hassle-free refunds and exchanges</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">100% Secure Checkout</h4>
                <p className="text-xs text-stone-400">Protected order processing</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Dedicated Support</h4>
                <p className="text-xs text-stone-400">Quick assistance 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold text-base">
                M
              </div>
              <span className="font-bold text-lg text-white">Ecommerce Shop</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Your one-stop destination for quality lifestyle products, electronics, apparel, and home essentials with fast delivery and guaranteed satisfaction.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-3">
              Explore
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-stone-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-stone-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-stone-400 hover:text-white transition-colors">
                  View Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-3">
              Categories
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/products?category=Electronics" className="text-stone-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=Fashion" className="text-stone-400 hover:text-white transition-colors">
                  Fashion & Apparel
                </Link>
              </li>
              <li>
                <Link to="/products?category=Shoes" className="text-stone-400 hover:text-white transition-colors">
                  Footwear & Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-stone-400 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=Home" className="text-stone-400 hover:text-white transition-colors">
                  Home & Living
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Policies */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-3">
              Customer Care
            </h5>
            <p className="text-xs text-stone-400 mb-2">
              Orders are stored safely in your browser localStorage. Cart items persist automatically across reloads.
            </p>
            <div className="pt-2 text-xs text-amber-500 font-medium">
              Demo Store • Built for Local & Web Use
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Ecommerce Shop (MiniShop). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
