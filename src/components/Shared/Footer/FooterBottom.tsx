"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

// Define the interface for the specific data fields used in this component
interface FooterBottomData {
  copyright_text: string;
  developer_text: string;
  developer_link: string;
  website_url: string;
}

// Define the default/fallback data structure
const defaultFooterData: FooterBottomData = {
  copyright_text: "© 2025 Khulna Agricultural University. All Rights Reserved.",
  developer_text: "ICT Cell, KAU",
  developer_link: "https://kau.ac.bd",
  website_url: "https://kau.ac.bd",
};

const ClientFooterBottom: React.FC = () => {
  const [footerData, setFooterData] =
    useState<FooterBottomData>(defaultFooterData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use useCallback to memoize the fetch function
  const fetchFooter = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/footer`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const json = await res.json();

      // Use the fetched data or fall back to the default if the API response is incomplete
      const fetchedData: FooterBottomData = {
        copyright_text:
          json?.data?.copyright_text ?? defaultFooterData.copyright_text,
        developer_text:
          json?.data?.developer_text ?? defaultFooterData.developer_text,
        developer_link:
          json?.data?.developer_link ?? defaultFooterData.developer_link,
        website_url: json?.data?.website_url ?? defaultFooterData.website_url,
      };

      setFooterData(fetchedData);
    } catch (err) {
      console.error("Failed to fetch footer data:", err);
      // Set the error message and fall back to the default data
      setError("Failed to load official footer data. Using fallback.");
      setFooterData(defaultFooterData);
    } finally {
      setIsLoading(false);
    }
  }, []); // Empty dependency array means this function is created once

  useEffect(() => {
    fetchFooter();
  }, [fetchFooter]); // Depend on the memoized fetchFooter

  // Destructure for cleaner JSX
  const { copyright_text, developer_text, developer_link, website_url } =
    footerData;

  // Optional: Display loading state or an error notification
  // For a simple footer, usually we just render the fallback data while loading,
  // but if you want to explicitly show the state:
  if (isLoading && footerData === defaultFooterData) {
    // Return a minimal placeholder or nothing during the first load
    return (
      <footer className="w-full py-5 text-sm text-gray-100 border-t border-gray-700 bg-sky-900">
        <div className="container flex items-center justify-center h-5 px-4 mx-auto">
          Loading...
        </div>
      </footer>
    );
  }

  // Main Render
  return (
    <footer className="w-full py-5 text-sm text-gray-100 border-t border-gray-700 bg-sky-900">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto space-y-2 md:flex-row md:space-y-0">
        {/* Display Error Message if fetching failed but we are using the fallback */}
        {error && (
          <p className="text-xs text-red-300 md:absolute md:top-0">
            ⚠️ {error}
          </p>
        )}

        <div className="flex items-center">
          <Link
            href={website_url}
            className="transition duration-200 hover:text-white"
          >
            {copyright_text}
          </Link>

          <span className="flex items-center text-xs text-gray-200 ps-2">
            Developed with <FaHeart className="w-3 h-3 mx-1 text-red-500" /> by{" "}
            <Link
              href={developer_link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-medium transition duration-200 hover:text-white"
            >
              {developer_text}
            </Link>
          </span>
        </div>
        <div className="flex space-x-6">
          {" "}
          {/* FAQ Link */}{" "}
          <Link
            href="/faq"
            className="transition duration-200 hover:text-white hover:underline"
          >
            {" "}
            FAQ{" "}
          </Link>{" "}
          {/* Terms and Conditions Link */}{" "}
          <Link
            href="/policy"
            className="transition duration-200 hover:text-white hover:underline"
          >
            {" "}
            Policy{" "}
          </Link>{" "}
          {/* Optional: Privacy Policy Link */}{" "}
          <Link
            href="/terms"
            className="transition duration-200 hover:text-white hover:underline"
          >
            {" "}
            Terms{" "}
          </Link>{" "}
        </div>
      </div>
    </footer>
  );
};

export default ClientFooterBottom;
