"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDynamicIcon } from "@/lib/fontawesome/fontAwesomeHelper";
import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";

export interface AboutPage {
  id: number;
  title: string;
  slug: string;
  menu_label: string;
  banner_title?: string;
  banner_subtitle?: string;
  banner_icon?: string;
  banner_image?: string | null;
  excerpt?: string;
  content?: string;
  meta_title?: string | null;
  meta_tags?: string | null;
  meta_description?: string | null;
  is_featured?: boolean;
  position?: number;
} // Type for the API response
export interface AboutPageResponse {
  aboutItem: AboutPage;
}

const AboutPage: React.FC<AboutPageResponse> = ({ aboutItem }) => {
  const [openFaculty, setOpenFaculty] = useState<number | null>(null);

  const toggleFaculty = (index: number) => {
    setOpenFaculty(openFaculty === index ? null : index);
  };

  const iconTuple = aboutItem.banner_icon
    ? getDynamicIcon(aboutItem.banner_icon)
    : null;

  // Dynamic banner image (fallback included)
  const bannerImage =
    aboutItem.banner_image && aboutItem.banner_image.trim() !== ""
      ? aboutItem.banner_image
      : "/images/skyblue-footer-bg.png";

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      {/* Hero Section with Background Image Overlay */}
      <div
        className="relative px-4 py-16 text-white bg-emerald-900 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url("${bannerImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 opacity-100 bg-site-primary/50"></div>

        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full h-15 w-15 bg-site-primary backdrop-blur-sm">
            <FontAwesomeIcon
              icon={
                aboutItem.banner_icon
                  ? getDynamicIcon(aboutItem.banner_icon)
                  : getDynamicIcon("fa-solid fa-circle-info")
              }
              className="text-white "
              style={{ fontSize: "35px" }}
            />
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            {aboutItem.banner_title}
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-emerald-100">
            {aboutItem.banner_subtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl px-4 pb-20 mx-auto -mt-10 sm:px-6 lg:px-8">
        <div className="p-8 mb-10 bg-white border-t-4 max-w-5xl mx-auto shadow-lg rounded-xl border-[#438ABA]">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Khulna Agricultural University
          </h2>
          <div className="space-y-4 leading-relaxed text-slate-600">
            <p>{aboutItem.excerpt}</p>

            {/* <div
              className="max-w-full mt-6 prose"
              dangerouslySetInnerHTML={{ __html: aboutItem.content || "" }}
            /> */}
            <HtmlRenderer content={aboutItem.content} />
          </div>
        </div>

        {/* Future Expansion Card */}
        <div className="p-8 mt-10 border bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-emerald-100">
          <h3 className="mb-3 text-xl font-bold text-site-primary">
            Future Expansion
          </h3>
          <p className="mb-4 text-site-primary">
            Two additional faculties are in the process of being included:
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 text-sm font-semibold bg-white border rounded-full shadow-sm text-site-primary border-emerald-100">
              Faculty of Food Sciences and Safety
            </span>

            <span className="px-4 py-2 text-sm font-semibold bg-white border rounded-full shadow-sm text-site-primary border-emerald-100">
              Faculty of Environment, Disaster Risk and Agroclimatic Studies
            </span>
          </div>

          <p className="text-sm font-medium text-site-primary">
            Note: The university is preparing to offer Master of Science (M.S.)
            and Doctor of Philosophy (Ph.D.) degrees in the near future.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
