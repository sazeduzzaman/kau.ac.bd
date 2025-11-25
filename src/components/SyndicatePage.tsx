"use client";

import { UserCheck } from "lucide-react";
import React from "react";

// Types
interface Member {
  id: number;
  name: string;
  designation: string;
  organization: string;
  imageUrl?: string; // optional image
}

// Example images (replace with real ones)
const chairman = {
  name: "প্রফেসর ড. মো: নাজমুল আহসান",
  designation: "ভাইস-চ্যান্সেলর",
  organization: "খুলনা কৃষি বিশ্ববিদ্যালয়, খুলনা",
  imageUrl: "/images/no-profile.png",
};
const memberSecretary = {
  name: "ডা. মো: হেমায়াতুল ইসলাম",
  designation: "রেজিস্ট্রার (ভারপ্রাপ্ত)",
  organization: "খুলনা কৃষি বিশ্ববিদ্যালয়, খুলনা",
  imageUrl: "/images/no-profile.png",
};
const members: Member[] = [
  {
    id: 1,
    name: "জনাব মো: আব্দুল্লাহ",
    designation: "জাতীয় সংসদ সদস্য",
    organization: "স্পিকার কর্তৃক মনোনীত",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 2,
    name: "জনাব মো: করিম উদ্দিন",
    designation: "জাতীয় সংসদ সদস্য",
    organization: "স্পিকার কর্তৃক মনোনীত",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 3,
    name: "প্রো-ভাইস-চ্যান্সেলর",
    designation: "প্রশাসন বিভাগ",
    organization: "খুলনা কৃষি বিশ্ববিদ্যালয়",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 4,
    name: "প্রফেসর ড. শামীম আহমেদ",
    designation: "ট্রেজারার",
    organization: "খুলনা কৃষি বিশ্ববিদ্যালয়",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 5,
    name: "ডিন",
    designation: "ভেটেরিনারি, এনিম্যাল ও  বায়োমেডিক্যাল সায়েন্সেস অনুষদ",
    organization: "খুলনা কৃষি বিশ্ববিদ্যালয়",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 6,
    name: "ডিন",
    designation: "এগ্রিকালচার ইঞ্জিনিয়ারিং ও টেকনোলজি অনুষদ",
    organization: "খুলনা কৃষি বিশ্ববিদ্যালয়",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 7,
    name: "প্রফেসর ড. মোহাম্মদ হোসেন",
    designation: "ডিন, ফিশারিজ অনুষদ",
    organization: "জগন্নাথ বিশ্ববিদ্যালয়",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 8,
    name: "প্রফেসর ড. সৈয়দ সামসুল আলম",
    designation: "ভাইস-চ্যান্সেলর",
    organization: "বঙ্গবন্ধু শেখ মুজিবুর রহমান কৃষি বিশ্ববিদ্যালয়",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 9,
    name: "মো: মজিবুর রহমান",
    designation: "অতিরিক্ত সচিব",
    organization: "শিক্ষা মন্ত্রণালয়, ঢাকা",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 10,
    name: "ড. নাজমুন নাহার",
    designation: "নির্বাহী চেয়ারম্যান",
    organization: "বাংলাদেশ কৃষি গবেষণা কাউন্সিল",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 11,
    name: "মো: হাবিবুল আলম",
    designation: "মহাপরিচালক",
    organization: "বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 12,
    name: "ড. মো: রবিউল আলম",
    designation: "প্রধান বৈজ্ঞানিক কর্মকর্তা",
    organization: "বাংলাদেশ ধান গবেষণা ইনস্টিটিউট",
    imageUrl: "/images/no-profile.png",
  },
];

export default function SyndicatePage() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <div
        className="relative px-4 py-10 text-white bg-emerald-900 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url("/images/skyblue-footer-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 opacity-100 bg-site-primary/50"></div>
        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-site-primary backdrop-blur-sm">
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            KAU Syndicate
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white capitalize md:text-xl">
            বিশ্ববিদ্যালয়ের সিন্ডিকেট সদস্যদের তথ্য
          </p>
        </div>
      </div>

      {/* Chairman Card */}
      <div className="flex justify-center py-20">
        <div className="w-full max-w-md p-6 bg-white border border-teal-200 shadow-lg rounded-xl">
          <div className="flex flex-col items-center text-center font-surjo">
            <img
              src={chairman.imageUrl}
              alt={chairman.name}
              className="object-cover mb-4 border-2 border-teal-500 rounded-full w-28 h-28"
            />
            <div className="inline-block px-4 py-1 mb-2 text-sm font-bold text-white rounded-full bg-site-primary font-surjo">
              চেয়ারম্যান
            </div>
            <h2 className="text-xl font-semibold text-site-primary font-surjo">
              {chairman.name}
            </h2>
            <p className="pt-3 text-gray-700">{chairman.designation}</p>
            <p className="mt-1 text-sm font-semibold text-site-accent">
              {chairman.organization}
            </p>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="max-w-6xl pb-20 mx-auto">
        <h3 className="mb-6 text-2xl font-bold text-center text-site-primary">
          সদস্য
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="p-6 text-center transition-shadow bg-white border border-teal-100 shadow rounded-xl hover:shadow-xl"
            >
              {member.imageUrl && (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="object-cover w-20 h-20 mx-auto mb-4 border-2 border-teal-500 rounded-full"
                />
              )}
              <h4 className="mb-1 font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="pt-3 text-sm text-gray-600">{member.designation}</p>
              <p className="mt-1 text-xs font-semibold text-site-accent">
                {member.organization}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Member Secretary Card */}
      <div className="flex justify-center mb-20">
        <div className="w-full max-w-md p-6 bg-white border border-teal-200 shadow-lg rounded-xl">
          <div className="flex flex-col items-center text-center">
            <img
              src={memberSecretary.imageUrl}
              alt={memberSecretary.name}
              className="object-cover mb-4 border-2 border-teal-700 rounded-full w-28 h-28"
            />
            <div className="inline-block px-4 py-1 mb-2 text-sm font-bold text-white bg-teal-700 rounded-full">
              সদস্য-সচিব
            </div>
            <h2 className="text-xl font-semibold text-site-primary">
              {memberSecretary.name}
            </h2>
            <p className="pt-3 text-gray-700">{memberSecretary.designation}</p>
            <p className="mt-1 text-xs font-semibold text-site-accent">
              {memberSecretary.organization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
