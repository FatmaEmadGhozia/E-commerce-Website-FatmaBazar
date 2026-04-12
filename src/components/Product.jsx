import Letuuce from "../assets/image_27.jpg";
export default function Product() {
  return (
    <>
      <div>
        <div className="h-[70%]">
          <img src={Letuuce} alt="Lettuce" className="h-[100%]" />
        </div>
        <div className="h-[30%]">
          <h3>Lettuce</h3>
          <p className="price">$2.99</p>
        </div>
      </div>
    </>
  );
}
