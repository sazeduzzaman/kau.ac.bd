"use client";

import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topbarHeight = 36;
      setIsSticky(window.scrollY > topbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-[9999]">
      {/* ⭐ Smooth Topbar Animation */}
      <div
        className={`
          overflow-hidden
          transition-all duration-700 ease-in-out
          ${isSticky ? "max-h-0 opacity-0" : "max-h-[48px] opacity-100"}
        `}
      >
        <Topbar isSticky={isSticky} />
      </div>

      {/* ⭐ Main Navbar */}
      <div
        className={`
          w-full border-b border-green-100
          transition-all duration-700 ease-in-out

          ${
            isSticky
              ? "fixed top-0 left-0 right-0 z-[9999] sticky-menu bg-white/80 backdrop-blur-[6px] shadow-md py-2 translate-y-0"
              : "relative bg-white shadow-none py-4"
          }
        `}
      >
        <div className="container flex items-center justify-between mx-auto header-container">
          <Logo />
          <DesktopMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
