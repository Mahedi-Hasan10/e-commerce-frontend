"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const Shopcategory = () => {
  const categories = [
    {
      name: "Computer & Laptop",
      image: "/Image (5).png",
    },
    {
      name: "Smart Phone",
      image: "/Image.png",
    },
    {
      name: "Head Phone",
      image: "/Image (4).png",
    },
    {
      name: "Accessories",
      image: "/Image (2).png",
    },
    {
      name: "Camera & Photos",
      image: "/Image (1).png",
    },
    {
      name: "TV & Home",
      image: "/Image (3).png",
    },
  ];

  return (
    <div className="container public-sans mt-8">
      <section className="text-center">
        <h1 className="text-2xl font-medium">Shop with Categories</h1>
      </section>
      <section className="mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} id="slide">
              <div className="flex flex-col items-center border-[1px] border-gray-200 p-4 space-y-2">
                <Image
                  src={category.image}
                  width={148}
                  height={148}
                  alt={category.name}
                  layout="responsive"
                />
                <h3>{category.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Shopcategory;
