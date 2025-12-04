// components/AllNews.tsx
import React from "react";
import Link from "next/link";

// Mock news data
const NEWS_DATA = [
  {
    title: "New version of React released today!",
    slug: "react-release",
    summary: "React 20.0 brings exciting new features for developers.",
    imageUrl: "https://placehold.co/400x200/1e40af/ffffff?text=React+News",
    category: "Tech",
  },
  {
    title: "Local team wins the championship!",
    slug: "local-team-win",
    summary: "An amazing victory for the local sports team.",
    imageUrl: "https://placehold.co/400x200/f59e0b/ffffff?text=Sports+News",
    category: "Sports",
  },
  {
    title: "Major traffic disruption in downtown area",
    slug: "traffic-disruption",
    summary: "Commuters are advised to take alternate routes.",
    imageUrl: "https://placehold.co/400x200/10b981/ffffff?text=City+News",
    category: "City",
  },
  {
    title: "Tech giant announces AI breakthrough",
    slug: "ai-breakthrough",
    summary: "A revolutionary AI system is set to change industries.",
    imageUrl: "https://placehold.co/400x200/7c3aed/ffffff?text=AI+News",
    category: "Tech",
  },
];

const AllNews: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8">
      <h1 className="mb-10 text-4xl font-bold text-center text-gray-900 ">
        All News
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {NEWS_DATA.map((news) => (
          <Link
            key={news.slug}
            href={`/news/${news.slug}`}
            className="block overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg group hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute px-2 py-1 text-xs text-white bg-blue-600 rounded top-2 left-2">
                {news.category}
              </span>
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                {news.title}
              </h2>
              <p className="text-sm text-gray-700 ">{news.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
