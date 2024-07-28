import React from 'react';

export default function footer() {
  return (
    <div className="border-t border-[#2d2d2de9] border-[1px] bottom-0 ">
      <div className='flex justify-center
        xs:py-4 xs:px-4 xs:mt-2 xs:ml-4
        sm:py-6 sm:px-4 sm:mt-3 sm:ml-4
        md:py-8 md:px-8 md:mt-4 md:ml-4
        lg:py-8 lg:px-16 lg:mt-4 lg:ml-2
        xl:py-8 xl:px-20 xl:mt-4 xl:ml-2.5
        2xl:py-12 2xl:px-24 2xl:mt-8 2xl:ml-3'>
          
        <p className="font-medium font-inter text-content-color
          xs:text-p-footer
          sm:text-p-sm
          md:text-p-md
          lg:text-p-footer-lg
          xl:text-p-footer-lg
          2xl:text-p
          tracking-wider
          ">
            <span className="text-customGreenLight ">© Arwen Encarnacion. </span>
            All rights reserved. This site is built with NextJS and Tailwind CSS, designed on Framer.
        </p>
      </div>
    </div>
  );
}