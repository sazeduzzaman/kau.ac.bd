"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface MobileDrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, closeDrawer }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full z-50 transform transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 shadow-lg bg-white/70 backdrop-blur-md">
        <Logo />
        <button
          onClick={closeDrawer}
          className="text-2xl text-gray-800 hover:text-[#498dbd] transition-colors duration-300"
        >
          ✕
        </button>
      </div>

      {/* Menu */}
      <ul className="flex flex-col h-full p-4 space-y-2 bg-white/70 backdrop-blur-md">
        <li>
          <Link
            href="/"
            className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-gradient-to-r hover:from-[#498dbd]/20 hover:to-[#346f96]/20 transition-all duration-300"
          >
            Home
          </Link>
        </li>

        <li>
          <details className="group">
            <summary className="px-3 py-2 rounded-lg cursor-pointer text-gray-800 hover:bg-gradient-to-r hover:from-[#498dbd]/20 hover:to-[#346f96]/20 transition-all duration-300">
              Service
            </summary>
            <ul className="flex flex-col pl-4 mt-1 space-y-1">
              <li>
                <details className="group">
                  <summary className="px-3 py-2 rounded-lg cursor-pointer text-gray-800 hover:bg-gradient-to-r hover:from-[#498dbd]/20 hover:to-[#346f96]/20 transition-all duration-300">
                    Category 1
                  </summary>
                  <ul className="flex flex-col pl-4 mt-1 space-y-1">
                    <li>
                      <details className="group">
                        <summary className="px-3 py-2 rounded-lg cursor-pointer text-gray-800 hover:bg-gradient-to-r hover:from-[#498dbd]/20 hover:to-[#346f96]/20 transition-all duration-300">
                          Subcategory 1
                        </summary>
                        <ul className="flex flex-col pl-4 mt-1 space-y-1">
                          <li>
                            <Link
                              href="/"
                              className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-[#498dbd]/20 transition-colors duration-300"
                            >
                              Sub Subcategory 1
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/"
                              className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-[#498dbd]/20 transition-colors duration-300"
                            >
                              Sub Subcategory 2
                            </Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-[#498dbd]/20 transition-colors duration-300"
                      >
                        Subcategory 2
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-[#498dbd]/20 transition-colors duration-300"
                >
                  Category 2
                </Link>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-[#498dbd]/20 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-[#498dbd]/20 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/apply"
            className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-gradient-to-r hover:from-[#498dbd]/20 hover:to-[#346f96]/20 transition-all duration-300"
          >
            Apply
          </Link>
        </li>

        {/* Contact Info at Bottom */}
        <div className="pt-4 mt-20 border-t border-gray-300">
          <h4 className="mb-2 font-semibold text-gray-700">Contact Info</h4>
          <ul className="flex flex-col space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#498dbd]" /> +880 1234 567890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#498dbd]" /> info@kau.edu.bd
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#498dbd]" /> Khulna, Bangladesh
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default MobileDrawer;
