import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cart } = useCart();
  const [justAdded, setJustAdded] = React.useState(false);

  const cartItem = cart.find((item) => item.product.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-md hover:border-stone-300 transition-all duration-300 flex flex-col h-full"
    >
      {/* Product Image Container */}
      <Link
        to={`/products/${product.id}`}
        className="relative block aspect-square bg-stone-100 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Category tag */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-stone-700 text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs border border-stone-200/60">
          {product.category}
        </span>

        {/* Discount tag if applicable */}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-amber-600 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
            Save ${(product.originalPrice - product.price).toFixed(0)}
          </span>
        )}
      </Link>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 mb-1.5">
            <div className="flex text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
            </div>
            <span className="text-xs font-semibold text-stone-700">
              {product.rating.toFixed(1)}
            </span>
            <span className="text-xs text-stone-400">({product.reviewsCount})</span>
          </div>

          {/* Title */}
          <Link
            to={`/products/${product.id}`}
            className="block text-stone-900 font-medium text-sm sm:text-base leading-snug hover:text-amber-700 line-clamp-2 transition-colors"
          >
            {product.name}
          </Link>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-stone-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {cartItem && (
              <span className="text-[11px] text-amber-700 font-medium">
                {cartItem.quantity} in cart
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            id={`btn-add-${product.id}`}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 shadow-xs ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-stone-900 text-white hover:bg-amber-600'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
