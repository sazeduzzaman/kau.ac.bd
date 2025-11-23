import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaAngleDoubleRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* <div className="text-white  bg-[#00382E] footer-bg-secondary"> */}
      <div className="text-white bg-site-primary">
        <footer className="container px-4 py-16 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* COLUMN 1 */}
            <div>
              <h6 className="relative inline-block mb-6 font-serif text-xl font-bold">
                Find Us
                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
              </h6>

              <div className="space-y-5 text-sm leading-relaxed opacity-90">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-lg mt-1 shrink-0 text-[#fff]" />
                  <p>
                    <strong>Temporary Campus:</strong> <br />
                    Khulna Agricultural University Daulatpur Collegiate School,
                    Deyana Daulatpur, Khulna, Bangladesh.
                  </p>
                </div>

                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-lg mt-1 shrink-0 text-[#fff]" />
                  <p>
                    <strong>Khulna Office:</strong> <br />
                    House #200 (1st Phase), Road #12, Sonadanga R/A, Khulna.
                  </p>
                </div>

                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-lg mt-1 shrink-0 text-[#fff]" />
                  <p>
                    <strong>Guest House:</strong> <br />
                    House #495 (1st Floor), Road #32, Mohakhali DOHS, Dhaka.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div>
              <h6 className="relative inline-block mb-6 font-serif text-xl font-bold">
                Departmental Sites
                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
              </h6>

              <ul className="space-y-3 text-sm opacity-90">
                {[
                  "Business Administration",
                  "Computer Science & Engineering",
                  "Software Engineering",
                  "AI & Data Science",
                  "Electrical & Electronic Engineering",
                  "English",
                  "Journalism & Media Communication",
                  "Law",
                  "Sociology & Anthropology",
                  "Textile Engineering",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition-all hover:translate-x-1 hover:text-[#fff]"
                    >
                      <FaAngleDoubleRight className="text-xs" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div>
              <h6 className="relative inline-block mb-6 font-serif text-xl font-bold">
                Useful Links
                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
              </h6>

              <ul className="space-y-3 text-sm opacity-90">
                {[
                  "Leave Application",
                  "খুকৃবি পর্যায়োন্নয়ন আবেদনপত্র ফরম",
                  "যৌন নিপীড়ন প্রতিরোধকল্পে গঠিত অভিযোগ কমিটি",
                  "Tender",
                  "Ethical Approval Application",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition-all hover:translate-x-1 hover:text-[#fff]"
                    >
                      <FaAngleDoubleRight className="text-xs" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div>
              <h6 className="relative inline-block mb-6 font-serif text-xl font-bold">
                Get in Touch
                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
              </h6>

              <p className="text-sm opacity-90">
                Md. Rezaul Islam <br />
                <span>Registrar (In Charge)</span>
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex gap-3">
                  <FaPhoneAlt className="text-[#fff]" />
                  <a href="tel:+8809614482482" className="hover:text-[#fff]">
                    +880 9614482482
                  </a>
                </div>

                <div className="flex gap-3">
                  <FaEnvelope className="text-[#fff]" />
                  <Link
                    href="mailto:admission@kau.edu.bd"
                    className="hover:underline hover:text-[#fff]"
                  >
                    admission@kau.edu.bd
                  </Link>
                </div>
              </div>

              <h6 className="mt-8 mb-4 font-serif text-lg font-bold">
                Follow Us
              </h6>
              <div className="flex gap-3">
                {[
                  FaFacebookF,
                  FaYoutube,
                  FaTwitter,
                  FaLinkedinIn,
                  FaInstagram,
                ].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="p-2 border border-white/40 rounded-md hover:bg-white hover:text-[#004d40] transition"
                  >
                    <Icon size={15} />
                  </Link>
                ))}
              </div>

              <div className="mt-6">
                <Image
                  width={200}
                  height={60}
                  src="/images/footer-call.jpg"
                  alt="QR Code"
                  className="rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </footer>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container flex flex-col items-center justify-between px-4 py-6 mx-auto text-sm md:flex-row opacity-80">
            <p>
              © 2003-2025{" "}
              <span className="text-[#fff]">
                Khulna Agricultural University
              </span>
              . All Rights Reserved.
            </p>
            <p>
              Developed By <span className="text-[#fff]">Digixsolve</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
