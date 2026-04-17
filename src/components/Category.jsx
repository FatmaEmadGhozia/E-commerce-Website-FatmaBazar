import cookingIcon from "../assets/image_1.jpg";
import { useNavigate } from "react-router-dom";


export default function Category({title,icon,items,id}) {
  const navigate = useNavigate();
  return (
    <>
      <div 
      className="category flex justify-center items-center gap-5 bg-white p-5 pt-8 rounded-lg h-35 border border-gray-100 hover:border-[var(--primaryColor)] shadow-md cursor-pointer font-family  mt-12 " 
      onClick = {() => navigate(`/cateogries/${id}`)}
      >
        <div className=" flex ">
          <img src={icon} alt={title} className="w-10 h-10" />
        </div>

        <div>
          <h3 className="mb-2 hover:text-[#f1c40f] text-gray-700">{title}</h3>
          <ul>
              {
                  items.map( item => {
              return (
                        
                  
            <li className="flex">
                 <svg
                className="w-3 h-3 text-gray-600 mr-1 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
                 </svg>
                <span className="text-sm text-gray-500 lg:text-xsm ">{item}</span>
                     
                 </li>
              )})

                    }
            
           
          </ul>
        </div>
      </div>
    </>
  );
}
