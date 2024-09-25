"use client";
import React from 'react';

import { motion } from "framer-motion";

import Navigation from '../../components/navbar';
import Footer from '@/components/footer';

export default function School() {
    return (
      <div className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Grainy bg */}
        <div className="absolute top-0 left-0 w-full h-full bg-transparent bg-cover z-[-1]" style={{ filter: 'url(/grainy.svg#grain)' }}></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 flex-grow"
        >
          <Navigation />
          <div className="relative whitespace-normal pt-20 pb-8 pl-40 xxs:px-2 xs:px-8 sm:px-4 md:py-16 md:px-8 lg:px-8 xl:mr-52">

            {/* Title */}
            <div className='pt-16 md:pt-32'>
              <h1 className='text-customGreenLight pl-4 break-words font-helvetica font-semibold tracking-widest text-opacity-90 xxs:text-h1-xxs xs:text-h1-xs sm:text-h1-sm md:text-h1-md lg:text-h1-lg xl:text-h1-xl 2xl:text-h1-2xl mb-8'>
                School.
              </h1>
            </div>

            {/* Description */}
            <div className="pl-4">
              <p className=' text-content-color font-instrument_sans font-normal xxs:text-p-xxs xs:text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg xl:text-p-lg 2xl:text-p-2xl mb-4 md:mb-6 tracking-wider'>
                I&apos;m currently an undergrad student at DLSU taking CS with a major in Computer Systems Engineering. You can read about the relevant courses I&apos;m taking and what things I&apos;m currently involved in here!
              </p>
            </div>

            <div className='pt-8'>
              <h1 className="text-white px-4 sm:pl-8 xxs:pl-12 font-normal tracking-widest break-words" style={{ textDecoration: 'underline', textDecorationColor: '#A3C269', fontSize: '2.4rem' }} >
              2024
              </h1>
            </div>
        </div>

        {/* Cards */}
        
        
        {/* style={{ background: 'linear-gradient(to , #eaf6cf, #A3C269)' }} */}

        <div className="xl:items-center xl:justify-center pb-28 text-center px-4">
          <div className="grid gap-2 2xl:pl-40 2xl:pr-40 xl:pl-40 xl:pr-40 pl-8 pr-8 2xl:grid-cols-3 xl:grid-cols-3">
            <div className="bg-customGreenLight p-3">CCICOMP <br /> Introduction to Computing</div>
            <div className="bg-custom2 p-3">CCPROG1 <br /> Logic Formulation and Introductory Programming</div>
            <div className="bg-customGreenLight p-3">MTH101A <br /> Foundation Course in Mathematics</div>
        </div>
       </div>

          <div className="bottom-0 w-full z-10">
            <Footer />
          </div>
        </motion.div>
        </div>
    );
}