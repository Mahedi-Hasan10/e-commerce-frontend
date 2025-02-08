"use client";
import Link from 'next/link'
import { IoHomeOutline, IoSearch } from 'react-icons/io5'
import { MdArrowForward, MdKeyboardArrowRight, MdOutlineCancel, MdOutlineDateRange, MdOutlineKeyboardArrowDown, MdOutlineTextsms } from 'react-icons/md'
import { Checkbox, Input, Radio, Rate, Slider } from 'antd';
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
    { id: 1, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 2, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 3, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 4, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 5, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 6, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 7, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 8, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 11, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 12, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 13, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 14, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 15, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 16, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 17, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
    { id: 18, image: "/blog1.png", title: "Samsung Electronics Samsung Galexy S21 5G",  },
  ]
const Shop = () => {
    const [value, setValue] = useState(1)
    const onChange = (e) => {
      setValue(e.target.value);
    };
    const [price, setPrice] = useState(10)
    const onPrice = (e) => {
      setPrice(e.target.value);
    };

    const popularBrands = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
  return (
    <div className=''>
        <div className=' bg-[#F2F4F5] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
       
        <MdKeyboardArrowRight />
        <span >Page</span> 
        <MdKeyboardArrowRight />
        <span >Shop Grid</span> 
        <MdKeyboardArrowRight />
        <span className='text-[#2DA5F3]'>Electronics Devices</span> 
        </div>
        </div>

        <section className='container my-[72px] grid xl:grid-cols-5 gap-6'>
            <div className=' col-span-5 xl:col-span-1 '>
           <div className=' grid  sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-1 gap-6'>
           <div className=' rounded-md w-full'>
                <h1 className='text-base font-medium mb-4'>Category</h1>

                <ul>
                    {/*  */}
    <Radio.Group
    //   style={style}
      onChange={onChange}
      value={value}
      className='!flex !flex-col gap-3 bloglist'
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
                <hr className='mt-6'/>
             </div>
           <div className=' rounded-md w-full'>
                <h1 className='text-base font-medium mb-4'>Price Range</h1>

                <Slider
                style={{
                    border: " #FA8232"
                }}
          range
          min={0}
          max={2000}
          defaultValue={[200, 1100]}
        />
        <div className=' flex flex-row gap-3 my-4'>
            <input type="text" placeholder='Min price' className='w-full h-[40px] px-3 border border-[#E4E7E9]'/>
            <input type="text" placeholder='Max price' className='w-full h-[40px] px-3 border border-[#E4E7E9]'/>
        </div>
                <ul>
                    {/*  */}
    <Radio.Group
    //   style={style}
      onChange={onPrice}
      value={price}
      className='!flex !flex-col gap-3 radios'
      options={[
        {
          value: 10,
          label: 'All Price',
        },
        {
          value: 11,
          label: 'Under $20',
        },
        {
          value: 12,
          label: '$25 to $100',
        },
        {
          value: 13,
          label: '$100 to $300',
        },
        {
          value: 14,
          label: '$300 to $500',
        },
        {
          value: 15,
          label: '$500 to $1,000',
        },
        {
          value: 16,
          label: '$1,000 to $10,000',
        },
      
      
      ]}
    />
                </ul>
                <hr className='mt-6'/>
             </div>


            <div className='popularBrands'>
            <h1 className=' text-base font-medium uppercase mb-4'>popular Brands</h1>
            <div className=' grid grid-cols-2 gap-3'>
            <Checkbox onChange={popularBrands}>One Plus</Checkbox>
             <Checkbox onChange={popularBrands}>LG</Checkbox>
             <Checkbox onChange={popularBrands}>Intel</Checkbox>
             <Checkbox onChange={popularBrands}>Sony</Checkbox>
             <Checkbox onChange={popularBrands}>Panasonic</Checkbox>
             <Checkbox onChange={popularBrands}>Xiaomi</Checkbox>
             <Checkbox onChange={popularBrands}>Symphony</Checkbox>
             <Checkbox onChange={popularBrands}>HP</Checkbox>
             <Checkbox onChange={popularBrands}>Dell</Checkbox>
             <Checkbox onChange={popularBrands}>Samsung</Checkbox>
             <Checkbox onChange={popularBrands}>Symphony</Checkbox>
             <Checkbox onChange={popularBrands}>Microsoft</Checkbox>
             <Checkbox onChange={popularBrands}>Google</Checkbox>
             <Checkbox onChange={popularBrands}>Apple</Checkbox>
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

            <div className=' col-span-5 xl:col-span-4'>
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

         </div>

         <div className='bg-[#F2F4F5] hidden  sm:flex flex-row justify-between items-center py-3 px-6 flex-wrap'>
             <div className='flex flex-row items-center gap-4 flex-wrap'>
                <span>Active Filters:</span>
               <span className='flex flex-row items-center gap-3'> <span>Electronics Devices</span>
               <MdOutlineCancel /></span>
                <span className='flex flex-row items-center gap-3'><span>5 Star Rating</span>
                <MdOutlineCancel /></span>
             </div>
             <div>
                <span>65,867</span>
                <span> Results found.</span>
             </div>
         </div>
            <div>
               <div className=' grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
                {
                    cardList.map(cardList =>(
                        <div key={cardList.id} className='border border-[#E4E7E9] p-4 rounded-md'> 
                        <div className='w-full rounded-md h-[172px]'>
                            <Image src={cardList.image} alt='image' width={100} height={100} className='w-full h-[172px]'/>
                        </div>
                        <div>
                            <div className='flex flex-row items-center gap-1 mt-6'>
                            <Rate disabled defaultValue={4} /> 
                            <span>(536)</span>
                            </div>
                            <h1 className=' text-lg font-medium mt-2 mb-3'>{cardList.title}</h1>
                            <p className='text-base font-normal text-[#77878F] mb-6'>{cardList.dis}</p>
                            <p className=' text-[#2DA5F3] text-sm font-semibold'>$289</p>
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

export default Shop