"use client";
import Link from 'next/link'
import { IoHomeOutline, IoSearch } from 'react-icons/io5'
import { MdArrowForward, MdKeyboardArrowRight, MdOutlineDateRange, MdOutlineKeyboardArrowDown, MdOutlineTextsms } from 'react-icons/md'
import { Input, Radio } from 'antd';
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
const tags = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "Macbook",
    "SSD",
    "Graphics Card",
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];

  const cardList=[
    { id: 1, image: "/blog1.png", title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", dis: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", name: "Rifat mia", date: "1 Feb, 2020", sms: "738" },
    { id: 2, image: "/blog1.png", title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", dis: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", name: "Rifat mia", date: "1 Feb, 2020", sms: "738" },
    { id: 3, image: "/blog1.png", title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", dis: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", name: "Rifat mia", date: "1 Feb, 2020", sms: "738" },
    { id: 4, image: "/blog1.png", title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", dis: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", name: "Rifat mia", date: "1 Feb, 2020", sms: "738" },
    { id: 5, image: "/blog1.png", title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", dis: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", name: "Rifat mia", date: "1 Feb, 2020", sms: "738" },
    { id: 6, image: "/blog1.png", title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", dis: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", name: "Rifat mia", date: "1 Feb, 2020", sms: "738" },
    { id: 7, image: "/blog1.png", title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", dis: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", name: "Rifat mia", date: "1 Feb, 2020", sms: "738" },
    { id: 8, image: "/blog1.png", title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", dis: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ", name: "Rifat mia", date: "1 Feb, 2020", sms: "738" },
  ]
