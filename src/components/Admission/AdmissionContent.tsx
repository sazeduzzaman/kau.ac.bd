"use client";
import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";
import Link from "next/link";
import React, { useState } from "react";

interface AdmissionData {
  id: number;
  title: string;
  slug: string;
  type: string;
  external_url?: string | null;
  banner_image?: string | null;
  content?: string;
  meta_title?: string;
  meta_tags?: string;
  meta_description?: string;
  children?: AdmissionData[];
}

interface AdmissionContentProps {
  admissionItem: AdmissionData;
}

const AdmissionContent: React.FC<AdmissionContentProps> = ({
  admissionItem,
}) => {
  const fallbackImg = "/images/Slider-1.jpg";

  const [imgSrc, setImgSrc] = useState(
    admissionItem.banner_image ? admissionItem.banner_image : fallbackImg
  );

  return (
    <div className="bg-white">
      {/* Full width banner */}
      <div className="w-full">
        <img
          src={imgSrc}
          alt={admissionItem.title}
          className="object-cover w-full max-h-[420px]"
          onError={() => setImgSrc(fallbackImg)}
        />
      </div>

      {/* Content container */}
      <div className="container p-8 mx-auto bg-white">
        <h1 className="mb-4 text-3xl font-bold text-site-primary">
          {admissionItem.title}
        </h1>
        {admissionItem.content && (
          <HtmlRenderer content={admissionItem.content} />
        )}

        {/* Sub Pages */}
        {admissionItem.children && admissionItem.children.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-2 text-xl font-semibold">Sub Pages</h2>
            <ul className="list-disc list-inside">
              {admissionItem.children.map((child) => (
                <li key={child.id}>
                  <Link
                    href={child.external_url || `/admission/${child.slug}`}
                    target={child.external_url ? "_blank" : "_self"}
                    rel={child.external_url ? "noopener noreferrer" : undefined}
                    className="text-site-primary hover:underline"
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionContent;
