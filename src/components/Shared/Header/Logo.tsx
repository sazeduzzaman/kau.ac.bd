"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC<{ SiteInfoData?: any }> = ({ SiteInfoData }) => {
  const siteNameDataEn = SiteInfoData?.settings;
  const siteBrandData = SiteInfoData?.settings?.branding;
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative flex-shrink-0 w-22 h-22 md:w-22 md:h-22">
        <Image
          src={siteBrandData?.site_logo_white ?? "/images/logo-main.png"}
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="flex flex-col leading-tight logo-container">
        <h1 className="text-lg md:text-[35px] font-extrabold text-site-primary font-surjo">
          খুলনা কৃষি বিশ্ববিদ্যালয়
        </h1>
        <h1 className="text-sm md:text-[20px] text-site-secondary font-semibold">
          {siteNameDataEn?.website_name ?? "Khulna Agricultural University"}
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
