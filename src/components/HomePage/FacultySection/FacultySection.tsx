import React from "react";

const FacultySection = () => {
  const faculties = [
    {
      title: "Veterinary, Animal and Biomedical Sciences",
      description:
        "Welcome to the website of the faculty of Veterinary, Animal and Biomedical Sciences of KAU",
      btnText: "Go To VABS",
    },
    {
      title: "Agriculture",
      description:
        "Welcome to the website of the faculty of Agriculture of KAU",
      btnText: "Go To AG",
    },
    {
      title: "Fisheries & Ocean Sciences",
      description:
        "Welcome to the website of the faculty of Fisheries & Ocean Sciences of KAU",
      btnText: "Go To FOS",
    },
    {
      title: "Agricultural Economics & Agribusiness Studies",
      description:
        "Welcome to the website of the faculty of Agricultural Economics & Agribusiness Studies of KAU",
      btnText: "Go To AEAS",
    },
    {
      title: "Agricultural Engineering & Technology",
      description:
        "Welcome to the website of the faculty of Agricultural Engineering & Technology of KAU",
      btnText: "Go To AET",
    },
  ];

  return (
    <section className="px-4 py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#004d40] mb-12">
          Faculty of KAU
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className="flex flex-col items-start h-full p-8 transition-shadow bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-[#004d40] mb-4 min-h-[3.5rem]">
                {faculty.title}
              </h3>
              <p className="flex-grow mb-8 text-gray-600">
                {faculty.description}
              </p>
              <button className="px-6 py-2 rounded-full border border-[#004d40] text-[#004d40] font-medium hover:bg-[#004d40] hover:text-white transition-colors duration-300">
                {faculty.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
