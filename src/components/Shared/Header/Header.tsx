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
      {/* Topbar */}
      <div className="top-bar">
        <Topbar isSticky={isSticky} />
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full border-b border-green-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          ${
            isSticky
              ? "fixed top-0 left-0 right-0 z-[9999] bg-white/80 sticky-menu backdrop-blur-[6px] shadow-md py-2"
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
