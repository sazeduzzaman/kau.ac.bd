"use client"; // Required for onError on images
import React from "react";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa";
import { NewsItem } from "@/lib/types/NewsDataSetTypes/NewsDataSetTypes";

interface SomeNewsProps {
  newsData: NewsItem[];
}

// --------------------
// Component
// --------------------
const SomeNews: React.FC<SomeNewsProps> = ({ newsData }) => {
  if (!newsData || newsData.length === 0) return null;

  const featured = newsData[0];
  const latestNews = newsData.slice(1);

  const featureFormattedDate = new Date(
    featured.published_at
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="col-span-1">
      {/* Featured News */}
      <Link href={`/news/${featured.slug}`}>
        <div className="relative flex flex-col overflow-hidden transition-all bg-white rounded-none shadow-sm hover:shadow-lg">
          <img
            src={featured.imageUrl || "/images/news-no-img.png"}
            alt={featured.title || "Featured news image"}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/news-no-img.png";
            }}
          />

          {/* {featured.category && (
          <span className="absolute px-2 py-1 text-xs text-white bg-blue-600 rounded top-2 left-2">
            {featured.category}
          </span>
        )} */}

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 hover:text-[#00695c] cursor-pointer transition">
              {featured.title}
            </h3>

            <div className="flex gap-4 mt-2 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {featureFormattedDate}
              </div>

              {featured.read_time && (
                <div className="flex items-center">
                  <FaEyeSlash size={14} className="mr-1" />
                  {featured.read_time}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
      {/* Latest News */}
      {latestNews.length > 0 && (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-1">
          <div className="border border-gray-200 rounded card">
            <div className="card-body max-h-[270px] overflow-y-auto px-0 pb-1 pt-0">
              {latestNews.map((news) => {
                const formattedDate = new Date(
                  news.published_at
                ).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });

                return (
                  <Link href={`/news/${featured.slug}`} key={news.id}>
                    <div className="flex items-center overflow-hidden transition bg-white shadow cursor-pointer hover:shadow-md">
                      <img
                        src={news.imageUrl || "/images/news-no-img.png"}
                        alt={news.title || "News image"}
                        className="object-cover w-32 h-32"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/images/news-no-img.png";
                        }}
                      />

                      <div className="flex-1 p-4">
                        <h4 className="text-sm font-semibold text-gray-800 leading-snug hover:text-[#00695c]">
                          {news.title}
                        </h4>

                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Calendar size={12} className="mr-1" />
                          {formattedDate}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <Link href="/news" className="text-sm font-semibold text-white hover:underline">
              <div className="card-footer">
                <div className="py-3 text-lg font-bold text-center text-white bg-gradient-to-r from-[#438ABA] to-[#438ABA]">
                  View All News
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SomeNews;
