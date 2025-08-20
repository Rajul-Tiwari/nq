import {  Lifes } from '@/assets/Images'
import Image from 'next/image'
import React from 'react'

const LifeChanging = () => {
  return (
    <div className='py-16 mx-auto max-w-7xl'>
      <div className='flex'>
        <div className='w-[40%]'>
            <p className='text-lg w-[70%]  font-semibold font-hk-grotesk text-[#1d1e3d]'>GLOBAL DATA INTELLIGENCE: NYQUISTPHARMA</p>
            <h1 className='text-[40px] font-semibold font-hk-grotesk'>Drive Life-Changing  Innovation</h1>
            <p className='text-lg font-normal font-hk-grotesk text-[#1d1e3d]'>NyquistPharma serves as your extensive resource for clinical pipeline and existing therapy data in the world&apos;s largest markets. With our platform, you can effortlessly enhance clinical trial design, streamline global product launches, prioritize portfolios, and evaluate market access.</p>
            <button className='text-base font-medium font-hk-grotesk bg-[#f1b008] px-8 py-3 mt-4 rounded-full'>SCHEDULE A DEMO</button>
        </div>
        <div className='w-[60%]'>
            <Image src={Lifes.src} alt="Life changing dashboard" width={100} height={100} className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}

export default LifeChanging
