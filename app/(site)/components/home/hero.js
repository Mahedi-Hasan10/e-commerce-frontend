import Image from 'next/image';
import React from 'react';
import Button from '../common/button';
import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className="py-6 container">
            <div className="flex items-center gap-6">
                <div className="flex items-center justify-center gap-6 h-[520px] w-[65%] bg-[#f2f4f5]">
                    <div className="max-w-[356px]">
                        <p className="text-blue-700 font-semibold text-lg mb-3">--- THE BEST PLACE TO PLAY</p>
                        <h2 className="xl-text-[60px] md:text-[40px] text-[26px] font-bold mb-4">Xbox Consoles</h2>
                        <p className="text-gray-700 md:text-lg text-base mb-5">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                        <Button name={<span className="flex gap-2 items-center ">Shop Now <FaArrowRightLong /></span>} className="bg-[#fa8232] cursor-pointer hover:bg-yellow-600 text-white w-fit" />
                    </div>
                    <div className="relative pr-6">
                        <Image src="/hero1.png" alt="hero" height={1000} width={1000} className="w-[368px] h-[408px]" />
                        <div className="h-[100px] w-[100px] flex items-center justify-center text-2xl font-bold text-white rounded-full bg-[#2da3f5] absolute top-0 right-[20px]">
                            $299
                        </div>
                    </div>
                </div>
                <div className="w-[30%] flex flex-col gap-6">
                    <div className="bg-[#141414] rounded-[2px] flex items-end gap-5 relative" >
                        <div className="py-[30px] px-10">
                            <h3 className="text-lg text-yellow-500 mb-1">Summer Sale</h3>
                            <h3 className="text-xl font-bold mb-2 text-white">Xiaomi FlipBuds Pro</h3>
                            <h3 className="text-lg font-bold text-blue-500 mb-2">$299</h3>
                            <Button name={<span className="flex gap-2 items-center ">Shop Now <FaArrowRightLong /></span>} className="bg-[#fa8232] cursor-pointer hover:bg-yellow-600 text-white w-fit" />
                        </div>
                        <Image src="/hero2.png" alt="hero3" height={500} width={500} className="h-[160px] w-[160px]" />
                        <div className="py-2 px-4 text-lg font-semibold text-white rounded-[5px] bg-[#2da3f5] absolute top-[8%] right-[20px]">
                            29% Off
                        </div>
                    </div>
                    <div className="bg-[#f2f4f5] rounded-[2px] py-11 px-8 flex items-center gap-5">
                        <Image src="/hero3.png" alt="hero3" height={500} width={500} className="h-[160px] w-[160px]" />
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Xiaomi FlipBuds Pro</h3>
                            <h3 className="text-xl font-bold text-blue-500 mb-5">$299</h3>
                            <Button name={<span className="flex gap-2 items-center ">Shop Now <FaArrowRightLong /></span>} className="bg-[#fa8232] cursor-pointer hover:bg-yellow-600 text-white w-fit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;