import React from 'react';
import { Calendar, FileText, Download } from 'lucide-react';

const NewsNoticeSection = () => {
  const newsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=300&h=200&fit=crop", // Placeholder for newspaper/event
      title: "খুলনা কৃষি বিশ্ববিদ্যালয়ে পরিবেশ সচেতনতায় অন্যরকম আয়োজন।",
      date: "June 11, 2024"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200?text=KAU+VC+Appointment", // Placeholder gray image
      title: "খুলনা কৃষি বিশ্ববিদ্যালয়ে মাননীয় ভাইস চ্যান্সেলর পদে নিয়োগের প্রজ্ঞাপন জারি।",
      date: "May 29, 2023"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200?text=APA", // Placeholder for APA logo
      title: "বাংলাদেশের ৪৬ টি পাবলিক বিশ্ববিদ্যালয়ের ২০২১-২০২২ অর্থ বছরের এপিএ মূল্যায়নে খুলনা কৃষি বিশ্ববিদ্যালয় এর অর্জন ৬ষ্ঠ (স্কোর ৮৮.৯৫)।",
      date: "May 28, 2023"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=300&h=200&fit=crop", 
      title: "খুলনা কৃষি বিশ্ববিদ্যালয়ে মহান স্বাধীনতা ও জাতীয় দিবস পালন।",
      date: "May 28, 2023"
    },
     {
      id: 5,
      image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=300&h=200&fit=crop", 
      title: "খুলনা কৃষি বিশ্ববিদ্যালয়ে গণহত্যা দিবসে মোমবাতি প্রজ্বলন।",
      date: "May 28, 2023"
    }
  ];

  const noticeData = [
    {
      id: 1,
      day: "01",
      month: "Oct",
      year: "2024",
      text: "কৃষি ও কৃষি প্রধান বিশ্ববিদ্যালয়সমূহের ২০২৩-২০২৪ শিক্ষাবর্ষে গুচ্ছ/সমন্বিত পদ্ধতিতে স্নাতক শ্রেণীতে ভর্তি পরীক্ষা আগামী ২৫ অক্টোবর ২০২৪ ইং সংক্রান্ত নোটিশ",
      isRed: false
    },
    {
      id: 2,
      day: "01",
      month: "Aug",
      year: "2024",
      text: "দাপ্তরিক আইডি কার্ড প্রদানের আবেদন প্রসঙ্গে।",
      isRed: false
    },
    {
      id: 3,
      day: "01",
      month: "Aug",
      year: "2024",
      text: "শিক্ষার্থীর আইডি কার্ড প্রদানের আবেদন প্রসঙ্গে।",
      isRed: false
    },
    {
      id: 4,
      day: "26",
      month: "May",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের শিক্ষক নিয়োগের আবেদন ফরম (স্মারক নং ১১৬৯)।",
      isRed: true
    },
    {
      id: 5,
      day: "26",
      month: "May",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের শিক্ষক নিয়োগ বিজ্ঞপ্তি প্রকাশ (স্মারক নং ১১৬৯)।",
      isRed: true
    },
    {
      id: 6,
      day: "11",
      month: "May",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের শিক্ষক নিয়োগের আবেদন ফরম (স্মারক নং ১০৮১)।",
      isRed: true
    },
    {
      id: 7,
      day: "11",
      month: "May",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের শিক্ষক নিয়োগ বিজ্ঞপ্তি প্রকাশ (স্মারক নং ১০৮১)।",
      isRed: true
    },
     {
      id: 8,
      day: "17",
      month: "Feb",
      year: "2024",
      text: "খুলনা কৃষি বিশ্ববিদ্যালয়ের নিয়োগ বিজ্ঞপ্তি ০৪-০২-২০২৪ (সংশোধনী)।",
      isRed: false
    }
  ];

  return (
    <section className="px-4 py-12 font-sans bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* --- News & Events Column --- */}
          <div className="flex flex-col h-full overflow-hidden bg-white rounded-t-lg shadow-lg">
            <div className="bg-[#004d40] text-white py-3 px-6 text-center text-xl font-bold">
              News & Events
            </div>
            
            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto h-[600px] p-4 border-x border-b border-gray-200 custom-scrollbar">
              <div className="space-y-6">
                {newsData.map((news) => (
                  <div key={news.id} className="cursor-pointer group">
                    <div className="mb-3 overflow-hidden border border-gray-200 rounded-md">
                      <img 
                        src={news.image} 
                        alt="News Thumbnail" 
                        className="object-cover w-full h-48 transition-transform duration-500 transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold text-sm md:text-base leading-snug mb-2 group-hover:text-[#004d40] transition-colors">
                        {news.title}
                      </h3>
                      <div className="flex items-center text-xs font-medium text-gray-500">
                        <Calendar size={12} className="mr-1" />
                        {news.date}
                      </div>
                    </div>
                    <div className="h-px mt-6 bg-gray-100" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-2 text-center border-t border-gray-200 bg-gray-50">
               <button className="text-sm font-semibold text-[#004d40] hover:underline">View All News</button>
            </div>
          </div>

          {/* --- Notice Column --- */}
          <div className="flex flex-col h-full overflow-hidden bg-white rounded-t-lg shadow-lg">
            <div className="bg-[#004d40] text-white py-3 px-6 text-center text-xl font-bold">
              Notice
            </div>
            
            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto h-[600px] border-x border-b border-gray-200 custom-scrollbar bg-white">
               {/* Optional Notice Tabs (Visual only based on image) */}
               <div className="flex text-xs font-medium text-gray-500 border-b border-gray-200 bg-gray-50">
                 <div className="px-3 py-2 border-r border-gray-200 hover:text-[#004d40] cursor-pointer">Office Order</div>
                 <div className="px-3 py-2 hover:text-[#004d40] cursor-pointer">NOC</div>
               </div>

              <div className="p-2">
                {noticeData.map((notice) => (
                  <div key={notice.id} className="flex items-start gap-3 p-3 transition-colors border-b border-gray-100 cursor-pointer last:border-0 hover:bg-teal-50/30 group">
                    
                    {/* Date Box */}
                    <div className="flex flex-col items-center justify-center flex-shrink-0 h-16 bg-white border border-gray-300 rounded shadow-sm w-14">
                      <span className="text-xs font-medium text-gray-600">{notice.day}</span>
                      <span className="text-[10px] uppercase text-gray-500">{notice.month}</span>
                      <span className="text-[10px] text-gray-400">{notice.year}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow pt-1">
                      <p className={`text-sm leading-snug font-medium ${notice.isRed ? 'text-red-600' : 'text-gray-800 group-hover:text-[#004d40]'}`}>
                        {notice.text}
                      </p>
                    </div>

                    {/* PDF Icon */}
                    <div className="flex-shrink-0 pt-2">
                      <div className="p-1.5 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                         <FileText size={16} />
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
            <div className="p-2 text-center border-t border-gray-200 bg-gray-50">
               <button className="text-sm font-semibold text-[#004d40] hover:underline">View All Notices</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsNoticeSection;