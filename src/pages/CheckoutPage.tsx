import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CustomerInfo } from '../types';
import { ShieldCheck, Truck, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, shipping, total, placeOrder } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty, guide user back
  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-stone-900">Your Cart is Empty</h2>
        <p className="text-sm text-stone-600">
          You need items in your cart to proceed with checkout.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-600 text-white text-sm font-semibold hover:bg-amber-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Products</span>
        </Link>
      </div>
    );
  }

  const validate = (): boolean => {
    const errs: Partial<Record<keyof CustomerInfo, string>> = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid contact number';
    }

    if (!formData.address.trim()) {
      errs.address = 'Street address is required';
    }

    if (!formData.city.trim()) {
      errs.city = 'City is required';
    }

    if (!formData.pincode.trim()) {
      errs.pincode = 'Pincode / Postal code is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate quick order processing and save to localStorage
    setTimeout(() => {
      const order = placeOrder(formData);
      setIsSubmitting(false);
      navigate(`/order-success/${order.id}`);
    }, 400);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on edit
    if (errors[name as keyof CustomerInfo]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div id="checkout-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="border-b border-stone-200 pb-4">
        <Link
          to="/cart"
          className="text-xs font-semibold text-stone-500 hover:text-stone-900 inline-flex items-center gap-1.5 mb-2 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Cart</span>
        </Link>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">Checkout</h1>
        <p className="text-sm text-stone-600 mt-0.5">
          Please provide your delivery information to complete your order.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Shipping Form (8 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Customer & Shipping Information */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-5">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold">
                1
              </span>
              <span>Delivery Details</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="sm:col-span-2 space-y-1">
                <label
                  htmlFor="checkout-name"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="checkout-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-3.5 py-2.5 text-sm bg-stone-50 border rounded-xl focus:bg-white focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-stone-300 focus:border-amber-600'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label
                  htmlFor="checkout-email"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="checkout-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alex@example.com"
                  className={`w-full px-3.5 py-2.5 text-sm bg-stone-50 border rounded-xl focus:bg-white focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-stone-300 focus:border-amber-600'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label
                  htmlFor="checkout-phone"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="checkout-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 000-1234"
                  className={`w-full px-3.5 py-2.5 text-sm bg-stone-50 border rounded-xl focus:bg-white focus:outline-none transition-colors ${
                    errors.phone
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-stone-300 focus:border-amber-600'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Street Address */}
              <div className="sm:col-span-2 space-y-1">
                <label
                  htmlFor="checkout-address"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  id="checkout-address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="124 Market Street, Apt 4B"
                  className={`w-full px-3.5 py-2.5 text-sm bg-stone-50 border rounded-xl focus:bg-white focus:outline-none transition-colors ${
                    errors.address
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-stone-300 focus:border-amber-600'
                  }`}
                />
                {errors.address && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.address}</span>
                  </p>
                )}
              </div>

              {/* City */}
              <div className="space-y-1">
                <label
                  htmlFor="checkout-city"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                >
                  City *
                </label>
                <input
                  type="text"
                  id="checkout-city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="New York"
                  className={`w-full px-3.5 py-2.5 text-sm bg-stone-50 border rounded-xl focus:bg-white focus:outline-none transition-colors ${
                    errors.city
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-stone-300 focus:border-amber-600'
                  }`}
                />
                {errors.city && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.city}</span>
                  </p>
                )}
              </div>

              {/* Pincode */}
              <div className="space-y-1">
                <label
                  htmlFor="checkout-pincode"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                >
                  Pincode / Postal Code *
                </label>
                <input
                  type="text"
                  id="checkout-pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="10001"
                  className={`w-full px-3.5 py-2.5 text-sm bg-stone-50 border rounded-xl focus:bg-white focus:outline-none transition-colors ${
                    errors.pincode
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-stone-300 focus:border-amber-600'
                  }`}
                />
                {errors.pincode && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.pincode}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold">
                2
              </span>
              <span>Payment Option</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                  formData.paymentMethod === 'cod'
                    ? 'border-amber-600 bg-amber-50/40 text-stone-900'
                    : 'border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                  className="mt-0.5 text-amber-600 focus:ring-amber-500"
                />
                <div>
                  <span className="text-sm font-bold block">Cash on Delivery</span>
                  <span className="text-xs text-stone-500">
                    Pay with cash or card upon delivery to your doorstep.
                  </span>
                </div>
              </label>

              <label
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                  formData.paymentMethod === 'card'
                    ? 'border-amber-600 bg-amber-50/40 text-stone-900'
                    : 'border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                  className="mt-0.5 text-amber-600 focus:ring-amber-500"
                />
                <div>
                  <span className="text-sm font-bold block">Demo Card / Instant</span>
                  <span className="text-xs text-stone-500">
                    Instant simulated approval (no card details required).
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-5 sticky top-24">
            <h2 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
              Order Summary ({cart.length} items)
            </h2>

            {/* Itemized Mini List */}
            <div className="divide-y divide-stone-100 max-h-72 overflow-y-auto pr-1">
              {cart.map(({ product, quantity }) => (
                <div key={product.id} className="py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover bg-stone-100 border border-stone-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-stone-900 truncate">
                        {product.name}
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Qty: {quantity} × ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-stone-900 shrink-0">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2.5 pt-3 border-t border-stone-200 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-600 items-center">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-emerald-700 font-bold uppercase text-[11px]">Free</span>
                  ) : (
                    <span className="font-semibold text-stone-900">${shipping.toFixed(2)}</span>
                  )}
                </span>
              </div>
              <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline">
                <span className="text-sm font-bold text-stone-900">Total Due</span>
                <span className="text-xl font-extrabold text-stone-900">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              id="place-order-btn"
              className="w-full py-4 px-4 bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 active:scale-98 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              {isSubmitting ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Place Order • ${total.toFixed(2)}</span>
                </>
              )}
            </button>

            {/* Trust Assurances */}
            <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Estimated standard delivery in 3 business days</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Saved directly to your local browser storage</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
