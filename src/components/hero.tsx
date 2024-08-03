import React from 'react';
import '../styles/globals.css';

export default function Hero() {
  return (
    <div className="relative pb-10 mb-10 px-4 sm:px-8 md:px-16 lg:px-32 flex justify-center">
      {/* Gradient Circle on the Left */}
      <div className="absolute custom-top left-[57%] md:left-[45%] sm:left-[28%] xs:left-[25%] transform -translate-y-1/2 w-[30rem] h-[26rem] bg-gradient-radial from-[#91aa5f]/30 to-[#121010]/30 blur-[100px] opacity-80 rounded-full z-0">
      </div>
      {/* Content */}
      <div className="relative 
        whitespace-normal
        py-36 
        px-40
        xxs:px-2
        xs:px-8
        sm:px-4 
        md:py-20 
        md:px-8 
        lg:px-8
        xl:mr-52
        ">
        <div className='pt-16 md:pt-32'>
          <h1 className='text-white 
            break-words
            font-helvetica
            font-semibold
            tracking-widest
            text-opacity-90 
            xxs:text-h1-xxs
            xs:text-h1-xs
            sm:text-h1-sm 
            md:text-h1-md
            lg:text-h1-lg
            xl:text-h1-xl
            2xl:text-h1-2xl
            mb-8
            '>
            Arwen Encarnacion<span className="text-customGreen">.</span></h1>
          <div className="pr-4 md:pr-8 lg:pr-16">
            <p className=' text-content-color 
              font-instrument_sans
              font-normal
              xxs:text-p-xxs
              xs:text-p-xs
              sm:text-p-sm
              md:text-p-md
              lg:text-p-lg
              xl:text-p-xl
              2xl:text-p-2xl
              mb-4 
              md:mb-6 
              tracking-wider
              '>
              Hi! I&apos;m Arwen, a student at DLSU majoring in Computer Science. I&apos;m currently fascinated with Machine Learning and Quantum Computing.
            </p>
            <p className='  text-content-color 
              font-instrument_sans
              font-normal
              xxs:text-p-xxs
              xs:text-p-xs
              sm:text-p-sm
              md:text-p-md
              lg:text-p-lg
              xl:text-p-xl
              2xl:text-p-2xl
              mb-4 
              md:mb-6 
              tracking-wider
             '>
              When I&apos;m not behind my computer, I enjoy calligraphy, writing poetry, reading books, and playing electric guitar. If you wish to connect with me, feel free to check out any of my socials!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
