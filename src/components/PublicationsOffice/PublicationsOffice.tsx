"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookDashed, UserCheck } from "lucide-react";
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
const publicationData: Section[] = [
  {
    id: "admin-1",
    title: "Public Relation Officer",
    officers: [
      {
        id: 1,
        name: "Saikat",
        badge: "officer",
        designation: "Public Relation Officer",
        phone: "+880 1728 694626",
        email: "aksoikat@gmail.co",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      }
    ],
  },
];

export default function PublicationsOffice() {
  // Extract officers
  const officers = publicationData[0]?.officers || [];
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
            <BookDashed className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Publications Office
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            The Publications Office manages and oversees all official
            publications, ensuring timely and accurate dissemination of
            information.
          </p>
        </div>
      </div>

      {/* Officer Grid */}
      <div className="w-full px-4 py-20 mx-auto max-w-7xl">
        <motion.div
          key={publicationData[0].id}
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
