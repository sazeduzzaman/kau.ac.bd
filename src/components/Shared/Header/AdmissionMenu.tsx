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

const AdmissionMenu: React.FC = () => {
  const pathname = usePathname();
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          "https://admin.kau.khandkershahed.com/api/v1/admissions"
        );
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          const mapped = data.data.map((item: any) => mapItem(item));
          setMenuItems(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch admission menu:", err);
      }
    };

    fetchMenu();
  }, []);

  const mapItem = (item: any): MenuItemType => ({
    label: item.title,
    href:
      item.type === "external" && item.external_url
        ? item.external_url
        : `/admission/${item?.slug}`,
    external: item.type === "external",
    children: item.children?.map((c: any) => mapItem(c)) || [],
  });

  const isActive = (item: MenuItemType): boolean =>
    pathname === item.href ||
    item.children?.some((child) => isActive(child)) ||
    false;

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
            ? "text-site-secondary border-b-2 border-site-primary rounded-none"
            : "text-dark hover:bg-site-primary hover:text-[#438aba]"
        }`}
      >
        Admission{" "}
        <FaChevronDown className="ml-2 text-xs transition-transform duration-300" />
      </span>

      {/* Dropdown Menu */}
      {menuItems.length > 0 && (
        <ul
          className={`absolute top-full right-0 bg-white shadow-lg  py-0 transition-all duration-300 z-50 w-60 ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {menuItems.map((item, index) => (
            <DropdownItem key={index} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

interface DropdownItemProps {
  item: MenuItemType;
}

const DropdownItem: React.FC<DropdownItemProps & { level?: number }> = ({
  item,
  level = 1,
}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hasChildren: boolean = !!item.children?.length;

  const isActive = (item: MenuItemType): boolean =>
    pathname === item.href ||
    item.children?.some((child) => isActive(child)) ||
    false;

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
        // First-level submenu is not clickable
        <span
          className={`flex justify-between items-center px-4 py-3 text-sm transition-all duration-200 w-full cursor-default ${
            isActive(item) || open
              ? "bg-site-primary text-white shadow-md"
              : "text-black hover:bg-site-primary hover:text-[#438aba]"
          }`}
        >
          {content}
        </span>
      ) : (
        // Sub-submenu is clickable
        <Link
          href={item?.href}
          target={item.external ? "_blank" : "_self"}
          rel={item.external ? "noopener noreferrer" : undefined}
          className={`flex justify-between items-center px-4 py-3 text-sm transition-all duration-200 w-full ${
            isActive(item) || open
              ? "bg-site-primary text-white shadow-md"
              : "text-black hover:bg-site-primary hover:text-[#438aba]"
          }`}
        >
          {content}
        </Link>
      )}

      {/* Nested children */}
      {hasChildren && (
        <ul
          className={`absolute top-0 right-full bg-white shadow-lg transition-all duration-300 z-50 py-0 ml-px w-60 ${
            open
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible -translate-x-2"
          }`}
        >
          {item.children!.map((child, idx) => (
            <DropdownItem key={idx} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};


export default AdmissionMenu;
