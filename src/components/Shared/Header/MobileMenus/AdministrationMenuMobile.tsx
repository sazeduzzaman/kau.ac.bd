"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface MenuItemType {
  label: string;
  href: string;
  children?: MenuItemType[];
}

interface AdministrationMenuProps {
  isMobile: boolean;
  closeDrawer: () => void;
}

const AdministrationMenuMobile: React.FC<AdministrationMenuProps> = ({
  isMobile,
  closeDrawer,
}) => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  // Fetch menu data from API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          "https://admin.kau.khandkershahed.com/api/v1/administration"
        );
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          const mapped: MenuItemType[] = data.data.map((item: any) => ({
            label: item.name || "Untitled",
            href: `/administration/office`,
            children: Array.isArray(item.offices)
              ? item.offices.map((office: any) => ({
                  label: office.title || "Untitled",
                  href: `/administration/office/${office.slug}`,
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

  if (!isMobile) return null;

  // Recursive mobile menu renderer
  const renderMenu = (items: MenuItemType[]) => (
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
              href={item.href}
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
        Administration
      </summary>
      {renderMenu(menuItems)}
    </details>
  );
};

export default AdministrationMenuMobile;
