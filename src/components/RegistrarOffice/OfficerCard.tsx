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
      className="relative w-full max-w-sm overflow-hidden transition-shadow duration-300 shadow-lg cursor-pointer rounded-xl group hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        <motion.img
          src={officer.image}
          alt={officer.name}
          className="object-cover object-center w-full transition-transform duration-500 ease-in-out h-80 group-hover:scale-105 group-hover:rotate-1"
        />

        {/* Contact Overlay */}
        <motion.div
          className="absolute inset-0 flex items-end justify-center p-6 transition-opacity duration-500 opacity-0 bg-[#438aba]/20 backdrop-blur-sm rounded-xl group-hover:opacity-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex space-x-4">
            <a
              href={`tel:${officer.phone}`}
              className="p-3 transition-colors duration-300 rounded-full bg-white/70 backdrop-blur-md text-site-primary hover:bg-gray-600 hover:text-white"
            >
              <FaPhone size={18} className="transition-colors duration-300" />
            </a>
            <a
              href={`mailto:${officer.email}`}
              className="p-3 transition-colors duration-300 rounded-full bg-white/70 backdrop-blur-md text-site-primary hover:bg-gray-600 hover:text-white"
            >
              <FaEnvelope
                size={18}
                className="transition-colors duration-300"
              />
            </a>
          </div>
        </motion.div>

        {/* Badge Ribbon */}
        {officer.badge && (
          <motion.span
            className="absolute px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md top-3 left-3 bg-[#115888] from-[#115888] to-[#438aba]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {officer.badge}
          </motion.span>
        )}
      </div>

      {/* Officer Details */}
      <div className="px-4 py-5 text-center">
        <h3 className="text-xl font-bold text-gray-900">{officer.name}</h3>
        <p className="mt-1 text-sm font-medium text-gray-600">
          {officer.designation}
        </p>
      </div>
    </motion.div>
  );
}
