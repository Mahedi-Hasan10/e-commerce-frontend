"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const categories = [
  { key: "1", label: "Computer & Laptop" },
  { key: "2", label: "Computer Accessories" },
  { key: "3", label: "SmartPhone", subcategories: [
      { key: "3-1", label: "All", models: ["iPhone", "Samsung", "Realme", "Xiaomi", "Oppo"] },
      { key: "3-2", label: "iPhone", models: ["iPhone 15 Pro", "iPhone 14", "iPhone SE"] },
      { key: "3-3", label: "Samsung", models: ["Galaxy S23", "Galaxy A54", "Galaxy Z Fold 5"] },
    ] 
  },
  { key: "4", label: "Headphone" },
  { key: "5", label: "Mobile Accessories" },
];

const NavigationMenu = () => {
  const [activeCategory, setActiveCategory] = useState("3-1");
  const [activeSubcategory, setActiveSubcategory] = useState("3-1");

  return (
    <div className="relative group">
      {/* Button */}
      <button className="flex items-center gap-2 text-sm font-medium bg-[#F2F4F5] hover:bg-[#FA8232] hover:text-white py-[14px] px-6 rounded-md">
        <span>All Category</span>
        <IoIosArrowDown className="text-base transition-transform group-hover:rotate-180" />
      </button>

      {/* Main Menu */}
      <ul className="absolute top-full left-0 z-50 w-56 border bg-white shadow-lg rounded-md hidden group-hover:block">
        {categories.map((category) => (
          <li
            key={category.key}
            className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${activeCategory === category.key ? "bg-gray-300" : ""}`}
            onMouseEnter={() => setActiveCategory(category.key)}
          >
            {category.label}

            {/* Submenu (for categories with subcategories) */}
            {category.subcategories && activeCategory === category.key && (
              <div className="absolute left-[225px] top-0 p-5 z-50 w-[868px] border flex flex-row gap-5 bg-white shadow-lg rounded-md">
                <ul>
                  {category.subcategories.map((sub) => (
                    <li
                      key={sub.key}
                      onMouseEnter={() => setActiveSubcategory(sub.key)}
                      className={`w-[164px] h-[36px] py-2 px-4 rounded-sm hover:bg-gray-300 cursor-pointer ${activeSubcategory === sub.key ? "bg-gray-400" : ""}`}
                    >
                      {sub.label}
                    </li>
                  ))}
                </ul>

                {/* Dynamic Models List */}
                <div>
                  {category.subcategories.map((sub) =>
                    activeSubcategory === sub.key ? (
                      <ul key={sub.key}>
                        {sub.models.map((model, index) => (
                          <li key={index} className="px-4 py-2">{model}</li>
                        ))}
                      </ul>
                    ) : null
                  )}
                </div>

                {/* Right Side Add bar */}
                <article className="min-w-[312px] flex flex-col items-center p-5 bg-[#F3DE6D]">
                  <Image src="/airbards.png" width={115} height={115} alt="image" />
                  <div className="text-center max-w-[240px] mt-5">
                    <figcaption className="text-3xl font-medium">
                      Xiaomi True Wireless Earbuds
                    </figcaption>
                    <p className="text-[#475156] mt-3">
                      Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-sm">Only For: </p>
                    <div className="bg-white text-sm p-2 rounded-sm">$299 USD</div>
                  </div>
                  <button className="hover:bg-gray-300 mt-5 flex items-center gap-1 bg-[#FA8232] text-white hover:text-[#191C1F] text-sm lg:text-base font-bold px-2 lg:p-3 py-2 rounded-[3px] transition duration-300 ease-in-out">
                    SHOP NOW <FaArrowRightLong />
                  </button>
                </article>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;
