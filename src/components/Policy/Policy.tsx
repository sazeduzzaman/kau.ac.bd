"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface TermsData {
  title: string;
  content: string;
  effective_date: string;
  expiration_date: string;
}

const Policy = () => {
  const [termsData, setTermsData] = useState<TermsData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch terms from API
  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const res = await fetch(
          "https://admin.kau.khandkershahed.com/api/v1/policy"
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data: TermsData = await res.json();
        setTermsData(data);
      } catch (error) {
        console.error("Failed to fetch terms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  // ✅ Always call hooks at the top
  const content = useMemo(() => termsData?.content || "", [termsData?.content]);

  // Conditional rendering comes AFTER all hooks
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading Terms...</p>
      </div>
    );

  if (!termsData)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Failed to load Terms & Conditions.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-12 text-white shadow-lg bg-sky-700">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center mb-2 text-sm text-sky-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <FaChevronRight className="w-3 h-3 mx-2" />
            <span className="font-semibold text-white">Terms & Conditions</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight">
            <span className="text-sky-300">{termsData.title}</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export default Policy;
