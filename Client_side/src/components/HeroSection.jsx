import React from 'react'
import myImage from '../assets/2.png';

function HeroSection() {
  return (
    <>
      <div className='w-full h-[50vh]  mt-[76px]'>
      <img src={myImage} alt="doctor image" className="w-full h-auto" />
      </div>
    </>
  )
}

export default HeroSection
