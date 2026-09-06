import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle2, PackageCheck, Truck, ArrowRight, ShoppingBag, MapPin, Mail, Phone } from 'lucide-react';

export const OrderSuccessPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrder, orders } = useCart();

  // Find order from context or list
  const order = orderId ? getOrder(orderId) : orders[0];

  if (!order) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-stone-900">Order Confirmed!</h1>
        <p className="text-sm text-stone-600">
          Your order has been recorded successfully.
        </p>
        <div className="pt-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-colors"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="order-success-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Confirmation Header Banner */}
      <div className="text-center space-y-3 bg-white border border-stone-200 rounded-2xl p-8 shadow-xs">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
          Order Confirmed
        </span>

        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Thank you for your order!
        </h1>

        <p className="text-stone-600 text-sm max-w-md mx-auto">
          We&apos;ve received your order and are getting it ready for dispatch. A confirmation has been stored in your browser.
        </p>

        {/* Order Identifier Callout */}
        <div className="pt-3 inline-flex items-center gap-3 px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-700">
          <span>Order Reference:</span>
          <span id="order-id-badge" className="font-mono font-bold text-stone-900 text-sm">
            {order.id}
          </span>
          <span className="text-stone-300">•</span>
          <span>{order.date}</span>
        </div>
      </div>

      {/* Two Column Order Details Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Shipping & Recipient Card */}
        <div className="md:col-span-1 bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-100 pb-2.5 flex items-center gap-2">
            <Truck className="w-4 h-4 text-amber-600" />
            <span>Delivery Info</span>
          </h2>

          <div className="space-y-3 text-xs text-stone-600">
            <div>
              <span className="font-bold text-stone-900 block text-sm">{order.customer.name}</span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
              <span>
                {order.customer.address}, {order.customer.city} - {order.customer.pincode}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>{order.customer.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>{order.customer.phone}</span>
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-1">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                Estimated Delivery
              </span>
              <p className="font-semibold text-stone-900 text-xs">
                {order.estimatedDelivery}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                Payment Method
              </span>
              <p className="font-semibold text-stone-900 text-xs uppercase">
                {order.customer.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Simulated Card Payment'}
              </p>
            </div>
          </div>
        </div>

        {/* Ordered Items & Summary Card */}
        <div className="md:col-span-2 bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-100 pb-2.5 flex items-center gap-2">
            <PackageCheck className="w-4 h-4 text-amber-600" />
            <span>Order Summary</span>
          </h2>

          {/* List of Ordered Items */}
          <div className="divide-y divide-stone-100 max-h-72 overflow-y-auto pr-1">
            {order.items.map(({ product, quantity }) => (
              <div key={product.id} className="py-3 flex items-center justify-between gap-4">
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
                <span className="text-xs font-bold text-stone-900">
                  ${(product.price * quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="pt-3 border-t border-stone-200 space-y-2 text-xs">
            <div className="flex justify-between text-stone-600">
              <span>Subtotal</span>
              <span className="font-semibold text-stone-900">${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Shipping</span>
              <span>
                {order.shipping === 0 ? (
                  <span className="text-emerald-700 font-bold uppercase text-[11px]">Free</span>
                ) : (
                  <span className="font-semibold text-stone-900">${order.shipping.toFixed(2)}</span>
                )}
              </span>
            </div>
            <div className="pt-2 border-t border-stone-100 flex justify-between items-baseline text-sm">
              <span className="font-bold text-stone-900">Total Paid / Due</span>
              <span className="text-lg font-extrabold text-stone-900">${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Shopping Action */}
      <div className="text-center pt-4">
        <Link
          to="/products"
          id="continue-shopping-btn"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 active:scale-98 text-white font-semibold text-sm shadow-sm transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
};
