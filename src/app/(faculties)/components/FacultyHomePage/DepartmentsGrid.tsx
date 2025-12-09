"use client";
import React, { useState } from "react";

// Department data
const departments = [
  {
    name: "Anatomy and Histology",
    description: "Study of the structure of animals and tissues.",
    link: "#",
  },
  {
    name: "Physiology",
    description:
      "Focuses on the mechanical, physical, and biochemical functions of animals.",
    link: "#",
  },
  {
    name: "Pharmacology and Toxicology",
    description:
      "Welcome to the website of the Department of Pharmacology and Toxicology of KAU",
    link: "#",
  },
  {
    name: "Microbiology and Public Health",
    description: "Covers infectious diseases and community animal health.",
    link: "#",
  },
  {
    name: "Livestock Production and Management",
    description: "Practical and scientific aspects of farm animal production.",
    link: "#",
  },
  {
    name: "Pathology",
    description: "The study and diagnosis of animal diseases.",
    link: "#",
  },
  {
    name: "Parasitology",
    description:
      "Study of animal parasites, their hosts, and the relationship between them.",
    link: "#",
  },
  {
    name: "Genetics and Animal Breeding",
    description:
      "Principles of inheritance and selection for improved animal traits.",
    link: "#",
  },
  {
    name: "Dairy Science",
    description:
      "Management and processing related to dairy animals and products.",
    link: "#",
  },
  {
    name: "Poultry Science",
    description:
      "Science and management of domestic fowl, including chickens and turkeys.",
    link: "#",
  },
  {
    name: "Epidemiology and Preventive Medicine",
    description: "Study of disease patterns and methods to prevent them.",
    link: "#",
  },
  {
    name: "Animal Nutrition",
    description:
      "The science of feed, nutrient requirements, and diet formulation for animals.",
    link: "#",
  },
  {
    name: "Medicine",
    description: "Diagnosis and non-surgical treatment of animal illnesses.",
    link: "#",
  },
  {
    name: "Surgery",
    description:
      "Surgical procedures for treating animal injuries and diseases.",
    link: "#",
  },
  {
    name: "Theriogenology",
    description: "Animal reproduction and obstetrics.",
    link: "#",
  },
];

// Single Department Card
const DepartmentCard = ({ dept }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-site-primary rounded-2xl p-6 shadow-lg min-h-[180px] cursor-pointer overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center h-full ">
        <h3
          className={`text-lg font-semibold text-white text-center font-merriweather transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {dept.name}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-green-50/90 p-6 flex flex-col justify-center items-center text-center transition-all duration-300 ease-in-out ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <p className="mb-4 text-sm font-medium text-gray-700">
          {dept.description}
        </p>
        <a
          href={dept.link}
          className="transition-all btn btn-sm btn-success hover:bg-green-600"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

// Departments Grid
const DepartmentsGrid = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">
        Departments
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {departments.map((dept, index) => (
          <DepartmentCard key={index} dept={dept} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentsGrid;
