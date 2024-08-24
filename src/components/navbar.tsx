import React from "react";
import Link from 'next/link'
import Iconoir from 'iconoir/icons/iconoir.svg';

import { IoCubeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between fixed top-0 w-full z-20 border-b border-[#2d2d2de9]">
      <div className=" flex items-center pt-4 pb-4 xs:pl-0 sm:pl-0 md:pl-16 lg:pl-32 xl:pl-36 text-white font-medium text-nav no-underline">
        <Link href="/">
        <IoCubeOutline size={30} className="cursor-pointer grid ml-8 mr-2 text-white hover:text-customGreenLight transition delay-100"/>
        </Link>
        <Link href="school" className=" px-2 py-1 hover:text-customGreenLight transition delay-100">School</Link>
        <a href="#" className=" px-2 py-1 hover:text-customGreenLight transition delay-100">About</a>
        <Link href="/projects" className=" px-2 py-1 hover:text-customGreenLight transition delay-100 ">Projects</Link>
      </div>

      <div className="flex items-center space-x-4 pr-20">
        <a href="https://github.com/angele34" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white hover:text-customGreenLight transition delay-100">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/angel-arwen-e-3a1b68246/" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white hover:text-customGreenLight transition delay-100">
          <FaLinkedin size={25} />
        </a>
      </div>
    </div>
  );
};