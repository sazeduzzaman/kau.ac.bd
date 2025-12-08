"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { VCMessage } from "@/lib/types/HomePageDataTypes/HomePageDataTypes";

interface ChancellorSectionProps {
  vcMessageData: VCMessage;
}

const ChancellorSection: React.FC<ChancellorSectionProps> = ({
  vcMessageData,
}) => {
  const {
    vc_name,
    vc_designation,
    vc_image_url,
    message_title,
    message_text,
    button_name,
    button_url,
  } = vcMessageData;
  return (
    <section className="flex items-center justify-center min-h-screen font-sans bg-gray-100 md:p-8">
      {/* Main Card Container */}
      <div className="relative  max-w-7xl bg-white  min-h-[700px] flex flex-col md:flex-row overflow-hidden rounded-lg">
        {/* --- Left Column (Purple Background) --- */}
        <div className="w-full md:w-[35%] bg-site-primary text-white p-8 md:p-12 flex flex-col d-m-none justify-between relative z-0">
          {/* Top: Logo / Brand Placeholder */}
          <div>
            {/* Blurry logo effect from image */}
            <div className="flex justify-center h-full text-3xl text-center bg-white rounded-sm w-30">
              <Image
                src="/images/logo-main.png"
                alt="Logo"
                width={100}
                height={40}
                className="my-4 "
              />
            </div>
          </div>

          {/* Bottom: Social Icons */}
          <div className="flex gap-6 mt-auto">
            <Link href="#" className="transition-colors hover:text-blue-200">
              <Facebook className="w-5 h-5 fill-current" />
            </Link>
            <Link href="#" className="transition-colors hover:text-blue-200">
              <Twitter className="w-5 h-5 fill-current" />
            </Link>
            <Link href="#" className="transition-colors hover:text-blue-200">
              <Linkedin className="w-5 h-5 fill-current" />
            </Link>
          </div>
        </div>

        {/* --- Right Column (White Background) --- */}
        <div className="w-full md:w-[65%] bg-white p-8 md:p-16 flex flex-col relative z-0">
          {/* Header: Menu Icon */}

          {/* Content Wrapper */}
          <div className="flex flex-col justify-center flex-1 pr-0 md:pl-32 lg:pl-48 md:pr-12">
            <h4 className="mb-6 font-serif text-3xl font-semibold md:text-2xl text-site-primary">
              {message_title ?? "Message from the Vice Chancellor"}
            </h4>
            <p className="mb-6 text-justify text-gray-700 font-poppins">
              {message_text ?? "No message found."}
            </p>
            {/* Button + Social Icons */}
            <div className="flex items-center justify-start gap-5 mt-2">
              <Link
                href={button_url}
                className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-[#438ABA] to-[#346f96] shadow-md hover:shadow-lg transition-all"
              >
                {button_name ?? "Read More →"} →
              </Link>
            </div>
          </div>
        </div>

        {/* --- The Overlapping Image (Absolute Positioned) --- */}
        <div className="relative md:absolute md:top-1/2 md:left-[35%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 w-full md:w-[320px] lg:w-[380px] px-8 md:px-0 mb-8 md:mb-0">
          <div className="relative aspect-[3/4] shadow-2xl bg-gray-200">
            <Image
              src={vc_image_url ?? "/images/Prof.-Dr.-Md.-Nazmul-Ahsan.jpg"}
              alt="Profile Portrait"
              fill
              className="object-cover filter grayscale contrast-110" // Grayscale to match reference
            />

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            {/* Name Overlay */}
            <div className="absolute text-white bottom-6 left-6">
              <h3 className="text-2xl font-bold tracking-wide">
                {vc_name ?? "Prof. Dr. Md. Nazmul Ahsan"}
              </h3>
              <p className="mt-1 text-sm font-normal text-white">
                {vc_designation ?? "Vice Chancellor"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChancellorSection;
