"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaChevronRight,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

// Interfaces for API data
interface FaqItem {
  question: string;
  answer: string;
  order: number;
}

interface FaqCategory {
  category: string;
  faqs: FaqItem[];
}

// Accordion Item Component
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out ${
        isOpen
          ? "border-l-4 border-sky-500 shadow-xl ring-2 ring-sky-100"
          : "border border-gray-100 hover:shadow-md"
      }`}
    >
      <button
        className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-800 transition duration-150 hover:text-sky-600"
        onClick={onToggle}
      >
        <span className="pr-4 text-lg">{question}</span>
        {isOpen ? (
          <FaMinus className="w-5 h-5 text-sky-600" />
        ) : (
          <FaPlus className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-5 px-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 border-t border-gray-100">
          <p className="pl-1 leading-relaxed text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

// Main FAQ Page
const FAQPage: React.FC = () => {
  const [faqData, setFaqData] = useState<FaqCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [openIndex, setOpenIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs from API
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/faqs`
        );
        const data = await res.json();

        if (data.success) {
          setFaqData(data.data);
          if (data.data.length > 0) setActiveCategory(data.data[0].category);
        }
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const activeQuestions =
    faqData.find((cat) => cat.category === activeCategory)?.faqs || [];

  const toggleAccordion = (index: number) => {
    setOpenIndex(index);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading FAQs...</p>
      </div>
    );
  }

  if (!faqData.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">No FAQs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-12 text-white shadow-lg bg-sky-700">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center mb-2 text-sm text-sky-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <FaChevronRight className="w-3 h-3 mx-2" />
            <span className="font-semibold text-white">FAQ</span>
          </div>
          <h1 className="flex items-center text-5xl font-extrabold tracking-tight">
            <FaQuestionCircle className="w-10 h-10 mr-4 text-sky-300" />
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-xl text-sky-200">
            Find quick answers to common questions about Khulna University of
            Agriculture (KAU).
          </p>
        </div>
      </div>

      {/* FAQ Layout */}
      <div className="gap-10 px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:grid lg:grid-cols-4">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky p-6 border border-gray-200 shadow-lg top-10 bg-gray-50 rounded-xl">
            <h3 className="pb-2 mb-4 text-xl font-bold border-b text-sky-700">
              Browse Categories
            </h3>
            <nav className="space-y-2">
              {faqData.map((category) => {
                const Icon =
                  category.category === "Admissions & Academic"
                    ? FaGraduationCap
                    : FaUniversity;

                return (
                  <button
                    key={category.category}
                    onClick={() => {
                      setActiveCategory(category.category);
                      setOpenIndex(0);
                    }}
                    className={`flex items-center p-3 w-full text-left rounded-lg transition duration-150 ${
                      activeCategory === category.category
                        ? "bg-sky-100 text-sky-800 font-bold border-l-4 border-sky-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3 text-sky-500" />
                    <span className="text-base font-medium">
                      {category.category}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Accordion Content */}
        <main className="lg:col-span-3">
          <h2 className="pb-3 mb-6 text-3xl font-bold text-gray-800 border-b">
            {activeCategory}
          </h2>
          {activeQuestions.length > 0 ? (
            <div className="space-y-2">
              {activeQuestions
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                  <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() => toggleAccordion(index)}
                  />
                ))}
            </div>
          ) : (
            <div className="py-10 text-center border border-gray-300 border-dashed rounded-lg bg-gray-50">
              <p className="text-lg text-gray-500">
                No questions available in this category yet.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FAQPage;
