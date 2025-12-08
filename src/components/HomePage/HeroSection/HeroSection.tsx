"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

import HeroSlide from "./HeroSlide";
import { Banner } from "@/lib/types/HomePageDataTypes/HomePageDataTypes";

interface HeroSectionProps {
  bannersData: Banner[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ bannersData }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  if (!bannersData || bannersData.length === 0) return null; // Handle empty case

  return (
    <section className="relative w-full h-[580px] md:h-[680px] overflow-hidden bg-black group">
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
        {bannersData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <HeroSlide
              slide={{
                id: banner.id,
                title: banner.title,
                subtitle: banner.subtitle,
                buttonText: banner.button_text,
                buttonLink: banner.button_url,
                image: banner.image_url || "",
              }}
            />
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
    </section>
  );
};

export default HeroSection;
