"use client";

import React from "react";
import Link from "next/link";
import { RiHomeOfficeFill } from "react-icons/ri";

// ✅ Define Department interface
export interface Department {
  id: number;
  title: string;
  short_code?: string;
  slug: string;
  description: string | null;
  position?: number;
  link?: string; // Use this for the actual link if provided by the API
}

// ✅ Props interface for the component
interface DepartmentCardProps {
  departments: Department[];
  // Assuming a base path for department links if `dept.link` is not available
  basePath?: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  departments,
  basePath = "/departments",
}) => {
  if (!departments || departments.length === 0) {
    return (
      <div className="my-10 text-center text-gray-500">
        No departments found.
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Title - Modern and center-aligned */}
        <div className="mb-12 text-center">
          <p className="text-lg font-semibold text-[#438aba] uppercase tracking-wider">
            Academic Excellence
          </p>
          <h1 className="mt-2 text-5xl font-extrabold text-gray-900">
            Our Departments
          </h1>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((dept) => {
            // Determine the final link: use dept.link if available, otherwise construct from slug
            const deptLink = dept.link || `${basePath}/${dept.slug}`;

            return (
              <div
                key={dept.id}
                className="group relative flex flex-col p-6 bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:border-b-4 hover:border-[#438aba]"
              >
                {/* Icon/Visual Element */}
                <div className="flex items-center justify-start mb-4">
                  <RiHomeOfficeFill className="h-8 w-8 text-[#438aba] group-hover:text-white transition duration-300" />
                  {dept.short_code && (
                    <span className="ml-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 rounded-full group-hover:bg-white group-hover:text-[#438aba] transition duration-300">
                      {dept.short_code}
                    </span>
                  )}
                </div>

                {/* Title and Description */}
                <h2 className="mb-2 text-2xl font-bold text-gray-800 group-hover:text-[#438aba] transition duration-300">
                  {dept.title}
                </h2>

                <p className="flex-grow mb-4 text-sm text-gray-500 group-hover:text-gray-600">
                  {dept.description
                    ? `${dept.description.substring(0, 100)}...`
                    : "A dedicated department offering quality education and research in its field."}
                </p>

                {/* View Details Button/Link */}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Link
                    href={deptLink}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-[#438aba] shadow-md transition-colors duration-300hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#438aba] focus:ring-offset-2"
                  >
                    View Details
                    <span aria-hidden="true" className="ml-1 text-lg">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
