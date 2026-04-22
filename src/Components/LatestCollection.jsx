import { useContext, useEffect, useState } from 'react'
import React from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';


import { motion } from 'framer-motion';

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, [products]);
   
  return (
    <div className='my-20'>
      <div className='text-center py-12'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
          <p className='w-3/4 m-auto text-sm md:text-base text-gray-500 max-w-2xl'>
          Discover our latest and trendiest collections, carefully curated to bring you the best in style, comfort, and quality.
          </p>
      </div>
      
      {/* Rendering Product */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10'
      >
          {latestProduct.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))}
      </motion.div>                                                                                                                                                                         
    </div>
  )
}


export default LatestCollection;
