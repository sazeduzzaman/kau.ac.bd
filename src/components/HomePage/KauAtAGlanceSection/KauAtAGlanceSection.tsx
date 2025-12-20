"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDynamicIcon } from "@/lib/fontawesome/fontAwesomeHelper";
import { GlanceSection } from "@/lib/types/HomePageDataTypes/HomePageDataTypes";

// Counter Component
interface CounterProps {
  end: number;
}
const Counter: React.FC<CounterProps> = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}</span>;
};

interface KauAtAGlanceSectionProps {
  glanceData: GlanceSection;
}

const KauAtAGlanceSection: React.FC<KauAtAGlanceSectionProps> = ({
  glanceData,
}) => {
  const stats = glanceData.items.sort((a, b) => a.position - b.position);

  // Preload all icons once (same pattern as InfoCards)
  useEffect(() => {
    stats.forEach((item) => getDynamicIcon(item.icon));
  }, [stats]);

  return (
    <section className="relative px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full animate-wave bg-[length:300%_300%] rounded-lg"
          style={{
            backgroundImage: `linear-gradient(to right top,
              #438ABA, #5aa0d1, #417fb0, #5c9dd1, #3a75a1, #438ABA,
              #3e7bbf, #4fa1d5, #356a9c, #438ABA, #417fb0, #438ABA)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="mb-2 text-5xl font-bold tracking-wider text-center text-white uppercase">
          {glanceData.section_title}
        </h2>
        <p className="mb-16 text-lg text-center text-white md:text-xl">
          {glanceData.section_subtitle}
        </p>

        {/* Flexbox container for automatic centering */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {stats.map((item, index) => {
            const icon = getDynamicIcon(item.icon);

            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center w-full max-w-[220px] h-48 p-6 text-center transition-all duration-300 border rounded-lg cursor-pointer border-white/30 hover:bg-white hover:scale-105"
              >
                <div className="mb-4 text-white  group-hover:text-[#438ABA] transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={icon}
                    className="w-12 h-12"
                    style={{ fontSize: "38px" }}
                  />
                </div>

                <h3 className="text-white font-semibold text-sm md:text-base tracking-wide group-hover:text-[#438ABA] transition-colors duration-300 uppercase mb-2">
                  {item.title}
                </h3>

                <div className="text-2xl font-bold text-white  group-hover:text-[#438ABA] transition-colors duration-300">
                  <Counter end={Number(item.number)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
          @keyframes wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-wave {
            animation: wave 12s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default KauAtAGlanceSection;
