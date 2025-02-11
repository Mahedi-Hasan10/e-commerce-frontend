"use client";
import { Checkbox } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Radio, Space } from "antd";
import { FaDollarSign, FaPaypal, FaAmazon } from "react-icons/fa";
import { SiVenmo } from "react-icons/si";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaArrowRight } from 'react-icons/fa6';

const Checkout = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
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
        <span>Shopping Card</span>
        <span className='text-[#2DA5F3]'>Checkout</span> 
        </div>
        </div>

      <div>
      <div className='container grid lg:grid-cols-3 my-[72px] gap-6'>
            <div className='lg:col-span-2 '>
               <h1 className='mb-6'>Billing Information</h1>
              <div className=' space-y-4'>
              <div className=' grid md:grid-cols-2 gap-4'>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="name" className=''>User Name</label>
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                    <input type="text" placeholder='First name' className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                    <input type="text" placeholder='First name' className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                    </div>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="Company" className=''>Company Name (Optional)</label>
                    <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                </div>
               </div>

               <div className=' flex flex-col gap-2'>
                    <label htmlFor="Company" className=''>Address</label>
                    <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                </div>

                <div className=' grid sm:grid-cols-2 md:grid-cols-4 items-center gap-4'>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="Company" className=''>Country</label>
                    <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="Company" className=''>Region/State</label>
                    <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="Company" className=''>City</label>
                    <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="Company" className=''>Zip Code</label>
                    <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                </div>
                </div>

                <div className=' grid sm:grid-cols-2 items-center gap-4'>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="Company" className=''>Email</label>
                    <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="Company" className=''>Phone Number</label>
                    <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
                </div>
                </div>

                <div className='flex flex-row items-center checkout gap-3 mb-5'>
                    <i><Checkbox onChange={onChange}></Checkbox></i>
                    <samp className='text-sm font-normal'>Ship into different address</samp>
                </div>

                
              </div>
              <div className='   col-span-2'>
           <div className='border'>
           <div>
                        <h1 className='py-5 px-[32px] text-lg font-medium'>Payment Option</h1>
                    </div>
                    
  
<hr className='border '/>



    <div className="p-2 lg:p-6 max-w-4xl mx-auto rounded-lg  checkoutRadio ">
      <Radio.Group className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center ">
          {/* Cash on Delivery */}
          <label className=" border-r-2">
           <div className='flex flex-col items-center '>
           <FaDollarSign className="text-orange-500 text-3xl" />
            <span className="mt-2 text-sm font-medium">Cash on Delivery</span>
            <Radio value="cash" className="mt-2" />

           </div>
          </label>

          {/* Venmo */}
          <label className='  md:border-r-2'>
           <div className="flex flex-col items-center ">
           <SiVenmo className="text-blue-500 text-3xl" />
            <span className="mt-2 text-sm font-medium">Venmo</span>
            <Radio value="venmo" className="mt-2" />
           </div>
          </label>

          {/* PayPal */}
          <label className=' border-r-2'>
           <div className="flex flex-col items-center ">
           <FaPaypal className="text-blue-600 text-3xl" />
            <span className="mt-2 text-sm font-medium">PayPal</span>
            <Radio value="paypal" className="mt-2" />
           </div>
          </label>

          {/* Amazon Pay */}
          <label className='  md:border-r-2'>
           <div className="flex flex-col items-center">
           <FaAmazon className="text-orange-600 text-3xl" />
            <span className="mt-2 text-sm font-medium">Amazon Pay</span>
            <Radio value="amazon" className="mt-2" />
           </div>
          </label>

          {/* Debit/Credit Card */}
          <label className="flex flex-col items-center">
            <AiOutlineCreditCard className="text-orange-500 text-3xl" />
            <span className="mt-2 text-sm font-medium">Debit/Credit Card</span>
            <Radio value="card" className="mt-2" />
          </label>
        </div>
      </Radio.Group>
    </div>
  
<hr className=' border'/>

<div className=' flex flex-col  p-[32px] gap-4'>
<div className=' flex flex-col gap-2'>
     <label htmlFor="Company" className=''>Name on Card</label>
     <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
 </div>
<div className=' flex flex-col gap-2'>
     <label htmlFor="Company" className=''>Card Number</label>
     <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
 </div>

 <div className='grid sm:grid-cols-2 gap-4'>
 <div className=' flex flex-col gap-2'>
     <label htmlFor="Company" className=''>Expire Date</label>
     <input type="text" placeholder='DD/YY' className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
 </div>
<div className=' flex flex-col gap-2'>
     <label htmlFor="Company" className=''>CVC</label>
     <input type="text" className=' outline-none border w-full h-[44px] px-4 rounded-sm'/>
 </div>
 </div>

</div>

           </div>

        
           <div>
    <h1 className='text-lg font-medium mb-6 mt-[40px]'>Additional Information</h1>
  
  <div className=' flex flex-col gap-2'>
         <label htmlFor="Company" className=''>Order Notes (Optional)</label>
         <textarea name="" id="" className='outline-none border w-full h-[124px] p-4 rounded-sm' placeholder='Notes about your order, e.g. special notes for delivery'></textarea>
     </div>
     </div>
 
   </div>
            </div>
            <div className='lg:col-span-1 border p-6 rounded-sm h-[480px]'>
               <h1>Order Summery</h1>
               <div className='flex flex-row items-center gap-4'>
                <div>
                    <Image src={'/image33.png'} alt='image' width={64} height={64} className=''/>
                </div>
                <div>
                    <h1 className=' line-clamp-1 text-lg font-medium '>Canon EOS 1500D DSLR Camera Body+ 18 ldsafaojewrfmdfsa dsfa</h1>
                    <div className='flex flex-row items-center gap-1'>
                        <span className='text-sm font-normal'>1</span>
                        <span className='text-sm font-normal'>x</span>
                        <span className='text-sm font-semibold text-[#2DA5F3]'>$250</span>
                    </div>
                </div>
               </div>
               <div className='flex flex-row items-center gap-4 mt-4 mb-6'>
                <div>
                    <Image src={'/image34.png'} alt='image' width={64} height={64} className=''/>
                </div>
                <div>
                    <h1 className=' line-clamp-1 text-lg font-medium '>Canon EOS 1500D DSLR Camera Body+ 18 ldsafaojewrfmdfsa dsfa</h1>
                    <div className='flex flex-row items-center gap-1'>
                        <span className='text-sm font-normal'>1</span>
                        <span className='text-sm font-normal'>x</span>
                        <span className='text-sm font-semibold text-[#2DA5F3]'>$250</span>
                    </div>
                </div>
               </div>

               <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center justify-between'>
                    <span>Sub-total</span>
                    <span>$330</span>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <span>Shipping</span>
                    <span>$130</span>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <span>Discount</span>
                    <span>$30</span>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <span>Tax</span>
                    <span>$10</span>
                </div>
                <hr className=' border'/>
                <div className='flex flex-row items-center justify-between'>
                    <span className='text-base font-normal'>Total</span>
                    <span className='text-base font-semibold'>$357.99 USD</span>
                </div>
                <Link href={'/'} className=' flex flex-row justify-center items-center w-full h-[56px] bg-[#FA8232] mt-6 rounded-sm text-white text-base font-bold gap-3'><span>Place order</span><FaArrowRight /></Link>
               </div>
            </div>
           
  
        </div>
        
      </div>
    </div>
  )
}

export default Checkout