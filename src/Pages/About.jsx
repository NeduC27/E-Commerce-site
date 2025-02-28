import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox';

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to my fashion eCommerce store! I am passionate about curating stylish, 
            high-quality clothing that makes you look and feel confident. With a keen eye for 
            trends and a love for timeless pieces, I bring you a collection that blends elegance
             with everyday wear. Whether you're searching for the perfect outfit for a special 
             occasion or trendy essentials for your wardrobe, my goal is to provide you with 
             fashionable choices 
            that suit your unique style.</p>
          <p>Shopping should be an enjoyable and seamless experience, which is why I focus on 
            offering a user-friendly platform, secure transactions, and excellent customer 
            service. Every item in my store is carefully selected to ensure top-notch quality 
            and satisfaction. Fashion is more than just clothing—it's a way to express yourself. 
            I invite you to explore my collection, discover pieces that resonate with you, and 
            let your style shine. Happy shopping!</p>

            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to redefine fashion eCommerce by offering stylish, high-quality, 
              and affordable clothing that empowers individuals to express their unique style. 
              We believe that fashion is more than just what you wear—it's a statement of confidence, 
              creativity, and personality. Our goal is to curate a diverse collection of trendy and 
              timeless pieces that cater to different tastes and occasions, 
              ensuring that everyone finds something they love.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality is at the heart of everything we do. We are committed to providing 
            our customers with premium, well-crafted fashion pieces that meet the highest 
            standards. Every item in our collection goes through a meticulous selection 
            process, ensuring durability, comfort, and style. From fabric sourcing to final 
            stitching, we work with trusted manufacturers 
            who share our dedication to excellence, so you can shop with confidence.
          </p>

        </div>
        
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We prioritize convenience to make your shopping experience as smooth and enjoyable as possible. Our user-friendly website is designed for easy navigation, allowing you to browse, select, and purchase your favorite fashion pieces effortlessly. With secure payment options, fast checkout, and multiple delivery choices, we ensure that your orders reach you quickly and safely.
         </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
           We value our customers and strive to build lasting relationships through trust and reliability. That’s why we offer easy returns, secure transactions, and prompt responses to your inquiries. Shopping with us means more than just purchasing fashion—it’s about enjoying a personalized experience where your needs come first. Expect nothing less than outstanding service every step of the way!
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  ) 
}

export default About;
