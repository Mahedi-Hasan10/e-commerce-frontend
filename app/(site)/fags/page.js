"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoAdd, IoHomeOutline, IoRemove } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const faqs = [
  { id: 1, title: "Suspendisse ultrices pharetra libero sed interdum." },
  { id: 2, title: "Suspendisse ultrices pharetra libero sed interdum." },
  { id: 3, title: "Suspendisse ultrices pharetra libero sed interdum." },
  { id: 4, title: "Suspendisse ultrices pharetra libero sed interdum." },
  { id: 5, title: "Suspendisse ultrices pharetra libero sed interdum." },
];

const faqAns = {
  1: "Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
  2: "Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
  3: "Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
  4: "Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
  5: "Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
};

const FAQs = () => {
  const [activeFaqId, setActiveFaqId] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
  <div>
      <div className=' bg-[#F2F4F5] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
        <MdKeyboardArrowRight />
        <span>Page</span>
        <MdKeyboardArrowRight />
        <span className='text-[#2DA5F3]'>FAQs</span> 
        </div>
        </div>
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-between my-[72px] lg:gap-[100px] xl:gap-[136px]">
    
    {/* FAQ Section */}
    <div className="w-full lg:w-[760px]">
      <h1 className="font-semibold text-[32px] mb-[40px] text-center sm:text-start">
        Frequently Asked Questions
      </h1>
      <ul>
        {faqs.map((faq) => (
          <li
            key={faq.id}
            onClick={() => toggleFaq(faq.id)}
            className="cursor-pointer border border-[#E4E7E9] rounded-sm  mb-5"
          >
            <div className={`flex flex-row px-6 justify-between items-center text-lg font-medium h-[64px] ${activeFaqId == faq.id ? "bg-[#FA8232] text-white" : ""}`}>
              <span>{faq.title}</span>
              <span>{activeFaqId === faq.id ? <IoRemove /> : <IoAdd />}</span>
            </div>
            {activeFaqId === faq.id && (
              <div className="p-4 bg-gray-100 rounded-sm">{faqAns[faq.id]}</div>
            )}
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Support */}
    <form className="w-full lg:w-[424px] flex flex-col bg-[#FBF4CE] p-[32px]">
      <h1 className="text-lg font-medium mb-3">
        Don’t find your answer? Ask for support.
      </h1>
      <p className="text-sm font-normal mb-6">
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui.
      </p>

      <input
        type="email"
        placeholder="Email address"
        className="w-full h-[44px] px-4 rounded-sm"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full mt-3 h-[44px] px-4 rounded-sm"
      />
      <textarea
        placeholder="Message (Optional)"
        className="w-full mt-3 h-[88px] px-4 pt-4 rounded-sm"
      ></textarea>

      <Link
        href={"#"}
        className="text-sm font-bold w-[190px] h-[48px] bg-[#FA8232] text-white flex flex-row items-center justify-center rounded-sm mt-6"
      >
        <span>Send message</span> <FaArrowRight />
      </Link>
    </form>
  </div>
  </div>
  );
};

export default FAQs;
