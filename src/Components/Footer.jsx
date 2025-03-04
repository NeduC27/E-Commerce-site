import React from 'react'
import Logo from '../assets/Images/E-Commerce-logo.png'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm'>
            <div className='w-full sm:w-2/3 text-gray-600'>
                <img src={Logo} className='w-32 rounded-sm  border border-gray-400 hover:scale-95 transition ease-in-out duration-500 cursor-pointer mb-5'/>
                <p> Stay connected for the latest trends, exclusive deals, and exciting updates. Follow us on social media for more!</p>
            </div>
        
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+234 -2223-489-64</li>
                    <li>nedushoppin@gmail.com</li>
                </ul>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>© 2025 YourBrand. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;