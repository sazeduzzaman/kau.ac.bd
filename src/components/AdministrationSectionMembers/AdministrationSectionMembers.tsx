"use client";

import React, { useState, useMemo } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaCrown,
  FaUsers,
  FaInfoCircle,
  FaCommentAlt,
  FaGraduationCap,
  FaBuilding,
  FaUserFriends,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";

interface Member {
  id: string;
  name: string;
  designation: string;
  position?: "Head" | "Deputy" | "Member";
  email?: string;
  phone?: string;
  image?: string;
  department?: string;
  bio?: string;
}

interface Section {
  id: string;
  title: string;
  description?: string;
  members: Member[];
}

interface Office {
  title: string;
  description?: string;
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  stats?: {
    established?: string;
    location?: string;
  };
}

interface Props {
  admissionItem: {
    office: Office;
    sections: Section[];
  };
}

const AdministrationSectionMembers: React.FC<Props> = ({ admissionItem }) => {
  const { office, sections } = admissionItem;
  const [activeTab, setActiveTab] = useState<
    "overview" | "message" | "staff" | "alumni"
  >("staff");

  // Calculate total staff count
  const totalStaff = useMemo(
    () => sections.reduce((acc, section) => acc + section.members.length, 0),
    [sections]
  );

  const tabs = [
    {
      key: "overview" as const,
      label: "Overview",
      icon: <FaInfoCircle />,
      bgColor: "bg-gradient-to-r from-sky-500 to-blue-600",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      key: "message" as const,
      label: "VC's Message",
      icon: <FaCommentAlt />,
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-600",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      key: "staff" as const,
      label: "Staff Directory",
      icon: <FaUsers />,
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      key: "alumni" as const,
      label: "Notable Alumni",
      icon: <FaGraduationCap />,
      bgColor: "bg-gradient-to-r from-emerald-500 to-teal-600",
      textColor: "text-white",
      iconColor: "text-white",
    },
  ];

  if (!sections || sections.length === 0) return <NoDataFound />;

  return (
    <div className="min-h-screen py-12 bg-linear-to-b from-white to-slate-50">
      <div className="container px-4 mx-auto max-w-8xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase border border-blue-100 rounded-full bg-blue-50"
          >
            <FaBuilding className="text-blue-500" />
            University Administration
          </motion.span>

          <h1 className="mb-4 text-4xl font-black tracking-tight md:text-6xl text-slate-900">
            {office.title}
            <span className="inline-block w-3 h-3 ml-2 bg-blue-500 rounded-full animate-pulse"></span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600">
            {office.description ||
              "Khulna Agricultural University's administrative leadership dedicated to academic excellence and agricultural innovation."}
          </p>
        </motion.header>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* SIDE NAVIGATION */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky space-y-6 top-8">
              {/* Tab Navigation */}
              <nav className="space-y-3">
                {tabs.map((tab) => {
                  const isSelected = activeTab === tab.key;
                  return (
                    <motion.button
                      key={tab.key}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex items-center w-full px-6 py-4 text-sm font-semibold transition-all duration-200 rounded-2xl border shadow-sm
                        ${
                          isSelected
                            ? `${tab.bgColor} ${tab.textColor} border-transparent shadow-lg transform scale-[1.02]`
                            : "bg-white text-slate-600 border-slate-100 hover:bg-slate-50 hover:text-slate-800 hover:border-slate-200"
                        }`}
                    >
                      <span
                        className={`mr-4 text-xl ${
                          isSelected ? tab.iconColor : "text-slate-400"
                        }`}
                      >
                        {tab.icon}
                      </span>
                      {tab.label}
                      {isSelected && (
                        <motion.span
                          layoutId="active-indicator"
                          className="w-2 h-2 ml-auto rounded-full bg-white/40"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Quick Stats Card */}
              <div className="p-6 border shadow-sm bg-linear-to-br from-emerald-50 to-white rounded-2xl border-emerald-100">
                <h3 className="flex items-center gap-2 mb-4 text-sm font-semibold text-emerald-800">
                  <FaBuilding className="text-emerald-600" />
                  KAU Administration
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  The Khulna Agricultural University administration consists of
                  dedicated professionals working across various faculties and
                  departments to advance agricultural education, research, and
                  extension services. Our administrative structure supports the
                  university's mission of promoting sustainable agriculture,
                  food security, and rural development in Bangladesh.
                </p>
                <div className="pt-4 mt-4 border-t border-emerald-100">
                  <p className="text-xs text-slate-500">
                    Established in 2002 | Located in Khulna, Bangladesh | Focus:
                    Agricultural Sciences
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              {/* STAFF SECTION */}
              {activeTab === "staff" && (
                <motion.div
                  key="staff"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-16"
                >
                  {sections.map((section) => (
                    <motion.section
                      key={section.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="overflow-hidden bg-white border shadow-sm rounded-3xl border-slate-100"
                    >
                      <div className="p-8">
                        {/* Section Header */}
                        <div className="flex flex-col gap-4 mb-10 md:flex-row md:items-center md:justify-between">
                          <div>
                            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                              {section.title}
                            </h2>
                            {section.description && (
                              <p className="mt-2 text-slate-600">
                                {section.description}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="px-4 py-2 text-sm font-bold text-blue-700 rounded-full bg-blue-50">
                              {section.members.length} Members
                            </span>
                          </div>
                        </div>

                        {/* Members Grid */}
                        {section.members.length > 0 ? (
                          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {section.members.map((member) => (
                              <motion.div
                                key={member.id}
                                whileHover={{ y: -4 }}
                                className="relative group"
                              >
                                <div className="p-6 transition-all duration-300 border bg-linear-to-b from-white to-slate-50 border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-100">
                                  <div className="flex flex-col items-center text-center">
                                    {/* Avatar */}
                                    <div className="relative mb-5">
                                      {member.position === "Head" && (
                                        <div className="absolute p-2 text-white rounded-full shadow-lg -top-2 -right-2 bg-linear-to-r from-amber-500 to-orange-500">
                                          <FaCrown size={14} />
                                        </div>
                                      )}
                                      {member.image ? (
                                        <img
                                          src={member.image}
                                          alt={member.name}
                                          className="object-cover transition-transform shadow-lg w-28 h-28 rounded-2xl ring-4 ring-white group-hover:scale-105"
                                        />
                                      ) : (
                                        <div className="flex items-center justify-center text-4xl font-bold text-white shadow-lg w-28 h-28 rounded-2xl bg-linear-to-br from-slate-700 to-slate-900">
                                          {member.name.charAt(0)}
                                        </div>
                                      )}
                                    </div>

                                    {/* Info */}
                                    <h3 className="mb-1 text-lg font-bold transition-colors text-slate-900 group-hover:text-blue-600">
                                      {member.name}
                                    </h3>
                                    <p className="mb-3 text-sm font-semibold text-slate-500">
                                      {member.designation}
                                    </p>
                                    {member.department && (
                                      <p className="px-3 py-1 mb-4 text-xs text-blue-600 rounded-full bg-blue-50">
                                        {member.department}
                                      </p>
                                    )}

                                    {/* Contact Actions */}
                                    <div className="flex w-full gap-2 pt-4 mt-4 border-t border-slate-100">
                                      {member.email && (
                                        <a
                                          href={`mailto:${member.email}`}
                                          className="flex items-center justify-center flex-1 gap-2 py-2.5 transition-all rounded-xl bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
                                        >
                                          <FaEnvelope />
                                          <span className="text-xs font-medium">
                                            Email
                                          </span>
                                        </a>
                                      )}
                                      {member.phone && (
                                        <a
                                          href={`tel:${member.phone}`}
                                          className="flex items-center justify-center flex-1 gap-2 py-2.5 transition-all rounded-xl bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
                                        >
                                          <FaPhoneAlt />
                                          <span className="text-xs font-medium">
                                            Call
                                          </span>
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          <div className="py-16 text-center">
                            <div className="inline-flex p-4 mb-4 rounded-2xl bg-slate-100">
                              <FaUserFriends className="text-3xl text-slate-400" />
                            </div>
                            <p className="font-medium text-slate-400">
                              No members found in this section
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.section>
                  ))}
                </motion.div>
              )}

              {/* OVERVIEW SECTION */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-10 bg-white border shadow-sm rounded-3xl border-slate-100"
                >
                  <h2 className="mb-8 text-3xl font-bold text-slate-900">
                    Office Overview
                  </h2>
                  <div className="prose prose-lg prose-slate max-w-none">
                    <p className="mb-8 text-lg leading-relaxed text-slate-600">
                      {office.description ||
                        `The ${office.title} at Khulna Agricultural University plays a pivotal role in 
                        shaping agricultural education, research, and innovation in Bangladesh. 
                        Our administrative team works diligently to support academic excellence, 
                        foster research initiatives, and ensure smooth university operations.`}
                    </p>

                    {/* Contact Info */}
                    {office.contact && (
                      <div className="grid gap-6 p-6 mt-8 border bg-linear-to-br from-slate-50 to-white rounded-2xl border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900">
                          Contact Information
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          {office.contact.email && (
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-blue-50">
                                <FaEnvelope className="text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm text-slate-500">Email</p>
                                <a
                                  href={`mailto:${office.contact.email}`}
                                  className="font-medium text-slate-900 hover:text-blue-600"
                                >
                                  {office.contact.email}
                                </a>
                              </div>
                            </div>
                          )}
                          {office.contact.phone && (
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-blue-50">
                                <FaPhoneAlt className="text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm text-slate-500">Phone</p>
                                <a
                                  href={`tel:${office.contact.phone}`}
                                  className="font-medium text-slate-900 hover:text-blue-600"
                                >
                                  {office.contact.phone}
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* MESSAGE SECTION */}
              {activeTab === "message" && (
                <motion.div
                  key="message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-10 bg-white border shadow-sm rounded-3xl border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-2xl bg-linear-to-r from-purple-50 to-pink-50">
                      <FaCommentAlt className="text-2xl text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">
                        Vice Chancellor's Message
                      </h2>
                      <p className="text-slate-500">
                        Official communication from university leadership
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="p-8 mb-8 border border-purple-100 bg-linear-to-r from-purple-50 to-pink-50 rounded-3xl">
                      <blockquote className="pl-6 text-xl italic border-l-4 border-purple-500 text-slate-800">
                        "At Khulna Agricultural University, we are committed to
                        nurturing future agricultural leaders through
                        innovation, research, and excellence in education. Our
                        goal is to create a transformative learning environment
                        that prepares students to tackle global agricultural
                        challenges."
                      </blockquote>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="p-6 bg-white border rounded-2xl border-slate-100">
                        <h3 className="mb-4 text-xl font-bold text-slate-900">
                          Our Vision
                        </h3>
                        <p className="text-slate-600">
                          To be a center of excellence in agricultural
                          education, research, and innovation that contributes
                          to sustainable development and food security in
                          Bangladesh and beyond.
                        </p>
                      </div>

                      <div className="p-6 bg-white border rounded-2xl border-slate-100">
                        <h3 className="mb-4 text-xl font-bold text-slate-900">
                          Our Mission
                        </h3>
                        <p className="text-slate-600">
                          To provide quality education, conduct cutting-edge
                          research, and offer extension services that address
                          the needs of the agricultural community while
                          fostering innovation and entrepreneurship.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-8 mt-10 border-t border-slate-100">
                      <div className="w-16 h-16 rounded-full bg-linear-to-r from-purple-500 to-pink-500"></div>
                      <div>
                        <p className="font-bold text-slate-900">
                          Prof. Dr. Md. Nazmul Ahsan
                        </p>
                        <p className="text-sm text-slate-500">
                          Vice Chancellor, Khulna Agricultural University
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ALUMNI SECTION */}
              {activeTab === "alumni" && (
                <motion.div
                  key="alumni"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-10 bg-white border shadow-sm rounded-3xl border-slate-100"
                >
                  <div className="mb-10 text-center">
                    <div className="inline-flex p-3 mb-4 rounded-2xl bg-linear-to-r from-emerald-50 to-teal-50">
                      <FaGraduationCap className="text-3xl text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Notable Alumni
                    </h2>
                    <p className="text-slate-500">
                      Distinguished graduates making significant impact
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      {
                        name: "Dr. Mohammad Ali",
                        year: 2008,
                        position: "Director, Agricultural Research Institute",
                        achievement:
                          "Pioneered sustainable farming techniques adopted nationwide",
                      },
                      {
                        name: "Prof. Sara Khan",
                        year: 2010,
                        position: "Head of Agronomy Department, DU",
                        achievement:
                          "Award-winning researcher in crop genetics",
                      },
                      {
                        name: "Eng. Rahman Ahmed",
                        year: 2012,
                        position: "CEO, AgroTech Solutions",
                        achievement: "Founded successful agri-tech startup",
                      },
                      {
                        name: "Dr. Fatima Begum",
                        year: 2015,
                        position: "UNDP Agriculture Consultant",
                        achievement: "International development expert",
                      },
                    ].map((alumni, index) => (
                      <div
                        key={index}
                        className="p-6 transition-colors bg-white border rounded-2xl border-slate-100 hover:border-emerald-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-16 h-16 font-bold text-white rounded-xl bg-linear-to-r from-emerald-400 to-teal-400">
                            {alumni.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900">
                              {alumni.name}
                            </h3>
                            <p className="mb-1 text-sm text-slate-500">
                              Batch: {alumni.year}
                            </p>
                            <p className="text-sm font-medium text-emerald-600">
                              {alumni.position}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm text-slate-600">
                          {alumni.achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 mt-10 text-center border-t border-slate-100">
                    <p className="mb-4 text-slate-500">
                      Our alumni network spans across various sectors including
                      agriculture, research, academia, government, and
                      entrepreneurship.
                    </p>
                    <button className="px-6 py-3 font-medium text-white transition-all rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-200">
                      View Complete Alumni Directory
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdministrationSectionMembers;
