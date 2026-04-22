import React from 'react'
import Logo from '/nedu.svg'

function Footer() {
  return (
    <footer className='border-t border-gray-100 pt-20 pb-10 mt-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12'>
            <div className='flex-1 max-w-sm'>
                <img src={Logo} className='w-40 size-14 xl:size-20 mb-8 hover:opacity-80 transition-opacity duration-300' alt="SwiftWears"/>
                <p className='text-gray-500 leading-relaxed'>
                    Elevating your lifestyle with curated collections that blend timeless elegance with modern trends. Experience the pinnacle of fashion with SwiftWears.
                </p>
            </div>
        
            <div>
                <p className='text-xs font-bold uppercase tracking-[0.2em] text-gray-900 mb-8'>Shop</p>
                <ul className='flex flex-col gap-4 text-gray-500 text-sm'>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>New Arrivals</li>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>Best Sellers</li>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>Collections</li>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>Sale</li>
                </ul>
            </div>

            <div>
                <p className='text-xs font-bold uppercase tracking-[0.2em] text-gray-900 mb-8'>Company</p>
                <ul className='flex flex-col gap-4 text-gray-500 text-sm'>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>Our Story</li>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>Sustainability</li>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>Privacy Policy</li>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>Terms of Service</li>
                </ul>
            </div>

            <div>
                <p className='text-xs font-bold uppercase tracking-[0.2em] text-gray-900 mb-8'>Get in Touch</p>
                <ul className='flex flex-col gap-4 text-gray-500 text-sm'>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>+234 2223 489 64</li>
                    <li className='hover:text-black transition-colors duration-200 cursor-pointer'>concierge@swiftwears.com</li>
                </ul>
            </div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400'>
            <p>© 2025 SWIFTWEARS. ALL RIGHTS RESERVED.</p>
            <div className='flex gap-8'>
                <span className='hover:text-black cursor-pointer transition-colors'>INSTAGRAM</span>
                <span className='hover:text-black cursor-pointer transition-colors'>FACEBOOK</span>
                <span className='hover:text-black cursor-pointer transition-colors'>TWITTER</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
