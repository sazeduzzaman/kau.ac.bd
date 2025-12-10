"use client";

import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";
import React from "react";
import Image from "next/image"; // Import Next.js Image component

interface FacultyCommonPagesProps {
  activePage: {
    title: string | null;
    subtitle?: string | null;
    content?: string | null;
    banner_image?: string | null;
    banner_title?: string | null;
    banner_subtitle?: string | null;
    banner_button?: string | null;
    banner_button_url?: string | null;
  };
}

const FacultyCommonPages: React.FC<FacultyCommonPagesProps> = ({
  activePage,
}) => {
  if (!activePage) return null;

  // Derive content variables
  const pageTitle = activePage.title;
  const bannerTitle = activePage.banner_title || pageTitle;
  const bannerSubtitle = activePage.banner_subtitle;
  const bannerButton = activePage.banner_button;
  const bannerButtonUrl = activePage.banner_button_url || "#";
  const bannerImage = activePage.banner_image;

  // Add unique IDs to <h2> tags for smooth scroll
  const contentWithIds = activePage.content
    ? activePage.content.replace(
        /<h2[^>]*>(.*?)<\/h2>/g,
        (match, title, index) => {
          // Sanitized ID for better linking
          const sectionId = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
          return `<h2 id="${sectionId || `section-${index}`}">${title}</h2>`;
        }
      )
    : "";

  return (
    <div className="w-full">
      {/* Banner Section */}
      {bannerImage && (
        <div className="relative w-full h-[40vh] md:h-[55vh] lg:h-[60vh] mb-12 overflow-hidden  rounded-2xl">
          {/* Image */}
          <Image
            src={bannerImage}
            alt={bannerTitle}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition duration-500 ease-in-out transform hover:scale-105"
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          {/* Banner Content (Aligned to the bottom) */}
          <div className="absolute inset-0 flex flex-col items-start justify-end px-4 pb-10 text-white md:px-12">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl drop-shadow-lg">
              {bannerTitle}
            </h1>

            {bannerSubtitle && (
              <p className="max-w-4xl mt-3 text-lg font-light leading-relaxed text-white/90 md:text-xl">
                {bannerSubtitle}
              </p>
            )}

            {bannerButton && (
              <a
                href={bannerButtonUrl}
                className="inline-block px-8 py-3 mt-6 text-lg font-bold text-[#438aba] transition-all duration-300 bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:shadow-inner transform hover:scale-[1.02]"
              >
                {bannerButton}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className="container mx-auto">
        {/* Page Title (Only if no banner image is present, or if it's the main page title) */}
        {!bannerImage && (
          <header className="pt-4 mb-10">
            <h1 className="text-4xl font-extrabold text-black">{pageTitle}</h1>
            {activePage.subtitle && (
              <p className="mt-2 text-xl font-light text-gray-600">
                {activePage.subtitle}
              </p>
            )}
          </header>
        )}

        {activePage.content ? (
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
