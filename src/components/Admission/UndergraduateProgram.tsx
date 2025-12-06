import React from "react";

const UndergraduateProgram = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-12 mx-auto sm:px-8">
        {/* Main Header */}
        <h1 className="pb-4 mb-12 text-3xl font-extrabold text-start sm:text-4xl text-site-primary">
          Undergraduate Program Admission Information
        </h1>

        {/* Introductory Text */}
        <div className="mb-12 space-y-4 text-center text-gray-700 sm:text-left">
          <p className="text-lg leading-relaxed">
            Under the{" "}
            <span className="font-semibold text-site-primary">
              Cluster System Admission
            </span>{" "}
            in{" "}
            <span className="font-semibold text-site-primary">
              Agricultural Degree Offering
            </span>
            , Khulna Agricultural University offers admission for Undergraduate
            Programs (Bachelor Degrees) along with 8 Public Universities of
            Bangladesh.
          </p>
          <p className="text-lg font-semibold tracking-wide text-site-secondary">
            Offered Academic Programmes:
          </p>
        </div>

        {/* Program Table - Simple Bordered */}
        <div className="mb-12 overflow-x-auto rounded-lg">
          <table className="table w-full text-black border border-collapse border-gray-300">
            <thead className="bg-site-primary">
              <tr className="">
                <th className="px-4 py-4 text-white border border-gray-300">
                  Faculty
                </th>
                <th className="px-4 py-4 text-white border border-gray-300">
                  Degree
                </th>
                <th className="px-4 py-4 text-white border border-gray-300">
                  Duration
                </th>
                <th className="px-4 py-4 text-white border border-gray-300">
                  Total Credit Hour
                </th>
                <th className="px-4 py-2 text-white border border-gray-300">
                  Total Seats
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Veterinary, Animal and Biomedical Sciences
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  B.Sc. VS & AH
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  10 Semesters (5 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">188</td>
                <td className="px-4 py-2 border border-gray-300">30</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Agriculture
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  B.Sc. Agriculture (Hons.)
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  8 Semesters (4 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">180</td>
                <td className="px-4 py-2 border border-gray-300">30</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Fisheries & Ocean Sciences
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  B.Sc. Fisheries (Hons.)
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  8 Semesters (4 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">167</td>
                <td className="px-4 py-2 border border-gray-300">30</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Agricultural Economics & Agribusiness Studies
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  B.Sc. Ag. Econ. (Hons.)
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  8 Semesters (4 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">170</td>
                <td className="px-4 py-2 border border-gray-300">30</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Agricultural Engineering & Technology
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  B.Sc. Ag. Engg.
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  8 Semesters (4 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">172</td>
                <td className="px-4 py-2 border border-gray-300">30</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Minimum Academic Requirements */}
        <div className="p-8 mb-12 bg-white border border-gray-300 rounded-lg shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-site-secondary">
            Minimum Academic Requirement:
          </h2>
          <ul className="space-y-3 text-base leading-relaxed text-gray-700 list-disc list-inside">
            <li>
              Applicant must have completed{" "}
              <span className="font-semibold text-site-primary">
                SSC and HSC
              </span>{" "}
              (or equivalent) from{" "}
              <span className="font-semibold text-site-primary">
                science section
              </span>{" "}
              with{" "}
              <span className="font-semibold text-site-primary">
                Biology, Chemistry, Physics, and Mathematics
              </span>
              .
            </li>
            <li>
              Minimum{" "}
              <span className="font-semibold text-site-primary">
                GPA of 4.00
              </span>{" "}
              in SSC & HSC and total GPA of{" "}
              <span className="font-semibold text-site-primary">8.50</span>.
            </li>
          </ul>
        </div>

        {/* More Information */}
        <div className="mb-12 text-center sm:text-left">
          <p className="text-lg text-gray-700">
            For more information about admission visit:{" "}
            <a
              href="https://acas.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-bold underline transition-colors text-info hover:text-site-secondary"
            >
              https://acas.edu.bd/
            </a>
          </p>
        </div>

        {/* Call-to-action Card */}
        <div className="relative p-10 overflow-hidden transition-all duration-500 transform text-start rounded-2xl hover:scale-105 hover:shadow-2xl">
          {/* Decorative floating circles */}
          <div className="absolute top-0 w-40 h-40 rounded-full animate-blob"></div>
          <div className="absolute bottom-0 w-56 h-56 rounded-full bg-white/10 -right-16 blur-3xl animate-blob animation-delay-2000"></div>

          <h3 className="mb-4 text-3xl font-extrabold text-black sm:text-4xl">
            Ready to Apply?
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-black sm:text-xl">
            Check the detailed admission guidelines and start your application
            today.
          </p>
          <a
            href="https://acas.edu.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold text-white transition-all duration-500 rounded-full shadow-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:scale-105"
          >
            Visit ACAS Admission Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default UndergraduateProgram;
