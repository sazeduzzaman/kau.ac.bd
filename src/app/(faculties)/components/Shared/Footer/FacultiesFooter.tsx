// app/(faculties)/faculties/components/FacultiesFooter.tsx
import FooterAddress from "@/components/Shared/Footer/FooterAddress";
import FooterBottom from "@/components/Shared/Footer/FooterBottom";
import FooterContact from "@/components/Shared/Footer/FooterContact";
import FooterContactPerson from "@/components/Shared/Footer/FooterContactPerson";
import { fetchFooterData } from "@/lib/apis/FooterDataSet/FooterDataSet";
import { SiteSettingDataset } from "@/lib/apis/SiteInfromationDataSet/SiteInfromationDataSet";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default async function FacultiesFooter() {
  // Fetch site info
  const SiteInfoData = await SiteSettingDataset();
  const SiteData = SiteInfoData?.settings ?? {};

  // Fetch footer data with fallback for prerendering
  const footerApiResponse = await fetchFooterData().catch(() => null);
  const footerData = footerApiResponse?.data ?? {
    footer_description: "",
    footer_links: [],
    contact_person: [],
    emails: [],
    phone: [],
    addresses: [],
    social_links: [],
    copyright_text: "",
    developer_text: "",
    developer_link: "#",
    website_url: "#",
  };

  return (
    <>
      <footer className="relative text-white footer-bg-secondary">
        <div className="w-full py-16 backdrop-blur-lg">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* Column 1: About KAU */}
              <div className="p-6 transition-shadow border-white/20 rounded-2xl">
                <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                  About KAU
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
                </h6>
                <FooterContact SiteData={SiteData} />
              </div>

              {/* Column 2: Find Us */}
              <div className="p-6 transition-shadow border-white/20 rounded-2xl">
                <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                  Find Us
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
                </h6>
                <FooterAddress SiteData={SiteData} />
              </div>

              {/* Column 3: Departments */}
              <div className="p-6 transition-shadow border-white/20 rounded-2xl">
                <h6 className="relative inline-block mb-4 font-serif text-xl font-bold">
                  Departments
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-[#fff] to-[#37b46e] rounded-full"></span>
                </h6>
                <ul className="space-y-2 text-sm opacity-90">
                  {[
                    "Anatomy and Histology",
                    "Physiology",
                    "Pharmacology and Toxicology",
                    "Microbiology and Public Health",
                    "Livestock Production and Management",
                    "Pathology",
                    "Parasitology",
                    "Genetics and Animal Breeding",
                  ].map((dept) => (
                    <li key={dept}>
                      <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-2 transition-all hover:text-white hover:translate-x-1"
                      >
                        <FaAngleRight className="text-md" />
                        <span className="text-md">{dept}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Get in Touch */}
              <div className="p-6 transition-shadow border-white/20 rounded-2xl">
                <FooterContactPerson SiteData={SiteData} />
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

      {/* Footer Bottom */}
      <FooterBottom />
    </>
  );
}
