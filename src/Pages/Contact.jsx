import React from 'react'
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-500'>Our store</p>
          <p className='text-gray-500'>2675 Yaba Mainland <br /> Lagos Nigeria</p>
          <p className='text-gray-500'>Tel:+234 -2223-489-64 <br /> nedushoppin@gmail.com</p>
          <p>Learn more about our team and jon openings.</p>
          <button className='border border-black rounded-lg px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer '>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  )
}

export default Contact;
