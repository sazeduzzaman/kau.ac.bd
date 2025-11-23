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
import Image from "next/image";

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
                <div>
                  <p>
                    <strong>Temporary Campus:</strong> <br />
                    <span>
                      Khulna Agricultural University Daulatpur Collegiate
                      School, Deyana Daulatpur, Khulna, Bangladesh.
                    </span>
                  </p>
                  <p className="mt-2">
                    <strong>Khulna Office:</strong> <br />
                    <span>
                      Khulna Agricultural University House # 200 (First Phase)
                      Road # 12, Sonadanga R/A Sonadanga, Khulna, Bangladesh.
                    </span>
                  </p>
                  <p className="mt-2">
                    <strong>Guest house:</strong> <br />
                    <span>
                      Khulna Agricultural University House # 495 (1st Floor)
                      Road # 32 Mohakhali DOHS, Dhaka, Bangladesh.
                    </span>
                  </p>
                </div>
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
                  "Leave Application",
                  "খুকৃবি পর্যায়োন্নয়ন আবেদনপত্র ফরম",
                  "যৌন নিপীড়ন প্রতিরোধকল্পে গঠিত অভিযোগ কমিটি",
                  "Tender",
                  "Ethical Approval Application",
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
              <div>
                <h6 className="mb-4 font-serif text-lg font-bold">
                  Get in touch
                </h6>
                <span>
                  Md. Rezaul Islam <br /> <span>Registrar (In Charge)</span>
                </span>
                <div className="flex items-center gap-3 mt-2">
                  <FaPhoneAlt className="shrink-0" />
                  <p>
                    <a href="call:+880 9614482482">+880 9614482482</a>
                  </p>
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

              <div className="mt-5">
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
                <div className="mt-5">
                  <Image
                    width={200}
                    height={50}
                    style={{ objectFit: "contain" }}
                    priority
                    src="/images/footer-call.jpg"
                    alt="QR Code"
                  ></Image>
                </div>
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
