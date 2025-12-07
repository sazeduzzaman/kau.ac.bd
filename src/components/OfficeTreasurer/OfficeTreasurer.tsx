"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToolCase } from "lucide-react";
import OfficerCard from "../RegistrarOffice/OfficerCard";
import { FaMoneyCheckAlt } from "react-icons/fa";

interface Officer {
  id: number;
  name: string;
  designation: string;
  phone: string;
  email: string;
  image: string;
  badge?: string;
}

interface Section {
  id: string;
  title: string;
  officers: Officer[];
}

// Sample data
const officeTreasurerData: Section[] = [
  {
    id: "office-treasurer",
    title: "Treasurer",
    officers: [
      {
        id: 1,
        name: "Shamim Ahmed Kamal Uddin Khan",
        badge: "Treasurer",
        designation: "Treasurer",
        phone: "+88 0171 6169607",
        email: "samkuk_bd@yahoo.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
    ],
  },
  {
    id: "engineering-officers",
    title: "Officers",
    officers: [
      {
        id: 2,
        name: "Shaikh Imran Ahmmed",
        badge: "Officer",
        designation: "Admin Officer",
        phone: "+880 1918 050028",
        email: "kaushaikhimranahmed@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
      {
        id: 3,
        name: "Ziarul Golder",
        badge: "Officer",
        designation: "PA to Treasure",
        phone: "+880 1937 286528",
        email: "ziarul.kau@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
    ],
  },
];

export default function OfficeTreasurer() {
  const [activeTab, setActiveTab] = useState(officeTreasurerData[0].id);
  const activeSection = officeTreasurerData.find((s) => s.id === activeTab);

  const officers = activeSection?.officers || [];
  const officerCount = officers.length;
  const cardWidth = "250px";

  return (
    <div className="w-full bg-white">
      {/* Header */}
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
        <div className="absolute inset-0 bg-site-primary/50"></div>
        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-site-primary backdrop-blur-sm">
            <FaMoneyCheckAlt className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Office of the Treasurer
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            Responsible for managing financial operations, budgets, and ensuring
            transparent accounting practices across the organization.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full px-4 py-16 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center text-black">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Meet the Treasurer
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            The Treasurer is responsible for overseeing the organization's{" "}
            <br />
            financial activities, ensuring proper accounting practices,
            <br /> and maintaining accurate financial records.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-12">
          {officeTreasurerData.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                activeTab === section.id
                  ? "bg-gradient-to-r from-[#22597e] to-[#438aba] text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Officer Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-8"
          style={{
            gridTemplateColumns:
              officerCount >= 4
                ? "repeat(4, 1fr)"
                : `repeat(${officerCount}, ${cardWidth})`,
            justifyContent: "center",
          }}
        >
          {officers.map((officer) => (
            <div key={officer.id} className="flex justify-center">
              <OfficerCard officer={officer} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
