"use client";

import React, { useEffect, useState } from "react";
import { User, Globe } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDynamicIcon } from "@/lib/fontawesome/fontAwesomeHelper";
import Link from "next/link";
import Loading from "@/app/(faculties)/[slug]/loading";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";

// --- Type Definitions ---
interface StaffMemberLink {
  icon: string;
  url: string;
}

interface StaffMember {
  id: number;
  name: string;
  designation: string;
  email: string;
  phone: string;
  image: string;
  position: number;
  links?: StaffMemberLink[] | null | Record<string, StaffMemberLink>;
}

interface StaffGroup {
  id: number;
  title: string;
  position: number;
  members: StaffMember[];
}

interface DepartmentStaff {
  department_id: number;
  department_title: string;
  slug: string;
  groups: StaffGroup[];
}

interface StaffApiResponse {
  site: any;
  departments: any[];
  staff: DepartmentStaff[];
}

interface FacultyMemberProps {
  slug: string;
  childSlug: string;
}
// --- End Type Definitions ---

const FacultyMember: React.FC<FacultyMemberProps> = ({ slug, childSlug }) => {
  const [staffData, setStaffData] = useState<DepartmentStaff | null>(null);
  const [loading, setLoading] = useState(true);

  // --- Fetch Staff Data ---
  useEffect(() => {
    if (!slug || !childSlug) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/departments-and-staff`
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data: StaffApiResponse = await res.json();

        const department = data.staff.find((dept) => dept.slug === childSlug);
        if (!department) {
          setStaffData(null);
          return;
        }

        // Normalize links for all members
        department.groups.forEach((group) => {
          group.members.forEach((member) => {
            if (!member.links || !Array.isArray(member.links)) {
              member.links =
                member.links && typeof member.links === "object"
                  ? Object.values(member.links)
                  : [];
            }

            // Preload icons for each link
            member.links.forEach((link: StaffMemberLink) => {
              if (link?.icon) getDynamicIcon(link.icon);
            });
          });
        });

        setStaffData(department);
      } catch (err) {
        console.error("Failed to fetch staff data:", err);
        setStaffData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, childSlug]);

  if (loading) return <Loading />;
  if (!staffData)
    return (
      <NoDataFound
        message={`No staff data found for department: ${childSlug}. Please check the API source.`}
      />
    );

  // --- Staff Card ---
  const renderStaffCard = (member: StaffMember) => {
    const links: StaffMemberLink[] = Array.isArray(member.links)
      ? member.links
      : member.links && typeof member.links === "object"
      ? Object.values(member.links)
      : [];

    const filteredLinks = links.filter((link) => link?.url);

    const getLinkText = (url: string) => {
      if (url.startsWith("mailto:")) return "Email Address";
      if (url.startsWith("tel:")) return "Call Now";
      try {
        const hostname = new URL(url).hostname;
        return hostname.replace(/^www\./, "").split(".")[0];
      } catch {
        return "Website";
      }
    };

    const getDesignationStyle = (designation: string) => {
      const lower = designation.toLowerCase();
      if (lower.includes("professor"))
        return "bg-indigo-100/50 text-indigo-800";
      if (lower.includes("lecturer")) return "bg-purple-100/50 text-purple-800";
      if (lower.includes("officer") || lower.includes("staff"))
        return "bg-gray-100/50 text-gray-700";
      return "bg-blue-100/50 text-blue-800";
    };

    return (
      <div
        key={member.id}
        className="group flex flex-col items-center text-center bg-site-primary shadow-lg rounded-2xl transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] border-gray-100 
  w-full sm:w-[48%] lg:w-[23%] xl:w-[22%] max-w-sm"
      >
        {/* Image */}
        <div
          key={member.id}
          className=" flex flex-col items-center text-center z-10 pt-10 bg-site-primary rounded-2xl transition duration-300 ease-in-out  hover:scale-[1.01]  "
        >
          <img
            src={member?.image || "/images/no-profile.avif"}
            alt={member?.name}
            style={{ marginBottom: "-40px" }}
            className="object-cover transition-transform duration-300 rounded-full shadow-lg w-30 h-30 ring-4 ring-sky-600 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "/images/no-profile.avif";
              e.currentTarget.className =
                "object-cover transition-transform duration-300 rounded-full shadow-lg w-30 h-30 ring-4 ring-sky-600 group-hover:scale-110";
            }}
          />
        </div>

        <div className="w-full h-full p-6 bg-gray-100 pt-15 rounded-b-2xl">
          <h3 className="mb-1 text-xl font-bold leading-snug text-gray-900">
            {member?.name}
          </h3>
          <p
            className={`inline-block py-1 px-3 mb-5 text-xs font-medium rounded-full ${getDesignationStyle(
              member?.designation
            )}`}
          >
            {member?.designation}
          </p>

          <div className="flex justify-center w-full gap-3">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((link, idx) => {
                const icon = getDynamicIcon(link.icon);
                return (
                  <Link
                    key={idx}
                    href={link.url}
                    className="flex items-center justify-center w-10 h-10 text-gray-700 transition duration-150 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={getLinkText(link.url)}
                  >
                    {icon ? (
                      <FontAwesomeIcon
                        icon={icon}
                        className="w-4 h-4"
                        style={{ fontSize: "18px" }}
                      />
                    ) : (
                      <Globe className="w-4 h-4 text-indigo-500" />
                    )}
                  </Link>
                );
              })
            ) : (
              <div className="flex items-center justify-center gap-1 text-sm italic text-gray-400">
                <User className="w-4 h-4" /> Contact info unavailable
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-16 bg-gray-50/70 sm:py-24">
      <div className="container px-4 mx-auto max-w-7xl">
        <h1 className="relative pb-4 mx-auto text-5xl font-extrabold leading-tight text-center text-gray-900 capitalize w-100">
          {staffData.department_title}
          <span className="block w-24 h-1 mx-auto mt-2 bg-indigo-600 rounded-full"></span>
        </h1>

        {staffData.groups
          .sort((a, b) => (a.position || 0) - (b.position || 0))
          .map((group) => (
            <div key={group.id} className="mt-10 mb-10">
              <div className="flex flex-wrap justify-center gap-10">
                {group.members
                  .sort((a, b) => (a.position || 0) - (b.position || 0))
                  .map(renderStaffCard)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FacultyMember;
