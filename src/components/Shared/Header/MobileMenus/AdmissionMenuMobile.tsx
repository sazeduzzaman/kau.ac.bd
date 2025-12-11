"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface MenuItemType {
  label: string;
  href: string;
  children?: MenuItemType[];
  external?: boolean;
}

interface AdmissionMenuProps {
  isMobile: boolean;
  closeDrawer: () => void;
}

const AdmissionMenuMobile: React.FC<AdmissionMenuProps> = ({
  isMobile,
  closeDrawer,
}) => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

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

  if (!isMobile) return null;

  // Recursive mobile menu renderer with arrow
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
              href={item?.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : undefined}
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
        Admission
      </summary>
      {renderMenu(menuItems)}
    </details>
  );
};

export default AdmissionMenuMobile;
