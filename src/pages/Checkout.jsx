import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FiCheck, FiAlertCircle } from "react-icons/fi";

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", address: "" });
  const [errors, setErrors] = useState({});

  const shipping = totalPrice >= 100 ? 0 : 9.99;
  const tax = totalPrice * 0.1;
  const total = totalPrice + shipping + tax;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Please enter a valid email";
    if (!form.address.trim()) newErrors.address = "Shipping address is required";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    clearCart();
    setOrderPlaced(true);
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <>
        <Header /><NavBar />
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 text-gray-500">
          <p className="text-xl font-bold">Your cart is empty!</p>
          <Link to="/products" className="bg-[var(--primaryColor)] text-white px-6 py-2 rounded-xl font-bold hover:bg-purple-900">Go Shopping</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header /><NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20 xl:px-40">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {orderPlaced ? (
          <div className="bg-white rounded-2xl shadow-sm border border-green-200 p-12 flex flex-col items-center text-center max-w-lg mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <FiCheck className="text-green-600 text-4xl" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">Order Placed Successfully!</h2>
            <p className="text-gray-500 mb-2">Thank you, <strong>{form.fullName}</strong>!</p>
            <p className="text-gray-500 text-sm mb-6">
              A confirmation will be sent to <strong>{form.email}</strong>.<br />
              Delivering to: <span className="italic text-gray-700">{form.address}</span>
            </p>
            <Link to="/" className="bg-[var(--primaryColor)] text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-900 transition">
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Doe"
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primaryColor)] transition ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-gray-300'}`} />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle />{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primaryColor)] transition ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle />{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address <span className="text-red-500">*</span></label>
                  <textarea name="address" value={form.address} onChange={handleChange} placeholder="123 React Street, Cairo, Egypt"
                    rows={3} className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primaryColor)] transition resize-none ${errors.address ? 'border-red-400 bg-red-50' : 'border-gray-300'}`} />
                  {errors.address && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle />{errors.address}</p>}
                </div>

                <button type="submit" className="w-full bg-[var(--primaryColor)] text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-900 transition">
                  Place Order
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 self-start sticky top-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg bg-gray-100" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <hr className="mb-4" />
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span className="text-green-600">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
                <div className="flex justify-between"><span>Tax (10%)</span><span>${tax.toFixed(2)}</span></div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-[var(--primaryColor)]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}