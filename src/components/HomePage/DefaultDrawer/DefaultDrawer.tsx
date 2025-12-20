"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaCalendarAlt, FaUserGraduate, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaBookOpen, FaUsers, FaGraduationCap } from "react-icons/fa";

const DefaultDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ALWAYS show modal when page loads - removed sessionStorage check
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10);
  }, []); // Empty dependency array - runs once on mount

  const handleClose = () => {
    setIsOpen(false);
    // OPTIONAL: Uncomment if you want to remember closed state for this session
    // sessionStorage.setItem("admissionModalClosed", "true");
    
    // Wait for animation to complete before hiding
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black z-9999 transition-opacity duration-300 ${
          isOpen ? "opacity-80" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      />

      {/* Admission Modal - Similar to image design */}
      <div
        className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl z-10000 transition-all duration-300 ease-out overflow-hidden ${
          isOpen 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Banner Section - Similar to image */}
        <div className="relative p-8 text-white bg-linear-to-r from-blue-900 via-blue-800 to-blue-700">
          <button
            onClick={handleClose}
            className="absolute p-2 text-white transition-colors rounded-full top-4 right-4 hover:bg-white/20"
            aria-label="Close modal"
          >
            <FaTimes className="text-xl" />
          </button>
          
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div>
              <h1 className="mb-2 text-3xl font-bold">KHULNA AGRICULTURAL UNIVERSITY</h1>
              <h2 className="text-2xl font-semibold text-yellow-300">ADMISSION NOW OPEN</h2>
              <p className="mt-2 text-lg">Spring 2024 Session</p>
            </div>
            <div className="px-6 py-3 mt-4 text-2xl font-bold text-blue-900 bg-yellow-500 rounded-lg md:mt-0">
              ENROLL NOW
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Best Features Grid - Similar to image */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-bold text-center text-blue-900">Best Features</h3>
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
              <div className="p-4 text-center transition-shadow border border-blue-100 rounded-lg hover:shadow-md">
                <FaBookOpen className="mx-auto mb-2 text-3xl text-blue-600" />
                <h4 className="font-bold text-blue-800">Academic Excellence</h4>
                <p className="mt-1 text-sm text-gray-600">Quality education with modern curriculum</p>
              </div>
              <div className="p-4 text-center transition-shadow border border-blue-100 rounded-lg hover:shadow-md">
                <FaUsers className="mx-auto mb-2 text-3xl text-blue-600" />
                <h4 className="font-bold text-blue-800">Campus Life</h4>
                <p className="mt-1 text-sm text-gray-600">Vibrant student community & activities</p>
              </div>
              <div className="p-4 text-center transition-shadow border border-blue-100 rounded-lg hover:shadow-md">
                <FaCheckCircle className="mx-auto mb-2 text-3xl text-green-600" />
                <h4 className="font-bold text-blue-800">Affordable Program Cost</h4>
                <p className="mt-1 text-sm text-gray-600">Quality education at reasonable fees</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="p-4 border border-blue-100 rounded-lg">
                <h4 className="mb-2 font-bold text-blue-800">Education Based Activities</h4>
                <p className="text-sm text-gray-600">Practical learning with co-curricular activities</p>
              </div>
              <div className="p-4 border border-blue-100 rounded-lg">
                <h4 className="mb-2 font-bold text-blue-800">Expert Faculty Members</h4>
                <p className="text-sm text-gray-600">Highly qualified and experienced professors</p>
              </div>
              <div className="p-4 border border-blue-100 rounded-lg">
                <h4 className="mb-2 font-bold text-blue-800">Modern Library Facilities</h4>
                <p className="text-sm text-gray-600">State-of-the-art digital and physical resources</p>
              </div>
            </div>
          </div>

          {/* Programs Offered Section */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-bold text-center text-blue-900">Programs Offered</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="p-5 border border-blue-200 bg-linear-to-r from-blue-50 to-white rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <FaUserGraduate className="text-2xl text-blue-600" />
                  <h4 className="text-xl font-bold text-blue-900">Undergraduate Programs</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Agriculture", 
                    "Veterinary Science", 
                    "Fisheries", 
                    "Agricultural Engineering",
                    "Agricultural Economics",
                    "Horticulture",
                    "Biotechnology",
                    "Food Science"
                  ].map((program, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-white border rounded">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-black">{program}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 border border-green-200 bg-linear-to-r from-green-50 to-white rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <FaGraduationCap className="text-2xl text-green-600" />
                  <h4 className="text-xl font-bold text-green-900">Postgraduate Programs</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "M.Sc in Agriculture", 
                    "M.S in Veterinary Science", 
                    "MBA in Agribusiness", 
                    "Ph.D Programs",
                    "M.Phil Programs",
                    "Postgraduate Diploma"
                  ].map((program, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-white border rounded">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-black">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information - Similar to image */}
          <div className="p-6 border bg-linear-to-r from-gray-50 to-blue-50 rounded-xl">
            <h3 className="mb-4 text-xl font-bold text-center text-blue-900">Admission Office</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaPhone className="text-blue-600" />
                  <span className="font-bold text-black">Phone Numbers</span>
                </div>
                <p className="text-lg font-bold text-blue-800">01409-877688</p>
                <p className="text-lg font-bold text-blue-800">01409-877689</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaEnvelope className="text-blue-600" />
                  <span className="font-bold text-black">Email</span>
                </div>
                <p className="text-lg font-bold text-blue-800">admission@kau.ac.bd</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span className="font-bold text-black">Address</span>
                </div>
                <p className="text-sm text-gray-700">Khulna Agricultural University</p>
                <p className="text-sm text-gray-700">Khulna, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 text-white bg-linear-to-r from-blue-900 to-blue-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold">Visit Our Website</h4>
              <p className="font-semibold text-yellow-300">www.kau.ac.bd</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleClose}
                className="px-6 py-2 font-bold text-blue-900 transition-colors bg-white rounded-lg hover:bg-gray-100"
              >
                Close
              </button>
              <button
                onClick={() => window.open('https://kau.ac.bd/admission', '_blank')}
                className="px-6 py-2 font-bold text-blue-900 transition-colors bg-yellow-500 rounded-lg hover:bg-yellow-400"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultDrawer;