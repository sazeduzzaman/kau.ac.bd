"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import BreakingMarquee from "@/components/Shared/Header/BreakingMarquee";

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
  // {
  //   id: 2,
  //   title: "Education for a Stronger Tomorrow",
  //   subtitle:
  //     "From smart farming to agri-entrepreneurship — we prepare students to lead a changing world.",
  //   buttonText: "Discover Departments",
  //   image: "/images/slider-2.jpeg",
  // },
  {
    id: 3,
    title: "Research That Drives Real Impact",
    subtitle:
      "Our researchers and students work together to build climate-resilient agriculture for a sustainable future.",
    buttonText: "Learn About Research",
    buttonLink: "#",
    image: "/images/footerbg.jpg",
  },
];

const HeroSection = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const breakingNews = [
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগ বিজ্ঞপ্তি — সময় বর্ধিতকরণ",
    "অনুষদভিত্তিক ভর্তি পরীক্ষার সময়সূচী প্রকাশ",
    "২০২৪-২৫ শিক্ষাবর্ষে স্নাতক ভর্তি নির্দেশিকা প্রকাশিত",
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগ বিজ্ঞপ্তি — সময় বর্ধিতকরণ",
    "অনুষদভিত্তিক ভর্তি পরীক্ষার সময়সূচী প্রকাশ",
    "২০২৪-২৫ শিক্ষাবর্ষে স্নাতক ভর্তি নির্দেশিকা প্রকাশিত",
    "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক ) নিয়োগ বিজ্ঞপ্তি — সময় বর্ধিতকরণ",
    "অনুষদভিত্তিক ভর্তি পরীক্ষার সময়সূচী প্রকাশ",
    "২০২৪-২৫ শিক্ষাবর্ষে স্নাতক ভর্তি নির্দেশিকা প্রকাশিত",
  ];

  return (
    <>
      {/* <section className="relative w-full h-[780px] md:h-[680px] overflow-hidden bg-black group"> */}
      <section className="relative w-full h-[780px] md:h-[680px] overflow-hidden bg-black group">
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
              <div className="relative w-full h-full overflow-hidden">
                {/* Zoom wrapper */}
                <div
                  className="absolute inset-0 bg-center bg-cover scale-110 transition-transform duration-[6000ms] ease-out group-hover:scale-100"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                {/* Cinematic overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>

                {/* Text content */}
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container px-6 mx-auto max-w-7xl">
                    <motion.h2
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="mb-6 text-white w-[500px] text-[75px] md:text-[55px] sm:text-[30px] font-bold leading-tight drop-shadow-xl"
                    >
                      {slide.title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.8 }}
                      className="max-w-3xl mb-10 w-2/4  text-[22px] md:text-[18px] text-white/90 leading-relaxed"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* 
                      className="inline-block  px-10 py-3 text-[18px] font-semibold bg-white text-[#0f1b2a] rounded-md shadow-xl hover:bg-[#3CA6E6] hover:text-white transition-all"
                    ></motion.a> */}
                    <motion.a
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      href={slide.buttonLink}
                      className="flex items-center justify-start gap-5 mt-8"
                    >
                      <div className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-[#498dbd] to-[#346f96] shadow-md hover:shadow-lg transition-all">
                        {slide.buttonText} <span className="ps-2">→</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ARROWS */}
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

        {/* ZOOM ANIMATION KEYFRAMES */}
        <style jsx>{`
          @keyframes zoomSlow {
            0% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
          .animate-zoomSlow {
            animation: zoomSlow 6s ease-out forwards;
          }
        `}</style>
      </section>
      <BreakingMarquee items={breakingNews} />
    </>
  );
};

export default HeroSection;
