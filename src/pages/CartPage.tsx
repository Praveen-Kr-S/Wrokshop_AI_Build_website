import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    shipping,
    total,
    freeShippingThreshold,
    totalItems
  } = useCart();

  const navigate = useNavigate();

  // Progress to free shipping
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  if (cart.length === 0) {
    return (
      <div id="empty-cart-view" className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center mx-auto text-amber-600">
          <ShoppingBag className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">Your Shopping Cart is Empty</h1>
          <p className="text-sm text-stone-600 max-w-md mx-auto">
            Looks like you haven&apos;t added any items to your cart yet. Explore our curated catalog of everyday lifestyle goods.
          </p>
        </div>
        <div>
          <Link
            to="/products"
            id="empty-cart-shop-now-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold shadow-sm transition-colors"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="cart-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">Shopping Cart</h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            You have <span className="font-semibold text-stone-900">{totalItems}</span> {totalItems === 1 ? 'item' : 'items'} in your bag.
          </p>
        </div>

        <button
          onClick={clearCart}
          className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline self-start sm:self-auto"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cart Itemized List */}
        <div className="lg:col-span-8 space-y-4">
          {/* Free Shipping Tracker */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-800">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-600" />
                {amountToFreeShipping > 0 ? (
                  <span>
                    Add <strong className="text-amber-700">${amountToFreeShipping.toFixed(2)}</strong> more to qualify for <strong>FREE shipping</strong>!
                  </span>
                ) : (
                  <span className="text-emerald-700 font-bold">
                    You have unlocked FREE Standard Shipping! 🎉
                  </span>
                )}
              </div>
              <span className="text-stone-500">{freeShippingPercent}%</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-amber-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${freeShippingPercent}%` }}
              />
            </div>
          </div>

          {/* List of Cart Items */}
          <div className="border border-stone-200 rounded-2xl bg-white divide-y divide-stone-200 overflow-hidden">
            {cart.map(({ product, quantity }) => (
              <div
                key={product.id}
                id={`cart-item-${product.id}`}
                className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 hover:bg-stone-50/50 transition-colors"
              >
                {/* Thumbnail */}
                <Link
                  to={`/products/${product.id}`}
                  className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <Link
                    to={`/products/${product.id}`}
                    className="block font-medium text-stone-900 text-sm sm:text-base hover:text-amber-700 line-clamp-1 transition-colors"
                  >
                    {product.name}
                  </Link>
                  <div className="text-xs text-stone-500">
                    Unit Price: <span className="font-semibold text-stone-800">${product.price.toFixed(2)}</span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                  <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50 overflow-hidden">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="p-2 text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors"
                      aria-label="Decrease quantity"
                      id={`cart-decrease-${product.id}`}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span
                      id={`cart-qty-${product.id}`}
                      className="w-9 text-center text-xs font-bold text-stone-900"
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="p-2 text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors"
                      aria-label="Increase quantity"
                      id={`cart-increase-${product.id}`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-20">
                    <span className="text-base font-bold text-stone-900 block">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-2 text-stone-400 hover:text-rose-600 rounded-lg transition-colors"
                    aria-label={`Remove ${product.name} from cart`}
                    id={`cart-remove-${product.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Continue Shopping Link */}
          <div className="pt-2">
            <Link
              to="/products"
              className="text-xs font-semibold text-stone-700 hover:text-amber-700 inline-flex items-center gap-1 transition-colors"
            >
              <span>← Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="lg:col-span-4">
          <div
            id="cart-order-summary"
            className="border border-stone-200 rounded-2xl bg-white p-6 shadow-xs space-y-6 sticky top-24"
          >
            <h2 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal ({totalItems} items)</span>
                <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-stone-600 items-center">
                <span>Estimated Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-emerald-700 font-semibold uppercase text-xs">Free</span>
                  ) : (
                    <span className="font-semibold text-stone-900">${shipping.toFixed(2)}</span>
                  )}
                </span>
              </div>

              <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline">
                <div>
                  <span className="text-base font-bold text-stone-900">Total</span>
                  <p className="text-[11px] text-stone-400">Taxes calculated at checkout</p>
                </div>
                <span className="text-2xl font-extrabold text-stone-900">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              id="proceed-to-checkout-btn"
              className="w-full py-3.5 px-4 bg-amber-600 hover:bg-amber-500 active:scale-98 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-2 border-t border-stone-100">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Safe & encrypted localStorage checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
