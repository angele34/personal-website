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
            <div className='md:pt-8'>
              <h1 className='text-customGreenLight pl-4 break-words font-helvetica font-semibold tracking-widest text-opacity-90 xxs:text-h1-xxs xs:text-h1-xs sm:text-h1-sm md:text-h1-md lg:text-h1-lg xl:text-h1-xl 2xl:text-h1-2xl mb-8'>
                School.
              </h1>
            </div>

            {/* Description */}
            <div className="pl-4">
              <p className=' text-content-color font-instrument_sans font-normal xxs:text-p-xxs xs:text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg xl:text-p-lg 2xl:text-p-2xl mb-4 md:mb-6 tracking-wider'>
                I&apos;m currently a 1st-year undergrad student at DLSU, taking Computer Science with a major in <span className="font-semibold">Computer Systems Engineering</span>. You can read about the relevant courses I&apos;m taking and what things I&apos;m currently involved in campus here.
              </p>
            </div>

            <div className='pt-8'>
              <h1 className="text-white px-4 sm:pl-8 xxs:pl-12 font-normal tracking-widest break-words" style={{ textDecoration: 'underline', textDecorationColor: '#A3C269', fontSize: '1.9rem' }} >
              2024-2025
              </h1>
            </div>
        </div>

        {/* Cards */}
               
        <div className="xl:items-center xl:justify-center pb-6 text-center text-content-color-2 px-4">
          <div className="grid gap-2 2xl:pl-40 2xl:pr-40 xl:pl-40 xl:pr-40 pl-8 pr-8 2xl:grid-cols-3 xl:grid-cols-3 sm:text-p-xs" style={{ fontSize:'0.9rem'}}>
            <div className="bg-custom2 p-3">CCICOMP <br /> Introduction to Computing</div>
            <div className="bg-custom2 p-3">CCPROG1 <br /> Logic Formulation and Introductory Programming</div>
            <div className="bg-custom2 p-3">MTH101A <br /> Foundation Course in Mathematics</div>
        </div>
       </div>

      <div className="xl:items-center xl:justify-center pb-6 text-center text-content-color-2 px-4">
          <div className="grid gap-2 2xl:pl-40 2xl:pr-40 xl:pl-40 xl:pr-40 pl-8 pr-8 2xl:grid-cols-3 xl:grid-cols-3 sm:text-p-xs" style={{ fontSize:'0.9rem'}}>
            <div className="bg-customGreenLight p-3">CSMATH1 <br /> Differential Calculus</div>
            <div className="bg-customGreenLight p-3 ">CCPROG2 <br /> Programming with Structured Data Types</div>
            <div className="bg-customGreenLight p-3">CCDSTRU <br /> Discrete Structures</div>
        </div>
       </div>

       <div className="xl:items-center xl:justify-center pb-20 text-center text-content-color-2 px-4">
          <div className="grid gap-2 2xl:pl-40 2xl:pr-40 xl:pl-40 xl:pr-40 pl-8 pr-8 2xl:grid-cols-3 xl:grid-cols-3 sm:text-p-xs" style={{ fontSize:'0.95rem'}}>
            <div className="bg-custom2 p-3">CSMATH2 <br /> Linear Algebra</div>
            <div className="bg-custom2 p-3">CCPROG3 <br /> Object Oriented Programming</div>
            <div className="bg-custom2 p-3">CCDSALG <br /> Data Structures and Algorithms</div>
            <div className="bg-customGreenLight p-3">STT101A <br /> Foundation Course in Statistics</div>
        </div>
       </div>


      
      <div className="text-content-color text-left pt-4 xl:pl-48 lg:pl-16 md:pl-16 md:pr-16 pb-10 sm:pl-12 xs:pl-8 sm:pr-8 xs:pr-8">
        <p className="text-white" style={{ textDecoration: 'underline', textDecorationColor: '#A3C269', fontSize: '1.1rem'}}>Orgs/Clubs in Campus:</p>
        <ul className="list-disc pl-6 pt-2">
          <li>La Salle Computer Society</li>
          <li>
            DLSU Google Developer Student Clubs <span className="italic">(Project Management Developer)</span>
          </li>
          <li>DLSU Mathematics Circle</li>
          <li>AWS Archer&apos;s Club</li>
          <li>
            DLSU College of Computer Studies CATCH2T28 <span className="italic">(Research and Development Executive)</span>
          </li>
        </ul>
      </div>

      <div className="text-content-color text-left pt-4 xl:pl-48 lg:pl-16 md:pl-16 md:pr-16 pb-10 sm:pl-12 xs:pl-8 sm:pr-8 xs:pr-8">
        <p className="text-white" style={{ textDecoration: 'underline', textDecorationColor: '#A3C269', fontSize: '1.1rem' }}>Orgs outside campus:</p>
        <ul className="list-disc pl-6 pt-2">
          <li>Quantum Computing Society Philippines <span className="italic">(Web Development Product Engineer)</span></li>
        </ul>
      </div>
          <div className="bottom-0 w-full z-10">
            <Footer />
          </div>
        </motion.div>
        </div>
    );
}