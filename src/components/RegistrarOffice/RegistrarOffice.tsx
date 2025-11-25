"use client";
import { Building } from "lucide-react";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaRegistered } from "react-icons/fa6";

interface Officer {
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

const registrarData: Section[] = [
  {
    id: "admin-1",
    title: "Registrar Office",
    officers: [
      {
        name: "Md. Rezaul Islam",
        badge: "Registrar",
        designation: "Registrar (In Charge)",
        phone: "+880 1309 000313",
        email: "registrar@kau.ac.bd",
        image: "/images/office-profile/MD-REZAUL-ISLAM.jpg",
      },
      {
        name: "Abdul Motin",
        badge: "Officer",
        designation: "Administrative officer",
        phone: "+880 1732-705047",
        email: "matin@kau.ac.bd",
        image: "/images/office-profile/Abdul-Matin.jpg",
      },
      {
        name: "Md. Nazmul Hassan",
        badge: "Officer",
        designation: "Administrative officer",
        phone: "+880 1934 257863",
        email: "nazmul@kau.edu.bd",
        image: "/images/office-profile/man-in-suit-and-tie-no.png",
      },
    ],
  },
  {
    id: "admin-2",
    title: "Administrative 1",
    officers: [
      {
        name: "Muhammad Ali",
        badge: "Section ",
        designation: "Section Officer",
        phone: "+880 1711 942311",
        email: "mali942311@gmail.com",
        image: "/images/office-profile/Md.-Al-Mahmud.png",
      },
      {
        name: "Satyam Roy",
        badge: "Admin",
        designation: "Administrative Officer",
        phone: "+880 1951 982325",
        email: "satyam.marketting@gmail.com",
        image: "/images/office-profile/Satyam-Roy.jpg",
      },
    ],
  },
  {
    id: "admin-3",
    title: "Administrative 2",
    officers: [
      {
        name: "Sharmin Parvin",
        badge: "Offer",
        designation: "Section Officer",
        phone: "+880 1711 458899",
        email: "sharmin4514@gmail.com",
        image: "/images/office-profile/lady.png",
      },
      {
        name: "Satyam Roy",
        badge: "Admin",
        designation: "Administrative Officer",
        phone: "+880 1951 982325",
        email: "satyam.marketting@gmail.com",
        image: "/images/office-profile/lady.png",
      },
      {
        name: "Shekhore Biswas",
        badge: "Admin",
        designation: "Administrative Officer",
        phone: "+880 1521331074",
        email: "shekhore@kau.ac.bd",
        image: "/images/office-profile/Shekhore-Biswas.jpg",
      },
    ],
  },
  // ... add other sections
];

const OfficerCard = ({ officer }: { officer: Officer }) => (
  <div className="relative overflow-hidden transition duration-300 shadow-xl group rounded-2xl hover:shadow-2xl">
    {/* Badge Ribbon */}
    {officer.badge && (
      <div className="absolute top-0 left-0 z-20 px-4 py-1 text-xs font-bold text-white uppercase origin-top-left rotate-45 bg-teal-600 shadow-lg badge-ribon">
        {officer.badge}
      </div>
    )}

    {/* Image */}
    <div className="relative overflow-hidden rounded-t-2xl">
      <img
        src={officer.image}
        alt={officer.name}
        className="object-cover w-full transition-transform duration-500 h-96 group-hover:scale-110"
      />
    </div>

    {/* Info Box */}
    <div className="relative z-10 px-3 py-4 bg-white rounded-b-2xl">
      <div className="flex justify-between align-items-center">
        <div>
          <h2 className="text-lg font-bold text-teal-900">{officer.name}</h2>
          <p className="text-sm font-medium text-gray-600">
            {officer.designation}
          </p>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <p className="flex items-center pb-0 mb-0">
            <FaPhone />
            <span className="ps-1">{officer.phone}</span>
          </p>
          <p className="flex items-center pb-0 mb-0">
            <FaEnvelope />
            <span className="ps-1">{officer.email}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function RegistrarOffice() {
  const [activeSection, setActiveSection] = useState(registrarData[0].id);

  return (
      <div className="min-h-screen pb-20 font-sans bg-slate-50 text-slate-800">
      {/* Hero Section */}
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
        <div className="absolute inset-0 opacity-100 bg-site-primary/50"></div>
        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-site-primary backdrop-blur-sm">
            <Building className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            Registrar Office
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white capitalize md:text-xl">
            Explore our dedicated administrative officers
          </p>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="flex justify-center gap-4 px-4 mt-10 mb-12 overflow-x-auto">
        {registrarData.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 font-semibold rounded-full transition-all ${
              activeSection === section.id
                ? "bg-teal-700 text-white shadow-md"
                : "bg-white text-teal-700 border border-teal-200 hover:shadow-md"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Officers Grid */}
      <div className="max-w-6xl px-4 mx-auto md:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {registrarData
            .find((section) => section.id === activeSection)!
            .officers.map((officer, idx) => (
              <OfficerCard key={idx} officer={officer} />
            ))}
        </div>
      </div>
    </div>
  );
}
