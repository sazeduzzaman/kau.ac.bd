"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import HeroButton from "@/utils/HeroButton";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

interface HeroSlideProps {
  slide: Slide;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ slide }) => {
  const [mounted, setMounted] = useState(false);

  // Trigger animations only after component mounts to avoid SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

      {/* Text */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container px-10 mx-auto max-w-7xl">
          {/* Title */}
          <h2
            className={`max-w-xl mb-6 text-3xl font-bold leading-tight text-white sm:max-w-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-xl transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p
            className={`max-w-lg mb-8 text-sm leading-relaxed sm:max-w-xl md:max-w-2xl sm:text-base md:text-lg lg:text-xl text-white/90 transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {slide.subtitle}
          </p>

          {/* Button */}
          {slide.buttonText && slide.buttonLink && <HeroButton slide={slide} />}
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
