
// import { useState } from "react";
// import { FiChevronDown } from "react-icons/fi";


// import cookingIcon from "../assets/image_1.jpg";
// import biscuitIcon from "../assets/image_16.jpg";
// import householdIcon from "../assets/image_3.jpg";
// import petIcon from "../assets/image_18.jpg";
// import beautyIcon from "../assets/image_5.jpg";
// import jamIcon from "../assets/image_6.jpg";
// import milkIcon from "../assets/image_7.jpg";
// import drinksIcon from "../assets/image_16.jpg";
// import breakfastIcon from "../assets/image_9.jpg";

// export default function NavBar() {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState("Categories");

//   const options = [
//     { name: "Cooking", icon: cookingIcon },
//     { name: "Biscuits & Cakes", icon: biscuitIcon },
//     { name: "Household Tools", icon: householdIcon },
//     { name: "Pet Care", icon: petIcon },
//     { name: "Beauty & Healths", icon: beautyIcon },
//     { name: "Jam & Jelly", icon: jamIcon },
//     { name: "Milk & Dairy", icon: milkIcon },
//     { name: "Drinks", icon: drinksIcon },
//     { name: "Breakfast", icon: breakfastIcon },
//   ];

//   return (
//     <>
//       <nav className="mt-3">
//         <ul className="flex gap-10 xl:px-60 md:px-10 font-inter font-bold items-center">
          
//           {/* Custom Select */}
//           <li className="relative">
            
//             {/* Selected */}
//             <div
//               onClick={() => setOpen(!open)}
//               className="flex items-center justify-between  bg-white text-gray-700 px-4 py-2  rounded border cursor-pointer w-56 hover:border-[var(--primaryColor)] transition"
//             >
//               <span>{selected}</span>
//               <span className="text-sm"> < FiChevronDown  className="text-lg "/> </span>
//             </div>

//             {/* Dropdown */}
//             {open && (
//               <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
//                 {options.map((item, index) => (
//                   <li
//                     key={index}
//                     onClick={() => {
//                       setSelected(item.name);
//                       setOpen(false);
//                     }}
//                     className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-purple-100  hover:text-[var(--white)] cursor-pointer transition"
//                   >
//                     <img
//                       src={item.icon}
//                       alt={item.name}
//                       className="w-5 h-5 object-cover rounded"
//                     />
//                     <span>{item.name}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li className="cursor-pointer hover:text-[var(--primaryColor)] transition">
//             About US
//           </li>
//           <li className="cursor-pointer hover:text-[var(--primaryColor)] transition">
//             Contact Us
//           </li>
//           <li className="cursor-pointer hover:text-[var(--primaryColor)] transition">
//             Pages
//           </li>
//         </ul>
//       </nav>

//       <hr className="mt-4 text-gray-400" />
//     </>
//   );
// }





import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import cookingIcon from "../assets/image_1.jpg";
import biscuitIcon from "../assets/image_16.jpg";
import householdIcon from "../assets/image_3.jpg";
import petIcon from "../assets/image_18.jpg";
import beautyIcon from "../assets/image_5.jpg";
import jamIcon from "../assets/image_6.jpg";
import milkIcon from "../assets/image_7.jpg";
import drinksIcon from "../assets/image_16.jpg";
import breakfastIcon from "../assets/image_9.jpg";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Categories");

  const options = [
    { name: "Cooking", icon: cookingIcon },
    { name: "Biscuits & Cakes", icon: biscuitIcon },
    { name: "Household Tools", icon: householdIcon },
    { name: "Pet Care", icon: petIcon },
    { name: "Beauty & Healths", icon: beautyIcon },
    { name: "Jam & Jelly", icon: jamIcon },
    { name: "Milk & Dairy", icon: milkIcon },
    { name: "Drinks", icon: drinksIcon },
    { name: "Breakfast", icon: breakfastIcon },
  ];

  const navLinkClass = ({ isActive }) =>
    `cursor-pointer transition ${isActive ? "text-[var(--primaryColor)]" : "hover:text-[var(--primaryColor)]"}`;

  return (
    <>
      <nav className="mt-3">
        <ul className="flex gap-10 xl:px-60 md:px-10 font-inter font-bold items-center">

          <li className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between bg-white text-gray-700 px-4 py-2 rounded border cursor-pointer w-56 hover:border-[var(--primaryColor)] transition"
            >
              <span>{selected}</span>
              <FiChevronDown className="text-lg" />
            </div>

            {open && (
              <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                {options.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => { setSelected(item.name); setOpen(false); }}
                    className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-purple-100 cursor-pointer transition"
                  >
                    <img src={item.icon} alt={item.name} className="w-5 h-5 object-cover rounded" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/products" className={navLinkClass}>Products</NavLink></li>
          <li><NavLink to="/cart" className={navLinkClass}>Cart</NavLink></li>
          <li className="cursor-pointer hover:text-[var(--primaryColor)] transition">About Us</li>
          <li className="cursor-pointer hover:text-[var(--primaryColor)] transition">Contact Us</li>
        </ul>
      </nav>
      <hr className="mt-4 text-gray-400" />
    </>
  );
}