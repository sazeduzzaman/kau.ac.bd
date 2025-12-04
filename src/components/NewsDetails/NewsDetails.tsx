// components/NewsDetailsSimple.tsx
"use client";

import { useState, useEffect } from "react";
import { Clock, Calendar, User, BookOpen, CornerUpLeft } from "lucide-react";

interface NewsDetailsProps {
  slug: string;
  onBack?: () => void;
}

interface Article {
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
  summary: string;
  content: string[];
  tags: string[];
}

// Mock/static article data
const MOCK_ARTICLE: Article = {
  category: "News",
  date: "December 4, 2025",
  author: "News Desk",
  readTime: "4 min read",
  imageUrl: "https://placehold.co/1000x500/1e40af/ffffff?text=News+Image",
  summary:
    "This is a brief summary of the news article, providing context and a quick overview.",
  content: [
    "This is the introduction paragraph for the article. It gives a brief overview of the news content, providing context and drawing the reader in.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula mauris ac dui convallis, sit amet scelerisque libero hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "Aliquam erat volutpat. Curabitur in ex nec urna facilisis mollis. Integer vel felis in ex hendrerit laoreet sed id nulla. Suspendisse potenti.",
    "Concluding remarks: summarize the key points of the news and, if relevant, include quotes, insights, or call-to-action for the reader.",
  ],
  tags: ["Breaking", "News", "Exclusive"],
};

// Client-only share button
const ShareButton = () => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleShare = () => {
    if (!url) return;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleShare}
      className={`mt-4 inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white rounded-lg shadow ${
        copied ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
      } transition-colors`}
    >
      {copied ? "Link Copied!" : "Share"}
    </button>
  );
};

const NewsDetailsSimple: React.FC<NewsDetailsProps> = ({ slug, onBack }) => {
  // Dynamic title from slug
  const title = slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  const article = MOCK_ARTICLE;

  return (
    <div className="py-20 bg-white">
      <div className="container p-0 mx-auto font-sans ">
        {/* Back Button */}
        {onBack && (
          <button
            className="mb-6 text-sm text-blue-600 hover:underline"
            onClick={onBack}
          >
            <CornerUpLeft className="w-4 h-4 mr-1" /> Back
          </button>
        )}

        {/* Grid Layout: Left = Image, Right = Content */}
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left Column: Featured Image */}
          <figure className="w-full overflow-hidden shadow-lg rounded-2xl">
            <img
              src={article.imageUrl}
              alt={title}
              className="object-cover w-full h-64 transition-transform duration-500 sm:h-96 hover:scale-105"
            />
          </figure>

          {/* Right Column: Title, Metadata, Summary, Share */}
          <div className="flex flex-col justify-start">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {article.category}
              </div>
            </div>

            {/* Summary */}
            <p className="pl-4 mb-6 italic text-gray-700 border-l-4 border-blue-600">
              {article.summary}
            </p>

            <div className="flex items-center justify-start">
              {/* Share Button */}
              <ShareButton />
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-5 ms-5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Full Content */}
            <article className="mt-12 space-y-6 text-lg leading-relaxed text-gray-800">
              {article.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsSimple;
