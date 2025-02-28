import React from 'react'

function NewsLetterBox() {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Join now & enjoy 20% off your first order!</p>
        <form className='flex gap-3 w-full sm:w-1/2 mt-5 text-center mx-auto'>
            <input className='w-full sm:flex-1 outline-none bg-gray-200 p-2 rounded-lg' type="Email" placeholder='Enter Your Email..' required/>
            <button type='submit' className='bg-black text-white py-4 px-10 text-xs rounded-lg'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox;