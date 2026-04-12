import backgroundImage from "../assets/image_60.jpg";
import Product from "./Product";


import { categories } from "../data/data";
import Category from "./Category";

export default function Main() {
  return (
    <>
      <div className="grid grid-cols-[1.9fr_1fr] px-60 mt-7 gap-20 font-inter">
        {
          <div
            className=" h-100 rounded  px-15 pt-25"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <h1 className=" text-4xl">
              Best Different Types of <br /> Groccrey Store
            </h1>
            <p className="mt-3 mb-5 text-gray-600">
              Discover our wide range of high-quality products <br /> across
              various categories.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-md">
              Buy Now
            </button>
          </div>
        }
        <div className=" bg-red-500"></div>
      </div>

      <div className="description bg-blue-100 mx-60 mt-7 rounded-lg flex items-center justify-between p-6 font-inter">
        <div className="pl-8 ">
          <h2 className="text-blue-500 font-bold text-2xl mb-1">
            100% Natural Quality Organic Product
          </h2>
          <p className="text-gray-600 text-lg">
            See Our latest discounted products from here and get a special
            discount product
          </p>
        </div>
        <div>
          <button className="bg-blue-500   hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-2xl w-30">
            Buy Now{" "}
          </button>
        </div>
      </div>

      <section className="categories bg-gray-100  mt-7 font-inter h-150 p-15">
        <h1 className="text-center text-3xl mb-2">Featured Categories</h1>
        <p className="text-center text-gray-500 text-lg">
          Choose your necessary products from this feature categories.
        </p>

        <div className="grid  grid-cols-5   mx-45">
          {categories.map((cat) => {
            return (
              <Category title={cat.title} icon={cat.icon} items={cat.items} />
            );
          })}
        </div>
      </section>
      <section className="popular-products  bg-gray-100 mt-7 font-inter h-150 p-15">
        <h1 className="text-center text-3xl mb-2">Popular Products for Daily Shopping</h1>
        <p className="text-center text-gray-500 text-md">
          See all our popular products in this week. You can choose your daily
          needs <br />
          products from this list and get some special offer with free shipping.
        </p>
        <div className="products">
          <Product />

        </div>
      </section>
    </>
  );
}
