"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

interface TopbarProps {
  isSticky: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ isSticky }) => {
  const topbarRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={topbarRef}
      className={`bg-site-primary  text-white text-sm transition-all duration-300 top-bar ${
        isSticky ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
      }`}
    >
      <div className="container flex items-center justify-between px-4 py-1 mx-auto">
        {/* Social Icons */}
        <div className="flex space-x-2">
          <Link
            href="#"
            className="flex items-center justify-center w-6 h-6 text-black transition bg-white rounded-full hover:bg-blue-700"
          >
            <FaFacebookF size={12} />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center w-6 h-6 text-black transition bg-white rounded-full hover:bg-blue-500"
          >
            <FaTwitter size={12} />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center w-6 h-6 text-black transition bg-white rounded-full hover:bg-pink-600"
          >
            <FaInstagram size={12} />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center w-6 h-6 text-black transition bg-white rounded-full hover:bg-blue-800"
          >
            <FaLinkedinIn size={12} />
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex space-x-3 text-[12px] font-medium">
          <div className="flex">
            <div className="flex items-center text-white hover:text-black ">
              <Link href="/handbook">HANDBOOK</Link>
            </div>
            <span className="pb-1 ps-3">|</span>
          </div>
          <div className="flex">
            <div className="flex items-center text-white hover:text-black ">
              <Link href="/career">CAREER</Link>
            </div>
            <span className="pb-1 ps-3">|</span>
          </div>
          <div className="flex">
            <div className="flex items-center text-white hover:text-black ">
              <Link href="/NOC/GO">NOC/GO</Link>
            </div>
            <span className="pb-1 ps-3">|</span>
          </div>
          <div className="flex">
            <div className="flex items-center text-white hover:text-black ">
              <Link href="/login">LOGIN</Link>
            </div>
            {/* <span className="pb-1 ps-3">|</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
