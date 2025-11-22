"use client";

import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileDrawer from "./MobileDrawer";
import { TfiSearch } from "react-icons/tfi";

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
      <Topbar isSticky={isSticky} />
      <div
        className={`bg-white shadow-sm border-b border-green-100 w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
      >
        <div className="container flex items-center justify-between px-4 py-3 mx-auto">
          <Logo />
          <DesktopMenu />
          <div className="items-center hidden space-x-3 lg:flex">
            {/* Search Button */}
            <button
              type="button"
              className="px-0 font-bold bg-transparent border-0 rounded-full btn btn-ghost text-site-primary"
            >
              <TfiSearch className="text-xl" />
            </button>
            <span className="text-site-primary">|</span>
            {/* Join Button as a pill */}
            <a
              href="/join"
              className="px-6 border-0 rounded-full btn btn-primary btn-sm bg-site-accent"
            >
              Join
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <MobileDrawer
          isOpen={mobileOpen}
          closeDrawer={() => setMobileOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
