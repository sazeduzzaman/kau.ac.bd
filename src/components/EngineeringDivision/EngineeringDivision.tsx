"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToolCase } from "lucide-react";
import OfficerCard from "../RegistrarOffice/OfficerCard";

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
const engineeringDivisionData: Section[] = [
  {
    id: "engineering-chief",
    title: "Chief Engineer",
    officers: [
      {
        id: 1,
        name: "Engr. Md. Abdur Razzaque",
        badge: "Chief",
        designation: "Chief Engineer (Contractual)",
        phone: "+880 1711 280270",
        email: "razzaque63@gmail.com",
        image: "/images/office-profile/Engr.-Md.-Abdur-Razzaque.png",
      },
    ],
  },
  {
    id: "engineering-officers",
    title: "Officers",
    officers: [
      {
        id: 2,
        name: "Saifullah Haque",
        badge: "Officer",
        designation: "Assistant Engineer (Electrical)",
        phone: "+880 1794 633195",
        email: "shtanweer016@gmail.com",
        image: "/images/office-profile/Saifullah-Haque.png",
      },
      {
        id: 3,
        name: "Khan Jabid Hasan",
        badge: "Officer",
        designation: "Assistant Engineer",
        phone: "",
        email: "khanjabidhasan@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
      {
        id: 4,
        name: "Tanbibur Rahman",
        badge: "Officer",
        designation: "Assistant Engineer (Civil)",
        phone: "+880 1521 241719",
        email: "tanbibur09@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
      {
        id: 5,
        name: "Md. Monoar Kowshar",
        badge: "Officer",
        designation: "Sub-Assistant Engineer",
        phone: "+880 1722 348240",
        email: "monoar.kowshar34@gmail.com",
        image: "/images/office-profile/monoar-kowshar.png",
      },
    ],
  },
];

export default function EngineeringDivision() {
  const [activeTab, setActiveTab] = useState(engineeringDivisionData[0].id);
  const activeSection = engineeringDivisionData.find((s) => s.id === activeTab);

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
            <ToolCase className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Engineering Division
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            The Engineering Division oversees maintenance, infrastructure, and
            technical projects to ensure operational efficiency and safety
            across all facilities.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full px-4 py-16 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">Meet the Engineers</h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            The Engineering Division oversees  <br />maintenance, infrastructure, &
            technical projects.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-12">
          {engineeringDivisionData.map((section) => (
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
