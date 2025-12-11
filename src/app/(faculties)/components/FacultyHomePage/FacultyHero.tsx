import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";
import Image from "next/image";
import React from "react";

const FacultyHero = ({ homePageData }: any) => {
  if (!homePageData) return null;

  const {
    banner_title,
    title,
    banner_subtitle,
    subtitle,
    banner_button,
    banner_button_url,
    banner_image,
    content,
  } = homePageData;

  const bannerTitle = banner_title || title;
  const bannerSubtitle = banner_subtitle || subtitle;

  return (
    <>
      {/* Hero Section */}
      {(bannerTitle || banner_image || banner_button) && (
        <div className="relative container bg-white mx-auto mt-5 rounded-2xl overflow-hidden h-[45vh] md:h-[60vh] lg:h-[70vh] shadow-xl">
          {/* Banner Image */}
          {banner_image && (
            <Image
              src={banner_image}
              alt={bannerTitle || "Banner Image"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover object-center transition duration-500 ease-in-out transform hover:scale-105"
            />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-12 text-center">
            {bannerTitle && (
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-xl">
                {bannerTitle}
              </h1>
            )}

            {bannerSubtitle && (
              <p className="max-w-4xl mt-4 text-lg font-light leading-relaxed text-white/90 md:text-xl">
                {bannerSubtitle}
              </p>
            )}

            {banner_button && banner_button_url && (
              <a
                href={banner_button_url}
                className="inline-block px-10 py-3 mt-8 text-lg font-bold text-black transition-all duration-300 bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:shadow-inner transform hover:scale-[1.02]"
              >
                {banner_button}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Content Section */}
      {content && (
        <section className="container px-12 py-12 mx-auto bg-white shadow-md rounded-3xl">
          <div className="prose prose-lg max-w-none">
            <HtmlRenderer content={content} />
          </div>
        </section>
      )}
    </>
  );
};

export default FacultyHero;
