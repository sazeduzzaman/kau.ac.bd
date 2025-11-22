"use client";

import React, { useState } from "react";
import { FaHome, FaUser, FaSearch, FaBars, FaHammer } from "react-icons/fa";
import MobileDrawer from "../Header/MobileDrawer";
import Link from "next/link";

const BottomBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Modern Floating Bottom Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[94%] bg-white/80 backdrop-blur-md border border-white/30 rounded-3xl shadow-lg lg:hidden">
        <div className="relative flex items-center justify-between px-8 py-3">
          {/* Left Icons */}
          <div className="flex justify-start flex-1 gap-8">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex flex-col items-center text-sm text-gray-700 transition-all hover:text-site-primary hover:scale-110"
            >
              <FaBars className="mb-1 text-2xl" />
            </button>
            <a
              href="/search"
              className="flex flex-col items-center text-sm text-gray-700 transition-all hover:text-site-primary hover:scale-110"
            >
              <FaSearch className="mb-1 text-2xl" />
            </a>
          </div>

          {/* Center Home */}
          <Link
            href="/"
            className="absolute flex items-center justify-center w-16 h-16 transition-transform -translate-x-1/2 rounded-full shadow-xl -top-6 left-1/2 bg-site-primary hover:scale-110"
          >
            <FaHome className="text-3xl text-white" />
          </Link>

          {/* Right Icons */}
          <div className="flex justify-end flex-1 gap-8">
            <Link
              href="/profile"
              className="flex flex-col items-center text-sm text-gray-700 transition-all hover:text-site-primary hover:scale-110"
            >
              <FaUser className="mb-1 text-2xl" />
            </Link>
            <Link
              href="/notifications"
              className="flex flex-col items-center text-sm text-gray-700 transition-all hover:text-site-primary hover:scale-110"
            >
              <FaHammer className="mb-1 text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        closeDrawer={() => setMobileOpen(false)}
      />
    </>
  );
};

export default BottomBar;
