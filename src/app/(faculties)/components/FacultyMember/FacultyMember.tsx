"use client";

import React, { useEffect, useState } from "react";
// Assuming you have a standard icon library setup (like react-icons)
// Since you are using raw strings for icons, I'll keep the current logic but
// recommend integrating a library like Font Awesome or Lucide for better icons.
// For demonstration, I will use placeholder icons.
import { Mail, Phone, Globe } from "lucide-react"; // Importing some icons for links

// --- Type Definitions (Kept the same) ---
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
  title: string; // section title
  position: number;
  members: StaffMember[];
}

interface DepartmentStaff {
  department_id: number;
  department_title: string;
  slug: string; // department slug
  groups: StaffGroup[];
}

interface StaffApiResponse {
  site: any;
  departments: any[];
  staff: DepartmentStaff[];
}

interface FacultyMemberProps {
  slug: string; // main slug, e.g., vabs
  childSlug: string; // department slug, e.g., administration-vabs
}
// --- End Type Definitions ---

// Helper component for the individual member card
const StaffCard: React.FC<{ member: StaffMember }> = ({ member }) => {
  // Helper function to determine which icon to show
  const getLinkIcon = (link: StaffMemberLink) => {
    if (link.icon.includes("envelope") || link.url.startsWith("mailto:")) {
      return <Mail className="w-4 h-4 text-gray-500" />;
    }
    if (link.icon.includes("phone") || link.url.startsWith("tel:")) {
      return <Phone className="w-4 h-4 text-gray-500" />;
    } // Default for other links (e.g., personal website, social media)
    return <Globe className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div
      key={member.id}
      className="flex flex-col items-center p-6 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Image Section with Modern Border/Ring */}{" "}
      <div className="relative mb-4">
        {" "}
        <img
          src={member.image}
          alt={member.name}
          className="object-cover border-4 rounded-full w-28 h-28 border-indigo-500/50 ring-4 ring-indigo-100"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/150"; // Fallback image
          }}
        />{" "}
      </div>
      {/* Info Section */}{" "}
      <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>{" "}
      <p className="mb-4 font-medium text-indigo-600 text-md">
        {member.designation}
      </p>
      {/* Links Section */}{" "}
      <div className="flex flex-col w-full mt-auto space-y-2">
        {" "}
        {member.links.length > 0 ? (
          member.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="flex items-center justify-center p-2 text-sm text-gray-600 transition duration-150 rounded-lg bg-indigo-50 hover:bg-indigo-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getLinkIcon(link)}{" "}
              <span className="ml-2 truncate">
                {" "}
                {link.url.replace(/(mailto:|tel:|https?:\/\/)/, "")}{" "}
              </span>{" "}
            </a>
          ))
        ) : (
          <p className="text-sm italic text-gray-400">
            Contact info unavailable
          </p>
        )}{" "}
      </div>{" "}
    </div>
  );
};

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
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: StaffApiResponse = await res.json(); // Match the department slug with childSlug

        const department = data.staff.find((dept) => dept.slug === childSlug);

        setStaffData(department || null);
      } catch (err) {
        console.error("Failed to fetch staff data:", err);
        setStaffData(null); // Set to null on failure
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, childSlug]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-48">
        <div className="w-16 h-16 border-t-2 border-b-2 border-indigo-500 rounded-full animate-spin"></div>
        <span className="ml-4 text-lg text-gray-600">Loading staff...</span>
      </div>
    );
  if (!staffData)
    return (
      <div className="p-10 text-xl text-center text-red-500 rounded-lg bg-red-50">
        No staff found for this department, or an error occurred.
      </div>
    );

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="space-y-12">
        <h1 className="pb-3 text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-500">
          {staffData.department_title} Staff{" "}
        </h1>{" "}
        {staffData.groups
          .sort((a, b) => (a.position || 0) - (b.position || 0))
          .map((group) => (
            <div key={group.id} className="space-y-6">
              {/* Group / Section Title */}{" "}
              <h2 className="pl-3 text-3xl font-bold text-indigo-700 border-l-4 border-indigo-500">
                {group.title}{" "}
              </h2>
              {/* Members Grid */}{" "}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {" "}
                {group.members
                  .sort((a, b) => (a.position || 0) - (b.position || 0))
                  .map((member) => (
                    <StaffCard key={member.id} member={member} />
                  ))}{" "}
              </div>{" "}
            </div>
          ))}{" "}
      </div>{" "}
    </div>
  );
};

export default FacultyMember;
