"use client";
import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Sprout,
  Fish,
  TrendingUp,
  Cpu,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
} from "lucide-react";

const AboutPage = () => {
  const [openFaculty, setOpenFaculty] = useState<number | null>(null);

  const toggleFaculty = (index: number) => {
    setOpenFaculty(openFaculty === index ? null : index);
  };

  const faculties = [
    {
      title: "Veterinary, Animal and Biomedical Sciences",
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      departments: [
        "Department of Anatomy and Histology",
        "Department of Physiology",
        "Department of Pharmacology and Toxicology",
        "Department of Microbiology and Public Health",
        "Department of Livestock Production and Management",
        "Department of Pathology",
        "Department of Parasitology",
        "Department of Genetics and Animal Breeding",
        "Department of Dairy Science",
        "Department of Poultry Science",
        "Department of Epidemiology and Preventive Medicine",
        "Department of Animal Nutrition",
        "Department of Medicine",
        "Department of Surgery",
        "Department of Theriogenology",
      ],
    },
    {
      title: "Agriculture",
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      departments: [
        "Department of Agronomy",
        "Department of Soil Science",
        "Department of Entomology",
        "Department of Horticulture",
        "Department of Plant Pathology",
        "Department of Crop Botany",
        "Department of Plant Genetics and Biotechnology",
        "Department of Agricultural Extension and Information Systems",
        "Department of Agroforestry",
        "Department of Agricultural Chemistry",
        "Department of Biochemistry and Molecular Biology",
      ],
    },
    {
      title: "Fisheries and Ocean Sciences",
      icon: <Fish className="w-6 h-6 text-blue-500" />,
      departments: [
        "Department of Fishery Biology and Genetics",
        "Department of Aquaculture",
        "Department of Fishery Resources Conservation and Management",
        "Department of Fisheries Technology and Quality Control",
        "Department of Oceanography",
        "Department of Fish Health Management",
      ],
    },
    {
      title: "Agricultural Economics and Agribusiness Studies",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      departments: [
        "Department of Agricultural Economics",
        "Department of Sociology and Rural Development",
        "Department of Agribusiness and Marketing",
        "Department of Agricultural Statistics and Bioinformatics",
        "Department of Agricultural Finance, Co-operative and Banking",
        "Department of Language and Communication Studies",
      ],
    },
    {
      title: "Agricultural Engineering and Technology",
      icon: <Cpu className="w-6 h-6 text-slate-600" />,
      departments: [
        "Department of Farm Structure",
        "Department of Farm Power and Machinery",
        "Department of Irrigation and Water Management",
        "Department of Computer Science and Engineering",
        "Department of Mathematics and Physics",
      ],
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      {/* Hero Section with Background Image Overlay */}
      <div
        className="relative px-4 py-16 text-white bg-emerald-900 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url("/images/skyblue-footer-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 opacity-100 bg-site-primary/50"></div>

        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-emerald-800/80 backdrop-blur-sm">
            <GraduationCap className="w-8 h-8 text-emerald-200" />
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            About KAU
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-emerald-100">
            Fostering new ideas and innovation to achieve excellence in
            academics and research.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl px-4 pb-20 mx-auto -mt-10 sm:px-6 lg:px-8">
        {/* Intro Card */}
        <div className="p-8 mb-10 bg-white border-t-4 max-w-5xl mx-auto shadow-lg rounded-xl border-[#438ABA]">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Khulna Agricultural University
          </h2>
          <div className="space-y-4 leading-relaxed text-slate-600">
            <p>
              Khulna Agricultural University (KAU) is the{" "}
              <strong>5th public agricultural university</strong> of Bangladesh
              and <strong>1st in the southern region</strong>. By fostering new
              ideas and innovation, it has begun a steady journey toward
              achieving a new level of excellence in academics and research in
              the agricultural sector.
            </p>
            <p>
              It also serves the country and the larger community by developing
              knowledgeable and skilled professionals who can meet the
              challenges of the 21st century and help build 'Smart Bangladesh'.
            </p>

            <div className="flex flex-col gap-4 pt-6 mt-6 border-t sm:flex-row border-slate-100">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                <Calendar className="w-5 h-5 text-site-primary" />
                <span className="text-sm font-medium">Est. 14 July 2015</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                <MapPin className="w-5 h-5 text-site-primary" />
                <span className="text-sm font-medium">Khulna, Bangladesh</span>
              </div>
            </div>

            <p className="mt-2 text-sm italic text-slate-500">
              The university commenced academic activities in 2018 and currently
              offers undergraduate degrees from different faculties.
            </p>
          </div>
        </div>

        {/* Faculties Grid */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 mb-6 text-2xl font-bold text-slate-900">
            <span className="inline-block w-2 h-8 rounded-full bg-site-primary"></span>
            Academic Faculties & Departments
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            {faculties.map((faculty, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 bg-white border rounded-xl border-slate-200 hover:shadow-lg"
              >
                <div
                  className="flex items-center justify-between p-4 transition-colors border-b cursor-pointer bg-slate-50 hover:bg-slate-100 border-slate-100"
                  onClick={() => toggleFaculty(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-white rounded-lg shadow-sm">
                      {faculty.icon}
                    </div>
                    <h4 className="text-base font-bold text-slate-800">
                      {faculty.title}
                    </h4>
                  </div>
                  {openFaculty === index ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </div>

                <div
                  className={`p-4 bg-white ${
                    openFaculty === index ? "block" : "hidden md:block"
                  }`}
                >
                  <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5">
                    {faculty.departments.map((dept, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="w-1 h-1 mt-1 rounded-full bg-site-primary shrink-0"></span>
                        {dept}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Expansion Card */}
        <div className="p-8 mt-10 border bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-emerald-100">
          <h3 className="mb-3 text-xl font-bold text-site-primary">
            Future Expansion
          </h3>
          <p className="mb-4 text-site-primary">
            Two additional faculties are in the process of being included:
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 text-sm font-semibold bg-white border rounded-full shadow-sm text-site-primary border-emerald-100">
              Faculty of Food Sciences and Safety
            </span>
            <span className="px-4 py-2 text-sm font-semibold bg-white border rounded-full shadow-sm text-site-primary border-emerald-100">
              Faculty of Environment, Disaster Risk and Agroclimatic Studies
            </span>
          </div>
          <p className="text-sm font-medium text-site-primary">
            Note: The university is preparing to offer Master of Science (M.S.)
            and Doctor of Philosophy (Ph.D.) degrees in the near future.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
