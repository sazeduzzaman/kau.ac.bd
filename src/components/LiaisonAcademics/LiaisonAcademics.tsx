"use client";

import React from "react";
import { motion } from "framer-motion";
import OfficerCard from "../RegistrarOffice/OfficerCard";
import { FaRegHeart } from "react-icons/fa6";
import { GraduationCap } from "lucide-react";

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
const LiaisonAcademicsData: Section[] = [
  {
    id: "medical-center-officers",
    title: "Officers",
    officers: [
      {
        id: 1,
        name: "Md. Khirul Bashar Riaz",
        badge: "Officers",
        designation: "Coordinating Officer",
        phone: "+880 1731 490889",
        email: "kbriaz84@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png", // Needs real photo upload
      },
      {
        id: 2,
        name: "Md. Najmul Haque",
        badge: "Officer",
        designation: "Coordinating Officer",
        phone: "+880 1731 837043",
        email: "nhaque557@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png", // Placeholder image based on screenshot
      },
    ],
  },
];

export default function LiaisonAcademics() {
  // Extract officers
  const officers = LiaisonAcademicsData[0]?.officers || [];
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
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Liaison (Academics)
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            The Liaison (Academics) unit facilitates communication and
            coordination
            <br />
            between academic departments, ensuring smooth academic processes,
            <br />
            timely support, and efficient service delivery.
          </p>
        </div>
      </div>

      {/* Officer Grid */}
      <div className="w-full px-4 py-20 mx-auto max-w-7xl">
        <motion.div
          key={LiaisonAcademicsData[0].id}
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
