"use client";
import BreakingMarquee from "./BreakingMarquee"; // adjust the path if needed

const demoNews = [
  { title: "New version of React released today!", href: "/news/react-release" },
  { title: "Stock markets hit an all-time high.", href: "/news/stock-market" },
  { title: "Local team wins the championship!", href: "/news/local-team-win" },
  { title: "Scientists discover new exoplanet in nearby galaxy.", href: "/news/exoplanet-discovery" },
  { title: "Tech giant announces AI breakthrough.", href: "/news/ai-breakthrough" },
  { title: "Major traffic disruption in downtown area.", href: "/news/traffic-disruption" },
  { title: "New movie breaks box office records.", href: "/news/movie-boxoffice" },
  { title: "Weather alert: Heavy rains expected tomorrow.", href: "/news/weather-alert" },
];

const NewsSection = () => {
  return (
    <section className="">
      <BreakingMarquee items={demoNews} />
    </section>
  );
};

export default NewsSection;
