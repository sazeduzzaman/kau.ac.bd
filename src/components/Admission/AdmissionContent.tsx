import React from "react";

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
  return (
    <div className="bg-white">
      <div className="container min-h-screen p-8 mx-auto bg-gray-50">
        <h1 className="mb-4 text-3xl font-bold text-site-primary">
          {admissionItem.title}
        </h1>

        {admissionItem.banner_image && (
          <img
            src={admissionItem.banner_image}
            alt={admissionItem.title}
            className="object-cover w-full mb-6 rounded max-h-64"
          />
        )}

        {admissionItem.content && (
          <div
            className="mb-6 prose text-black max-w-none"
            dangerouslySetInnerHTML={{ __html: admissionItem.content }}
          />
        )}

        <div className="text-sm text-black">
          {admissionItem.meta_title && (
            <p>
              <strong>Meta Title:</strong> {admissionItem.meta_title}
            </p>
          )}
          {admissionItem.meta_tags && (
            <p>
              <strong>Meta Tags:</strong> {admissionItem.meta_tags}
            </p>
          )}
          {admissionItem.meta_description && (
            <p>
              <strong>Meta Description:</strong>{" "}
              {admissionItem.meta_description}
            </p>
          )}
        </div>

        {admissionItem.children && admissionItem.children.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-2 text-xl font-semibold">Sub Pages</h2>
            <ul className="list-disc list-inside">
              {admissionItem.children.map((child) => (
                <li key={child.id}>
                  <a
                    href={child.external_url || `/admission/${child.slug}`}
                    target={child.external_url ? "_blank" : "_self"}
                    rel={child.external_url ? "noopener noreferrer" : undefined}
                    className="text-site-primary hover:underline"
                  >
                    {child.title}
                  </a>
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
