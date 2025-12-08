"use client";

import React, { useState } from "react";
import * as Icons from "lucide-react";
import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";

interface NewsDetailsProps {
  newsData: {
    title: string;
    summary?: string;
    content: string;
    thumb_image?: string | null;
    published_at: string;
    author?: string;
    read_time?: string;
    category?: string;
    tags?: string[];
  };
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ newsData }) => {
  if (!newsData) return <div>Loading...</div>;

  // Fallback image
  const fallback = "/images/no-news-image-2.png";
  const [imgSrc, setImgSrc] = useState(newsData.thumb_image || fallback);

  // Client-only share button
  const ShareButton: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
      if (typeof window !== "undefined") {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    return (
      <button
        onClick={handleShare}
        className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-full shadow transition-colors duration-300 ${
          copied ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {copied ? "Link Copied!" : "Share"}
      </button>
    );
  };

  const publishedDate = new Date(newsData.published_at);
  const formattedDate = publishedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="py-20 bg-gray-50">
      <div className="container p-4 mx-auto font-sans">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left Column: Image */}
          <figure className="relative w-full h-full overflow-hidden shadow-xl rounded-3xl">
            <img
              src={newsData.thumb_image || "/images/no-news-image-2.png"}
              alt={newsData.title}
              className="object-cover w-full transition-transform duration-500 h-100 hover:scale-105"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/no-news-image-2.png";
              }}
            />
          </figure>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-start">
            {/* Title */}
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-surjo">
              {newsData.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Icons.Calendar className="w-4 h-4" /> {formattedDate}
              </div>
              <div className="flex items-center gap-1">
                <Icons.User className="w-4 h-4" /> {newsData.author || "Admin"}
              </div>
              {newsData.read_time && (
                <div className="flex items-center gap-1">
                  <Icons.Clock className="w-4 h-4" /> {newsData.read_time}
                </div>
              )}
              {newsData.category && (
                <div className="flex items-center gap-1">
                  <Icons.BookOpen className="w-4 h-4" /> {newsData.category}
                </div>
              )}
            </div>

            {/* Summary */}
            {newsData.summary && (
              <div className="pl-4 mb-6 italic text-gray-700 border-l-4 border-blue-600 font-surjo">
                <HtmlRenderer content={newsData.summary} />
              </div>
            )}

            {/* Share + Tags */}
            <div className="flex flex-wrap items-center gap-4">
              <ShareButton />
              <div className="flex flex-wrap gap-3">
                {(Array.isArray(newsData.tags) ? newsData.tags : []).map(
                  (tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-1 text-sm font-medium text-gray-700 transition-colors duration-300 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                    >
                      #{tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Full Content */}
            <article className="max-w-full mt-10 space-y-6 prose prose-lg text-gray-800">
              <div
                className="transition-colors duration-300 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: newsData.content }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
