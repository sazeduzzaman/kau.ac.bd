"use client";
import { FaBullhorn } from "react-icons/fa";

const BreakingMarquee = ({ items }) => {
  return (
    <div className="relative w-full bg-[#498dbd] text-white  overflow-hidden">
      <div className="container flex items-center mx-auto">
        {/* Label */}
        <div className="z-10 flex items-center justify-center w-auto px-4 py-2 text-sm font-semibold shadow-md bg-site-secondary">
          <FaBullhorn className="mr-2" /> Breaking
        </div>

        {/* Gradient Fade Left */}
        <div className="bg-gradient-to-r from-[#498dbd] to-transparent z-10" />

        {/* Marquee Area */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block px-4 animate-scroll">
            {items.map((news, index) => (
              <span
                key={index}
                className="mx-5 text-sm transition-colors cursor-pointer hover:text-site-accent"
              >
                ● {news}
              </span>
            ))}
          </div>
        </div>

        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#498dbd] to-transparent" />
      </div>
    </div>
  );
};

export default BreakingMarquee;
