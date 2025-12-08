import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Menu, AlignRight } from "lucide-react";
import Link from "next/link";

const ChancellorSection = () => {
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
          <div className="absolute text-white bottom-6 left-6">
            <h3 className="text-2xl font-bold tracking-wide">
              Prof. Dr. Md. Nazmul Ahsan
            </h3>
            <p className="mt-1 text-sm font-normal text-white">
              Vice-Chancellor, KAU
            </p>
          </div>
        </div>

        {/* --- Right Column (White Background) --- */}
        <div className="w-full md:w-[65%] bg-white p-8 md:p-16 flex flex-col relative z-0">
          {/* Header: Menu Icon */}

          {/* Content Wrapper */}
          <div className="flex flex-col justify-center flex-1 pr-0 md:pl-32 lg:pl-48 md:pr-12">
            <h4 className="mb-6 font-serif text-3xl font-semibold md:text-2xl text-site-primary">
              Message from the Vice Chancellor
            </h4>
            <p className="mb-6 text-justify text-gray-700 font-poppins">
              It is with immense pride and gratitude that I welcome you all to
              Khulna Agricultural University (KAU), Khulna. We stand on the
              shoulders of countless martyrs, whose sacrifices have paved the
              way for an independent Bangladesh in 1971. The recent July 2024
              student led mass movement, a watershed moment in our nation’s
              history, ignited a fire of hope and resistance among millions who
              have been fighting for a democratic Bangladesh for the last 15
              years.
            </p>
            <p className="mb-6 text-justify text-gray-700 font-poppins">
              Thousands of courageous young souls, inspired by the spirit of
              movements against all forms of discrimination, took to the streets
              to the historic ouster of the fascist regime that will forever be
              etched in our collective memory as the “Second Victory of
              Bangladesh.” We honor the memory of the over 1,500 martyrs who
              laid down their lives for our nation’s future and express our
              deepest condolences to the families of the bereaved.
            </p>
            {/* Button + Social Icons */}
            <div className="flex items-center justify-start gap-5 mt-2">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-[#438ABA] to-[#346f96] shadow-md hover:shadow-lg transition-all"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* --- The Overlapping Image (Absolute Positioned) --- */}
        <div className="relative md:absolute md:top-1/2 md:left-[35%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 w-full md:w-[320px] lg:w-[380px] px-8 md:px-0 mb-8 md:mb-0">
          <div className="relative aspect-[3/4] shadow-2xl bg-gray-200">
            <Image
              src="/images/Prof.-Dr.-Md.-Nazmul-Ahsan.jpg"
              alt="Profile Portrait"
              fill
              className="object-cover filter grayscale contrast-110" // Grayscale to match reference
            />

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChancellorSection;
