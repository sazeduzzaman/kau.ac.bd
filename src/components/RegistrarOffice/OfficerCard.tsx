"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

interface Officer {
  name: string;
  designation: string;
  phone: string;
  email: string;
  image: string;
  badge?: string;
}

interface OfficerCardProps {
  officer: Officer;
}

export default function OfficerCard({ officer }: OfficerCardProps) {
  return (
    <motion.div
      className="relative w-full max-w-sm overflow-hidden transition border border-gray-200 rounded-xl group hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={officer.image}
          alt={officer.name}
          className="object-cover object-center w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end justify-center p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-[#438aba]/70 to-transparent group-hover:opacity-100">
          <div className="flex space-x-4">
            <a
              href={`tel:${officer.phone}`}
              className="p-2 transition-colors bg-white rounded-full text-site-primary hover:bg-site-primary hover:text-white"
            >
              <FaPhone />
            </a>
            <a
              href={`mailto:${officer.email}`}
              className="p-2 transition-colors bg-white rounded-full text-site-primary hover:bg-site-primary hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="px-2 pb-5 text-center">
        <h3 className="text-xl font-bold text-gray-800">{officer.name}</h3>
        <p className="font-medium text-site-primary">{officer.designation}</p>
       Role {officer.badge && (
          <span className="inline-block px-3 py-1 mt-2 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
            {officer.badge}
          </span>
        )}
      </div>
    </motion.div>
  );
}
