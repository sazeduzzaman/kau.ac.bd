"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react"; // Importing icons for modern look

// Placeholder for site-primary color, using Indigo-600 for styling
const PRIMARY_COLOR_CLASS = "text-indigo-600 border-indigo-600 bg-indigo-50";
const PRIMARY_HOVER_CLASS = "hover:text-indigo-600 hover:border-indigo-600";
const ACTIVE_DROPDOWN_CLASS = "bg-indigo-600 text-white";

// --- Type Definitions (Kept the same) ---
interface NavigationItem {
  id: number;
  label: string;
  slug: string; // parent slug
  page_slug?: string | null; // child slug
  children?: NavigationItem[];
  position?: number;
}

interface ApiData {
  site: any;
  navigation: NavigationItem[];
  pages: any[];
}

// Normalize URL for active detection
const normalizePath = (path: string) =>
  path.endsWith("/") ? path.slice(0, -1) : path;
// --- End Type Definitions ---

const FacultiesMenus = () => {
  const params = useParams();
  const slug = params?.slug as string; // main slug, e.g., 'vabs'
  const pathname = usePathname();
  const normalizedPathname = normalizePath(pathname);

  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/pages`
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading)
    return (
      <div className="flex items-center justify-center py-4 border-gray-200 bg-gray-50 border-y">
        <Loader2 className="w-5 h-5 text-indigo-500 animate-spin" />
        <span className="ml-2 text-sm text-gray-600">
          Loading navigation...
        </span>
      </div>
    );

  if (!data?.navigation || data.navigation.length === 0) return null;

  // Build full href: /[mainSlug]/[parentSlug]/[childSlug]/staff
  const buildStaffHref = (
    parentItem: NavigationItem,
    childItem?: NavigationItem
  ) => {
    if (!slug) return "#"; // main slug from URL
    const parentSlug = parentItem.slug; // e.g., 'faculty-members'
    const childSlug =
      childItem?.page_slug || childItem?.slug || parentItem.slug; // e.g., 'administration-vabs'
    return `/${slug}/${parentSlug}/${childSlug}/staff`;
  };

  const renderMenuItem = (item: NavigationItem, index: number) => {
    // Parent link points to the first child staff page if children exist, otherwise its own staff page
    const parentHref =
      item.children && item.children.length > 0
        ? buildStaffHref(item, item.children[0])
        : buildStaffHref(item);

    // Check if the current path matches the parent's target or any of its children's targets
    const isParentActive =
      normalizedPathname === normalizePath(parentHref) ||
      (item.children &&
        item.children.some(
          (child) =>
            normalizedPathname === normalizePath(buildStaffHref(item, child))
        ));

    return (
      <li key={index} className="relative group/parent">
        {/* Parent link */}
        <Link
          href={parentHref}
          className={`px-4 py-3 block text-sm font-medium transition-all duration-200 border-b-2 ${
            isParentActive
              ? `${PRIMARY_COLOR_CLASS} border-indigo-600` // Active state: Blue underline, slightly colored text/background
              : "text-gray-700 border-transparent hover:text-indigo-600 hover:border-gray-300" // Inactive state
          }`}
        >
          <div className="flex items-center gap-1.5">
            {item.label}
            {item.children?.length ? (
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/parent:rotate-180" />
            ) : null}
          </div>
        </Link>

        {/* Children dropdown */}
        {item.children && item.children.length > 0 && (
          <ul className="absolute left-0 top-full hidden mt-0.5 bg-white text-gray-800 shadow-xl border border-gray-100 rounded-lg group-hover/parent:block min-w-[200px] z-50 overflow-hidden transition-opacity duration-300 animate-fadeIn">
            {item.children
              .sort((a, b) => (a.position || 0) - (b.position || 0))
              .map((child, index) => {
                const href = buildStaffHref(item, child);
                const isChildActive =
                  normalizedPathname === normalizePath(href);

                return (
                  <li key={index} className="w-full">
                    <Link
                      href={href}
                      className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                        isChildActive
                          ? ACTIVE_DROPDOWN_CLASS // Active: Solid background
                          : "hover:bg-gray-50 hover:text-indigo-600"
                      }`}
                    >
                      {child.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <ul className="flex justify-start space-x-1 lg:space-x-4">
          {data.navigation.map(renderMenuItem)}
        </ul>
      </div>
    </nav>
  );
};

export default FacultiesMenus;
