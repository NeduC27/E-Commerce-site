import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProductItem({id, image, name, price}) {
    const {currency} = useContext(ShopContext);

    return (
        <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300'
        >
            <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
                <div className='overflow-hidden aspect-[3/4]'>
                    <img className='w-full h-full object-cover hover:scale-110 transition-transform duration-700' src={image[0]} alt={name}/>
                </div>
                <div className='p-5'>
                    <p className='text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold'>New Collection</p>
                    <p className='text-sm font-medium text-gray-800 line-clamp-1 mb-2'>{name}</p>
                    <p className='text-lg font-bold text-black'>{currency}{price}</p>
                </div>
            </Link>
        </motion.div>
    )
}

export default ProductItem;