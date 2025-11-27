"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
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
const councilData: Section[] = [
  {
    id: "admin-1",
    title: "Council Office",
    officers: [
      {
        id: 1,
        name: "Delwar Hossain",
        badge: "Section officer",
        designation: "Officers",
        phone: "+880 1521 576582",
        email: "delwar@kau.ac.bd",
        image: "/images/office-profile/Delwar-Hossain.jpg",
      },
      {
        id: 2,
        name: "Delwar Hossain",
        badge: "Section officer",
        designation: "Officers",
        phone: "+880 1521 576582",
        email: "delwar@kau.ac.bd",
        image: "/images/office-profile/Delwar-Hossain.jpg",
      },
      {
        id: 3,
        name: "Delwar Hossain",
        badge: "Section officer",
        designation: "Officers",
        phone: "+880 1521 576582",
        email: "delwar@kau.ac.bd",
        image: "/images/office-profile/Delwar-Hossain.jpg",
      },
    ],
  },
];

export default function CouncilOfficePage() {
  // Extract officers
  const officers = councilData[0]?.officers || [];
  const officerCount = officers.length;

  // Width of each card, used to center smaller rows
  const cardWidth = "250px"; // Adjust to match OfficerCard width

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
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Meet The Council
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            Get to know the dedicated professionals <br /> who ensure the smooth
            functioning of our council office.
          </p>
        </div>
      </div>

      {/* Officer Grid */}
      <div className="w-full px-4 py-20 mx-auto max-w-7xl">
        <motion.div
          key={councilData[0].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-8"
          style={{
            // Use 4 columns always, but center fewer items
            gridTemplateColumns:
              officerCount >= 4
                ? "repeat(4, 1fr)" // 4 columns if 4+ officers
                : `repeat(${officerCount}, ${cardWidth})`, // Center if less than 4
            justifyContent: "center", // centers row
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
