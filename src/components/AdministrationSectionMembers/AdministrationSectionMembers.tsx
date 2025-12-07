"use client";

import React from "react";
import { FaUserSlash } from "react-icons/fa";

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

  return (
    <div className="py-8 bg-gray-50">
      <div className="container p-6 mx-auto">
        {/* Office Title */}
        <h1 className="mb-12 text-4xl font-bold text-center text-black">
          {office.title}
        </h1>

        {/* Sections */}
        {sections.length > 0 ? (
          sections.map((section) => (
            <div key={section.id} className="mb-12">
              <h2 className="pb-2 mb-6 text-2xl font-semibold text-black border-b">
                {section.title}
              </h2>

              {/* Members */}
              {section.members.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {section.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex flex-col items-center gap-4 p-6 transition-shadow duration-300 transform bg-white border shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-1"
                    >
                      {/* Member Image */}
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-24 h-24 border-4 rounded-full shadow-sm border-site-primary"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-24 h-24 text-2xl font-bold bg-gray-200 border-4 rounded-full shadow-sm text-site-primary border-site-primary">
                          {member.name.charAt(0)}
                        </div>
                      )}

                      {/* Member Info */}
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-black">
                          {member.name}
                        </h3>
                        {member.designation && (
                          <p className="text-gray-600">{member.designation}</p>
                        )}
                        {member.email && (
                          <p className="text-sm text-gray-500">
                            {member.email}
                          </p>
                        )}
                        {member.phone && (
                          <p className="text-sm text-gray-500">
                            {member.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-8 bg-white border shadow-sm w-60 rounded-xl">
                  <FaUserSlash className="w-12 h-12 mb-4 text-gray-400" />
                  <p className="text-center text-gray-500">
                    No members found in this section.
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-8 mx-auto bg-white border shadow-md w-60 rounded-xl">
            <FaUserSlash className="w-12 h-12 mb-6 text-gray-400" />
            <p className="text-lg text-center text-gray-500">
              No sections or members found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdministrationSectionMembers;
