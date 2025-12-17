"use client";

import React from "react";
import Image from "next/image";
import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";
import FacultyDepertmentPage from "./FacultyDepertmentPage";

interface FacultyCommonPagesProps {
  activePage?: {
    title?: string;
    subtitle?: string;
    content?: string;
    banner_image?: string;
    banner_title?: string;
    banner_subtitle?: string;
    banner_button?: string;
    banner_button_url?: string;
    is_department_boxes?: boolean;
  };
  slug: string;
}

const FacultyCommonPages: React.FC<FacultyCommonPagesProps> = ({
  activePage,
  slug,
}) => {
  // ❌ If no page data, render nothing
  if (!activePage) return null;

  const {
    title,
    subtitle,
    content,
    banner_image,
    banner_title,
    banner_subtitle,
    banner_button,
    banner_button_url,
    is_department_boxes,
  } = activePage;

  const bannerTitle = banner_title || title || "";
  const bannerSubtitle = banner_subtitle || subtitle || "";

  // Generate IDs for H2 headings for smooth scrolling
  const contentWithIds = content
    ? content.replace(/<h2[^>]*>(.*?)<\/h2>/gi, (match, heading, index) => {
        const id = heading
          .toLowerCase()
          .replace(/<\/?[^>]+(>|$)/g, "") // remove nested tags
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");

        return `<h2 id="${id || `section-${index}`}">${heading}</h2>`;
      })
    : null;

  return (
    <div className="w-full ">
      {/* ========== Banner ========== */}
      {(bannerTitle || banner_image) && (
        <div
          className={`relative container mx-auto mt-5 rounded-2xl overflow-hidden ${
            banner_image
              ? "h-[45vh] md:h-[60vh] lg:h-[70vh]"
              : "min-h-auto py-10 bg-transparent shadow-none"
          }`}
        >
          {banner_image ? (
            <>
              {/* Show image with overlay */}
              <Image
                src={banner_image}
                alt={bannerTitle || "Banner Image"}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center transition-all duration-500 ease-in-out transform hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              <div className="">
                {/* Banner Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-12 text-center">
                  {bannerTitle && (
                    <h1 className="w-2/4 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-xl">
                      {bannerTitle}
                    </h1>
                  )}

                  {bannerSubtitle && (
                    <p className="w-2/4 mt-4 text-lg font-light leading-relaxed text-white/90 md:text-xl">
                      {bannerSubtitle}
                    </p>
                  )}

                  {banner_button && banner_button_url && (
                    <a
                      href={banner_button_url}
                      className="inline-block px-10 py-3 mt-8 text-lg font-bold text-black bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:shadow-inner transform hover:scale-[1.02] transition-all duration-300"
                    >
                      {banner_button}
                    </a>
                  )}
                </div>
              </div>
            </>
          ) : bannerTitle ? (
            // Show only title without any background/overlay
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                {bannerTitle}
              </h1>

              {bannerSubtitle && (
                <p className="mt-4 text-lg font-light leading-relaxed text-gray-600 md:text-xl">
                  {bannerSubtitle}
                </p>
              )}

              {banner_button && banner_button_url && (
                <a
                  href={banner_button_url}
                  className="inline-block px-8 py-3 mt-6 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300"
                >
                  {banner_button}
                </a>
              )}
            </div>
          ) : null}
        </div>
      )}

      {/* ========== Content Section ========== */}
      {contentWithIds ? (
        <section className="container px-12 py-12 mx-auto bg-white shadow-sm rounded-3xl">
          <div className="prose prose-lg max-w-none">
            <HtmlRenderer content={contentWithIds} />
          </div>
        </section>
      ) : null}

      {/* ========== Departments Section ========== */}
      {is_department_boxes && <FacultyDepertmentPage slug={slug} />}
    </div>
  );
};

export default FacultyCommonPages;
