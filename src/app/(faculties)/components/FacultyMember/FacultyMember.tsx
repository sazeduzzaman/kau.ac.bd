"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone, Globe, User, BookOpen } from "lucide-react";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";
import Loading from "../../[slug]/loading";

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
  links: StaffMemberLink[];
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

// --- Individual Staff Card ---
const StaffCard: React.FC<{ member: StaffMember }> = ({ member }) => {
  const getLinkIcon = (link: StaffMemberLink) => {
    if (link.icon.includes("envelope") || link.url.startsWith("mailto:"))
      return <Mail className="w-4 h-4 text-indigo-500" />;
    if (link.icon.includes("phone") || link.url.startsWith("tel:"))
      return <Phone className="w-4 h-4 text-indigo-500" />;
    if (
      link.icon.includes("book") ||
      link.url.includes("scholar") ||
      link.url.includes("researchgate")
    )
      return <BookOpen className="w-4 h-4 text-indigo-500" />;
    return <Globe className="w-4 h-4 text-indigo-500" />;
  };

  const getLinkText = (url: string): string => {
    if (url.startsWith("mailto:")) return "Email Address";
    if (url.startsWith("tel:")) return "Call Now";
    if (url.includes("linkedin")) return "LinkedIn";
    if (url.includes("researchgate")) return "Research";
    if (url.includes("scholar")) return "Scholar";
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, "").split(".")[0];
  };

  const filteredLinks = member.links.filter(
    (link) =>
      link.url &&
      (link.url.startsWith("mailto:") ||
        link.url.startsWith("tel:") ||
        link.url.includes("linkedin") ||
        link.url.includes("researchgate") ||
        link.url.includes("scholar"))
  );

  const getDesignationStyle = (designation: string) => {
    const lower = designation.toLowerCase();
    if (lower.includes("professor")) return "bg-indigo-100/50 text-indigo-800";
    if (lower.includes("lecturer")) return "bg-purple-100/50 text-purple-800";
    if (lower.includes("officer") || lower.includes("staff"))
      return "bg-gray-100/50 text-gray-700";
    return "bg-blue-100/50 text-blue-800";
  };

  return (
    <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] border border-gray-100">
      {/* Image */}
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full rounded-2xl"
          onError={(e) => {
            e.currentTarget.src = "/images/no-profile.avif";
            e.currentTarget.className =
              "object-cover w-full h-full p-1 bg-gray-50";
          }}
        />
      </div>
      <div className="p-6 ">
        {/* Name & Designation */}
        <h3 className="mb-1 text-xl font-bold leading-snug text-gray-900">
          {member.name}
        </h3>
        <p
          className={`inline-block py-1 px-3 mb-5 text-xs font-medium rounded-full ${getDesignationStyle(
            member.designation
          )}`}
        >
          {member.designation}
        </p>
        {/* Links */}
        <div className="flex justify-center w-full gap-3">
          {filteredLinks.length > 0 ? (
            filteredLinks.slice(0, 3).map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="flex items-center justify-center w-10 h-10 text-gray-700 transition duration-150 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={getLinkText(link.url)}
              >
                {getLinkIcon(link)}
              </a>
            ))
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

// --- Main Faculty Component ---
const FacultyMember: React.FC<FacultyMemberProps> = ({ slug, childSlug }) => {
  const [staffData, setStaffData] = useState<DepartmentStaff | null>(null);
  const [loading, setLoading] = useState(true);

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
        setStaffData(department || null);
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
      <div className="pt-24 pb-16 bg-gray-50">
        <NoDataFound
          message={`No staff data found for department: ${childSlug}. Please check the API source.`}
        />
      </div>
    );

  return (
    <div className="py-16 bg-gray-50/70 sm:py-24">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="space-y-16">
          <h1 className="relative pb-4 text-5xl font-extrabold leading-tight text-center text-gray-900">
            {staffData.department_title} Staff & Members
            <span className="block w-24 h-1 mx-auto mt-2 bg-indigo-600 rounded-full"></span>
          </h1>

          {staffData.groups
            .sort((a, b) => (a.position || 0) - (b.position || 0))
            .map((group) => (
              <div key={group.id} className="mb-10">
                {/* --- FLEX WRAPPER FOR PERFECT CENTERING --- */}
                <div className="flex flex-wrap justify-center gap-10">
                  {group.members
                    .sort((a, b) => (a.position || 0) - (b.position || 0))
                    .map((member) => (
                      <div
                        key={member.id}
                        className="w-full sm:w-[45%] lg:w-[30%] xl:w-[22%] max-w-sm"
                      >
                        <StaffCard member={member} />
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyMember;
