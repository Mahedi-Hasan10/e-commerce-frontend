"use client";
import Link from 'next/link';
import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import Image from 'next/image';
import { ImCancelCircle } from "react-icons/im";
import { MdKeyboardArrowRight } from 'react-icons/md';

const Wishlist = () => {
  return (
    <div>
      <div className='bg-[#F2F4F5] py-6'>
        <div className='container mx-auto flex flex-wrap items-center gap-2 text-sm font-normal px-4'>
          <Link href={'/'} className='flex items-center gap-2'>
            <IoHomeOutline />
            <span>Home</span>
          </Link>
          <MdKeyboardArrowRight />
          <span className='text-[#2DA5F3]'>Shopping Cart</span>
        </div>
      </div>

      <div className='container mx-auto px-4 my-10'>
          {/* Shopping Cart Section */}
          <div className='border rounded-md overflow-hidden'>
            <h1 className='bg-white py-4 px-6 text-lg font-medium border-b'>Wishlist</h1>
            
            <div className='overflow-x-auto'>
             
             <div className='min-w-[1024px]'>
             <div className='grid grid-cols-7 gap-6 bg-[#E4E7E9] p-4 text-xs font-medium '>
                <div className='col-span-3'>Products</div>
                <div>Price</div>
                <div >Stock Status</div>
                <div className=' col-span-2'>Actions</div>
              </div>


 
              <div className='  grid grid-cols-7  gap-6 px-6 py-5 items-center  text-[12px] font-medium'>
              <div className='col-span-3 flex flex-row items-center gap-3'>
              <Image src={'/5.png'} alt='imga' width={72} height={72}/>
                <div>
                    <h1 className='text-sm font-medium'>4K UHD LED Smart TV with Chromecast Built-in</h1>
                </div></div>
                
              <div className=' flex flex-row gap-1 text-sm font-normal'>
                <span className=' line-through text-[#929FA5]'>$99</span>
                <span>$55</span>
              </div>
              <div className='text-sm font-semibold text-[#2DB224]'>IN STOCK</div>
              <div className=' col-span-2 flex flex-row items-center gap-6'>
               <Link href={'/'} className=' flex flex-row items-center justify-center  px-6 h-[48px] gap-3 border rounded-sm bg-[#FA8232] text-white text-sm font-bold w-[173px]' >
               <span>Add to Card</span>
               <FaCartShopping />
               </Link>
               <ImCancelCircle className='text-2xl'/>
                </div>
              </div>
              <div className='  grid grid-cols-7  gap-6 px-6 py-5 items-center  text-[12px] font-medium'>
              <div className='col-span-3 flex flex-row items-center gap-3'>
              <Image src={'/5.png'} alt='imga' width={72} height={72}/>
                <div>
                    <h1 className='text-sm font-medium'>4K UHD LED Smart TV with Chromecast Built-in</h1>
                </div></div>
                
              <div className=' flex flex-row gap-1 text-sm font-normal'>
                <span className=' line-through text-[#929FA5]'>$99</span>
                <span>$55</span>
              </div>
              <div className='text-sm font-semibold text-[#2DB224]'>IN STOCK</div>
              <div className=' col-span-2 flex flex-row items-center gap-6'>
               <Link href={'/'} className=' flex flex-row items-center justify-center  px-6 h-[48px] gap-3 border rounded-sm bg-[#FA8232] text-white text-sm font-bold w-[173px]' >
               <span>Add to Card</span>
               <FaCartShopping />
               </Link>
               <ImCancelCircle className='text-2xl'/>
                </div>
              </div>
              <div className='  grid grid-cols-7  gap-6 px-6 py-5 items-center  text-[12px] font-medium'>
              <div className='col-span-3 flex flex-row items-center gap-3'>
              <Image src={'/5.png'} alt='imga' width={72} height={72}/>
                <div>
                    <h1 className='text-sm font-medium'>4K UHD LED Smart TV with Chromecast Built-in</h1>
                </div></div>
                
              <div className=' flex flex-row gap-1 text-sm font-normal'>
                <span className=' line-through text-[#929FA5]'>$99</span>
                <span>$55</span>
              </div>
              <div className='text-sm font-semibold text-[#c22121]'>OUT OF STOCK</div>
              <div className=' col-span-2 flex flex-row items-center gap-6'>
               <Link href={'/'} className=' flex flex-row items-center justify-center  px-6 h-[48px] gap-3 border rounded-sm bg-[#FA8232] text-white text-sm font-bold w-[173px]' >
               <span>Add to Card</span>
               <FaCartShopping />
               </Link>
               <ImCancelCircle className='text-2xl'/>
                </div>
              </div>
             
             </div>
             
              </div>
            </div>


   </div>
   </div>

  );
};

export default Wishlist;
