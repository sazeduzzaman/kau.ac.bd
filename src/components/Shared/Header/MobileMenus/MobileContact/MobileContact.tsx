import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const MobileContact = ({ siteData }: any) => {
  const infoEmail = siteData?.contact?.info_email;
  const PrimaryEmail = siteData?.contact?.primary_email;
  const PrimaryPhone = siteData?.contact?.primary_phone;

  const addressEn = siteData?.contact?.addresses?.temporary_campus?.en
    ? siteData.contact.addresses.temporary_campus.en.slice(18)
    : "Not found";

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
