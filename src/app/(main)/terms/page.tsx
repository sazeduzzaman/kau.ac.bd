import React from "react";
import Link from "next/link";
import {
  FaGavel,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChevronRight,
} from "react-icons/fa"; // Icons for legal and warning themes

const Page: React.FC = () => {
  // Current date for document versioning/last updated notice
  const lastUpdated = "October 1, 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section: Terms & Conditions */}
      <div className="py-12 text-white shadow-lg bg-sky-700">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center mb-2 text-sm text-sky-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <FaChevronRight className="w-3 h-3 mx-2" />
            <span className="font-semibold text-white">Terms & Conditions</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight">
            <span className="text-sky-300">
              Khulna University of Agriculture
            </span>{" "}
            - Terms of Use
          </h1>
          <p className="mt-3 text-xl text-sky-200">
            Please read these terms carefully. By using our services and
            accessing our digital resources, you agree to comply with and be
            bound by these terms.
          </p>
          <p className="mt-1 text-sm italic text-sky-300">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="p-8 space-y-10 bg-white border border-gray-100 shadow-2xl rounded-xl">
          {/* 1. Acceptance of Terms */}
          <section id="acceptance" className="pb-6 border-b">
            <h2 className="flex items-center mb-4 text-3xl font-bold text-gray-800">
              <FaCheckCircle className="w-6 h-6 mr-3 text-green-600" /> 1.
              Acceptance of Terms
            </h2>
            <p className="leading-relaxed text-gray-600">
              These Terms and Conditions govern your access to and use of all
              websites, digital platforms, services, and applications provided
              by Khulna University of Agriculture (KAU). By accessing or using
              our services, you confirm your acceptance of these Terms. If you
              do not agree, you must cease use immediately.
            </p>
          </section>

          {/* 2. User Obligations and Conduct */}
          <section id="obligations" className="pb-6 border-b">
            <h2 className="flex items-center mb-4 text-3xl font-bold text-gray-800">
              <FaGavel className="w-6 h-6 mr-3 text-sky-600" /> 2. User
              Obligations and Conduct
            </h2>
            <h4 className="mb-3 text-xl font-semibold text-gray-700">
              2.1 Authorized Use
            </h4>
            <ul className="pl-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>
                Users must adhere strictly to the KAU Code of Conduct and all
                applicable national laws of Bangladesh.
              </li>
              <li>
                Access to restricted academic resources is strictly limited to
                currently enrolled students, faculty, and authorized staff.
              </li>
              <li>
                Misuse of university IT resources (including phishing, hacking,
                or unauthorized data access) is strictly prohibited.
              </li>
            </ul>
            <h4 className="mt-5 mb-3 text-xl font-semibold text-gray-700">
              2.2 Intellectual Property
            </h4>
            <ul className="pl-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>
                All content, research papers, course materials, and the KAU logo
                are the intellectual property of Khulna University of
                Agriculture or its licensors.
              </li>
              <li>
                Unauthorized reproduction, distribution, or commercial use of
                university materials is expressly forbidden.
              </li>
            </ul>
          </section>

          {/* 3. Disclaimers and Limitation of Liability */}
          <section id="disclaimers" className="pb-6 border-b">
            <h2 className="flex items-center mb-4 text-3xl font-bold text-gray-800">
              <FaExclamationTriangle className="w-6 h-6 mr-3 text-red-600" /> 3.
              Disclaimers and Liability
            </h2>
            <p className="mb-4 italic leading-relaxed text-gray-600">
              The services are provided "as is" and "as available," without
              warranties of any kind.
            </p>
            <h4 className="mb-3 text-xl font-semibold text-gray-700">
              3.1 Limitation of Liability
            </h4>
            <p className="text-gray-600">
              KAU shall not be liable for any direct, indirect, incidental,
              special, consequential, or punitive damages resulting from your
              access to or use of, or inability to access or use, the services.
            </p>
          </section>

          {/* 4. Governing Law and Jurisdiction */}
          <section id="law">
            <h2 className="flex items-center mb-4 text-3xl font-bold text-gray-800">
              <FaGavel className="w-6 h-6 mr-3 text-gray-600" /> 4. Governing
              Law and Jurisdiction
            </h2>
            <p className="leading-relaxed text-gray-600">
              These Terms and Conditions shall be governed by and construed in
              accordance with the **laws of the People's Republic of
              Bangladesh**. Any disputes arising under these terms shall be
              subject to the exclusive jurisdiction of the courts located in
              Khulna, Bangladesh.
            </p>
          </section>

          {/* Contact/Action Block */}
          <div className="p-6 mt-10 border border-green-200 rounded-lg bg-green-50">
            <h3 className="mb-3 text-xl font-semibold text-green-700">
              Questions about these Terms?
            </h3>
            <p className="mb-4 text-gray-600">
              If you have any queries regarding these Terms of Use, please
              contact the University Legal Department or the Registrar's Office.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-5 py-2 text-base font-medium text-white transition duration-150 bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700"
            >
              Contact the Administration
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <div className="w-full py-6 mt-10 text-center text-gray-300 bg-sky-900">
        &copy; {new Date().getFullYear()} Khulna University of Agriculture. All
        rights reserved.
      </div>
    </div>
  );
};

export default Page;
