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
      className={`bg-site-primary text-white text-sm transition-all duration-300 top-bar ${
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
        <div className="flex space-x-3 text-[12px] font-medium items-center">
          {/* APA Link */}
          <div className="flex items-center">
            <Link href="/handbook" className="text-white hover:text-black">
              APA
            </Link>
            <span className="ps-2">|</span>
          </div>
          {/* Download Dropdown */}
          <div className="relative group">
            <Link href="#" className="inline-block text-white hover:text-black">
              Download
            </Link>
            <div className="absolute left-0 z-50 invisible w-40 mt-2 text-black transition-all duration-300 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
              <Link
                href="/downloads/file1.pdf"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                All necessary forms
              </Link>
              <Link
                href="/downloads/file2.pdf"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                For faculty
              </Link>
              <Link
                href="/downloads/file3.pdf"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                For students
              </Link>
              <Link
                href="/downloads/file3.pdf"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                For staff
              </Link>
            </div>
            <span className="ps-2">|</span>
          </div>
          <div className="relative group">
            <Link href="#" className="inline-block text-white hover:text-black">
              KAU Job
            </Link>
            <div className="absolute left-0 z-50 invisible w-40 mt-2 text-black transition-all duration-300 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
              <Link
                href="/downloads/file1.pdf"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Contractual Job
              </Link>
              <Link
                href="/downloads/file2.pdf"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Teacher & Officer
              </Link>
            </div>
            <span className="ps-2">|</span>
          </div>

          {/* Login Link */}
          <div className="flex items-center">
            <Link href="/login" className="text-white hover:text-black">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
