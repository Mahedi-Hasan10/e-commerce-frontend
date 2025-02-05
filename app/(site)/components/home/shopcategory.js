"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Shopcategory = () => {

  const categories = [
    { name: "Computer & Laptop", image: "/Image (5).png" },
    { name: "Smart Phone", image: "/Image.png" },
    { name: "Head Phone", image: "/Image (4).png" },
    { name: "Accessories", image: "/Image (2).png" },
    { name: "Camera & Photos", image: "/Image (1).png" },
    { name: "TV & Home", image: "/Image (3).png" },
    { name: "Computer & Laptop", image: "/Image (5).png" },
    { name: "Smart Phone", image: "/Image.png" },
    { name: "Head Phone", image: "/Image (4).png" },
    { name: "Accessories", image: "/Image (2).png" },
    { name: "Camera & Photos", image: "/Image (1).png" },
    { name: "TV & Home", image: "/Image (3).png" },
  ];

  return (
    <div className="container public-sans my-24">
      <section className="text-center">
        <h1 className="text-[32px] font-medium">Shop with Categories</h1>
      </section>
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
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center border border-gray-200 p-4 space-y-2 cursor-pointer">
                <Image
                  src={category.image}
                  width={205}
                  height={236}
                  alt={category.name}
                  layout="responsive"
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
  );
};

export default Shopcategory;
