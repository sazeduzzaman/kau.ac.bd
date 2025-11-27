"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2Icon, Building2, Building, UserCheck } from "lucide-react";
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
const FinanceData: Section[] = [
  {
    id: "finance-accounts", // Updated ID to match context
    title: "Office of the Director (Finance & Accounts)", // Updated Title based on roles
    officers: [
      {
        id: 1,
        name: "Murad Bellah",
        badge: "Director",
        designation: "Assistant Director",
        phone: "+880 1719 695693",
        email: "murad.bellah@gmail.com",
        // This person has a real photo in the image, so you should upload his specific photo
        image: "/images/office-profile/Murad-Bellah.png",
      },
      {
        id: 2,
        name: "Nabila Rahman",
        badge: "Officer",
        designation: "Accounts Officer",
        phone: "+880 1764 195319",
        email: "kazinabilarahman@gmail.com",
        image: "/images/office-profile/lady.png",
      },
      {
        id: 3,
        name: "Sk. Faisal Ahmed",
        badge: "Officer",
        designation: "Budget Officer",
        phone: "+880 1722 642564",
        email: "sk.faisal.kau@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
      {
        id: 4,
        name: "B.M. Islamul Haq",
        badge: "Officer",
        designation: "Section Officer",
        phone: "+880 1672 856654",
        email: "emon.islamul@gmail.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
      {
        id: 5,
        name: "Jannatun Nayem",
        badge: "Officer",
        designation: "Administrative Officer",
        phone: "+880 1741 675507",
        email: "nayemjannatun975@gmail.com",
        image: "/images/office-profile/lady.png",
      },
      {
        id: 6,
        name: "Md. Fahad Khan",
        badge: "Officer",
        designation: "Accounts Officer",
        phone: "+880 1711 461555",
        email: "kmd.fahad@yahoo.com",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
    ],
  },
];

export default function FinanceDivision() {
  // Extract officers
  const officers = FinanceData[0]?.officers || [];
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
            <Building2Icon  className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Meet Finance & Accounts Division
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed capitalize md:text-xl">
            The Finance Division oversees budgeting, accounting, and financial
            planning to ensure transparency and efficient resource management.
          </p>
        </div>
      </div>

      {/* Officer Grid */}
      <div className="w-full px-4 py-20 mx-auto max-w-7xl">
        <motion.div
          key={FinanceData[0].id}
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
