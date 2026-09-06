import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SAMPLE_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Check,
  ChevronRight,
  Truck,
  ShieldCheck,
  RotateCcw,
  ArrowLeft
} from 'lucide-react';

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const product = SAMPLE_PRODUCTS.find((p) => p.id === id);

  // If product not found
  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-stone-900">Product Not Found</h2>
        <p className="text-sm text-stone-600">
          The item you are looking for might have been moved or is no longer available.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </Link>
      </div>
    );
  }

  // Related products from the same category
  const relatedProducts = SAMPLE_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1800);
  };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 10));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const cartItem = cart.find((item) => item.product.id === product.id);

  return (
    <div id="product-details-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-stone-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link to="/products" className="hover:text-stone-900 transition-colors">
          Products
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link
          to={`/products?category=${product.category}`}
          className="hover:text-stone-900 transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Large Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xs">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-stone-800 text-xs font-semibold px-3 py-1 rounded-md border border-stone-200 shadow-xs">
              {product.category}
            </span>
            {product.originalPrice && (
              <span className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-xs">
                ${(product.originalPrice - product.price).toFixed(0)} Off
              </span>
            )}
          </div>
        </div>

        {/* Product Details & Actions */}
        <div className="space-y-6">
          <div>
            {/* Rating badge */}
            <div className="flex items-center gap-2 mb-2.5">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 stroke-amber-400'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-stone-800">{product.rating.toFixed(1)}</span>
              <span className="text-xs text-stone-400">({product.reviewsCount} customer reviews)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Price block */}
            <div className="flex items-baseline gap-3 mt-3">
              <span className="text-3xl font-extrabold text-stone-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-stone-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                In Stock & Ready to Ship
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="pt-2 border-t border-stone-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
              Overview
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Key Features Bullet List */}
          {product.features && product.features.length > 0 && (
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2.5">
                Key Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity Selector & Add to Cart Action */}
          <div className="pt-4 border-t border-stone-200 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                Quantity
              </span>

              {/* Stepper */}
              <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50 overflow-hidden shadow-xs">
                <button
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className="p-2.5 text-stone-600 hover:bg-stone-200 active:bg-stone-300 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                  aria-label="Decrease quantity"
                  id="qty-decrease-btn"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span
                  id="product-qty-display"
                  className="w-12 text-center text-sm font-semibold text-stone-900"
                >
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  disabled={quantity >= 10}
                  className="p-2.5 text-stone-600 hover:bg-stone-200 active:bg-stone-300 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                  aria-label="Increase quantity"
                  id="qty-increase-btn"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {cartItem && (
                <span className="text-xs text-stone-500">
                  Currently <span className="font-semibold text-amber-700">{cartItem.quantity}</span> in cart
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                id="add-to-cart-details-btn"
                className={`flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98 ${
                  addedAnimation
                    ? 'bg-emerald-600 text-white'
                    : 'bg-amber-600 hover:bg-amber-500 text-white'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added {quantity} to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  addToCart(product, quantity);
                  navigate('/cart');
                }}
                id="buy-now-btn"
                className="py-3.5 px-6 rounded-xl font-semibold text-sm bg-stone-900 hover:bg-stone-800 text-white transition-colors"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Guarantees Box */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Free delivery $50+</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-amber-600 shrink-0" />
              <span>30-Day returns</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>1-Year warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
              More in {product.category}
            </h2>
            <Link
              to={`/products?category=${product.category}`}
              className="text-xs font-semibold text-amber-700 hover:underline"
            >
              View category
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
