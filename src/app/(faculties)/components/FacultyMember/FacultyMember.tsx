"use client";

import React, { useEffect, useState } from "react";
import { User, Globe } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDynamicIcon } from "@/lib/fontawesome/fontAwesomeHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/app/(faculties)/[slug]/loading";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";

/* ================= TYPES ================= */
interface StaffMemberLink {
  icon: string;
  url: string;
}

interface StaffMember {
  id: number;
  uuid: string;
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
  staff: DepartmentStaff[];
}

interface FacultyMemberProps {
  slug: string;
  childSlug: string;
  pageSlug: string;
}

/* ================= COMPONENT ================= */
const FacultyMember: React.FC<FacultyMemberProps> = ({
  slug,
  childSlug,
  pageSlug,
}) => {
  const [staffData, setStaffData] = useState<DepartmentStaff | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // ✅ Hook at top-level

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    if (!slug || !childSlug) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/departments-and-staff`
        );
        if (!res.ok) throw new Error("Failed to fetch");

        const data: StaffApiResponse = await res.json();
        const department = data.staff.find((dept) => dept.slug === childSlug);

        if (!department) {
          setStaffData(null);
          return;
        }

        // Normalize links
        department.groups.forEach((group) => {
          group.members.forEach((member) => {
            if (!Array.isArray(member.links)) {
              member.links =
                member.links && typeof member.links === "object"
                  ? Object.values(member.links)
                  : [];
            }

            member.links.forEach((link) => {
              if (link?.icon) getDynamicIcon(link.icon);
            });
          });
        });

        setStaffData(department);
      } catch (err) {
        console.error(err);
        setStaffData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, childSlug]);

  if (loading) return <Loading />;
  if (!staffData) return <NoDataFound />;

  /* ================= HELPERS ================= */
  const getDesignationStyle = (designation: string) => {
    const d = designation.toLowerCase();
    if (d.includes("professor")) return "bg-indigo-100 text-indigo-800";
    if (d.includes("lecturer")) return "bg-purple-100 text-purple-800";
    if (d.includes("officer") || d.includes("staff"))
      return "bg-gray-100 text-gray-700";
    return "bg-blue-100 text-blue-800";
  };

  /* ================= STAFF CARD ================= */
  const renderStaffCard = (member: StaffMember) => {
    const links = Array.isArray(member.links) ? member.links : [];

    return (
      <div
        onClick={() =>
          router.push(`/${slug}/${pageSlug}/${childSlug}/${member.uuid}`)
        }
        className="group w-full sm:w-[48%] lg:w-[23%] xl:w-[22%] max-w-sm cursor-pointer"
      >
        <div className="flex flex-col items-center text-center bg-site-primary shadow-lg rounded-2xl transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01]">
          {/* IMAGE */}
          <div className="-mb-10 pt-15 z-5">
            <img
              src={member.image || "/images/no-profile.avif"}
              alt={member.name}
              className="object-cover transition rounded-full shadow-lg w-30 h-30 ring-4 ring-sky-600 group-hover:scale-110"
              onError={(e) => (e.currentTarget.src = "/images/no-profile.avif")}
            />
          </div>

          {/* CONTENT */}
          <div className="w-full h-full p-6 bg-gray-100 pt-14 rounded-b-2xl">
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p
              className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${getDesignationStyle(
                member.designation
              )}`}
            >
              {member.designation}
              <br />
            </p>
            <p className="pt-2 mb-3 text-center text-black">
              Khulna Agricultural University
            </p>
            {/* SOCIAL LINKS */}
            <div
              className="flex justify-center gap-3"
              onClick={(e) => e.stopPropagation()} // prevent card click
            >
              {links.length ? (
                links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-600 hover:bg-indigo-100"
                  >
                    {getDynamicIcon(link.icon) ? (
                      <FontAwesomeIcon
                        color="white"
                        icon={getDynamicIcon(link.icon)!}
                      />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </Link>
                ))
              ) : (
                <div className="flex items-center gap-1 text-sm italic text-gray-400">
                  <User className="w-4 h-4" />
                  No contact info
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* ================= RENDER ================= */
  return (
    <div className="py-16 bg-gray-50/70 sm:py-24">
      <div className="container px-4 mx-auto max-w-7xl">
        <h1 className="relative pb-4 mx-auto text-5xl font-extrabold leading-tight text-center text-gray-900 capitalize w-100">
          {staffData.department_title}
          <span className="block w-24 h-1 mx-auto mt-3 bg-indigo-600 rounded-full" />
        </h1>

        {staffData.groups
          .sort((a, b) => a.position - b.position)
          .map((group, index) => (
            <div key={index} className="mb-14">
              <div className="flex flex-wrap justify-center gap-10">
                {group.members
                  .sort((a, b) => a.position - b.position)
                  .map((member) => renderStaffCard(member))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FacultyMember;
