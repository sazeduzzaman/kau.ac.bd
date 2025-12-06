"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

interface MenuItemType {
  label: string;
  href: string;
  children?: MenuItemType[];
  external?: boolean;
}

interface AdmissionMenuProps {
  pathname: string;
}

const AdmissionMenu: React.FC<AdmissionMenuProps> = ({ pathname }) => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          "https://admin.kau.khandkershahed.com/api/v1/admissions"
        );
        const data = await res.json();

        if (data.success) {
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
        : `/admission/${item.slug}`,
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
      <span
        className={`flex items-center px-3 py-2 cursor-pointer transition-colors duration-200 ${
          menuItems.some(isActive)
            ? "text-black border-b-2 border-site-primary"
            : "text-black hover:text-site-primary"
        }`}
      >
        Admission <FaChevronDown className="ml-1 text-xs" />
      </span>

      {menuItems.length > 0 && (
        <ul
          className={`absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-60 transition-all duration-200 z-50
            ${open ? "opacity-100 visible text-black" : "opacity-0 invisible"}`}
        >
          {menuItems.map((item, idx) => (
            <DropdownItem key={idx} item={item} pathname={pathname} />
          ))}
        </ul>
      )}
    </div>
  );
};

const DropdownItem: React.FC<{ item: MenuItemType; pathname: string }> = ({
  item,
  pathname,
}) => {
  const [open, setOpen] = useState(false);

  // Safely check children
  const hasChildren: boolean = !!item.children?.length;

  const isActive = (item: MenuItemType): boolean =>
    pathname === item.href ||
    item.children?.some((child) => isActive(child)) ||
    false;

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Link */}
      <Link
        href={item.href}
        className={`flex justify-between items-center px-6 py-3 text-sm transition-colors duration-200 ${
          isActive(item) || open
            ? "bg-site-primary text-black"
            : "text-dark hover:bg-site-primary hover:text-white"
        }`}
      >
        {item.label}
        {hasChildren && <span className="ml-2">→</span>}
      </Link>

      {/* Nested children */}
      {hasChildren && (
        <ul
          className={`absolute left-full top-0 w-max min-w-[150px] max-w-[400px] bg-white shadow-md rounded-md transition-all duration-200 z-50 py-2 ml-[1px] ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {item.children!.map((child, idx) => (
            <DropdownItem key={idx} item={child} pathname={pathname} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default AdmissionMenu;
