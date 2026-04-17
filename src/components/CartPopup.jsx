import { useState } from "react"
import { useState } from "react";

export default function CartPopup ()  {
    const [isOpen , setOpen ] = useState(true);
  return (
    <>
    {
       isOpen && (
       <div className="fixed inset-0 z-100 bg-black/50 ">
        <div className="bg-white w-[30%] absolute right-0 top-0 h-full">

           <h1>cart</h1>
           <p>your products</p>
           <button type="button">checkout</button>




        </div>


     </div>
       )
}
    </>
  )






}