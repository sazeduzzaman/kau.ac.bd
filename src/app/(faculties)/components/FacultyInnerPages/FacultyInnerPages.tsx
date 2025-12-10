"use client";

import React, { useEffect, useState } from "react";
import FacultyCommonPages from "./FacultyCommonPages";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";
import Loading from "@/app/(main)/loading";

interface Page {
  id?: number;
  slug?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  banner_image?: string;
  banner_title?: string;
  banner_subtitle?: string;
  banner_button?: string;
  banner_button_url?: string;
  is_department_boxes?: boolean;
}

interface ApiData {
  pages: Page[];
}

interface FacultyDepartmentProps {
  slug: string;
  pageSlug: string;
}

const FacultyInnerPages: React.FC<FacultyDepartmentProps> = ({
  slug,
  pageSlug,
}) => {
  const [data, setData] = useState<ApiData | null>(null);
  const [activePage, setActivePage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);

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
          (p: Page) => p.slug?.toLowerCase() === pageSlug.toLowerCase()
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

  if (loading) return <Loading />;
  if (!activePage) return <NoDataFound />;

  return (
    <div className="container py-10 mx-auto">
      <FacultyCommonPages activePage={activePage} slug={slug} />
    </div>
  );
};

export default FacultyInnerPages;
