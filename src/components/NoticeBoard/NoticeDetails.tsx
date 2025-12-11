"use client";

import React from "react";
import { FileText, Calendar } from "lucide-react";
import Link from "next/link";

interface Notice {
  id: number;
  title: string;
  body: string;
  publish_date: string;
  attachments?: string[] | undefined;
  category?: string | null;
}

interface RelatedNotice {
  id: number;
  title: string;
  slug: string;
  publish_date: string;
}

interface NoticeDetailsProps {
  notice: Notice;
  relatedNotices?: RelatedNotice[];
}

const NoticeDetails: React.FC<NoticeDetailsProps> = ({
  notice,
  relatedNotices = [],
}) => {
  if (!notice)
    return <div className="text-center text-red-500">No data found</div>;

  const publishDate = new Date(notice.publish_date).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="bg-white">
      <div className="container p-6 mx-auto space-y-8 bg-white">
        {/* Notice Header */}
        <div className="p-6 bg-white border-l-4 border-teal-500 rounded-lg shadow-md">
          {notice.category && (
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-teal-500 rounded">
              {notice.category}
            </span>
          )}
          <h1 className="text-3xl font-bold text-gray-800">{notice.title}</h1>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
            <Calendar size={16} />
            <span>Published: {publishDate}</span>
          </div>
        </div>

        {/* Notice Body */}
        {/* <div className="p-6 text-base leading-relaxed text-gray-800 whitespace-pre-line bg-white rounded-lg shadow-md">
          {notice.body ?? "No body found"}
        </div> */}

        {/* Attachments */}
        {notice.attachments && notice.attachments.length > 0 && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-3 text-lg font-semibold text-gray-700">
              Attachments
            </h2>
            <div className="flex flex-col gap-3">
              {notice.attachments.map((file, index) => (
                <Link
                  key={index}
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 text-teal-600 transition rounded bg-teal-50 hover:bg-teal-100"
                >
                  <FileText size={20} />
                  {file.split("/").pop()}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Notices */}
        {relatedNotices.length > 0 && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-3 text-lg font-semibold text-gray-700">
              Related Notices
            </h2>
            <ul className="pl-5 space-y-2 list-disc">
              {relatedNotices.map((rel) => (
                <li key={rel.id}>
                  <Link
                    href={`/all-notice/${rel?.slug}`}
                    className="text-teal-600 hover:underline"
                  >
                    {rel.title}
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

export default NoticeDetails;
