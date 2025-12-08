"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ExploreSection,
  ExploreItem,
} from "@/lib/types/HomePageDataTypes/HomePageDataTypes";
import { getDynamicIcon } from "@/lib/fontawesome/fontAwesomeHelper";

interface InfoCardsSectionProps {
  exploreData: ExploreSection;
}

const InfoCardsSection: React.FC<InfoCardsSectionProps> = ({ exploreData }) => {
  const sortedCards: ExploreItem[] = [...exploreData.items].sort(
    (a, b) => a.position - b.position
  );
  // Preload all icons to library once
  useEffect(() => {
    sortedCards.forEach((card) => getDynamicIcon(card.icon));
  }, [sortedCards]);

  return (
    <section className="relative px-6 py-20 explore-section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="relative inline-block text-5xl font-extrabold text-white">
            {exploreData.section_title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-gradient-to-r from-white to-[#438ABA]" />
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {sortedCards.map((card) => (
              <Link
                key={card.position}
                href={card.url}
                className="relative flex flex-col items-center p-0 overflow-hidden text-center transition-all duration-500 rounded-lg cursor-pointer bg-white/20 backdrop-blur-md group"
              >
                <div className="relative flex flex-col items-center justify-center w-full h-48 text-center transition-all duration-300 border rounded-lg border-white/30 hover:bg-white hover:scale-105">
                  <div className="mb-4 text-white group-hover:text-[#438ABA] transition-colors duration-300">
                    <FontAwesomeIcon
                      icon={getDynamicIcon(card.icon)}
                      className="w-12 h-12"
                      style={{ fontSize: "45px" }}
                    />
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base tracking-wide group-hover:text-[#438ABA] transition-colors duration-300 uppercase mb-2">
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
