import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const MobileContact = ({ siteData }: any) => {
  const infoEmail = siteData?.contact?.emails[0]?.email;
  const PrimaryEmail = siteData?.contact?.emails[1]?.email;
  const PrimaryPhone = siteData?.contact?.phones[0]?.phone;
  const addressEn = siteData?.contact?.addresses[0].address;

  return (
    <div>
      <h4 className="mb-3 text-lg font-semibold text-gray-800">Contact Info</h4>

      <ul className="space-y-3 text-sm text-gray-700">
        <li className="flex items-center gap-3">
          <FaPhoneAlt className="text-[#498dbd]" />
          <Link href={`tel:${PrimaryPhone ?? ""}`}>
            {PrimaryPhone ?? "Not found"}
          </Link>
        </li>

        <li className="flex items-center gap-3">
          <FaEnvelope className="text-[#498dbd]" />
          <Link href={`mailto:${PrimaryEmail ?? ""}`}>
            {PrimaryEmail ?? "Not found"}
          </Link>
        </li>

        <li className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[#498dbd]" size={20} />
          {addressEn}
        </li>

        <li className="flex items-center gap-3">
          <FaEnvelope className="text-[#498dbd]" />
          <Link href={`mailto:${infoEmail ?? ""}`}>
            {infoEmail ?? "Not found"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileContact;
