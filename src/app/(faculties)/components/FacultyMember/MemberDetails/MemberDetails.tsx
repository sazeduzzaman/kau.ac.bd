"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGoogle } from "react-icons/fa";

const MemberDetails = () => {
  const [activeTab, setActiveTab] = useState("Scholarship");

  const tabs = [
    "Home",
    "Education",
    "Experience",
    "Publications",
    "Scholarship",
    "Research",
    "Teaching",
    "Student Corner",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Scholarship":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Scholarship & Awards
            </h2>
            <ul className="space-y-1 text-gray-700 list-disc list-inside">
              <li>MONBUKAGAKUSHO Scholarships</li>
              {/* Add more items here */}
            </ul>
          </div>
        );
      case "Home":
        return null;
      default:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{activeTab}</h2>
            <p className="text-gray-700">
              Content for {activeTab} will go here...
            </p>
          </div>
        );
    }
  };

  return (
    <div className="container p-6 mx-auto space-y-12">
      {/* Profile Card */}
      <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md shadow-sm md:flex-row md:items-start rounded-3xl md:space-x-10 transition-transform transform hover:scale-[1.01] duration-300">
        <div className="flex-shrink-0">
          <img
            src="/images/408.jpg"
            alt="Dr. Md. Mahbub Hasan"
            className="object-cover border-4 border-white shadow-sm rounded-2xl w-36 h-36 md:w-44 md:h-44"
          />
        </div>

        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Dr. Md. Mahbub Hasan
          </h1>
          <p className="mb-4 text-lg font-semibold text-sky-600">
            Professor
          </p>

          <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:space-x-6">
            <p className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="w-8 h-8 p-2 text-white rounded-full shadow-md bg-sky-600" />
              +880-41-769468-313
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="w-8 h-8 p-2 text-white rounded-full shadow-md bg-sky-600" />
              +8801719505777
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="w-8 h-8 p-2 text-white rounded-full shadow-md bg-sky-600" />
              <a
                href="mailto:mahbub01@eee.kuet.ac.bd"
                className="text-gray-800 hover:underline"
              >
                mahbub01@eee.kuet.ac.bd
              </a>
            </p>
          </div>

          <p className="mb-2 text-gray-600">
            <span className="font-semibold text-sky-600">Address:</span>{" "}
            KUET, Bangladesh
          </p>
          <p className="mb-4 text-gray-700">
            <span className="font-semibold text-sky-600">
              Research Interest:
            </span>{" "}
            Analysis of short time spectra of the natural signal: Optical
            Interferometry
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 text-white transition-transform duration-300 rounded-full shadow-lg bg-gradient-to-tr from-red-500 to-yellow-400 hover:scale-110"
            >
              <FaGoogle />
            </a>
            <a
              href="#"
              className="p-3 text-white transition-transform duration-300 rounded-full shadow-lg bg-gradient-to-tr from-blue-500 to-sky-600 hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="pb-0 mb-0 bg-gray-200 border-b border-gray-200">
        <nav className="flex w-full flex-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center px-4 py-5 text-sm font-medium transition-colors duration-200 rounded-t-md ${
                activeTab === tab
                  ? "bg-sky-600 text-white shadow"
                  : "text-gray-600 hover:text-sky-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Dynamic Content */}
      <div className="p-6 transition-all duration-300 shadow-lg bg-white/70 backdrop-blur-md rounded-3xl hover:shadow-sm">
        {activeTab !== "Home" && renderContent()}
      </div>
    </div>
  );
};

export default MemberDetails;
