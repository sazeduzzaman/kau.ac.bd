"use client";

import React from "react";
import { motion } from "framer-motion";

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
  return (
    <div className="relative w-full h-full">
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
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mb-6 text-3xl font-bold leading-tight text-white sm:max-w-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-xl"
          >
            {slide.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="max-w-lg mb-8 text-sm leading-relaxed sm:max-w-xl md:max-w-2xl sm:text-base md:text-lg lg:text-xl text-white/90"
          >
            {slide.subtitle}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            href={slide.buttonLink}
            className="flex items-center justify-start gap-5 mt-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 font-normal text-white rounded-full bg-gradient-to-r from-[#438ABA] to-[#346f96] shadow-md hover:shadow-lg transition-all">
              {slide.buttonText} <span className="ps-2">→</span>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
