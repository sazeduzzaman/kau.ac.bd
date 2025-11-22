"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    title: "BUILD YOUR DIGITAL PRESENCE",
    subtitle:
      "We create beautiful websites & powerful strategies to grow your business.",
    buttonText: "Start Your Project",
    buttonLink: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500",
  },
  {
    id: 2,
    title: "DESIGN THAT CONNECTS",
    subtitle:
      "Captivating visuals, seamless UX, and meaningful storytelling — all in one place.",
    buttonText: "View Our Work",
    buttonLink: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1480&fit=crop",
  },
  {
    id: 3,
    title: "WE CRAFT BRANDS THAT MATTER",
    subtitle:
      "From identity to launch — we’re your partner in every step of the journey.",
    buttonText: "Book a Free Call",
    buttonLink: "#",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&fit=crop",
  },
];

const HeroSection: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section className="relative w-full h-[850px] font-rajdhani bg-[#1a1a2e] text-[#f0f0f0] group overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={setSwiperRef}
        speed={1000}
        loop
        watchSlidesProgress
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !bg-white !opacity-40 !w-3 !h-3 !transition-opacity !duration-200",
          bulletActiveClass: "swiper-pagination-bullet-active !opacity-100",
        }}
        navigation={false}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex items-center justify-center w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1a1a2e99] to-[#1a1a2ee6]" />

              <div className="container relative z-20 max-w-[1200px] px-[15px] mx-auto text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-10 text-[60px] md:text-[100px] font-semibold leading-[1.1] text-white uppercase drop-shadow-[1px_2px_4px_rgba(0,0,0,0.6)]"
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="mb-10 text-[24px] md:text-[32px] font-medium text-[#f0f0f0] opacity-85 drop-shadow-[1px_2px_4px_rgba(0,0,0,0.6)]"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  href={slide.buttonLink}
                  className="inline-block px-8 py-[10px] text-[20px] font-medium uppercase transition-all duration-300 rounded bg-white/85 text-[#1a1a2e] hover:bg-[#d4574e] hover:text-white"
                >
                  {slide.buttonText}
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="absolute z-30 left-[25px] top-1/2 -translate-y-1/2 w-[55px] h-[55px] rounded-full border-2 border-[#f0f0f0] text-[#f0f0f0] flex items-center justify-center opacity-0 invisible translate-x-[50px] transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 hover:bg-white/10"
        aria-label="Previous Slide"
      >
        <FaArrowLeft size={15} />
      </button>

      <button
        onClick={() => swiperRef?.slideNext()}
        className="absolute z-30 right-[25px] top-1/2 -translate-y-1/2 w-[55px] h-[55px] rounded-full border-2 border-[#f0f0f0] text-[#f0f0f0] flex items-center justify-center opacity-0 invisible -translate-x-[50px] transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 hover:bg-white/10"
        aria-label="Next Slide"
      >
        <FaArrowRight size={15} />
      </button>
    </section>
  );
};

export default HeroSection;
