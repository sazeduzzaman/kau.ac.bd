"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface MenuItemType {
  label: string;
  href: string;
  highlight?: boolean;
  children?: MenuItemType[];
}

const menuItems: MenuItemType[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "History", href: "/about/history" },
      { label: "Mission", href: "/about/mission" },
    ],
  },
  { label: "Administration", href: "/admin" },
  {
    label: "Academics",
    href: "#",
    children: [
      { label: "Schools", href: "/schools" },
      { label: "Admission", href: "/admission" },
      {
        label: "Ordinances",
        href: "#",
        children: [
          { label: "Undergraduate", href: "/ug" },
          { label: "Masters", href: "/pg" },
          {
            label: "Doctor of Philosophy",
            href: "#",
            children: [
              {
                label: "Ordinance for the Degree of PhD",
                href: "/phd-ordinance",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Others",
    href: "#",
    children: [
      { label: "Schools", href: "/schools" },
      { label: "Admission", href: "/admission" },
      {
        label: "Ordinances",
        href: "#",
        children: [
          { label: "Undergraduate", href: "/ug" },
          { label: "Masters", href: "/pg" },
          {
            label: "Doctor of Philosophy",
            href: "#",
            children: [
              {
                label: "Ordinance for the Degree of PhD",
                href: "/phd-ordinance",
              },
            ],
          },
        ],
      },
    ],
  },
  { label: "Admission", href: "/admission", highlight: true },
  { label: "Centers & Cells", href: "/centers" },
];

const DesktopMenu: React.FC = () => {
  return (
    <nav className="hidden px-4 py-0 font-sans bg-white lg:block">
      <ul className="flex items-center justify-start h-16 space-x-1 font-medium text-dark">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => {
  const pathname = usePathname();
  const hasChildren = !!item.children?.length;
  const [open, setOpen] = useState(false);

  // Active if current route matches or any child matches
  const isActive =
    pathname === item.href ||
    item.children?.some((child) => pathname.startsWith(child.href));

  return (
    <li
      className="relative flex items-center h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`flex items-center px-4 py-2 transition-all duration-200 mx-1
          ${item.highlight ? "text-accent-color" : "text-dark"} 
          ${
            open || isActive
              ? "border-b border-site-primary text-site-primary"
              : "hover:bg-site-primary hover:text-white"
          }`}
      >
        {item.label}
        {hasChildren && <FaChevronDown className="ml-1 text-xs" />}
      </Link>

      {hasChildren && (
        <ul
          className={`absolute top-full left-0 bg-white shadow-sm  rounded-md transition-all duration-200 z-50 py-2 w-48 ${
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

const DropdownItem: React.FC<{ item: MenuItemType; pathname: string }> = ({
  item,
  pathname,
}) => {
  const hasChildren = !!item.children?.length;
  const [open, setOpen] = useState(false);

  const isActive =
    pathname === item.href ||
    item.children?.some((child) => pathname.startsWith(child.href));

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`flex justify-between items-center px-6 py-3 transition-colors duration-200 text-sm text-dark rounded
          ${
            open || isActive
              ? "bg-site-primary text-white"
              : "hover:bg-site-primary hover:text-white"
          }`}
      >
        <span>{item.label}</span>
        {hasChildren && <FaChevronRight className="ml-2 text-xs opacity-70" />}
      </Link>

      {hasChildren && (
        <ul
          className={`absolute left-full top-0 w-max min-w-[100px] max-w-[400px] bg-white shadow-sm rounded-md transition-all duration-200 z-50 py-2 ml-[1px]
            ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          {item.children!.map((child, idx) => (
            <DropdownItem key={idx} item={child} pathname={pathname} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DesktopMenu;
