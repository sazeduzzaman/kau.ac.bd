"use client";

import React, { useState } from "react";
import { ArrowDown, FileText } from "lucide-react";

interface Tender {
  slNo: number;
  tenderId: string;
  refNo: string;
  description: string;
  method: string;
  publishingDate: string;
  publishingTime: string;
  closingDate: string;
  closingTime: string;
  pdfUrl: string;
}

const tendersData: Tender[] = [
  {
    slNo: 1,
    tenderId: "1151136",
    refNo: "37.01.4703.057.41.020.25.1347",
    description:
      "Amendment for Procurement of AC, Computer and Computer related parts.",
    method: "NCT, OTM",
    publishingDate: "16 Sep 2025",
    publishingTime: "10:30 am",
    closingDate: "06 Oct 2025",
    closingTime: "12:00 pm",
    pdfUrl: "#",
  },
  {
    slNo: 2,
    tenderId: "1122277",
    refNo: "37.01.4703.057.42.021.25.723",
    description:
      "Procurement and Supply of Staff Uniform for Khulna Agricultural University.",
    method: "NCT, OTM",
    publishingDate: "04 Jun 2025",
    publishingTime: "10:00 am",
    closingDate: "19 Jun 2025",
    closingTime: "12:00 pm",
    pdfUrl: "#",
  },
  {
    slNo: 3,
    tenderId: "1151136",
    refNo: "37.01.4703.057.41.020.25.1347",
    description:
      "Amendment for Procurement of AC, Computer and Computer related parts.",
    method: "NCT, OTM",
    publishingDate: "16 Sep 2025",
    publishingTime: "10:30 am",
    closingDate: "06 Oct 2025",
    closingTime: "12:00 pm",
    pdfUrl: "#",
  },
  {
    slNo: 4,
    tenderId: "1122277",
    refNo: "37.01.4703.057.42.021.25.723",
    description:
      "Procurement and Supply of Staff Uniform for Khulna Agricultural University.",
    method: "NCT, OTM",
    publishingDate: "04 Jun 2025",
    publishingTime: "10:00 am",
    closingDate: "19 Jun 2025",
    closingTime: "12:00 pm",
    pdfUrl: "#",
  },
  {
    slNo: 5,
    tenderId: "1151136",
    refNo: "37.01.4703.057.41.020.25.1347",
    description:
      "Amendment for Procurement of AC, Computer and Computer related parts.",
    method: "NCT, OTM",
    publishingDate: "16 Sep 2025",
    publishingTime: "10:30 am",
    closingDate: "06 Oct 2025",
    closingTime: "12:00 pm",
    pdfUrl: "#",
  },
  {
    slNo: 6,
    tenderId: "1122277",
    refNo: "37.01.4703.057.42.021.25.723",
    description:
      "Procurement and Supply of Staff Uniform for Khulna Agricultural University.",
    method: "NCT, OTM",
    publishingDate: "04 Jun 2025",
    publishingTime: "10:00 am",
    closingDate: "19 Jun 2025",
    closingTime: "12:00 pm",
    pdfUrl: "#",
  },
];

export default function TenderInfo() {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(5); // show 5 rows initially

  // Filter tenders based on search input
  const filteredTenders = tendersData.filter((tender) =>
    [tender.tenderId, tender.refNo, tender.description, tender.method]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const visibleTenders = filteredTenders.slice(0, visibleCount);

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <div
        className="relative px-4 py-10 text-white bg-emerald-900 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url("/images/skyblue-footer-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 opacity-100 bg-site-primary/50"></div>
        <div className="relative z-10 max-w-5xl py-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-site-primary backdrop-blur-sm">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            All Tenders
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white capitalize md:text-xl">
            Stay updated with the latest tenders from Khulna Agricultural
            University.
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <input
          type="text"
          placeholder="Search tenders by ID, Ref No, or Description..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisibleCount(5); // reset visible count when search changes
          }}
          className="w-full px-4 py-3 mb-6 border rounded-lg shadow-sm input focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-500"
        />

        {/* Table Container */}
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full text-left border-collapse">
            <thead className="sticky top-0 text-white bg-site-primary">
              <tr>
                <th className="w-12 px-4 py-3 text-center">#</th>
                <th className="w-32 px-4 py-3">Tender ID</th>
                <th className="w-48 px-4 py-3">Ref No.</th>
                <th className="px-4 py-3">Description</th>
                <th className="w-32 px-4 py-3">Method</th>
                <th className="w-32 px-4 py-3">Publishing</th>
                <th className="w-32 px-4 py-3">Closing</th>
                <th className="w-16 px-4 py-3 text-center">PDF</th>
              </tr>
            </thead>
            <tbody>
              {visibleTenders.map((tender, idx) => (
                <tr
                  key={tender.slNo + idx}
                  className={`transition-all duration-300 hover:shadow-md rounded-lg border-b border-gray-200 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-center">
                    {tender.slNo}
                  </td>
                  <td className="px-4 py-3">{tender.tenderId}</td>
                  <td className="px-4 py-3 break-words">{tender.refNo}</td>
                  <td className="px-4 py-3">{tender.description}</td>
                  <td className="px-4 py-3">{tender.method}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {tender.publishingDate}
                      </span>
                      <span className="text-xs text-gray-500">
                        {tender.publishingTime}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-medium">{tender.closingDate}</span>
                      <span className="text-xs text-gray-500">
                        {tender.closingTime}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <a
                      href={tender.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 text-teal-700 transition-all rounded-lg bg-teal-50 hover:bg-teal-100 hover:text-teal-900"
                      title="Download PDF"
                    >
                      <FileText size={20} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Load More / Pagination */}
        {visibleCount < filteredTenders.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 5)}
              className="px-6 py-3 font-semibold text-white transition-all rounded-lg shadow-lg cursor-pointer bg-site-primary hover:bg-teal-700"
            >
              Load More
              <ArrowDown className="inline-block w-4 h-4 ml-2" />
            </button>
          </div>
        )}

        {/* No results */}
        {filteredTenders.length === 0 && (
          <p className="mt-6 text-center text-gray-500">No tenders found.</p>
        )}
      </div>
    </div>
  );
}
