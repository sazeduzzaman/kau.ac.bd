"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiHomeOfficeFill } from "react-icons/ri";
import Loading from "../../[slug]/loading";

interface FacultyDepartmentPageProps {
  slug: string;
}

interface Department {
  id: number;
  title: string;
  short_code: string | null;
  slug: string;
  description: string | null;
  position: number;
}

interface ApiResponse {
  departments: Department[];
}

const FacultyDepartmentPage: React.FC<FacultyDepartmentPageProps> = ({
  slug,
}) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/academics/sites/${slug}/departments-and-staff`
        );

        if (!res.ok) throw new Error("Failed to fetch departments");

        const json: ApiResponse = await res.json();
        setDepartments(json.departments || []);
      } catch (err) {
        console.error("Error loading departments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, [slug]);

  if (loading) return <Loading />;

  return (
    <div className="container py-10 mx-auto text-black">
      <h2 className="mb-8 text-3xl font-bold">Departments</h2>

      {departments.length === 0 ? (
        <p className="text-gray-500">No departments found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => {
            const deptLink = `/departments/${dept.slug}`;

            return (
              <div
                key={dept.id}
                className="group relative flex flex-col p-6 bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:border-b-4 hover:border-[#438aba]"
              >
                {/* Icon + Short Code */}
                <div className="flex items-center mb-4">
                  <RiHomeOfficeFill className="h-8 w-8 text-[#438aba] group-hover:text-success transition duration-300" />

                  {dept.short_code && (
                    <span className="ml-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 rounded-full group-hover:bg-white group-hover:text-[#438aba] transition duration-300">
                      {dept.short_code}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="mb-2 text-2xl font-bold text-gray-800 group-hover:text-[#438aba] transition duration-300">
                  {dept.title}
                </h2>

                {/* Description */}
                <p className="flex-grow mb-4 text-sm text-gray-500 group-hover:text-gray-600">
                  {dept.description
                    ? `${dept.description.substring(0, 120)}...`
                    : "A dedicated department offering quality education and research."}
                </p>

                {/* View Details Button */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={deptLink}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-[#438aba] shadow-md transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#438aba] focus:ring-offset-2"
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
      )}
    </div>
  );
};

export default FacultyDepartmentPage;
