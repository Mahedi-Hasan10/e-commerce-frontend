"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';

const VerifyEmail = () => {
  return (
   <div>
     <div className=' bg-[#F2F4F5] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
        <MdKeyboardArrowRight />
        <span>Sign Up</span>
        <MdKeyboardArrowRight />
        <span className='text-[#2DA5F3]'>Email Verification</span> 
        </div>
        </div>

     <div className='w-full flex flex-col justify-center items-center my-[100px] select-none'>
         <form className='w-[400px] sm:w-[424px] border p-[32px]'>
            <h1 className='text-xl font-semibold text-center mb-3'>Verify Your Email Address</h1>
            <p className='text-sm font-normal text-center mb-6  text-[#5F6C72]'>Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu, tristique a eu in diam.</p>
            <div className='flex flex-row justify-between items-center mb-2'>
                <label htmlFor="password" className='text-sm font-normal  cursor-pointer'>Verification Code</label>
                <span className='text-sm font-medium cursor-pointer text-[#2DA5F3]'><Link href={"/"} >Resend Code</Link></span>
            </div>
            <input type="email" id='email' className='w-full  h-[44px] outline-none text-sm font-normal bg-white border border-[#E4E7E9] rounded-[2px] px-3 mb-6'/>

            
          
            
            <button className='flex flex-row items-center justify-center gap-2 text-sm font-bold bg-[#FA8232] text-white rounded-[2px] w-full h-[44px] uppercase'><span>Verify me</span> <FaArrowRight /></button>
            
           
        </form>
    </div>
   </div>
  )
}

export default VerifyEmail