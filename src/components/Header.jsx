
import Logo from '../assets/logo-light.svg';
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart ,FiBell ,  FiUser } from "react-icons/fi";



 export default function Header() {
  return (
   <>
     
     <div className=" xl:px-60 lg:px-10 md:px-10 header w-full h-18 bg-[var(--primaryColor)] flex items-center gap-20  ">
        <div className="Logo ">
           
        
            <img src={Logo} alt="ShopEase Logo" className='w-30 h-30'/>
        </div>
        <div className=" relative search w-100 ">
            <input type="text" placeholder="Search for products..."  className='  bg-slate-50 h-11 rounded-md w-200 px-5 border border-gray-300'
               
            />
            <FiSearch className='absolute -right-95 top-1/2 -translate-y-1/2 text-gray-400 text-gray-600 text-md'/>
              
        </div>
        <div className="icons ml-auto flex text-2xl gap-8">
          <FiShoppingCart className='text-white'/>
          <FiBell className='text-white'/>
          <FiUser className='text-white'/>
            
        </div>
     </div>
   
   
   
   
   
   
   
   
   
   
   </>



  );




}