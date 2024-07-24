// src/components/Hero.tsx
import React from 'react';
import '../styles/globals.css';

export default function Hero() {
  return (
    <div className="container relative pb-24">
      {/* Gradient Circle on the Left */}
      <div className="absolute top-1/2 ml-[700px] transform -translate-y-1/2 w-[508px] h-[330px] bg-gradient-radial from-[#91aa5f]/30 to-[#121010]/30 blur-100 opacity-80 rounded-full z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 py-20 px-40 mr-[130px]">
        <div className='pt-32'>
          <h1 className='font-semibold'>Arwen Encarnacion
          <span className="text-customGreen">.</span>
          </h1>
          <div className="pr-40">
            <p>
              Hi! I&apos;m Arwen, a first-year Computer Science student at DLSU. I&apos;m currently fascinated with Machine Learning, Web Development, and Quantum Computing.
            </p>
            <p>
              When I&apos;m not behind my computer, I enjoy calligraphy, writing poetry, reading books, and playing electric guitar. If you want to learn more about me, check out my GitHub to see what awesome projects I&apos;ve worked on!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
