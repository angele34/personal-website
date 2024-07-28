import React from 'react';
import '../styles/globals.css';

export default function Hero() {
  return (
    <div className="relative pb-10 mb-10 px-4 sm:px-8 md:px-16 lg:px-32">

      {/* Gradient Circle on the Left */}
      <div className="absolute custom-top left-[57%] md:left-[30%] transform -translate-y-1/2 w-[30rem] h-[26rem] bg-gradient-radial from-[#91aa5f]/30 to-[#121010]/30 blur-[100px] opacity-80 rounded-full z-0">
      </div>
      
      {/* Content */}
      <div className="relative 
        py-40 
        px-40
        
        xs:px-8
        sm:px-4 
        md:py-20 
        md:px-8 
        lg:px-8
        xl:mr-52
        ">
        <div className='pt-16 md:pt-32'>
          <h1 className='text-white 
            font-helvetica font-semibold
            text-opacity-90 

            xs:text-h1-xs
            sm:text-h1-sm 
            md:text-h1
            lg:text-h1
            xl:text-h1
            2xl:text-h1
    
            mb-8
            md:mb-8 
            '>
            Arwen Encarnacion
            <span className="text-customGreen">.</span>
          </h1>
          <div className="pr-4 md:pr-8 lg:pr-16">
            <p className=' text-content-color 
              font-inter 

              xs:text-p-xs
              sm:text-p-sm
              md:text-p-md
              lg:text-p-lg
              xl:text-p
              2xl:text-p

              mb-4 
              md:mb-6 
              tracking-widest
              '>
              Hi! I&apos;m Arwen, a first-year Computer Science student at DLSU. I&apos;m currently fascinated with Machine Learning, Web Development, and Quantum Computing.
            </p>
            <p className='  text-content-color 
              font-inter 

              xs:text-p-xs
              sm:text-p-sm
              md:text-p-md
              lg:text-p-lg
              xl:text-p
              2xl:text-p

              mb-4 
              md:mb-6 
              tracking-widest
             '>
            When I&apos;m not behind my computer, I enjoy calligraphy, writing poetry, reading books, and playing electric guitar. If you wish to connect with me, feel free to check out any of my socials!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
