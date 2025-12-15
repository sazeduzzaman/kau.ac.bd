"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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

  const apiUrl = `https://admin.kau.khandkershahed.com/api/v1/${slug}/${childSlug}/${id}`;

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

  if (loading) {
    return <div className="py-10 text-center">Loading...</div>;
  }

  const member = data?.member || {};

  /* ---------------- Dynamic Tabs ---------------- */
  const tabs = Object.keys(member).filter((key) => TAB_FIELDS.has(key));

  const noData = (
  <div className="flex flex-col items-center justify-center py-10 space-y-4">
    <img
      src="/images/no-data-found.png"
      alt="No data found"
      className="h-auto w-100 opacity-80"
    />
  </div>
);


  /* ---------------- Card UI ---------------- */
  const DataCard = ({ item }: { item: any }) => (
    <div className="p-4 bg-white border shadow-sm rounded-xl">
      <h4 className="font-semibold text-gray-800">{item.title}</h4>

      {item.journal_or_conference_name && (
        <p className="pt-4 text-sm text-gray-600">
          {item.journal_or_conference_name}
        </p>
      )}

      {item.year && (
        <p className="mt-3 text-xs text-white border-0 badge bg-sky-600">
          Year: {item.year}
        </p>
      )}
    </div>
  );

  /* ---------------- Render Content ---------------- */
  const renderContent = () => {
    const value = member[activeTab];

    if (!value) return noData;

    /* STRING / TEXT */
    if (typeof value === "string") {
      return <div className="text-gray-700 whitespace-pre-line">{value}</div>;
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
          <div className="flex items-center justify-center gap-3 mb-6 border-b">
            {subTabs.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubTab(sub)}
                className={` px-4 py-2 -mb-0.5 text-sm font-medium capitalize transition
                  ${
                    currentSubTab === sub
                      ? "border-b-2 border-sky-600 text-sky-600"
                      : "text-gray-500 hover:text-sky-600"
                  }`}
              >
                {labelFromKey(sub)}
              </button>
            ))}
          </div>

          {/* Sub Tab Content */}
          {Array.isArray(subData) && subData.length ? (
            <div className="grid gap-4 md:grid-cols-2">
              {subData.map((item: any, i: number) => (
                <DataCard key={i} item={item} />
              ))}
            </div>
          ) : (
            noData
          )}
        </>
      );
    }

    return noData;
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="container p-6 mx-auto mt-5 space-y-12">
      {/* Profile */}
      <div className="relative flex flex-col items-center gap-6 p-8 overflow-hidden text-black border shadow-lg bg-white/80 backdrop-blur-xl md:flex-row md:items-center md:gap-10 rounded-3xl border-sky-100">
        {/* Decorative gradient */}
        <div className="absolute w-64 h-64 rounded-full -top-20 -right-20 bg-sky-200/40 blur-3xl" />

        {/* Profile Image */}
        <div className="relative shrink-0">
          <img
            src={member.image || "/images/no-profile.avif"}
            alt={member.name}
            className="object-cover w-40 h-40 transition-transform duration-300 shadow-md rounded-2xl ring-4 ring-sky-500 hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="relative z-10 flex-1 space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-site-primary">
            {member.name}
          </h1>

          <p className="text-lg font-semibold text-sky-600">
            {member.designation}
          </p>

          <div className="space-y-2">
            {member.phone && (
              <p className="flex items-center justify-center gap-3 md:justify-start text-site-primary">
                <span className="p-2 rounded-full bg-sky-100 text-sky-600">
                  <FaPhoneAlt />
                </span>
                <Link href={`tel:${member.phone}`} className="hover:underline">
                  {member.phone}
                </Link>
              </p>
            )}

            {member.email && (
              <p className="flex items-center justify-center gap-3 md:justify-start text-site-primary">
                <span className="p-2 rounded-full bg-sky-100 text-sky-600">
                  <FaEnvelope />
                </span>
                <Link
                  href={`mailto:${member.email}`}
                  className="hover:underline"
                >
                  {member.email}
                </Link>
              </p>
            )}

            {member.address && (
              <p className="flex items-center justify-center gap-3 md:justify-start text-site-primary">
                <span className="p-2 rounded-full bg-sky-100 text-sky-600">
                  📍
                </span>
                <span>{member.address}</span>
              </p>
            )}
          </div>

          <p className="text-sm font-medium tracking-wide text-gray-600 ">
            Khulna Agricultural University
          </p>
        </div>

        {/* University Logo */}
        <div className="relative shrink-0">
          <img
            src="/images/logo-main.png"
            alt="Khulna Agricultural University"
            className="h-20 transition opacity-90 grayscale hover:grayscale-0"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="pb-0 mb-0 border-b border-gray-200 bg-sky-200">
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
      <div className="p-6 mb-10 bg-gray-100 shadow rounded-b-3xl rounded-top-0">
        {renderContent()}
      </div>
    </div>
  );
};

export default MemberDetails;
