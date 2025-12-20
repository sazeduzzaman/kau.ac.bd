import AboutSummitSection from "@/components/HomePage/AboutSummitSection/AboutSummitSection";
import ChancellorSection from "@/components/HomePage/ChancellorSection/ChancellorSection";
import DefaultDrawer from "@/components/HomePage/DefaultDrawer/DefaultDrawer";
import FacultySection from "@/components/HomePage/FacultySection/FacultySection";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
// import ImportantLinksSection from "@/components/HomePage/ImportantLinksSection/ImportantLinksSection";
import InfoCardsSection from "@/components/HomePage/InfoCardsSection/InfoCardsSection";
import KauAtAGlanceSection from "@/components/HomePage/KauAtAGlanceSection/KauAtAGlanceSection";
import NewsNoticeSection from "@/components/HomePage/NewsNoticeSection/NewsNoticeSection";
import { HomePageDataSet } from "@/lib/apis/HomePageDataSet/HomePageDataSet";

export default async function Page() {
  const homeData = await HomePageDataSet();
  const bannersData = homeData.banners;
  const vcMessageData = homeData.vc_message;
  const exploreData = homeData.explore;
  const glanceData = homeData.glance;
  const facultyData = homeData.faculty;
  const aboutData = homeData.about;
  return (
    <>
      <HeroSection bannersData={bannersData} />
      <ChancellorSection vcMessageData={vcMessageData} />
      <InfoCardsSection exploreData={exploreData} />
      <NewsNoticeSection />
      <FacultySection facultyData={facultyData} />
      <KauAtAGlanceSection glanceData={glanceData} />
      <AboutSummitSection aboutData={aboutData} />
      {/* <ImportantLinksSection /> */}
    </>
  );
}
