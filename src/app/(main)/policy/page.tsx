import React from "react";
import Link from "next/link";
import { FaBook, FaSeedling, FaChevronRight } from "react-icons/fa"; // Icons for visual appeal
import Policy from "@/components/Policy/Policy";

// Define the Policy structure for the Table of Contents (TOC)

const PolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Policy />
    </div>
  );
};

export default PolicyPage;
