"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

import BreakingMarquee from "@/components/Shared/Header/BreakingMarquee";
import HeroSlide from "./HeroSlide";

const slides = [
  {
    id: 1,
    title: "Shaping the Future of Agriculture",
    subtitle:
      "KAU empowers the next generation of innovators through research, sustainability, and modern agricultural technologies.",
    buttonText: "Explore Programs",
    buttonLink: "#",
    image: "/images/Slider-1.jpg",
  },
  {
    id: 2,
    title: "Education for a Stronger Tomorrow",
    subtitle:
      "From smart farming to agri-entrepreneurship — we prepare students to lead a changing world.",
    buttonText: "Discover Departments",
    image: "/images/work-4.png",
    buttonLink: "#",
  },
  // {
  //   id: 3,
  //   title: "Research That Drives Real Impact",
  //   subtitle:
  //     "Our researchers and students work together to build climate-resilient agriculture for a sustainable future.",
  //   buttonText: "Learn About Research",
  //   buttonLink: "#",
  //   image: "/images/work-5.webp",
  // },
];

const HeroSection = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section className="relative w-full h-[580px] md:h-[680px] overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={setSwiperRef}
        loop
        speed={1100}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !bg-white/30 !w-3 !h-3 !opacity-60",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-white !opacity-100",
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="absolute z-30 flex items-center justify-center w-12 h-12 text-white transition-all -translate-y-1/2 border rounded-full opacity-0 left-6 top-1/2 bg-white/10 border-white/30 group-hover:opacity-100 backdrop-blur-sm"
      >
        <FaArrowLeft size={16} />
      </button>
      <button
        onClick={() => swiperRef?.slideNext()}
        className="absolute z-30 flex items-center justify-center w-12 h-12 text-white transition-all -translate-y-1/2 border rounded-full opacity-0 right-6 top-1/2 bg-white/10 border-white/30 group-hover:opacity-100 backdrop-blur-sm"
      >
        <FaArrowRight size={16} />
      </button>

      {/* Breaking Marquee */}
      {/* <BreakingMarquee items={breakingNews} /> */}
    </section>
  );
};

export default HeroSection;
