"use client";
import Link from 'next/link';
import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdCancel, MdKeyboardArrowRight } from 'react-icons/md';
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';

const ShopCard = () => {
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
        <div className='grid lg:grid-cols-3 gap-6'>
          {/* Shopping Cart Section */}
          <div className='lg:col-span-2 border rounded-md overflow-hidden'>
            <h1 className='bg-white py-4 px-6 text-lg font-medium border-b'>Shopping Cart</h1>
            
            <div className='overflow-x-auto'>
              <div className='min-w-[600px] bg-[#E4E7E9] p-4 text-xs font-medium grid grid-cols-7 gap-4'>
                <div className='col-span-3'>Product</div>
                <div>Price</div>
                <div className='col-span-2'>Quantity</div>
                <div>Sub-Total</div>
              </div>


              <div className=' min-w-[600px] grid grid-cols-7  gap-6 px-6 py-5 items-center  text-[12px] font-medium'>
              <div className='col-span-3 flex flex-row items-center gap-3'>
              <MdCancel className='text-2xl'/>
              <Image src={'/5.png'} alt='imga' width={72} height={72}/>
                <div>
                    <h1 className='text-sm font-medium'>4K UHD LED Smart TV with Chromecast Built-in</h1>
                </div></div>
                
              <div className=' flex flex-row gap-1 text-sm font-normal'>
                <span className=' line-through text-[#929FA5]'>$99</span>
                <span>$55</span>
              </div>
              <div className=' col-span-2 flex flex-row items-center justify-between p-4 gap-[30px] border rounded-sm'>
              <IoIosRemove />
                <span>01</span>
                <IoIosAdd />
                </div>
              <div className='text-sm font-normal'>$70</div>
              </div>
              <div className=' min-w-[600px]'>
              <div className='grid grid-cols-7  gap-6 px-6 py-5 items-center  text-[12px] font-medium'>
              <div className='col-span-3 flex flex-row items-center gap-3'>
              <MdCancel className='text-2xl'/>
              <Image src={'/5.png'} alt='imga' width={72} height={72}/>
                <div>
                    <h1 className='text-sm font-medium'>4K UHD LED Smart TV with Chromecast Built-in</h1>
                </div></div>
                
              <div className=' flex flex-row gap-1 text-sm font-normal'>
                <span className=' line-through text-[#929FA5]'>$99</span>
                <span>$55</span>
              </div>
              <div className=' col-span-2 flex flex-row items-center justify-between p-4 gap-[30px] border rounded-sm'>
              <IoIosRemove />
                <span>01</span>
                <IoIosAdd />
                </div>
              <div className='text-sm font-normal'>$70</div>
              </div>
              </div>
              <div className=' min-w-[600px]'>
              <div className='grid grid-cols-7  gap-6 px-6 py-5 items-center  text-[12px] font-medium'>
              <div className='col-span-3 flex flex-row items-center gap-3'>
              <MdCancel className='text-2xl'/>
              <Image src={'/5.png'} alt='imga' width={72} height={72}/>
                <div>
                    <h1 className='text-sm font-medium'>4K UHD LED Smart TV with Chromecast Built-in</h1>
                </div></div>
                
              <div className=' flex flex-row gap-1 text-sm font-normal'>
                <span className=' line-through text-[#929FA5]'>$99</span>
                <span>$55</span>
              </div>
              <div className=' col-span-2 flex flex-row items-center justify-between p-4 gap-[30px] border rounded-sm'>
              <IoIosRemove />
                <span>01</span>
                <IoIosAdd />
                </div>
              <div className='text-sm font-normal'>$70</div>
              </div>
              </div>
            </div>

<hr className='border'/>
            <div className='flex flex-wrap justify-between items-center p-6'>
              <Link href={'/'} className='flex items-center gap-2 text-[#2DA5F3] border border-[#2DA5F3] px-4 py-2 rounded-md'>
                <FaArrowLeftLong /> Return to Shop
              </Link>
              <Link href={'/'} className='text-[#2DA5F3] border border-[#2DA5F3] px-4 py-2 rounded-md'>Update Cart</Link>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className='border p-6 rounded-md h-auto'>
            <h1 className='text-lg font-medium mb-4'>Card Totals</h1>
            
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between'><span>Sub-total</span><span>$330</span></div>
              <div className='flex justify-between'><span>Shipping</span><span>$130</span></div>
              <div className='flex justify-between'><span>Discount</span><span>-$30</span></div>
              <div className='flex justify-between'><span>Tax</span><span>$10</span></div>
              <hr className='border my-2' />
              <div className='flex justify-between text-lg font-semibold'>
                <span>Total</span>
                <span>$357.99 USD</span>
              </div>
              <Link href={'/'} className='flex items-center justify-center w-full h-[56px] bg-[#FA8232] mt-6 rounded-md text-white text-base font-bold gap-3'>
                Place Order <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
