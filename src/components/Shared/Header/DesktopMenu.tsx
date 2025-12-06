"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdmissionMenu from "./AdmissionMenu";

// Import your submenu components

const DesktopMenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden font-sans lg:block">
      <ul className="flex items-center justify-start h-16 space-x-1 font-medium text-black font-primary">
        {/* Static Home Link */}
        <li>
          <Link
            href="/"
            className={`px-3 py-2 transition-colors duration-200 ${
              pathname === "/"
                ? "text-site-secondary border-b-2 border-site-primary"
                : "text-black hover:text-site-primary"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <AdmissionMenu pathname={pathname} />
        </li>

        {/* Example static link */}
        <li>
          <Link
            href="/desk"
            className={`px-3 py-2 transition-colors duration-200 ${
              pathname === "/desk"
                ? "text-site-secondary border-b-2 border-site-primary"
                : "text-black hover:text-site-primary"
            }`}
          >
            Desk
          </Link>
        </li>
        <li>
          <Link
            href="/desk"
            className={`px-3 py-2 transition-colors duration-200 ${
              pathname === "/desk"
                ? "text-site-secondary border-b-2 border-site-primary"
                : "text-black hover:text-site-primary"
            }`}
          >
            Desk
          </Link>
        </li>
        <li>
          <Link
            href="/desk"
            className={`px-3 py-2 transition-colors duration-200 ${
              pathname === "/desk"
                ? "text-site-secondary border-b-2 border-site-primary"
                : "text-black hover:text-site-primary"
            }`}
          >
            Desk
          </Link>
        </li>
        <li>
          <Link
            href="/desk"
            className={`px-3 py-2 transition-colors duration-200 ${
              pathname === "/desk"
                ? "text-site-secondary border-b-2 border-site-primary"
                : "text-black hover:text-site-primary"
            }`}
          >
            Desk
          </Link>
        </li>
        <li>
          <Link
            href="/desk"
            className={`px-3 py-2 transition-colors duration-200 ${
              pathname === "/desk"
                ? "text-site-secondary border-b-2 border-site-primary"
                : "text-black hover:text-site-primary"
            }`}
          >
            Desk
          </Link>
        </li>
        <li>
          <Link
            href="/desk"
            className={`px-3 py-2 transition-colors duration-200 ${
              pathname === "/desk"
                ? "text-site-secondary border-b-2 border-site-primary"
                : "text-black hover:text-site-primary"
            }`}
          >
            Desk
          </Link>
        </li>
        <li>
          <Link
            href="/desk"
            className={`px-3 py-2 transition-colors duration-200 ${
              pathname === "/desk"
                ? "text-site-secondary border-b-2 border-site-primary"
                : "text-black hover:text-site-primary"
            }`}
          >
            Desk
          </Link>
        </li>
        <li>
          <Link
            href="/desk"
            className={`px-3 py-2 transition-colors duration-200 ${
              pathname === "/desk"
                ? "text-site-secondary border-b-2 border-site-primary"
                : "text-black hover:text-site-primary"
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
