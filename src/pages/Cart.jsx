import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiArrowLeft } from "react-icons/fi";

export default function Cart() {
  const { cartItems, totalPrice, totalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const shipping = totalPrice >= 100 ? 0 : 9.99;
  const tax = totalPrice * 0.1;
  const total = totalPrice + shipping + tax;

  return (
    <>
      <Header />
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20 xl:px-40">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          {cartItems.length > 0 && (
            <button onClick={clearCart} className="text-sm text-red-400 hover:text-red-600 underline">
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400">
            <FiShoppingCart className="text-7xl mb-5" />
            <p className="text-2xl font-bold mb-2">Your cart is empty</p>
            <p className="text-sm mb-6">Looks like you haven't added anything yet.</p>
            <Link to="/products" className="bg-[var(--primaryColor)] text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-900 transition">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm text-gray-500 mb-6">{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
              {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
              <Link to="/products" className="flex items-center gap-2 text-sm text-[var(--primaryColor)] hover:underline mt-4">
                <FiArrowLeft /> Continue Shopping
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 self-start sticky top-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex justify-between"><span>Subtotal ({totalItems} items)</span><span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span className="text-green-600 font-medium">{shipping === 0 ? 'Free' : '$9.99'}</span></div>
                <div className="flex justify-between"><span>Tax (10%)</span><span className="font-medium text-gray-900">${tax.toFixed(2)}</span></div>
              </div>
              <hr className="mb-4" />
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span className="text-[var(--primaryColor)]">${total.toFixed(2)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-orange-500 mb-4">Add ${(100 - totalPrice).toFixed(2)} more for free shipping!</p>
              )}
              <button onClick={() => navigate('/checkout')}
                className="w-full bg-[var(--primaryColor)] text-white py-3 rounded-xl font-bold hover:bg-purple-900 transition text-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}