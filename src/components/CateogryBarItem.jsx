import cookingIcon from "../assets/image_1.jpg";

export default function CateogryBarItem ({icon,title} ) {


    return (
      <>

      <div className="rounded-3xl bg-gray-100 border border-gray-300 min-w-30  flex justify-center items-center gap-x-1 p-2  ">
        <img src={icon} alt="" className="w-5" />
         <span className="text-xs text-[var(--primaryColor)] font-bold ">{title}</span>
      </div>
     
      </>

    )  ;








}