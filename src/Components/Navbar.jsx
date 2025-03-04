import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { ShopContext } from '../Context/ShopContext';
import Logo from '../assets/Images/E-Commerce-logo.png';

function Navbar() {

  const [visible, setVisible] = useState(false)
  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
       <img src={Logo} className='w-64 rounded-sm  border border-gray-400 hover:scale-95 transition ease-in-out duration-500 cursor-pointer'/>
       </Link>
      <ul className='hidden sm:flex gap-5 text-sm '>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1px] bg-gray-700 hidden'/>
        </NavLink>
       
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1px] bg-gray-700 hidden'/>
        </NavLink>
        
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1px] bg-gray-700 hidden'/>
        </NavLink>
        
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1px] bg-gray-700 hidden'/>
        </NavLink>
        

      </ul>

      <div className='flex items-center gap-3 cursor-pointer text-2xl'>
        <CiSearch onClick={() => setShowSearch(true)}/>

        <div className='group relative'>
         <Link to='/login'><CgProfile /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-3 '>
            <div className='flex flex-col gap-2 py-3 px-5 w-32 bg-slate-100 text-sm text-slate-400 rounded-lg'>
              <p className='cusor pointer hover:text-black'>My Profile</p>
              <p className='cusor pointer hover:text-black'>Orders</p>
              <p className='cusor pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <IoCartOutline className='text-[30px]'/>
          <p className='absolute right-[5px] bottom-[5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full
          text-[8px]'>{getCartCount()}</p>
        </Link>

        <IoIosMenu onClick={() => setVisible(true)} className='w-5 cusor-pointer sm:hidden'/>
      </div>

      {/* Side Bar Menu For Small Screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all
          ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600 '>
              <div onClick={() => setVisible(false) } className='flex items-center cursor-pointer gap-4 p-3'>
               <IoIosArrowDropdown className='h-4 rotate-90'/>
               <p>-Back</p>
              </div>

              <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

            </div>

        </div>
    </div>
  )
}

export default Navbar;
