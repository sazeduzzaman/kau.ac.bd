"use client";

import React from "react";
import { FaEnvelope, FaPhoneAlt, FaCrown } from "react-icons/fa";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound"; // Import your centralized no-data component

interface Member {
  id: number;
  name: string;
  designation?: string | null;
  email?: string | null;
  phone?: string | null;
  image?: string | null;
  position?: string | null;
}

interface Section {
  id: number;
  title: string;
  members: Member[];
}

interface OfficeData {
  office: {
    id: number;
    title: string;
    slug: string;
    description?: string | null;
    total_sections?: number;
    total_members?: number;
  };
  sections: Section[];
}

interface Props {
  admissionItem: OfficeData;
}

const AdministrationSectionMembers: React.FC<Props> = ({ admissionItem }) => {
  const { office, sections } = admissionItem;

  const primaryGradient = "bg-gradient-to-r from-sky-600 to-cyan-500";
  const hoverGradient = "hover:shadow-sky-500/30";

  // If no sections or no members, show NoDataFound component
  const hasData =
    sections.length > 0 &&
    sections.some((section) => section.members.length > 0);

  if (!hasData) {
    return <NoDataFound />;
  }

  return (
    <div className="py-20 pt-10 bg-white md:py-28 md:pt-10">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Office Title */}
        <header className="mb-20 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-7xl">
            {office.title}
          </h1>
          {office.description && (
            <p className="max-w-3xl mx-auto text-xl text-gray-500">
              {office.description}
            </p>
          )}
        </header>

        {/* Sections */}
        {sections.map((section) => (
          <section key={section.id} className="mb-20">
            <h2 className="relative inline-block mb-12 text-2xl font-bold tracking-tight text-gray-800 lg:text-4xl sm:text-2xl group">
              {section.title}
              <span
                className={`absolute bottom-[-10px] left-0 h-1 w-1/2 ${primaryGradient} transition-all duration-300 group-hover:w-full`}
              ></span>
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.members.map((member) => (
                <div
                  key={member.id}
                  className={`relative flex flex-col items-center p-8 transition-all duration-500 transform bg-white border border-gray-100 shadow-sm hover:shadow-2xl ${hoverGradient} hover:-translate-y-2`}
                >
                  {member.position === "Head" && (
                    <FaCrown
                      className="absolute w-6 h-6 text-yellow-500 top-4 right-4 animate-pulse"
                      title="Section Head"
                    />
                  )}

                  <div className="relative mb-6">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`object-cover w-32 h-32 p-1 border-4 shadow-lg ring-4 ring-offset-2 ring-offset-white ring-cyan-500 ${primaryGradient}`}
                      />
                    ) : (
                      <div
                        className={`flex items-center justify-center w-32 h-32 p-1 text-5xl font-extrabold text-white rounded-full shadow-lg ring-4 ring-offset-2 ring-offset-white ring-cyan-500 ${primaryGradient}`}
                      >
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="w-full text-center">
                    <h3 className="mb-1 text-xl font-extrabold text-gray-900">
                      {member.name}
                    </h3>
                    {member.designation && (
                      <p className="mt-1 text-sm font-semibold tracking-wider uppercase text-sky-600">
                        {member.designation}
                      </p>
                    )}
                    <div className="pt-4 mt-4 space-y-2 border-t border-gray-100">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center text-sm text-gray-600 transition hover:text-sky-500"
                        >
                          <FaEnvelope className="w-4 h-4 mr-2" />
                          <span className="truncate">{member.email}</span>
                        </a>
                      )}
                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center justify-center text-sm text-gray-600 transition hover:text-sky-500"
                        >
                          <FaPhoneAlt className="w-4 h-4 mr-2" />
                          {member.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AdministrationSectionMembers;
