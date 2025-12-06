import React from "react";
import Link from "next/link";

interface NoDataFoundProps {
  message?: string;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({
  message = "Oops! The page you are looking for does not exist. It might have been removed or is temporarily unavailable.",
}) => {
  return (
    <div
      className="relative flex items-center justify-center w-full text-center bg-center bg-cover h-[600px]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
      }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-75" />
      <div className="z-10 max-w-3xl mx-auto">
        <h1 className="mb-4 text-white text-8xl">404</h1>
        <p className="mb-6 text-white">{message}</p>
        <Link
          href="/"
          className="px-6 py-3 text-white transition bg-green-600 rounded hover:bg-green-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NoDataFound;
