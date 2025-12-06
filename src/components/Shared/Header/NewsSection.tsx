// components/NewsSection.tsx
import { BreakingDataSet } from "@/lib/apis/Marquee/MarqueeDataset";
import BreakingMarquee from "./BreakingMarquee";

export default async function NewsSection() {
  const breakingNews = await BreakingDataSet();

  const formattedItems = breakingNews.map(item => ({
    title: item.title,
    href: item.url ?? "#",
  }));

  return <BreakingMarquee items={formattedItems} />;
}
