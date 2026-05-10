"use client";
import React from 'react';
import { motion } from "framer-motion";

// Components
import Navigation from '../components/navbar';
import Hero from '../components/hero';
import Footer from '@/components/footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
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

        <div className="relative z-10 pb-10 pt-4">
          <Hero />
        </div>
        
        <div className="absolute bottom-0 w-full z-10">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
