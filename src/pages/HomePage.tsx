import React from 'react';
import { Link } from 'react-router-dom';
import { SAMPLE_PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Clock } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredProducts = SAMPLE_PRODUCTS.filter((p) => p.isFeatured).slice(0, 6);

  const categoryImages: Record<string, string> = {
    Electronics: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80',
    Fashion: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80',
    Shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80',
    Accessories: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80',
    Home: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
  };

  return (
    <div id="home-page" className="space-y-16 pb-12">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative bg-stone-900 text-white overflow-hidden rounded-2xl mx-4 sm:mx-6 lg:mx-8 mt-6"
      >
        {/* Background gradient & decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-800/80 z-0" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 lg:opacity-35 pointer-events-none hidden sm:block">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80"
            alt="Ecommerce Shop showcase"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New Season Collection</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Essential Goods for Modern Living.
            </h1>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Discover curated essentials across premium audio, everyday apparel, footwear, and artisanal home goods. Designed for longevity and everyday comfort.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/products"
                id="hero-shop-now-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold transition-all shadow-md active:scale-98"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products?category=Electronics"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 text-stone-200 hover:text-white text-sm font-semibold border border-stone-700 transition-colors"
              >
                Browse Electronics
              </Link>
            </div>

            {/* Quick value indicators */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-3 gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free delivery $50+</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Verified quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fast dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Shortcuts Section */}
      <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Collections
            </span>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-1">
              Shop by Category
            </h2>
          </div>
          <Link
            to="/products"
            className="text-sm font-semibold text-stone-600 hover:text-amber-700 inline-flex items-center gap-1 group"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.filter((c) => c !== 'All').map((cat) => {
            const count = SAMPLE_PRODUCTS.filter((p) => p.category === cat).length;
            return (
              <Link
                key={cat}
                to={`/products?category=${cat}`}
                className="group relative rounded-xl overflow-hidden aspect-4/5 bg-stone-100 border border-stone-200 hover:shadow-md transition-all flex flex-col justify-end p-4"
              >
                {/* Image */}
                <img
                  src={categoryImages[cat]}
                  alt={cat}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 text-white">
                  <h3 className="font-bold text-base leading-snug group-hover:text-amber-300 transition-colors">
                    {cat}
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5 font-medium">{count} items</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Curated Picks
            </span>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-1">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="text-sm font-semibold text-stone-600 hover:text-amber-700 inline-flex items-center gap-1 group"
          >
            <span>See Full Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-amber-50 border border-amber-200/80 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Exclusive Member Perk
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Enjoy Free Shipping on Orders Over $50
            </h3>
            <p className="text-sm text-stone-600">
              No promo code required. The standard shipping fee of $4.99 is automatically waived once your cart exceeds $50.
            </p>
          </div>
          <Link
            to="/products"
            className="shrink-0 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold transition-colors shadow-xs"
          >
            Explore Catalog
          </Link>
        </div>
      </section>
    </div>
  );
};
