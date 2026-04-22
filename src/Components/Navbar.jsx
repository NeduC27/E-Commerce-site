import React, { useContext, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { ShopContext } from '../Context/ShopContext';
import Logo from '/nedu.svg';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setShowSearch, getCartCount, navigate } = useContext(ShopContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-50/40 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        <Link to='/' className='flex items-center'>
          <img src={Logo} className='w-6 size-16 xl:size-20
           sm:w-56 hover:opacity-80 transition-opacity duration-300' alt="SwiftWears Logo"/>
        </Link>

        <ul className='hidden md:flex gap-8 text-[13px] font-semibold tracking-widest text-gray-700'>
          {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item) => (
            <NavLink 
              key={item} 
              to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`} 
              className='relative group flex flex-col items-center'
            >
              <p className='group-hover:text-black transition-colors duration-300'>{item}</p>
              <span className='absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full'></span>
            </NavLink>
          ))}
        </ul>

        <div className='flex items-center gap-5'>
          <button 
            onClick={() => { setShowSearch(true); navigate('/collection'); }}
            className='hover:text-premium-accent transition-colors duration-300 p-1'
          >
            <CiSearch size={26} />
          </button>

          <div className='group relative'>
            <div onClick={() => navigate('/login')} className='hover:text-premium-accent transition-colors duration-300 p-1 cursor-pointer'>
              <CgProfile size={24} />
            </div>
            <div className='group-hover:block hidden absolute right-0 top-full pt-2'>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className='flex flex-col gap-1 py-3 px-2 w-40 bg-white shadow-xl rounded-lg border border-gray-100'
              >
                <p onClick={() => navigate('/login')} className='px-4 py-2 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer text-sm text-gray-600 hover:text-black'>
                  My Profile
                </p>
                <p onClick={() => navigate('/orders')} className='px-4 py-2 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer text-sm text-gray-600 hover:text-black'>
                  Orders
                </p>
                <p onClick={() => navigate('/login')} className='px-4 py-2 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer text-sm text-gray-600 hover:text-black'>
                  Logout
                </p>
              </motion.div>
            </div>
          </div>


          <Link to='/cart' className='relative p-1 hover:text-premium-accent transition-colors duration-300'>
            <IoCartOutline size={28} />
            <span className='absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white'>
              {getCartCount()}
            </span>
          </Link>

          <button onClick={() => setVisible(true)} className='md:hidden p-1'>
            <IoIosMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {visible && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='fixed inset-0 bg-white z-[60] flex flex-col'
          >
            <div className='flex items-center justify-between p-6 border-b'>
              <img src={Logo} className='w-40' alt="Logo"/>
              <button onClick={() => setVisible(false)}>
                <IoIosClose size={32} />
              </button>
            </div>
            <div className='flex flex-col p-6 gap-6'>
              {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item) => (
                <NavLink 
                  key={item} 
                  onClick={() => setVisible(false)} 
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  className='text-2xl font-medium text-gray-800'
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar;

