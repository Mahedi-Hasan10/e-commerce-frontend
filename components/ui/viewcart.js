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
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div>
        <div className=" grid grid-cols-5 gap-[50px]">
         <div className=" col-span-2">
            <Image src={'/leptop.png'} alt='laptop' width={900} height={900} className="w-full h-[464px] "/>

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
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 18 },
          1280: { slidesPerView: 5, spaceBetween: 18 },
          1536: { slidesPerView: 6, spaceBetween: 18 },
        }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="!w-[96px] !h-[96px]">
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
        
        <div className=" z-50 hidden sm:flex absolute top-1/2  w-full ">
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
          <div className="flex flex-row items-center gap-[6px]">
            <div className=""><Rate disabled defaultValue={4} /></div>
            <div className="text-sm font-semibold">4.7 Star Rating</div>
            <div className="text-sm font-normal">(21,671 User feedback)</div>
          </div>
          <h1 className="text-xl font-normal mt-2 mb-4">2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h1>

          <div className="gap-2">
            <div className="grid grid-cols-2 justify-between items-center">
               <span><span className="text-sm font-normal text-[#5F6C72]">Sku:</span> <span  className="text-sm font-medium text-black">A264671</span></span>
               <span><span className="text-sm font-normal text-[#5F6C72]">Availability:</span > <span className="text-sm font-medium text-black">In Stock</span></span>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
            <span><span className="text-sm font-normal text-[#5F6C72]">Brand:</span> <span  className="text-sm font-medium text-black">Apple</span></span>
            <span><span className="text-sm font-normal text-[#5F6C72]">Category:</span> <span  className="text-sm font-medium text-black">Electronics Devices</span></span>
            </div>
          </div>

          <div className="flex flex-row items-center py-6">
            <div className="flex flex-row items-center">
             <span className="text-2xl font-semibold text-[#2DA5F3]">$1699</span>
             <span className="text-lg font-normal text-[#5F6C72] line-through ml-1">$1999.00</span>
            </div>
            <div>
                <h3 className="text-sm font-semibold px-[10px] py-[5px] bg-[#EFD33D] text-black rounded-sm ml-3">21% OFF</h3>
            </div>
          </div>

          <hr className="border border-[#E4E7E9]"/>

          <div className="grid grid-cols-2 gap-6 justify-between items-center">
            <div className=" h-[72px] ">
            <h3 className="text-sm font-normal mb-2">Color</h3>
           <div className="flex flex-row items-center gap-3">
           <input type="radio" value="color" name="color" id="color" className="w-[44px] h-[34px] !bg-[#124e4e]  border border-[#581515]"/>
           <input type="radio" value="color" name="color" id="color" className="w-[44px] h-[34px] !bg-[#E0E1E1]  border border-[#E0E1E1]"/>
           </div>
            </div>

            <div className=" relative h-[72px] ">
              <h3 className="text-sm font-normal mb-2">Size</h3>
            <Menu
              onClick={onClick}
              style={{
                width: 312,
              }}
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
              style={{
                width: 312,
              }}
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
              style={{
                width: 312,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items1}
              className="border !rounded-sm !absolute z-40 select-none"
           />
            </div>
          </div>

          <div className=" flex flex-row items-center gap-4 justify-between mt-6 select-none">
            <div className="border-[2px] border-[#E4E7E9] rounded-[3px] px-5 h-[56px] flex flex-row gap-[36px] items-center">
            <IoIosRemove className=" cursor-pointer"/>
            <span>01</span>
            <IoAddOutline className=" cursor-pointer"/>
            </div>
            <div>
              <button className="flex flex-row items-center text-xl text-white gap-3 font-normal h-[56px] px-[81px]  bg-[#FA8232]"><span>Add to card</span><MdOutlineShoppingCart /></button>
            </div>
            <div>
              <button className="text-[#FA8232] text-base font-bold border-[2px] border-[#FA8232] rounded-sm px-[32px] h-[56px]">Buy Now</button>
            </div>
          </div>
           <div className="flex flex-row justify-between items-center py-6">
            <div className="flex flex-row items-center gap-6">
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