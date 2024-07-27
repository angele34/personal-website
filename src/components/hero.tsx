import React from 'react';
import '../styles/globals.css';

export default function Hero() {
  return (
    <div className="relative pb-10 mb-10 px-4 sm:px-8 md:px-16 lg:px-32">

      {/* Gradient Circle on the Left */}
      <div className="absolute custom-top left-[55%] md:left-[30%] lg:left-[40%] transform -translate-y-1/2 w-[32rem] h-[25rem] bg-gradient-radial from-[#91aa5f]/30 to-[#121010]/30 blur-[100px] opacity-80 rounded-full z-0">
      </div>
      
      {/* Content */}
      <div className="relative 
        py-40 
        px-40
        
        xs:px-0
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
    
            mb-6
            md:mb-8 
            leading-[1.25]
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
              tracking-wide
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
              tracking-wide
             '>
            When I&apos;m not behind my computer, I enjoy calligraphy, writing poetry, reading books, and playing electric guitar. If you want to learn more about me, check out my GitHub to see what awesome projects I&apos;ve worked on!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
