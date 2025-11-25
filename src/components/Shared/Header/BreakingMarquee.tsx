"use client";
import { FaBullhorn } from "react-icons/fa";

interface BreakingMarqueeProps {
  items: string[];
}

const BreakingMarquee: React.FC<BreakingMarqueeProps> = ({ items }) => {
  return (
    <div className="relative w-full bg-[#0D1117] text-white overflow-hidden ">
      <div className="flex items-center">
        {/* Left Label */}
        <div className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white shadow-lg bg-site-primary breaking-tag">
          <FaBullhorn className="text-lg" />
          <span>Breaking News</span>
        </div>

        {/* Fade left gradient */}
        {/* <div className="w-8 h-full bg-gradient-to-r from-[#0a59cf] to-transparent pointer-events-none" /> */}

        {/* Marquee Content */}
        <div className="relative flex-1 overflow-hidden">
          <div className="whitespace-nowrap animate-scroll text-[15px] flex items-center pt-1">
            {items.map((news, i) => (
              <span
                key={i}
                className="mx-8 transition-colors cursor-pointer text-white/90 hover:text-site-primary"
              >
                ● {news}
              </span>
            ))}
          </div>
        </div>

        {/* Fade right gradient */}
        {/* <div className="w-12 h-full bg-gradient-to-l from-[#0D1117] to-transparent pointer-events-none" /> */}
      </div>
    </div>
  );
};

export default BreakingMarquee;
