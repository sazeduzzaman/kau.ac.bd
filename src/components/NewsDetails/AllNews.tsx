"use client";
import React from "react";
import Link from "next/link";
import { NewsItem } from "@/lib/types/NewsDataSetTypes/NewsDataSetTypes";

interface AllNewsProps {
  newsData: NewsItem[];
}

const AllNews: React.FC<AllNewsProps> = ({ newsData }) => {
  console.log(newsData, "newsData main");
  if (!newsData || newsData.length === 0) {
    return (
      <div className="min-h-screen px-4 py-12 text-center text-gray-500">
        <h1 className="text-4xl font-bold">No News Found</h1>
        <p className="mt-2 text-gray-700">
          There is no news to display at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8">
      <h1 className="mb-10 text-4xl font-bold text-center text-gray-900">
        All News
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {newsData.map((news) => (
          <Link
            key={news.id}
            href={`/news/${news?.slug}`}
            className="block overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg group hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={
                  news.thumb_image
                    ? `https://administration.kau.ac.bd/storage/${news.thumb_image}`
                    : "/images/news-no-img.png"
                }
                alt={news.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/news-no-img.png";
                }}
              />
              {news.category && (
                <span className="absolute px-2 py-1 text-xs text-white bg-blue-600 rounded top-2 left-2">
                  {news.category}
                </span>
              )}
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                {news.title}
              </h2>
              <p className="text-sm text-gray-700">
                {news.summary || "No summary available."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
