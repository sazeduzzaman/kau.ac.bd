import React from "react";
import Link from "next/link";
import { FaDoorClosed } from "react-icons/fa";

interface NoDataFoundProps {
  message?: string;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({
  message = "We couldn't find the page you're looking for. It might have been removed or the URL is incorrect.",
}) => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen p-4 text-white bg-gray-950">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90"></div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 min-h-screen bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGZpbGwgZGF0YS1uYW1lPSJUaWxlIiBmaWxsPSIjMDEwMTBhIj48cGF0aCBkPSJNMjUgMGEyNSAyNSAwIDAgMSAwIDUwQTI1IDI1IDAgMCAxIDI1IDBaTTAgMjVhMjUgMjUgMCAwIDEgNTAgMEE1MCA1MCAwIDAgMCAwIDI1WiIvPjwvZmlsbD48L3N2Zz4=')] opacity-10 pointer-events-none"></div>

      {/* Optional: Add a subtle texture or noise effect for better aesthetics */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGZpbGwgZGF0YS1uYW1lPSJUaWxlIiBmaWxsPSIjMDEwMTBhIj48cGF0aCBkPSJNMjUgMGEyNSAyNSAwIDAgMSAwIDUwQTI1IDI1IDAgMCAxIDI1IDBaTTAgMjVhMjUgMjUgMCAwIDEgNTAgMEE1MCA1MCAwIDAgMCAwIDI1WiIvPjwvZmlsbD48L3N2Zz4=')] opacity-10 pointer-events-none"></div>

      <div className="z-20 w-full max-w-lg p-10 text-center transition duration-500 transform border border-gray-700 shadow-2xl bg-gray-800/60 backdrop-blur-md rounded-xl hover:shadow-sky-500/30">
        {/* Icon/Visual Element */}
        <FaDoorClosed className="w-20 h-20 mx-auto mb-6 text-red-500/90 drop-shadow-lg" />

        {/* Main Heading/Error Code */}
        <h1 className="mb-2 font-extrabold tracking-tight text-transparent text-9xl bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          404
        </h1>

        {/* Descriptive Message */}
        <h2 className="mb-4 text-3xl font-semibold text-gray-100">
          পৃষ্ঠা খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mb-8 text-lg font-light leading-relaxed text-gray-300">
          {message ||
            "আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি। হয়তো পৃষ্ঠাটি মুছে ফেলা হয়েছে অথবা লিঙ্কটি সঠিক নয়।"}
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-white transition duration-300 rounded-full shadow-sky-500/50 bg-sky-600 hover:bg-sky-500 hover:shadow-sky-500/50 focus:outline-none focus:ring-4 focus:ring-sky-600/50"
        >
          {/* Optional: Add a subtle icon to the button */}
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NoDataFound;
