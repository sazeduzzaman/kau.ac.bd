// app/(faculties)/faculties/components/Header.tsx

import BreakingMarquee, {
  MarqueePropsItem,
} from "@/components/Shared/Header/BreakingMarquee";
import Logo from "@/components/Shared/Header/Logo";
import Topbar from "@/components/Shared/Header/Topbar";
import { BreakingDataSet } from "@/lib/apis/Marquee/MarqueeDataset";
import { SiteSettingDataset } from "@/lib/apis/SiteInfromationDataSet/SiteInfromationDataSet";
import FacultiesMenus from "./FacultiesMenus";

export default async function FacultiesHeader() {
  // Server-side fetch
  const newsData = await BreakingDataSet();
  const SiteInfoData = await SiteSettingDataset();

  const marqueeItems: MarqueePropsItem[] = newsData.map((item) => ({
    title: item?.title,
    href: item?.url ?? "#",
  }));
  return (
    <header className="relative w-full">
      <BreakingMarquee items={marqueeItems} />
      <Topbar SiteInfoData={SiteInfoData} />
      <div className="relative w-full py-2 transition-all duration-700 ease-in-out bg-white border-b border-green-100 shadow-none">
        <div className="container flex items-center justify-between mx-auto header-container">
          <Logo SiteInfoData={SiteInfoData} />
          <FacultiesMenus />
        </div>
      </div>
    </header>
  );
}
