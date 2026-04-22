import React from 'react'
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

function OurPolicy() {
  const policies = [
    { icon: assets.exchange_icon, title: 'Easy Exchange', desc: 'We offer hassle-free exchange policies' },
    { icon: assets.quality_icon, title: '7-Day Return', desc: 'We provide 7-day free return windows' },
    { icon: assets.support_img, title: 'Concierge Support', desc: 'We provide 24/7 dedicated customer care' }
  ];

  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-4 text-center py-24'>
      {policies.map((policy, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className='flex flex-col items-center'
        >
          <img src={policy.icon} className='w-12 mb-6 opacity-80' alt={policy.title}/>
          <p className='font-bold text-gray-800 tracking-wider mb-2'>{policy.title}</p>
          <p className='text-gray-400 text-sm max-w-[200px]'>{policy.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default OurPolicy;