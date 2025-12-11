"use client";

import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

interface ResearchMenuProps {
  isMobile: boolean;
  closeDrawer: () => void;
}

// Research & Innovation Menu Data
const researchMenu: MenuItem = {
  label: "Research & Innovation",
  href: "#",
  children: [
    { label: "KAURES", href: "#" },
    { label: "CASR", href: "#" },
    { label: "Central Laboratory", href: "#" },
    { label: "Research News", href: "#" },
    { label: "Publications", href: "#" },
    { label: "Center and Institute", href: "#" },
    { label: "Research Collaboration", href: "#" },
    { label: "Innovation", href: "#" },
  ],
};

const ResearchMenuMobile: React.FC<ResearchMenuProps> = ({
  isMobile,
  closeDrawer,
}) => {
  if (!isMobile) return null;

  const renderMenu = (items: MenuItem[]) => (
    <ul className="flex flex-col pl-4 mt-1 space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>
          {item.children && item.children.length > 0 ? (
            <details className="group">
              <summary className="flex items-center justify-start px-2 py-2 rounded-lg cursor-pointer text-black hover:bg-[#498dbd]/20 transition-colors duration-300 list-none">
                <span className="mr-2 transition-transform duration-300 group-open:rotate-90">
                  <MdOutlineKeyboardArrowRight size={20} />
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
        {researchMenu.label}
      </summary>
      {renderMenu(researchMenu.children!)}
    </details>
  );
};

export default ResearchMenuMobile;
