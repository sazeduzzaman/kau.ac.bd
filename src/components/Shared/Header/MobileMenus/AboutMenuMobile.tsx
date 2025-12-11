"use client";

import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface AboutMenuItem {
  label: string;
  href: string;
  children?: AboutMenuItem[];
}

interface AboutMenuProps {
  isMobile: boolean;
  closeDrawer: () => void;
}

const aboutMenu: AboutMenuItem = {
  label: "About",
  href: "/about",
  children: [
    { label: "KAU at a Glance", href: "/about" },
    { label: "Chancellor", href: "/about/history" },
    { label: "Vice-Chancellor", href: "/vice-chancellor" },
    { label: "Pro Vice-Chancellor", href: "/pro-vice-chancellor" },
    { label: "Treasurer", href: "/office-treasurer" },
    { label: "Mission and Vision", href: "/mission-vission" },
  ],
};

const AboutMenuMobile: React.FC<AboutMenuProps> = ({
  isMobile,
  closeDrawer,
}) => {
  if (!isMobile) return null; // Desktop handled elsewhere

  return (
    <details className="group">
      <summary className="flex items-center justify-start px-2 py-2 rounded-lg cursor-pointer text-black hover:bg-[#498dbd]/20 transition-colors duration-300 font-medium list-none">
        {/* Simple arrow */}
        <span className="transition-transform duration-300 group-open:rotate-90 me-2">
          <MdOutlineKeyboardArrowRight size={25}/>
        </span>
        {aboutMenu.label}
      </summary>

      <ul className="flex flex-col pl-4 mt-1 space-y-1">
        {aboutMenu.children?.map((item, index) => (
          <li key={index}>
            <Link
              href={item?.href}
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-lg text-black hover:bg-[#498dbd]/20 transition-colors duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default AboutMenuMobile;
