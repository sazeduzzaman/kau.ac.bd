"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";

/* Only fields that can become tabs */
const TAB_FIELDS = new Set([
  "bio",
  "education",
  "experience",
  "scholarship",
  "research_interest",
  "research",
  "teaching",
  "publications",
]);

/* Convert key to label */
const labelFromKey = (key: string) =>
  key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const MemberDetails = ({ slug, childSlug, id }: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("");
  const [activeSubTab, setActiveSubTab] = useState<string>("");
  const [isMobileTabOpen, setIsMobileTabOpen] = useState(false);

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/${slug}/${childSlug}/${id}`;

  /* ---------------- Fetch Data ---------------- */
  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await fetch(apiUrl);
        const json = await res.json();
        setData(json);

        const member = json?.member || {};
        const firstTab = Object.keys(member).find((k) => TAB_FIELDS.has(k));
        if (firstTab) setActiveTab(firstTab);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [apiUrl]);

  /* Reset sub-tab when main tab changes */
  useEffect(() => {
    setActiveSubTab("");
  }, [activeTab]);

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    setIsMobileTabOpen(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  const member = data?.member || {};

  /* ---------------- Dynamic Tabs ---------------- */
  const tabs = Object.keys(member).filter((key) => TAB_FIELDS.has(key));

  const noData = (
    <div className="flex flex-col items-center justify-center py-8 space-y-3 md:py-10 md:space-y-4">
      <img
        src="/images/no-data-found.png"
        alt="No data found"
        className="w-48 h-auto opacity-80 md:w-64"
      />
      <p className="text-sm text-gray-500 md:text-base">No data available</p>
    </div>
  );

  /* ---------------- Card UI ---------------- */
  const DataCard = ({ item }: { item: any }) => {
    const CardContent = (
      <div className="flex flex-col justify-between h-full p-3 transition bg-white border rounded-lg shadow-sm md:p-4 md:rounded-xl hover:shadow-md">
        <h4 className="text-sm font-semibold text-gray-800 md:text-base line-clamp-2">
          {item.title}
        </h4>

        {item.journal_or_conference_name && (
          <p className="pt-2 text-xs text-gray-600 md:pt-3 md:text-sm line-clamp-2">
            {item.journal_or_conference_name}
          </p>
        )}

        {item.year && (
          <span className="inline-block pt-1 mt-2 text-xs text-white border-0 badge bg-sky-600 md:mt-3">
            Year: {item.year}
          </span>
        )}
      </div>
    );

    /* If URL exists → clickable */
    if (item?.url) {
      return (
        <Link
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {CardContent}
        </Link>
      );
    }

    /* No URL → non-clickable */
    return <div className="h-full">{CardContent}</div>;
  };

  /* ---------------- Render Content ---------------- */
  const renderContent = () => {
    const value = member[activeTab];

    if (!value) return noData;

    /* STRING / TEXT */
    if (typeof value === "string") {
      return (
        <div className="text-sm text-gray-700 whitespace-pre-line md:text-base">
          {value}
        </div>
      );
    }

    /* OBJECT (ex: publications) */
    if (typeof value === "object" && !Array.isArray(value)) {
      const subTabs = Object.keys(value);
      if (!subTabs.length) return noData;

      const currentSubTab = activeSubTab || subTabs[0];
      const subData = value[currentSubTab];

      return (
        <>
          {/* Sub Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1 mb-4 border-b border-sky-600 md:gap-3 md:mb-6">
            {subTabs.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubTab(sub)}
                className={`px-2 py-1.5 text-xs font-medium capitalize transition md:px-4 md:py-2 md:text-sm -mb-0.5
                  ${
                    currentSubTab === sub
                      ? "border-b-2 md:border-b-3 border-sky-600 text-sky-600"
                      : "text-gray-500 hover:text-sky-600"
                  }`}
              >
                {labelFromKey(sub)}
              </button>
            ))}
          </div>

          {/* Sub Tab Content */}
          {Array.isArray(subData) && subData.length ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {subData.map((item: any, i: number) => (
                <DataCard key={i} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 space-y-3 md:py-10 md:space-y-4">
              <img
                src="/images/no-data-found.png"
                alt="No data found"
                className="w-48 h-auto opacity-80 md:w-64"
              />
              <p className="text-sm text-gray-500 md:text-base">
                No data available
              </p>
            </div>
          )}
        </>
      );
    }

    return noData;
  };

  // Get the active tab label
  const activeTabLabel = activeTab ? labelFromKey(activeTab) : "Select Tab";

  return (
    <div className="container px-3 mx-auto mt-3 space-y-6 md:px-6 md:mt-5 md:space-y-12">
      {/* Profile */}
      <div className="relative flex flex-col items-center gap-4 p-4 overflow-hidden text-black border shadow-md bg-white/80 backdrop-blur-xl md:flex-row md:items-center md:gap-6 md:p-8 rounded-2xl md:rounded-3xl border-sky-100">
        {/* Decorative gradient */}
        <div className="absolute hidden w-64 h-64 rounded-full -top-20 -right-20 bg-sky-200/40 blur-3xl md:block" />

        {/* Profile Image */}
        <div className="relative shrink-0">
          <img
            src={member.image || "/images/no-profile.avif"}
            alt={member.name}
            className="object-cover w-32 h-32 transition-transform duration-300 shadow-md md:w-40 md:h-40 rounded-xl md:rounded-2xl ring-2 md:ring-4 ring-sky-500 hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="relative z-10 flex-1 space-y-2 text-center md:text-left">
          <h1 className="text-xl font-extrabold text-site-primary md:text-2xl lg:text-3xl">
            {member.name}
          </h1>

          <p className="text-base font-semibold text-sky-600 md:text-lg">
            {member.designation}
          </p>

          <div className="space-y-1 md:space-y-2">
            {member.phone && (
              <p className="flex flex-col items-center gap-2 sm:flex-row md:justify-start text-site-primary">
                <span className="flex items-center gap-2">
                  <span className="p-1.5 rounded-full bg-sky-100 text-sky-600 md:p-2">
                    <FaPhoneAlt className="text-sm md:text-base" />
                  </span>
                  <span className="text-sm md:text-base">Phone:</span>
                </span>
                <Link
                  href={`tel:${member.phone}`}
                  className="text-sm hover:underline md:text-base"
                >
                  {member.phone}
                </Link>
              </p>
            )}

            {member.email && (
              <p className="flex flex-col items-center gap-2 sm:flex-row md:justify-start text-site-primary">
                <span className="flex items-center gap-2">
                  <span className="p-1.5 rounded-full bg-sky-100 text-sky-600 md:p-2">
                    <FaEnvelope className="text-sm md:text-base" />
                  </span>
                  <span className="text-sm md:text-base">Email:</span>
                </span>
                <Link
                  href={`mailto:${member.email}`}
                  className="text-sm break-all hover:underline md:text-base"
                >
                  {member.email}
                </Link>
              </p>
            )}

            {member.address && (
              <p className="flex flex-col items-center gap-2 sm:flex-row md:justify-start text-site-primary">
                <span className="flex items-center gap-2">
                  <span className="p-1.5 rounded-full bg-sky-100 text-sky-600 md:p-2">
                    📍
                  </span>
                  <span className="text-sm md:text-base">Address:</span>
                </span>
                <span className="text-sm md:text-base">{member.address}</span>
              </p>
            )}
          </div>

          <p className="text-xs font-medium tracking-wide text-gray-600 md:text-sm">
            Khulna Agricultural University
          </p>
        </div>

        {/* University Logo */}
        <div className="relative mt-2 shrink-0 md:mt-0">
          <img
            src="/images/logo-main.png"
            alt="Khulna Agricultural University"
            className="h-16 transition opacity-90 grayscale hover:grayscale-0 md:h-20"
          />
        </div>
      </div>

      {/* Tabs - Mobile Dropdown */}
      <div className="md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsMobileTabOpen(!isMobileTabOpen)}
            className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white transition bg-sky-600 rounded-t-md hover:bg-sky-700"
          >
            <span>{activeTabLabel}</span>
            <FaChevronDown
              className={`ml-2 transition-transform duration-200 ${
                isMobileTabOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isMobileTabOpen && (
            <div className="absolute left-0 right-0 z-50 mt-1 overflow-hidden bg-white border border-gray-200 shadow-lg rounded-b-md">
              {tabs.map((key) => (
                <button
                  key={key}
                  onClick={() => handleTabSelect(key)}
                  className={`block w-full px-4 py-3 text-left text-sm transition-colors
                    ${
                      activeTab === key
                        ? "bg-sky-100 text-sky-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {labelFromKey(key)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tabs - Desktop */}
      <div className="hidden pb-0 mb-0 border-b border-gray-200 bg-sky-200 md:block">
        <nav className="flex w-full flex-nowrap">
          {tabs.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 text-center px-4 py-5 text-sm font-medium transition-colors duration-200 rounded-t-md
                ${
                  activeTab === key
                    ? "bg-sky-600 text-white shadow"
                    : "text-gray-600 hover:text-sky-600 hover:bg-gray-100"
                }`}
            >
              {labelFromKey(key)}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="p-3 mb-6 bg-gray-100 rounded-t-none shadow rounded-xl md:p-6 md:mb-10 md:rounded-b-3xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default MemberDetails;