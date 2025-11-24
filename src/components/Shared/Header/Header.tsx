"use client";

import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topbarHeight = 36; // adjust if needed or use ref
      setIsSticky(window.scrollY > topbarHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-50 w-full">
      <div className="top-bar">
        <Topbar isSticky={isSticky} />
      </div>
      <div
        className={`bg-white shadow-sm border-b border-green-100 w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
      >
        <div className="container flex items-center justify-between py-3 mx-auto header-container">
          <Logo />
          <DesktopMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
