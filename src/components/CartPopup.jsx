// import { useState } from "react"
// import { FiShoppingCart ,FiBell ,  FiUser } from "react-icons/fi";
// import { FiX } from "react-icons/fi";
// import CartItem from "./CartItem";
// import {cartItems} from './ProductInfo'
// import { popularProducts } from "../data/data";



// export default function CartPopup ()  {
//     const [isOpen , setOpenCart ] = useState(true);
//   return (
//     <>
//     {
//        isOpen && (
//        <div className="fixed inset-0 z-100 bg-black/50 "
//        onClick={() => setOpenCart(false)}>
//         <div className="bg-white w-[25%] absolute right-0 top-0 min-h-screen "
//         onClick={(e) => e.stopPropagation()}>

           
//            <div className="cart-header h-20 bg-purple-100 w-full p-5 flex justify-between ">
//             <div className="flex gap-2 text-xl ">
//             <FiShoppingCart className="mt-1"/>
//             <p>Shopping Cart</p>
//             </div>
//             <div className="flex gap-1 hover:text-red-500 cursor-pointer"
//             onClick = {()=> setOpenCart(false)}>
//               <FiX className=" mt-1" / >
//               Close
//               </div>

//            </div>

//            <div className="cart-items mt-10">
             
           
                  
//                 <CartItem/>
//                 <CartItem/>
//                 <CartItem/>
//                 <CartItem/>

               
               
             
             


//            </div>

//           <div className="cart-footer bg-gray-100  mt-30 px-3 w-full my-end">

//              <div className="flex items-center justify-between   w-full p-8 ">
//               <div className="  ">
//               <p className="font-bold text-lg">Subtotal</p>
//               <p className="text-xs text-gray-400 ">Shipping and taxes calculated at checkout.</p>
//               </div>
//               <p className="text-lg font-bold">$1,548.00</p>
//              </div>
//              <div className="grid grid-cols-2  gap-2 ">
//               <button className=" rounded-lg font-bold bg-white p-2 border border-gray-500 ">View Cart</button><button className=" p-2 rounded-lg text-white bg-[var(--primaryColor)]">Checkout</button>
//              </div>
//           </div>




//         </div>


//      </div>
//        )
// }
//     </>
//   )






// }



import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";

export default function CartPopup({ isOpen, onClose }) {
  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[25%] min-w-[320px] absolute right-0 top-0 min-h-screen flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cart-header h-20 bg-purple-100 w-full p-5 flex justify-between items-center flex-shrink-0">
          <div className="flex gap-2 text-xl items-center">
            <FiShoppingCart />
            <p>Shopping Cart ({cartItems.length})</p>
          </div>
          <div className="flex gap-1 hover:text-red-500 cursor-pointer items-center" onClick={onClose}>
            <FiX className="mt-0.5" />
            Close
          </div>
        </div>

        {/* Items */}
        <div className="cart-items mt-6 flex-1 overflow-y-auto px-2">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <FiShoppingCart className="text-4xl mb-3" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {/* Footer */}
        <div className="cart-footer bg-gray-100 px-3 pb-5 pt-3 flex-shrink-0">
          <div className="flex items-center justify-between w-full p-4">
            <div>
              <p className="font-bold text-lg">Subtotal</p>
              <p className="text-xs text-gray-400">Shipping and taxes calculated at checkout.</p>
            </div>
            <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="rounded-lg font-bold bg-white p-2 border border-gray-500 hover:bg-gray-50"
              onClick={() => { navigate('/cart'); onClose(); }}
            >
              View Cart
            </button>
            <button
              className="p-2 rounded-lg text-white bg-[var(--primaryColor)] hover:bg-purple-900"
              onClick={() => { navigate('/checkout'); onClose(); }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
