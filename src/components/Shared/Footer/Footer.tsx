import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaAngleDoubleRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const departmentalLinks = [
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
  ];

  const usefulLinks = [
    "Leave Application",
    "খুকৃবি পর্যায়োন্নয়ন আবেদনপত্র ফরম",
    "যৌন নিপীড়ন প্রতিরোধকল্পে গঠিত অভিযোগ কমিটি",
    "Tender",
    "Ethical Approval Application",
  ];

  const socialIcons = [
    FaFacebookF,
    FaYoutube,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
  ];

  return (
    <footer className="relative text-white footer-bg-secondary">
      <div className="w-full pt-16 backdrop-blur-lg">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Find Us */}
            <div className="p-6 transition-shadow border-white/20 rounded-2xl ">
              <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                Find Us
                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
              </h6>
              <div className="space-y-4 text-sm opacity-90">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 text-white" />
                  <p>
                    <strong>Temporary Campus:</strong> <br />
                    Khulna Agricultural University Daulatpur Collegiate School,
                    Deyana Daulatpur, Khulna, Bangladesh.
                  </p>
                </div>
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 text-white" />
                  <p>
                    <strong>Khulna Office:</strong> <br />
                    House #200 (1st Phase), Road #12, Sonadanga R/A, Khulna.
                  </p>
                </div>
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 text-white" />
                  <p>
                    <strong>Guest House:</strong> <br />
                    House #495 (1st Floor), Road #32, Mohakhali DOHS, Dhaka.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Departmental Sites */}
            <div className="p-6 transition-shadow border-white/20 rounded-2xl ">
              <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                Departmental Sites
                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
              </h6>
              <ul className="space-y-2 text-sm opacity-90">
                {departmentalLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition-all hover:text-white hover:translate-x-1"
                    >
                      <FaAngleDoubleRight className="text-xs" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div className="p-6 transition-shadow border-white/20 rounded-2xl ">
              <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                Useful Links
                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
              </h6>
              <ul className="space-y-2 text-sm opacity-90">
                {usefulLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 transition-all hover:text-white hover:translate-x-1"
                    >
                      <FaAngleDoubleRight className="text-xs" /> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div className="p-6 transition-shadow border-white/20 rounded-2xl ">
              <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                Get in Touch
                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
              </h6>
              <p className="text-sm opacity-90">
                Md. Rezaul Islam <br />
                <span>Registrar (In Charge)</span>
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex gap-3">
                  <FaPhoneAlt className="mt-1" />
                  <a
                    href="tel:+8809614482482"
                    className="transition-colors hover:text-white"
                  >
                    +880 9614482482
                  </a>
                </div>
                <div className="flex gap-3">
                  <FaEnvelope className="mt-1" />
                  <Link
                    href="mailto:admission@kau.edu.bd"
                    className="transition-colors hover:text-white"
                  >
                    admission@kau.edu.bd
                  </Link>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4">
                {socialIcons.map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="p-2 bg-white/20 rounded-full hover:bg-[#37b46e] transition-colors"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>

              {/* QR Code */}
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

          {/* Bottom Bar */}
          <div className="py-6 mt-12 text-sm text-center border-t border-white/20 opacity-80">
            <p>All Rights Reserved by KAU © 2021</p>
            <p>Developed by: ICT Cell, KAU</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
