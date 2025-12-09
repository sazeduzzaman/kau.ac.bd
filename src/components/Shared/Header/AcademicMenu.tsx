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
        {
          label: "Veterinary, Animal and Biomedical Sciences",
          href: "/faculties/veterinary-animal-biomedical",
        },
        { label: "Agriculture", href: "/faculties/agriculture" },
        {
          label: "Fisheries & Oceans Sciences",
          href: "/faculties/fisheries-oceans",
        },
      ],
    },
    {
      label: "Institutes",
      href: "#",
      children: [
        {
          label: "Graduate Training Institute",
          href: "/faculties/graduate-training-institute",
        },
      ],
    },
  ],
};

const AcademicMenu: React.FC = () => {
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
      <span
        className={`flex items-center px-3 py-2 font-semibold text-black cursor-pointer transition-all duration-300 ${
          isActive(academicMenu) ? "text-yellow-300" : ""
        }`}
      >
        {academicMenu.label}
        <FaChevronDown
          className={`ml-2 text-xs transition-transform duration-300 ${
            open ? "-rotate-90" : ""
          }`}
        />
      </span>

      {academicMenu.children?.length && (
        <ul
          className={`absolute top-full left-0 bg-white shadow-lg py-0 transition-all duration-300 z-50 w-60 ml-[1px] ${
            open ? "opacity-100 visible" : "opacity-0 invisible -translate-y-2"
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

  const isActive = (item: MenuItem): boolean =>
    pathname === item.href ||
    (item.children?.some((child) => isActive(child)) ?? false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {hasChildren ? (
        <div
          className={`flex justify-between items-center px-4 py-2 cursor-pointer ${
            isActive(item)
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-blue-500 hover:text-white"
          }`}
        >
          {item.label}
          <FaChevronDown
            className={`ml-2 text-xs transition-transform duration-300 ${
              open ? "-rotate-90" : ""
            }`}
          />
        </div>
      ) : (
        <Link
          href={item.href}
          className={`block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white ${
            isActive(item) ? "bg-blue-500 text-white" : ""
          }`}
        >
          {item.label}
        </Link>
      )}

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
