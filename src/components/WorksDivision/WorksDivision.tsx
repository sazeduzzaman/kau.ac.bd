"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToolCase } from "lucide-react";
import OfficerCard from "../RegistrarOffice/OfficerCard";
import { FaMoneyCheckAlt, FaTools } from "react-icons/fa";

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
const workDivisionData: Section[] = [
  {
    id: "planning-director",
    title: "Director",
    officers: [
      {
        id: 1,
        name: "Dr. Md. Abdur Rouf",
        badge: "Director",
        designation: "Director (Contractual)",
        phone: "+880 1824 626575",
        email: "director.pnd@kau.ac.bd",
        image: "/images/office-profile/Dr.-Md.-Abdur-Rouf.jpg", // Needs real photo upload
      },
    ],
  },
  {
    id: "planning-officers",
    title: "Officers",
    officers: [
      {
        id: 2,
        name: "Shahidul Islam",
        badge: "Officer",
        designation: "Assistant Director",
        phone: "+880 1822 220054",
        email: "kbd.shahidul@kau.ac.bd",
        image: "/images/office-profile/man-in-suit-and-tie-no.png", // Needs real photo upload
      },
      {
        id: 3,
        name: "Dr. Md. Ashraful Islam",
        badge: "Officer",
        designation: "Development Officer",
        phone: "+880 1723 775780",
        email: "ashrafulvet@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
      {
        id: 4,
        name: "Md. Forkan Ahmed",
        badge: "Officer",
        designation: "Administrative Officer",
        phone: "+880 1711 858151",
        email: "ahmedronikau@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
    ],
  },
];

export default function WorksDivision() {
  const [activeTab, setActiveTab] = useState(workDivisionData[0].id);
  const activeSection = workDivisionData.find((s) => s.id === activeTab);

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
            <FaTools className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Works Division
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            Oversees construction, maintenance, and repair activities across
            campus facilities to ensure operational efficiency and safety.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full px-4 py-16 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Meet the Division
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            The Division is responsible for maintenance, and repair activities.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-12">
          {workDivisionData.map((section) => (
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
