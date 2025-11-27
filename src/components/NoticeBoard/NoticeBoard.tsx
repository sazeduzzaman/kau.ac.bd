"use client";
import React, { useState } from "react";
import { Search, Bell } from "lucide-react";
import NoticeItem from "./NoticeItem";
import NoticeModal from "./NoticeModal";

const noticesData = [
  {
    id: 1,
    date: "16 Sept 2025",
    title:
      "২০২৪-২৫ শিক্ষাবর্ষে ভর্তিকৃত শিক্ষার্থীদের ওরিয়েন্টেশন এবং শিক্ষা কার্যক্রম আগামী ২৪/০৯/২০২৫ তারিখ রোজ বুধবার সকাল ০৯:৩০ ঘটিকায় খুলনা কৃষি বিশ্ববিদ্যালয়ের অস্থায়ী ক্যাম্পাস-১ (দৌলতপুর কলেজিয়েট স্কুল, দেয়ানা, মধ্যপাড়া), দৌলতপুর, খুলনা-৯২০২ এ অনুষ্ঠিত হবে।",
    category: "Academic",
    isNew: true,
    type: "notice",
  },
  {
    id: 2,
    date: "16 Sept 2025",
    title:
      "Tender Notice: Procurement of AC, Computer and Computer related parts (ID: 1151136 , Published Date & Time: September 16, 2025, 10:30 am; Closing Date & Time: September 30, 2025, 12:30 pm)",
    category: "Tender",
    isNew: true,
    type: "pdf",
  },
  {
    id: 3,
    date: "03 Sept 2025",
    title: "শিক্ষার্থীদের প্রাতিষ্ঠানিক মেইল প্রদানের নোটিশ ও আবেদন পত্র",
    category: "General",
    isNew: false,
    type: "pdf",
  },
  {
    id: 4,
    date: "02 Sept 2025",
    title:
      "বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশনের অর্থায়নে পরিচালিত ২০২৫-২০২৬ অর্থবছরের জন্য গবেষণা প্রস্তাবনার আবেদনের doc. file",
    category: "Research",
    isNew: false,
    type: "doc",
  },
  {
    id: 5,
    date: "02 Sept 2025",
    title:
      "বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশনের অর্থায়নে পরিচালিত ২০২৫-২০২৬ অর্থবছরের জন্য গবেষণা প্রস্তাবনা আহ্বান",
    category: "Research",
    isNew: false,
    type: "pdf",
  },
  {
    id: 6,
    date: "31 Aug 2025",
    title:
      "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (সরাসরি) নিয়োগের আবেদন ফরম word file (.doc format) (স্মারক নং ১১৪৭ - সময় বর্ধিতকরণ)",
    category: "Recruitment",
    isNew: false,
    type: "doc",
  },
  {
    id: 7,
    date: "31 Aug 2025",
    title:
      "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (চুক্তিভিত্তিক) নিয়োগের আবেদন ফরম word file (.doc format) (স্মারক নং ১১৪৭ - সময় বর্ধিতকরণ)",
    category: "Recruitment",
    isNew: false,
    type: "doc",
  },
  {
    id: 8,
    date: "31 Aug 2025",
    title:
      "খুলনা কৃষি বিশ্ববিদ্যালয়ের কর্মকর্তা (সরাসরি) নিয়োগের আবেদন ফরম, নিয়োগের যোগ্যতা ও অভিজ্ঞতা এবং অন্যান্য শর্তাবলী (স্মারক নং ১১৪৭ - সময় বর্ধিতকরণ)",
    category: "Recruitment",
    isNew: false,
    type: "pdf",
  },
];

const categories = ["All", "Academic", "Tender", "Recruitment", "Research"];

const NoticeBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState<any>(null);

  const filteredNotices = noticesData.filter((notice) => {
    const matchesSearch = notice.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || notice.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pb-12 font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <div className="relative py-20 overflow-hidden text-white bg-gradient-to-r from-emerald-700 to-teal-700">
        <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-400/20 blur-2xl"></div>

        <div className="container relative z-10 px-4 py-10 mx-auto md:py-14">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-5 h-5 text-emerald-200 animate-pulse" />
                <span className="text-sm font-medium tracking-wider uppercase text-emerald-200">
                  Announcements
                </span>
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">
                Notice Board
              </h1>
              <p className="max-w-2xl text-lg text-emerald-100/90">
                Stay connected with the latest academic updates, tenders, and
                official announcements from KAU.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="px-6 py-4 border bg-white/10 backdrop-blur-md rounded-xl border-white/20">
                <div className="mb-1 text-sm font-medium text-emerald-100">
                  Total Notices
                </div>
                <div className="text-4xl font-bold text-center">{noticesData.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container relative z-20 px-4 mx-auto -mt-25">
        <div className="overflow-hidden bg-white border border-gray-100 shadow rounded-xl">
          {/* Controls */}
          <div className="sticky top-0 z-30 p-6 bg-white border-b border-gray-100">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="relative w-full lg:w-96 group">
                <Search className="absolute w-5 h-5 text-gray-400 transition-colors transform -translate-y-1/2 left-3 top-1/2 group-focus-within:text-emerald-500" />
                <input
                  type="text"
                  placeholder="Search notices by title..."
                  className="w-full py-3 pl-10 pr-4 text-sm transition-all border border-gray-200 rounded-lg outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-gray-50 focus:bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex w-full gap-2 pb-2 overflow-x-auto lg:w-auto lg:pb-0 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                      activeCategory === cat
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm"
                        : "bg-white text-gray-500 border-transparent hover:bg-gray-50 hover:text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Notice List */}
          <div className="divide-y divide-gray-100">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <NoticeItem
                  key={notice.id}
                  notice={notice}
                  onClick={setSelectedNotice}
                />
              ))
            ) : (
              <div className="py-20 text-center text-gray-500 bg-gray-50/50">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white border border-gray-100 rounded-full shadow-sm">
                  <Search className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="mb-1 text-lg font-medium text-gray-900">
                  No notices found
                </h3>
                <p className="text-sm">
                  We couldn't find anything matching "{searchTerm}"
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="mt-4 text-sm font-medium text-emerald-600 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination Footer */}
          <div className="flex flex-col items-center justify-between gap-4 p-4 border-t border-gray-100 bg-gray-50 sm:flex-row">
            <span className="text-xs text-gray-500">
              Showing {filteredNotices.length} entries
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-md bg-white border border-gray-200 text-gray-400 text-sm cursor-not-allowed">
                Previous
              </button>
              <button className="px-3 py-1.5 rounded-md bg-emerald-600 border border-emerald-600 text-white text-sm font-medium shadow-sm">
                1
              </button>
              <button className="px-3 py-1.5 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300 text-sm transition-colors">
                2
              </button>
              <button className="px-3 py-1.5 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300 text-sm transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedNotice && (
        <NoticeModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      )}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default NoticeBoard;
