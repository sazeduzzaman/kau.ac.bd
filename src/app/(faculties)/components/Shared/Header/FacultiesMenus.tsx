"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavigationItem {
  id: number;
  label: string;
  slug: string;
  page_slug?: string | null;
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

const FacultiesMenus = () => {
  const params = useParams();
  const slug = params?.slug as string;
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

  if (loading) return <div>Loading navigation...</div>;
  if (!data?.navigation || data.navigation.length === 0) return null;

  // Build link using page_slug
  const buildHref = (item: NavigationItem) => {
    if (!item.page_slug && !item.slug) return "#";

    // Home page should link to /{slug}
    if (item.page_slug === "home") return `/${slug}`;

    // Normal pages: /{slug}/{page_slug} (fallback to slug)
    return `/${slug}/${item.page_slug || item.slug}`;
  };

  // Recursive render for menu + children
  const renderMenuItem = (item: NavigationItem, index: number) => {
    const href = buildHref(item);

    const isActive =
      normalizedPathname === normalizePath(href) ||
      (item.children &&
        item.children.some(
          (child) => normalizedPathname === normalizePath(buildHref(child))
        ));

    return (
      <li key={index} className="relative group">
        <Link
          href={href}
          className={`px-3 py-2 block rounded-md transition-colors ${
            isActive
              ? "text-site-primary font-semibold border-b-2 border-site-primary"
              : "text-gray-700 hover:text-site-primary"
          }`}
        >
          <div className="flex items-center gap-1">
            {item.label}
            {item.children?.length ? <span className="text-xs">▼</span> : null}
          </div>
        </Link>

        {item.children && item.children.length > 0 && (
          <ul className="absolute left-0 hidden mt-1 bg-white text-black shadow-lg rounded-md group-hover:block min-w-[180px] z-50">
            {item.children
              .sort((a, b) => (a.position || 0) - (b.position || 0))
              .map((child, index) => {
                // ✅ Submenu route:
                // /slug/pageslug/childslug/staff
                const parentSegment = item.page_slug || item.slug;
                const href = `/${slug}/${parentSegment}/${child.slug}/staff`;

                const isChildActive =
                  normalizedPathname === normalizePath(href);

                return (
                  <li
                    key={index}
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      isChildActive ? "bg-site-primary text-white" : ""
                    }`}
                  >
                    <Link href={href}>{child.label}</Link>
                  </li>
                );
              })}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul className="flex space-x-4 font-medium">
      {data.navigation.map(renderMenuItem)}
    </ul>
  );
};

export default FacultiesMenus;
