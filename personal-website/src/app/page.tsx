import React from 'react';

// Components
import Navigation from '../components/navbar';
import Hero from '../components/hero';
import Footer from '@/components/footer';

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />

      {/* Projects Section */}
      {/* <div className="container py-40 px-40">
        <h1 className='font-semibold'>Projects</h1>
        <p>This is another section with custom styling.</p>
      </div> */}

      {/* Footer */}
      <Footer />
    </>
  );
};

