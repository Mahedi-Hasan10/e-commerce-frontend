"use client";
import Image from 'next/image'
import React, { useState } from 'react';
import { Modal } from 'antd';
import { FaArrowRight } from 'react-icons/fa6'
import { MdOutlineCancel } from 'react-icons/md'
import Viewcart from './viewcart';

const Shoppingcart = () => {
    const [openViewCart, setViewCart] = useState(false);
  return (
    <div className=' relative w-[350px] md:w-[424px] mt-3 sm:mt-0 bg-white text-black z-50 border border-[#E4E7E9] rounded-[4px]  select-none'>
    
        <h1 className='text-xl font-medium py-4 px-6'>Shopping Cart (02)</h1>

        <hr className='border border-[#E4E7E9]'/>
       <div className='px-6 py-5 space-y-4'>
       <div className='flex flex-row justify-between items-center gap-4'>
            <div>
                <Image src={"/cctvcamera.png"} alt='headphone' width={80} height={80}/>
            </div>
            <div>
                <h1 className='text-sm font-normal text-[#191C1F]'>Canon EOS 1500D DSLR Camera Body+ 18-55 mm</h1>
                <div className='flex flex-row items-center gap-1'>
                    <span className='text-sm font-normal text-[#191C1F]'>3</span>
                    <samp className='text-sm font-normal text-[#191C1F]'>x</samp>
                    <span className='text-sm font-semibold text-[#2DA5F3]'>$320</span>
                </div>
            </div>
            <div><MdOutlineCancel className='w-4 h-4 cursor-pointer'/></div>
        </div>
       <div className='flex flex-row justify-between items-center gap-4'>
            <div>
                <Image src={"/cartheadphon.png"} alt='headphone' width={80} height={80}/>
            </div>
            <div>
                <h1 className='text-sm font-normal text-[#191C1F]'>Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</h1>
                <div className='flex flex-row items-center gap-1'>
                    <span className='text-sm font-normal text-[#191C1F]'>1</span>
                    <samp className='text-sm font-normal text-[#191C1F]'>x</samp>
                    <span className='text-sm font-semibold text-[#2DA5F3]'>$120</span>
                </div>
            </div>
            <div><MdOutlineCancel className='w-4 h-4 cursor-pointer'/></div>
        </div>
       </div>
        <hr className='border border-[#E4E7E9]'/>

       <div className='px-6 pb-6'>
        <div className='flex flex-row justify-between items-center py-5'>
           <span className='text-sm font-normal'>Sub-Total:</span>
           <span className='text-sm font-medium'>$2038.00 USD</span>
        </div>

       <button className='flex flex-row items-center justify-center gap-2 text-sm font-bold bg-[#FA8232] text-white rounded-[2px] w-full h-[48px] uppercase mb-3'><span>Checkout now</span> <FaArrowRight /></button>
        

        <button onClick={() => setViewCart(true)} className='text-sm font-bold text-[#FA8232] border-[2px] border-[#FFE7D6] rounded-[2px] w-full h-[48px]'>View Cart</button>
       </div>
       {/*  */}

   
      <Modal
        open={openViewCart}
        onOk={() => setViewCart(false)}
        onCancel={() => setViewCart(false)}
        footer={null}
        width={{
          xs: '90%',
          sm: '90%',
          md: '80%',
          lg: '95%',
          xl: '95%',
          xxl: '90%',
        }}
      >
        <div>
          <Viewcart />
        </div>
      </Modal>
  
</div>
  )
}

export default Shoppingcart