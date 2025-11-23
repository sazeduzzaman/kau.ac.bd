import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Lightbulb, 
  MessageSquareQuote, 
  Handshake, 
  Network, 
  ChevronRight 
} from 'lucide-react';

const ImportantLinksSection = () => {
  const linksData = [
    {
      title: "বার্ষিক কর্মসম্পাদন চুক্তি",
      icon: <TrendingUp size={48} className="text-green-600" />,
      items: [
        "এ.পি.এ নির্দেশিকা/এ.পি.এ টিম",
        "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        "বার্ষিক কর্ম-সম্পাদন চুক্তিসমূহ",
        "এপিএমএস সফটওয়্যার লিঙ্ক"
      ]
    },
    {
      title: "জাতীয় শুদ্ধাচার কৌশল",
      icon: <ShieldCheck size={48} className="text-yellow-600" />,
      items: [
        "কর্ম-পরিকল্পনা",
        "ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        "বাস্তবায়ন কমিটি",
        "ফোকাল পয়েন্ট কর্মকর্তাগণ"
      ]
    },
    {
      title: "উদ্ভাবনী কার্যক্রম",
      icon: <Lightbulb size={48} className="text-purple-600" />,
      items: [
        "প্রজ্ঞাপন/নীতিমালা/নির্দেশিকা",
        "ইনোভেশন টিম",
        "বার্ষিক কর্মপরিকল্পনা/কার্যবিবরণী/অফিস আদেশ/প্রজ্ঞাপন",
        "ইনোভেশন/সেবা সহজিকরণ/ডিজিটাইজেশন"
      ]
    },
    {
      title: "অভিযোগ প্রতিকার ব্যবস্থা",
      icon: <MessageSquareQuote size={48} className="text-purple-700" />,
      items: [
        "অনিক ও আপিল কর্মকর্তা",
        "মূল্যায়ন প্রতিবেদন",
        "অভিযোগ দাখিল",
        "নীতিমালা ও নির্দেশিকা"
      ]
    },
    {
      title: "সেবা প্রদান প্রতিশ্রুতি",
      icon: <Handshake size={48} className="text-green-500" />,
      items: [
        "সাংগঠনিক কাঠামো",
        "সেবা প্রদান প্রতিশ্রুতি",
        "কর্মকাণ্ড/বার্ষিক মূল্যায়ন প্রতিবেদন",
        "ফোকাল পয়েন্ট"
      ]
    },
    {
      title: "তথ্য অধিকার",
      icon: <Network size={48} className="text-purple-600" />,
      items: [
        "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপীল কর্তৃপক্ষ",
        "আবেদন ও আপীল ফরম",
        "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ",
        "তথ্য অধিকার আইন/নির্দেশিকা"
      ]
    }
  ];

  return (
    <section className="px-4 py-16 font-sans bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {linksData.map((box, index) => (
            <div 
              key={index} 
              className="flex items-start gap-6 p-6 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center flex-shrink-0 pt-2">
                 <div className="p-3 rounded-full bg-gray-50">
                   {box.icon}
                 </div>
              </div>

              {/* Content Container */}
              <div className="flex-grow">
                <h3 className="pb-2 mb-4 text-xl font-bold text-gray-800 border-b border-gray-100">
                  {box.title}
                </h3>
                <ul className="space-y-2">
                  {box.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 hover:text-[#004d40] transition-colors cursor-pointer text-sm font-medium">
                      <ChevronRight className="w-4 h-4 mt-1 mr-2 text-[#004d40] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinksSection;