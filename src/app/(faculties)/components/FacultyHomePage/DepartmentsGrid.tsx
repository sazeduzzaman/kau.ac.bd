"use client";

import React from "react";
import Link from "next/link";
import { RiHomeOfficeFill } from "react-icons/ri";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";

export interface Department {
  id: number;
  title: string;
  short_code?: string;
  slug?: string;
  description?: string | null;
  position?: number;
  link?: string;
}

interface DepartmentCardProps {
  departments: Department[];
  basePath?: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  departments,
  basePath = "/departments",
}) => {
  if (!departments || departments.length === 0) {
    return <NoDataFound />; // <-- use NoData here
  }

  return (
    <div className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-lg font-semibold text-[#438aba] uppercase tracking-wider">
            Academic Excellence
          </p>
          <h1 className="mt-2 text-5xl font-extrabold text-gray-900">
            Our Departments
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((dept) => {
            const deptLink =
              dept.link || (dept.slug ? `${basePath}/${dept.slug}` : null);

            return (
              <div
                key={dept.id}
                className="group relative flex flex-col p-6 bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:border-b-4 hover:border-[#438aba]"
              >
                <div className="flex items-center justify-start mb-4">
                  <RiHomeOfficeFill className="h-8 w-8 text-[#438aba] group-hover:text-white transition duration-300" />
                  {dept.short_code && (
                    <span className="ml-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 rounded-full group-hover:bg-white group-hover:text-[#438aba] transition duration-300">
                      {dept.short_code}
                    </span>
                  )}
                </div>

                {dept.title && (
                  <h2 className="mb-2 text-2xl font-bold text-gray-800 group-hover:text-[#438aba] transition duration-300">
                    {dept.title}
                  </h2>
                )}

                {dept.description && (
                  <p className="flex-grow mb-4 text-sm text-gray-500 group-hover:text-gray-600">
                    {dept.description.length > 100
                      ? `${dept.description.substring(0, 100)}...`
                      : dept.description}
                  </p>
                )}

                <div className="pt-4 mt-4 border-t border-gray-100">
                  <button
                    disabled
                    title="No Link Found"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-[#438aba] shadow-md opacity-50 cursor-not-allowed transition-colors duration-300"
                  >
                    View Details
                    <span aria-hidden="true" className="ml-1 text-lg">
                      →
                    </span>
                  </button>
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
