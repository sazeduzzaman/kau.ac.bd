import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import Topbar from "./Topbar";
import BreakingMarquee from "./BreakingMarquee";
import { BreakingDataSet } from "@/lib/apis/Marquee/MarqueeDataset";
import { MarqueePropsItem } from "./BreakingMarquee";
import { SiteSettingDataset } from "@/lib/apis/SiteInfromationDataSet/SiteInfromationDataSet";

export default async function Header() {
  // Server-side fetch
  const newsData = await BreakingDataSet();
  const SiteInfoData = await SiteSettingDataset();

  const marqueeItems: MarqueePropsItem[] = newsData.map((item) => ({
    title: item.title,
    href: item.url ?? "#",
  }));
  return (
    <header className="relative w-full">
      {/* Sticky Topbar + Marquee */}
      <BreakingMarquee items={marqueeItems} />
      <Topbar SiteInfoData={SiteInfoData}/>

      {/* Main Navbar */}
      <div className="relative w-full py-2 transition-all duration-700 ease-in-out bg-white border-b border-green-100 shadow-none">
        <div className="container flex items-center justify-between mx-auto header-container">
          <Logo SiteInfoData={SiteInfoData}/>
          <DesktopMenu />
        </div>
      </div>
    </header>
  );
}
