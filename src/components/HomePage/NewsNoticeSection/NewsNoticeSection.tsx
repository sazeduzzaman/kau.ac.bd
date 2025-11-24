import React from "react";
import { Calendar, FileText, Download } from "lucide-react";

const NewsNoticeSection = () => {
  const newsData = [
    {
      id: 1,
      image: "/images/img_8234eeepz.jpg", // Placeholder for newspaper/event
      title: "খুলনা কৃষি বিশ্ববিদ্যালয়ে পরিবেশ সচেতনতায় অন্যরকম আয়োজন।",
      date: "June 11, 2024",
    },
    {
      id: 2,
      image: "/images/img_8234eeepz.jpg", // Placeholder gray image
      title:
        "খুলনা কৃষি বিশ্ববিদ্যালয়ে মাননীয় ভাইস চ্যান্সেলর পদে নিয়োগের প্রজ্ঞাপন জারি।",
      date: "May 29, 2023",
    },
    {
      id: 3,
      image: "/images/news-5.jpg", // Placeholder for APA logo
      title:
        "বাংলাদেশের ৪৬ টি পাবলিক বিশ্ববিদ্যালয়ের ২০২১-২০২২ অর্থ বছরের এপিএ মূল্যায়নে খুলনা কৃষি বিশ্ববিদ্যালয় এর অর্জন ৬ষ্ঠ (স্কোর ৮৮.৯৫)।",
      date: "May 28, 2023",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=300&h=200&fit=crop",
      title: "খুলনা কৃষি বিশ্ববিদ্যালয়ে মহান স্বাধীনতা ও জাতীয় দিবস পালন।",
      date: "May 28, 2023",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=300&h=200&fit=crop",
      title: "খুলনা কৃষি বিশ্ববিদ্যালয়ে গণহত্যা দিবসে মোমবাতি প্রজ্বলন।",
      date: "May 28, 2023",
    },
  ];

  const noticeData = [
    {
      id: 1,
      day: "01",
      month: "Oct",
      year: "2024",
      text: "কৃষি ও কৃষি প্রধান বিশ্ববিদ্যালয়সমূহের ২০২৩-২০২৪ শিক্ষাবর্ষে গুচ্ছ/সমন্বিত পদ্ধতিতে স্নাতক শ্রেণীতে ভর্তি পরীক্ষা আগামী ২৫ অক্টোবর ২০২৪ ইং সংক্রান্ত নোটিশ",
      isRed: false,
    },
    {
      id: 2,
      day: "01",
      month: "Aug",
      year: "2024",
      text: "দাপ্তরিক আইডি কার্ড প্রদানের আবেদন প্রসঙ্গে।",
      isRed: false,
    },
    {
      id: 3,
      day: "01",
      month: "Aug",
      year: "2024",
      text: "শিক্ষার্থীর আইডি কার্ড প্রদানের আবেদন প্রসঙ্গে।",
      isRed: false,
    },
    {
      id: 4,
      day: "26",
      month: "May",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের শিক্ষক নিয়োগের আবেদন ফরম (স্মারক নং ১১৬৯)।",
      isRed: true,
    },
    {
      id: 5,
      day: "26",
      month: "May",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের শিক্ষক নিয়োগ বিজ্ঞপ্তি প্রকাশ (স্মারক নং ১১৬৯)।",
      isRed: true,
    },
    {
      id: 6,
      day: "11",
      month: "May",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের শিক্ষক নিয়োগের আবেদন ফরম (স্মারক নং ১০৮১)।",
      isRed: true,
    },
    {
      id: 7,
      day: "11",
      month: "May",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের শিক্ষক নিয়োগ বিজ্ঞপ্তি প্রকাশ (স্মারক নং ১০৮১)।",
      isRed: true,
    },
    {
      id: 8,
      day: "17",
      month: "Feb",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের নিয়োগ বিজ্ঞপ্তি ০৪-০২-২০২৪ (সংশোধনী)।",
      isRed: false,
    },
    {
      id: 9,
      day: "17",
      month: "Feb",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের নিয়োগ বিজ্ঞপ্তি ০৪-০২-২০২৪ (সংশোধনী)।",
      isRed: false,
    },
    {
      id: 10,
      day: "17",
      month: "Feb",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের নিয়োগ বিজ্ঞপ্তি ০৪-০২-২০২৪ (সংশোধনী)।",
      isRed: false,
    },
    {
      id: 11,
      day: "17",
      month: "Feb",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের নিয়োগ বিজ্ঞপ্তি ০৪-০২-২০২৪ (সংশোধনী)।",
      isRed: false,
    },
    {
      id: 12,
      day: "17",
      month: "Feb",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের নিয়োগ বিজ্ঞপ্তি ০৪-০২-২০২৪ (সংশোধনী)।",
      isRed: false,
    },
  ];

  const featured = newsData[0];
  const latestNews = newsData.slice(1);
  return (
    <section className="px-4 py-16 font-sans bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* ------- SECTION TITLE ------- */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-site-primary">
            Latest News & Notices
          </h2>
          <div className="w-32 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#fff] to-[#438ABA]" />
          <p className="pt-3 leading-tight text-black font-poppins">
            Stay updated with the latest happenings and important announcements
          </p>
        </div>
        {/* ------- NEW MODERN LAYOUT ------- */}
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-2">
          {/* ------------ FEATURED NEWS (BIG CARD) ------------ */}
          <div className="col-span-1">
            <div className="flex flex-col overflow-hidden transition-all bg-white rounded-none shadow-sm hover:shadow-lg">
              <img
                src={featured.image}
                className="object-cover w-full h-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 hover:text-[#00695c] cursor-pointer transition">
                  {featured.title}
                </h3>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  {featured.date}
                </div>
              </div>
            </div>

            {/* ------ LATEST NEWS SMALL CARDS ------ */}
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1">
              <div className="border border-gray-200 rounded-t-none rounded-b-none shadow-md card">
                <div className="card-body max-h-[302px] overflow-y-auto px-0">
                  {latestNews.map((news) => (
                    <div key={news.id} className="">
                      <div className="flex items-center overflow-hidden transition bg-white shadow cursor-pointer hover:shadow-md">
                        <img
                          src={news.image}
                          className="object-cover w-32 h-32"
                        />
                        <div className="p-4">
                          <h4 className="text-sm font-semibold text-gray-800 leading-snug hover:text-[#00695c]">
                            {news.title}
                          </h4>
                          <div className="flex items-center mt-2 text-xs text-gray-500">
                            <Calendar size={12} className="mr-1" />
                            {news.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className=" card-footer">
                  <div className="py-3 text-lg font-bold text-center text-white  bg-gradient-to-r from-[#00695c] to-[#004d40]">
                    <button className="text-sm font-semibold text-white hover:underline">
                      View All Notices
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------ NOTICE BOARD (NEW DESIGN) ------------ */}
          <div className="col-span-1 overflow-hidden ">
            <div className="py-3 text-lg font-bold text-center text-white bg-gradient-to-r from-[#00695c] to-[#004d40]">
              Notice Board
            </div>

            <div className="border border-gray-200 rounded-t-none rounded-b-none shadow-md card">
              <div className="card-body max-h-[825px] overflow-y-auto px-0 pt-2">
                {/* SCROLL AREA */}
                <div className="p-4 space-y-4 custom-scrollbar">
                  {noticeData.map((notice) => (
                    <div
                      key={notice.id}
                      className="flex items-start gap-4 p-3 transition border border-gray-200 cursor-pointer bg-gray-50 hover:bg-teal-50/50"
                    >
                      {/* DATE BOX */}
                      <div className="flex flex-col items-center justify-center h-16 text-gray-800 bg-white border border-gray-300 rounded shadow-sm w-14">
                        <span className="text-sm font-bold">{notice.day}</span>
                        <span className="text-[10px] uppercase text-gray-600">
                          {notice.month}
                        </span>
                        <span className="text-[9px] text-gray-400">
                          {notice.year}
                        </span>
                      </div>

                      {/* TEXT */}
                      <div className="flex-1">
                        <p
                          className={`text-sm font-medium leading-snug ${
                            notice.isRed
                              ? "text-red-600"
                              : "text-gray-800 hover:text-[#00695c]"
                          }`}
                        >
                          {notice.text}
                        </p>
                      </div>

                      <div className="p-2 text-red-600 rounded-full bg-red-50">
                        <FileText size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <div className="py-3 text-lg font-bold text-center text-white  bg-gradient-to-r from-[#00695c] to-[#004d40]">
                  <button className="text-sm font-semibold text-white hover:underline">
                    View All Notices
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsNoticeSection;
