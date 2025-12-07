import { SiteSettingDataset } from "@/lib/apis/SiteInfromationDataSet/SiteInfromationDataSet";
import Image from "next/image";
import Link from "next/link";
import {
  FaAngleDoubleRight,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import FooterAddress from "./FooterAddress";
import FooterContact from "./FooterContact";

export default async function Footer() {
  const SiteInfoData = await SiteSettingDataset();
  const SiteData = SiteInfoData.settings;


  const usefulLinks = [
    { label: "ছুটির আবেদনপত্র", href: "/images/pdf/leave-application.pdf" },
    {
      label: "খুকৃবি পর্যায়োন্নয়ন আবেদনপত্র ফরম",
      href: "/images/pdf/পর্যায়োন্নয়নের-আবেদনপত্র.pdf",
    },
    {
      label: "যৌন নিপীড়ন প্রতিরোধকল্পে গঠিত অভিযোগ কমিটি",
      href: "/images/pdf/অভিযোগ-প্রতিকার.pdf",
    },
    { label: "টেণ্ডার তথ্য", href: "/tender-info" },
    {
      label: "নৈতিক অনুমোদন আবেদনপত্র",
      href: "/images/pdf/Ethical-Approval-Application.pdf",
    },
  ];

  const socialIcons = [
    FaFacebookF,
    FaYoutube,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
  ];

  return (
    <>
      <footer className="relative text-white footer-bg-secondary">
        <div className="w-full py-16 backdrop-blur-lg">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* Column 1: Departmental Sites */}
              <div className="p-6 transition-shadow border-white/20 rounded-2xl ">
                <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                  About KAU
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
                </h6>
                <FooterContact SiteData={SiteData} />
              </div>
              {/* Column 2: Find Us */}
              <div className="p-6 transition-shadow border-white/20 rounded-2xl ">
                <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                  Find Us
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
                </h6>
                <FooterAddress SiteData={SiteData} />
              </div>
              {/* Column 3: Useful Links */}
              <div className="p-6 transition-shadow border-white/20 rounded-2xl ">
                <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                  Useful Links
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
                </h6>
                <ul className="space-y-2 text-sm opacity-90">
                  {usefulLinks.map((item, i) => {
                    const isPDF = item.href.toLowerCase().endsWith(".pdf");

                    return (
                      <li key={i}>
                        <Link
                          href={item.href}
                          target={isPDF ? "_blank" : "_self"}
                          rel={isPDF ? "noopener noreferrer" : ""}
                          className="flex items-center gap-2 transition-all hover:text-white hover:translate-x-1 font-surjo"
                        >
                          <FaAngleDoubleRight className="text-md" />{" "}
                          <span className="text-lg">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
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
                    <Link
                      href="tel:+8809614482482"
                      className="transition-colors hover:text-white"
                    >
                      +880 9614482482
                    </Link>
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
          </div>
        </div>
      </footer>
      <footer className="w-full py-5 mx-auto overflow-hidden text-center text-white bg-teal-900">
        <p>All Rights Reserved by KAU © 2021. Developed by: ICT Cell, KAU</p>
      </footer>
    </>
  );
}
