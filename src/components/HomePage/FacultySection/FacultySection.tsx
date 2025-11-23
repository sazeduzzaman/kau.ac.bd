import React from "react";
import {
  FaLeaf,
  FaPiggyBank,
  FaFish,
  FaChartLine,
  FaTools,
  FaSeedling,
} from "react-icons/fa";

const FacultySection = () => {
  const faculties = [
    {
      title: "Veterinary, Animal and Biomedical Sciences",
      description:
        "Explore the faculty of Veterinary, Animal and Biomedical Sciences, dedicated to advancing animal health and biomedical research.",
      icon: <FaPiggyBank className="text-4xl text-" />,
      btnText: "Go To VABS",
    },
    {
      title: "Agriculture",
      description:
        "Join the faculty of Agriculture and learn modern farming techniques, crop science, and sustainable agriculture practices.",
      icon: <FaLeaf className="text-4xl text-" />,
      btnText: "Go To AG",
    },
    {
      title: "Fisheries & Ocean Sciences",
      description:
        "Dive into marine biology, fisheries management, and ocean sciences at our dedicated faculty.",
      icon: <FaFish className="text-4xl text-" />,
      btnText: "Go To FOS",
    },
    {
      title: "Agricultural Economics & Agribusiness Studies",
      description:
        "Learn the economics of agriculture, market trends, and business strategies in our AEAS faculty.",
      icon: <FaChartLine className="text-4xl text-" />,
      btnText: "Go To AEAS",
    },
    {
      title: "Agricultural Engineering & Technology",
      description:
        "Innovate with agricultural machinery, irrigation systems, and sustainable tech in AET faculty.",
      icon: <FaTools className="text-4xl text-" />,
      btnText: "Go To AET",
    },
    {
      title: "Horticulture & Crop Science",
      description:
        "Explore horticulture, crop improvement, and plant biotechnology for sustainable agriculture.",
      icon: <FaSeedling className="text-4xl text-" />,
      btnText: "Go To HCS",
    },
  ];

  return (
    <section className="px-4 py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-extrabold text-center text-site-secondary text-">
          Faculties of KAU
          <div className="w-32 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#fff] to-[#498dbd]" />
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className="flex flex-col items-start h-full p-8 transition-transform transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-4 text-site-accent">{faculty.icon}</div>

              <h3 className="text-2xl font-bold text- mb-4 min-h-[3.5rem] uppercase">
                {faculty.title}
              </h3>

              <p className="flex-grow mb-6 text-gray-600">
                {faculty.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 py-2 transition-all pe-6 text-site-primary "
              >
                {faculty.btnText} <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
