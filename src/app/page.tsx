import AboutSummitSection from "@/components/HomePage/AboutSummitSection/AboutSummitSection";
import ChancellorSection from "@/components/HomePage/ChancellorSection/ChancellorSection";
import FacultySection from "@/components/HomePage/FacultySection/FacultySection";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import ImportantLinksSection from "@/components/HomePage/ImportantLinksSection/ImportantLinksSection";
import InfoCardsSection from "@/components/HomePage/InfoCardsSection/InfoCardsSection";
import KauAtAGlanceSection from "@/components/HomePage/KauAtAGlanceSection/KauAtAGlanceSection";
import NewsNoticeSection from "@/components/HomePage/NewsNoticeSection/NewsNoticeSection";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <ChancellorSection />
      <InfoCardsSection />
      <FacultySection />
      <KauAtAGlanceSection/>
      <AboutSummitSection />
      <ImportantLinksSection />
      <NewsNoticeSection />
    </>
  );
};

export default page;
