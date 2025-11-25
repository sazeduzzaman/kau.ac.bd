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
    label: "About",
    href: "/about",
    children: [
      { label: "KAU at a Glance", href: "/about" },
      { label: "Chancellor", href: "/about/history" },
      { label: "Vice-Chancellor", href: "/about/mission" },
      { label: "Pro Vice-Chancellor", href: "/about/mission" },
      { label: "Treasurer", href: "/about/mission" },
      { label: "Mission and Vision", href: "/about/mission" },
    ],
  },
  {
    label: "Administration",
    href: "#",
    children: [
      {
        label: "Authorities",
        href: "#",
        children: [
          { label: "Syndicate", href: "/ug" },
          { label: "Academic Council", href: "/ug" },
          { label: "Committees", href: "/pg" },
        ],
      },
      {
        label: "Administrative",
        href: "#",
        children: [
          { label: "Office of the VC", href: "/ug" },
          { label: "Office of the Registrar", href: "/ug" },
          { label: "Council Section", href: "/ug" },
          { label: "Public Relations & Publications Office", href: "/ug" },
          { label: "Central Despas", href: "/ug" },
          { label: "Finance & Accounts Division", href: "/ug" },
          { label: "ICT Cell", href: "/ug" },
          { label: "Engineering Division", href: "/pg" },
          { label: "Office of the Treasurer", href: "/pg" },
          { label: "Transport Pool", href: "/pg" },
          { label: "Academic Section", href: "/pg" },
          { label: "Central Store", href: "/pg" },
          { label: "Liaison Officer For Academics", href: "/pg" },
          { label: "Planning, Developments & Works Division", href: "/pg" },
          { label: "Controller Section", href: "/pg" },
        ],
      },
      {
        label: "Directorates",
        href: "#",
        children: [
          { label: "Director of Student Affairs", href: "/ug" },
          { label: "Director of Planning", href: "/pg" },
          { label: "Director of Finance", href: "/pg" },
          { label: "Director of IQAC", href: "/pg" },
          { label: "Director of ICT", href: "/pg" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    href: "#",
    children: [
      { label: "Faculty", href: "/schools" },
      { label: "Institutes", href: "/admission" },
    ],
  },
  {
    label: "Admission",
    href: "#",
    children: [
      { label: "Undergraduate Programs", href: "/schools" },
      { label: "Graduate Programs", href: "/admission" },
      { label: "International Students", href: "/admission" },
    ],
  },
  {
    label: "Research & Innovation",
    href: "#",
    children: [
      { label: "KAURES", href: "/schools" },
      { label: "CASR", href: "/admission" },
      { label: "Central Laboratory", href: "/admission" },
      { label: "Research News", href: "/admission" },
      { label: "Publications", href: "/admission" },
      { label: "Center and Institute", href: "/admission" },
      { label: "Research Collaboration", href: "/admission" },
      { label: "Innovation", href: "/admission" },
    ],
  },
  {
    label: "Life at KAU",
    href: "#",
    children: [
      { label: "Students' Dormitory", href: "/schools" },
      { label: "Teachers' Residence", href: "/admission" },
      { label: "TSC", href: "/admission" },
      { label: "Transport", href: "/admission" },
      { label: "Bank", href: "/admission" },
      { label: "Student Affairs", href: "/admission" },
      { label: "Guest House", href: "/admission" },
      { label: "Cultural Organization and Club", href: "/admission" },
      { label: "Gymnasium and Sports", href: "/admission" },
      { label: "Telephone Directory", href: "/admission" },
      { label: "Library", href: "/admission" },
      { label: "Central Cafeteria", href: "/admission" },
      { label: "Central Auditorium", href: "/admission" },
      { label: "Conference Hall", href: "/admission" },
    ],
  },
  { label: "Desk", href: "/admission", highlight: true },
];

const DesktopMenu: React.FC = () => {
  return (
    <nav className="hidden py-0 font-sans bg-white lg:block">
      <ul className="flex items-center justify-start h-16 space-x-1 font-medium text-dark font-primary">
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
    className={`flex items-center px-2 md:px-1 py-2 transition-all duration-200 mx-1 text-black
      ${
        open || isActive
          ? "text-site-secondary !border-b !border-site-primary"
          : "text-dark"
      }
      hover:bg-site-primary
    `}
  >
    {item.label}
    {hasChildren && <FaChevronDown className="ml-1 text-xs" />}
  </Link>

  {hasChildren && (
    <ul
      className={`absolute top-full left-0 bg-white text-black shadow-sm rounded-md transition-all duration-200 z-50 py-2 w-60 ${
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

import { FaLongArrowAltRight } from "react-icons/fa";

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
        className={`relative flex justify-between items-center px-6 py-3 transition-colors duration-200 text-sm group
          ${
            open || isActive
              ? "bg-site-primary text-white"
              : "text-dark hover:bg-site-primary hover:text-white"
          }`}
      >
        <span>{item.label}</span>

        {/* Show arrow on hover or if active */}
        <span
          className={`transition-all duration-300 ${
            open || isActive
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[-5px]"
          }`}
        >
          {/* <FaLongArrowAltRight size={18} /> */}
          <span>→</span>
        </span>
      </Link>

      {hasChildren && (
        <ul
          className={`absolute left-full top-0 w-max min-w-[150px] max-w-[400px] bg-white shadow-sm rounded-md transition-all duration-200 z-50 py-2 ml-[1px]
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
