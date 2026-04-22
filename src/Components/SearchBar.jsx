import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

function SearchBar() {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);

    return (
        <AnimatePresence>
            {showSearch && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className='bg-white/95 backdrop-blur-sm border-b border-gray-100 py-6'
                >
                    <div className='max-w-3xl mx-auto px-4 flex items-center gap-4'>
                        <div className='flex-1 flex items-center bg-gray-50 rounded-full px-6 py-3 border border-gray-200 focus-within:border-black transition-all duration-300'>
                            <img className='w-4 opacity-50' src={assets.search_icon} alt="Search" />
                            <input 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                                className='flex-1 outline-none bg-transparent text-sm ml-3 placeholder-gray-400' 
                                type="text" 
                                placeholder='Search for products, collections...'
                                autoFocus
                            />
                        </div>
                        <button 
                            onClick={() => setShowSearch(false)}
                            className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-300'
                        >
                            <img className='w-3 opacity-60' src={assets.cross_icon} alt="Close" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SearchBar;