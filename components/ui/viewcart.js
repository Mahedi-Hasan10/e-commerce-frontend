"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosRemove } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Menu, Rate } from "antd";
import { FaRegHeart, FaTencentWeibo, FaTwitter } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { BsCopy } from "react-icons/bs";
import { MdFacebook, MdOutlineShoppingCart } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";

const categories = [
    {image: "/01.png"},
    {image: "/02.png"},
    {image: "/03.png"},
    {image: "/04.png"},
    {image: "/05.png"},
    {image: "/06.png"},
  ];

  const items = [
    {
      key: 'sub4',
      label: '14-inch Liquid Retina XDR display',
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
      ],
    },
  ]
  const items1 = [
    {
      key: 'sub2',
      label: '1TV SSD Storage',
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
      ],
    },
  ]
  const items2 = [
    {
      key: 'sub4',
      label: '16GB unified memory',
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
      ],
    },
  ]
const Viewcart = () => {
  const [selected, setSelected] = useState('radio1');
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div>
        <div className=" lg:grid grid-cols-5 lg:gap-[50px]">
         <div className=" col-span-2 mb-10 lg:mb-0">
            <Image src={'/leptop.png'} alt='laptop' width={900} height={900} className="w-full h-[250px] sm:h-[464px] "/>

            <section className="mt-10 relative">
        <Swiper
          slidesPerView={6}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
           breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 5, spaceBetween: 10 },
          1024: { slidesPerView: 5, spaceBetween: 10 },
          1280: { slidesPerView: 6, spaceBetween: 10 },
        }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="!lg:w-[96px] !lg:h-[96px]">
              <div className="flex flex-col items-center border border-gray-200  gap-2 cursor-pointer">
                <Image
                  src={category.image}
                  width={205}
                  height={236}
                  alt={category.name}
                  layout="responsive"
                  className="w-full h-full"
                />
                <h3>{category.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="z-50 hidden sm:flex absolute top-1/2 justify-center items-center  w-full">
          <button className="swiper-button-prev custom-prev ">
            <IoIosArrowRoundBack className="text-3xl text-white" />
          </button>
          <button className="swiper-button-next custom-next ">
            <IoIosArrowRoundForward className="text-3xl text-white" />
          </button>
        </div>
        
        
      </section>
         </div>

         <div className=" col-span-3">
          <div className="flex flex-col sm:flex-row items-center gap-[6px]">
            <div className="flex flex-row gap-2 items-center">
            <div className=""><Rate disabled defaultValue={4} /></div>
            <div className="text-sm font-semibold">4.7 Star Rating</div>
            </div>
            <div className="text-sm font-normal">(21,671 User feedback)</div>
          </div>
          <h1 className="text-base text-center sm:text-start  sm:text-xl font-normal mt-5 sm:mt-2 mb-4">2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h1>

          <div className="sm:gap-2 gap-0">
            <div className="grid grid-cols-2 justify-between items-center">
               <span><span className="text-sm font-normal text-[#5F6C72]">Sku:</span> <span  className="text-sm font-medium text-black">A264671</span></span>
               <span><span className="text-sm font-normal text-[#5F6C72]">Availability:</span > <span className="text-sm font-medium text-black">In Stock</span></span>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
            <span><span className="text-sm font-normal text-[#5F6C72]">Brand:</span> <span  className="text-sm font-medium text-black">Apple</span></span>
            <span><span className="text-sm font-normal text-[#5F6C72]">Category:</span> <span  className="text-sm font-medium text-black">Electronics Devices</span></span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center sm:justify-start py-6">
            <div className="flex flex-row items-center">
             <span className="text-2xl font-semibold text-[#2DA5F3]">$1699</span>
             <span className="text-lg font-normal text-[#5F6C72] line-through ml-1">$1999.00</span>
            </div>
            <div>
                <h3 className="text-sm font-semibold px-[10px] py-[5px] bg-[#EFD33D] text-black rounded-sm ml-3">21% OFF</h3>
            </div>
          </div>

          <hr className="border border-[#E4E7E9]"/>

          <div className="sm:grid grid-cols-2 gap-6 space-y-8 sm:space-y-0 justify-between items-center mt-6">
            <div className=" h-[72px] ">
            <h3 className="text-sm font-normal mb-2">Color</h3>
           <div className="flex flex-row items-center gap-3 select-none">
           {['radio1', 'radio2', 'radio3'].map((id) => (
          <div key={id} className="relative w-10 h-10">
            <input
              type="radio"
              id={id}
              name="radio"
              className="hidden"
              checked={selected === id}
              onChange={() => setSelected(id)}
            />
            <label
              htmlFor={id}
              className={`block w-10 h-10 rounded-full border-2 transition-colors cursor-pointer ${
                selected === id ? 'border-orange-500 bg-white' : 'bg-[#E0E1E1] '
              }`}
            >
              <div
                className={`absolute top-1/2 left-1/2 w-7 h-7 bg-[#E0E1E1] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity ${
                  selected === id ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </label>
          </div>
        ))}
           </div>
            </div>

            <div className=" relative h-[72px] ">
              <h3 className="text-sm font-normal mb-2">Size</h3>
            <Menu
              onClick={onClick}
            
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
              className="border !rounded-sm !absolute z-50 select-none"
           />
            </div>
            <div className=" relative h-[72px] ">
              <h3 className="text-sm font-normal mb-2">Memory</h3>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items2}
              className="border !rounded-sm !absolute z-40 select-none"
           />
            </div>
          <div className=" relative h-[72px] ">
              <h3 className="text-sm font-normal mb-2">Storage</h3>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items1}
              className="border !rounded-sm !absolute z-40 select-none"
           />
            </div>
          </div>

          <div className="sm:grid grid-cols-4 items-center gap-4 justify-between pt-6 select-none space-y-6 sm:space-y-0">
            <div className=" col-span-1 w-full border-[2px] border-[#E4E7E9] rounded-sm h-[56px] px-5 flex flex-row justify-between items-center">
            <IoIosRemove className=" cursor-pointer"/>
            <span>01</span>
            <IoAddOutline className=" cursor-pointer"/>
            </div>

            <div className=" col-span-2 h-[56px]">
              <button className="flex flex-row items-center justify-center rounded-sm text-xl text-white gap-3 font-normal h-full w-full  bg-[#FA8232]"><span>Add to card</span><MdOutlineShoppingCart /></button>
            </div>

            <div className=" col-span-1 h-[56px]">
              <button className="text-[#FA8232] w-full h-full text-base font-bold border-[2px] border-[#FA8232] rounded-sm">Buy Now</button>
            </div>
          </div>

           <div className="flex flex-col sm:flex-row justify-between items-center py-6">
            <div className="flex flex-row items-center gap-6 pb-4 sm:pb-0">
                <div className="flex flex-row items-center text-sm font-normal gap-[6px]">
                    <FaRegHeart />
                    <span>Add to Wishlist</span>
                </div>
                <div className="flex flex-row items-center text-sm font-normal gap-[6px]">
                <TfiReload />
                <span>Add to Compare</span>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3">
                <p className="text-sm font-normal">Share product:</p>
                <div className="flex flex-row items-center text-sm font-normal gap-3">
                <BsCopy />
                <MdFacebook />
                <FaTwitter />
                <FaTencentWeibo />
                </div>
            </div>
           </div>

           <div className="p-5 border border-[#E4E7E9] rounded-sm">
            <h1 className="text-sm font-normal mb-3">100% Guarantee Safe Checkout</h1>
            <Image src={'/PaymentMethod.png'} alt="image" width={300} height={100} />
           </div>
         </div>
        </div>
    </div>
  )
}

export default Viewcart