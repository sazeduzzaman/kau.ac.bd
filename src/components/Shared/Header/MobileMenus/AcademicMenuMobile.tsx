"use client";

import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

interface AcademicMenuProps {
  isMobile: boolean;
  closeDrawer: () => void;
}

// Sample academic menu data
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

const AcademicMenuMobile: React.FC<AcademicMenuProps> = ({
  isMobile,
  closeDrawer,
}) => {
  if (!isMobile) return null;

  // Recursive menu renderer
  const renderMenu = (items: MenuItem[]) => (
    <ul className="flex flex-col pl-4 mt-1 space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>
          {item.children && item.children.length > 0 ? (
            <details className="group">
              <summary className="flex items-center justify-start px-2 py-2 rounded-lg cursor-pointer text-black hover:bg-[#498dbd]/20 transition-colors duration-300 font-medium list-none">
                <span className="mr-2 transition-transform duration-300 group-open:rotate-90">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
                {item.label}
              </summary>
              {renderMenu(item.children)}
            </details>
          ) : (
            <Link
              href={item?.href}
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-lg text-black hover:bg-[#498dbd]/20 transition-colors duration-300"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <details className="group">
      <summary className="flex items-center justify-start px-2 py-2 rounded-lg cursor-pointer text-black hover:bg-[#498dbd]/20 transition-colors duration-300 font-medium list-none">
        <span className="mr-2 transition-transform duration-300 group-open:rotate-90">
          <MdOutlineKeyboardArrowRight size={25} />
        </span>
        {academicMenu.label}
      </summary>
      {renderMenu(academicMenu.children!)}
    </details>
  );
};

export default AcademicMenuMobile;
