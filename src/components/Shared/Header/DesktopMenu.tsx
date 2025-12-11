"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import AdmissionMenu from "./AdmissionMenu";
import AboutMenu from "./AboutMenu";
import AdministrationMenu from "./AdministrationMenu";
import AcademicMenu from "./AcademicMenu";
import ResearchMenu from "./ResearchMenu";
import LifeAtKAUMenu from "./LifeAtKAUMenu";

const DesktopMenu: React.FC = () => {
  const pathname = usePathname();

  const baseClasses = "px-2 py-2 transition-colors duration-200 font-semibold";

  return (
    <nav className="hidden font-sans lg:block">
      <ul className="flex items-center justify-start h-16 space-x-1 font-medium text-black font-merriweather">
        {/* Home */}
        <li>
          <Link
            href="/"
            className={`${baseClasses} ${
              pathname === "/"
                ? "border-b-2 border-site-primary text-site-secondary"
                : "text-dark hover:bg-site-primary hover:text-[#438aba]"
            }`}
          >
            Home
          </Link>
        </li>

        <li>
          <AboutMenu />
        </li>
        <li>
          <AdministrationMenu />
        </li>
        <li>
          <AdmissionMenu />
        </li>
        <li>
          <AcademicMenu />
        </li>
        <li>
          <ResearchMenu />
        </li>
        <li>
          <LifeAtKAUMenu />
        </li>

        {/* Desk */}
        <li>
          <Link
            href="/desk"
            className={`${baseClasses} ${
              pathname === "/desk"
                ? "border-b-2 border-site-primary text-site-secondary"
                : "text-dark hover:bg-site-primary hover:text-[#438aba]"
            }`}
          >
            Desk
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
