"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

interface Notice {
  id: number;
  date: string;
  title: string;
  category: string;
  isNew: boolean;
  type: string;
}

interface NoticeItemProps {
  notice: Notice;
  onClick: (notice: Notice) => void;
}

const NoticeItem: React.FC<NoticeItemProps> = ({ notice, onClick }) => {
  return (
    <div
      onClick={() => onClick(notice)}
      className="relative p-6 transition-all duration-200 bg-white border-l-4 border-transparent cursor-pointer group hover:bg-emerald-50/30 hover:border-emerald-500"
    >
      <div className="flex flex-col items-start gap-6 md:flex-row">
        {/* Date */}
        <div className="flex flex-row items-center justify-start flex-shrink-0 w-full gap-3 md:w-24 md:flex-col md:justify-center md:gap-1">
          <div className="flex flex-col items-center justify-center w-12 h-12 p-2 text-center transition-colors border border-gray-200 rounded-lg md:h-auto md:w-full bg-gray-50 group-hover:border-emerald-200 group-hover:bg-white">
            <span className="mb-1 text-xl font-bold leading-none text-gray-700 transition-colors md:text-2xl group-hover:text-emerald-600">
              {notice.date.split(" ")[0]}
            </span>
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider leading-none">
              {notice.date.split(" ")[1]}
            </span>
          </div>
          <span className="hidden mt-1 text-xs text-gray-400 md:block">
            {notice.date.split(" ")[2]}
          </span>
        </div>

        {/* Content */}
        <div className="flex-grow space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                notice.category === "Tender"
                  ? "bg-orange-50 text-orange-600 border-orange-100"
                  : notice.category === "Recruitment"
                  ? "bg-purple-50 text-purple-600 border-purple-100"
                  : notice.category === "Academic"
                  ? "bg-blue-50 text-blue-600 border-blue-100"
                  : "bg-gray-100 text-gray-600 border-gray-200"
              }`}
            >
              {notice.category}
            </span>
            {notice.isNew && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold border border-red-100 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                NEW
              </span>
            )}
          </div>

          <h3 className="text-base font-medium leading-snug text-gray-800 transition-colors md:text-lg group-hover:text-emerald-700 line-clamp-2 md:line-clamp-none">
            {notice.title}
          </h3>
        </div>

        {/* Arrow */}
        <div className="items-center self-stretch justify-center hidden h-full pl-4 border-l border-gray-100 md:flex">
          <div className="flex items-center justify-center w-8 h-8 text-gray-400 transition-all transform rounded-full bg-gray-50 group-hover:bg-emerald-500 group-hover:text-white group-hover:translate-x-1">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeItem;
