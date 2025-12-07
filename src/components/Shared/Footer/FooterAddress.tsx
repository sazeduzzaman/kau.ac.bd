import { FaMapMarkerAlt } from "react-icons/fa";

const FooterAddress = ({ SiteData }: any) => {
  // Safely parse the addresses JSON string
  let footerAddressData: { title: string; address: string }[] = [];
  try {
    footerAddressData = SiteData?.contact?.addresses
      ? JSON.parse(SiteData.contact.addresses)
      : [];
  } catch (error) {
    console.error("Failed to parse addresses:", error);
  }

  const WebsiteMotto = SiteData?.site_motto ?? "Not found";

  // Get English and Bangla addresses
  const enAddressObj = footerAddressData.find((addr) =>
    addr.title.includes("Temporary")
  ) || { address: "Not found" };

  const bnAddressObj = footerAddressData.find((addr) =>
    addr.title.includes("অস্থায়ী")
  ) || { address: "Not found" };

  // Format address and exclude email/web lines
  const formatAddress = (address: string, lang: "en" | "bn") =>
    address
      .split(/\r?\n/)
      .filter((line) => {
        if (lang === "en")
          return !line.startsWith("E-mail:") && !line.startsWith("Web:");
        if (lang === "bn")
          return !line.startsWith("ই-মেইল:") && !line.startsWith("ওয়বে:");
        return true;
      })
      .map((line, idx) => <div key={idx}>{line}</div>);

  return (
    <div className="space-y-4 text-sm opacity-90">
      <div className="flex gap-3">
        <FaMapMarkerAlt className="mt-1 text-white" size={22} />
        <span className="text-md">
          <strong>Temporary Campus:</strong> <br />
          <span className="mt-1">
            {formatAddress(enAddressObj.address, "en")}
          </span>
        </span>
      </div>
      <div className="flex gap-3 font-surjo">
        <FaMapMarkerAlt className="mt-1 text-white" size={22} />
        <span className="text-md">
          <strong className="text-lg">অস্থায়ী অফিস:</strong> <br />
          <span className="mt-1">
            {formatAddress(bnAddressObj.address, "bn")}
          </span>
        </span>
      </div>
      <div className="flex gap-3">
        <span className="text-md">{WebsiteMotto}</span>
      </div>
    </div>
  );
};

export default FooterAddress;
