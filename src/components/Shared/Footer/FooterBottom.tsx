import { FooterData } from "@/lib/types/FooterDataTypes/FooterDataTypes";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

interface FooterBottomProps {
  footerData: FooterData;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ footerData }) => {
  return (
    <footer className="w-full py-5 text-sm text-gray-400 bg-sky-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Copyright & Developer Info */}
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <Link
              href={footerData.website_url}
              className="transition duration-200 hover:text-white"
            >
              {footerData.copyright_text}
            </Link>

            <span className="hidden text-gray-600 md:inline">|</span>

            <span className="flex items-center text-xs text-gray-500">
              Developed with <FaHeart className="w-3 h-3 mx-1 text-red-500" />{" "}
              by
              <Link
                href={footerData.developer_link}
                className="ml-1 font-medium transition duration-200 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {footerData.developer_text}
              </Link>
            </span>
          </div>

          {/* Dynamic Footer Links */}
          <div className="flex space-x-6">
            {footerData.footer_links
              .sort((a, b) => a.order - b.order)
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="transition duration-200 hover:text-white hover:underline"
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
