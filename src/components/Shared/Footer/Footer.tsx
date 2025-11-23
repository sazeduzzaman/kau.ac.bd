import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaAngleDoubleRight,
} from "react-icons/fa";
import BottomBar from "./BottomBar";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="text-white bg-site-primary footer-bg-secondary">
        <footer className="container px-4 mx-auto py-14">
          <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Find Us */}
            <div className="flex flex-col gap-4">
              <h6 className="mb-2 font-serif text-lg font-bold">Find Us</h6>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-lg shrink-0" />
                <p>
                  Khulna Agricultural University, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0" />
                <p>+880 9614482482</p>
              </div>

              <div className="text-gray-200 pl-7">
                <p>01324713503, 01324713502, 01324713504,</p>
                <p>01324713505, 01324713506, 01324713507,</p>
                <p>01324713508</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="shrink-0" />
                <Link
                  href="mailto:admission@kau.edu.bd"
                  className="hover:underline"
                >
                  admission@kau.edu.bd
                </Link>
              </div>
            </div>

            {/* Column 2: Departmental Sites */}
            <div>
              <h6 className="mb-4 font-serif text-lg font-bold">
                Departmental Sites
              </h6>
              <ul className="space-y-2">
                {[
                  "Business Administration",
                  "Computer Science And Engineering",
                  "Software Engineering",
                  "Artificial Intelligence & Data Science",
                  "Electrical And Electronic Engineering",
                  "English",
                  "Journalism And Media Communication",
                  "Law",
                  "Sociology And Anthropology",
                  "Textile Engineering",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition-all duration-300 hover:ml-2"
                    >
                      <FaAngleDoubleRight className="text-xs" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div>
              <h6 className="mb-4 font-serif text-lg font-bold">
                Useful Links
              </h6>
              <ul className="space-y-2">
                {[
                  "Convocation",
                  "Archived Website",
                  "STI",
                  "ITD",
                  "FAQ",
                  "Forms",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition-all duration-300 hover:ml-2"
                    >
                      <FaAngleDoubleRight className="text-xs" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in touch & Follow Us */}
            <div>
              <h6 className="mb-4 font-serif text-lg font-bold">
                Get in touch
              </h6>
              <ul className="mb-8 space-y-2">
                {["Contact Us", "Campus Map", "Photo Gallery"].map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="flex items-center gap-2 transition-all duration-300 hover:ml-2"
                      >
                        <FaAngleDoubleRight className="text-xs" /> {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              <h6 className="mb-4 font-serif text-lg font-bold">Follow Us</h6>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="border border-white p-2 hover:bg-white hover:text-[#006837] transition-colors"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="border border-white p-2 hover:bg-white hover:text-[#006837] transition-colors"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="#"
                  className="border border-white p-2 hover:bg-white hover:text-[#006837] transition-colors"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="border border-white p-2 hover:bg-white hover:text-[#006837] transition-colors"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="#"
                  className="border border-white p-2 hover:bg-white hover:text-[#006837] transition-colors"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white/30">
          <div className="container flex flex-col items-center justify-between px-4 py-6 mx-auto text-sm md:flex-row">
            <p>
              © 2003-2025{" "}
              <span className="text-[#4ade80]">
                Khulna Agricultural University
              </span>
              . All Rights Reserved.
            </p>
            <p>
              Developed By <span className="text-[#4ade80]">Digixsolve</span>
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
