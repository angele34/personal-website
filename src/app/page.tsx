import React from 'react';

// Components
import Navigation from '../components/navbar';
import Hero from '../components/hero';
import Footer from '@/components/footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Grainy bg */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-[-1]" style={{ filter: 'url(/grainy.svg#grain)' }}></div>
      
      {/* Components */}
      <Navigation />
      <div className="relative z-10 pb-10">
        <Hero />
      </div>
      
      <div className="absolute bottom-0 w-full z-10">
        <Footer />
      </div>
      
    </div>
  );
}
