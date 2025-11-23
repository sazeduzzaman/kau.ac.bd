"use client";

import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileDrawer from "./MobileDrawer";
import { TfiSearch } from "react-icons/tfi";
import Link from "next/link";
import BreakingMarquee from "./BreakingMarquee";

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

  const breakingNews = [
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগের আবেদন ফরম, নিয়োগের যোগ্যতা ও অভিজ্ঞতা এবং অন্যান্য শর্তাবলী(স্মারক নং ১১৪৭ – সময় বর্ধিতকরণ)",
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগের আবেদন ফরম, নিয়োগের যোগ্যতা ও অভিজ্ঞতা এবং অন্যান্য শর্তাবলী(স্মারক নং ১১৪৭ – সময় বর্ধিতকরণ)",
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগের আবেদন ফরম, নিয়োগের যোগ্যতা ও অভিজ্ঞতা এবং অন্যান্য শর্তাবলী(স্মারক নং ১১৪৭ – সময় বর্ধিতকরণ)",
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগের আবেদন ফরম, নিয়োগের যোগ্যতা ও অভিজ্ঞতা এবং অন্যান্য শর্তাবলী(স্মারক নং ১১৪৭ – সময় বর্ধিতকরণ)",
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগের আবেদন ফরম, নিয়োগের যোগ্যতা ও অভিজ্ঞতা এবং অন্যান্য শর্তাবলী(স্মারক নং ১১৪৭ – সময় বর্ধিতকরণ)",
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগের আবেদন ফরম, নিয়োগের যোগ্যতা ও অভিজ্ঞতা এবং অন্যান্য শর্তাবলী(স্মারক নং ১১৪৭ – সময় বর্ধিতকরণ)",
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগের আবেদন ফরম, নিয়োগের যোগ্যতা ও অভিজ্ঞতা এবং অন্যান্য শর্তাবলী(স্মারক নং ১১৪৭ – সময় বর্ধিতকরণ)",
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগের আবেদন ফরম, নিয়োগের যোগ্যতা ও অভিজ্ঞতা এবং অন্যান্য শর্তাবলী(স্মারক নং ১১৪৭ – সময় বর্ধিতকরণ)",
  ];
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
        <div className="container flex items-center justify-between px-4 py-3 mx-auto header-container">
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
            <Link
              href="/join"
              className="px-6 border-0 rounded-full btn btn-primary btn-sm bg-site-primary"
            >
              Join
            </Link>
          </div>

          {/* <div className="lg:hidden">
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
          </div> */}
        </div>
      </div>
      <BreakingMarquee items={breakingNews} />
    </header>
  );
};

export default Header;
