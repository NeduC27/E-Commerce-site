import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

import { motion } from 'framer-motion';

function BestSeller() {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 5))
    }, [products])

  return (
    <div className='my-20'>
        <div className='text-center py-12'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-sm md:text-base text-gray-500 max-w-2xl'>
             Explore our most loved pieces, chosen by our community for their exceptional style and quality.
            </p>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10'
        >
            {
                bestSeller.map((item, index) => (
                  <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
        </motion.div>
    </div>
  )
}


export default BestSeller;