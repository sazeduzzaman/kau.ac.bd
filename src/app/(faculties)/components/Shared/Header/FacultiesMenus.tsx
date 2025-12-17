"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleExpandItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  if (loading) return <div>Loading navigation...</div>;
  if (!data?.navigation || data.navigation.length === 0) return null;

  const buildHref = (item: NavigationItem) => {
    if (!item.page_slug && !item.slug) return "#";
    if (item.page_slug === "home") return `/${slug}`;
    return `/${slug}/${item.page_slug || item.slug}`;
  };

  // Function to split array into chunks for two columns
  const splitIntoTwoColumns = (items: NavigationItem[]) => {
    const middleIndex = Math.ceil(items.length / 2);
    const leftColumn = items.slice(0, middleIndex);
    const rightColumn = items.slice(middleIndex);
    return { leftColumn, rightColumn };
  };

  // Desktop menu render
  const renderDesktopMenuItem = (item: NavigationItem, index: number) => {
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
              : "text-gray-600 hover:bg-site-primary hover:text-[#438aba]"
          }`}
        >
          <div className="flex items-center gap-1">
            {item.label}
            {item.children?.length ? (
              <span className="ml-1 text-xs transition-transform duration-200 group-hover:rotate-0">
                <FaChevronDown className="" />
              </span>
            ) : null}
          </div>
        </Link>

        {item.children && item.children.length > 0 && (
          <div className="absolute right-0 z-10 hidden mt-2 transition-all duration-200 origin-top scale-95 bg-white shadow-lg opacity-0 group-hover:block group-hover:opacity-100 group-hover:scale-100">
            <div
              className={`${
                item.children.length > 6
                  ? "grid grid-cols-2 gap-0 w-[525px]"
                  : "min-w-48"
              }`}
            >
              {item.children.length > 6 ? (
                // Two column layout for more than 6 items
                (() => {
                  const { leftColumn, rightColumn } = splitIntoTwoColumns(
                    item.children.sort(
                      (a, b) => (a.position || 0) - (b.position || 0)
                    )
                  );

                  return (
                    <>
                      <div className="py-2">
                        {leftColumn.map((child, idx) =>
                          renderDropdownItem(child, idx, item)
                        )}
                      </div>
                      <div className="py-2 border-l border-gray-100">
                        {rightColumn.map((child, idx) =>
                          renderDropdownItem(child, idx, item)
                        )}
                      </div>
                    </>
                  );
                })()
              ) : (
                // Single column layout for 6 or fewer items
                <div className="py-2">
                  {item.children
                    .sort((a, b) => (a.position || 0) - (b.position || 0))
                    .map((child, idx) => renderDropdownItem(child, idx, item))}
                </div>
              )}
            </div>
          </div>
        )}
      </li>
    );
  };

  // Mobile menu render
  const renderMobileMenuItem = (item: NavigationItem, index: number) => {
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
    const isExpanded = expandedItems.includes(item.id);

    return (
      <div key={index} className="border-b border-gray-200">
        <div className="flex items-center justify-between">
          <Link
            href={href}
            className={`flex-1 py-4 px-4 font-medium text-gray-700 ${
              isActive ? "text-site-secondary font-semibold" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
          {item.children?.length ? (
            <button
              onClick={() => toggleExpandItem(item.id)}
              className="p-4 text-gray-500 hover:text-gray-700"
            >
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          ) : null}
        </div>

        {item.children && item.children.length > 0 && isExpanded && (
          <div className="pl-6 bg-gray-50">
            {item.children
              .sort((a, b) => (a.position || 0) - (b.position || 0))
              .map((child, idx) => {
                const parentSegment = item.page_slug || item.slug;
                const href = `/${slug}/${parentSegment}/${child.slug}/staff`;
                const isChildActive = normalizedPathname === normalizePath(href);

                return (
                  <Link
                    href={href}
                    key={idx}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 border-b border-gray-100 text-sm ${
                      isChildActive
                        ? "text-site-secondary font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {child.label}
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    );
  };

  const renderDropdownItem = (
    child: NavigationItem,
    idx: number,
    parentItem: NavigationItem
  ) => {
    const parentSegment = parentItem.page_slug || parentItem.slug;
    const href = `/${slug}/${parentSegment}/${child.slug}/staff`;
    const isChildActive = normalizedPathname === normalizePath(href);

    return (
      <Link
        href={href}
        key={idx}
        className="flex items-center p-0 font-semibold text-gray-600 transition-all cursor-pointer duration-30"
      >
        <div
          className={`px-4 py-2 text-gray-700 hover:bg-[#438aba] w-full hover:text-white text-sm font-medium transition-colors duration-200 ${
            isChildActive
              ? "text-white border-b-2 bg-[#438aba]"
              : "text-gray-600 hover:bg-site-primary hover:text-[#438aba]"
          }`}
        >
          {child.label}
        </div>
      </Link>
    );
  };

  // Split into first 5 items + rest
  const mainItems = data.navigation.slice(0, 7);
  const moreItems = data.navigation.slice(7);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ul className="relative flex space-x-4 font-medium">
          {mainItems.map(renderDesktopMenuItem)}

          {moreItems.length > 0 && (
            <li className="relative group">
              <span className="flex items-center font-semibold font-merriweather px-3 py-2 text-gray-600 cursor-pointer transition-all duration-300 hover:bg-site-primary hover:text-[#438aba]">
                More <FaChevronDown className="ml-1" size={12} />
              </span>
              <div className="absolute left-0 z-50 hidden mt-2 transition-all duration-200 origin-top scale-95 bg-white shadow-lg opacity-0 group-hover:block group-hover:opacity-100 group-hover:scale-100">
                <div
                  className={`${
                    moreItems.length > 6 ? "grid grid-cols-2 gap-0" : "min-w-48"
                  }`}
                >
                  {moreItems.length > 6 ? (
                    // Two column layout for more than 6 items
                    (() => {
                      const { leftColumn, rightColumn } =
                        splitIntoTwoColumns(moreItems);

                      return (
                        <>
                          <div className="py-2">
                            {leftColumn.map((item, idx) => (
                              <Link
                                href={buildHref(item)}
                                key={idx}
                                className="flex items-center p-0 font-semibold text-gray-600 transition-all cursor-pointer duration-30"
                              >
                                <div
                                  className={`px-4 py-2 text-gray-700 hover:bg-[#438aba] w-full hover:text-white text-sm font-medium transition-colors duration-200 ${
                                    normalizedPathname ===
                                    normalizePath(buildHref(item))
                                      ? "text-white border-b-2 bg-[#438aba]"
                                      : "text-gray-600 hover:bg-site-primary hover:text-[#438aba]"
                                  }`}
                                >
                                  {item.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="py-2 border-l border-gray-100">
                            {rightColumn.map((item, idx) => (
                              <Link
                                href={buildHref(item)}
                                key={idx}
                                className="flex items-center p-0 font-semibold text-gray-600 transition-all cursor-pointer duration-30"
                              >
                                <div
                                  className={`px-4 py-2 text-gray-700 hover:bg-[#438aba] w-full hover:text-white text-sm font-medium transition-colors duration-200 ${
                                    normalizedPathname ===
                                    normalizePath(buildHref(item))
                                      ? "text-white border-b-2 bg-[#438aba]"
                                      : "text-gray-600 hover:bg-site-primary hover:text-[#438aba]"
                                  }`}
                                >
                                  {item.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </>
                      );
                    })()
                  ) : (
                    // Single column layout for 6 or fewer items
                    <div className="py-2">
                      {moreItems.map((item, idx) => (
                        <Link
                          href={buildHref(item)}
                          key={idx}
                          className="flex items-center p-0 font-semibold text-gray-600 transition-all cursor-pointer duration-30"
                        >
                          <div
                            className={`px-4 py-2 text-gray-700 hover:bg-[#438aba] w-full hover:text-white text-sm font-medium transition-colors duration-200 ${
                              normalizedPathname ===
                              normalizePath(buildHref(item))
                                ? "text-white border-b-2 bg-[#438aba]"
                                : "text-gray-600 hover:bg-site-primary hover:text-[#438aba]"
                            }`}
                          >
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-600 hover:text-gray-900 ps-5"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="overflow-y-auto h-[calc(100%-64px)]">
            {data.navigation.map(renderMobileMenuItem)}
            
            {/* Render more items in mobile */}
            {moreItems.length > 0 && (
              <div className="border-b border-gray-200">
                <div className="px-4 py-4 font-medium text-gray-700">
                  More Items
                </div>
                <div className="pl-6 bg-gray-50">
                  {moreItems.map((item, idx) => {
                    const href = buildHref(item);
                    const isActive = normalizedPathname === normalizePath(href);
                    
                    return (
                      <Link
                        href={href}
                        key={idx}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-4 border-b border-gray-100 text-sm ${
                          isActive
                            ? "text-site-secondary font-semibold"
                            : "text-gray-600"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultiesMenus;