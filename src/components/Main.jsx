import backgroundImage from "../assets/image_60.jpg";
import Product from "./Product";
import { popularProducts } from "../data/data";
import { HouseholdProducts } from "../data/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

import { categories } from "../data/data";
import Category from "./Category";

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + HouseholdProducts.length) % HouseholdProducts.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HouseholdProducts.length);
  };

  const visibleProducts = HouseholdProducts.slice(
    currentIndex,
    currentIndex + 6,
  ).concat(
    HouseholdProducts.slice(
      0,
      Math.max(0, currentIndex + 6 - HouseholdProducts.length),
    ),
  );

  return (
    <>
      <div className="grid grid-cols-[2fr_1.5fr] px-25 mt-7 gap-3 font-inter lg:grid-cols-2  md:grid-cols-1">
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
            <button className="bg-[var(--primaryColor)] hover:bg-purple-900 text-white font-bold py-2 px-5 rounded-md">
              Buy Now
            </button>
          </div>
        }
        <div className="  rounded-lg font-family border border-[var(--primaryColor)] ">
          <div className="w-full bg-purple-50 h-15 text-center p-4 ">
            <p className="text-md font-bold">
              Latest Super Discount Active Coupon Code
            </p>
          </div>
          <div className=" flex justify-between mt-4 bg-white shadow-md p-5 mx-3">
            <div>
              <p>
                <span className="text-xl mr-3 text-red-500">$50 </span>OF{" "}
                <span className="bg-red-200 rounded-lg text-red-500 p-2 font-bold ml-2">
                  inactive
                </span>
              </p>
              <p className="mt-2">ttgt</p>
              <p className="mt-2">
                <span className="bg-red-500 text-white p-2 font-bold">00</span>{" "}
                :{" "}
                <span className="bg-red-500 text-white p-2 font-bold">00</span>{" "}
                :{" "}
                <span className="bg-red-500 text-white p-2 font-bold">00</span>{" "}
                :{" "}
                <span className="bg-red-500 text-white p-2 font-bold">00</span>
              </p>
            </div>
            <div className="">
              <div className="bg-purple-100 w-full text-[var(--primaryColor)] p-2 w-25 text-center rounded-lg font-bold border-dotted">
                <p>FFFFFF</p>
              </div>
              <div>
                <p className="text-sm mt-2">
                  * This coupon apply when <br />
                  shopping more then <br />
                  $100.00
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-between mt-4 bg-white shadow-md p-5 mx-3">
            <div>
              <p>
                <span className="text-xl mr-3 text-purple-500">$100 </span>OF{" "}
                <span className="bg-purple-200 rounded-lg text-purple-500 p-2 font-bold ml-2">
                  active
                </span>
              </p>
              <p className="mt-2">Eid 2026</p>
              <p className="mt-2">
                <span className="bg-purple-500 text-white p-2 font-bold">
                  00
                </span>{" "}
                :{" "}
                <span className="bg-purple-500 text-white p-2 font-bold">
                  00
                </span>{" "}
                :{" "}
                <span className="bg-purple-500 text-white p-2 font-bold">
                  00
                </span>{" "}
                :{" "}
                <span className="bg-purple-500 text-white p-2 font-bold">
                  00
                </span>
              </p>
            </div>
            <div className="">
              <div className="bg-purple-100 w-full text-[var(--primaryColor)] p-2 w-25 text-center rounded-lg font-bold border-dotted">
                <p>FFFFFF</p>
              </div>
              <div>
                <p className="text-sm mt-2">
                  * This coupon apply when <br />
                  shopping more then <br />
                  $1000.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description bg-purple-50 border border-gray-200 mx-25 mt-7 rounded-lg flex items-center justify-between p-6 font-inter">
        <div className="pl-8 ">
          <h2 className="text-[var(--primaryColor)] font-bold text-2xl mb-1">
            100% Natural Quality Organic Product
          </h2>
          <p className="text-gray-600 text-lg">
            See Our latest discounted products from here and get a special
            discount product
          </p>
        </div>
        <div>
          <button className="bg-[var(--primaryColor)]   hover:bg-purple-900 text-white font-bold py-3 px-5 rounded-2xl w-30">
            Buy Now{" "}
          </button>
        </div>
      </div>

      <section className="categories bg-gray-100  mt-7 font-inter font-family  p-15 mx-25">
        <h1 className="text-center text-3xl mb-2">Featured Categories</h1>
        <p className="text-center text-gray-500 text-lg">
          Choose your necessary products from this feature categories.
        </p>

        <div className="grid  -gap-y-2 gap-x-3 mt-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ">
          {categories.map((cat) => {
            return (
              <Category title={cat.title} icon={cat.icon} items={cat.items} />
            );
          })}
        </div>
      </section>
      <section className="popular-products  mt-7 font-inter  p-15 font-family ">
        <h1 className="text-center text-3xl mb-2">
          Popular Products for Daily Shopping
        </h1>
        <p className="text-center text-gray-500 text-md">
          See all our popular products in this week. You can choose your daily
          needs <br />
          products from this list and get some special offer with free shipping.
        </p>
        {/* <div className=" mx-20 products mt-10 grid  gap-y-10 gap-x-30 lg:grid-cols-6 md:grid-cols-4  sm:grid-cols-3 ">
          {popularProducts.map((product) => {
            return (
              <Product
                id ={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                reviews={product.reviews}
                discount={product.discount}
                sold={product.sold}
                total={product.total}
                image={product.image}
              />
            );
          })}
        </div> */}
        <div className="products mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4  ">
          {popularProducts.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                reviews={product.reviews}
                discount={product.discount}
                sold={product.sold}
                total={product.total}
                image={product.image}
              />
            );
          })}
        </div>
      </section>

      <section className="mt-20 font-family mx-43 ">
        <div className="description flex items-center justify-between ">
          <div>
            <h2 className="text-2xl font-bold  mb-2 ">Household Tools</h2>
            <p className="text-sm text-gray-600">
              Globally build competitive niches whereas empowered collaboration
              and idea-sharing. Interactively maximize mission-critical
              convergence without empowered e-business.
            </p>
          </div>
          <div>
            <button className="bg-[var(--primaryColor)] text-sm text-white p-3 rounded-lg font-bold hover:bg-purple-900 w-40">
              View All Products
            </button>
          </div>
        </div>
        <div className=" relative grid grid-cols-6 gap-x-5  mt-15   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <FiChevronLeft
            className=" absolute  top-[40%] -left-1 text-2xl  text-gray-500 cursor-pointer bg-white  z-10 rounded-full "
            onClick={handlePrev}
          />
          <FiChevronRight
            className="absolute top-[40%] right-3 text-3xl text-gray-500 bg-red-100 bg-white cursor-pointer z-10"
            onClick={handleNext}
          />

          {visibleProducts.map((product) => {
            return (
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                discount={product.discount}
                image={product.image}
              />
            );
          })}
        </div>
      </section>

      <hr className="text-gray-200 mt-15" />

      <section className=" mt-30 font-family mx-43 ">
        <div className="description flex items-center justify-between ">
          <div>
            <h2 className="text-2xl font-bold  mb-2 ">Fruits & Vegetable</h2>
            <p className="text-xsm text-gray-600">
              Quickly unleash resource-leveling niche markets rather than
              prospective leadership skills.
              <br />
              Enthusiastically develop resource maximizing web services after
              client-centric portals.
            </p>
          </div>
          <div>
            <button className="bg-[var(--primaryColor)] text-sm text-white p-3 rounded-lg font-bold hover:bg-purple-900 w-40">
              View All Products
            </button>
          </div>
        </div>
        <div className=" relative grid grid-cols-6 -gap-x-5 mt-15">
          <FiChevronLeft
            className=" absolute  top-[40%] -left-1 text-3xl text-gray-500 cursor-pointer bg-white  z-10 "
            onClick={handlePrev}
          />
          <FiChevronRight
            className="absolute top-[40%] right-3 text-3xl text-gray-500 bg-red-100 bg-white cursor-pointer z-10"
            onClick={handleNext}
          />

          {visibleProducts.map((product) => {
            return (
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                discount={product.discount}
                image={product.image}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
