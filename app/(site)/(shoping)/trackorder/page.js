import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { IoHomeOutline } from 'react-icons/io5'
import { LuBadgeInfo } from 'react-icons/lu'
import { MdKeyboardArrowRight } from 'react-icons/md'

const TrackOrder = () => {
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
        <span className='text-[#2DA5F3]'>Track Order</span> 
        </div>
        </div>

        <div className='container'>
            <div>
                <h1 className='text-3xl font-semibold mt-[48px] mb-4'>Track Order</h1>
                <p className='w-full lg:w-[760px] text-base font-normal'>To track your order please enter your order ID in the input field below and press the “Track Order” button. this was given to you on your receipt and in the confirmation email you should have received.</p>

                <div className='grid lg:grid-cols-2 gap-6 mt-6 mb-4 w-full lg:w-[872px]'>
                    <div className='flex flex-col'>
                        <label htmlFor="id" className='mb-2'>Order ID</label>
                        <input type="text" placeholder='ID...' className='border outline-none h-[44px] px-4 rounded-sm'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='mb-2'>Billing Email</label>
                        <input type="email" name="" id="email" placeholder='Email address' className='border outline-none h-[44px] px-4 rounded-sm'/>
                    </div>
                </div>
                <ul className='mt-4 mb-6 flex flex-row items-center gap-1'>
                    <i><LuBadgeInfo /></i>
                    <li className=' text-sm font-normal'>Order ID that we sended to your in your email address.</li>
                </ul>

                <Link href={'/'} className='h-[56px] px-[32px] gap-2 flex flex-row justify-center bg-[#FA8232] items-center w-[217px] mb-[124px] rounded-sm text-white'>
                <li className=' list-none'>Track Order</li>
                <i><FaArrowRight /></i>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TrackOrder