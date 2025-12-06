"use client";

import { BookOpen, Calendar, Clock, User } from "lucide-react";
import React, { useState } from "react";

interface NewsDetailsProps {
  newsData: any; // Ideally, type this properly
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ newsData }) => {
  if (!newsData) return <div>Loading...</div>;

  // Client-only share button
  const ShareButton: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <button
        onClick={handleShare}
        className={`mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg shadow ${
          copied ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
        } transition-colors`}
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
    <div className="py-20 bg-white">
      <div className="container p-0 mx-auto font-sans">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left Column: Image */}
          <figure className="relative w-full h-full overflow-hidden shadow-lg rounded-2xl">
            <img
              src={newsData.thumb_image || "/images/no-news-image-2.png"} // fallback if undefined
              alt={newsData.title}
              className="object-cover w-full transition-transform duration-500 h-100 hover:scale-105"
              onError={(e) => {
                e.currentTarget.onerror = null; // prevent infinite loop
                e.currentTarget.src = "/images/no-news-image-2.png"; // fallback image
              }}
            />
            {newsData.category && (
              <span className="absolute px-2 py-1 text-xs text-white bg-blue-600 rounded top-2 left-2">
                {newsData.category}
              </span>
            )}
          </figure>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-start">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              {newsData.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {formattedDate}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" /> {newsData.author}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {newsData.read_time}
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" /> {newsData.category}
              </div>
            </div>

            {/* Summary */}
            <p className="pl-4 mb-6 italic text-gray-700 border-l-4 border-blue-600">
              {newsData.summary}
            </p>

            {/* Share + Tags */}
            <div className="flex flex-wrap items-center gap-5">
              <ShareButton />
              <div className="flex flex-wrap gap-3 ml-5">
                {(Array.isArray(newsData.tags) ? newsData.tags : []).map(
                  (tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                    >
                      #{tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Full Content */}
            <article className="mt-12 space-y-6 text-lg leading-relaxed text-gray-800">
              <div dangerouslySetInnerHTML={{ __html: newsData.content }} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
