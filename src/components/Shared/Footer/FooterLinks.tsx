import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import React from "react";

interface FooterLinksProps {
  SiteData: any;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ SiteData }) => {
  const usefulLinks = SiteData.footer_links;

  return (
    <div className="p-6 transition-shadow border-white/20 rounded-2xl">
      <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
        Useful Links
        <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
      </h6>

      <ul className="space-y-2 text-sm opacity-90">
        {usefulLinks.map((item: any, i: number) => {
          const isPDF = item.url.toLowerCase().endsWith(".pdf");

          return (
            <li key={i}>
              <Link
                href={item.url}
                target={isPDF ? "_blank" : "_self"}
                rel={isPDF ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 transition-all hover:text-white hover:translate-x-1 "
              >
                <FaAngleRight className="text-md" />
                <span className="text-md">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
