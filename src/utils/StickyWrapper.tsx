"use client";

import React, { useState, useEffect, ReactNode } from "react";

interface StickyWrapperProps {
  children: ReactNode;
  topbarHeight?: number;
}

const StickyWrapper: React.FC<StickyWrapperProps> = ({
  children,
  topbarHeight = 36,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > topbarHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [topbarHeight]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out w-full ${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md"
          : "relative"
      }`}
    >
      {children}
    </div>
  );
};

export default StickyWrapper;
