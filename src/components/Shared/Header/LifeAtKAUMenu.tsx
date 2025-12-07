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
    { label: "Students' Dormitory", href: "/schools" },
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

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        className={`flex items-center px-4 py-2 font-medium cursor-pointer transition-all duration-300 ${
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
        <ul
          className={`absolute top-full left-0 bg-white shadow-lg transition-all duration-300 z-50 w-60 ml-[1px] py-0 ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {lifeAtKAUMenu.children.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex justify-between items-center px-4 py-3 text-sm w-full transition-all duration-300 ${
                  isActive(item)
                    ? "bg-site-primary text-white shadow-md"
                    : "text-dark hover:bg-[#438aba] hover:text-white hover:shadow-md"
                }`}
              >
                {item.label}
                <FaArrowRight className="ml-2 text-xs text-gray-400" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LifeAtKAUMenu;
