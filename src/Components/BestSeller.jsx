import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 5))
    }, [])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-sm md:text-base text-gray-600'>
             Explore a wide range of products designed to elevate your look and meet your needs. From stylish apparel and footwear to accessories that add the perfect finishing touch, our latest collection is crafted with attention to detail and a passion for excellence.
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index) => (
                  <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller;