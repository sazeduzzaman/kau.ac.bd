import React from "react";

const GraduateProgram = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-12 mx-auto sm:px-8">
        {/* Main Header */}
        <h1 className="pb-4 mb-12 text-3xl font-extrabold text-start sm:text-4xl text-site-primary">
          Graduate Program Admission Information
        </h1>

        {/* Introductory Text */}
        <div className="mb-12 space-y-4 text-center text-gray-700 sm:text-left">
          <p className="text-lg leading-relaxed">
            Khulna Agricultural University offers admission for Graduate
            Programs (Masters & Postgraduate Degrees) across various faculties.
            These programs are designed to provide advanced academic knowledge
            and research opportunities in agricultural and related sciences.
          </p>
          <p className="text-lg font-semibold tracking-wide text-site-secondary">
            Offered Graduate Programmes:
          </p>
        </div>

        {/* Program Table - Simple Bordered */}
        <div className="mb-12 overflow-x-auto rounded-lg">
          <table className="table w-full text-black border border-collapse border-gray-300">
            <thead className="bg-site-primary">
              <tr>
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
                <th className="px-4 py-4 text-white border border-gray-300">
                  Total Seats
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Veterinary & Animal Sciences
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  M.Sc. Veterinary Science
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  4 Semesters (2 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">60</td>
                <td className="px-4 py-2 border border-gray-300">20</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Agriculture
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  M.Sc. Agriculture
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  4 Semesters (2 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">55</td>
                <td className="px-4 py-2 border border-gray-300">25</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Fisheries & Ocean Sciences
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  M.Sc. Fisheries
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  4 Semesters (2 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">50</td>
                <td className="px-4 py-2 border border-gray-300">20</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Agricultural Economics
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  M.Sc. Ag. Econ.
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  4 Semesters (2 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">50</td>
                <td className="px-4 py-2 border border-gray-300">15</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Agricultural Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  M.Sc. Ag. Engg.
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  4 Semesters (2 years)
                </td>
                <td className="px-4 py-2 border border-gray-300">52</td>
                <td className="px-4 py-2 border border-gray-300">20</td>
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
              Applicant must have completed a{" "}
              <span className="font-semibold text-site-primary">
                Bachelor's Degree
              </span>{" "}
              in a relevant discipline.
            </li>
            <li>
              Minimum{" "}
              <span className="font-semibold text-site-primary">
                GPA of 3.00
              </span>{" "}
              on a scale of 4.00 (or equivalent).
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

export default GraduateProgram;
