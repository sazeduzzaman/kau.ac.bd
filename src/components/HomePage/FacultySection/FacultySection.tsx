"use client"; // ← Must be the very first line
import {
  FaLeaf,
  FaPiggyBank,
  FaFish,
  FaChartLine,
  FaTools,
  FaSeedling,
} from "react-icons/fa";
import { motion } from "framer-motion";

const FacultySection = () => {
  const faculties = [
    {
      title: "Veterinary, Animal and Biomedical Sciences",
      description:
        "Advancing animal health and biomedical research through quality education and innovation.",
      icon: <FaPiggyBank className="text-4xl text-site-accent" />,
      btnText: "Go To VABS",
    },
    {
      title: "Agriculture",
      description:
        "Learn modern farming techniques, crop science, and sustainable agricultural practices.",
      icon: <FaLeaf className="text-4xl text-green-500" />,
      btnText: "Go To AG",
    },
    {
      title: "Fisheries & Ocean Sciences",
      description:
        "Explore marine biology, fisheries management, and ocean sciences in depth.",
      icon: <FaFish className="text-4xl text-sky-500" />,
      btnText: "Go To FOS",
    },
    {
      title: "Agricultural Economics & Agribusiness Studies",
      description:
        "Understand agricultural markets, economics, and business strategies.",
      icon: <FaChartLine className="text-4xl text-orange-500" />,
      btnText: "Go To AEAS",
    },
    {
      title: "Agricultural Engineering & Technology",
      description:
        "Study irrigation systems, machinery, and sustainable agro-technology.",
      icon: <FaTools className="text-4xl text-indigo-500" />,
      btnText: "Go To AET",
    },
    {
      title: "Horticulture & Crop Science",
      description:
        "Dive into crop improvement, horticulture, and plant biotechnology.",
      icon: <FaSeedling className="text-4xl text-green-600" />,
      btnText: "Go To HCS",
    },
  ];

  return (
    <section className="px-4 py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto text-center max-w-7xl">
        {/* Title & Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-site-primary md:text-5xl"
        >
          Faculties of KAU
          <div className="w-32 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#fff] to-[#498dbd]" />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-3 leading-tight text-black font-poppins"
        >
          Explore our diverse faculties, each dedicated to excellence in their
          respective fields.
        </motion.p>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {faculties.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col h-full p-8 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#498dbd]/20 to-[#346f96]/20 rounded-full text-site-accent">
                {faculty.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900 uppercase text-start">
                {faculty.title}
              </h3>

              {/* Description */}
              <p className="flex-grow mb-6 text-gray-600 text-start">
                {faculty.description}
              </p>

              {/* Button */}
              <a
                href="/"
                className="inline-flex items-center gap-2 font-medium text-[#498dbd] hover:gap-3 hover:text-[#346f96] transition-all"
              >
                {faculty.btnText} <span className="text-xl">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
