export default function NavBar() {
  return (
    <>
      <nav className="mt-3">
      

      <ul className="flex gap-10 px-60 font-inter font-bold ">
        <li>
          <select  >
            <option value="#" disabled>Categories</option>
          
            <option value="Cooking">Cooking</option>
          <option value="Biscuits & Cakes"> Biscuits & Cakes</option>
          <option value="Household Tools">Household Tools</option>
          <option value="Pet Care">Pet Care</option>
            <option value="Beauty & Healths">Beauty & Healths</option>
          <option value="Jam & Jelly">Jam & Jelly</option>
          <option value="Milk & Dairy">Milk & Dairy</option>
          <option value="Drinks">Drinks</option>
          <option value="Breakfast">Breakfast</option>
          </select>
        </li>
        <li>About US</li>
        <li>Contact Us</li>
        <li>Pages</li>
      </ul>








      </nav>

      <hr  className="mt-4 text-gray-400"/>
    </>
  );
}
