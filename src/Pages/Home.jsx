import React, { useContext } from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsLetterBox from '../Components/NewsLetterBox'


function Home() {
   
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
