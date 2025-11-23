"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";

const SonarButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#004d4d] shadow-lg hover:bg-[#006666] transition-colors group"
        aria-label="Scroll to top"
      >
        {/* --- The Sonar/Radar Ripples --- */}
        {/* Ripple 1 */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#004d4d] opacity-75 animate-ping"></span>
        
        {/* Static Ring (Radar Grid) */}
        <span className="absolute inline-flex h-[140%] w-[140%] rounded-full border border-[#004d4d]/30"></span>
        
        {/* --- The Fighter Jet Icon (SVG) --- */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative z-10 w-8 h-8 text-white transition-transform duration-300 transform group-hover:-translate-y-1"
        >
          {/* Simplified Fighter Jet Path */}
          <path d="M12 2L2 22l10-3 10 3L12 2z" />
          <path d="M12 19l-3 3h6l-3-3z" fillOpacity="0.5" /> 
        </svg>
      </button>
    </div>
  );
};

export default SonarButton;