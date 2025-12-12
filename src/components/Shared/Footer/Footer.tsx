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
import { FooterDataSet } from "@/lib/apis/FooterDataSet/FooterDataSet";
import FooterContactPerson from "./FooterContactPerson";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default async function Footer() {
  const SiteInfoData = await SiteSettingDataset();
  const FooterData = await FooterDataSet();
  const SiteData = SiteInfoData.settings;

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
              <FooterLinks SiteData={SiteData} />

              {/* Column 4: Get in Touch */}
              <div className="p-6 transition-shadow border-white/20 rounded-2xl ">
                <FooterContactPerson SiteData={SiteData} />

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
      <FooterBottom FooterData={FooterData} />
    </>
  );
}
