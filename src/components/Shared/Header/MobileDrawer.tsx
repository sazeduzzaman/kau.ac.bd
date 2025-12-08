import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AboutMenuMobile from "./MobileMenus/AboutMenuMobile";
import AdministrationMenuMobile from "./MobileMenus/AdministrationMenuMobile";
import AdmissionMenuMobile from "./MobileMenus/AdmissionMenuMobile";
import AcademicMenuMobile from "./MobileMenus/AcademicMenuMobile";
import ResearchMenuMobile from "./MobileMenus/ResearchMenuMobile";
import LifeAtKAUMenuMobile from "./MobileMenus/LifeAtKAUMenuMobile";
import MobileContact from "./MobileMenus/MobileContact/MobileContact";
import { useEffect, useState } from "react";
import { SiteSettingDataset } from "@/lib/apis/SiteInfromationDataSet/SiteInfromationDataSet";

interface MobileDrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, closeDrawer }) => {
  const [siteData, setSiteData] = useState<any>(null);

  useEffect(() => {
  async function fetchData() {
    try {
      const SiteInfoData = await SiteSettingDataset();
      if (SiteInfoData?.settings) {
        setSiteData(SiteInfoData.settings);
      } else {
        setSiteData(null); // fallback
      }
    } catch (err) {
      console.error("Failed to fetch site settings:", err);
      setSiteData(null);
    }
  }
  fetchData();
}, []);

  const menuLinkClasses =
    "flex items-center w-full px-3 py-2 rounded-lg text-black hover:bg-[#498dbd]/20 transition-all duration-300 font-medium";

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
              <MdOutlineKeyboardArrowRight
                size={25}
                className="mr-2 font-bold"
              />
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
            <MobileContact siteData={siteData} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileDrawer;
