"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Advancing Agricultural Innovation",
    subtitle:
      "Khulna Agricultural University leads the nation with cutting-edge research, modern facilities, and real-world agricultural solutions.",
    buttonText: "Explore Our Programs",
    buttonLink: "#",
    image: "/images/Slider-1.jpg",
  },
  {
    id: 2,
    title: "Education That Impacts Communities",
    subtitle:
      "From sustainable farming to smart agriculture — we prepare future leaders to transform Bangladesh’s agro-economy.",
    buttonText: "Discover Departments",
    buttonLink: "#",
    image: "/images/slider-2.jpeg",
  },
  {
    id: 3,
    title: "Research for a Food-Secure Future",
    subtitle:
      "Our scientists and students work together to develop innovative solutions for climate-resilient crops and eco-friendly farming.",
    buttonText: "Learn About Research",
    buttonLink: "#",
    image: "/images/footerbg.jpg",
  },
];

const HeroSection: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section className="relative w-full h-[820px] md:h-[700px] sm:h-[620px] font-rajdhani bg-black text-white overflow-hidden group">
      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={setSwiperRef}
        speed={1000}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !bg-white/40 !w-3 !h-3 !opacity-40",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-white !opacity-100",
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex items-center w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >

              {/* 🔥 NEW OVERLAY HERE */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-black/30"></div>

              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container px-5 mx-auto max-w-8xl">
                  <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 text-[52px] md:text-[40px] sm:text-[30px] font-bold leading-tight"
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mb-8 text-[22px] md:text-[18px] text-white/90 leading-relaxed"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.a
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    href={slide.buttonLink}
                    className="inline-block px-10 py-3 text-[18px] font-semibold bg-white text-[#0f1b2a] rounded-md hover:bg-[#d4574e] hover:text-white transition-all shadow-lg"
                  >
                    {slide.buttonText}
                  </motion.a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="absolute z-30 flex items-center justify-center text-white transition-all -translate-y-1/2 border rounded-full opacity-0 left-6 top-1/2 w-14 h-14 border-white/60 bg-white/10 backdrop-blur-md group-hover:opacity-100 hover:bg-white/20"
      >
        <FaArrowLeft size={18} />
      </button>

      <button
        onClick={() => swiperRef?.slideNext()}
        className="absolute z-30 flex items-center justify-center text-white transition-all -translate-y-1/2 border rounded-full opacity-0 right-6 top-1/2 w-14 h-14 border-white/60 bg-white/10 backdrop-blur-md group-hover:opacity-100 hover:bg-white/20"
      >
        <FaArrowRight size={18} />
      </button>
    </section>
  );
};

export default HeroSection;
