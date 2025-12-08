"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface SlideProps {
  slide: { buttonText?: string; buttonLink?: string };
}

const HeroButton: React.FC<SlideProps> = ({ slide }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // runs only on client
  }, []);

  if (!slide.buttonText || !slide.buttonLink) return null;

  // Only render after mount
  if (!mounted) return null;

  return (
    <div className="mt-8 transition-all duration-700 translate-y-0 opacity-100">
      <Link
        href={slide.buttonLink}
        className="inline-flex items-center gap-2 px-6 py-2 font-normal text-white rounded-full
         bg-gradient-to-r from-[#438ABA] to-[#346f96] shadow-md hover:shadow-lg transition-all"
      >
        {slide.buttonText} <span className="ps-2">→</span>
      </Link>
    </div>
  );
};

export default HeroButton;
