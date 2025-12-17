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

const lifeAtKAUMenu: MenuItem = {
  label: "Life at KAU",
  href: "#",
  children: [
    { label: "Students' Dormitory", href: "#" },
    { label: "Teachers' Residence", href: "#" },
    { label: "TSC", href: "#" },
    { label: "Transport", href: "#" },
    { label: "Bank", href: "#" },
    { label: "Student Affairs", href: "#" },
    { label: "Guest House", href: "#" },
    { label: "Cultural Organization and Club", href: "#" },
    { label: "Gymnasium and Sports", href: "#" },
    { label: "Telephone Directory", href: "#" },
    { label: "Library", href: "#" },
    { label: "Central Cafeteria", href: "#" },
    { label: "Central Auditorium", href: "#" },
    { label: "Conference Hall", href: "#" },
  ],
};

const LifeAtKAUMenu: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (item: MenuItem) => pathname === item.href;

  // Function to split children into two columns
  const splitIntoTwoColumns = (items: MenuItem[]) => {
    const middleIndex = Math.ceil(items.length / 2);
    const leftColumn = items.slice(0, middleIndex);
    const rightColumn = items.slice(middleIndex);
    return { leftColumn, rightColumn };
  };

  const renderMenuItem = (item: MenuItem, index: number) => (
    <li key={index}>
      <Link
        href={item?.href}
        className={`flex justify-between items-center px-4 py-3 text-sm w-full transition-all duration-300 ${
          isActive(item)
            ? "bg-site-primary text-white shadow-md"
            : "text-dark hover:bg-[#438aba] hover:text-white hover:shadow-md"
        }`}
      >
        {item?.label}
        <FaArrowRight className="ml-2 text-xs text-gray-400" />
      </Link>
    </li>
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        className={`flex items-center px-3 py-2 font-semibold text-gray-600 cursor-pointer transition-all duration-300 ${
          isActive(lifeAtKAUMenu)
            ? "bg-site-primary text-white shadow-md"
            : "text-dark hover:bg-site-primary hover:text-[#438aba]"
        }`}
      >
        {lifeAtKAUMenu.label}
        <FaChevronDown
          className={`ml-2 text-xs transition-transform duration-300 ${
            open ? "-rotate-90" : ""
          }`}
        />
      </span>

      {lifeAtKAUMenu.children?.length && (
        <div
          className={`absolute top-full right-0 bg-white shadow-lg transition-all duration-300 z-50 ml-[1px] py-0 ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          } ${lifeAtKAUMenu.children.length > 6 ? "w-[500px]" : "w-60"}`}
        >
          {lifeAtKAUMenu.children.length > 6 ? (
            // Two column layout for more than 6 items
            <div className="grid grid-cols-2">
              <div className="border-r border-gray-100">
                {(() => {
                  const { leftColumn } = splitIntoTwoColumns(lifeAtKAUMenu.children);
                  return (
                    <ul className="py-0">
                      {leftColumn.map((item, index) => renderMenuItem(item, index))}
                    </ul>
                  );
                })()}
              </div>
              <div>
                {(() => {
                  const { rightColumn } = splitIntoTwoColumns(lifeAtKAUMenu.children);
                  return (
                    <ul className="py-0">
                      {rightColumn.map((item, index) => renderMenuItem(item, index))}
                    </ul>
                  );
                })()}
              </div>
            </div>
          ) : (
            // Single column layout for 6 or fewer items
            <ul className="py-0">
              {lifeAtKAUMenu.children.map((item, index) => renderMenuItem(item, index))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default LifeAtKAUMenu;