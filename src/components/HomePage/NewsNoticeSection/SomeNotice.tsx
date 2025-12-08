"use client";
import { Notice } from "@/lib/types/NoticesDataSetTypes/NoticesDataSetTypes";
import { FileText } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

interface SomeNoticeProps {
  noticesData: Notice[];
}

const SomeNotice = ({ noticesData }: SomeNoticeProps) => {
  // Extract unique categories
  const categories = useMemo(() => {
    const all = ["All"];
    const unique = Array.from(
      new Set(noticesData.map((n) => n.category || ""))
    );
    return [...all, ...unique];
  }, [noticesData]);

  // Selected tab
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtered Notices
  const filteredNotices = useMemo(() => {
    if (activeCategory === "All") return noticesData;
    return noticesData.filter((n) => n.category === activeCategory);
  }, [activeCategory, noticesData]);

  return (
    <div className="col-span-1 overflow-hidden">
      {/* Header */}
      <div className="py-3 text-lg font-bold text-center text-white bg-gradient-to-r from-[#00695c] to-[#004d40]">
        Notice Board
      </div>

      {/* Category Tabs – full width, auto-adjust */}
      <div className="w-full bg-gray-300">
        <div className="flex w-full p-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
          flex-1 px-4 py-3 text-sm font-semibold text-center transition-all duration-300
          border-r border-gray-200 last:border-r-0
          ${
            activeCategory === cat
              ? "bg-gradient-to-r from-[#00695c] to-[#004d40] text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }
        `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notice Cards */}
      <div className="border border-gray-200 rounded shadow-md card h-[720px]">
        <div className="card-body max-h-[825px] overflow-y-auto px-0 pt-2">
          <div className="p-4 space-y-4 custom-scrollbar">
            {filteredNotices.length === 0 && (
              <p className="py-10 text-center text-gray-500">
                No notices found.
              </p>
            )}

            {filteredNotices.map((notice) => {
              const date = new Date(notice.publish_date);
              const day = date.getDate().toString().padStart(2, "0");
              const month = date
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase();
              const year = date.getFullYear();

              return (
                <Link
                  key={notice.id}
                  href={`/all-notice/${notice.slug}`}
                  className="flex items-center gap-4 p-3 transition border border-gray-200 cursor-pointer bg-gray-50 hover:bg-teal-50/50"
                >
                  {/* DATE BOX */}
                  <div className="flex flex-col items-center justify-center h-16 text-gray-800 bg-white border border-gray-300 rounded shadow-sm w-14">
                    <span className="text-sm font-bold">{day}</span>
                    <span className="text-[10px] uppercase text-gray-600">
                      {month}
                    </span>
                    <span className="text-[9px] text-gray-400">{year}</span>
                  </div>

                  {/* TITLE + FILE */}
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-snug text-gray-800 hover:text-[#00695c]">
                      {notice.title}
                    </p>

                    {notice.first_attachment && (
                      <span className="inline-flex items-center gap-1 mt-1 text-xs text-blue-600 hover:underline">
                        <FileText size={12} />
                        Download Attachment
                      </span>
                    )}
                    <br />
                    <span className="text-site-primary">{notice.category}</span>
                  </div>

                  <div className="p-2 text-red-600 rounded-full bg-red-50">
                    <FileText size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <Link
          href="/all-notice"
          className="text-sm font-semibold text-white hover:underline"
        >
          <div className="card-footer">
            <div className="py-3 text-lg font-bold text-center text-white bg-gradient-to-r from-[#00695c] to-[#004d40]">
              View All Notices
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SomeNotice;
