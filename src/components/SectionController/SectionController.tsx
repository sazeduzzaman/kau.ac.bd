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
const sectionControllerData: Section[] = [
  {
    id: "controller-head",
    title: "Controller of Examination",
    officers: [
      {
        id: 1,
        name: "Mohammed Shahid Ali",
        badge: "Controller",
        designation: "Controller of Examinations",
        phone: "+880 1739 330733",
        email: "msalice@kau.ac.bd",
        image: "/images/office-profile/Mohammed-Shahid-Al.png", // Needs real photo upload
      },
    ],
  },
  {
    id: "controller-officers",
    title: "Officers",
    officers: [
      {
        id: 2,
        name: "Md. Rezaul Islam",
        badge: "Deputy Controller",
        designation: "Deputy Controller of Examination",
        phone: "+880 1309 000313",
        email: "reza@kau.ac.bd",
        image: "/images/office-profile/MD-REZAUL-ISLAM.jpg", // Needs real photo upload
      },
      {
        id: 3,
        name: "Anamul Kabir",
        badge: "Officer",
        designation: "Assistant Registrar",
        phone: "+880 1711 676139",
        email: "anamul@kau.edu.bd",
        image: "/images/office-profile/Anamul-Kabir.jpg", // Needs real photo upload
      },
      {
        id: 4,
        name: "Dabobrata Kumar Swar",
        badge: "Officer",
        designation: "Section Officer",
        phone: "+880 1723 609661",
        email: "dabobratawar@gmail.com",
        image: "/images/office-profile/Dabobrata-Kumar-Swar.png", // Needs real photo upload
      },
      {
        id: 5,
        name: "Md. Rasel Hasan",
        badge: "Officer",
        designation: "Administrative Officer",
        phone: "+880 1911 782954",
        email: "raselhasan.kau@gmail.com",
        image: "/images/office-profile/Md.-Rasel-Hasan.jpg", // Needs real photo upload
      },
      {
        id: 6,
        name: "Md Khabir Uddin",
        badge: "Officer",
        designation: "Administrative Officer",
        phone: "+880 1712 777435",
        email: "khabir@kau.ac.bd",
        image: "/images/office-profile/MD.-Khabir-Uddin.jpg", // Needs real photo upload
      },
    ],
  },
];

export default function SectionController() {
  const [activeTab, setActiveTab] = useState(sectionControllerData[0].id);
  const activeSection = sectionControllerData.find((s) => s.id === activeTab);

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
            Controller Section
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            Ensures accurate financial reporting, oversees compliance, and
            maintains accountability in all organizational financial activities.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full px-4 py-16 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Meet the Controller
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            The Controller supervises financial records, monitors internal
            controls,
            <br />
            ensures regulatory compliance, and supports transparent fiscal
            <br />
            management across the institution.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-12">
          {sectionControllerData.map((section) => (
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
