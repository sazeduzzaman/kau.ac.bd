"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import AboutMenuMobile from "./MobileMenus/AboutMenuMobile";
import AdministrationMenuMobile from "./MobileMenus/AdministrationMenuMobile";
import AdmissionMenuMobile from "./MobileMenus/AdmissionMenuMobile";
import AcademicMenuMobile from "./MobileMenus/AcademicMenuMobile";
import ResearchMenuMobile from "./MobileMenus/ResearchMenuMobile";
import LifeAtKAUMenuMobile from "./MobileMenus/LifeAtKAUMenuMobile";

interface MobileDrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, closeDrawer }) => {
  const menuLinkClasses =
    "flex items-center w-full px-3 py-2 rounded-lg text-black hover:bg-[#498dbd]/20 transition-all duration-300";

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full z-50 transform transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ backdropFilter: "blur(20px)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 shadow-md bg-white/80 backdrop-blur-md">
        <Logo />
        <button
          onClick={closeDrawer}
          aria-label="Close Menu"
          className="text-2xl text-gray-800 hover:text-[#498dbd] transition-colors duration-300"
        >
          ✕
        </button>
      </div>

      {/* Drawer Content */}
      <div className="h-[calc(100%-64px)] overflow-y-auto bg-white/80 backdrop-blur-md">
        <ul className="flex flex-col p-4 space-y-2 text-black">
          {/* Home */}
          <li>
            <Link href="/" onClick={closeDrawer} className={menuLinkClasses}>
              <MdOutlineKeyboardArrowRight size={25} className="mr-2 font-bold" />
              <span about="">Home</span>
            </Link>
          </li>

          {/* Dynamic Menus */}
          <li>
            <AboutMenuMobile isMobile={true} closeDrawer={closeDrawer} />
          </li>
          <li>
            <AdministrationMenuMobile
              isMobile={true}
              closeDrawer={closeDrawer}
            />
          </li>
          <li>
            <AdmissionMenuMobile isMobile={true} closeDrawer={closeDrawer} />
          </li>
          <li>
            <AcademicMenuMobile isMobile={true} closeDrawer={closeDrawer} />
          </li>
          <li>
            <ResearchMenuMobile isMobile={true} closeDrawer={closeDrawer} />
          </li>
          <li>
            <LifeAtKAUMenuMobile isMobile={true} closeDrawer={closeDrawer} />
          </li>

          {/* Static Pages */}
          <li>
            <Link
              href="/desk"
              onClick={closeDrawer}
              className={menuLinkClasses}
            >
              <MdOutlineKeyboardArrowRight size={25} className="mr-2" />
              Desk
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={closeDrawer}
              className={menuLinkClasses}
            >
              <MdOutlineKeyboardArrowRight size={25} className="mr-2" />
              Contact
            </Link>
          </li>

          {/* Contact Info */}
          <li className="pt-6 mt-6 border-t border-gray-300">
            <h4 className="mb-3 text-lg font-semibold text-gray-800">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#498dbd]" /> +880 1234 567890
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#498dbd]" /> info@kau.edu.bd
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#498dbd]" /> Khulna, Bangladesh
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileDrawer;
