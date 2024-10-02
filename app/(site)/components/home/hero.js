import Image from "next/image";
import React from "react";
import Button from "../common/button";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const items = [
    {
      image: "/logo_box.png",
      title: "Fasted Delivery",
      details: "Delivery in 24/H",
    },

    {
      image: "/logo_trophy.png",
      title: "24 Hours Return",
      details: "100% money-back guarantee",
    },

    {
      image: "/logo_card.png",
      title: "Secure Payment",
      details: "Your money is safe",
    },
    {
      image: "/logo_headphone.png",
      title: "Support 24/7",
      details: "Live contact/message",
    },
  ];

  return (
    <div className="py-6 container public-sans ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-[41px] mt-[40px] border-2 rounded-[6px] p-[20px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 items-center  ${
              index === items.length - 1
                ? "md:border-none"
                : index === 1
                ? "lg:border-r-2"
                : "md:border-r-2 "
            } `}
          >
            <div className="flex gap-2 items-center">
              <div className="">
                <Image
                  src={item.image}
                  alt={item.title} // Use the title for alt text
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="text-sm uppercase">{item.title}</p>
                <p className="text-[#5F6C72] text-sm">{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
