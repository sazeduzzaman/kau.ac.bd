"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDynamicIcon } from "@/lib/fontawesome/fontAwesomeHelper";

interface FooterContactPersonProps {
  SiteData: any;
}

const FooterContactPerson: React.FC<FooterContactPersonProps> = ({
  SiteData,
}) => {
  const person = SiteData.contact.contact_person[0];
  const Social = SiteData.social_links;

  // Preload all social icons into the FA library
  useEffect(() => {
    Social.forEach((item: any) => getDynamicIcon(item.icon_class));
  }, [Social]);

  return (
    <div>
      {/* Section Title */}
      <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
        Get in Touch
        <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
      </h6>

      {/* Contact Person Info */}
      <p className="text-sm opacity-90">
        {person.name} <br />
        <span>{person.designation}</span>
      </p>

      {/* Contact Details */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex gap-3">
          <FaPhoneAlt className="mt-1" />
          <Link
            href={`tel:${person.phone}`}
            className="transition-colors hover:text-white"
          >
            {person.phone}
          </Link>
        </div>
        <div className="flex gap-3">
          <FaEnvelope className="mt-1" />
          <Link
            href={`mailto:${person.email}`}
            className="transition-colors hover:text-white"
          >
            {person.email}
          </Link>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-4">
        {Social.map((item: any, index: number) => {
          const icon = getDynamicIcon(item.icon_class); // returns [prefix, iconName]
          return (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-8 h-8 transition-colors duration-300 rounded-full bg-white/10 hover:bg-white/20"
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-white"
                style={{ fontSize: "20px" }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterContactPerson;
