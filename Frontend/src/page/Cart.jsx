import React from 'react';
import { CheckCircle, ArrowRight, Trash2, ShoppingBag } from 'lucide-react';

export default function Cart({
  cart,
  updateQty,
  totalAmount,
  user,
  handleCheckout,
  orderInvoice,
  setOrderInvoice,
  setActiveTab,
  darkMode
}) {
  // If order was just placed, display Order Invoice Confirmation
  if (orderInvoice) {
    return (
      <div className="max-w-md mx-auto text-center py-6">
        <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
        <h2 className="text-2xl font-black text-stone-900 dark:text-stone-100">Order Confirmed!</h2>
        <p className="text-stone-500 text-xs mb-6">Saved directly to MongoDB database.</p>

        <div className={`p-5 rounded-3xl border text-left text-xs ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'}`}>
          <div className="flex justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
            <span className="text-stone-500">Order ID</span>
            <span className="font-mono font-bold text-stone-900 dark:text-stone-100">{orderInvoice._id}</span>
          </div>
          <div className="py-3 space-y-1.5">
            {orderInvoice.items.map((it, idx) => (
              <div key={idx} className="flex justify-between text-stone-700 dark:text-stone-300">
                <span>{it.name} × {it.qty}</span>
                <span className="font-semibold">LKR {it.price * it.qty}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between pt-2 border-t border-dashed border-stone-300 dark:border-stone-700 font-bold text-sm">
            <span className="text-stone-900 dark:text-stone-100">Total Amount</span>
            <span className="text-red-500">LKR {orderInvoice.totalAmount}</span>
          </div>
        </div>

        <button
          onClick={() => {
            setOrderInvoice(null);
            setActiveTab('menu');
          }}
          className="mt-6 px-6 py-2.5 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold rounded-xl text-sm shadow-md transition cursor-pointer"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-black mb-6 text-center text-stone-900 dark:text-stone-100">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-16 space-y-3">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
            <ShoppingBag size={28} />
          </div>
          <p className="text-stone-500">Your cart is currently empty.</p>
          <button
            onClick={() => setActiveTab('menu')}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-500 hover:bg-red-600 active:scale-95 text-white rounded-xl text-sm font-semibold shadow-md transition cursor-pointer"
          >
            <span>Browse Menu</span>
            <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart items list */}
          <div className="lg:col-span-2 space-y-3">
            {cart.map((item) => (
              <div
                key={item._id}
                className={`p-3 rounded-2xl flex items-center justify-between border ${
                  darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'
                }`}
              >
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
                <div className="flex-1 ml-3">
                  <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">{item.name}</h4>
                  <span className="text-xs text-red-500 font-semibold">LKR {item.price}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQty(item._id, -1)}
                    className="w-7 h-7 flex items-center justify-center bg-stone-200 dark:bg-stone-800 hover:bg-red-500 hover:text-white rounded-lg font-bold transition cursor-pointer text-stone-800 dark:text-stone-200"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold w-4 text-center text-stone-800 dark:text-stone-200">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item._id, 1)}
                    className="w-7 h-7 flex items-center justify-center bg-stone-200 dark:bg-stone-800 hover:bg-red-500 hover:text-white rounded-lg font-bold transition cursor-pointer text-stone-800 dark:text-stone-200"
                  >
                    +
                  </button>
                </div>
                <span className="font-bold text-sm ml-4 text-stone-900 dark:text-stone-100">
                  LKR {item.price * item.qty}
                </span>
              </div>
            ))}
          </div>

          {/* Delivery & Checkout card */}
          <div className={`p-5 rounded-3xl border h-fit ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-red-100 shadow-sm'}`}>
            <h3 className="font-bold text-sm mb-3 text-stone-900 dark:text-stone-100">Delivery Information</h3>
            <div className="text-xs space-y-1.5 mb-4 text-stone-500">
              <p><strong className="text-stone-700 dark:text-stone-300">Name:</strong> {user.name}</p>
              <p><strong className="text-stone-700 dark:text-stone-300">Phone:</strong> {user.phone}</p>
              <p><strong className="text-stone-700 dark:text-stone-300">Address:</strong> {user.address}</p>
            </div>
            <div className="border-t pt-3 space-y-1.5 text-xs border-dashed border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400">
              <div className="flex justify-between"><span>Subtotal</span><span>LKR {totalAmount}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span className="text-emerald-500 font-bold">FREE</span></div>
              <div className="flex justify-between font-black text-base pt-2 border-t border-stone-200 dark:border-stone-800">
                <span className="text-stone-900 dark:text-stone-100">Total</span>
                <span className="text-red-500">LKR {totalAmount}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-4 py-2.5 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold rounded-xl text-sm shadow-md transition cursor-pointer"
            >
              Confirm & Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
