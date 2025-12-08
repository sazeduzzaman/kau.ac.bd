import { FaMapMarkerAlt } from "react-icons/fa";

const FooterAddress = ({ SiteData }: any) => {
  const WebsiteMotto = SiteData?.site_motto ?? "Not found";
  const addressEn = SiteData.contact.addresses.temporary_campus.en;
  const addressbn = SiteData.contact.addresses.temporary_campus.bn;
  return (
    <div className="space-y-4 text-sm opacity-90">
      <div className="flex gap-3">
        <FaMapMarkerAlt className="mt-1 text-white" size={22} />
        <span className="text-md">
          <strong>Temporary Campus:</strong> <br />
          <span className="mt-1">{addressEn.slice(18)}</span>
        </span>
      </div>
      <div className="flex gap-3 font-surjo">
        <FaMapMarkerAlt className="mt-1 text-white" size={22} />
        <span className="text-md">
          <strong className="text-lg">অস্থায়ী অফিস:</strong> <br />
          <span className="mt-1">{addressbn.slice(13)}</span>
        </span>
      </div>
      <div className="flex gap-3">
        <span className="text-md">{WebsiteMotto}</span>
      </div>
    </div>
  );
};

export default FooterAddress;
