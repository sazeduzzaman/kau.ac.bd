"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FacultyCommonPages from "./FacultyCommonPages";
import FacultyDepertmentPage from "./FacultyDepertmentPage";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";
import Loading from "@/app/(main)/loading";

interface FacultyDepartmentProps {
  slug: string;
  pageSlug: string;
}

interface Page {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  content?: string | null;
}

interface ApiData {
  pages: Page[];
}

const FacultyInnerPages: React.FC<FacultyDepartmentProps> = ({
  slug,
  pageSlug,
}) => {
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
  if (isDepartmentsPage) {
    return <FacultyDepertmentPage slug={slug} />;
  }

  // Loading state
  if (loading) return <Loading />;

  // No page found
  if (!activePage) return <NoDataFound />;

  // Normal page render
  return (
    <div className="container py-10 mx-auto">
      <FacultyCommonPages activePage={activePage} />
    </div>
  );
};

export default FacultyInnerPages;
