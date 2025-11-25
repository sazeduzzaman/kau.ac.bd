"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

// Types
interface Person {
  id: number;
  name: string;
  designation: string;
  phone?: string;
  email: string;
  imageUrl: string;
}

const vcData: Person = {
  id: 1,
  name: "Prof. Dr. Md. Nazmul Ahsan",
  designation: "Vice-Chancellor",
  email: "vc@kau.ac.bd",
  imageUrl: "/images/Prof.-Dr.-Md.-Nazmul-Ahsan.jpg",
};

const officersData: Person[] = [
  {
    id: 1,
    name: "Delwar Hossain",
    designation: "Ps To Vc (In charge)",
    phone: "+880 1521 576582",
    email: "delwar@kau.ac.bd",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 2,
    name: "Md. Murad Hossain",
    designation: "Administrative Officer",
    phone: "+880 1629 964723",
    email: "kaumurad@gmail.com",
    imageUrl: "/images/no-profile.png",
  },
  {
    id: 3,
    name: "Md. Abid Hossain",
    designation: "Administrative Officer",
    phone: "+880 1833 293355",
    email: "hossainmdabid007@gmail.com",
    imageUrl: "/images/no-profile.png",
  },
];

// Person Card Component
const PersonCard = ({ person }: { person: Person }) => (
  <div className="relative flex flex-col items-center p-6 overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl group">
    <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full shadow-md">
      <img
        src={person.imageUrl}
        alt={person.name}
        className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
      />
    </div>
    <h3 className="text-lg font-semibold text-teal-900">{person.name}</h3>
    <p className="text-sm text-gray-600">{person.designation}</p>
    <div className="flex flex-col items-center gap-1 mt-2 text-sm text-gray-500">
      {person.phone && (
        <p className="flex items-center gap-1">
          <Phone size={14} /> {person.phone}
        </p>
      )}
      <p className="flex items-center gap-1 text-teal-700 cursor-pointer hover:underline">
        <Mail size={14} /> {person.email}
      </p>
    </div>
  </div>
);

// Departments / Units Card
// Updated UnitCard
const UnitCard = ({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon?: React.ReactNode;
}) => (
  <div className="relative p-6 overflow-hidden transition-transform duration-300 shadow-md bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl hover:shadow-2xl hover:-translate-y-2 group">
    {/* Optional Icon */}
    {icon && (
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-teal-700 rounded-full">
        {icon}
      </div>
    )}

    <h4 className="mb-2 text-lg font-bold text-teal-900 group-hover:text-teal-800">
      {name}
    </h4>
    <p className="text-gray-600">{description}</p>

    {/* Decorative hover effect */}
    <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-t from-teal-50/0 to-teal-100/30 group-hover:opacity-100 rounded-2xl"></div>
  </div>
);

export default function UniversityOfficePage() {
  const departments = [
    {
      name: "Academic Affairs",
      description: "Responsible for all academic programs.",
    },
    {
      name: "Administrative Office",
      description: "Manages university operations.",
    },
    {
      name: "Research & Development",
      description: "Coordinates research projects.",
    },
    {
      name: "Student Affairs",
      description: "Supports student activities and welfare.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================== Hero VC ================== */}
      <section className="relative flex flex-col items-center justify-center w-full py-20 overflow-hidden text-white bg-gradient-to-r from-[#438aba] to-[#1b7232]">
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto text-center">
          <div className="w-48 h-48 mb-6 overflow-hidden border-4 border-white rounded-full shadow-lg">
            <img
              src={vcData.imageUrl}
              alt={vcData.name}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl font-bold md:text-3xl">{vcData.name}</h1>
          <p className="mt-2 text-lg md:text-xl">{vcData.designation}</p>
          <p className="flex items-center justify-center gap-1 mt-2 text-sm md:text-base">
            <Mail size={16} /> {vcData.email}
          </p>
        </div>
        <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full -bottom-24 -right-24 animate-pulse"></div>
      </section>

      {/* ================== VC Message ================== */}
      <section className="max-w-4xl px-4 py-12 mx-auto text-center md:px-6">
        <h2 className="mb-4 text-2xl font-bold text-teal-900">
          Message from the Vice-Chancellor
        </h2>
        <p className="text-gray-700 md:text-lg">
          Welcome to Khulna Agricultural University. We are committed to <br />
          excellence in education, research, and community service.
        </p>
      </section>

      {/* ================== Officers ================== */}
      <section className="max-w-6xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-10 text-3xl font-bold text-center text-teal-900">
          Officers
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {officersData.map((officer) => (
            <PersonCard key={officer.id} person={officer} />
          ))}
        </div>
      </section>

      {/* ================== Departments ================== */}
      <section className="max-w-6xl px-4 py-16 mx-auto md:px-8">
        <h2 className="mb-10 text-3xl font-bold text-center text-teal-900">
          Departments / Units
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {departments.map((unit, idx) => (
            <UnitCard
              key={idx}
              name={unit.name}
              description={unit.description}
              // optional icon for each department, e.g., <FaUniversity />
            />
          ))}
        </div>
      </section>
    </div>
  );
}
