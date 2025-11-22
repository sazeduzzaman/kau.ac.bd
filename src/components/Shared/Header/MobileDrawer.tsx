"use client";

import React from "react";
import Link from "next/link";

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
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-bold text-lg">Menu</h2>
        <button onClick={closeDrawer} className="text-gray-700 text-xl">
          ✕
        </button>
      </div>
      <ul className="flex flex-col p-4 space-y-2">
        <li>
          <Link href="/" className="block px-2 py-2 hover:bg-gray-100 rounded">
            Home
          </Link>
        </li>

        <li>
          <details>
            <summary className="cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">
              Service
            </summary>
            <ul className="pl-4 mt-1 flex flex-col space-y-1">
              <li>
                <details>
                  <summary className="cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">
                    Category 1
                  </summary>
                  <ul className="pl-4 flex flex-col space-y-1">
                    <li>
                      <details>
                        <summary className="cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">
                          Subcategory 1
                        </summary>
                        <ul className="pl-4 flex flex-col space-y-1">
                          <li>
                            <a className="px-2 py-2 hover:bg-gray-100 rounded block">
                              Sub Subcategory 1
                            </a>
                          </li>
                          <li>
                            <a className="px-2 py-2 hover:bg-gray-100 rounded block">
                              Sub Subcategory 2
                            </a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <a className="px-2 py-2 hover:bg-gray-100 rounded block">
                        Subcategory 2
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="px-2 py-2 hover:bg-gray-100 rounded block">
                  Category 2
                </a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <Link
            href="/about"
            className="block px-2 py-2 hover:bg-gray-100 rounded"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block px-2 py-2 hover:bg-gray-100 rounded"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link href="/apply" className="btn btn-primary w-full mt-2">
            Apply
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileDrawer;
