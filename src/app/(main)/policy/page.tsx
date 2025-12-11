import React from "react";
import Link from "next/link";
import { FaBook, FaSeedling, FaChevronRight } from "react-icons/fa"; // Icons for visual appeal

// Define the Policy structure for the Table of Contents (TOC)
const policies = [
  { id: "admissions", title: "Admission Policy", icon: FaBook },
  { id: "research", title: "Research Ethics & Guidelines", icon: FaSeedling },
  { id: "library", title: "Library Usage Policy", icon: FaBook },
  { id: "it_security", title: "IT & Data Security Policy", icon: FaSeedling },
  { id: "conduct", title: "Student Code of Conduct", icon: FaBook },
];

const PolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Policy Header Section */}
      <div className="py-12 text-white shadow-lg bg-sky-700">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center mb-2 text-sm text-sky-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <FaChevronRight className="w-3 h-3 mx-2" />
            <span className="font-semibold text-white">Policies</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight">
            <span className="text-sky-300">Khulna</span> University of
            Agriculture Policies
          </h1>
          <p className="mt-3 text-xl text-sky-200">
            Official guidelines, rules, and regulations governing the
            university's operations, academic life, and research activities.
          </p>
        </div>
      </div>

      {/* Main Content Layout (Sidebar + Content) */}
      <div className="grid grid-cols-1 gap-10 px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:grid-cols-4">
        {/* --- 1. Policy Sidebar (Table of Contents) --- */}
        <aside className="lg:col-span-1">
          <div className="sticky p-6 bg-white border border-gray-100 shadow-lg top-10 rounded-xl">
            <h3 className="pb-2 mb-4 text-xl font-bold border-b text-sky-700">
              Policy Categories
            </h3>
            <nav className="space-y-2">
              {policies.map((policy) => (
                <Link
                  key={policy.id}
                  href={`#${policy.id}`}
                  className="flex items-center p-3 text-gray-700 transition duration-150 rounded-lg hover:bg-sky-50 hover:text-sky-600"
                >
                  <policy.icon className="w-5 h-5 mr-3 text-sky-500" />
                  <span className="text-base font-medium">{policy.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* --- 2. Policy Content Area --- */}
        <main className="space-y-12 lg:col-span-3">
          {/* Policy Section: Admission Policy */}
          <section
            id="admissions"
            className="p-8 bg-white border-t-4 shadow-lg border-sky-500 rounded-xl"
          >
            <h2 className="flex items-center mb-4 text-3xl font-bold text-gray-800">
              <FaBook className="w-6 h-6 mr-3 text-sky-500" /> Admission Policy
            </h2>
            <p className="mb-6 text-gray-600">
              This policy outlines the criteria and procedures for the admission
              of undergraduate and postgraduate students. All applicants must
              meet the minimum GPA requirements and pass the university's
              standardized entry test.
            </p>
            <h4 className="mb-3 text-xl font-semibold text-gray-700">
              Key Points:
            </h4>
            <ul className="pl-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>
                Eligibility based on previous academic performance and
                standardized test scores.
              </li>
              <li>
                Separate quotas for different faculties (e.g., Veterinary, Crop
                Science, Fisheries).
              </li>
              <li>
                The Academic Council reserves the right to make final admission
                decisions.
              </li>
            </ul>
            <a
              href="/documents/admissions.pdf"
              target="_blank"
              className="inline-flex items-center mt-4 font-medium transition duration-150 text-sky-600 hover:text-sky-800"
            >
              View Full Admission PDF{" "}
              <FaChevronRight className="w-4 h-4 ml-1" />
            </a>
          </section>

          {/* Policy Section: Research Ethics & Guidelines */}
          <section
            id="research"
            className="p-8 bg-white border-t-4 shadow-lg border-sky-500 rounded-xl"
          >
            <h2 className="flex items-center mb-4 text-3xl font-bold text-gray-800">
              <FaSeedling className="w-6 h-6 mr-3 text-sky-500" /> Research
              Ethics & Guidelines
            </h2>
            <p className="mb-6 text-gray-600">
              Ensuring integrity, objectivity, and transparency in all
              university research endeavors, particularly in field trials and
              laboratory experiments involving bio-resources.
            </p>
            <h4 className="mb-3 text-xl font-semibold text-gray-700">
              Compliance Requirements:
            </h4>
            <ol className="pl-4 space-y-2 text-gray-600 list-decimal list-inside">
              <li>
                Mandatory approval from the Institutional Review Board (IRB) for
                all human/animal subject research.
              </li>
              <li>
                Strict adherence to biosafety protocols for genetic modification
                research.
              </li>
              <li>
                Data retention for a minimum of five years after publication.
              </li>
            </ol>
          </section>

          {/* Policy Section: Student Code of Conduct */}
          <section
            id="conduct"
            className="p-8 bg-white border-t-4 shadow-lg border-sky-500 rounded-xl"
          >
            <h2 className="flex items-center mb-4 text-3xl font-bold text-gray-800">
              <FaBook className="w-6 h-6 mr-3 text-sky-500" /> Student Code of
              Conduct
            </h2>
            <p className="mb-6 text-gray-600">
              The Code of Conduct defines the expected standards of behavior for
              all enrolled students, promoting a disciplined and respectful
              learning environment.
            </p>
            <h4 className="mb-3 text-xl font-semibold text-gray-700">
              Disciplinary Action applies to:
            </h4>
            <ul className="pl-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Academic dishonesty (plagiarism, cheating).</li>
              <li>Any form of harassment or bullying.</li>
              <li>Vandalism or misuse of university property.</li>
            </ul>
          </section>

          {/* Placeholder for more policies */}
          <div className="p-6 text-center bg-gray-100 border border-gray-300 border-dashed rounded-lg">
            <p className="text-lg text-gray-500">
              The complete list of policies (e.g., IT Security, Faculty
              Promotions) is available in the University Secretary's office.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PolicyPage;
