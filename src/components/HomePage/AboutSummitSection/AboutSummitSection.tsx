import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { AboutSection } from "@/lib/types/HomePageDataTypes/HomePageDataTypes";

interface AboutSectionProps {
  aboutData: AboutSection;
}
const AboutUniversitySection: React.FC<AboutSectionProps> = ({ aboutData }) => {
  const aboutImage = aboutData.images;
  const imageClasses = [
    "relative w-full h-64 overflow-hidden md:h-96 rounded-2xl group", // Image 1 - Tall
    "relative w-full h-48 overflow-hidden md:h-64 rounded-2xl group md:mb-8", // Image 2 - Medium
    "relative w-full h-32 overflow-hidden md:h-48 rounded-2xl group", // Image 3 - Short
    "relative w-full h-48 overflow-hidden md:h-72 rounded-2xl group md:mb-4", // Image 4 - Medium
    "relative w-full h-64 col-span-2 overflow-hidden md:h-96 rounded-2xl group md:col-span-1", // Image 5 - Tall
  ];
  return (
    <section className="relative w-full bg-[#fff]  py-20 px-4 md:px-8 overflow-hidden font-sans">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* --- Header Section --- */}
        <div className="grid grid-cols-1 gap-12 mb-24 lg:grid-cols-2">
          {/* Left Column: Title */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
              <span className="text-sm font-semibold tracking-wide text-black uppercase">
                {aboutData.badge}
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight uppercase md:text-5xl lg:text-6xl">
              <span className="text-3xl text-site-primary md:text-4xl lg:text-5xl">
                {aboutData.title ?? "Khulna Agricultural University"}
              </span>
            </h2>
          </div>

          {/* Right Column: Description */}
          <div className="flex flex-col justify-center space-y-4 lg:pl-12">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 mt-1 text-yellow-400 shrink-0" />
              <div>
                <h3 className="mb-2 text-xl font-bold text-black">
                  {aboutData.subtitle}
                </h3>
                <p className="text-base leading-relaxed text-gray-500 md:text-lg opacity-90">
                  {aboutData.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Images & Floating Circle Section --- */}
        <div className="relative mt-12">
          {/* Floating Circle */}
          <div className="absolute z-20 transform -translate-x-1/2 left-1/2 -top-24 md:-top-32">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-site-primary rounded-full flex flex-col items-center justify-center text-center p-6 shadow-2xl border-4 border-[#4ea5ff] group transition-all duration-300 hover:scale-105">
              <span className="mb-1 text-xs font-bold tracking-wider text-white uppercase md:text-sm">
                {aboutData.experience_badge}
              </span>

              <span className="mb-2 text-2xl font-bold text-white uppercase md:text-4xl">
                {aboutData.experience_title}
              </span>

              {/* Arrow with hover animation */}
              <ArrowUpRight className="w-6 h-6 text-yellow-400 transition-transform duration-300 transform md:w-8 md:h-8 group-hover:-translate-y-2 group-hover:rotate-12" />
            </div>
          </div>

          {/* Image Grid */}

          <div className="grid items-end grid-cols-2 gap-4 md:grid-cols-5">
            {aboutImage?.map((img, index) => (
              <div key={index} className={imageClasses[index]}>
                <Image
                  src={img}
                  alt={`About image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversitySection;
