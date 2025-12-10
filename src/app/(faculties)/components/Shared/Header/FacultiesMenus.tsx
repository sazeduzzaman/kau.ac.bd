"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavigationItem {
  id: number;
  label: string;
  route: string | null;
  children?: NavigationItem[];
}

interface ApiData {
  site: any;
  navigation: NavigationItem[];
  pages: any[];
}

// Normalize paths to compare active state
const normalizePath = (path: string) => {
  if (!path) return "";
  if (path === "/") return path;
  return path.endsWith("/") ? path.slice(0, -1) : path;
};

const FacultiesMenus = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const pathname = usePathname();

  const normalizedPathname = normalizePath(pathname);

  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/pages`
        );
        if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);

        const json = await res.json();
        setData(json);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div>Loading navigation...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data?.navigation || data.navigation.length === 0) return null;

  // Recursive function to render menu with children
  const renderMenuItem = (item: NavigationItem) => {
    const href =
      item.route === "home"
        ? `/${slug}`
        : item.route
        ? `/${slug}${item.route}`
        : "#"; // fallback for groups without route

    const normalizedHref = normalizePath(href);

    // Active if current path matches this href or any child href
    const isActive =
      normalizedPathname === normalizedHref ||
      (item.children &&
        item.children.some(
          (child) =>
            normalizedPathname === normalizePath(`/${slug}${child.route}`)
        ));

    return (
      <li key={item.id} className="relative group">
        <Link
          href={href}
          className={`px-2 py-1 transition-colors ${
            isActive
              ? "border-b-2 border-[#438aba] text-site-primary font-semibold"
              : "text-black hover:text-primary"
          }`}
        >
          {item.label}
        </Link>

        {/* Render children if exist */}
        {item.children && item.children.length > 0 && (
          <ul className="absolute left-0 hidden mt-1 bg-white rounded shadow-lg group-hover:block">
            {item.children.map((child) => {
              const childHref = `/${slug}${child.route}`;
              const childNormalized = normalizePath(childHref);
              const childActive = normalizedPathname === childNormalized;

              return (
                <li key={child.id}>
                  <Link
                    href={childHref}
                    className={`block px-4 py-2 whitespace-nowrap ${
                      childActive
                        ? "text-site-primary font-semibold"
                        : "text-black hover:text-primary"
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
    <ul className="flex space-x-4">{data.navigation.map(renderMenuItem)}</ul>
  );
};

export default FacultiesMenus;
