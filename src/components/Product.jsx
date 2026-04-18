// import { FiStar } from "react-icons/fi";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";



// export default function Product({ name, price, reviews, image, rating ,id}) {
//   const navigate = useNavigate();
 
//   return (
//     <>
//     <div className="border border-gray-300 max-h-90  rounded-lg font-family shadow-md  transiton-transform duration-300 hover:scale-105 cursor-pointer hover:border-[var(--primaryColor)] "
//           onClick={() => navigate(`/products/${id}`)}
          
//     >
//         <div className="bg-gray-100 h-[210px] w-full rounded-lg">
//           <img src={image} alt={name} className="h-[100%] w-full " />
//         </div>
//         <div className=" px-4 pt-3 ">
//           <h3 className="text-md font-bold text-[var(--primaryColor)]  mb-2">
//             {name}
//           </h3>
//           <div className=" relative Feedback flex ">
//             <FiStar className="text-yellow-500 text-sm" />
//             <FiStar className="text-yellow-500 text-sm" />
//             <FiStar className="text-yellow-500 text-sm" />
//             <FiStar className="text-yellow-500 text-sm" />
//             <FiStar className="text-gray-300 text-sm" />
//             <p className="text-sm ml-3 ">
//               {" "}
//               {rating} ({reviews} reviews)
//             </p>
//             <div className=" absolute right-2 bottom-19 shop-icon bg-[var(--primaryColor)] px-2 py-2 rounded-full ml-auto mt-2">
//               <HiOutlineShoppingBag className="text-white text-xl ml-auto" />
//             </div>
//           </div>
//           <p className="price  mt-1  text-lg font-bold mb-8">
//             ${price.toFixed(2)}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }







import { FiStar } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Product({ name, price, reviews, image, rating, id }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  function handleAddToCart(e) {
    e.stopPropagation(); // prevent navigation when clicking the button
    addToCart({ id, name, price, image, quantity: 1 });
  }

  return (
    <div
      className="border border-gray-300 max-h-90 rounded-lg font-family shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer hover:border-[var(--primaryColor)]"
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="bg-gray-100 h-[210px] w-full rounded-lg">
        <img src={image} alt={name} className="h-[100%] w-full object-cover" />
      </div>
      <div className="px-4 pt-3">
        <h3 className="text-md font-bold text-[var(--primaryColor)] mb-2">{name}</h3>
        <div className="relative flex items-center">
          <FiStar className="text-yellow-500 text-sm" />
          <FiStar className="text-yellow-500 text-sm" />
          <FiStar className="text-yellow-500 text-sm" />
          <FiStar className="text-yellow-500 text-sm" />
          <FiStar className="text-gray-300 text-sm" />
          <p className="text-sm ml-2">{rating} ({reviews} reviews)</p>
        </div>
        <div className="flex items-center justify-between mt-1 mb-3">
          <p className="price text-lg font-bold">${price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="bg-[var(--primaryColor)] px-2 py-2 rounded-full hover:bg-purple-900 transition"
            title="Add to cart"
          >
            <HiOutlineShoppingBag className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
