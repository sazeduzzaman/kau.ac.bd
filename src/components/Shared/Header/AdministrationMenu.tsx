"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface MenuItemType {
  label: string;
  href: string;
  children?: MenuItemType[];
  external?: boolean;
}

const AdministrationMenu: React.FC = () => {
  const pathname = usePathname();
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [open, setOpen] = useState(false);

  // Fetch menu data from API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/administration`
        );
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          const mapped: MenuItemType[] = data.data.map((item: any) => ({
            label: item.name || "Untitled",
            href: `/administration/office`,
            children: Array.isArray(item.offices)
              ? item.offices.map((office: any) => ({
                  label: office.title || "Untitled",
                  href: `/administration/office/${office?.slug}`,
                }))
              : [],
          }));
          setMenuItems(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch administration menu:", err);
      }
    };

    fetchMenu();
  }, []);

  // Recursive check for active menu item or its children
  const isActive = (item: MenuItemType): boolean =>
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
          menuItems.some(isActive)
            ? "text-site-secondary border-b-2 border-site-primary text-white"
            : "text-dark hover:bg-site-primary hover:text-[#438aba]"
        }`}
      >
        Administration
        <FaChevronDown
          className={`ml-2 text-xs transition-transform duration-300 ${
            open ? "-rotate-90" : ""
          }`}
        />
      </span>

      {/* Dropdown */}
      {menuItems.length > 0 && (
        <ul
          className={`absolute top-full right-0 bg-white shadow-lg py-0 transition-all duration-300 z-50 w-60 ml-px ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {menuItems.map((item, idx) => (
            <DropdownItem key={idx} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

const DropdownItem: React.FC<{ item: MenuItemType; level?: number }> = ({
  item,
  level = 1,
}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  const isActive = (item: MenuItemType): boolean =>
    pathname === item.href ||
    (item.children?.some((child) => isActive(child)) ?? false);

  const content = (
    <>
      {item.label}
      {hasChildren ? (
        <FaChevronDown
          className={`ml-2 text-xs transition-transform duration-200 ${
            open ? "-rotate-90" : ""
          }`}
        />
      ) : (
        <FaArrowRight className="ml-2 text-xs text-gray-400" />
      )}
    </>
  );

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {level === 1 ? (
        // First-level submenu not clickable
        <span
          className={`flex justify-between items-center px-4 py-3 text-sm transition-all duration-200 w-full cursor-default ${
            isActive(item) || open
              ? "bg-site-primary text-white shadow-md"
              : "text-dark hover:bg-site-primary hover:text-white"
          }`}
        >
          {content}
        </span>
      ) : (
        // Sub-submenu clickable
        <Link
          href={item?.href}
          className={`flex justify-between items-center px-4 py-3 text-sm transition-all duration-200 w-full ${
            isActive(item) || open
              ? "bg-site-primary text-white shadow-md"
              : "text-dark hover:bg-site-primary hover:text-white"
          }`}
        >
          {content}
        </Link>
      )}

      {hasChildren && (
        <ul
          className={`absolute top-0 right-full bg-white shadow-lg transition-all duration-300 z-50 py-2 ml-px grid gap-2 ${
            open
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible -translate-x-2"
          }`}
          style={{
            gridTemplateColumns: item.children!.length > 8 ? "1fr 1fr" : "1fr",
            width: item.children!.length > 8 ? "35rem" : "12rem", // adjust width for 2-column
          }}
        >
          {item.children!.map((child, idx) => (
            <DropdownItem key={idx} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default AdministrationMenu;
