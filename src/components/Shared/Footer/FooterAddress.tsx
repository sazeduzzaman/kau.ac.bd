import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const FooterAddress = (siteData: any) => {
  const footerAddressData =
    siteData.SiteData.contact.addresses.temporary_campus;
  const WebsiteMotto = siteData.SiteData.site_motto;

  return (
    <div className="space-y-4 text-sm opacity-90">
      <div className="flex gap-3">
        <FaMapMarkerAlt className="mt-1 text-white" size={22} />
        <p className="text-md">
          <strong className="text-md">Temporary Campus:</strong> <br />
          <span className="mt-3">{footerAddressData.en.slice(18)}</span>
        </p>
      </div>
      <div className="flex gap-3 font-surjo">
        <FaMapMarkerAlt className="mt-1 text-white" />
        <p className="text-md">
          <strong className="text-lg">অস্থায়ী অফিস:</strong> <br />
          <span className="mt-3">{footerAddressData.bn.slice(13)}</span>
        </p>
      </div>
      <div className="flex gap-3">
        <p className="text-md">
          <span className="">{WebsiteMotto}</span>
        </p>
      </div>
    </div>
  );
};

export default FooterAddress;
