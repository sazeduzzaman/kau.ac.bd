"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface MenuItemType {
  label: string;
  href: string;
  slug: string;
}

const AboutMenu: React.FC = () => {
  const pathname = usePathname();
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          "https://admin.kau.khandkershahed.com/api/v1/about-pages"
        );
        const data = await res.json();

        if (data.menu && Array.isArray(data.menu)) {
          const mapped: MenuItemType[] = data.menu
            .sort((a: any, b: any) => a.position - b.position)
            .map((item: any) => ({
              label: item.menu_label || item.title,
              href: `/about/${item.slug}`, // Dynamic href
              slug: item.slug, // Keep slug handy
            }));

          setMenuItems(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch about menu:", err);
      }
    };

    fetchMenu();
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname === href + "/";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Dropdown Button */}
      <span
        className={`flex items-center px-3 py-2 font-semibold text-gray-600 cursor-pointer transition-all duration-300 rounded-md ${
          menuItems.some((item) => isActive(item.href))
            ? "text-site-secondary border-b-2 border-site-primary rounded-none"
            : "text-dark hover:bg-site-primary hover:text-[#438aba]"
        }`}
      >
        About
        <FaChevronDown className="ml-2 text-xs transition-transform duration-300" />
      </span>

      {/* Dropdown Menu */}
      {menuItems.length > 0 && (
        <ul
          className={`absolute top-full left-0 bg-white shadow-lg py-0 transition-all duration-300 z-50 w-60 ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={`/about/${item.slug}`} // Use slug here for dynamic route
                className={`flex justify-between items-center px-4 py-3 text-sm transition-all duration-200 w-full ${
                  isActive(item.href)
                    ? "bg-site-primary text-white shadow-md"
                    : "text-black hover:bg-site-primary hover:text-[#438aba]"
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

export default AboutMenu;
