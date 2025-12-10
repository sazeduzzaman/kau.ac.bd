"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FacultyCommonPages from "./FacultyCommonPages";
import FacultyDepertmentPage from "./FacultyDepertmentPage";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";
import Loading from "@/app/(main)/loading";

// API page type
interface Page {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  content?: string | null;
  banner_image?: string | null;
  banner_title?: string | null;
  banner_subtitle?: string | null;
  banner_button?: string | null;
  banner_button_url?: string | null;
}

interface ApiData {
  pages: Page[];
}

interface FacultyDepartmentProps {
  slug: string;
  pageSlug: string;
}

const FacultyInnerPages: React.FC<FacultyDepartmentProps> = ({ slug, pageSlug }) => {
  const [data, setData] = useState<ApiData | null>(null);
  const [activePage, setActivePage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const isDepartmentsPage = pathname.endsWith("/departments");

  useEffect(() => {
    const fetchPages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/pages`
        );
        if (!res.ok) throw new Error("Page fetch failed");

        const json = await res.json();
        setData(json);

        const matchedPage = json.pages.find(
          (p: Page) => p.slug.toLowerCase() === pageSlug.toLowerCase()
        );

        setActivePage(matchedPage || null);
      } catch (error) {
        console.error("Error loading pages:", error);
        setActivePage(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, [slug, pageSlug]);

  // Departments page
  if (isDepartmentsPage) return <FacultyDepertmentPage slug={slug} />;

  // Loading
  if (loading) return <Loading />;

  // No data
  if (!activePage) return <NoDataFound />;

  // Normalize null values to undefined before passing
  const normalizedPage = {
    title: activePage.title,
    subtitle: activePage.subtitle ?? undefined,
    content: activePage.content ?? undefined,
    banner_image: activePage.banner_image ?? undefined,
    banner_title: activePage.banner_title ?? undefined,
    banner_subtitle: activePage.banner_subtitle ?? undefined,
    banner_button: activePage.banner_button ?? undefined,
    banner_button_url: activePage.banner_button_url ?? undefined,
  };

  return (
    <div className="container py-10 mx-auto">
      <FacultyCommonPages activePage={normalizedPage} />
    </div>
  );
};

export default FacultyInnerPages;
