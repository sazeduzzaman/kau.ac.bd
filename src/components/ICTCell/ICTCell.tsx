"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
import OfficerCard from "../RegistrarOffice/OfficerCard";
import { FaHouse } from "react-icons/fa6";

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
const ictCellData: Section[] = [
  {
    id: "finance-accounts", // Updated ID to match context
    title: "ICT Cell", // Updated Title based on roles
    officers: [
      {
        id: 1,
        name: "Abdul Kaium",
        badge: "Officers",
        designation: "Assistant Registrar",
        phone: "+880 1402 425265",
        email: "makaiium09@gmail.com",
        // This person has a real photo in the image, so you should upload his specific photo
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
      {
        id: 2,
        name: "Nafisa Jabin Mila",
        badge: "Officer",
        designation: "Assistant Network Engineer",
        phone: "+880 1525 614919",
        email: "mila@kau.ac.bd",
        image: "/images/office-profile/lady.png",
      },
    ],
  },
];

export default function ICTCell() {
  // Extract officers
  const officers = ictCellData[0]?.officers || [];
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
            <FaHouse className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">ICT Cell</h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            The ICT Cell manages information and communication technology
            services, ensuring smooth digital operations and technical support
            across the organization.
          </p>
        </div>
      </div>

      {/* Officer Grid */}
      <div className="w-full px-4 py-20 mx-auto max-w-7xl">
        <motion.div
          key={ictCellData[0].id}
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
