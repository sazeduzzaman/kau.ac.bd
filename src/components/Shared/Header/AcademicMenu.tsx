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

const academicMenu: MenuItem = {
  label: "Academics",
  href: "#",
  children: [
    {
      label: "Faculty",
      href: "#",
      children: [
        { label: "Veterinary, Animal and Biomedical Sciences", href: "#" },
        { label: "Agriculture", href: "#" },
        { label: "Fisheries & Oceans Sciences", href: "#" },
        { label: "Agricultural Economics & Agribusiness Studies", href: "#" },
        { label: "Agricultural Engineering & Technology", href: "#" },
        { label: "Institutes", href: "#" },
      ],
    },
    {
      label: "Institutes",
      href: "#",
      children: [{ label: "Graduate Training Institute", href: "#" }],
    },
  ],
};

const AcademicMenu: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Recursive check if item or any child is active
  const isActive = (item: MenuItem): boolean =>
    pathname === item.href ||
    (item.children?.some((child) => isActive(child)) ?? false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Menu Button */}
      <span
        className={`flex items-center px-4 py-2 font-medium cursor-pointer transition-all duration-300 ${
          isActive(academicMenu)
            ? "text-site-secondary border-b-2 border-site-primary rounded-none"
            : "text-dark hover:bg-site-primary hover:text-[#438aba]"
        }`}
      >
        {academicMenu.label}
        <FaChevronDown
          className={`ml-2 text-xs transition-transform duration-300 ${
            open ? "-rotate-90" : ""
          }`}
        />
      </span>

      {/* Dropdown */}
      {academicMenu.children?.length && (
        <ul
          className={`absolute top-full left-0 bg-white shadow-lg py-0 transition-all duration-300 z-50 w-60 ml-[1px] ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {academicMenu.children.map((item, index) => (
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

  // Recursive active check
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
        className={`flex justify-between items-center px-4 py-3 text-sm w-full transition-all duration-300 ${
          isActive(item) || open
            ? "bg-site-primary text-white shadow-md"
            : "text-dark hover:bg-site-primary hover:text-white"
        }`}
      >
        {item.label}
        {hasChildren ? (
          <FaChevronDown
            className={`ml-2 text-xs transition-transform duration-300 ease-in-out ${
              open ? "-rotate-90 text-white" : ""
            }`}
          />
        ) : (
          <FaArrowRight className="ml-2 text-xs text-gray-400" />
        )}
      </Link>

      {hasChildren && (
        <ul
          className={`absolute top-0 left-full bg-white shadow-lg py-0 transition-all duration-300 z-50 ml-[1px] w-60 ${
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

export default AcademicMenu;
