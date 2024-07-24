import React from 'react';
import '../styles/globals.css';

export default function footer() {
  return (
    <div className="footer container custom-border-top">
      <div className='flex justify-center py-10 px-40 mt-5 ml-2'>
        <p className="text-base wider font-medium z-50">
            <span className="text-customGreenLight">© 2024 Arwen Encarnacion. </span>
            All rights reserved. This site is built with NextJS and Tailwind CSS, designed on Framer.
        </p>
      </div>
    </div>
  );
}