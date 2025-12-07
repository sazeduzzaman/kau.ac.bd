"use client";

import React, { useState } from "react";
import { FaHome, FaUser, FaHammer, FaUniversity } from "react-icons/fa";
import { RiMenuUnfold3Line } from "react-icons/ri";
import MobileDrawer from "../Header/MobileDrawer";
import Link from "next/link";

const BottomBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Modern Floating Bottom Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[94%] bg-site-primary backdrop-blur-md border border-white/30 rounded-3xl shadow-lg lg:hidden">
        <div className="relative flex items-center justify-between px-8 py-3">
          {/* Left Icons */}
          <div className="flex justify-start flex-1 gap-8">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex flex-col items-center justify-center px-1 py-1 text-sm text-white transition-all rounded-full hover:text-site-primary hover:scale-110"
            >
              <RiMenuUnfold3Line className="text-2xl text-white" />
            </button>
            <Link
              href="/about"
              className="flex flex-col items-center justify-center px-1 py-1 text-sm text-white transition-all rounded-full hover:text-site-primary hover:scale-110"
            >
              <FaUniversity className="text-2xl text-white" />
            </Link>
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
              className="flex flex-col items-center justify-center px-1 py-1 text-sm text-white transition-all rounded-full hover:text-site-primary hover:scale-110"
            >
              <FaUser className="text-2xl text-white" />
            </Link>
            <Link
              href="/notifications"
              className="flex flex-col items-center justify-center px-1 py-1 text-sm text-white transition-all rounded-full hover:text-site-primary hover:scale-110"
            >
              <FaHammer className="text-2xl text-white" />
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
