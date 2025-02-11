import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward, IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { TbStackBack } from 'react-icons/tb'

const OrderSuccessfully = () => {
  return (
    <div><div className=' bg-[#F2F4F5] py-[26px]'>
    <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
   <Link href={'/'} className='flex flex-row items-center gap-2'>
   <IoHomeOutline />
   <span>Home</span>
   </Link>
   <MdKeyboardArrowRight />
   <span>Shopping Card</span>
   <MdKeyboardArrowRight />
   <span className='text-[#2DA5F3]'>Checkout</span> 
   </div>
   </div>
   
   <div className=' flex flex-col justify-center items-center text-center my-[124px]'>
    <div className=' text-[66px] text-[#2DB224]'><IoMdCheckmarkCircleOutline /></div>
    <h1 className=' text-2xl font-semibold mb-3 mt-6'>Your order is successfully place</h1>
    <p className='text-sm font-normal text-[#5F6C72] w-full sm:w-[424px] mb-[32px]'>Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>
    <div className='flex flex-row gap-2'>
        <div className='h-[48px]  px-6 border border-[#FFE7D6] text-[#FA8232] text-sm font-bold flex flex-row items-center justify-center list-none gap-2 rounded-sm'>
            <i><TbStackBack /></i>
            <li>Go to Dashboard</li>
        </div>
        <div className='h-[48px] px-6 bg-[#FA8232] text-sm font-bold flex flex-row items-center justify-center list-none gap-2 rounded-sm text-white'>
            <li>View Order</li>
            <i><IoIosArrowForward /></i>
        </div>
    </div>
   </div>
   </div>
  )
}

export default OrderSuccessfully