import React from 'react'
import Image from '../assets/Images/Hero Image3.jpg'
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className='flex flex-col md:flex-row border border-gray-100 rounded-3xl overflow-hidden bg-[#FAF9F6] shadow-sm mt-24'>
        {/* Hero Left */}
        <div className='w-full md:w-1/2 flex items-center justify-center py-20 px-10 md:py-0'>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='text-gray-800'
            >
                <div className='flex items-center gap-3 mb-4'>
                    <span className='w-10 h-[1.5px] bg-gray-400'></span>
                    <p className='font-semibold text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase'>Our Bestseller</p>
                </div>
                <h1 className='prata-regular text-5xl sm:text-6xl lg:text-7xl leading-tight mb-8'>
                  Latest <br/> Arrivals
                </h1>
                <div className='flex items-center gap-4 group cursor-pointer'>
                    <p className='font-bold text-sm tracking-widest group-hover:text-premium-accent transition-colors duration-300'>SHOP NOW</p>
                    <span className='w-12 h-[1px] bg-black group-hover:w-16 group-hover:bg-premium-accent transition-all duration-300'></span>
                </div>
            </motion.div>
        </div>

        {/* Hero Right Side */}      
        <div className='w-full md:w-1/2 overflow-hidden'>
           <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={Image} 
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out'
            alt="New Arrivals"
           /> 
        </div>  
    </div>
  )
}

export default Hero;

