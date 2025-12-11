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

  const buildHref = (item: NavigationItem) => {
    if (!item.page_slug && !item.slug) return "#";
    if (item.page_slug === "home") return `/${slug}`;
    return `/${slug}/${item.page_slug || item.slug}`;
  };

  const renderMenuItem = (item: NavigationItem, index: number) => {
    const href = buildHref(item);
    const isActive =
      normalizedPathname === normalizePath(href) ||
      (item.children &&
        item.children.some(
          (child) =>
            normalizedPathname ===
            normalizePath(
              `/${slug}/${item.page_slug || item.slug}/${child.slug}/staff`
            )
        ));

    return (
      <li key={index} className="relative group font-merriweather">
        <Link
          href={href}
          className={`flex items-center px-3 py-2 font-semibold text-gray-600 cursor-pointer transition-all duration-300 ${
            isActive
              ? "text-site-secondary border-b-2 border-[#8b5e3c]"
              : "text-gray-600 hover:bg-site-primary hover:text-[#438aba] "
          }`}
        >
          <div className="flex items-center gap-1">
            {item.label}
            {item.children?.length ? (
              <span
                className={`ml-1 text-xs transition-transform duration-200 group-hover:rotate-180`}
              >
                ▼
              </span>
            ) : null}
          </div>
        </Link>

        {item.children && item.children.length > 0 && (
          <ul className="absolute left-0 z-50 w-48 mt-2 transition-all duration-200 origin-top scale-95 bg-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-100">
            {item.children
              .sort((a, b) => (a.position || 0) - (b.position || 0))
              .map((child, idx) => {
                const parentSegment = item.page_slug || item.slug;
                const href = `/${slug}/${parentSegment}/${child.slug}/staff`;
                const isChildActive =
                  normalizedPathname === normalizePath(href);

                return (
                  <li
                    key={idx}
                    className={`px-4 py-2 text-gray-700 hover:bg-[#438aba] hover:text-white transition-colors duration-200  ${
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
