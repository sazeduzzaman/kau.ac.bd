"use client";

import React, { useState } from "react";
import { FaHome, FaUser, FaHammer, FaUniversity } from "react-icons/fa";
import { AiFillNotification, AiTwotoneNotification } from "react-icons/ai";
import { RiMenuUnfold3Line } from "react-icons/ri";
import MobileDrawer from "../Header/MobileDrawer";
import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa6";

const BottomBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const iconClass =
    "text-2xl text-white transition-transform duration-200 group-hover:scale-110";
  const labelClass =
    "text-xs text-white mt-1 group-hover:text-[#37b46e] transition-colors";
  const buttonClass =
    "flex flex-col items-center justify-center w-16 py-1 rounded-full group";

  return (
    <>
      {/* Floating Bottom Bar */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[95%] max-w-lg bg-site-primary backdrop-blur-md border border-white/30 shadow-lg rounded-xl lg:hidden z-50">
        <div className="flex items-center justify-around py-2">
          {/* Home */}
          <Link href="/" className={buttonClass}>
            <FaHome className={iconClass} />
            <span className={labelClass}>Home</span>
          </Link>

          {/* Menu Drawer */}
          <button onClick={() => setMobileOpen(true)} className={buttonClass}>
            <RiMenuUnfold3Line className={iconClass} />
            <span className={labelClass}>Menu</span>
          </button>

          {/* About/News */}
          <Link href="/about" className={buttonClass}>
            <FaRegNewspaper className={iconClass} />
            <span className={labelClass}>News</span>
          </Link>

          {/* Notifications / Notice */}
          <Link href="/notifications" className={buttonClass}>
            <AiTwotoneNotification className={iconClass} />
            <span className={labelClass}>Notice</span>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        closeDrawer={() => setMobileOpen(false)}
      />
    </>
  );
};

export default BottomBar;
