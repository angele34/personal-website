import React, { useState } from "react";
import Link from 'next/link';

// Icons
import { IoCubeOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between fixed top-0 w-full z-20 border-b border-[#2d2d2de9]">
      <div className="flex items-center pt-4 pb-4 xs:pl-0 sm:pl-0 md:pl-16 lg:pl-32 xl:pl-36 text-white font-medium text-nav no-underline">
        {!isOpen && (
          <Link href="/">
            <IoCubeOutline size={30} className="cursor-pointer grid ml-8 mr-2 text-white hover:text-customGreenLight transition delay-100" />
          </Link>
        )}
        <div className="sm:hidden xs:hidden xxs:hidden ">
          <Link href="/school" className="px-2 py-1 hover:text-customGreenLight transition delay-100">School</Link>
          <Link href="#" className="px-2 py-1 hover:text-customGreenLight transition delay-100">About</Link>
          <Link href="/projects" className="px-2 py-1 hover:text-customGreenLight transition delay-100">Projects</Link>
        </div>
      </div>

      <div className="sm:hidden xs:hidden xxs:hidden flex items-center space-x-4 pr-20">
        <a href="https://github.com/angele34" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white hover:text-customGreenLight transition delay-100">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/angel-arwen-e-3a1b68246/" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white hover:text-customGreenLight transition delay-100">
          <FaLinkedin size={25} />
        </a>
      </div>
      
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden grid mr-6">
        {!isOpen ? (
          <button onClick={toggleMenu} className="text-white focus:outline-none  hover:text-customGreenLight transition delay-100 ">
            <RxHamburgerMenu size={30} />
          </button>
        ) : (
          <button onClick={toggleMenu} className="text-white focus:outline-none absolute top-4 right-4  hover:text-customGreenLight transition delay-100">
            <RxCross2 size={30} />
          </button>
        )}
      </div>
    
      {isOpen && (
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-col items-center justify-center w-full h-full py-8 text-white text-p-xl">
          <Link href="/school" className="py-1 hover:text-customGreenLight transition delay-100">School</Link>
          <Link href="#" className="py-1 hover:text-customGreenLight transition delay-100">About</Link>
          <Link href="/projects" className="py-1 hover:text-customGreenLight transition delay-100">Projects</Link>

          <div className="flex mt-4 space-x-4">
            <a href="https://github.com/angele34" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white hover:text-customGreenLight transition delay-100">
              <FaGithub size={25} />
            </a>
            <a href="https://www.linkedin.com/in/angel-arwen-e-3a1b68246/" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white hover:text-customGreenLight transition delay-100">
              <FaLinkedin size={25} />
            </a>
          </div>

        </div>
      )}
    </div>
  );
}
