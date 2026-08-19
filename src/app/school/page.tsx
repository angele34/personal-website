"use client";
import React from 'react';

import { motion } from "framer-motion";

import Navigation from '../../components/navbar';
import Footer from '@/components/footer';

export default function School() {
    return (
      <div className="relative min-h-screen overflow-hidden flex flex-col 2xl:px-32">
        {/* Grainy bg */}
        <div
          className="absolute inset-0 pointer-events-none z-[-1] opacity-20"
          style={{
            background: "#ffffff",
            filter: "url(#grain)",
          }}
        />

        <svg className="absolute w-0 h-0">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
        </svg>
        
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
              <h1 className='text-green-light pl-4 break-words font-helvetica font-semibold tracking-widest text-opacity-90 xxs:text-h1-xxs xs:text-h1-xs sm:text-h1-sm md:text-h1-md lg:text-h1-lg xl:text-h1-xl 2xl:text-h1-2xl mb-8'>
                School.
              </h1>
            </div>

            {/* Description */}
            <div className="pl-4 pr-8">
              <p className=' text-content font-sans_serif font-normal xxs:text-p-xxs xs:text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg xl:text-p-md 2xl:text-p-xl mb-4 md:mb-6 tracking-wider'>
                I&apos;m currently a Sophomore at DLSU, taking Computer Science with a major in <span className="font-semibold">Software Technology</span>. You can read about the relevant courses I&apos;m taking  what things I&apos;m currently involved in campus here.
              </p>
            </div>
        

        {/* Cards */}
        <div>
          <div className="pt-8 pb-4 px-4 text-content-dark">

            <h1
              className="text-white pb-8 sm:pl-8 xxs:pl-12 font-normal tracking-widest break-words text-[1.9rem]"
              style={{ textDecoration: "underline", textDecorationColor: "#A3C269" }}
            >
              2024-2025
            </h1>

            <div className="pb-8 text-center">
              <div className="grid gap-2 grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 sm:text-p-xs">

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">CCICOMP</div>
                  <div className="text-sm opacity-90">Introduction to Computing</div>
                </div>

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">CCPROG1</div>
                  <div className="text-sm opacity-90">Logic Formulation and Introductory Programming</div>
                </div>

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">MTH101A</div>
                  <div className="text-sm opacity-90">Foundation Course in Mathematics</div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CSMATH1</div>
                  <div className="text-sm opacity-90">Differential Calculus</div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CCPROG2</div>
                  <div className="text-sm opacity-80">Programming with Structured Data Types</div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CCDSTRU</div>
                  <div className="text-sm opacity-90">Discrete Structures</div>
                </div>

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">CSMATH2</div>
                  <div className="text-sm opacity-90">Linear Algebra</div>
                </div>

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">CCPROG3</div>
                  <div className="text-sm opacity-90">Object Oriented Programming</div>
                </div>

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">CCDSALG</div>
                  <div className="text-sm opacity-90">Data Structures and Algorithms</div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">STT101A</div>
                  <div className="text-sm opacity-80">Foundation Course in Statistics</div>
                </div>

              </div>
            </div>

            {/* 2025-2026 */}
            <div className="pb-8">
              <h1
                className="text-white sm:pl-8 xxs:pl-12 font-normal tracking-widest break-words text-[1.9rem]"
                style={{ textDecoration: "underline", textDecorationColor: "#A3C269" }}
              >
                2025-2026
              </h1>
            </div>

            <div className="pb-8 text-center">
              <div className="grid gap-2 grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 sm:text-p-xs">

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CSADPRG</div>
                  <div className="text-sm opacity-80">
                    Advanced Programming and Theory of Programming Languages
                  </div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CCINFOM</div>
                  <div className="text-sm opacity-90">Information Management</div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CSINTSY</div>
                  <div className="text-sm opacity-90">Introduction to Intelligent Systems</div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CSALGCM</div>
                  <div className="text-sm opacity-90">Algorithms and Complexity</div>
                </div>

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">CSARCH1</div>
                  <div className="text-sm opacity-80">
                    Introduction to Computer Organization and Architecture 1
                  </div>
                </div>

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">CCAPDEV</div>
                  <div className="text-sm opacity-90">Web Application Development</div>
                </div>

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">ST-MATH</div>
                  <div className="text-sm opacity-90">Integral Calculus</div>
                </div>

                <div className="bg-accent-light p-3">
                  <div className="text-sm tracking-wide">ST-ALGCM</div>
                  <div className="text-sm opacity-90">Advanced Algorithms and Complexities</div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CSMODEL</div>
                  <div className="text-sm opacity-80">
                    Statistical Modelling and Simulation
                  </div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CSSWENG</div>
                  <div className="text-sm opacity-90">Software Engineering</div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">CSNETWK</div>
                  <div className="text-sm opacity-90">Introduction to Computer Networks</div>
                </div>

                <div className="bg-green-light p-3">
                  <div className="text-sm tracking-wide">STHCIUX</div>
                  <div className="text-sm opacity-90">Human Computer Interactions</div>
                </div>

              </div>
            </div>

          </div>
      </div>

        <div className="text-content text-left pt-8 px-8">
          <p className="text-white" style={{ textDecoration: 'underline', textDecorationColor: '#A3C269', fontSize: '1.1rem'}}>Orgs/Clubs in Campus:</p>
          <ul className="list-disc pl-6 pt-2">
            <li>
              La Salle Computer Society<span className="italic">(Junior Officer)</span>
            </li>

            <li>
              DLSU Google Developer Student Clubs <span className="italic">(Project Management Developer)</span>
            </li>

            <li>
              DLSU College of Computer Studies CATCH2T28 <span className="italic">(Research and Development Executive)</span>
            </li>
            
            <li>
              DLSU Badminton Society
            </li>

            <li>
              DLSU Society of Manufacturing Engineers
            </li>
          </ul>

          <div className="pt-8">
            <p className="text-white" style={{ textDecoration: 'underline', textDecorationColor: '#A3C269', fontSize: '1.1rem'}}>Orgs outside campus:</p>
            <ul className="list-disc pt-2 pl-6">
              <li>Quantum Computing Society PH <span className="italic">(Web Development Product Engineer)</span></li>
            </ul>
          </div>
          </div>
      </div>

          <div className="bottom-0 w-full z-10">
            <Footer />
          </div>

        </motion.div>
      </div>
    );
}