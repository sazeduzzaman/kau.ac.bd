"use client";

import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface HomePopupData {
  title: string;
  content: string;
  button_name: string;
  button_link: string;
}
interface DefaultDrawerProps {
  data: HomePopupData | null;
}
const DefaultDrawer = ({ data }: DefaultDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ALWAYS show modal when page loads - removed sessionStorage check
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10);
  }, []); // Empty dependency array - runs once on mount

  const handleClose = () => {
    setIsOpen(false);
    // OPTIONAL: Uncomment if you want to remember closed state for this session
    // sessionStorage.setItem("admissionModalClosed", "true");

    // Wait for animation to complete before hiding
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black z-9999 transition-opacity duration-300 ${
          isOpen ? "opacity-80" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      />

      {/* Admission Modal - Similar to image design */}
      <div
        className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl z-10000 transition-all duration-300 ease-out overflow-hidden ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Banner Section - Similar to image */}
        <div className="relative p-8 text-white bg-linear-to-r from-[#004b49] via-[#004b49] to-[#004b49]">
          <button
            onClick={handleClose}
            className="absolute p-2 text-white transition-colors rounded-full cursor-pointer top-4 right-4 hover:bg-white/20"
            aria-label="Close modal"
          >
            <FaTimes className="text-xl" />
          </button>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div>
              <h1 className="text-3xl font-bold">{data?.title}</h1>
            </div>
          </div>
        </div>
        {/* Content Area */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="prose max-w-none">
            <HtmlRenderer content={data?.content} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultDrawer;
