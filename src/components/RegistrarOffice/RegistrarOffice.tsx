"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
import OfficerCard from "./OfficerCard";

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

// Sample data for sections and officers
const registrarData: Section[] = [
  {
    id: "admin-1",
    title: "Registrar Office",
    officers: [
      {
        id: 1,
        name: "Md. Rezaul Islam",
        badge: "Registrar",
        designation: "Registrar (In Charge)",
        phone: "+880 1309 000313",
        email: "registrar@kau.ac.bd",
        image: "/images/office-profile/MD-REZAUL-ISLAM.jpg",
      },
      {
        id: 2,
        name: "Abdul Motin",
        badge: "Officer",
        designation: "Administrative officer",
        phone: "+880 1732-705047",
        email: "matin@kau.ac.bd",
        image: "/images/office-profile/Abdul-Matin.jpg",
      },
      {
        id: 3,
        name: "Md. Nazmul Hassan",
        badge: "Officer",
        designation: "Administrative officer",
        phone: "+880 1934 257863",
        email: "nazmul@kau.edu.bd",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
      {
        id: 4,
        name: "Md. Nazmul Hassan",
        badge: "Officer",
        designation: "Administrative officer",
        phone: "+880 1934 257863",
        email: "nazmul@kau.edu.bd",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
    ],
  },
  {
    id: "admin-2",
    title: "Administrative 1",
    officers: [
      {
        id: 5,
        name: "Muhammad Ali",
        badge: "Section",
        designation: "Section Officer",
        phone: "+880 1711 942311",
        email: "mali942311@gmail.com",
        image: "/images/office-profile/Md.-Al-Mahmud.png",
      },
      {
        id: 6,
        name: "Satyam Roy",
        badge: "Admin",
        designation: "Administrative Officer",
        phone: "+880 1951 982325",
        email: "satyam.marketting@gmail.com",
        image: "/images/office-profile/Satyam-Roy.jpg",
      },
    ],
  },
  {
    id: "admin-3",
    title: "Administrative 2",
    officers: [
      {
        id: 7,
        name: "Sharmin Parvin",
        badge: "Officer",
        designation: "Section Officer",
        phone: "+880 1711 458899",
        email: "sharmin4514@gmail.com",
        image: "/images/office-profile/lady.png",
      },
      {
        id: 8,
        name: "Satyam Roy",
        badge: "Admin",
        designation: "Administrative Officer",
        phone: "+880 1951 982325",
        email: "satyam.marketting@gmail.com",
        image: "/images/office-profile/lady.png",
      },
      {
        id: 9,
        name: "Shekhore Biswas",
        badge: "Admin",
        designation: "Administrative Officer",
        phone: "+880 1521331074",
        email: "shekhore@kau.ac.bd",
        image: "/images/office-profile/Shekhore-Biswas.jpg",
      },
    ],
  },
];

export default function RegistrarTeamCards() {
  // Track which section is active
  const [activeTab, setActiveTab] = useState(registrarData[0].id);
  const activeSection = registrarData.find((s) => s.id === activeTab);

  // All officers in the active section
  const rowItems = activeSection?.officers || [];
  const rowCount = rowItems.length;

  // Width of each card, used to center smaller rows
  const cardWidth = "250px"; // Adjust to match OfficerCard width

  return (
    <>
      {/* Header Section */}
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
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Registered Office
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            Meet our dedicated team at the Registrar's Office, <br /> committed
            to providing exceptional administrative support and services.
          </p>
        </div>
      </div>

      {/* Section: Office Team */}
      <div className="w-full px-4 py-16 mx-auto bg-white max-w-7xl">
        {/* Section Heading */}
        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">Meet the Team</h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            Get to know the dedicated professionals
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {registrarData.map((section) => (
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
            // If 4 or more items, use 4 columns (1fr each)
            // If less than 4, create as many columns as items and center them
            gridTemplateColumns:
              rowCount >= 4
                ? "repeat(4, 1fr)"
                : `repeat(${rowCount}, ${cardWidth})`,
            justifyContent: "center", // centers smaller rows
          }}
        >
          {rowItems.map((officer) => (
            <div key={officer.id} className="flex justify-center">
              <OfficerCard officer={officer} />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
