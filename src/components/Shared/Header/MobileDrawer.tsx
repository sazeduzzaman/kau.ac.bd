"use client";

import Link from "next/link";
import React from "react";

interface MobileDrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, closeDrawer }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={closeDrawer} className="text-xl text-gray-700">
          ✕
        </button>
      </div>
      <ul className="flex flex-col p-4 space-y-2">
        <li>
          <Link href="/" className="block px-2 py-2 rounded hover:bg-gray-100">
            Home
          </Link>
        </li>

        <li>
          <details>
            <summary className="px-2 py-2 rounded cursor-pointer hover:bg-gray-100">
              Service
            </summary>
            <ul className="flex flex-col pl-4 mt-1 space-y-1">
              <li>
                <details>
                  <summary className="px-2 py-2 rounded cursor-pointer hover:bg-gray-100">
                    Category 1
                  </summary>
                  <ul className="flex flex-col pl-4 space-y-1">
                    <li>
                      <details>
                        <summary className="px-2 py-2 rounded cursor-pointer hover:bg-gray-100">
                          Subcategory 1
                        </summary>
                        <ul className="flex flex-col pl-4 space-y-1">
                          <li>
                            <Link
                              href="/"
                              className="block px-2 py-2 rounded hover:bg-gray-100"
                            >
                              Sub Subcategory 1
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/"
                              className="block px-2 py-2 rounded hover:bg-gray-100"
                            >
                              Sub Subcategory 2
                            </Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block px-2 py-2 rounded hover:bg-gray-100"
                      >
                        Subcategory 2
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  href="/"
                  className="block px-2 py-2 rounded hover:bg-gray-100"
                >
                  Category 2
                </Link>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <Link
            href="/about"
            className="block px-2 py-2 rounded hover:bg-gray-100"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block px-2 py-2 rounded hover:bg-gray-100"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link href="/apply" className="w-full mt-2 btn btn-primary">
            Apply
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileDrawer;
