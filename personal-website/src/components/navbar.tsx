// src/components/Navbar.tsx
import React from "react";
import Image from "next/image";
import "../styles/navbar.css";

import { IoCubeOutline } from "react-icons/io5";
// import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="nav">
      <div>
        {/* <Image
          className="logo"
          src="/favicon.ico"
          alt="Logo"
          width={45}
          height={40}
        /> */}

        <IoCubeOutline size={30} className="cursor-pointer"/>
        <a href="#">School</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        {/* <a href="#">Experience</a> */}
        <a href="#">Blog</a>
      </div>

      <div className="icon-container pr-20">
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