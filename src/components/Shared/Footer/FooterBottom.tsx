import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa"; // Using react-icons for a nice touch

// Define the expected structure of the data for better type safety
interface DeveloperInfo {
  website_url: string;
  copyright_text: string;
  developer_link: string;
  developer_text: string;
}

interface FooterBottomProps {
  FooterData: DeveloperInfo;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ FooterData }) => {
  const footerDeveloperInfo = FooterData;

  return (
    // Use a fixed color (e.g., dark blue/slate) instead of a custom class for visual consistency,
    // or keep 'bg-site-primary' if it's well-defined. I'll use a deep slate for this example.
    <footer className="w-full py-5 text-sm text-gray-400 bg-sky-900">
      {/* Container: Max width for desktop, padding, and responsive layout */}
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* === 1. Copyright & Developer Info (Left/Top) === */}
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            {/* Copyright Link */}
            <Link
              href={footerDeveloperInfo.website_url}
              className="transition duration-200 hover:text-white"
            >
              {footerDeveloperInfo.copyright_text}
            </Link>

            {/* Separator on Desktop */}
            <span className="hidden text-gray-600 md:inline">|</span>

            {/* Developer Credit */}
            <span className="flex items-center text-xs text-gray-500">
              Developed with <FaHeart className="w-3 h-3 mx-1 text-red-500" />{" "}
              by
              <Link
                href={footerDeveloperInfo.developer_link}
                className="ml-1 font-medium transition duration-200 hover:text-white"
                target="_blank" // Often good practice for external developer links
                rel="noopener noreferrer"
              >
                {footerDeveloperInfo.developer_text}
              </Link>
            </span>
          </div>

          {/* === 2. Utility Links (Right/Bottom) === */}
          <div className="flex space-x-6">
            {/* FAQ Link */}
            <Link
              href="/faq"
              className="transition duration-200 hover:text-white hover:underline"
            >
              FAQ
            </Link>

            {/* Terms and Conditions Link */}
            <Link
              href="/policy"
              className="transition duration-200 hover:text-white hover:underline"
            >
              Policy
            </Link>

            {/* Optional: Privacy Policy Link */}
            <Link
              href="/terms"
              className="transition duration-200 hover:text-white hover:underline"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
