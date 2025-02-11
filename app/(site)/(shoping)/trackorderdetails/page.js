"use client";
import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { LuUserRound } from 'react-icons/lu'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Package, FileText, Truck, Handshake } from "lucide-react";
import { FaCheck } from 'react-icons/fa6';

const TrackOrderDetails = () => {

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
        <span>Track Order</span>
        <MdKeyboardArrowRight />
        <span className='text-[#2DA5F3]'>Details</span> 
        </div>
        </div>

      
        <div className=' w-full lg:w-[984px]  mx-auto border rounded-lg my-[72px] p-6'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-[#F7E99E] rounded-lg'>
                <div className='gap-2'>
                    <h1 className='text-xl font-normal'>#96459761</h1>
                    <span className='flex flex-col sm:flex-row sm:items-center text-sm font-normal gap-5'>
                        <span>4 Products</span>
                        <span>Order Placed in 17 Jan, 2021 at 7:32 PM</span>
                    </span>
                </div>
                <div className=' mt-4 md:mt-0'>
                    <h1>$1199.00</h1>
                </div>
            </div>

            <p className=' text-sm font-normal my-6'>Order expected arrival 23 Jan, 2021</p>

         

{/*  */}
<div className=' overflow-hidden'>
        <div className='  overflow-x-auto'>
   <div className='w-[930px] mx-auto'>
   <ol className="items-center flex flex-row justify-center w-[722px] mx-auto">
        <li  className="relative mb-6 ">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#FA8232] rounded-full ring ring-white  ">
            <FaCheck 
                className="w-2.5 h-2.5 text-white "
                />
               
            </div>
            <div className="flex w-[234px] bg-[#FA8232] h-2 "></div>
          </div>
         
        </li>
        <li  className="relative mb-6 ">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#FA8232] rounded-full ring ring-white  ">
            
               
            </div>
            <div className="flex w-[234px] bg-[#FFE7D6] h-2 "></div>
          </div>
         
        </li>
        <li  className="relative mb-6 ">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#fff] border-2 border-[#FA8232] rounded-full ring ring-white  ">
            <FaCheck 
                className="w-2.5 h-2.5 text-white "
                />
               
            </div>
            <div className="flex w-[234px] bg-[#FFE7D6] h-2 "></div>
          </div>
         
        </li>
        <li  className="relative mb-6 ">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#fff] border-2 border-[#FA8232] rounded-full ring ring-white  ">
            <FaCheck 
                className="w-2.5 h-2.5 text-white "
                />
               
            </div>
          </div>
         
        </li>
       
      
        
      
    </ol>
 
 <div className="flex justify-between items-center gap-24 my-6">
      <div className="flex flex-col items-center justify-center w-full text-green-600">
        <FileText size={24} />
        <span>Order Placed</span>
      </div>
      <div className="flex flex-col items-center justify-center w-full text-orange-500">
        <Package size={24} />
        <span>Packaging</span>
      </div>
      <div className="flex flex-col items-center justify-center w-full text-gray-400">
        <Truck size={24} />
        <span>On The Road</span>
      </div>
      <div className="flex flex-col items-center justify-center w-full text-gray-400">
        <Handshake size={24} />
        <span>Delivered</span>
      </div>
    </div>
   </div>
</div>
</div>
{/*  */}
            <hr className='border'/>
            <div className=''>
              <h1 className='text-lg font-medium my-6'>Order Activity</h1>

             <div className='flex flex-col gap-4'>
             <div className=' flex flex-row items-center gap-4 rounded-sm'>
                <div className=' w-[48px] h-[48px] bg-[#EAF6FE] text-[#2DA5F3] flex items-center justify-center'>
                <LuUserRound />
                </div>
                <div className=' text-sm font-normal gap-2'>
                  <h1>Your order has been delivered. Thank you for shopping at Clicon!</h1>
                  <p className='text-[#77878F]'>23 Jan, 2021 at 7:32 PM</p>
                </div>
              </div>
              <div className=' flex flex-row items-center gap-4 rounded-sm'>
                <div className=' w-[48px] h-[48px] bg-[#EAF6FE] flex items-center justify-center'>
                <LuUserRound />
                </div>
                <div className=' text-sm font-normal gap-2'>
                  <h1>Your order has been delivered. Thank you for shopping at Clicon!</h1>
                  <p className='text-[#77878F]'>23 Jan, 2021 at 7:32 PM</p>
                </div>
              </div>
              <div className=' flex flex-row items-center gap-4 rounded-sm'>
                <div className=' w-[48px] h-[48px] bg-[#EAF6FE] flex items-center justify-center'>
                <LuUserRound />
                </div>
                <div className=' text-sm font-normal gap-2'>
                  <h1>Your order has been delivered. Thank you for shopping at Clicon!</h1>
                  <p className='text-[#77878F]'>23 Jan, 2021 at 7:32 PM</p>
                </div>
              </div>
              <div className=' flex flex-row items-center gap-4 rounded-sm'>
                <div className=' w-[48px] h-[48px] bg-[#EAF6FE] flex items-center justify-center'>
                <LuUserRound />
                </div>
                <div className=' text-sm font-normal gap-2'>
                  <h1>Your order has been delivered. Thank you for shopping at Clicon!</h1>
                  <p className='text-[#77878F]'>23 Jan, 2021 at 7:32 PM</p>
                </div>
              </div>
             </div>
            </div>
        </div>
        </div>
     
  )
}

export default TrackOrderDetails