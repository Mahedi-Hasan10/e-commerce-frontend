"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const categories = [
  { key: "1", label: "Computer & Laptop" },
  { key: "2", label: "Computer Accessories" },
  { key: "3", label: "SmartPhone", subcategories: [
      {
        "key": "3-1",
        "label": "All",
        "models": [
          { "name": "iPhone 15 Pro", "image": "/iphone15pro.jfif", "price": "134" },
          { "name": "iPhone 14", "image": "/iphone14.jfif", "price": "194" },
          { "name": "iPhone SE", "image": "/iphoneSE.jfif", "price": "104" },
          { "name": "Galaxy S23", "image": "/galaxyS23.jfif", "price": "220" },
          { "name": "Galaxy A54", "image": "/galaxyA54.jfif", "price": "180" },
          { "name": "Galaxy Z Fold 5", "image": "/galaxyZFold5.jfif", "price": "399" },
          { "name": "Realme GT Neo 5", "image": "/realmeGTNeo5.jfif", "price": "160" },
          { "name": "Realme 11 Pro", "image": "/realme11pro.jfif", "price": "140" },
          { "name": "Realme C55", "image": "/realmeC55.jfif", "price": "120" },
          { "name": "Xiaomi 13 Pro", "image": "/xiaomi13pro.jfif", "price": "210" },
          { "name": "Redmi Note 12", "image": "/redminote12.jfif", "price": "130" },
          { "name": "Poco X5 Pro", "image": "/pocox5pro.jfif", "price": "150" },
          { "name": "Oppo Find X6", "image": "/oppofindx6.jfif", "price": "230" },
          { "name": "Oppo Reno 10", "image": "/opporeno10.jfif", "price": "190" },
          { "name": "Oppo A78", "image": "/oppoA78.jfif", "price": "110" },
          { "name": "Vivo X90 Pro", "image": "/vivox90pro.jfif", "price": "250" },
          { "name": "Vivo V27", "image": "/vivov27.jfif", "price": "160" },
          { "name": "Vivo Y100", "image": "/vivoy100.jfif", "price": "130" },
          { "name": "OnePlus 11", "image": "/oneplus11.jfif", "price": "240" },
          { "name": "OnePlus Nord 3", "image": "/oneplusnord3.jfif", "price": "180" },
          { "name": "OnePlus 10R", "image": "/oneplus10r.jfif", "price": "170" },
          { "name": "Huawei P60 Pro", "image": "/huaweiP60pro.jfif", "price": "260" },
          { "name": "Huawei Mate 50", "image": "/huaweimate50.jfif", "price": "200" },
          { "name": "Huawei Nova 11", "image": "/huaweinova11.jfif", "price": "140" },
          { "name": "Infinix Zero Ultra", "image": "/infinixzeroultra.jfif", "price": "180" },
          { "name": "Infinix Note 30", "image": "/infinixnote30.jfif", "price": "130" },
          { "name": "Infinix Hot 12", "image": "/infinixhot12.jfif", "price": "100" },
          { "name": "Tecno Phantom X2", "image": "/tecnophantomx2.jfif", "price": "190" },
          { "name": "Tecno Camon 20", "image": "/tecnocamon20.jfif", "price": "140" },
          { "name": "Tecno Spark 10", "image": "/tecnospark10.jfif", "price": "110" }
        ]
      },
      {
        "key": "3-2",
        "label": "iPhone",
        "models": [
          { "name": "iPhone 15 Pro", "image": "/iphone15pro.jfif", "price": "134" },
          { "name": "iPhone 14", "image": "/iphone14.jfif", "price": "194" },
          { "name": "iPhone SE", "image": "/iphoneSE.jfif", "price": "104" }
        ]
      },
      {
        "key": "3-3",
        "label": "Samsung",
        "models": [
          { "name": "Galaxy S23", "image": "/galaxyS23.jfif", "price": "220" },
          { "name": "Galaxy A54", "image": "/galaxyA54.jfif", "price": "180" },
          { "name": "Galaxy Z Fold 5", "image": "/galaxyZFold5.jfif", "price": "399" }
        ]
      },
      {
        "key": "3-4",
        "label": "Realme",
        "models": [
          { "name": "Realme GT Neo 5", "image": "/realmeGTNeo5.jfif", "price": "160" },
          { "name": "Realme 11 Pro", "image": "/realme11pro.jfif", "price": "140" },
          { "name": "Realme C55", "image": "/realmeC55.jfif", "price": "120" }
        ]
      },
      {
        "key": "3-5",
        "label": "Xiaomi",
        "models": [
          { "name": "Xiaomi 13 Pro", "image": "/xiaomi13pro.jfif", "price": "210" },
          { "name": "Redmi Note 12", "image": "/redminote12.jfif", "price": "130" },
          { "name": "Poco X5 Pro", "image": "/pocox5pro.jfif", "price": "150" }
        ]
      },
      {
        "key": "3-6",
        "label": "Oppo",
        "models": [
          { "name": "Oppo Find X6", "image": "/oppofindx6.jfif", "price": "230" },
          { "name": "Oppo Reno 10", "image": "/opporeno10.jfif", "price": "190" },
          { "name": "Oppo A78", "image": "/oppoA78.jfif", "price": "110" }
        ]
      },
      {
        "key": "3-7",
        "label": "Vivo",
        "models": [
          { "name": "Vivo X90 Pro", "image": "/vivox90pro.jfif", "price": "250" },
          { "name": "Vivo V27", "image": "/vivov27.jfif", "price": "160" },
          { "name": "Vivo Y100", "image": "/vivoy100.jfif", "price": "130" }
        ]
      },
      {
        "key": "3-8",
        "label": "OnePlus",
        "models": [
          { "name": "OnePlus 11", "image": "/oneplus11.jfif", "price": "240" },
          { "name": "OnePlus Nord 3", "image": "/oneplusnord3.jfif", "price": "180" },
          { "name": "OnePlus 10R", "image": "/oneplus10r.jfif", "price": "170" }
        ]
      },
      {
        "key": "3-9",
        "label": "Huawei",
        "models": [
          { "name": "Huawei P60 Pro", "image": "/huaweiP60pro.jfif", "price": "260" },
          { "name": "Huawei Mate 50", "image": "/huaweimate50.jfif", "price": "200" },
          { "name": "Huawei Nova 11", "image": "/huaweinova11.jfif", "price": "140" }
        ]
      }
  ]},
  { key: "4", label: "Headphone" },
  { key: "5", label: "Mobile Accessories" },
  { key: "6", label: "Gaming Console" },
  { key: "7", label: "Camera & Photo" },
  { key: "8", label: "TV & Homes Appliances" },
  { key: "9", label: "Watchs & Accessories" },
  { key: "10", label: "GPS & Navigation" },
  { key: "11", label: "Warable Technology" },
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
              <div className="absolute left-[224px] top-0 p-5 z-50 w-full md:w-[530px] lg:w-[868px] border hidden sm:flex flex-row gap-5 bg-white shadow-lg rounded-md">
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
                <div className="hidden md:block">
                  {category.subcategories.map((sub) =>
                    activeSubcategory === sub.key ? (
                      <ul key={sub.key}>
                        <h1 className="text-base font-semibold mb-4">FEATURED PHONES</h1>
                        {sub.models.slice(0, 3).map((model, index) => (
                          <li key={index} className="w-[312px] p-3 flex flex-row items-center border rounded-[3px] gap-3 mb-4">
                            <div>
                              <Image src={model.image} alt={model.name} width={80} height={80}/>
                            </div>
                            <div>
                              <h1 className="text-sm font-normal mb-2">{model.name}</h1>
                              <p className="text-sm font-medium text-[#2DA5F3]">$ {model.price}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : null
                  )}
                </div>

                {/* Right Side Add bar */}
                <article className="min-w-[312px] hidden lg:flex flex-col items-center p-5 bg-[#F3DE6D] ">
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
