"use client";
import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaLandmark, FaUserSlash } from "react-icons/fa";
import { RiBuilding2Fill, RiPresentationFill } from "react-icons/ri";

// Reusable Counter Component
interface CounterProps {
  end: number;
}

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animation duration in ms
    const step = Math.ceil(end / (duration / 16)); // 60fps approx

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

// Type for each stat item
interface StatItem {
  title: string;
  icon: React.ReactNode;
  value: number;
}

const KauAtAGlanceSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      title: "FACULTIES",
      icon: <FaLandmark className="w-12 h-12" />,
      value: 5,
    },
    {
      title: "DEPARTMENTS",
      icon: <RiBuilding2Fill className="w-12 h-12" />,
      value: 32,
    },
    {
      title: "TEACHERS",
      icon: <RiPresentationFill className="w-12 h-12" />,
      value: 180,
    },
    {
      title: "STUDENTS",
      icon: <FaGraduationCap className="w-12 h-12" />,
      value: 2300,
    },
    {
      title: "OFFICER & STAFF",
      icon: <FaUserSlash className="w-12 h-12" />,
      value: 350,
    },
  ];

  return (
    <section className="relative px-4 py-20 overflow-hidden font-sans">
      {/* Waving Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full animate-wave bg-[length:300%_300%] rounded-lg"
          style={{
            backgroundImage: `linear-gradient(to right top,
              #498dbd, #5aa0d1, #417fb0, #5c9dd1, #3a75a1, #498dbd,
              #3e7bbf, #4fa1d5, #356a9c, #498dbd, #417fb0, #498dbd)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="mb-16 text-5xl font-bold tracking-wider text-center text-white uppercase md:text-5xl">
          KAU At A Glance
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center h-48 p-6 text-center transition-all duration-300 border rounded-lg cursor-pointer group border-white/30 hover:bg-white hover:scale-105"
            >
              <div className="mb-4 text-white group-hover:text-[#498dbd] transition-colors duration-300">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold text-sm md:text-base tracking-wide group-hover:text-[#498dbd] transition-colors duration-300 uppercase mb-2">
                {item.title}
              </h3>

              {/* Counter Value */}
              <div className="text-2xl font-bold text-white group-hover:text-[#498dbd] transition-colors duration-300">
                <Counter end={item.value} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Animation */}
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
