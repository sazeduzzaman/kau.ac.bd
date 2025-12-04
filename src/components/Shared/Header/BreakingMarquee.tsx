"use client";
import Link from "next/link";
import { FaBullhorn } from "react-icons/fa";

interface BreakingMarqueeProps {
  items: { title: string; href: string }[];
}

const BreakingMarquee: React.FC<BreakingMarqueeProps> = ({ items }) => {
  return (
    <div className="relative w-full bg-[#0D1117] text-white overflow-hidden">
      <div className="flex items-center">
        {/* Left Label */}
        <div className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-black shadow-lg breaking-tag">
          <FaBullhorn className="text-lg" />
          <span>Breaking News</span>
        </div>

        {/* Marquee Content */}
        <div className="relative flex-1 overflow-hidden">
          <div className="whitespace-nowrap animate-scroll text-[15px] flex items-center pt-1">
            {items.map((news, i) =>
              news.href ? (
                <Link
                  key={i}
                  href={news.href}
                  className="mx-8 transition-colors cursor-pointer text-white/90 hover:text-site-primary"
                >
                  ● {news.title}
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingMarquee;
