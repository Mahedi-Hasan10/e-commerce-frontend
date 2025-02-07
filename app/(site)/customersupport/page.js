import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaTruck, FaKey, FaCreditCard, FaUser, FaWallet, FaShippingFast, FaShoppingCart, FaStore } from "react-icons/fa";

const items = [
    { label: 'Track Order', icon: <FaTruck /> },
    { label: 'Reset Password', icon: <FaKey /> },
    { label: 'Payment Option', icon: <FaCreditCard /> },
    { label: 'User & Account', icon: <FaUser /> },
    { label: 'Wallet & Coupons', icon: <FaWallet /> },
    { label: 'Shipping & Billing', icon: <FaShippingFast /> },
    { label: 'Shopping Cart & Wallet', icon: <FaShoppingCart /> },
    { label: 'Sell on Clcom', icon: <FaStore /> },
  ];
const CustomerSupport = () => {
  return (
    <div className="">
        
        <div className=' bg-[#F2F4F5] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
        <MdKeyboardArrowRight />
        <span className='text-[#2DA5F3]'>Customer Support</span> 
        </div>
        </div>

      {/* Search Section */}
      <section className="bg-white py-8 container">
      <div
        className="flex flex-col  h-[332px] bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/flasf.png)' }}
      >
        <div className='w-full sm:w-[536px] my-[72px]'>
          <button className="px-4 text-sm font-semibold h-[36px] bg-[#EFD33D]">
            HELP CENTER
          </button>
          <h1 className="text-2xl font-bold text-gray-800 mb-6 mt-4">
            How we can help you!
          </h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter your question or keyword"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>

      <section className="py-[72px] px-4 container ">
      <h2 className="text-[32px] text-center font-bold text-gray-800 mb-6">What can we assist you with today?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ label, icon }) => (
          <div
            key={label}
            className="border border-gray-300 rounded-lg p-6 text-center text-gray-700 font-medium hover:bg-gray-100 cursor-pointer gap-4 flex flex-row items-center"
          >
            <div className="text-[32px]  text-orange-500">{icon}</div>
            <div className='text-base font-normal'>{label}</div>
          </div>
        ))}
      </div>
    </section>

      {/* Popular Topics Section */}
      <section className="bg-white py-[72px] container">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-[40px]">Popular Topics</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {[
            'How do I return my item?',
            "What's Clcom's Return Policy?",
            'How long is the refund process?',
            'What is the Delivery Timeline?',
            'What is the Delivery Timeline?',
            'Where to Discover Your Brand Campaign 2023?',
            'What is the Gift Offer in this Campaign?',
            'How to cancel Clcom Order?',
            'Ask the Digital and Device Community',
          ].map((topic) => (
            <div key={topic} className=" ml-5 list-item hover:text-orange-500 text-base font-normal cursor-pointer">
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-[72px] container">
        <div className='mb-4 flex justify-center'>
        <button className="mt-6 text-sm font-bold bg-blue-500 text-white px-6 uppercase h-[48px] rounded-sm hover:bg-blue-600 flex flex-row items-center gap-2">
             <span>CONTACT US</span>
            </button>
        </div>
        <h2 className="text-[32px] text-center  font-semibold text-gray-800 mb-6">Don’t find your answer. Contact us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="flex flex-row border border-gray-300 bg-white rounded-lg p-6 gap-6">
            
          <div className=' w-[96px] h-[96px]'>
                <Image src={'/icons2.png'} alt='image'  width={200} height={200} className=' w-full h-full'/>
            </div>

            <div>
            <h3 className="text-lg font-semibold text-blue-500  mb-2">Call us now</h3>
            <p className="text-gray-600">Customer support available from 9:00 AM to 5:00 PM</p>
            <p className="font-bold text-2xl mt-4">+1-202-555-0126</p>
            <button className="mt-6 text-sm font-bold bg-blue-500 text-white px-6 uppercase h-[48px] rounded-sm hover:bg-blue-600 flex flex-row items-center gap-2">
             <span> Call Now</span>
             <FaArrowRightLong />
            </button>
            </div>

          </div>
          
          <div className="flex flex-row border border-gray-300 bg-white rounded-lg p-6 gap-6">
            
          <div className=' w-[96px] h-[96px]'>
                <Image src={'/icons1.png'} alt='image'  width={200} height={200} className=' w-full h-full'/>
            </div>

            <div>
            <h3 className="text-lg text-green-500 font-semibold  mb-2">Chat with us</h3>
            <p className="text-gray-600">Customer support available from 9:00 AM to 5:00 PM</p>
            <p className=" font-bold text-2xl mt-4">+1-202-555-0126</p>
            <button className="mt-6 text-sm font-bold bg-green-500 text-white px-6 uppercase h-[48px] rounded-sm hover:bg-green-600 flex flex-row items-center gap-2">
             <span> Call Now</span>
             <FaArrowRightLong />
            </button>
            </div>

          </div>
          
        </div>
      </section>
    </div>
  );
};

export default CustomerSupport;
