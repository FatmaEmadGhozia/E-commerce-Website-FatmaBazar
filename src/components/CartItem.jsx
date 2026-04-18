
// import carrot from '../assets/Carrot.avif'
// import { FiTrash2 } from "react-icons/fi";
// import { FiPlus, FiMinus, FiPhone } from "react-icons/fi";


// export default function CartItem ()  {
//   return (



//     <>
    
//     <div className=" w-[90%]  flex justify-center mx-5 mb-10">
//         <div className='flex gap-3 items-center'>
//             <div className='bg-gray-100 rounded-lg'>
//         <img src={carrot} alt="carrot" className='w-25' />
//               </div>
        

//         <div>
//          <p>Carrot</p>
//          <p className='mt-1'><span>Item Price</span> <span>$105</span></p>
//          <p className="text-[var(--primaryColor)] font-bold text-lg mt-2 ">$105</p>


//         </div>
//         </div>
//         <div className=' flex flex-col justify-between '>
//          <FiTrash2 className='text-4xl pt-3 text-red-400 hover:opacity-200 ml-30'/>
//          <div className='rounded-xl text-md flex justify-between border border-gray-300 pt-2 px-2 w-25 bg-gray-100 ml-20'>
//             <span ><FiMinus/></span><span>1</span><span><FiPlus/></span>
//          </div>
         
        
//         </div>




//         <hr  className="text-gray-300"/>






//     </div>
    
    
    
    
    
    
    
    
    
    
    
    
//     </>



//   )




// }








import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-3 px-5 pb-6 mb-6 border-b border-gray-200">
      {/* Image */}
      <div className="bg-gray-100 rounded-lg flex-shrink-0 w-20 h-20 flex items-center justify-center overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm truncate">{item.name}</p>
        <p className="text-xs text-gray-500 mt-1">Unit price: <span className="font-medium text-gray-700">${item.price.toFixed(2)}</span></p>
        <p className="text-[var(--primaryColor)] font-bold text-base mt-1">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-end gap-2">
        <FiTrash2
          className="text-xl text-red-400 hover:text-red-600 cursor-pointer transition"
          onClick={() => removeFromCart(item.id)}
        />
        <div className="flex items-center border border-gray-300 rounded-xl bg-gray-100 overflow-hidden">
          <button
            className="px-2 py-1 hover:bg-gray-200 transition"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <FiMinus className="text-xs" />
          </button>
          <span className="px-3 text-sm font-bold">{item.quantity}</span>
          <button
            className="px-2 py-1 hover:bg-gray-200 transition"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <FiPlus className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
}
