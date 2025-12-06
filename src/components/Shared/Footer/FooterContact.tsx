import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const FooterContact = (siteData: any) => {
  const footerDescription = siteData.SiteData.footer_description;
  const footerContactData = siteData.SiteData.contact;

  return (
    <div className="space-y-4 text-sm opacity-90">
      <p className="text-justify">{footerDescription}</p>
      <div className="flex gap-3">
        <FaEnvelope className="mt-1 text-white" />
        <p>
          <strong className="text-md">Mail:</strong> <br />
          {footerContactData.info_email} <br />
          {footerContactData.primary_email}
        </p>
      </div>
      <div className="flex gap-3">
        <FaPhoneAlt className="mt-1 text-white" />
        <p>
          <strong className="text-md">Phone:</strong> <br />
          {footerContactData.primary_phone}
        </p>
      </div>
    </div>
  );
};

export default FooterContact;
