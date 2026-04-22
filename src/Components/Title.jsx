import React from 'react'
import { motion } from 'framer-motion';

function Title({text1, text2}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='inline-flex flex-col gap-1 items-center mb-10'
    >
        <div className='flex gap-3 items-center'>
          <p className='text-gray-400 text-3xl sm:text-4xl prata-regular uppercase tracking-widest'>
            {text1} <span className='text-gray-900 font-medium'>{text2}</span>
          </p>
        </div>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='h-[2px] bg-black'
        ></motion.div>
    </motion.div>
  )
}

export default Title;