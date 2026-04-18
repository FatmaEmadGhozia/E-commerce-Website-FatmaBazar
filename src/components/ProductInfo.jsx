// import flour from "../assets/flour.avif";
// import { FiChevronLeft } from "react-icons/fi";
// import Footer from "./Footer";
// import { FiStar } from "react-icons/fi";
// import { FiPlus, FiMinus, FiPhone } from "react-icons/fi";
// import { popularProducts } from "../data/data";
// import { useState } from "react";
// import {
//   FiTruck,
//   FiHome,
//   FiDollarSign,
//   FiRefreshCw,
//   FiSlash,
//   FiSun,
//   FiMapPin,
// } from "react-icons/fi";
// import {
//   FaFacebookF,
//   FaXTwitter,
//   FaPinterestP,
//   FaLinkedinIn,
//   FaWhatsapp,
// } from "react-icons/fa6";

//  export var cartItems = [];
// export default function ProuctInfo({ id }) {
//   const product = popularProducts.find((p) => p.id == Number(id));
//   const [Quantity, setQauntity] = useState(1);



//   function handlePlus() {
//     setQauntity((prev) => prev + 1);
//   }
//   function handleMinus() {
//     setQauntity((prev) => prev > 1 ? prev - 1 : 1);
//   }
//   return (
//     <>
//       <div className="mx-60  mt-15 grid grid-col-1 gap-6 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:cols-1 ">
//         <div className=" w-[100%]">
//           <p className="mb-5">
//             {" "}
//             <span>Home </span> <FiChevronLeft className="inline" />
//             <span>
//               {product.name}
//             </span> <FiChevronLeft className="inline" />{" "}
//             <span>Fresh flour</span>
//           </p>
//           <div className=" bg-gray-100 flex items-center justify-center border border-gray-300 rounded-lg h-170 w-[90%] shadow-sm">
//             <img
//               src={product.image}
//               alt=""
//               className="h-150  rounded-lg text-center "
//             />
//             <hr className="bg-gray-200 mt-4" />
//           </div>

//           <div className="flex gap-6 mt-5">
//             <p className=" text-md py-5 px-2">Customer Reviews</p>
//             <p className=" text-mdfont-bold border-b-2 border-black  py-5 px-2">
//               Description
//             </p>
//           </div>
//           <hr className=" mt-0 w-[90%] text-gray-200" />

//           <div className="product-description mt-10">
//             <p className="w-[90%]">
//               {" "}
//               flour, finely ground cereal grains or other starchy portions of
//               plants, used in various food products and as a basic ingredient of
//               baked goods. flour made from wheat grains is the most satisfactory
//               for baked products that require spongy structure. ... The outer
//               layers and internal structures of a kernel of wheat.
//             </p>
//           </div>
//         </div>

//         <div className="px-5  ">
//           <p className="mt-10">
//             <span className="text-gray-700 font-bold mb-2">In stock: </span>{" "}
//             <span className="text-green-700 font-bold">545</span>
//           </p>
//           <p className="text-2xl font-bold">{product.name}</p>
//           <div className=" relative Feedback flex mt-3 ">
//             <FiStar className="text-yellow-500 text-sm" />
//             <FiStar className="text-yellow-500 text-sm" />
//             <FiStar className="text-yellow-500 text-sm" />
//             <FiStar className="text-yellow-500 text-sm" />
//             <FiStar className="text-gray-300 text-sm" />
//             <p className="text-sm ml-3 -mt-1 text-gray-800 ">
//               {" "}
//               {product.rating} ({product.reviews} reviews)
//             </p>
//           </div>
//           <p className="price  mt-2 text-xl  font-bold mb-8 ">
//             ${product.price.toFixed(2)}
//           </p>

//           <div className="flex gap-3">
//             <div className="flex border border-gray-300 w-[50%] h-12 text-md items-center rounded-md overflow-hidden">
//               <div className="flex justify-center items-center border-r border-gray-300 w-1/4 h-full hover:bg-gray-100">
//                 <FiMinus onClick={ handleMinus} />
//               </div>

//               <div className="flex justify-center items-center w-1/2 font-bold text-lg">
//                 {Quantity}
//               </div>

