import Link from 'next/link';
import React from 'react';

export default function footer() {
  return (
    <div className=" border-[#2d2d2de9] border-t-[1px] bottom-0 ">
      <div className='flex justify-center
        xxs:py-2 xxs:px-4 xxs:mt-2 xxs:ml-4
        xs:py-4 xs:px-4 xs:mt-2 xs:ml-4
        sm:py-6 sm:px-4 sm:mt-3 sm:ml-4
        md:py-8 md:px-8 md:mt-4 md:ml-8
        lg:py-8 lg:px-16 lg:mt-4 lg:ml-4
        xl:py-8 xl:px-20 xl:mt-4 xl:ml-2.5
        2xl:py-12 2xl:px-24 2xl:mt-8 2xl:ml-3
        '>
          
        <p className="font-medium font-inter text-content-color
          xxs:text-p-xxs
          xs:text-p-footer
          sm:text-p-sm
          md:text-p-md
          lg:text-p-footer-lg
          xl:text-p-footer-lg
          2xl:text-p
          tracking-wider
          ">
            <span className="text-customGreenLight ">© Arwen Encarnacion. </span>
            All rights reserved. This site is built with {''}
            <Link href="https://nextjs.org/" legacyBehavior> 
              <a className= " hover:text-customGreenLight hover:opacity-90 transition delay-200 ease-in-out" target="_blank" rel="noopener noreferrer">NextJS</a>
            </Link>{' '}
            and {''}
            <Link href="https://tailwindcss.com/" legacyBehavior>
              <a className= " hover:text-customGreenLight hover:opacity-90 transition delay-200 ease-in-out" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
            </Link>, designed on {' '} 
            <Link href="https://www.framer.com/" legacyBehavior> 
              <a className= " hover:text-customGreenLight hover:opacity-90 transition delay-200 ease-in-out" target="_blank" rel="noopener noreferrer">Framer. </a>
            </Link>
        </p>
      </div>
    </div>
  );
}