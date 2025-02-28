import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col sm:rounded-md sm:flex-row border border-gray-700 justify-between bg-pink-100'>
        {/* Hero Left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-gray-700'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed hover:scale-150 cursor-pointer transition duration-300'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-gray-700'></p>
                </div>
            </div>
        </div>
        {/* Hero Right Side */}      
        <div className=''>
           <img src="/Image/Hero Image2.jpg" className='w-full sm:w-[500px] hover:scale-105 hover:border cursor-pointer transition-transform duration-500 ease-in-out sm:border-l sm:border-l-gray-700'/> 
        </div>  
      
    </div>
  )
}

export default Hero;