//               <div className="flex justify-center items-center border-l border-gray-300 w-1/4 h-full hover:bg-gray-100">
//                 <FiPlus onClick={ handlePlus} />
//               </div>
//             </div>
//             <div className="inline-block w-[50%]">
//               <button className="bg-[var(--primaryColor)] px-5 h-12 text-white font-bold w-full rounded-md"
//                  onClick={()=> {
//                   cartItems.push({id, Quantity});
//                   console.log(cartItems);
                  
//                  }}>
//                 Add To Cart{" "}
//               </button>
//             </div>
//           </div>
//           <div className="mt-6">
//             <p className="text-gray-600 font-bold">Category : Flour</p>
//             <p className="mt-2">
//               <FiPhone className="inline mr-2" /> Call Us For Order{" "}
//               <span className="font-bold">019579034</span>
//             </p>
//           </div>
//           <hr className="text-gray-200 mt-6 " />
//           <div className="mt-5">
//             <p className="text-md font-bold mb-5">Highlights</p>
//             <ul className="text-gray-600">
//               <li className="my-3">
//                 <FiTruck className="inline mr-2" /> Free shipping applies to all
//                 orders over shipping €100
//               </li>
//               <li className="my-3">
//                 <FiHome className="inline mr-3" /> Home Delivery within 1 Hour
//               </li>
//               <li className="my-3">
//                 <FiDollarSign className="inline mr-3" /> Cash on Delivery
//                 Available
//               </li>
//               <li className="my-3">
//                 <FiRefreshCw className="inline mr-3" /> 7 Days returns money
//                 back guarantee
//               </li>
//               <li className="my-3">
//                 <FiSlash className="inline mr-3" /> Warranty not available for
//                 this item
//               </li>
//               <li className="my-3">
//                 <FiSun className="inline mr-2" /> Guaranteed 100% organic from
//                 natural products.
//               </li>
//               <li>
//                 <FiMapPin className="inline mr-2" /> Delivery from our pick
//                 point Boho One, Bridge Street West, Middlesbrough, North
//                 Yorkshire, TS2 1AE.
//               </li>
//             </ul>
//           </div>
//           <hr className="text-gray-200 mt-6 " />
//           <div className="socia mt-8 ">
//             <p className="font-bold mb-1">Share your social network</p>
//             <p className="text-gray-600">
//               For get lots of traffic from social network share this product
//             </p>
//             <div className="mt-5">
//               <FaFacebookF className="inline text-gary-500 mr-3 cursor-pointer text-2xl" />
//               <FaXTwitter className="inline text-gray-600  mr-3 cursor-pointer text-2xl" />
//               <FaWhatsapp className="inline text-gray-600  mr-3 cursor-pointer text-2xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }


