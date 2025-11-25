"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
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
      <div className="container flex items-center justify-between py-2 mx-auto">
        {/* Social Icons */}
        <div className="flex space-x-2">
          {/* Social Icons */}
          <div className="z-50 flex space-x-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="flex items-center justify-center w-8 h-8 transition-colors duration-300 rounded-full bg-white/10 hover:bg-white/20"
                >
                  <Icon className="text-white" size={14} />
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right Links */}
        <div className="flex space-x-3 text-[14px] font-light items-center">
          {/* APA Link */}
          <div className="flex items-center">
            <Link
              href="/apa"
              className="px-3 pt-[2px] text-white hover:text-black font-normal font-merriweather"
            >
              APA
            </Link>
            <span className="ps-2">|</span>
          </div>
          {/* Download Dropdown */}
          <div className="relative group ">
            <Link
              href="#"
              className="inline-block px-3 pt-[2px] text-white hover:text-black font-normal font-merriweather"
            >
              Download
            </Link>

            <div className="absolute left-0 z-50 invisible mt-2 text-black transition-all duration-300 bg-white border border-gray-200 rounded shadow-lg opacity-0 w-60 group-hover:opacity-100 group-hover:visible">
              {/* Dropdown item 1 */}
              <Link
                href="/downloads/file1.pdf"
                className="flex items-center justify-between px-4 py-3 drop-link hover:bg-gray-200 group"
              >
                <span>All necessary forms</span>
                <span className="ml-2 drop-icon">→</span>
              </Link>

              {/* Dropdown item 2 */}
              <Link
                href="/downloads/file2.pdf"
                className="flex items-center justify-between px-4 py-3 drop-link hover:bg-gray-200 group"
              >
                <span>For faculty</span>
                <span className="ml-2 transition-opacity duration-300 opacity-0 drop-icon group-hover:opacity-100">
                  →
                </span>
              </Link>

              {/* Dropdown item 3 */}
              <Link
                href="/downloads/file3.pdf"
                className="flex items-center justify-between px-4 py-3 drop-link hover:bg-gray-200 group"
              >
                <span>For students</span>
                <span className="ml-2 transition-opacity duration-300 opacity-0 drop-icon group-hover:opacity-100">
                  →
                </span>
              </Link>

              {/* Dropdown item 4 */}
              <Link
                href="/downloads/file4.pdf"
                className="flex items-center justify-between px-4 py-3 drop-link hover:bg-gray-200 group"
              >
                <span>For staff</span>
                <span className="ml-2 transition-opacity duration-300 opacity-0 drop-icon group-hover:opacity-100">
                  →
                </span>
              </Link>
            </div>
            <span className="ps-2">|</span>
          </div>
          <div className="relative group">
            <Link
              href="#"
              className="inline-block px-3 pt-[2px] text-white hover:text-black font-normal font-merriweather"
            >
              KAU Job
            </Link>

            <div className="absolute left-0 z-50 invisible mt-2 text-black transition-all duration-300 bg-white border border-gray-200 rounded shadow-lg opacity-0 w-60 group-hover:opacity-100 group-hover:visible">
              {/* Dropdown item 1 */}
              <Link
                href="/downloads/file1.pdf"
                className="flex items-center justify-between px-4 py-3 drop-link hover:bg-gray-200 group"
              >
                <span>Contractual Job</span>
                <span className="ml-2 drop-icon">→</span>
              </Link>

              {/* Dropdown item 2 */}
              <Link
                href="/downloads/file2.pdf"
                className="flex items-center justify-between px-4 py-3 drop-link hover:bg-gray-200 group"
              >
                <span>Teacher & Officer</span>
                <span className="ml-2 transition-opacity duration-300 opacity-0 drop-icon group-hover:opacity-100">
                  →
                </span>
              </Link>
            </div>
            <span className="ps-2">|</span>
          </div>

          {/* Login Link */}
          <div className="flex items-center">
            <Link
              href="/login"
              className="px-3 pt-[2px] text-white hover:text-black font-normal font-merriweather"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
