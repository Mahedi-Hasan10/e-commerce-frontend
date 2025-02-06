import Link from 'next/link'
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa6'

const Loginmodal = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-[350px] md:w-[424px] bg-white text-black z-50 border border-[#E4E7E9] rounded-[4px] p-[32px] select-none'>
        <form>
            <h1 className='text-xl font-extrabold mb-5'>Sign in to your account</h1>

            <label htmlFor="email" className='text-sm font-normal cursor-pointer'>Email Address</label>
            <input type="email" id='email' className='w-full md:w-[360px] h-[44px] outline-none text-sm font-normal bg-white border border-[#E4E7E9] rounded-[2px] px-3 mb-4'/>

            <div className='flex flex-col'>
            <div className='flex flex-row justify-between items-center'>
                <label htmlFor="password" className='text-sm font-normal mb-2 cursor-pointer'>Password</label>
                <Link href={"/"} className='text-base font-normal cursor-pointer text-[#2DA5F3]'>Forget Password</Link>
            </div>
            <div className="relative flex items-center border border-[#E4E7E9] rounded-[2px] w-full md:w-[360px] h-[44px] bg-white px-3">
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        className="outline-none border-none flex-1 text-sm font-normal"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3"
      >
        {showPassword ? <BsEye /> : <BsEyeSlash /> }
      </button>
    </div>
            </div>
            <button className='flex flex-row items-center justify-center gap-2 text-sm font-bold bg-[#FA8232] text-white rounded-[2px] w-full md:w-[360px] h-[44px] uppercase mt-5'><span>Login</span> <FaArrowRight /></button>
            
            <div className=' relative flex items-center justify-center text-sm font-normal text-[#77878F] border border-[#77878F] mt-6 mb-3'>
              <p className=' absolute -top-3 bg-white px-2'>Don’t have account</p>
            </div>

            <button className='text-sm font-bold text-[#FA8232] border-[2px] border-[#FFE7D6] rounded-[2px] w-full md:w-[360px] h-[44px]'>Create account</button>
        </form>
    </div>
  )
}

export default Loginmodal