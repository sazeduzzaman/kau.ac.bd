"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDynamicIcon } from "@/lib/fontawesome/fontAwesomeHelper";

interface TopbarProps {
  SiteInfoData?: any;
}

const Topbar: React.FC<TopbarProps> = ({ SiteInfoData }) => {
  const socialLinks = SiteInfoData?.settings?.social_links ?? [];

  // Preload all social icons into the FA library
  useEffect(() => {
    socialLinks.forEach((item: any) => getDynamicIcon(item.icon_class));
  }, [socialLinks]);

  return (
    <div className="text-sm text-white bg-site-primary top-bar">
      <div className="container flex items-center justify-between py-2 mx-auto">
        {/* Social Icons */}
        <div className="flex space-x-2">
          {socialLinks.map((item: any, index: number) => {
            const icon = getDynamicIcon(item.icon_class); // returns [prefix, iconName]
            if (!icon || !item.url) return null;

            return (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 transition-colors duration-300 rounded-full bg-white/10 hover:bg-white/20"
              >
                <FontAwesomeIcon icon={icon} className="text-white" />
              </Link>
            );
          })}
        </div>

        {/* Right Links */}
        <div className="flex space-x-3 text-[14px] font-light items-center">
          <div className="flex items-center">
            <Link
              href="/all-notice"
              className="px-3 pt-[2px] text-white hover:text-black font-normal font-merriweather"
            >
              Notice
            </Link>
            <span className="ps-2">|</span>
          </div>

          <div className="flex items-center">
            <Link
              href="/news"
              className="px-3 pt-[2px] text-white hover:text-black font-normal font-merriweather"
            >
              News
            </Link>
            <span className="ps-2">|</span>
          </div>

          <div className="relative group">
            <Link
              href="#"
              className="inline-block px-3 pt-[2px] text-white hover:text-black font-normal font-merriweather"
            >
              KAU Job
            </Link>

            {/* Dropdown */}
            <div className="absolute left-0 z-50 invisible mt-1 transition-all duration-300 bg-white border border-gray-200 rounded shadow-lg opacity-0 w-50 top-full group-hover:visible group-hover:opacity-100">
              <Link
                target="_blank"
                href="/images/pdf/Contractual-job-application-form.pdf"
                className="flex items-center justify-between px-4 py-3 text-black hover:bg-gray-200"
              >
                <span>Contractual Job</span>
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/downloads/file2.pdf"
                className="flex items-center justify-between px-4 py-3 text-black hover:bg-gray-200"
              >
                <span>Teacher & Officer</span>
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
