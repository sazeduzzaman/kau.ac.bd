"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="flex flex-col leading-tight">
        <h1 className="text-lg md:text-[22.5px] font-extrabold">
          খুলনা কৃষি বিশ্ববিদ্যালয়
        </h1>
        <h1 className="text-sm md:text-[17px] text-gray-600 font-semibold">
          Khulna Agricultural University
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
