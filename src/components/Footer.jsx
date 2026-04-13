import { FaFacebookF, FaXTwitter, FaPinterestP, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdLocalShipping, MdSupportAgent, MdPayment } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import footerimage1 from "../assets/footer1.avif";
import footerimage2 from "../assets/footer2.avif";

export default function Footer() {
  return (
    <footer className="font-family mt-15 mx-45">
  <section className="mb-20">
        <div className=" grid grid-cols-3 gap-4 mt-40 mx-45" >
          <div>
            <img src={footerimage1} alt=""  />
          </div>
          <div className="mt-15 text-center">
            <h2 className="text-3xl font-bold mb-5">
              Get Your Daily Needs From Our <br /> KachaBazar Store
            </h2>
            <p className="text-lg">
              There are many products you will find in our shop, Choose{" "}
              your daily necessary product from our KachaBazar shop and {" "}
              get some special offers.
            </p>
            <div className="flex justify-center gap-3 ">
            <div className="bg-black text-white p-2 rounded-lg w-50 mt-7 mx-auto"> 
              <p>Availble on thebr
                 Google Play</p>
            </div>
            <div className="bg-black text-white p-2 rounded-lg w-50 mt-7 mx-auto"> 
              <p>Available on the  <br />App Store</p>
            </div>
          </div>
          </div>
          <div>
            <img src={footerimage2} alt="" className="h-100 w-150" />
          </div>
        </div>
</section>

      <div className="grid grid-cols-4 border border-gray-200 mx-10 rounded-lg">
        <div className="flex items-center justify-center gap-3 p-4 border-r border-gray-200">
          <MdLocalShipping className="text-blue-500 text-2xl" />
          <span className="text-sm font-medium">Free Shipping From €500.00</span>
        </div>
        <div className="flex items-center justify-center gap-3 p-4 border-r border-gray-200">
          <MdSupportAgent className="text-blue-500 text-2xl" />
          <span className="text-sm font-medium">Support 24/7 At Anytime</span>
        </div>
        <div className="flex items-center justify-center gap-3 p-4 border-r border-gray-200">
          <MdPayment className="text-blue-500 text-2xl" />
          <span className="text-sm font-medium">Secure Payment Totally Safe</span>
        </div>
        <div className="flex items-center justify-center gap-3 p-4">
          <RiDiscountPercentFill className="text-blue-500 text-2xl" />
          <span className="text-sm font-medium">Latest Offer Upto 20% Off</span>
        </div>
      </div>

        <hr className="text-gray-200 mt-15" />

      {/* Main Footer */}
      <div className="grid grid-cols-4 mx-10 mt-10 pb-10 gap-8">

        {/* Company */}
        <div>
          <h3 className="font-bold text-base mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">About Us</li>
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">Contact Us</li>
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">Careers</li>
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">Latest News</li>
          </ul>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="font-bold text-base mb-4">Latest News</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="text-[var(--primaryColor)] cursor-pointer">Fish & Meat</li>
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">Soft Drink</li>
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">Milk & Dairy</li>
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">Beauty & Health</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-bold text-base mb-4">My Account</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">Dashboard</li>
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">My Orders</li>
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">Recent Orders</li>
            <li className="hover:text-[var(--primaryColor)] cursor-pointer">Update Profile</li>
          </ul>
        </div>

        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-green-500 text-white p-2 rounded-lg text-2xl"><HiOutlineShoppingBag /></div>
            <span className="font-bold text-lg tracking-widest">FATMA<br/>BAZAR</span>
          </div>
          <p className="text-sm text-gray-500">987 Andre Plain Suite High Street 838, Lake Hestertown, USA</p>
          <p className="text-sm text-gray-500 mt-1">Tel : 02.356.1666</p>
          <p className="text-sm text-gray-500 mt-1">Email : ccruidk@test.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 mx-10 rounded-xl px-8 py-5 flex items-center justify-between">

        {/* Social Icons */}
        <div>
          <p className="font-bold text-sm mb-3">Follow Us</p>
          <div className="flex gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:opacity-80">
              <FaFacebookF size={14} />
            </div>
            <div className="bg-black text-white p-2 rounded-full cursor-pointer hover:opacity-80">
              <FaXTwitter size={14} />
            </div>
            <div className="bg-red-500 text-white p-2 rounded-full cursor-pointer hover:opacity-80">
              <FaPinterestP size={14} />
            </div>
            <div className="bg-blue-700 text-white p-2 rounded-full cursor-pointer hover:opacity-80">
              <FaLinkedinIn size={14} />
            </div>
            <div className="bg-green-500 text-white p-2 rounded-full cursor-pointer hover:opacity-80">
              <FaWhatsapp size={14} />
            </div>
          </div>
        </div>

        {/* Call Us */}
        <div className="text-center">
          <p className="text-sm font-medium text-gray-600">Call Us</p>
          <p className="text-[var(--primaryColor)] font-bold text-lg">+6599887766</p>
        </div>

        {/* Payment Methods */}
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-5" /> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-7" />
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Maestro_card_logo.svg" alt="Maestro" className="h-6" /> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6" />
        </div>

      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 py-5">
        Copyright 2026 @ amdani bazar, All rights reserved.
      </p>

    </footer>
  );
}