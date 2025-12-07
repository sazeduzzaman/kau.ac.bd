import Link from "next/link";
import React from "react";

const InternationalStudent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-12 mx-auto sm:px-8">
        {/* Main Header */}
        <h1 className="pb-4 mb-12 text-3xl font-extrabold text-start sm:text-4xl text-site-primary">
          International Student Admission Information
        </h1>

        {/* Introductory Text */}
        <div className="mb-12 space-y-4 text-center text-gray-700 sm:text-left">
          <p className="text-lg leading-relaxed">
            Khulna Agricultural University welcomes{" "}
            <span className="font-semibold text-site-primary">
              International Students
            </span>
            to pursue Undergraduate and Graduate Programs. International
            applicants must meet academic and language requirements to ensure a
            smooth admission process.
          </p>
          <p className="text-lg font-semibold tracking-wide text-site-secondary">
            Offered Programs for International Students:
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
                  B.Sc. / M.Sc.
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  4-10 Semesters
                </td>
                <td className="px-4 py-2 border border-gray-300">60-188</td>
                <td className="px-4 py-2 border border-gray-300">20-30</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Agriculture
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  B.Sc. / M.Sc.
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  4-8 Semesters
                </td>
                <td className="px-4 py-2 border border-gray-300">55-180</td>
                <td className="px-4 py-2 border border-gray-300">20-30</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Fisheries & Ocean Sciences
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  B.Sc. / M.Sc.
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  4-8 Semesters
                </td>
                <td className="px-4 py-2 border border-gray-300">50-167</td>
                <td className="px-4 py-2 border border-gray-300">20-30</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  Agricultural Economics
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  B.Sc. / M.Sc.
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  4-8 Semesters
                </td>
                <td className="px-4 py-2 border border-gray-300">50-170</td>
                <td className="px-4 py-2 border border-gray-300">15-30</td>
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
                SSC / HSC or Bachelor's Degree
              </span>{" "}
              depending on program level.
            </li>
            <li>
              Minimum{" "}
              <span className="font-semibold text-site-primary">
                GPA of 4.00 (or equivalent)
              </span>{" "}
              for undergraduate programs and{" "}
              <span className="font-semibold text-site-primary">GPA 3.00</span>{" "}
              for graduate programs.
            </li>
            <li>
              Proof of English proficiency may be required (IELTS / TOEFL /
              equivalent).
            </li>
          </ul>
        </div>

        {/* More Information */}
        <div className="mb-12 text-center sm:text-left">
          <p className="text-lg text-gray-700">
            For more information about admission visit:{" "}
            <Link
              href="https://acas.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-bold underline transition-colors text-info hover:text-site-secondary"
            >
              https://acas.edu.bd/
            </Link>
          </p>
        </div>

        {/* Call-to-action Card */}
        <div className="relative p-10 overflow-hidden transition-all duration-500 transform text-start rounded-2xl hover:scale-105 hover:shadow-2xl">
          <h3 className="mb-4 text-3xl font-extrabold text-black sm:text-4xl">
            Ready to Apply?
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-black sm:text-xl">
            Start your international application today and join Khulna
            Agricultural University.
          </p>
          <Link
            href="https://acas.edu.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold text-white transition-all duration-500 rounded-full shadow-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:scale-105"
          >
            Visit ACAS Admission Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternationalStudent;
