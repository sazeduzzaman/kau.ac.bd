"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface SiteItem {
  id: number;
  name: string;
  slug: string;
  base_url: string;
}

interface GroupItem {
  id: number;
  title: string;
  slug: string;
  sites: SiteItem[];
}

const AcademicMenu: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState<GroupItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMenu = async () => {
    try {
      const res = await fetch(
        "https://admin.kau.khandkershahed.com/api/v1/academics/sites"
      );
      const data = await res.json();
      setGroups(data.groups || []);
    } catch (err) {
      console.error("Menu Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Menu Button */}
      <span
        className={`flex items-center px-3 py-2 font-semibold text-gray-600 cursor-pointer transition-all duration-300 ${
          open
            ? "text-site-primary  rounded-none"
            : "text-dark hover:bg-site-primary hover:text-[#438aba]"
        }`}
      >
        Academics
        <FaChevronDown
          className={`ml-2 text-xs transition-transform duration-300 ${
            open ? "-rotate-90" : ""
          }`}
        />
      </span>

      {/* Dropdown */}
      <ul
        className={`absolute top-full left-0 bg-white shadow-lg py-0 w-60 z-50 ml-px transition-all duration-300 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {loading && (
          <li className="px-4 py-3 text-sm text-gray-500">Loading...</li>
        )}

        {!loading &&
          groups.map((group) => (
            <RecursiveGroup key={group.id} group={group} pathname={pathname} />
          ))}
      </ul>
    </div>
  );
};

const RecursiveGroup = ({
  group,
  pathname,
}: {
  group: GroupItem;
  pathname: string;
}) => {
  const [open, setOpen] = useState(false);
  const hasSites = group.sites.length > 0;

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* GROUP TITLE (unclickable) */}
      <span
        className={`flex justify-between items-center px-4 py-3 text-sm cursor-pointer transition-all duration-300 
          ${
            open
              ? "bg-site-primary text-white shadow-md"
              : "text-dark hover:bg-site-primary hover:text-white"
          }
        `}
      >
        {group.title}

        {hasSites ? (
          <FaChevronDown
            className={`ml-2 text-xs transition-transform duration-200 ${
              open
                ? "-rotate-90 text-white"
                : "text-gray-500 group-hover:text-white"
            }`}
          />
        ) : (
          <FaArrowRight className="ml-2 text-xs text-gray-400" />
        )}
      </span>

      {/* SUB-MENU (sites) */}
      {hasSites && (
        <ul
          className={`absolute top-0 left-full bg-white shadow-lg py-0 ml-px w-60 transition-all duration-300 z-50 
            ${
              open
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-2"
            }
          `}
        >
          {group.sites.map((site) => {
            const url = site?.slug ? `/${site.slug}` : "#";
            const isActive = pathname === url;

            return (
              <Link
                key={site.id}
                href={url}
                target="_blank"
                className={`flex justify-between items-center px-4 py-3 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-site-primary text-white shadow-md"
                    : "text-black hover:bg-[#438aba] hover:text-white"
                }`}
              >
                {site.name}

                <FaArrowRight
                  className={`ml-2 text-xs ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
              </Link>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default AcademicMenu;
