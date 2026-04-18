
// import Logo from '../assets/logo-light.svg';
// import { FiSearch } from "react-icons/fi";
// import { FiShoppingCart ,FiBell ,  FiUser } from "react-icons/fi";
// import { Link } from 'react-router-dom';
// import CartPopup from './CartPopup';



//  export default function Header() {


//   return (
//    <>
     
//      <div className=" xl:px-60 lg:px-10 md:px-10 header w-full h-18 bg-[var(--primaryColor)] flex items-center gap-20  ">
//         <div className="Logo ">
           
        
//            <Link to="/"> <img src={Logo} alt="ShopEase Logo" className='w-30 h-30'/> </Link>
//         </div>
//         <div className=" relative search w-100 ">
//             <input type="text" placeholder="Search for products..."  className='  bg-slate-50 h-11 rounded-md w-200 px-5 border border-gray-300'
               
//             />
//             <FiSearch className='absolute -right-95 top-1/2 -translate-y-1/2 text-gray-400 text-gray-600 text-md'/>
              
//         </div>
//         <div className="icons ml-auto flex text-2xl gap-8">
//           <FiShoppingCart className='text-white' />
//           <FiBell className='text-white'/>
//           <FiUser className='text-white'/>
            
//         </div>
//      </div>
   
   
   
   
   
   
   
   
   
   
//    </>



//   );




// }







import Logo from '../assets/logo-light.svg';
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart, FiBell, FiUser } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  }

  return (
    <div className="xl:px-60 lg:px-10 md:px-10 header w-full h-18 bg-[var(--primaryColor)] flex items-center gap-20">
      <div className="Logo">
        <Link to="/"><img src={Logo} alt="ShopEase Logo" className='w-30 h-30' /></Link>
      </div>

      <form onSubmit={handleSearch} className="relative search w-100">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-slate-50 h-11 rounded-md w-200 px-5 border border-gray-300"
        />
        <button type="submit">
          <FiSearch className='absolute -right-95 top-1/2 -translate-y-1/2 text-gray-600 text-md' />
        </button>
      </form>

      <div className="icons ml-auto flex text-2xl gap-8 items-center">
        <Link to="/cart" className="relative">
          <FiShoppingCart className='text-white' />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </Link>
        <FiBell className='text-white cursor-pointer' />
        <FiUser className='text-white cursor-pointer' />
      </div>
    </div>
  );
}
