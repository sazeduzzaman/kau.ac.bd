import React from "react";

const ImportantLinksSection = () => {
  const linksData = [
    {
      title: "বার্ষিক কর্মসম্পাদন চুক্তি",
      image: "/images/apa-logo.jpg",
      items: [
        "এ.পি.এ নির্দেশিকা/এ.পি.এ টিম",
        "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        "বার্ষিক কর্ম-সম্পাদন চুক্তিসমূহ",
        "এপিএমএস সফটওয়্যার লিঙ্ক",
      ],
    },
    {
      title: "জাতীয় শুদ্ধাচার কৌশল",
      image: "/images/NIS-Logo.png",
      items: [
        "কর্ম-পরিকল্পনা",
        "ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        "বাস্তবায়ন কমিটি",
        "ফোকাল পয়েন্ট কর্মকর্তাগণ",
      ],
    },
    {
      title: "উদ্ভাবনী কার্যক্রম",
      image: "/images/e-governance-and-innovation-logo.png",
      items: [
        "প্রজ্ঞাপন/নীতিমালা/নির্দেশিকা",
        "ইনোভেশন টিম",
        "বার্ষিক কর্মপরিকল্পনা/কার্যবিবরণী/অফিস আদেশ/প্রজ্ঞাপন",
        "ইনোভেশন/সেবা সহজিকরণ/ডিজিটাইজেশন",
      ],
    },
    {
      title: "অভিযোগ প্রতিকার ব্যবস্থা",
      image: "/images/GRS-Logo.png",
      items: [
        "অনিক ও আপিল কর্মকর্তা",
        "মূল্যায়ন প্রতিবেদন",
        "অভিযোগ দাখিল",
        "নীতিমালা ও নির্দেশিকা",
      ],
    },
    {
      title: "সেবা প্রদান প্রতিশ্রুতি",
      image: "/images/citizen-charter-logo.png",
      items: [
        "সাংগঠনিক কাঠামো",
        "সেবা প্রদান প্রতিশ্রুতি",
        "কর্মকাণ্ড/বার্ষিক মূল্যায়ন প্রতিবেদন",
        "ফোকাল পয়েন্ট",
      ],
    },
    {
      title: "তথ্য অধিকার",
      image: "/images/RI-Logo.png",
      items: [
        "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপীল কর্তৃপক্ষ",
        "আবেদন ও আপীল ফরম",
        "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ",
        "তথ্য অধিকার আইন/নির্দেশিকা",
      ],
    },
  ];

  return (
    <section className="px-4 py-20 bg-gradient-to-br from-[#f5faff] to-[#e9f2f8]">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center md:text-4xl text-site-primary mb-14">
          গুরুত্বপূর্ণ লিংকসমূহ
          <div className="w-32 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#fff] to-[#498dbd]" />
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {linksData.map((box, index) => (
            <div
              key={index}
              className="relative p-6 transition-all duration-300 border border-gray-200 shadow-md group bg-white/80 backdrop-blur-md rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="flex items-center justify-start mb-6">
                <div className="flex items-center justify-center transition-all duration-300 bg-white border border-gray-100 rounded-full w-28 h-28 group-hover:scale-110 group-hover:shadow-lg">
                  <img
                    src={box.image}
                    alt={box.title}
                    className="object-contain w-20 h-20"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 ps-5 text-start">
                  {box.title}
                </h3>
              </div>

              {/* Title */}

              {/* Items */}
              <ul className="space-y-2">
                {box.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-600 hover:text-[#0a4d66] transition-colors cursor-pointer text-sm font-medium group/item"
                  >
                    <span className="mt-[6px] mr-2 w-1.5 h-1.5 bg-[#498dbd] rounded-full transition-all duration-300 group-hover/item:scale-150"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover Glow Border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-[#498dbd]/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinksSection;
