import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";
import Image from "next/image";
import React from "react";

const FacultyHero = ({ homePageData }: any) => {
  const bannerTitle = homePageData?.banner_title || homePageData?.title;
  const bannerSubtitle =
    homePageData?.banner_subtitle || homePageData?.subtitle;
  const bannerButton = homePageData?.banner_button;
  const bannerButtonUrl = homePageData?.banner_button_url || "#";
  const content = homePageData?.content;
  console.log(content, "content");

  return (
    <>
      {/* Hero Section */}
      <div className="relative container mx-auto mt-5 rounded-2xl overflow-hidden h-[45vh] md:h-[60vh] lg:h-[70vh] shadow-xl">
        {/* Banner Image */}
        {homePageData?.banner_image || "/images/vabs-img.jpg" ? (
          <Image
            src={homePageData?.banner_image || "/images/vabs-img.jpg"}
            alt={bannerTitle || "Banner Image"}
            fill
            priority // Load banner image first for better UX
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover object-center transition duration-500 ease-in-out transform hover:scale-105"
          />
        ) : null}

        {/* Gradient Overlay for Aesthetics and Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Content Container (Bottom Aligned for modern look) */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-xl">
            {bannerTitle}
          </h1>

          {bannerSubtitle && (
            <p className="max-w-4xl mt-4 text-lg font-light leading-relaxed text-white/90 md:text-xl">
              {bannerSubtitle}
            </p>
          )}

          {bannerButton && (
            <a
              href={bannerButtonUrl}
              className="inline-block px-10 py-3 mt-8 text-lg font-bold text-black transition-all duration-300 bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:shadow-inner transform hover:scale-[1.02]"
            >
              {bannerButton}
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      {content && (
        <section className="container py-12 mx-auto">
          <div className="prose prose-lg max-w-none">
            <HtmlRenderer content={content} />
          </div>
        </section>
      )}
    </>
  );
};

export default FacultyHero;
