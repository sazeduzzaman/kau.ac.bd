"use client";

import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";
import React from "react";
import Image from "next/image";

interface FacultyCommonPagesProps {
  activePage: {
    title: string;
    subtitle?: string;
    content?: string;
    banner_image?: string;
    banner_title?: string;
    banner_subtitle?: string;
    banner_button?: string;
    banner_button_url?: string;
  };
}

const FacultyCommonPages: React.FC<FacultyCommonPagesProps> = ({
  activePage,
}) => {
  const {
    title,
    subtitle,
    content,
    banner_image,
    banner_title,
    banner_subtitle,
    banner_button,
    banner_button_url,
  } = activePage;

  const finalBannerTitle = banner_title || title;

  // Add unique IDs to <h2> tags for smooth scroll
  const contentWithIds = content
    ? content.replace(/<h2[^>]*>(.*?)<\/h2>/g, (match, heading, index) => {
        const id = heading
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
        return `<h2 id="${id || `section-${index}`}">${heading}</h2>`;
      })
    : "";

  return (
    <div className="w-full">
      {/* Banner */}
      {banner_image && (
        <div className="relative w-full h-[40vh] md:h-[55vh] lg:h-[60vh] mb-12 overflow-hidden rounded-2xl">
          <Image
            src={banner_image}
            alt={finalBannerTitle || ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-end px-4 pb-10 text-white md:px-12">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl drop-shadow-lg">
              {finalBannerTitle}
            </h1>

            {banner_subtitle && (
              <p className="max-w-4xl mt-3 text-lg font-light leading-relaxed text-white/90 md:text-xl">
                {banner_subtitle}
              </p>
            )}

            {banner_button && (
              <a
                href={banner_button_url || "#"}
                className="inline-block px-8 py-3 mt-6 text-lg font-bold text-[#438aba] transition-all duration-300 bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:shadow-inner transform hover:scale-[1.02]"
              >
                {banner_button}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto">
        {!banner_image && (
          <header className="pt-4 mb-10">
            <h1 className="text-4xl font-extrabold text-black">{title}</h1>
            {subtitle && (
              <p className="mt-2 text-xl font-light text-gray-600">
                {subtitle}
              </p>
            )}
          </header>
        )}

        {content ? (
          <div className="prose lg:prose-xl max-w-none text-gray-800 prose-h2:text-[#438aba] prose-h2:font-extrabold prose-h2:mt-10 prose-h2:border-b prose-h2:pb-2 prose-h2:border-[#438aba]/20 prose-h2:scroll-mt-32 prose-p:leading-relaxed prose-img:rounded-xl prose-img:shadow-lg prose-ul:list-disc prose-li:text-gray-700">
            <HtmlRenderer content={contentWithIds} />
          </div>
        ) : (
          <p className="py-12 mt-12 text-xl text-center text-gray-500 border-t border-gray-200">
            No content is currently available for this page.
          </p>
        )}
      </div>
    </div>
  );
};

export default FacultyCommonPages;
