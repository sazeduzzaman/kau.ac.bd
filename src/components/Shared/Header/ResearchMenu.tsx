"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

// Research & Innovation Menu Data
const researchMenu: MenuItem = {
  label: "Research & Innovation",
  href: "#",
  children: [
    { label: "KAURES", href: "#" },
    { label: "CASR", href: "#" },
    { label: "Central Laboratory", href: "#" },
    { label: "Research News", href: "#" },
    { label: "Publications", href: "#" },
    { label: "Center and Institute", href: "#" },
    { label: "Research Collaboration", href: "#" },
    { label: "Innovation", href: "#" },
  ],
};

const ResearchMenu: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (item: MenuItem): boolean =>
    pathname === item.href ||
    (item.children?.some((child) => isActive(child)) ?? false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Button */}
      <span
        className={`flex items-center px-3 py-2 font-semibold text-gray-600 cursor-pointer transition-all duration-300 ${
          isActive(researchMenu)
            ? "bg-site-primary text-white shadow-md"
            : "text-dark hover:bg-site-primary hover:text-[#438aba]"
        }`}
      >
        {researchMenu.label}
        <FaChevronDown
          className={`ml-2 text-xs transition-transform duration-300 ${
            open ? "-rotate-90" : ""
          }`}
        />
      </span>

      {/* Dropdown */}
      {researchMenu.children && researchMenu.children.length > 0 && (
        <ul
          className={`absolute top-full left-0 bg-white shadow-lg py-0 transition-all duration-300 z-50 w-60 ml-[1px]  ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {researchMenu.children.map((item, index) => (
            <RecursiveMenuItem key={index} item={item} pathname={pathname} />
          ))}
        </ul>
      )}
    </div>
  );
};

const RecursiveMenuItem: React.FC<{ item: MenuItem; pathname: string }> = ({
  item,
  pathname,
}) => {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  const isActive = (item: MenuItem): boolean =>
    pathname === item.href ||
    (item.children?.some((child) => isActive(child)) ?? false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`flex justify-between items-center px-4 py-3 text-sm w-full  transition-all duration-300 ${
          isActive(item)
            ? "bg-site-primary text-white shadow-md"
            : "text-dark hover:bg-[#438aba] hover:text-white hover:shadow-md"
        }`}
      >
        {item.label}
        {hasChildren ? (
          <FaChevronDown
            className={`ml-2 text-xs transition-transform duration-300 ${
              open ? "rotate-90 text-white" : ""
            }`}
          />
        ) : (
          <FaArrowRight className="ml-2 text-xs text-gray-400" />
        )}
      </Link>

      {/* Nested Submenu */}
      {hasChildren && (
        <ul
          className={`absolute top-0 left-full bg-white shadow-lg  py-2 transition-all duration-300 z-50 ml-[1px] w-60 py-0 ${
            open
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible -translate-x-2"
          }`}
        >
          {item.children!.map((child, index) => (
            <RecursiveMenuItem key={index} item={child} pathname={pathname} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default ResearchMenu;
