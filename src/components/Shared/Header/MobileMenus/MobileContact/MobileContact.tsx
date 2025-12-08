import FooterAddress from "@/components/Shared/Footer/FooterAddress";
import { SiteSettingDataset } from "@/lib/apis/SiteInfromationDataSet/SiteInfromationDataSet";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default async function MobileContact() {
  const SiteInfoData = await SiteSettingDataset();
  const SiteData = SiteInfoData.settings;
  return (
    <div>
      <h4 className="mb-3 text-lg font-semibold text-gray-800">Contact Info</h4>
      <ul className="space-y-3 text-sm text-gray-700">
        <li className="flex items-center gap-3">
          <FaPhoneAlt className="text-[#498dbd]" /> +880 1234 567890
        </li>
        <li className="flex items-center gap-3">
          <FaEnvelope className="text-[#498dbd]" /> info@kau.edu.bd
        </li>
        <li className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[#498dbd]" /> Khulna, Bangladesh
        </li>
      </ul>
      <div>
        <FooterAddress SiteData={SiteData} />
      </div>
    </div>
  );
}