import { FiChevronLeft } from "react-icons/fi";
import Footer from "./Footer";
import { FiStar } from "react-icons/fi";
import { FiPlus, FiMinus, FiPhone } from "react-icons/fi";
import { allProducts, popularProducts } from "../data/data";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  FiTruck, FiHome, FiDollarSign, FiRefreshCw, FiSlash, FiSun, FiMapPin,
} from "react-icons/fi";
import { FaFacebookF, FaXTwitter, FaPinterestP, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export default function ProductInfo({ id }) {
  console.log(id);
  
  const product = ( id >=1001 && id<1018) ? popularProducts.find((p) => p.id == Number(id)) : allProducts.find((p) => p.id == Number(id)) ;
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) return <p className="p-20 text-center text-gray-500">Product not found.</p>;

  function handlePlus() { setQuantity((prev) => prev + 1); }
  function handleMinus() { setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); }

  function handleAddToCart() {
    addToCart({ ...product, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <>
      <div className="mx-60 mt-15 grid grid-col-1 gap-6 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:cols-1">
        <div className="w-[100%]">
          <p className="mb-5">
            <span>Home </span><FiChevronLeft className="inline" />
            <span>{product.name}</span>
          </p>
          <div className="bg-gray-100 flex items-center justify-center border border-gray-300 rounded-lg h-170 w-[90%] shadow-sm">
            <img src={product.image} alt={product.name} className="h-150 rounded-lg text-center object-contain" />
          </div>
          <div className="flex gap-6 mt-5">
            <p className="text-md py-5 px-2">Customer Reviews</p>
            <p className="text-md font-bold border-b-2 border-black py-5 px-2">Description</p>
          </div>
          <hr className="mt-0 w-[90%] text-gray-200" />
          <div className="product-description mt-10">
            <p className="w-[90%]">
              {product.description || `${product.name} — a high quality product available in our store. Fresh, organic, and carefully selected for your daily needs.`}
            </p>
          </div>
        </div>

        <div className="px-5">
          <p className="mt-10">
            <span className="text-gray-700 font-bold mb-2">In stock: </span>
            <span className="text-green-700 font-bold">{product.stock || 100}</span>
          </p>
          <p className="text-2xl font-bold">{product.name}</p>
          <div className="flex mt-3 items-center gap-1">
            <FiStar className="text-yellow-500 text-sm" />
            <FiStar className="text-yellow-500 text-sm" />
            <FiStar className="text-yellow-500 text-sm" />
            <FiStar className="text-yellow-500 text-sm" />
            <FiStar className="text-gray-300 text-sm" />
            <p className="text-sm ml-2 text-gray-800">{product.rating} ({product.reviews} reviews)</p>
          </div>
          <p className="price mt-2 text-xl font-bold mb-8">${product.price.toFixed(2)}</p>

          <div className="flex gap-3">
            <div className="flex border border-gray-300 w-[50%] h-12 text-md items-center rounded-md overflow-hidden">
              <div className="flex justify-center items-center border-r border-gray-300 w-1/4 h-full hover:bg-gray-100 cursor-pointer">
                <FiMinus onClick={handleMinus} />
              </div>
              <div className="flex justify-center items-center w-1/2 font-bold text-lg">{quantity}</div>
              <div className="flex justify-center items-center border-l border-gray-300 w-1/4 h-full hover:bg-gray-100 cursor-pointer">
                <FiPlus onClick={handlePlus} />
              </div>
            </div>
            <div className="inline-block w-[50%]">
              <button
                className={`px-5 h-12 text-white font-bold w-full rounded-md transition ${added ? 'bg-green-600' : 'bg-[var(--primaryColor)] hover:bg-purple-900'}`}
                onClick={handleAddToCart}
              >
                {added ? '✓ Added to Cart!' : 'Add To Cart'}
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 font-bold">Category: {product.category || 'Grocery'}</p>
            <p className="mt-2"><FiPhone className="inline mr-2" /> Call Us For Order <span className="font-bold">019579034</span></p>
          </div>
          <hr className="text-gray-200 mt-6" />
          <div className="mt-5">
            <p className="text-md font-bold mb-5">Highlights</p>
            <ul className="text-gray-600">
              <li className="my-3"><FiTruck className="inline mr-2" /> Free shipping applies to all orders over €100</li>
              <li className="my-3"><FiHome className="inline mr-3" /> Home Delivery within 1 Hour</li>
              <li className="my-3"><FiDollarSign className="inline mr-3" /> Cash on Delivery Available</li>
              <li className="my-3"><FiRefreshCw className="inline mr-3" /> 7 Days returns money back guarantee</li>
              <li className="my-3"><FiSlash className="inline mr-3" /> Warranty not available for this item</li>
              <li className="my-3"><FiSun className="inline mr-2" /> Guaranteed 100% organic from natural products.</li>
              <li><FiMapPin className="inline mr-2" /> Delivery from our pick point, Bridge Street West, Middlesbrough.</li>
            </ul>
          </div>
          <hr className="text-gray-200 mt-6" />
          <div className="socia mt-8">
            <p className="font-bold mb-1">Share your social network</p>
            <p className="text-gray-600">For get lots of traffic from social network share this product</p>
            <div className="mt-5 flex gap-4">
              <FaFacebookF className="text-gray-500 cursor-pointer text-2xl hover:text-blue-600" />
              <FaXTwitter className="text-gray-600 cursor-pointer text-2xl hover:text-black" />
              <FaWhatsapp className="text-gray-600 cursor-pointer text-2xl hover:text-green-500" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