const BlogList = () => {
    const [value, setValue] = useState(1)
    const onChange = (e) => {
      setValue(e.target.value);
    };
  return (
    <div className='bloglist'>
        <div className=' bg-[#F2F4F5] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
       
        <MdKeyboardArrowRight />
        <span >Page</span> 
        <MdKeyboardArrowRight />
        <span className='text-[#2DA5F3]'>Blog</span> 
        </div>
        </div>

        <section className='container my-[72px] grid xl:grid-cols-3 gap-[48px]'>
            <div className=' col-span-2 xl:col-span-1 '>
           <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6'>
           <div className='border border-[#E4E7E9] p-6 rounded-md w-full'>
                <h1 className='text-base font-medium mb-4'>Category</h1>

                <ul>
                    {/*  */}
    <Radio.Group
    //   style={style}
      onChange={onChange}
      value={value}
      className='!flex !flex-col gap-3'
      options={[
        {
          value: 1,
          label: 'All',
        },
        {
          value: 2,
          label: 'Electronics Devices',
        },
        {
          value: 3,
          label: 'Computer & Laptop',
        },
        {
          value: 4,
          label: 'SmartPhone',
        },
        {
          value: 5,
          label: 'Computer Accessories',
        },
        {
          value: 6,
          label: 'Headphone',
        },
        {
          value: 7,
          label: 'Mobile Accessories',
        },
        {
          value: 8,
          label: 'Gaming Console',
        },
        {
          value: 9,
          label: 'Camera & Photo',
        },
      
      ]}
    />
                </ul>
             </div>

             <div className=' p-6 border border-[#E4E7E9] rounded-md w-full'>
                <h1 className=' text-base font-medium mb-6'>Latest Blog</h1>

               <div className=' space-y-6'>
               <div className='flex flex-row  gap-4'>
                    <div className=' w-[104px] h-[80px]'>
                        <Image src={'/blogs1.png'} alt='iamge' width={100} height={100} className=' w-full h-full'/>
                    </div>
                    <div>
                        <h1 className='text-sm font-medium'>Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. </h1>
                        <p className='text-sm font-normal text-[#77878F]'>28 Nov, 2015</p>
                    </div>
                </div>
                <div className='flex flex-row  gap-4'>
                    <div className=' w-[104px] h-[80px]'>
                        <Image src={'/blogs1.png'} alt='iamge' width={100} height={100} className=' w-full h-full'/>
                    </div>
                    <div>
                        <h1 className='text-sm font-medium'>Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. </h1>
                        <p className='text-sm font-normal text-[#77878F]'>28 Nov, 2015</p>
                    </div>
                </div>
                <div className='flex flex-row  gap-4'>
                    <div className=' w-[104px] h-[80px]'>
                        <Image src={'/blogs1.png'} alt='iamge' width={100} height={100} className=' w-full h-full'/>
                    </div>
                    <div>
                        <h1 className='text-sm font-medium'>Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. </h1>
                        <p className='text-sm font-normal text-[#77878F]'>28 Nov, 2015</p>
                    </div>
                </div>
               </div>
             </div>

             <div className=' p-6 border border-[#E4E7E9] rounded-md w-full'>
                <h1 className=' text-base font-medium mb-6'>Gallery</h1>

               <div className=' grid grid-cols-4 gap-2'>
               <div className=' w-[80px] h-[80px]'>
                <Image src={'/galary1.png'} alt='iamg' width={50} height={50} className=' w-full h-full'/>
               </div>
               <div className=' w-[80px] h-[80px]'>
                <Image src={'/galary2.png'} alt='iamg' width={50} height={50} className=' w-full h-full'/>
               </div>
               <div className=' w-[80px] h-[80px]'>
                <Image src={'/galary3.png'} alt='iamg' width={50} height={50} className=' w-full h-full'/>
               </div>
               <div className=' w-[80px] h-[80px]'>
                <Image src={'/galary4.png'} alt='iamg' width={50} height={50} className=' w-full h-full'/>
               </div>
               <div className=' w-[80px] h-[80px]'>
                <Image src={'/galary5.png'} alt='iamg' width={50} height={50} className=' w-full h-full'/>
               </div>
               <div className=' w-[80px] h-[80px]'>
                <Image src={'/galary6.png'} alt='iamg' width={50} height={50} className=' w-full h-full'/>
               </div>
               <div className=' w-[80px] h-[80px]'>
                <Image src={'/galary7.png'} alt='iamg' width={50} height={50} className=' w-full h-full'/>
               </div>
               <div className=' w-[80px] h-[80px]'>
                <Image src={'/galary8.png'} alt='iamg' width={50} height={50} className=' w-full h-full'/>
               </div>
               </div>
             </div>

             <div className=''>
             <div>
            <h1 className="uppercase">Popular Tag</h1>
            <div className="mt-4 max-w-[312px]">
              {/* className="flex flex-wrap gap-4" */}

              <div className="flex flex-wrap gap-4">
                {tags.map((tag, idx) => (
                  <button className="categorys" key={idx}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
             </div>
           </div>
            </div>

            <div className=' col-span-2'>
            <div className=''>
            <div className=' flex flex-row justify-between'>
                <div className='hidden  border border-[#E4E7E9] md:flex flex-row justify-between items-center w-[424px] px-4 py-3 rounded-md'>
                    <input type="text"  placeholder='Search...' className=' outline-none '/>
                    <IoSearch />
                </div>
                <div className=' flex flex-row items-center gap-5'>
                    <h1>Sort by:</h1>
                    <div className='flex flex-row items-center px-4 py-2 border border-[#E4E7E9] gap-[45px] rounded-md'>
                        <h1>Most Popular</h1>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
             </div>

            <div>
               <div className=' grid md:grid-cols-2 gap-6 mt-6'>
                {
                    cardList.map(cardList =>(
                        <div key={cardList.id} className='border border-[#E4E7E9] p-[32px] rounded-md'> 
                        <div className='w-full rounded-md h-[280px]'>
                            <Image src={cardList.image} alt='image' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                            <div className='flex flex-row items-center justify-between mt-6'>
                                <span className='flex flex-row items-center gap-1'>
                                <FaRegUserCircle className='text-[#FA8232]'/>
                                <span>{cardList.name}</span>
                                </span>
                                <span className='flex flex-row items-center gap-1'>
                                <MdOutlineDateRange className='text-[#FA8232]'/>
                                <span>{cardList.date}</span>
                                </span>
                                <span className='flex flex-row items-center gap-1'>
                                <MdOutlineTextsms className='text-[#FA8232]'/>
                                <span>{cardList.sms}</span>
                                </span>
                            </div>
                            <h1 className=' text-lg font-medium mt-2 mb-3'>{cardList.title}</h1>
                            <p className='text-base font-normal text-[#77878F] mb-6'>{cardList.dis}</p>

                            <Link href={'/blogdetail'} className='w-[162px] h-[48px] py-3 px-6 text-[#FA8232] border border-[#FFE7D6] rounded-sm flex flex-row items-center justify-center gap-2'><span className='text-sm font-bold'>Read more</span> <MdArrowForward  className='text-xl'/></Link>
                        </div>
                        </div>
                    ))
                }
               </div>
            </div>


             <div className='flex flex-row gap-5 justify-center mt-[40px] mb-[72px]'>
                <div className=' w-[40px] h-[40px] border border-[#FA8232] text-[#FA8232] rounded-full flex justify-center items-center'><FaArrowLeft /></div>
               <div className='flex flex-row  gap-2 justify-center items-center'>
               <div className='styleWond'><span>1</span></div>
               <div className='styleWond'><span>2</span></div>
               <div className='styleWond'><span>3</span></div>
               <div className='styleWond'><span>4</span></div>
               <div className='styleWond'><span>5</span></div>
               <div className='styleWond'><span>6</span></div>
               </div>
                <div className=' w-[40px] h-[40px] border border-[#FA8232] text-[#FA8232] rounded-full flex justify-center items-center'><FaArrowRight /></div>
             </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default BlogList