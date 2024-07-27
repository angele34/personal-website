import React from "react";

import { IoCubeOutline } from "react-icons/io5";
// import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between fixed top-0 w-full z-20 border-b border-[#2d2d2de9]">
      <div className=" flex items-center
      pt-2
      pb-2
      xs:pl-0
      sm:pl-0
      md:pl-16
      lg:pl-32
      xl:pl-36
      ">
        <IoCubeOutline size={30} className="cursor-pointer"/>
        <a href="#" className=" text-white font-medium text-p-md px-2 py-1 no-underline">School</a>
        <a href="#" className=" text-white font-medium text-p-md px-2 py-1 no-underline">About</a>
        <a href="#" className=" text-white font-medium text-p-md px-2 py-1 no-underline">Projects</a>
        <a href="#" className=" text-white font-medium text-p-md px-2 py-1 no-underline">Blog</a>
      </div>

      <div className="flex items-center space-x-4 pr-20">
        <a href="https://github.com/angele34" className="cursor-pointer">
          <FaGithub size={25} /> 
        </a>
        <a href="https://www.linkedin.com/in/angel-arwen-e-3a1b68246/" className="cursor-pointer">
          <FaLinkedin size={25} />
        </a>
        {/* <IoIosMail size={32} />  */}
      </div>
      
    </div>
  );
};