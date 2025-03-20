import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AnimatedButton from './animated-button'

export const Hero = () => {
  return (
    <div className='w-11/12 max-2-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

      <h3 className='flex items-center gap-2 text-xl md:text-3xl mb-3 font-Ovo'>
      👋 Hi! I&apos;m <strong>Aditya Pradhan</strong> 
      </h3>
      <h1 className='text-3xl lg:text-[66px] font-Ovo mb-5'> Software developer based in India</h1>
      <p className='max-w-2xl mx-auto text-xl font-Ovo leading-8'>
       I&apos;ve led technical workshops, developed platforms enhancing student learning and many more.
       Always exploring new challenges and innovations! 🚀
      </p>
  <AnimatedButton/>
    </div>
  )
}
