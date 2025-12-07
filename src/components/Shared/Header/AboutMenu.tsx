"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface AboutMenuItem {
  label: string;
  href: string;
  children?: AboutMenuItem[];
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

const AboutMenu: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Button */}
      <span
        className={`flex items-center px-4 py-2 font-medium cursor-pointer transition-all duration-300 rounded-md ${
          isActive(aboutMenu.href)
            ? "bg-site-primary text-white shadow-md"
            : "text-dark hover:bg-site-primary hover:text-[#438aba]"
        }`}
      >
        {aboutMenu.label}
        <FaChevronDown
          className={`ml-2 text-xs transition-transform duration-300 ${
            open ? "-rotate-90" : ""
          }`}
        />
      </span>

      {/* Dropdown */}
      {aboutMenu.children && aboutMenu.children.length > 0 && (
        <ul
          className={`absolute top-full left-0 bg-white shadow-lg  py-0 transition-all duration-300 z-50 w-60 ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {aboutMenu.children.map((item, index) => (
            <li key={index} className="relative">
              <Link
                href={item.href || "#"}
                className={`flex justify-between items-center px-4 py-3 text-sm transition-all duration-300 w-full ${
                  isActive(item.href)
                    ? "bg-site-primary text-white shadow-md"
                    : "text-dark hover:bg-[#438aba] hover:text-white hover:shadow-md"
                }`}
              >
                {item.label}
                {item.children && item.children.length > 0 ? (
                  <FaChevronDown
                    className={`ml-2 text-xs transition-transform duration-200 ${
                      open ? "rotate-90" : ""
                    }`}
                  />
                ) : (
                  <FaArrowRight className="ml-2 text-xs text-gray-400" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AboutMenu;
