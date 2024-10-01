// import React from "react";
"use client";
import Link from "next/link";
import { FaBagShopping, FaArrowRightLong, FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  const customerSupport = {
    phone: "(629) 555-0129",
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
    email: "info@kinbo.com",
  };
  const categories = ["Computer & Laptop", "SmartPhone", "Headphone"];
  const accessories = ["Camera & Photo", "TV & Homes"];
  const quicklinks = [
    "Shop Product",
    "Shopping Cart",
    "Wishlist",
    "Compare",
    "Track Order",
    "Customer Help",
    "About Us",
  ];
  // className="flex flex-col lg:flex-row  lg:justify-between  py-16"
  return (
    <section className="text-white public-sans container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-4 py-16">
        <div className="">
          <div className="flex items-center gap-2 text-white font-bold text-3xl">
            <FaBagShopping className="text-yellow-500" />
            <span>MStore</span>
          </div>
          <div className="space-y-2 mt-4 public-sans">
            <p className="text-[#77878F]">Customer Support</p>
            <h3>{customerSupport.phone}</h3>
            <h3 className="max-w-[248px] text-[#77878F]">
              {customerSupport.address}
            </h3>
            <h3 className="">{customerSupport.email}</h3>
          </div>
        </div>
        <div>
          <h1 className="uppercase">Top Category</h1>
          <div className="mt-4">
            <ul className="text-[#77878F] space-y-3">
              {categories.map((product, idx) => (
                <li key={idx}>{product}</li>
              ))}
            </ul>

            <div>
              <div className="flex items-center my-3">
                <div className="border-t-2 border-yellow-400 h-0 w-[26px] mr-2"></div>
                <p>Accessories</p>
              </div>
              <ul className="text-[#77878F] space-y-3">
                {accessories.map((accessorie, idx) => (
                  <li key={idx}>{accessorie}</li>
                ))}
              </ul>
              <Link href={"/"}>
                <div className="flex items-center gap-3 text-yellow-500 py-2 text-xl">
                  <h1>Browse All Product</h1>
                  <FaArrowRightLong />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="uppercase">Quick Links</h1>
          <ul className="text-[#77878F] space-y-3 mt-4">
            {quicklinks.map((link, idx) => (
              <li key={idx}>
                <Link href={"/"}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="uppercase">Download App</h1>
          <div className="mt-4 space-y-5">
            <div className="flex gap-4 max-w-[176px] max-h-[70px] p-4 bg-[#303639] rounded-md">
              <div className="text-4xl">
                <IoLogoGooglePlaystore />
              </div>
              <div>
                <p className="text-xs">Get it on</p>
                <h1 className="text-base">Google Play</h1>
              </div>
            </div>

            <div className="flex gap-4 p-4 max-w-[176px] max-h-[70px] bg-[#303639] rounded-md">
              <div className="text-4xl">
                <FaApple />
              </div>
              <div>
                <p className="text-xs">Get it on</p>
                <h1 className="text-base">Apple Store</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="uppercase">Popular Tag</h1>
          <div className="mt-4 max-w-[312px]">
            <div className="flex flex-wrap gap-4">
              <button className="category">Game</button>
              <button className="category">iPhone</button>
              <button className="category">TV</button>
              <button className="category">Asus Laptops</button>
              <button className="category">Macbook</button>
              <button className="category">SSD</button>
              <button className="category">Graphics Card</button>
              <button className="category">Power Bank</button>
              <button className="category">Smart TV</button>
              <button className="category">Speaker</button>
              <button className="category">Tablet</button>
              <button className="category">Microwave</button>
              <button className="category">Samsung</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
