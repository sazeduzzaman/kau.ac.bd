"use client";
import {
  FaLeaf,
  FaPiggyBank,
  FaFish,
  FaChartLine,
  FaTools,
  FaSeedling,
} from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

// Map API short_names or slugs to icons
const getIconForFaculty = (shortName: string, slug: string) => {
  const name = shortName?.toLowerCase() || slug?.toLowerCase() || "";

  if (name.includes("vabs") || name.includes("veterinary")) {
    return <FaPiggyBank className="text-4xl text-site-accent" />;
  } else if (name.includes("ag") || name.includes("agriculture")) {
    return <FaLeaf className="text-4xl text-green-500" />;
  } else if (name.includes("fos") || name.includes("fisheries")) {
    return <FaFish className="text-4xl text-sky-500" />;
  } else if (name.includes("aeas") || name.includes("economics")) {
    return <FaChartLine className="text-4xl text-orange-500" />;
  } else if (name.includes("aet") || name.includes("engineering")) {
    return <FaTools className="text-4xl text-indigo-500" />;
  } else if (name.includes("hcs") || name.includes("horticulture")) {
    return <FaSeedling className="text-4xl text-green-600" />;
  }
  return <FaPiggyBank className="text-4xl text-site-accent" />;
};

// Get button text
const getButtonText = (shortName: string) => {
  return `Go To ${shortName || "Faculty"}`;
};

// Get description based on faculty
const getDescription = (name: string) => {
  const nameLower = name.toLowerCase();

  if (nameLower.includes("veterinary")) {
    return "Advancing animal health and biomedical research through quality education and innovation.";
  } else if (nameLower.includes("agriculture")) {
    return "Learn modern farming techniques, crop science, and sustainable agricultural practices.";
  } else if (nameLower.includes("fisheries")) {
    return "Explore marine biology, fisheries management, and ocean sciences in depth.";
  } else if (nameLower.includes("economics")) {
    return "Understand agricultural markets, economics, and business strategies.";
  } else if (nameLower.includes("engineering")) {
    return "Study irrigation systems, machinery, and sustainable agro-technology.";
  } else if (nameLower.includes("horticulture")) {
    return "Dive into crop improvement, horticulture, and plant biotechnology.";
  }
  return "Learn more about this faculty and its programs.";
};

const FacultySection = (facultyData: any) => {
  const [facultyApiData, setFacultyApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sectionTitle = facultyData.facultyData.section_title;
  const sectionSubTitle = facultyData.facultyData.section_subtitle;

  // Fetch data on component mount
  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://admin.kau.khandkershahed.com/api/v1/academics/sites"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFacultyApiData(data);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setError("Failed to load faculty data");
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <section className="px-4 pt-10 pb-24 bg-linear-to-b from-slate-50 to-white">
        <div className="mx-auto text-center max-w-7xl">
          <div className="text-3xl">Loading faculties...</div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="px-4 pt-10 pb-24 bg-linear-to-b from-slate-50 to-white">
        <div className="mx-auto text-center max-w-7xl">
          <div className="text-3xl text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  // Extract faculties from API response
  let faculties = [];

  if (facultyApiData?.groups?.[0]?.sites) {
    faculties = facultyApiData.groups[0].sites;
  }


  return (
    <section className="px-4 pt-10 pb-24 bg-linear-to-b from-slate-50 to-white">
      <div className="mx-auto text-center max-w-7xl">
        {/* Title & Subtitle */}
        <h2 className="text-5xl font-extrabold text-site-primary md:text-5xl animate-fade-in">
          {sectionTitle}
          <div className="w-32 h-1 mx-auto mt-3 rounded-full bg-linear-to-r from-white to-[#438ABA]" />
        </h2>
        <p className="pt-3 leading-tight text-black font-poppins animate-slide-up">
          {sectionSubTitle}
        </p>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {faculties.map((faculty: any, index: number) => (
            <div
              key={faculty.id || index}
              className={`
                flex flex-col h-full p-8 transition-all duration-300 
                bg-white border border-gray-100 rounded-lg shadow-sm 
                hover:shadow-2xl hover:-translate-y-2
                animate-fade-up
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-linear-to-br from-[#438ABA]/20 to-[#346f96]/20 rounded-full text-site-accent">
                {getIconForFaculty(faculty.short_name, faculty.slug)}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900 uppercase text-start">
                {faculty.name}
              </h3>

              {/* Description */}
              <p className="mb-6 text-gray-600 grow text-start">
                {faculty.short_description || getDescription(faculty.name)}
              </p>

              {/* Button */}
              <Link
                href={`/${faculty.slug}`}
                target="_blank"
                className="inline-flex items-center gap-2 font-medium text-[#438ABA] hover:gap-3 hover:text-[#346f96] transition-all"
              >
                {getButtonText(faculty.short_name)}{" "}
                <span className="text-xl">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
