// import cookingIcon from "../assets/image_1.jpg";
// import { useState } from "react";

// export default function NavBar() {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState("Categories");

//   const options = [
//     "Cooking",
//     "Biscuits & Cakes",
//     "Household Tools",
//     "Pet Care",
//     "Beauty & Healths",
//     "Jam & Jelly",
//     "Milk & Dairy",
//     "Drinks",
//     "Breakfast",
//   ];   
//   const iconsOptions = [
//     cookingIcon
    
//   ];

//   return (
//     <>
//       <nav className="mt-3">
//         <ul className="flex gap-10 px-60 font-inter font-bold items-center">
          
//           {/* Custom Select */}
//           <li className="relative">
            
//             {/* Selected */}
//             <div
//               onClick={() => setOpen(!open)}
//               className="bg-white text-gray-700 px-3 py-1 rounded cursor-pointer border hover:border-blue-500"
//             >
//               {selected}
//             </div>

//             {/* Dropdown */}
//             {open && (
//               <ul className="absolute left-0 mt-2 w-100 bg-white border rounded shadow-lg z-50">
//                 {options.map((item, index) => (
//                   <li
//                     key={index}
//                     onClick={() => {
//                       setSelected(item);
//                       setOpen(false);
//                     }}
//                     className="px-3 py-3 border-b border-[var(--border)]  hover:bg-white hover:text-[var(--primary)] cursor-pointer"
//                   >
//                     {iconsOptions[index] && (
//                       <img src={iconsOptions[index]} alt={item} className="w-6 h-6 mr-2" />
//                     )}
//                     <span className=" ">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li>About US</li>
//           <li>Contact Us</li>
//           <li>Pages</li>
//         </ul>
//       </nav>

//       <hr className="mt-4 text-gray-400" />
//     </>
//   );
// }


import { useState } from "react";


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

  return (
    <>
      <nav className="mt-3">
        <ul className="flex gap-10 px-60 font-inter font-bold items-center">
          
          {/* Custom Select */}
          <li className="relative">
            
            {/* Selected */}
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between gap-2 bg-white text-gray-700 px-4 py-2 rounded border cursor-pointer w-56 hover:border-[var(--primary)]"
            >
              <span>{selected}</span>
              <span className="text-sm">▼</span>
            </div>

            {/* Dropdown */}
            {open && (
              <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                {options.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelected(item.name);
                      setOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-[var(--secondary)] hover:text-[var(--primary)] cursor-pointer transition"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-5 h-5 object-cover rounded"
                    />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="cursor-pointer hover:text-[var(--primary)] transition">
            About US
          </li>
          <li className="cursor-pointer hover:text-[var(--primary)] transition">
            Contact Us
          </li>
          <li className="cursor-pointer hover:text-[var(--primary)] transition">
            Pages
          </li>
        </ul>
      </nav>

      <hr className="mt-4 text-gray-400" />
    </>
  );
}